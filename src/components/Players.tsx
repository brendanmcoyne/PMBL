import { styled } from "styled-components";
import {useEffect, useState} from "react";
import { players } from "../data/playerNames.ts";
import type { Player } from "../data/playerNames.ts";
import { stats } from "../data/playerStats.ts";
import type { Stat } from "../data/playerStats.ts";


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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    width: 85%;
`;

const DivisionHeader = styled.h1`
    text-align: center;
    grid-column: span 3;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const PlayerName = styled.span`
    font-weight: bold;
    text-align: center;
    color: white;
`;

const Player = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    background-color: darkblue;
    border: 3px solid black;
    border-radius: 10px;
    transition: transform 0.2s;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);

    &:hover {
        transform: scale(1.05);
        background-color: #eee;

        ${PlayerName} {
            color: #1e1e1e; 
        }
    }
`;

const GenImage = styled.img`
    width: 150px;
    height: 150px;   
    object-fit: cover; 
    border: 3px solid black;
    padding: 5px;
    background-color: white;
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
`;

const SortButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 1rem;
`;

const SortButton = styled.button<{ active?: boolean }>`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: ${({ active }) => (active ? "#00007B" : "darkblue")};
    color: ${({ active }) => (active ? "white" : "darkgray")};
    border: 2px solid darkblue;
    border-radius: 5px;
    transition: background-color 0.2s;
`;

const StatBarContainer = styled.div`
    width: 100%;
    margin: 0.5rem 0;
`;

const StatBarLabel = styled.div`
    font-weight: bold;
    text-align: left;
    margin-bottom: 0.25rem;
`;

const StatBarBackground = styled.div`
    width: 100%;
    height: 12px; 
    background-color: #ddd;
    border-radius: 8px;
    overflow: hidden;
`;

const StatBarFill = styled.div<{ value: number }>`
    height: 100%;
    width: ${({ value }) => (value / 10) * 100}%;
    background: linear-gradient(to right, #004080, #007bff);
    border-radius: 8px;
    transition: width 0.3s ease-in-out;
`;

const StatBar = ({ label, value }: { label: string; value: number }) => {
    const getEmoji = (val: number) => {
        if (val >= 7) return "🔥";
        if (val <= 3) return "🧊";
        return "";
    };

    return (
        <StatBarContainer>
            <StatBarLabel>
                {label}: {value} {getEmoji(value)}
            </StatBarLabel>
            <StatBarBackground>
                <StatBarFill value={value} />
            </StatBarBackground>
        </StatBarContainer>
    );
};

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
    padding: 0;
    margin-top: 0.5rem;
    p {
        margin: 0.25rem 0;
    }
    h3 {
        margin: 0.5rem 0 0.25rem 0;
    }
`;

export default function Players() {
    const [sortOption, setSortOption] = useState("az");
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
    const [selectedStat, setSelectedStat] = useState<Stat | null>(null);

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
            <DivisionHeader>Player List</DivisionHeader>

            <SortButtonsContainer>
                <SortButton active={sortOption === "az"} onClick={() => setSortOption("az")}>Sort A-Z</SortButton>
                <SortButton active={sortOption === "za"} onClick={() => setSortOption("za")}>Sort Z-A</SortButton>
                <SortButton active={sortOption === "color"} onClick={() => setSortOption("color")}>Sort by Color</SortButton>
                <SortButton active={sortOption === "captains"} onClick={() => setSortOption("captains")}>Captains Only</SortButton>
                <SortButton active={sortOption === "mii"} onClick={() => setSortOption("mii")}>Miis Only</SortButton>
            </SortButtonsContainer>

            <DivisionDiv>
                {sortedPlayers.map((player: Player) => (
                    <Player key={player.name} onClick={() => {setSelectedPlayer(player); const statForPlayer =
                        stats.find(stat => stat.name === player.name); setSelectedStat(statForPlayer || null);}}>
                        <GenImage src={player.src} alt={player.name} />
                        <PlayerName>{player.name}</PlayerName>
                    </Player>
                ))}
            </DivisionDiv>

            {selectedPlayer && selectedStat && (
                <ModalBackground onClick={() => {setSelectedPlayer(null); setSelectedStat(null)}}>
                    <ModalContent style={{backgroundColor: selectedPlayer.color === "Light Blue" ? "lightblue" : selectedPlayer.color === "Light Green" ? "lightgreen" : selectedPlayer.color, color: selectedPlayer.color === "Black" ? "white" : ""}} onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => {setSelectedPlayer(null); setSelectedStat(null)}}>✕</CloseButton>
                        <ModalScrollWrapper>
                            <StyledMiniHeader style={{fontSize: "33px"}}>{selectedPlayer.name} {selectedPlayer.captain ? "(C)" : ""}</StyledMiniHeader>
                            <ModalTopLayout>
                                <ModalLeft>
                                    <img style={{backgroundColor: "lightgray", marginTop: "30px", padding: "3px", border: "3px solid black"}} src={selectedPlayer.src}
                                         alt={selectedPlayer.name} width="160" />
                                    <AboutSection>
                                        <StyledMiniHeader>About</StyledMiniHeader>
                                        <p>Color: {selectedPlayer.color}</p>
                                        <p>Games Played: {selectedPlayer.gp}</p>
                                    </AboutSection>
                                </ModalLeft>
                                <ModalRight>
                                    <StatBar label="Batting" value={selectedStat.batting} />
                                    <StatBar label="Pitching" value={selectedStat.pitching} />
                                    <StatBar label="Fielding" value={selectedStat.fielding} />
                                    <StatBar label="Running" value={selectedStat.running} />
                                </ModalRight>
                            </ModalTopLayout>

                            {Array.isArray(selectedPlayer.awards) && selectedPlayer.awards.length > 0 && (
                                <>
                                    <StyledMiniHeader>Awards</StyledMiniHeader>
                                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                                        {selectedPlayer.awards.map((award, index) => (
                                            <li key={index} style = {{
                                                fontWeight: award.name === "League MVP" || award.name === "Finals MVP" ? "bold" : "",
                                                color: award.name === "League MVP" ? "white" : "",
                                                backgroundColor:
                                                award.name === "World Series Champion" || award.name === "World Series MVP" ? "gold" :
                                                award.name === "Offensive Player of the Year" ? "red" :
                                                award.name === "Defensive Player of the Year" ? "darkgreen" :
                                                award.name === "Golden Glove Winner" ? "yellow" :
                                                award.name === "Silver Slugger Winner" ? "lightgray" :
                                                award.name === "League MVP" ? "darkblue":
                                                award.name === "Morgan Hartwell Man of the Year Award" ? "orange" : "",
                                                borderRadius: "8px"
                                            }}>
                                                {award.name} (Season {award.season})
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </ModalScrollWrapper>
                    </ModalContent>
                </ModalBackground>
            )}
        </ContentDiv>
    );
}
