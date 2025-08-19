import { useEffect, useState } from "react";
import Papa from "papaparse";
import styled from "styled-components";

type StatRow = Record<string, string>;

const LeadersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    color: white;
`;

const Category = styled.div`
    background-color: #2e2e2e;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 0;
`;

const CategoryTitle = styled.h4`
    flex: 1;                 
    text-align: center;           
    font-size: 1.8rem;
    font-family: 'Bebas Neue', sans-serif;
`;


const PlayerRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0;
    border-bottom: 1px solid #444;
    font-size: 1.2rem;
`;

const ArrowButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: 20px;
    background-color: #555;
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: 0 10px;
    color: white;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; 
  margin-bottom: 0.5rem;
`;

export default function StatLeadersMini() {
    const [batting, setBatting] = useState<StatRow[]>([]);
    const [pitching, setPitching] = useState<StatRow[]>([]);
    const [page, setPage] = useState(0);

    const battingUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQo5-YjKdGLo6sZbyHyQInzOoHO0mkLSgUFr67Wpp5SBgpeme6Y3F2Z6HI9cJrE4onG3r-qBv4qtwoA/pub?gid=0&single=true&output=csv";
    const pitchingUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQo5-YjKdGLo6sZbyHyQInzOoHO0mkLSgUFr67Wpp5SBgpeme6Y3F2Z6HI9cJrE4onG3r-qBv4qtwoA/pub?gid=303745750&single=true&output=csv";

    useEffect(() => {
        const fetchSheet = (url: string, setData: (data: StatRow[]) => void) => {
            Papa.parse<StatRow>(url, {
                download: true,
                header: true,
                complete: (results) => {
                    const rows = results.data.filter((row) =>
                        Object.values(row).some((cell) => cell?.trim() !== "")
                    );
                    setData(rows);
                },
            });
        };

        fetchSheet(battingUrl, setBatting);
        fetchSheet(pitchingUrl, setPitching);
    }, []);

    const getTopPlayers = (data: StatRow[], stat: string, isLowerBetter = false) => {
        return [...data]
            .filter(row => row[stat] && !isNaN(Number(row[stat])))
            .sort((a, b) => {
                const valA = parseFloat(a[stat]);
                const valB = parseFloat(b[stat]);
                return isLowerBetter ? valA - valB : valB - valA;
            })
            .slice(0, 5);
    };

    const pages = [
        { title: "Home Runs", stat: "HR", isLowerBetter: false, data: batting },
        { title: "Batting Average", stat: "AVG", isLowerBetter: false, data: batting },
        { title: "ERA", stat: "ERA", isLowerBetter: true, data: pitching },
    ];

    const currentPage = pages[page];
    const topPlayers = getTopPlayers(currentPage.data, currentPage.stat, currentPage.isLowerBetter);

    const getPlayerName = (row: StatRow) => row["Player"] || row[Object.keys(row)[0]] || "Unknown";

    return (
        <LeadersWrapper>
            <Category>
                <TitleRow>
                    <ArrowButton onClick={() => setPage(prev => (prev - 1 + pages.length) % pages.length)}>◀</ArrowButton>
                    <CategoryTitle style={{ margin: "0 1rem" }}>{currentPage.title}</CategoryTitle>
                    <ArrowButton onClick={() => setPage(prev => (prev + 1) % pages.length)}>▶</ArrowButton>
                </TitleRow>

                {topPlayers.map((player, i) => (
                    <PlayerRow key={i}>
                        <div>
                            <span style={{ width: "1.5rem", textAlign: "right", marginRight: "3px" }}>{i + 1}.</span>
                            <span>{getPlayerName(player)}</span>
                        </div>
                        <div>
                            <span style={{ marginLeft: "auto" }}>{player[currentPage.stat]}</span>
                        </div>
                    </PlayerRow>
                ))}
            </Category>
        </LeadersWrapper>
    );
}
