import { styled } from "styled-components";
import {useEffect, useState} from "react";
import { players } from "../data/playerNames.ts";
import type { Player } from "../data/playerNames.ts";
import { stats } from "../data/playerStats.ts";
import type { Stat } from "../data/playerStats.ts";
import { StyledHeader } from "../components/CommonStyles.ts";

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

const DivisionDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 15px;
    width: 85%;
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2,1fr);
        justify-content: center;
    }
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

const Player = styled.div<{ $accent: string }>`
    --accent: ${({ $accent }) => $accent};
    background: linear-gradient(100deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);
    border-bottom: 3px solid white;
    border-radius: 14px;
    padding: 1.1rem 0.85rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.65rem;
    text-align: center;
    cursor: pointer;
    transition: transform 0.28s ease, box-shadow 0.28s ease;

    &:hover {
        transform: translateY(-4px) scale(1.04);
    }
`;

const GenImage = styled.img`
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
    top: 10px;
    right: 15px;
    width: 30px;        
    height: 30px;       
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 50%; 
    background-color: lightgray;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
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
        & > *:last-child {
            grid-column: span 2;
            justify-self: center;
        }
    }
`;

const SortButton = styled.button<{ active?: boolean }>`
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: ${({ active }) => (active ? "#1d3fdc" : "#2c2c80")};
    color: white;
    box-shadow: ${({ active }) =>
            active ? "0 0 8px rgba(255, 255, 255, 0.6)" : "none"};
    transition: all 0.2s ease;
    @media screen and (max-width: 1000px) {
        width: 175px;
    }
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

const StatBarFill = styled.div<{ value: number }>`
    height: 100%;
    width: ${({ value }) => `${(value / 10) * 100}%`};
    background-image: ${({ value }) => {
        if (value >= 7)      return 'linear-gradient(90deg,#ff9966 0%,#ff5e62 100%)';  
        if (value >= 4)      return 'linear-gradient(90deg,#6dd5fa 0%,#2980b9 100%)';  
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
    return ["other", "⭐"];
};

function statWithEmoji(value: number): string {
    if (value >= 7) return `${value} 🔥`;
    if (value <= 3) return `${value} 🧊`;
    return `${value}`;
}

export default function Players() {
    const [sortOption, setSortOption] = useState("az");
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
    const [selectedStat, setSelectedStat] = useState<Stat | null>(null);
    const [activeModalTab, setActiveModalTab] = useState<"info" | "awards">("info");

    const colorOrder = [
        "Red", "Orange", "Yellow", "Light Green", "Green",
        "Light Blue", "Blue", "Pink", "Purple", "Brown",
        "White", "Black", "None"
    ];

    const sortedPlayers: Player[] = [...players]
        .filter((player) => {
            if (sortOption === "captains") return player.captain;
            return true;
        })
        .filter((player) => {
            if (sortOption === "mii") return player.mii;
            return true;
        })
        .sort((a, b) => {
            if (sortOption === "az") return a.name.localeCompare(b.name);
            if (sortOption === "za") return b.name.localeCompare(a.name);
            if (sortOption === "color") return colorOrder.indexOf(a.color) - colorOrder.indexOf(b.color);
            return 0;
        });

    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    if (!ready) return null;

    return (
        <ContentDiv>
            <StyledHeader>Player List</StyledHeader>

            <SortButtonsContainer>
                <SortButton active={sortOption === "az"} onClick={() => setSortOption("az")}>Sort A-Z</SortButton>
                <SortButton active={sortOption === "za"} onClick={() => setSortOption("za")}>Sort Z-A</SortButton>
                <SortButton active={sortOption === "color"} onClick={() => setSortOption("color")}>Sort by Color</SortButton>
                <SortButton active={sortOption === "captains"} onClick={() => setSortOption("captains")}>Captains Only</SortButton>
                <SortButton active={sortOption === "mii"} onClick={() => setSortOption("mii")}>Miis Only</SortButton>
            </SortButtonsContainer>

            <DivisionDiv>
                {sortedPlayers.map((player: Player) => (
                    <Player
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
                            </div>
                            <StyledMiniHeader style={{ fontSize: "33px", margin: "5px", color: "black" }}>
                                {selectedPlayer.name}
                            </StyledMiniHeader>
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
                                                color: selectedPlayer.color === "black" ? "white" : "black"}}>Color: {selectedPlayer.color}</p>
                                            <p style={{color: "black"}}>Games Played: {selectedPlayer.gp}</p>
                                        </AboutSection>
                                    </ModalLeft>
                                    <ModalRight style={{fontWeight: "bold"}}>
                                        <StatCard>
                                            <div>Batting: {statWithEmoji(selectedStat.batting)}</div>
                                            <StatBarContainer>
                                                <StatBarFill value={selectedStat.batting} />
                                            </StatBarContainer>
                                        </StatCard>
                                        <StatCard>
                                            <div>Pitching: {statWithEmoji(selectedStat.pitching)}</div>
                                            <StatBarContainer>
                                                <StatBarFill value={selectedStat.pitching} />
                                            </StatBarContainer>
                                        </StatCard>
                                        <StatCard>
                                            <div>Fielding: {statWithEmoji(selectedStat.fielding)}</div>
                                            <StatBarContainer>
                                                <StatBarFill value={selectedStat.fielding} />
                                            </StatBarContainer>
                                        </StatCard>
                                        <StatCard>
                                            <div>Running: {statWithEmoji(selectedStat.running)}</div>
                                            <StatBarContainer>
                                                <StatBarFill value={selectedStat.running} />
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
                        </ModalScrollWrapper>
                    </ModalContent>
                </ModalBackground>
            )}
        </ContentDiv>
    );
}
