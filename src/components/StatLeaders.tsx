import { useEffect, useState } from "react";
import Papa from "papaparse";
import styled from "styled-components";
import {Link} from "react-router-dom";

type StatRow = Record<string, string>;

type StatSet = "set2" | "set3";

type Props = {
    statSet: StatSet;
};


export const LinkButton = styled(Link)`
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: .5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    background-color: #1a1a1a;
    color: white;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none;
`;

const LeadersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    color: white;
`;

const Category = styled.div`
    background-color: #2e2e2e;
    padding: 0 1rem;
    margin-bottom: 0;
`;

const CategoryTitle = styled.h4`     
    text-align: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.75rem;
    white-space: nowrap; 
`;

const PlayerRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0.3rem 0;
    border-bottom: 1px solid #444;
    font-size: 1.2rem;
`;


const ArrowButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: 20px;
    line-height: 40px;
    background-color: #555;
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: 0 10px;
    color: white;
`;


export default function StatLeadersMini({ statSet = "set3"}: Props) {
    const [batting, setBatting] = useState<StatRow[]>([]);
    const [pitching, setPitching] = useState<StatRow[]>([]);
    const [page, setPage] = useState(0);



    const STAT_URLS: Record<StatSet, { batting: string; pitching: string }> = {
        set2: {
            batting:
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQI9f3DvikuiVGwybMAzw-RWIrETSb1TXze3TVmYDvjdfUb_usdve9KnRkuXxmZNmIW3DLapKjmNg9F/pub?gid=0&single=true&output=csv",
            pitching:
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQI9f3DvikuiVGwybMAzw-RWIrETSb1TXze3TVmYDvjdfUb_usdve9KnRkuXxmZNmIW3DLapKjmNg9F/pub?gid=235178407&single=true&output=csv",
        },
        set3: {
            batting: "",
            pitching: "",
        },
    };

    const { batting: battingUrl, pitching: pitchingUrl } = STAT_URLS[statSet];

    useEffect(() => {
        const fetchSheet = (url: string, setData: (data: StatRow[]) => void) => {
            Papa.parse<StatRow>(url, {
                download: true,
                header: true,
                complete: (results) => {
                    const rows = results.data.filter(row =>
                        Object.values(row).some(cell => cell?.trim() !== "")
                    );
                    setData(rows);
                },
            });
        };

        fetchSheet(battingUrl, setBatting);
        fetchSheet(pitchingUrl, setPitching);
    }, [battingUrl, pitchingUrl]);


    const getTopPlayers = (data: StatRow[], stat: string, isLowerBetter = false) => {
        return [...data]
            .filter(row => {
                if (!row[stat] || row[stat].trim() === "") return false;
                if (stat === "ERA") {
                    const games = rowToNumber(row["G"]);
                    const innings = rowToNumber(row["IP"]);
                    if (games < 1) return false;
                    if (innings < 10) return false;
                }

                return true;
            })
            .sort((a, b) => {
                const valA = rowToNumber(a[stat]);
                const valB = rowToNumber(b[stat]);
                return isLowerBetter ? valA - valB : valB - valA;
            })
            .slice(0, 5);
    };

    const rowToNumber = (value?: string): number => {
        if (!value) return 0;
        const clean = value.trim();
        if (clean === "#DIV/0!") return 0;
        const num = parseFloat(clean);
        return isNaN(num) ? 0 : num;
    };


    const pages = [
        { title: "Hits", stat: "H", isLowerBetter: false, data: batting },
        { title: "Home Runs", stat: "HR", isLowerBetter: false, data: batting },
        { title: "RBIs", stat: "RBI", isLowerBetter: false, data: batting },
        { title: "Batting Average", stat: "AVG", isLowerBetter: false, data: batting },
        { title: "ERA", stat: "ERA", isLowerBetter: true, data: pitching },

    ];

    const currentPage = pages[page];
    const topPlayers = getTopPlayers(currentPage.data, currentPage.stat, currentPage.isLowerBetter);

    const getPlayerName = (row: StatRow) => row["Player"] || row[Object.keys(row)[0]] || "Unknown";

    return (
        <LeadersWrapper>
            <Category>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", textAlign: "center", marginTop: "-1rem", marginBottom: "1.5rem" }}>
                    <ArrowButton style={{marginRight: "20px"}} onClick={() => setPage(prev => (prev - 1 + pages.length) % pages.length)}>◀</ArrowButton>
                    <CategoryTitle style={{ margin: "0", fontSize: "2rem" }}>
                        {currentPage.title}
                    </CategoryTitle>
                    <ArrowButton style={{marginLeft: "20px"}} onClick={() => setPage(prev => (prev + 1) % pages.length)}>▶</ArrowButton>
                </div>

                {topPlayers.map((player, i) => (
                    <PlayerRow key={i}>
                        <div style={{ display: "flex", gap: "0.25rem", flexShrink: 1, minWidth: 0 }}>
                            <span style={{ width: "1.5rem", textAlign: "right" }}>{i + 1}.</span>
                            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {getPlayerName(player)}
      </span>
                        </div>
                        <div style={{ flexShrink: 0, whiteSpace: "nowrap", marginLeft: "1rem" }}>
                            {currentPage.stat === "AVG"
                                ? rowToNumber(player[currentPage.stat]).toFixed(3)
                                : currentPage.stat === "ERA"
                                    ? rowToNumber(player[currentPage.stat]).toFixed(2)
                                    : rowToNumber(player[currentPage.stat])}
                        </div>
                    </PlayerRow>
                ))}
            </Category>
            <LinkButton to="/season/stats" state={{statSet: "set3"}}>
                View Full Season Stats
            </LinkButton>
        </LeadersWrapper>
    );
}
