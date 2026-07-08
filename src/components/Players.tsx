import {useEffect, useState} from "react";
import { players } from "../data/playerNames.ts";
import type { Player } from "../data/playerNames.ts";
import { stats } from "../data/playerStats.ts";
import type { Stat } from "../data/playerStats.ts";
import { playerHistory } from "../data/PlayerHistory.ts";
import { retiredHistory } from "../data/RetiredHistory.ts";
import { StyledHeader } from "../components/CommonStyles.ts";
import { styled, keyframes, css } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(30px);
  }
`;

interface ToggleButtonProps {
    active: boolean;
}

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const DivisionDiv = styled.div<{ $animate?: boolean }>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 22px;
    width: min(1200px, 92%);
    margin-bottom: 3rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2,1fr);
        justify-content: center;
        gap: 15px;
    }
    ${({ $animate }) =>
            $animate &&
            css`
                animation: ${fadeInUp} 0.75s ease forwards;
                animation-delay: 0.25s;
            `}
`;



const PlayerName = styled.span`
    font-weight: bold;
    text-align: center;
    color: white;
    font-size: 1.45rem;
    @media screen and (max-width: 1000px) {
        font-size: 1.4rem;
    }
`;

const Player = styled.div<{ $accent: string; $animationState?: "enter" | "exit" }>`

    position: relative;
    min-height: 240px;
    padding: 1rem;
    border-radius: 22px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    text-align: center;

    background:
            radial-gradient(circle at top, rgba(255, 255, 255, 0.35), transparent 42%),
            linear-gradient(145deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.06));
    border: 2px solid rgba(255, 255, 255, 0.35);
    border-bottom: 6px solid ${({ $accent }) => $accent};

    @media screen and (max-width: 1000px) {
        width: 180px;
        height: 180px;
    }
    
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.28), inset 0 0 0 1px rgba(255, 255, 255, 0.12);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow:
                0 18px 36px rgba(0, 0, 0, 0.38),
                0 0 18px ${({ $accent }) => $accent};
        border-color: ${({ $accent }) => $accent};
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
                120deg,
                transparent 0%,
                rgba(255, 255, 255, 0.22) 45%,
                transparent 70%
        );
        transform: translateX(-120%);
        transition: transform 0.45s ease;
    }

    &:hover::before {
        transform: translateX(120%);
    }

    ${({ $animationState }) =>
            $animationState === "enter" &&
            css`
                animation: ${fadeInUp} 1s ease 0.2s both;
            `}

    ${({ $animationState }) =>
            $animationState === "exit" &&
            css`
                animation: ${fadeOutDown} 0.35s ease both;
            `}
    
`;

const GenImage = styled.img<{ $animate?: boolean }>`
    width: 150px;
    height: 150px;   
    object-fit: cover; 
    border: 3px solid black;
    padding: 5px;
    background-color: white;
    @media screen and (max-width: 1000px) {
        width: 130px;
        height: 130px;
    }
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.9s;
    `}
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000; 
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease-in-out;
    @keyframes fadeIn {
        from { opacity: 0.5; }
        to { opacity: 1; }
    }
`;

const ModalContent = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 700px;
    max-height: 90vh;
    overflow: hidden;
    text-align: center;
    position: relative;
    border: 2px solid black;
`;

const ModalScrollWrapper = styled.div`
    max-height: calc(90vh - 4rem); 
    overflow-y: auto;
    padding: 1rem;
    &::-webkit-scrollbar {
        width: 6px;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 3px;
    right: 10px;
    background: none;
    border: none;
    color: black;
    font-size: 1.5rem;
    cursor: pointer;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-weight: bold;
    font-family: 'Archivo Black', sans-serif;
`;

const SortButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 1rem;
    @media screen and (max-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;

        & > * {
            width: 100%;  
        }
    }
`;

const SortButton = styled.button<{ $animate?: boolean, $active?: boolean }>`
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: ${({ $active }) => ($active ? "#1d3fdc" : "#2c2c80")};
    color: white;
    box-shadow: ${({ $active }) =>
            $active ? "0 0 8px rgba(255, 255, 255, 0.6)" : "none"};
    transition: all 0.2s ease;
    @media screen and (max-width: 1000px) {
        width: 175px;
    }
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.3s;
    `}
`;

const StatCard = styled.div`
    background-color: #f0f4f8;
    border-left: 5px solid #4a90e2;
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    font-size: 1rem;
    text-align: left;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    color: black;
`;

const StatBarContainer = styled.div`
    background-color: #dbe9f4;
    border-radius: 8px;      
    overflow: hidden;       
    height: 1.25rem;
    margin-top: 0.35rem;
`;

const StatBarFill = styled.div<{ $value: number }>`
    height: 100%;
    width: ${({ $value }) => `${($value / 10) * 100}%`};
    background-image: ${({ $value }) => {
        if ($value >= 7)      return 'linear-gradient(90deg,#ff9966 0%,#ff5e62 100%)';  
        if ($value >= 4)      return 'linear-gradient(90deg,#6dd5fa 0%,#2980b9 100%)';  
        return 'linear-gradient(90deg,#84fab0 0%,#8fd3f4 100%)';  
    }};
    transition: width 0.35s ease-in-out;
    border-radius: inherit;  
`;

const ModalTopLayout = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.5rem; 
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 1rem;
`;

const ModalLeft = styled.div`
    flex: 1;
    min-width: 200px;   
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem; 
`;

const ModalRight = styled.div`
    flex: 2;
    min-width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
`;

const AboutSection = styled.div`
    p {
        margin: 0.25rem 0;
    }
    h3 {
        margin: 0.5rem 0 0.25rem 0;
    }
`;

const ToggleButton = styled.button<ToggleButtonProps>`
    margin: 0 0.5rem;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    background-color: ${({ active }) => (active ? "#4a90e2" : "#e0e0e0")};
    color: ${({ active }) => (active ? "white" : "black")};
    border-radius: 10px;
    transition: background-color 0.2s, color 0.2s;
`;

const AwardsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;    
`;

const StatsScrollContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #4a90e2;
        border-radius: 5px;
    }
`;

const StatsBar = styled.div`
    display: flex;
    width: max-content;
    background: #f0f4f8;
    border-radius: 10px;
    overflow: hidden;
    border-left: 5px solid #4a90e2;
`;

const StatCell = styled.div`
    width: 110px;
    min-width: 110px;
    max-width: 110px;

    padding: 1rem;
    text-align: center;
    color: black;
    font-weight: bold;

    border-right: 1px solid #d0d0d0;
    box-sizing: border-box;

    &:last-child {
        border-right: none;
    }
`;

const SeasonCell = styled(StatCell)`
    width: 160px;
    min-width: 160px;
    max-width: 160px;
`;

const AwardRow = styled.li<{ $kind: string }>`
    padding: 0.6rem 1.1rem;
    border-radius: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, .25);
    background: ${({ $kind }) => {
    switch ($kind) {
        case "champ":        return "#FFD700";
        case "finalsMvp":    return "linear-gradient(90deg, #FFD700, #E5E4E2)";
        case "leagueMvp":    return "#07246C";
        case "offense":      return "#FF5E57";
        case "defense":      return "#006400";
        case "slugger":      return "#D3D3D3";
        case "glove":        return "#F9DC5C";
        case "rookie":       return "linear-gradient(90deg, #3B2416, #8C6239, #D1A06A);";
        case "pitcher":      return "linear-gradient(90deg, #EEEEEE, #AAAAAA)";
        case "mii":          return "linear-gradient(90deg, #0096D6, #DDDDDD)";
        default:             return "#ffffff";   
    }
    }};
    color: ${({ $kind }) =>
        $kind === "leagueMvp" ? "#fff" : "#000"};
    `;

const classifyAward = (name: string) => {
    if (name === "World Series Champion")                     return ["champ", "🏆"];
    if (name === "World Series MVP" || name === "Finals MVP") return ["finalsMvp", "🎖️"];
    if (name === "League MVP")                                return ["leagueMvp", "🌟"];
    if (name === "Offensive Player of the Year")              return ["offense", "💥"];
    if (name === "Defensive Player of the Year")              return ["defense", "🛡️"];
    if (name === "Silver Slugger Winner")                     return ["slugger", "🥈"];
    if (name === "Golden Glove Winner")                       return ["glove", "🥇"];
    if (name === "Pitcher of the Year")                       return ["pitcher", "⚾"];
    if (name === "Rookie of the Year")                        return ["rookie", "🆕"];
    if (name === "Mii of the Year")                           return ["mii", "⭐"];
    return ["other", "⭐"];
};

function statWithEmoji(value: number): string {
    if (value >= 7) return `${value} 🔥`;
    if (value <= 3) return `${value} 🧊`;
    return `${value}`;
}

export default function Players() {
    const [selectedSort, setSelectedSort] = useState("az");
    const [displayedSort, setDisplayedSort] = useState("az");
    const [playerAnimationState, setPlayerAnimationState] = useState<"enter" | "exit">("enter");
    const [isSorting, setIsSorting] = useState(false);

    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
    const [selectedStat, setSelectedStat] = useState<Stat | null>(null);
    const [activeModalTab, setActiveModalTab] = useState<"info" | "awards" | "stats" | "history">("info");

    const colorOrder = [
        "Red", "Orange", "Yellow", "Light Green", "Green",
        "Light Blue", "Blue", "Pink", "Purple", "Brown",
        "White", "Black", "None"
    ];

    const sortedPlayers: Player[] = [...players]
        .filter((player) => {
            if (displayedSort === "captains") return player.captain;
            return true;
        })
        .filter((player) => {
            if (displayedSort === "mii") return player.mii;
            return true;
        })
        .filter((player) => {
            if (displayedSort === "retired") return player.retired;
            return true;
        })
        .sort((a, b) => {
            if (displayedSort === "az") return a.name.localeCompare(b.name);
            if (displayedSort === "za") return b.name.localeCompare(a.name);
            if (displayedSort === "color") return colorOrder.indexOf(a.color) - colorOrder.indexOf(b.color);
            return 0;
        });

    const [ready, setReady] = useState(false);

    const handleSortChange = (newSort: string) => {
        if (newSort === displayedSort || isSorting) return;

        setSelectedSort(newSort);
        setIsSorting(true);
        setPlayerAnimationState("exit");

        setTimeout(() => {
            setDisplayedSort(newSort);
            setPlayerAnimationState("enter");

            setTimeout(() => {
                setIsSorting(false);
            }, 1000);
        }, 350);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    type CsvRow = Record<string, string>;
    type StatLine = Record<string, string | number>;

    function parseCsv(text: string): CsvRow[] {
        const lines = text.trim().split("\n");

        const headers = lines[0]
            .split(/\t|,/)
            .map((header, i) => i === 0 ? "name" : header.trim());

        return lines.slice(1).map((line) => {
            const values = line.split(/\t|,/);

            return headers.reduce((obj, header, i) => {
                obj[header] = values[i]?.trim() ?? "";
                return obj;
            }, {} as CsvRow);
        });
    }

    const BATTINGS2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQI9f3DvikuiVGwybMAzw-RWIrETSb1TXze3TVmYDvjdfUb_usdve9KnRkuXxmZNmIW3DLapKjmNg9F/pub?gid=0&single=true&output=csv";
    const BATTINGS3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5wCbbjTUbYIHGbkCscbS-p_3YgUAZ5SiyJmKj0l9FgWEjN6jisRwQzCpgkRoaMANdjLfr427LlzTt/pub?gid=0&single=true&output=csv";
    const BATTINGS4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR6Yquslv4MzdUiPB-H0AsVEyIMJok9SLEhBO9fuIPve_vjjFMRspjSpTA4bzsFxj6Tfezzj1UbosDM/pub?gid=0&single=true&output=csv";

    const PITCHINGS2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQI9f3DvikuiVGwybMAzw-RWIrETSb1TXze3TVmYDvjdfUb_usdve9KnRkuXxmZNmIW3DLapKjmNg9F/pub?gid=235178407&single=true&output=csv";
    const PITCHINGS3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5wCbbjTUbYIHGbkCscbS-p_3YgUAZ5SiyJmKj0l9FgWEjN6jisRwQzCpgkRoaMANdjLfr427LlzTt/pub?gid=61989451&single=true&output=csv";
    const PITCHINGS4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR6Yquslv4MzdUiPB-H0AsVEyIMJok9SLEhBO9fuIPve_vjjFMRspjSpTA4bzsFxj6Tfezzj1UbosDM/pub?gid=1237690545&single=true&output=csv";

    const battingUrls = [
        BATTINGS2,
        BATTINGS3,
        BATTINGS4,
    ];

    const pitchingUrls = [
        PITCHINGS2,
        PITCHINGS3,
        PITCHINGS4,
    ];

    const [battingSeasons, setBattingSeasons] = useState<CsvRow[][]>([]);
    const [pitchingSeasons, setPitchingSeasons] = useState<CsvRow[][]>([]);

    useEffect(() => {
        async function loadStats() {
            const battingData = await Promise.all(
                battingUrls.map(async (url) =>
                    parseCsv(await (await fetch(url)).text())
                )
            );

            const pitchingData = await Promise.all(
                pitchingUrls.map(async (url) =>
                    parseCsv(await (await fetch(url)).text())
                )
            );

            setBattingSeasons(battingData);
            setPitchingSeasons(pitchingData);
        }

        loadStats();
    }, []);

    const playerBattingStats = selectedPlayer
        ? battingSeasons.map(season => season.find(row => row.name === selectedPlayer.name) ?? null) : [];

    const playerPitchingStats = selectedPlayer
        ? pitchingSeasons.map(season => season.find(row => row.name === selectedPlayer.name) ?? null) : [];

    const selectedHistory = selectedPlayer
        ? (selectedPlayer.retired
                ? retiredHistory.find((p) => p.name === selectedPlayer.name)
                : playerHistory.find((p) => p.name === selectedPlayer.name)
        ) : null;

    const activeBattingSeasons = playerBattingStats
        .map((stats, index) => ({season: index + 2, stats,}))
        .filter(({ stats }) => Number(stats?.G || 0) > 0);

    const activePitchingSeasons = playerPitchingStats
        .map((stats, index) => ({season: index + 2, stats,}))
        .filter(({ stats }) => Number(stats?.G || 0) > 0);

    function num(row: CsvRow | null, stat: string) {
        return Number(row?.[stat] || 0);
    }

    function sumStats(rows: (CsvRow | null)[], stat: string) {
        return rows.reduce((total, row) => total + num(row, stat), 0);
    }

    function formatDecimal(value: number) {
        return value.toFixed(3);
    }

    function totalBattingLine(rows: (CsvRow | null)[]): StatLine {
        const g = sumStats(rows, "G");
        const ab = sumStats(rows, "AB");
        const r = sumStats(rows, "R");
        const h = sumStats(rows, "H");
        const doubles = sumStats(rows, "2B");
        const triples = sumStats(rows, "3B");
        const hr = sumStats(rows, "HR");
        const rbi = sumStats(rows, "RBI");
        const bb = sumStats(rows, "BB");
        const so = sumStats(rows, "SO");
        const sb = sumStats(rows, "SB");
        const cs = sumStats(rows, "CS");

        const singles = h - doubles - triples - hr;
        const totalBases = singles + doubles * 2 + triples * 3 + hr * 4;

        const avg = ab > 0 ? h / ab : 0;
        const obp = ab + bb > 0 ? (h + bb) / (ab + bb) : 0;
        const slg = ab > 0 ? totalBases / ab : 0;
        const ops = obp + slg;

        return {
            G: g,
            AB: ab,
            R: r,
            H: h,
            "2B": doubles,
            "3B": triples,
            HR: hr,
            RBI: rbi,
            BB: bb,
            SO: so,
            SB: sb,
            CS: cs,
            AVG: formatDecimal(avg),
            OBP: formatDecimal(obp),
            SLG: formatDecimal(slg),
            OPS: formatDecimal(ops),
        };
    }

    function totalPitchingLine(rows: (CsvRow | null)[]): StatLine {
        const ip = sumStats(rows, "IP");
        const er = sumStats(rows, "ER");
        const h = sumStats(rows, "H");
        const bb = sumStats(rows, "BB");

        const era = ip > 0 ? (er * 7) / ip : 0;
        const whip = ip > 0 ? (bb + h) / ip : 0;

        return {
            W: sumStats(rows, "W"),
            L: sumStats(rows, "L"),
            ERA: formatDecimal(era),
            G: sumStats(rows, "G"),
            GS: sumStats(rows, "GS"),
            CG: sumStats(rows, "CG"),
            SHO: sumStats(rows, "SHO"),
            SV: sumStats(rows, "SV"),
            SVO: sumStats(rows, "SVO"),
            IP: ip,
            H: h,
            R: sumStats(rows, "R"),
            ER: er,
            HR: sumStats(rows, "HR"),
            HB: sumStats(rows, "HB"),
            BB: bb,
            K: sumStats(rows, "K"),
            "ꓘ": sumStats(rows, "ꓘ"),
            WHIP: formatDecimal(whip),
        };
    }

    function formatIP(ip: number) {
        const whole = Math.floor(ip);
        const fraction = ip - whole;

        if (fraction < 0.17) {
            return `${whole}.0`;
        }

        if (fraction < 0.5) {
            return `${whole}.1`;
        }

        return `${whole}.2`;
    }

    if (!ready) return null;

    return (
        <ContentDiv>
            <StyledHeader $animate={ready}>Players</StyledHeader>

            <SortButtonsContainer>
                <SortButton $animate={ready} $active={selectedSort === "az"} onClick={() => handleSortChange("az")}>Sort A-Z</SortButton>
                <SortButton $animate={ready} $active={selectedSort === "za"} onClick={() => handleSortChange("za")}>Sort Z-A</SortButton>
                <SortButton $animate={ready} $active={selectedSort === "color"} onClick={() => handleSortChange("color")}>Sort by Color</SortButton>
                <SortButton $animate={ready} $active={selectedSort === "captains"} onClick={() => handleSortChange("captains")}>Captains Only</SortButton>
                <SortButton $animate={ready} $active={selectedSort === "mii"} onClick={() => handleSortChange("mii")}>Miis Only</SortButton>
                <SortButton $animate={ready} $active={selectedSort === "retired"} onClick={() => handleSortChange("retired")}>Retired</SortButton>
            </SortButtonsContainer>

            <DivisionDiv>
                {sortedPlayers.map((player: Player) => (
                    <Player $animationState={playerAnimationState}
                        key={player.name}
                        $accent={player.color === "Light Blue" ? "#6dd5fa" : player.color === "Light Green" ? "#8bc34a" : player.color?.toLowerCase() || "darkblue"}
                        onClick={() => {
                            setSelectedPlayer(player);
                            setSelectedStat(stats.find((s) => s.name === player.name) || null);
                            setActiveModalTab("info");
                        }}
                    >
                        <GenImage src={player.src} alt={player.name} />
                        <PlayerName >{player.name}</PlayerName>
                    </Player>
                ))}
            </DivisionDiv>

            {selectedPlayer && selectedStat && (
                <ModalBackground onClick={() => { setSelectedPlayer(null); setSelectedStat(null); }}>
                    <ModalContent style={{backgroundColor: "#BFD8E6"}}
                        onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => { setSelectedPlayer(null); setSelectedStat(null); }}>✕</CloseButton>
                        <ModalScrollWrapper>
                            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                                <ToggleButton active={activeModalTab === "info"} onClick={() => setActiveModalTab("info")}>Info</ToggleButton>
                                <ToggleButton active={activeModalTab === "awards"} onClick={() => setActiveModalTab("awards")}>Awards</ToggleButton>
                                <ToggleButton active={activeModalTab === "stats"} onClick={() => setActiveModalTab("stats")}>Stats</ToggleButton>
                                <ToggleButton active={activeModalTab === "history"} onClick={() => setActiveModalTab("history")}>History</ToggleButton>
                            </div>
                            <StyledMiniHeader style={{ fontSize: "33px", margin: "5px", color: "black" }}>{selectedPlayer.name}</StyledMiniHeader>
                            {selectedPlayer.captain ? <img style={{marginBottom: "10px", padding: "0"}} src={selectedPlayer.banner} alt="banner"/> : ""}

                            {activeModalTab === "info" && (
                                <ModalTopLayout>
                                    <ModalLeft>
                                        <img style={{backgroundColor: "#dbe9f4", padding: "3px", border: "4px solid #4a90e2"}}
                                            src={selectedPlayer.src} alt={selectedPlayer.name} width="160"/>
                                        <AboutSection>
                                            <StyledMiniHeader style={{color: "black"}}>About</StyledMiniHeader>
                                            <p style={{fontWeight: "bold", borderRadius: "8px", backgroundColor: selectedPlayer.color ===
                                                "Light Blue" ? "lightblue" : selectedPlayer.color === "Light Green" ? "lightgreen" : selectedPlayer.color,
                                                color: selectedPlayer.color === "Black" ? "white" : "black"}}>Color: {selectedPlayer.color}</p>
                                            <p style={{color: "black"}}>Games Played: {selectedPlayer.gp}</p>
                                        </AboutSection>
                                    </ModalLeft>
                                    <ModalRight style={{fontWeight: "bold"}}>
                                        <StatCard>
                                            <div>Batting: {statWithEmoji(selectedStat.batting)}</div>
                                            <StatBarContainer>
                                                <StatBarFill $value={selectedStat.batting} />
                                            </StatBarContainer>
                                        </StatCard>
                                        <StatCard>
                                            <div>Pitching: {statWithEmoji(selectedStat.pitching)}</div>
                                            <StatBarContainer>
                                                <StatBarFill $value={selectedStat.pitching} />
                                            </StatBarContainer>
                                        </StatCard>
                                        <StatCard>
                                            <div>Fielding: {statWithEmoji(selectedStat.fielding)}</div>
                                            <StatBarContainer>
                                                <StatBarFill $value={selectedStat.fielding} />
                                            </StatBarContainer>
                                        </StatCard>
                                        <StatCard>
                                            <div>Running: {statWithEmoji(selectedStat.running)}</div>
                                            <StatBarContainer>
                                                <StatBarFill $value={selectedStat.running} />
                                            </StatBarContainer>
                                        </StatCard>
                                    </ModalRight>
                                </ModalTopLayout>
                            )}

                            {activeModalTab === "awards" && (
                                <>
                                    {Array.isArray(selectedPlayer.awards) && selectedPlayer.awards.length > 0 ? (
                                        <>
                                            <StyledMiniHeader style={{color: "black"}}>Awards</StyledMiniHeader>
                                            <AwardsList>
                                                {selectedPlayer.awards.map(({ name, season }, idx) => {
                                                    const [kind, emoji] = classifyAward(name);
                                                    return (
                                                        <AwardRow key={idx} $kind={kind}>
                                                            <span>{emoji}</span>
                                                            {name} <span style={{ opacity: .75, color: "black" }}>— Season {season}</span>
                                                        </AwardRow>
                                                    );
                                                })}
                                            </AwardsList>
                                        </>
                                    ) : (<p style={{ fontStyle: "italic", color: "black"}}>No awards yet.</p>)}
                                </>
                            )}

                            {activeModalTab === "stats" && (
                                <>
                                    <StyledMiniHeader style={{ color: "black" }}>Stats</StyledMiniHeader>

                                    <StyledMiniHeader style={{ color: "black" }}>Batting</StyledMiniHeader>

                                    {activeBattingSeasons.length > 0 ? (
                                    <StatsScrollContainer>
                                        <StatsBar style={{ flexDirection: "column" }}>
                                            {[
                                                ...activeBattingSeasons,
                                                {
                                                    season: "All Time",
                                                    stats: totalBattingLine(
                                                        activeBattingSeasons.map(({ stats }) => stats)
                                                    ),
                                                },
                                            ].map(({ season, stats: rowStats }) => (
                                                <div
                                                    key={season}
                                                    style={{
                                                        display: "flex",
                                                        borderTop:
                                                            season === "All Time"
                                                                ? "3px solid #4a90e2"
                                                                : "none",
                                                    }}
                                                >
                                                    <SeasonCell>
                                                        {typeof season === "number" ? `Season ${season}` : season}
                                                    </SeasonCell>

                                                    {["G", "AB", "R", "H", "2B", "3B", "HR", "RBI", "BB", "SO", "SB", "CS", "AVG", "OBP", "SLG", "OPS"].map((stat) => (
                                                        <StatCell key={stat}>
                                                            <div>{stat}</div>
                                                            <div>
                                                                {["AVG", "OBP", "SLG", "OPS"].includes(stat)
                                                                    ? Number((rowStats as StatLine)?.[stat] ?? 0).toFixed(3)
                                                                    : String((rowStats as StatLine)?.[stat] ?? "-")}
                                                            </div>
                                                        </StatCell>
                                                    ))}
                                                </div>
                                            ))}
                                        </StatsBar>
                                    </StatsScrollContainer>
                                    ) : (
                                        <p style={{ fontStyle: "italic", color: "black" }}>No batting stats available.</p>
                                    )}

                                    <StyledMiniHeader style={{ color: "black" }}>Pitching</StyledMiniHeader>

                                    {activePitchingSeasons.length > 0 ? (
                                    <StatsScrollContainer>
                                        <StatsBar style={{ flexDirection: "column" }}>
                                            {[
                                                ...activePitchingSeasons,
                                                {
                                                    season: "All Time",
                                                    stats: totalPitchingLine(
                                                        activePitchingSeasons.map(({ stats }) => stats)
                                                    ),
                                                },
                                            ].map(({ season, stats: rowStats }) => (
                                                <div
                                                    key={season}
                                                    style={{
                                                        display: "flex",
                                                        borderTop:
                                                            season === "All Time"
                                                                ? "3px solid #4a90e2"
                                                                : "none",
                                                    }}
                                                >
                                                    <SeasonCell>
                                                        {typeof season === "number" ? `Season ${season}` : season}
                                                    </SeasonCell>

                                                    {["W", "L", "ERA", "G", "GS", "CG", "SHO", "SV", "SVO", "IP", "H", "R", "ER", "HR", "HB", "BB", "K", "ꓘ", "WHIP"].map((stat) => (
                                                        <StatCell key={stat}>
                                                            <div>{stat}</div>
                                                            <div>
                                                                {stat === "IP"
                                                                    ? formatIP(Number((rowStats as StatLine)?.[stat] ?? 0))
                                                                    : stat === "ERA"
                                                                        ? Number((rowStats as StatLine)?.[stat] ?? 0).toFixed(2)
                                                                        : stat === "WHIP"
                                                                            ? Number((rowStats as StatLine)?.[stat] ?? 0).toFixed(3)
                                                                            : String((rowStats as StatLine)?.[stat] ?? "-")}
                                                            </div>
                                                        </StatCell>
                                                    ))}
                                                </div>
                                            ))}
                                        </StatsBar>
                                    </StatsScrollContainer>
                                    ) : (
                                        <p style={{ fontStyle: "italic", color: "black" }}>No pitching stats available.</p>
                                    )}
                                </>
                            )}

                            {activeModalTab === "history" && (
                                <>
                                    <StyledMiniHeader style={{ color: "black" }}>History</StyledMiniHeader>

                                    {selectedHistory && selectedHistory.history.length > 0 ? (
                                        <AwardsList>
                                            {selectedHistory.history.map((item) => (
                                                <AwardRow key={item.season} $kind="other">
                                                    <span>📜</span>

                                                    <div style={{ textAlign: "left" }}>
                                                        <div>Season {item.season}: {item.team}</div>

                                                        {item.drafted && (
                                                            <div style={{ opacity: 0.75 }}>
                                                                Drafted — {item.draftPick}
                                                            </div>
                                                        )}

                                                        {!item.drafted && (
                                                            <div style={{ opacity: 0.75 }}>
                                                                Not drafted
                                                            </div>
                                                        )}

                                                        {item.transactions?.map((transaction, idx) => (
                                                            <div key={idx} style={{ opacity: 0.75 }}>
                                                                • {transaction}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </AwardRow>
                                            ))}
                                        </AwardsList>
                                    ) : (
                                        <p style={{ fontStyle: "italic", color: "black" }}>
                                            No history available yet.
                                        </p>
                                    )}
                                </>
                            )}
                        </ModalScrollWrapper>
                    </ModalContent>
                </ModalBackground>
            )}
        </ContentDiv>
    );
}
