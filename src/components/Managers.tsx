import { styled } from "styled-components";
import {useEffect, useState} from "react";
import { managers } from "../data/ManagerNotes.ts";
import type { Manager } from "../data/ManagerNotes.ts";
import { rosters } from "../data/Season1Rosters.ts";
import type { Roster } from "../data/Season1Rosters.ts";
import { SeparatorLine } from "../components/headlines/HeadlineStyles";

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
    font-size: 55px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px  2px 0 #000, 2px  2px 0 #000, 0px  0px 12px #ff0;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-weight: bold;
    color: white;
`;

const DivisionDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 40px;
`;

const DivisionHeader = styled.h3`
    text-align: center;
    font-size: 2rem;
    color: white;
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
`;

const RivalryParagraph = styled.p`
    color: white;
    max-width: 500px; 
    margin: 0 auto; 
    line-height: 1.6; 
    background-color: #303030;
    border-radius: 15px;
    border-bottom: 2px solid white;
    padding: 16px 20px; 
`;

const Rivalry = styled.div`
    color: white;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

const RivalryDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
            <StyledHeader style={{fontSize: "80px"}}>Managers List</StyledHeader>
            <div style={{display: 'flex', gap: "200px"}}>
                <DivisionHeader>East Division</DivisionHeader>
            </div>
            <SeparatorLine/>
            <DivisionDiv>
                {sortedManagers.filter(m => m.division === "East").map((manager: Manager) => (
                    <Manager key={manager.name} onClick={() => {
                        setSelectedManager(manager);
                        setActiveModalTab("info");
                    }} style={{backgroundColor: manager.color}}>
                        <TileSetup>
                            <img src={manager.emblem} alt={manager.name}
                                 style={{width: "100px", height: "100px", objectFit: "contain"}}/>
                            <span style={{fontWeight: "bold", textAlign: "center"}}>{manager.name}</span>
                        </TileSetup>
                    </Manager>
                ))}
            </DivisionDiv>
            <div style={{display: 'flex', gap: "200px"}}>
                <DivisionHeader>West Division</DivisionHeader>
            </div>
            <SeparatorLine/>
            <DivisionDiv>
                {sortedManagers.filter(m => m.division === "West").map((manager: Manager) => (
                    <Manager key={manager.name} onClick={() => {
                        setSelectedManager(manager);
                        setActiveModalTab("info");
                    }} style={{backgroundColor: manager.color}}>
                        <TileSetup>
                            <img src={manager.emblem} alt={manager.name}
                                 style={{width: "100px", height: "100px", objectFit: "contain"}}/>
                            <span style={{fontWeight: "bold", textAlign: "center"}}>{manager.name}</span>
                        </TileSetup>
                    </Manager>
                ))}
            </DivisionDiv>

            <StyledHeader style={{fontSize: "80px"}}>Rivalries</StyledHeader>

            <SeparatorLine/>

            <RivalryDiv>
                <Rivalry>
                    <StyledMiniHeader>The Battle of 726</StyledMiniHeader>
                    <StyledMiniHeader style={{display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", justifyItems: "center"}}>
                        <span style={{ color: "#CC0000", fontWeight: "bold"}}>Brendan</span>
                        <span style={{ color: "white"}}>vs</span>
                        <span style={{ color: "#3586E8", fontWeight: "bold"}}>Isaac</span>
                    </StyledMiniHeader>
                    <RivalryParagraph>
                        These two managers were the creators of the PMBL, and live under the same roof.
                        Their passion for Mario Baseball has sparked the interest in the rest of the managers, creating the league
                        everyone knows and loves. </RivalryParagraph>
                    <p style={{ color: "lightgray", fontStyle: "italic", textAlign: "center" }}>Brendan leads 1-0</p>
                </Rivalry>

                <Rivalry>
                    <StyledMiniHeader>The Park Drive Rivalry</StyledMiniHeader>
                    <StyledMiniHeader style={{display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", justifyItems: "center"}}>
                        <span style={{ color: "#FF9900", marginLeft: "3px"}}>Justin</span>
                        <span style={{ color: "white"}}>{' '}vs{' '}</span>
                        <span style={{ color: "#9900FF", marginLeft: "20px"}}>Christach</span>
                    </StyledMiniHeader>
                    <RivalryParagraph>
                        Just a quick walk down the road from 726 Commonwealth Avenue was the household of
                        the three Managers; Justin, Chris, and Zach, with all 3 of them living under the same roof. In their sole game
                        so far, Christach rallied down 7-0, but still ended up losing 9-8. </RivalryParagraph>
                    <p style={{ color: "lightgray", fontStyle: "italic", textAlign: "center" }}>Justin leads 1-0</p>
                </Rivalry>

                <Rivalry>
                    <StyledMiniHeader>The 48 Buswell Battle</StyledMiniHeader>
                    <StyledMiniHeader style={{display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", justifyItems: "center"}}>
                        <span style={{ color: "#F1C232"}}>James</span>
                        <span style={{ color: "white"}}>{' '}vs{' '}</span>
                        <span style={{ color: "#FF00FF", marginLeft: "20px"}}>Morgan</span>
                    </StyledMiniHeader>
                    <RivalryParagraph>
                        A rivlary so fierce that they didn't even travel to games together despite sleeping
                        above/below one another. Both teams were dipped in controversy throughout Season 1, and met in the playoffs,
                        with James winning the series 3-1. </RivalryParagraph>
                    <p style={{ color: "lightgray", fontStyle: "italic", textAlign: "center" }}>James leads 4-1</p>
                </Rivalry>

                <Rivalry>
                    <StyledMiniHeader>The Computer Engineering Clash</StyledMiniHeader>
                    <StyledMiniHeader style={{display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", justifyItems: "center"}}>
                        <span style={{ color: "#FF9900", marginRight: "20px"}}>Justin</span>
                        <span style={{ color: "white"}}>{' '}vs{' '}</span>
                        <span style={{color: "#6AA84F"}}>Matt</span>
                    </StyledMiniHeader>
                    <RivalryParagraph>
                        Two division rivals of the same major. Both fan favorite teams played in the Week 7
                        Shy Guy Tribute Game, where Matt took an early 5-0 lead in the 1st, to lose 11-14 with a 3 run walk-off homer
                        in the first ever 10 inning game.</RivalryParagraph>
                    <p style={{ color: "lightgray", fontStyle: "italic", textAlign: "center" }}>Justin leads 2-0</p>
                </Rivalry>
            </RivalryDiv>
            <Rivalry style={{marginTop: "0"}}>
                <StyledMiniHeader>Middlesex Matchups</StyledMiniHeader>
                <StyledMiniHeader>
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
                                                    fontSize: "0.9rem",
                                                    fontWeight: "bold"
                                                }}>{acc.type}</div>
                                            ))}
                                        </div>
                                    )}
                                    <p style={{fontWeight: "bold", marginBottom: "0.4rem"}}>
                                        <strong>Captain:</strong> {getRosterForManager(selectedManager.name)?.captain || "N/A"}
                                    </p>
                                    <ul style={{
                                        listStyleType: "none", padding: 0, marginTop: "0.5rem", display: "grid",
                                        gridTemplateColumns: "1fr 1fr", gap: "0.3rem",
                                    }}>
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