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
    text-align: center; 
    margin-bottom: 1rem; 
    color: white;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-weight: bold;
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
    background: #CFD8E6;
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

const ManagerName = styled.span`
    font-weight: bold;
    text-align: center;
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
    border-radius: 20px;
    transition: background-color 0.2s, color 0.2s;
`;

const TileSetup = styled.div`
    display: flex;
    flex-direction: column;
`;

const ModalTopLayout = styled.div`
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const ModalLeft = styled.div`
    flex: 1;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    gap: 1rem;
`;

const ModalRight = styled.div`
    flex: 2;
    min-width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
`;

const ModalManagerName = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #222;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
    font-weight: bold;
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
    border-left: 6px solid #4a90e2;
    padding: 0.8rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    font-size: 1rem;
    text-align: left;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
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
            <div style={{ display: 'flex', gap: "200px" }}>
                <DivisionHeader>East Division</DivisionHeader>
            </div>
            <DivisionDiv>
                {sortedManagers.filter(m => m.division === "East").map((manager: Manager) => (
                    <Manager key={manager.name} onClick={() => {setSelectedManager(manager);setActiveModalTab("info");}} style={{ backgroundColor: manager.color }}>
                        <TileSetup>
                            <img src={manager.emblem} alt={manager.name}/>
                            <ManagerName>{manager.name}</ManagerName>
                        </TileSetup>
                    </Manager>
                ))}
            </DivisionDiv>
            <div style={{ display: 'flex', gap: "200px" }}>
                <DivisionHeader>West Division</DivisionHeader>
            </div>
            <DivisionDiv>
                {sortedManagers.filter(m => m.division === "West").map((manager: Manager) => (
                    <Manager key={manager.name} onClick={() => {setSelectedManager(manager);setActiveModalTab("info");}} style={{ backgroundColor: manager.color }}>
                        <TileSetup>
                            <img src={manager.emblem} alt={manager.name}/>
                            <ManagerName>{manager.name}</ManagerName>
                        </TileSetup>
                    </Manager>
                ))}
            </DivisionDiv>

            {selectedManager && (
                <ModalBackground onClick={() => setSelectedManager(null)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setSelectedManager(null)}>✕</CloseButton>
                        <ModalScrollWrapper>
                        <div style={{ marginBottom: "1rem" }}>
                            <ToggleButton active={activeModalTab === "info"} onClick={() => setActiveModalTab("info")}>Info</ToggleButton>
                            <ToggleButton active={activeModalTab === "roster"} onClick={() => setActiveModalTab("roster")}>Roster</ToggleButton>
                        </div>
                        {activeModalTab === "info" && (
                            <>
                                <ModalManagerName>{selectedManager.name}</ModalManagerName>
                                <ModalTopLayout>
                                    <ModalLeft>
                                        <ModalImage src={selectedManager.src} alt={selectedManager.name} />
                                        <img src={selectedManager.s1banner} alt={`${selectedManager.name} banner`} />
                                    </ModalLeft>

                                    <ModalRight>
                                        <StatCard>Record: {selectedManager.record}</StatCard>
                                        <StatCard>Division Titles: {selectedManager.divships}</StatCard>
                                        <StatCard>Playoff Berths: {selectedManager.playoffs}</StatCard>
                                        <StatCard>World Series Titles: {selectedManager.champs}</StatCard>
                                    </ModalRight>
                                </ModalTopLayout>
                            </>
                        )}

                        {activeModalTab === "roster" && (
                            <>
                                <StyledMiniHeader>Season 1 Roster</StyledMiniHeader>
                                {getRosterForManager(selectedManager.name)?.accolades && (
                                    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                                        {getRosterForManager(selectedManager.name)?.accolades?.map((acc) => (
                                            <div key={acc.type} style={{backgroundColor: acc.color.toLowerCase(), color: "white",
                                                padding: "4px 8px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: "bold"}}>{acc.type}</div>
                                        ))}
                                    </div>
                                )}
                                <p style={{fontWeight: "bold", marginBottom: "0.4rem" }}>
                                    <strong>Captain:</strong> {getRosterForManager(selectedManager.name)?.captain || "N/A"}
                                </p>
                                <ul style={{
                                    listStyleType: "none",
                                    paddingLeft: 0,
                                    marginTop: "0.5rem",
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "0.3rem",
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
                            </>
                        )}
                        </ModalScrollWrapper>
                    </ModalContent>
                </ModalBackground>
            )}
        </ContentDiv>
    );
}
