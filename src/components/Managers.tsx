import { styled } from "styled-components";
import { useState } from "react";
import { managers } from "../data/ManagerNotes.ts";
import type { Manager } from "../data/ManagerNotes.ts";
import { rosters } from "../data/Season1Rosters.ts";
import type { Roster } from "../data/Season1Rosters.ts";


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
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-weight: bold;
`;

const DivisionDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`;

const DivisionHeader = styled.h3`
    text-align: center;
    grid-column: span 2;
    font-size: 2rem;
`;

const Manager = styled.div`
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 20px;
    border: 2px solid black;
    border-radius: 2%;
    font-size: 1.6rem;
    text-align: center;
    padding: 40px 80px;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.07);
    }
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    max-height: 90vh; 
    overflow-y: auto;
    text-align: center;
    position: relative;
    border: 2px solid black;
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
    background-color: red;
    border: 2px solid red;     
    display: flex;       
    align-items: center;
    justify-content: center;
    padding: 0;
`;

const ManagerName = styled.span`
    font-weight: bold;
    text-align: center;
`;

const StatDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Stat = styled.p`
    font-size: large;
`;

interface ToggleButtonProps {
    active: boolean;
}

const ToggleButton = styled.button<ToggleButtonProps>`
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid black;
    background-color: white;
    border-radius: 5px;

    &:hover {
        background-color: lightgray;
    }

    ${({ active }) =>
            active &&
            `
      font-weight: bold;
      background-color: #d3d3d3;
  `}
`;

export default function Managers() {
    const [selectedManager, setSelectedManager] = useState<Manager | null>(null);
    const [activeModalTab, setActiveModalTab] = useState<"info" | "roster">("info");

    const sortedManagers: Manager[] = [...managers];

    const getRosterForManager = (managerName: string): Roster | undefined => {
        return rosters.find((r) => r.manager === managerName);
    };

    return (
        <ContentDiv>
            <StyledHeader>Managers List</StyledHeader>
            <div style={{ display: 'flex', gap: "200px" }}>
                <DivisionHeader>West Division</DivisionHeader>
                <DivisionHeader>East Division</DivisionHeader>
            </div>
            <DivisionDiv>
                {sortedManagers.map((manager: Manager) => (
                    <Manager
                        key={manager.name}
                        onClick={() => {
                            setSelectedManager(manager);
                            setActiveModalTab("info");
                        }}
                        style={{ backgroundColor: manager.color }}
                    >
                        <ManagerName>{manager.name}</ManagerName>
                    </Manager>
                ))}
            </DivisionDiv>

            {selectedManager && (
                <ModalBackground onClick={() => setSelectedManager(null)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setSelectedManager(null)}>✕</CloseButton>

                        {/* Toggle Buttons */}
                        <div style={{ marginBottom: "1rem" }}>
                            <ToggleButton
                                active={activeModalTab === "info"}
                                onClick={() => setActiveModalTab("info")}
                            >
                                Info
                            </ToggleButton>
                            <ToggleButton
                                active={activeModalTab === "roster"}
                                onClick={() => setActiveModalTab("roster")}
                            >
                                Roster
                            </ToggleButton>
                        </div>

                        {activeModalTab === "info" && (
                            <>
                                <h2>{selectedManager.name}</h2>
                                <img src={selectedManager.src} alt={selectedManager.name} width="150" />
                                <StyledMiniHeader>About</StyledMiniHeader>
                                <StatDisplay>
                                    <Stat>Record: {selectedManager.record}</Stat>
                                    <Stat>Division Titles: {selectedManager.divships}</Stat>
                                    <Stat>Playoff Berths: {selectedManager.playoffs}</Stat>
                                    <Stat>World Series Titles: {selectedManager.champs}</Stat>
                                </StatDisplay>
                            </>
                        )}

                        {activeModalTab === "roster" && (
                            <>
                                <StyledMiniHeader>Season 1 Roster</StyledMiniHeader>
                                <p><strong>Captain:</strong> {getRosterForManager(selectedManager.name)?.captain || "N/A"}</p>
                                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                                    {getRosterForManager(selectedManager.name)?.roster.map((player) => (
                                        <li>{player.name}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </ModalContent>
                </ModalBackground>
            )}
        </ContentDiv>
    );
}
