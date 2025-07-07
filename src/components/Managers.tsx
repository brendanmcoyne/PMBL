import { styled } from "styled-components";
import {useEffect, useState} from "react";
import { managers } from "../data/ManagerNotes.ts";
import type { Manager } from "../data/ManagerNotes.ts";
import { rosters } from "../data/Season1Rosters.ts";
import type { Roster } from "../data/Season1Rosters.ts";

interface ToggleButtonProps {
    active: boolean;
}

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem; 
`;

const StyledHeader = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px  2px 0 #000, 2px  2px 0 #000, 0px  0px 12px #ff0;
    @media screen and (max-width: 1000px) {
        font-size: 55px;
        text-align: center;
    }
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-weight: bold;
    color: white;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 80px;
    margin: 0;
    @media screen and (max-width: 1000px) {
        font-size: 45px;
    }
`;

const DivisionDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 40px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const DivisionHeader = styled.h3`
    text-align: center;
    margin-top: 0;
    color: white;
    letter-spacing: 2px;
    font-size: 3rem;
    font-family: 'Bebas Neue', sans-serif;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const Manager = styled.div`
    width: 100px;
    height: 140px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 15px;
    border: 2px solid black;
    border-radius: 2%;
    font-size: 1.6rem;
    text-align: center;
    padding: 40px 80px;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    transition: transform 0.2s;
    cursor: pointer;
    &:hover {
        transform: scale(1.07);
    }
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    z-index: 1100;
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
    background-color: #BFD8E6;
    padding: 2rem;
    border-radius: 20px;
    width: 90%;
    max-width: 550px;
    max-height: 90vh;
    overflow-y: auto;
    text-align: center;
    position: relative;
    border: none;
    font-family: 'Segoe UI', sans-serif;
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
    border: none;
    background-color: darkgray;     
    align-items: center;
    justify-content: center;
    padding: 0;
`;

const ModalScrollWrapper = styled.div`
    max-height: calc(90vh - 4rem);
    overflow-y: auto;
    padding: 1rem;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: 0;
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

const TileSetup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
    width: 100%;
`;

const ModalTopLayout = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const ModalLeft = styled.div`
    flex: 1;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const ModalRight = styled.div`
    flex: 2;
    min-width: 220px;
    display: flex;
    flex-direction: column;
`;

const ModalManagerName = styled.h2`
    font-size: 2rem;
    color: #222;
`;

const ModalImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #4a90e2;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
`;

const StatCard = styled.div`
    background-color: #f0f4f8;
    border-left: 5px solid #4a90e2;
    padding: 0.9rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    font-size: 1rem;
    text-align: left;
    color: black;
`;

const RivalryParagraph = styled.p`
    color: white;
    max-width: 500px; 
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.6; 
    background-color: #303030;
    border-radius: 8px;
    border-bottom: 2px solid white;
    padding: 16px 20px; 
`;

const Rivalry = styled.div`
    color: white;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

const VersusRow = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    margin: 0 auto;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.5rem;
    color: white;
`;

export default function Managers() {
    const [selectedManager, setSelectedManager] = useState<Manager | null>(null);
    const [activeModalTab, setActiveModalTab] = useState<"info" | "roster">("info");

    const sortedManagers: Manager[] = [...managers];

    const getRosterForManager = (managerName: string): Roster | undefined => {
        return rosters.find((r) => r.manager === managerName);
    };

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
            <StyledHeader>Managers List</StyledHeader>
            <div style={{display: 'flex', gap: "200px"}}>
                <DivisionHeader style={{color: "#4285F4"}}>East Division</DivisionHeader>
            </div>
            <DivisionDiv>
                {sortedManagers.filter(m => m.division === "East").map((manager: Manager) => (
                    <Manager key={manager.name} onClick={() => {
                        setSelectedManager(manager);
                        setActiveModalTab("info");
                    }} style={{background:
                            manager.name === "Brendan"
                            ? "linear-gradient(100deg, rgba(204, 0, 0, 1) 20%, rgba(204, 0, 0, .2) 100%)"
                            : manager.name === "Justin"
                            ? "linear-gradient(100deg, rgba(255, 153, 0, 1) 20%, rgba(255, 153, 0, .2) 100%)"
                            : manager.name === "James"
                            ? "linear-gradient(100deg, rgba(241, 194, 50, 1) 20%, rgba(241, 194, 50, .2) 100%)"
                            : manager.name === "Matt"
                            ? "linear-gradient(100deg, rgba(106, 168, 79, 1) 20%, rgba(0, 255, 0, .2) 100%)"
                            : ""}}>
                        <TileSetup>
                            <img src={manager.emblem} alt={manager.name}
                                 style={{width: "100px", height: "100px", objectFit: "contain",
                                     filter: "drop-shadow(0 0 6px rgba(0, 0, 0, 0.6)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))"}}/>
                            <span style={{fontWeight: "bold", textAlign: "center"}}>{manager.name}</span>
                        </TileSetup>
                    </Manager>
                ))}
            </DivisionDiv>
            <div style={{display: 'flex', gap: "200px"}}>
                <DivisionHeader style={{color: "#FF0000"}}>West Division</DivisionHeader>
            </div>
            <DivisionDiv>
                {sortedManagers.filter(m => m.division === "West").map((manager: Manager) => (
                    <Manager key={manager.name} onClick={() => {
                        setSelectedManager(manager);
                        setActiveModalTab("info");
                    }} style={{background:
                            manager.name === "Isaac"
                            ? "linear-gradient(100deg, rgba(53, 134, 232, 1) 20%, rgba(53, 134, 232, .2) 100%)"
                            : manager.name === "Christach"
                            ? "linear-gradient(100deg, rgba(153, 0, 255, 1) 20%, rgba(153, 0, 255, .2) 100%)"
                            : manager.name === "Morgan"
                            ? "linear-gradient(100deg, rgba(255, 0, 255, 1) 20%, rgba(255, 0, 255, .2) 100%)"
                            : manager.name === "DANdrew"
                            ? "linear-gradient(100deg, rgba(153, 153, 153, 1) 20%, rgba(153, 153, 153, .2) 100%)"
                            : manager.color}}>
                        <TileSetup>
                            <img src={manager.emblem} alt={manager.name}
                                 style={{width: "100px", height: "100px", objectFit: "contain",
                                     filter: "drop-shadow(0 0 6px rgba(0, 0, 0, 0.6)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))"}}/>
                            <span style={{fontWeight: "bold", textAlign: "center"}}>{manager.name}</span>
                        </TileSetup>
                    </Manager>
                ))}
            </DivisionDiv>

            <StyledHeader>Rivalries</StyledHeader>
                <Rivalry>
                    <StyledMiniHeader>The Battle of 726</StyledMiniHeader>
                    <VersusRow>
                        <span style={{color: "#CC0000", textAlign: "right", paddingRight: "1rem"}}>Brendan</span>
                        <span style={{textAlign: "center"}}>vs</span>
                        <span style={{color: "#3586E8", textAlign: "left", paddingLeft: "1rem"}}>Isaac</span>
                    </VersusRow>
                    <RivalryParagraph>
                        These two managers were the creators of the PMBL, and live under the same roof.
                        Their passion for Mario Baseball has sparked the interest in the rest of the managers, creating the league
                        everyone knows and loves. </RivalryParagraph>
                    <p style={{ color: "lightgray", fontStyle: "italic", textAlign: "center" }}>Brendan leads 1-0</p>
                </Rivalry>

                <Rivalry>
                    <StyledMiniHeader>The Park Drive Rivalry</StyledMiniHeader>
                    <VersusRow>
                        <span style={{ color: "#FF9900", textAlign: "right", paddingRight: "1rem"}}>Justin</span>
                        <span style={{textAlign: "center"}}>vs</span>
                        <span style={{ color: "#9900FF", textAlign: "left", paddingLeft: "1rem"}}>Christach</span>
                    </VersusRow>
                    <RivalryParagraph>
                        Just a quick walk down the road from 726 Commonwealth Avenue was the household of
                        the three Managers; Justin, Chris, and Zach, with all 3 of them living under the same roof. In their sole game
                        so far, Christach rallied down 7-0, but still ended up losing 9-8. </RivalryParagraph>
                    <p style={{ color: "lightgray", fontStyle: "italic", textAlign: "center" }}>Justin leads 1-0</p>
                </Rivalry>

                <Rivalry>
                    <StyledMiniHeader>The 48 Buswell Battle</StyledMiniHeader>
                    <VersusRow>
                        <span style={{ color: "#F1C232", textAlign: "right", paddingRight: "1rem"}}>James</span>
                        <span style={{textAlign: "center"}}>vs</span>
                        <span style={{ color: "#FF00FF", textAlign: "left", paddingLeft: "1rem"}}>Morgan</span>
                    </VersusRow>
                    <RivalryParagraph>
                        A rivlary so fierce that they didn't even travel to games together despite sleeping
                        above/below one another. Both teams were dipped in controversy throughout Season 1, and met in the playoffs,
                        with James winning the series 3-1. </RivalryParagraph>
                    <p style={{ color: "lightgray", fontStyle: "italic", textAlign: "center" }}>James leads 4-1</p>
                </Rivalry>

                <Rivalry>
                    <StyledMiniHeader> The Computer Engineering Clash</StyledMiniHeader>
                    <VersusRow>
                        <span style={{ color: "#FF9900", textAlign: "right", paddingRight: "1rem"}}>Justin</span>
                        <span style={{textAlign: "center"}}>vs</span>
                        <span style={{color: "#6AA84F", textAlign: "left", paddingLeft: "1rem"}}>Matt</span>
                    </VersusRow>
                    <RivalryParagraph>
                        Two division rivals of the same major. Both fan favorite teams played in the Week 7
                        Shy Guy Tribute Game, where Matt took an early 5-0 lead in the 1st, to lose 11-14 with a 3 run walk-off homer
                        in the first ever 10 inning game.</RivalryParagraph>
                    <p style={{ color: "lightgray", fontStyle: "italic", textAlign: "center" }}>Justin leads 2-0</p>
                </Rivalry>
            <Rivalry style={{marginTop: "0"}}>
                <StyledMiniHeader>Middlesex Matchups</StyledMiniHeader>
                <StyledMiniHeader style={{fontSize: "2.5rem"}}>
                    <span style={{ color: "#F1C232"}}>James</span>,
                    <span style={{ color: "#CC0000"}}>{' '}Brendan</span>,
                    <span style={{ color: "#FF00FF"}}>{' '}Morgan</span>
                </StyledMiniHeader>
                <RivalryParagraph>The members of Middlesex County, MA, have had their fair share of exciting matchups
                    throughout the leagues history. In the Season 1 playoffs, there was two Middlesex matchups, one in the Conference Series,
                    and one in the World Series, culminating in James winning both, and the first ever PMBL World Series Title. </RivalryParagraph>
                <p style={{ color: "lightgray", fontStyle: "italic", marginTop: "20px", marginBottom: "0", textAlign: "center" }}>James leads Morgan 4-1</p>
                <p style={{ color: "lightgray", fontStyle: "italic", margin: "0", textAlign: "center" }}>James leads Brendan 4-1</p>
                <p style={{ color: "lightgray", fontStyle: "italic", margin: "0", textAlign: "center" }}>Brendan leads Morgan 1-0</p>
            </Rivalry>


            {selectedManager && (
                <ModalBackground onClick={() => setSelectedManager(null)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setSelectedManager(null)}>✕</CloseButton>
                        <ModalScrollWrapper>
                            <div style={{marginBottom: "1rem"}}>
                                <ToggleButton active={activeModalTab === "info"}
                                              onClick={() => setActiveModalTab("info")}>Info</ToggleButton>
                                <ToggleButton active={activeModalTab === "roster"}
                                              onClick={() => setActiveModalTab("roster")}>Roster</ToggleButton>
                            </div>
                            {activeModalTab === "info" && (
                                <div>
                                    <ModalManagerName>{selectedManager.name}</ModalManagerName>
                                    <ModalTopLayout>
                                        <ModalLeft>
                                            <ModalImage src={selectedManager.src} alt="photo"/>
                                            <img src={selectedManager.s1banner} alt="banner"/>
                                        </ModalLeft>
                                        <ModalRight>
                                            <StatCard>Record: {selectedManager.record}</StatCard>
                                            <StatCard>Division Titles: {selectedManager.divships}</StatCard>
                                            <StatCard>Playoff Berths: {selectedManager.playoffs}</StatCard>
                                            <StatCard>World Series Titles: {selectedManager.champs}</StatCard>
                                        </ModalRight>
                                    </ModalTopLayout>
                                </div>
                            )}

                            {activeModalTab === "roster" && (
                                <div style={{color: "#303030"}}>
                                    <StyledMiniHeader style={{color: "#303030"}}>Season 1 Roster</StyledMiniHeader>
                                    {getRosterForManager(selectedManager.name)?.accolades && (
                                        <div style={{display: "flex", flexDirection: "column", gap: "8px", marginBottom: "10px"}}>
                                            {getRosterForManager(selectedManager.name)?.accolades?.map((acc) => (
                                                <div key={acc.type} style={{
                                                    backgroundColor: acc.color,
                                                    color: "white",
                                                    padding: "4px",
                                                    borderRadius: "8px",
                                                    fontWeight: "bold"
                                                }}>{acc.type}</div>
                                            ))}
                                        </div>
                                    )}
                                    <p style={{fontWeight: "bold", marginBottom: "0.4rem"}}>
                                        <strong>Captain:</strong> {getRosterForManager(selectedManager.name)?.captain}
                                    </p>
                                    <img src={selectedManager.s1banner} alt="banner"/>
                                    <ul style={{listStyleType: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.3rem",}}>
                                        {getRosterForManager(selectedManager.name)?.roster.map((player) => (
                                            <li key={player.name} style={{
                                                background: "#e3e3e3",
                                                padding: "6px 10px",
                                                borderRadius: "6px",
                                                fontWeight: "500",
                                            }}>
                                                {player.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </ModalScrollWrapper>
                    </ModalContent>
                </ModalBackground>
            )}
        </ContentDiv>
    );
}