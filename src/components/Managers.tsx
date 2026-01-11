import { managers } from "../data/ManagerNotes.ts";
import type { Manager } from "../data/ManagerNotes.ts";
import { rosters } from "../data/Season1Rosters.ts";
import type { Roster } from "../data/Season1Rosters.ts";
import { rosters2 } from "../data/Season2Rosters.ts";
import type { Roster2 } from "../data/Season2Rosters.ts";
import { StyledHeader } from "../components/CommonStyles.ts";
import {styled, css, keyframes} from 'styled-components';
import { useEffect, useState } from 'react';
import { Rivalry, RivalryTitle, RivalryDesc, RivalryRecord, RivalryRecords, VersusRow } from "../components/StyledRivalry.ts";

interface ToggleButtonProps {
    active: boolean;
}

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

const DivisionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 80px;
    width: 100%;
    margin-bottom: 4rem;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`;

const DivisionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    margin: 6px;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem; 
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-weight: bold;
    color: white;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 4.5rem;
    margin: 1rem 0 0 0;

    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
    }
`;

const DivisionDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: .5rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

const DivisionHeader = styled.h3<{ $animate?: boolean }>`
    text-align: center;
    margin: 0;
    color: white;
    letter-spacing: 2px;
    font-size: 3rem;
    font-family: 'Bebas Neue', sans-serif;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.3s;
    `}
`;

const Manager = styled.div<{ $animate?: boolean }>`
    width: 130px;
    height: 140px;
    font-size: 1.6rem;
    margin: 7px;
    text-align: center;
    padding: 40px 60px;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    border: 2px solid black;
    border-radius: 2%;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.07);
        @media screen and (max-width: 500px) {
            transform: none;
        }
    }

    @media screen and (max-width: 750px) {
        width: 190px;
        height: 220px;
    }
    
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.3s;
    `}
`;

const ManagerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
        width: 100px;
        height: 100px;

        @media screen and (max-width: 750px) {
            width: 160px;
            height: 160px;
        }
    }
    @media screen and (max-width: 750px) {
        font-size: 1.4rem;
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
    top: 3px;
    right: 10px;
    background: none;
    border: none;
    color: black;
    font-size: 1.5rem;
    cursor: pointer;
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

const TileSetup = styled.div<{ $animate?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
    width: 100%;
    opacity: 0;
    transform: translateY(30px);

    ${({ $animate }) =>
            $animate &&
            css`
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 0.6s;
  `}
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

const Image = styled.img`
    width: 100px; 
    height: 100px;
    object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.6)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
    @media screen and (max-width: 1000px) {
        width: 125px;
        height: 125px;
    }
`;

export default function Managers() {
    const [selectedManager, setSelectedManager] = useState<Manager | null>(null);
    const [activeModalTab, setActiveModalTab] = useState<"info" | "roster">("info");

    const sortedManagers: Manager[] = [...managers];

    const getRosterForManager = (managerName: string, oldName?: string): Roster | undefined => {
        return rosters.find(
            (r) => r.manager === managerName || (oldName && r.manager === oldName)
        );
    };

    const getRosterForManagerS2 = (managerName: string, oldName?: string): Roster2 | undefined => {
        return rosters2.find(
            (r) => r.manager === managerName || (oldName && r.manager === oldName)
        );
    };

    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
            }, 100);
        return () => clearTimeout(timer);
        }, []);

    if (!ready) return null;

    return (
        <ContentDiv>
            <StyledHeader $animate={ready}>Managers</StyledHeader>
            <DivisionContainer>
                <DivisionSection>
                    <DivisionHeader $animate={ready} style={{color: "#4285F4"}}>East Division</DivisionHeader>
                    <DivisionDiv>
                        {sortedManagers.filter(m => m.division === "East").map((manager: Manager) => (
                            <Manager $animate={ready} key={manager.name} onClick={() => {
                                setSelectedManager(manager);
                                setActiveModalTab("info");
                            }} style={{
                                background:
                                    manager.name === "Brendan"
                                        ? "linear-gradient(100deg, rgba(204, 0, 0, 1) 20%, rgba(204, 0, 0, .2) 100%)"
                                        : manager.name === "Justave"
                                            ? "linear-gradient(100deg, rgba(255, 153, 0, 1) 20%, rgba(255, 153, 0, .2) 100%)"
                                            : manager.name === "James"
                                                ? "linear-gradient(100deg, rgba(241, 194, 50, 1) 20%, rgba(241, 194, 50, .2) 100%)"
                                                : manager.name === "Marge"
                                                    ? "linear-gradient(100deg, rgba(106, 168, 79, 1) 20%, rgba(0, 255, 0, .2) 100%)"
                                                    : ""
                            }}>
                                <ManagerContent>
                                <TileSetup $animate={ready}>
                                    <Image src={manager.emblem} alt={manager.name}/>
                                    <span style={{fontWeight: "bold", textAlign: "center"}}>{manager.name}</span>
                                </TileSetup>
                                </ManagerContent>
                            </Manager>
                        ))}
                    </DivisionDiv>
                </DivisionSection>

                <DivisionSection>
                    <DivisionHeader $animate={ready} style={{color: "#FF0000"}}>West Division</DivisionHeader>
                    <DivisionDiv>
                        {sortedManagers.filter(m => m.division === "West").map((manager: Manager) => (
                            <Manager $animate={ready} key={manager.name} onClick={() => {
                                setSelectedManager(manager);
                                setActiveModalTab("info");
                            }} style={{
                                background:
                                    manager.name === "Isaac"
                                        ? "linear-gradient(100deg, rgba(53, 134, 232, 1) 20%, rgba(53, 134, 232, .2) 100%)"
                                        : manager.name === "Trocean"
                                            ? "linear-gradient(100deg, rgba(153, 0, 255, 1) 20%, rgba(153, 0, 255, .2) 100%)"
                                            : manager.name === "Morgan"
                                                ? "linear-gradient(100deg, rgba(255, 0, 255, 1) 20%, rgba(255, 0, 255, .2) 100%)"
                                                : manager.name === "THANdrew"
                                                    ? "linear-gradient(100deg, rgba(153, 153, 153, 1) 20%, rgba(153, 153, 153, .2) 100%)"
                                                    : manager.color
                            }}>
                                <ManagerContent>
                                    <TileSetup $animate={ready}>
                                        <Image src={manager.emblem} alt={manager.name}/>
                                        <span style={{fontWeight: "bold", textAlign: "center"}}>{manager.name}</span>
                                    </TileSetup>
                                </ManagerContent>
                            </Manager>
                        ))}
                    </DivisionDiv>
                </DivisionSection>
            </DivisionContainer>

            <StyledHeader $animate={ready} style={{margin: "0"}}>Rivalries</StyledHeader>
            <Rivalry>
                <RivalryTitle>The Battle of 726</RivalryTitle>
                <VersusRow>
                    <span style={{ color: "#CC0000", textAlign: "right", paddingRight: "1rem" }}>Brendan</span>
                    <span>vs</span>
                    <span style={{ color: "#3586E8", textAlign: "left", paddingLeft: "1rem" }}>Isaac</span>
                </VersusRow>
                <RivalryDesc>
                    These two managers were the creators of the PMBL, and live under the same roof.
                    Their passion for Mario Baseball has sparked the interest in the rest of the managers,
                    creating the league everyone knows and loves.
                </RivalryDesc>
                <RivalryRecord>Series tied 1-1</RivalryRecord>
            </Rivalry>
            <Rivalry>
                <RivalryTitle>The Battle of Stuvi 901</RivalryTitle>
                <VersusRow>
                    <span style={{ color: "#FF9900", textAlign: "right", paddingRight: "1rem" }}>Justave</span>
                    <span>vs</span>
                    <span style={{ color: "#FF00FF", textAlign: "left", paddingLeft: "1rem" }}>Morgan</span>
                </VersusRow>
                <RivalryDesc>
                    What became a very intense rivalry once manager Dave joined the team in Season 2, these 3
                    fierce competitors endured a great 4 game Conference Series matchup, with Justave moving onto
                    the World Series
                </RivalryDesc>
                <RivalryRecord>Justave leads 4-2</RivalryRecord>
            </Rivalry>
            <Rivalry>
                <RivalryTitle>The 48 Buswell Battle</RivalryTitle>
                <VersusRow>
                    <span style={{ color: "#F1C232", textAlign: "right", paddingRight: "1rem"}}>James</span>
                    <span>vs</span>
                    <span style={{ color: "#FF00FF", textAlign: "left", paddingLeft: "1rem"}}>Morgan</span>
                </VersusRow>
                <RivalryDesc>
                    A rivlary so fierce that they didn't even travel to games together despite sleeping
                    above/below one another. Both teams were dipped in controversy throughout Season 1, and met in the playoffs,
                    with James winning the series 3-1. </RivalryDesc>
                <RivalryRecord>James leads 5-1</RivalryRecord>
            </Rivalry>
            <Rivalry>
                <RivalryTitle> The Computer Engineering Clash</RivalryTitle>
                <VersusRow>
                    <span style={{ color: "#FF9900", textAlign: "right", paddingRight: "1rem"}}>Justin</span>
                    <span>vs</span>
                    <span style={{color: "#6AA84F", textAlign: "left", paddingLeft: "1rem"}}>Matt</span>
                </VersusRow>
                <RivalryDesc>
                    Two division rivals of the same major. Both fan favorite teams played in the Week 7
                    Shy Guy Tribute Game, where Matt took an early 5-0 lead in the 1st, to lose 11-14 with a 3 run walk-off homer
                    in the first ever 10 inning game. They would play again a few weeks later, with Justin winning again.</RivalryDesc>
                <RivalryRecord>Justin leads 3-1</RivalryRecord>
            </Rivalry>
            <Rivalry style={{alignItems: "center"}}>
                <RivalryTitle>Middlesex Matchups</RivalryTitle>
                <StyledMiniHeader style={{fontSize: "1.9rem"}}>
                    <span style={{ color: "#F1C232"}}>James</span>,
                    <span style={{ color: "#CC0000"}}>{' '}Brendan</span>,
                    <span style={{ color: "#FF00FF"}}>{' '}Morgan</span>
                </StyledMiniHeader>
                <RivalryDesc>The members of Middlesex County, MA, have had their fair share of exciting matchups
                    throughout the leagues history. In the Season 1 playoffs, there were two Middlesex matchups, one in the Conference Series,
                    and one in the World Series, culminating in James winning both, and the first ever PMBL World Series Title. </RivalryDesc>
                <RivalryRecords>
                    <RivalryRecord>James leads Morgan 5-1</RivalryRecord>
                    <RivalryRecord>James leads Brendan 6-1</RivalryRecord>
                    <RivalryRecord>Brendan 1-1 Morgan</RivalryRecord>
                </RivalryRecords>
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
                                    <ModalManagerName style={{marginBottom: "0"}}>{selectedManager.name}</ModalManagerName>
                                    {selectedManager.oldname && (
                                        <p style={{ fontSize: "1rem", color: "#555", marginTop: "0", fontStyle: "italic", alignItems: "center" }}>
                                            (formerly {selectedManager.oldname})
                                        </p>
                                    )}
                                    <ModalTopLayout>
                                        <ModalLeft>
                                            <ModalImage src={selectedManager.src} alt="photo"/>
                                            <img src={selectedManager.s2banner} alt="banner"/>
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
                                <div style={{ color: "#303030" }}>
                                    <StyledMiniHeader style={{ color: "#303030" }}>Season 1 Roster</StyledMiniHeader>
                                    {(() => {
                                        const roster = getRosterForManager(selectedManager.name, selectedManager.oldname);

                                        if (!roster) {
                                            return <p>No Season 1 roster available.</p>;
                                        }
                                        return (
                                            <>
                                                {roster.accolades && (
                                                    <div style={{display: "flex", flexDirection: "column", gap: "8px", marginBottom: "10px",}}>
                                                        {roster.accolades.map((acc) => (
                                                            <div key={acc.type} style={{backgroundColor: acc.color, color: "white",
                                                                padding: "4px", borderRadius: "8px", fontWeight: "bold",}}>{acc.type}</div>
                                                        ))}
                                                    </div>
                                                )}
                                                <p style={{ fontWeight: "bold", marginBottom: "0.4rem" }}><strong>Captain:</strong> {roster.captain}</p>
                                                <img src={selectedManager.s1banner} alt="banner" />
                                                <ul style={{listStyleType: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.3rem",}}>
                                                    {roster.roster.map((player) => (
                                                        <li key={player.name} style={{background: "#e3e3e3", padding: "6px 10px",
                                                            borderRadius: "6px", fontWeight: "500",}}>{player.name}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        );
                                    })()}
                                    <StyledMiniHeader style={{ color: "#303030", marginTop: "1.5rem" }}>
                                        Season 2 Roster
                                    </StyledMiniHeader>

                                    {(() => {
                                        const roster2 = getRosterForManagerS2(selectedManager.name, selectedManager.oldname);

                                        if (!roster2) {
                                            return <p>No Season 2 roster available.</p>;
                                        }

                                        return (
                                            <>
                                                {roster2.accolades && (
                                                    <div style={{display: "flex", flexDirection: "column", gap: "8px", marginBottom: "10px",}}>
                                                        {roster2.accolades.map((acc) => (
                                                            <div key={acc.type} style={{backgroundColor: acc.color, color: "white",
                                                                padding: "4px", borderRadius: "8px", fontWeight: "bold",}}>{acc.type}</div>
                                                        ))}
                                                    </div>
                                                )}
                                                <p style={{ fontWeight: "bold", marginBottom: "0.4rem" }}><strong>Captain:</strong> {roster2.captain}</p>
                                                <img src={selectedManager.s2banner} alt="banner" />
                                                <ul style={{listStyleType: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.3rem",}}>
                                                    {roster2.roster.map((player) => (
                                                        <li key={player.name} style={{background: "#e3e3e3", padding: "6px 10px",
                                                            borderRadius: "6px", fontWeight: "500",}}>{player.name}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        );
                                    })()}
                                </div>
                            )}
                        </ModalScrollWrapper>
                    </ModalContent>
                </ModalBackground>
            )}
        </ContentDiv>
    );
}