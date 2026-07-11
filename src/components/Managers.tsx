import { managers } from "../data/ManagerNotes.ts";
import type { Manager } from "../data/ManagerNotes.ts";
import { rosters } from "../data/Season1Rosters.ts";
import type { Roster } from "../data/Season1Rosters.ts";
import { rosters2 } from "../data/Season2Rosters.ts";
import type { Roster2 } from "../data/Season2Rosters.ts";
import { rosters3 } from "../data/Season3Rosters.ts";
import type { Roster3 } from "../data/Season3Rosters.ts";
import { rosters4 } from "../data/Season4Rosters.ts";
import type { Roster4 } from "../data/Season4Rosters.ts";
import { StyledHeader } from "../components/CommonStyles.ts";
import {styled, css, keyframes} from 'styled-components';
import { useEffect, useState } from 'react';

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

const StyleRecord = styled.h4`
    margin-top: 5px;
    margin-bottom: 0;
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
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.28), inset 0 0 0 1px rgba(255, 255, 255, 0.12);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow:
                0 18px 36px rgba(0, 0, 0, 0.38),
                0 0 18px;
        border-color: white;
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

const RecordsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 900px) {
        justify-content: flex-start;
        overflow-x: auto;
        width: 400px;
        -webkit-overflow-scrolling: touch;
        
        scrollbar-width: none;     
        -ms-overflow-style: none;   

        &::-webkit-scrollbar {
            display: none;   
        }
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

const RecordDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 105%;
    min-width: 1000px;
    max-width: 1200px;

    @media screen and (max-width: 900px) {
        min-width: 750px;
        max-width: none;
    }
`;

const GridRow = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 1.5fr) repeat(8, 1fr);
    gap: 10px;
    padding: 0.75rem 1rem;
    align-items: center;
    color: white;
    text-align: center;
    border-bottom: 1px solid white;
    background-color: #12121c;
    border-radius: 10px;

    @media screen and (max-width: 600px) {
        font-size: 0.8rem;
        padding: 0.4rem;
    }
`;

const HeaderRow = styled(GridRow)`
    font-weight: bold;
    background-color: #12121c;
    border-bottom: 1px solid white;
`;

const RivalryCell = styled.div`
    position: relative;
    margin: 0;
    cursor: help;

    &:hover span {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -8px);

        @media screen and (max-width: 900px) {
            transform: translateX(-50%);
        }
    }
    
    &:hover {
        font-weight: bold;
    }
`;

const Tooltip = styled.span`
    pointer-events: none;
    position: absolute;
    left: 50%;
    bottom: 120%;
    background: #222;
    color: white;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 0.8rem;
    opacity: 0;
    z-index: 10;

    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 140px;
    text-align: center;

    @media screen and (max-width: 900px) {
        position: fixed;
        left: 50%;
        top: 90px;
        bottom: auto;
        transform: translateX(-50%);
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

    const getRosterForManagerS3 = (managerName: string, oldName?: string): Roster3 | undefined => {
        return rosters3.find(
            (r) => r.manager === managerName || (oldName && r.manager === oldName)
        );
    };

    const getRosterForManagerS4 = (managerName: string, oldName?: string): Roster4 | undefined => {
        return rosters4.find(
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

    const RecordCell = ({total, regular, playoffs,}: {
        total: string;
        regular?: string;
        playoffs?: string;
    }) => {
        if (!regular && !playoffs) return <div>{total}</div>;

        return (
            <RivalryCell>
                {total}
                <Tooltip>
                    <div>Regular Season: {regular}</div>
                    <div>Playoffs: {playoffs}</div>
                </Tooltip>
            </RivalryCell>
        );
    };

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

            <StyledHeader $animate={ready}>Records</StyledHeader>

            <RecordsWrapper>
            <RecordDiv>
                <HeaderRow>
                    <div> </div>
                    <div style={{color: "#CC0000"}}>Brendan</div>
                    <div style={{color: "#FF9900"}}>Justave</div>
                    <div style={{color: "#F1C232"}}>James</div>
                    <div style={{color: "#6AA84F"}}>Marge</div>
                    <div style={{color: "#3586E8"}}>Isaac</div>
                    <div style={{color: "#9900FF"}}>Trocean</div>
                    <div style={{color: "#FF00FF"}}>Morgan</div>
                    <div style={{color: "#999999"}}>THANdrew</div>
                </HeaderRow>
                <GridRow>
                    <RivalryCell>
                        <div style={{ fontWeight: "bold", color: "#CC0000" }}>Brendan</div>
                        <Tooltip>
                            <div>All-Time: 25-19</div>
                            <div>Regular Season: 17-13</div>
                            <div>Playoffs: 8-6</div>
                        </Tooltip>
                    </RivalryCell>
                    <div>X</div>
                    <RecordCell total="6-3" regular="3-3" playoffs="3-0" />
                    <RecordCell total="5-7" regular="2-4" playoffs="3-3" />
                    <div>5-1</div>
                    <RecordCell total="3-5" regular="1-2" playoffs="2-3" />
                    <div>2-1</div>
                    <div>2-1</div>
                    <div>2-1</div>
                </GridRow>
                <GridRow>

                    <RivalryCell>
                        <div style={{ fontWeight: "bold", color: "#FF9900" }}>Justave</div>
                        <Tooltip>
                            <div>All-Time: 23-18</div>
                            <div>Regular Season: 17-13</div>
                            <div>Playoffs: 6-5</div>
                        </Tooltip>
                    </RivalryCell>
                    <RecordCell total="3-6" regular="3-3" playoffs="0-3" />
                    <div>X</div>
                    <RecordCell total="5-5" regular="2-4" playoffs="3-1" />
                    <div>4-2</div>
                    <div>2-1</div>
                    <div>3-0</div>
                    <RecordCell total="5-2" regular="2-1" playoffs="3-1" />
                    <div>1-2</div>
                </GridRow>
                <GridRow>
                    <RivalryCell>
                        <div style={{ fontWeight: "bold", color: "#F1C232" }}>James</div>
                        <Tooltip>
                            <div>All-Time: 30-23</div>
                            <div>Regular Season: 20-10</div>
                            <div>Playoffs: 10-5</div>
                        </Tooltip>
                    </RivalryCell>
                    <RecordCell total="7-5" regular="4-2" playoffs="3-3" />
                    <RecordCell total="5-5" regular="4-2" playoffs="1-1" />
                    <div>X</div>
                    <div>4-2</div>
                    <RecordCell total="5-1" regular="2-1" playoffs="3-0" />
                    <div>2-1</div>
                    <RecordCell total="6-1" regular="3-0" playoffs="3-1" />
                    <div>1-2</div>
                </GridRow>
                <GridRow>
                    <RivalryCell>
                        <div style={{ fontWeight: "bold", color: "#6AA84F" }}>Marge</div>
                        <Tooltip>
                            <div>All-Time: 11-19</div>
                        </Tooltip>
                    </RivalryCell>
                    <div>1-5</div>
                    <div>2-4</div>
                    <div>2-4</div>
                    <div>X</div>
                    <div>1-2</div>
                    <div>2-1</div>
                    <div>3-0</div>
                    <div>0-3</div>
                </GridRow>
                <GridRow>
                    <RivalryCell>
                        <div style={{ fontWeight: "bold", color: "#3586E8" }}>Isaac</div>
                        <Tooltip>
                            <div>All-Time: 23-19</div>
                            <div>Regular Season: 17-13</div>
                            <div>Playoffs: 6-6</div>
                        </Tooltip>
                    </RivalryCell>
                    <RecordCell total="5-3" regular="2-1" playoffs="3-2" />
                    <div>1-2</div>
                    <RecordCell total="1-5" regular="1-2" playoffs="0-3" />
                    <div>2-1</div>
                    <div>X</div>
                    <div>5-1</div>
                    <div>3-3</div>
                    <RecordCell total="6-4" regular="3-3" playoffs="3-1" />
                </GridRow>
                <GridRow>
                    <RivalryCell>
                        <div style={{ fontWeight: "bold", color: "#9900FF" }}>Trocean</div>
                        <Tooltip>
                            <div>All-Time: 8-22</div>
                        </Tooltip>
                    </RivalryCell>
                    <div>1-2</div>
                    <div>0-3</div>
                    <div>1-2</div>
                    <div>1-2</div>
                    <div>1-5</div>
                    <div>X</div>
                    <div>3-3</div>
                    <div>1-5</div>
                </GridRow>
                <GridRow>
                    <RivalryCell>
                        <div style={{ fontWeight: "bold", color: "#FF00FF" }}>Morgan</div>
                        <Tooltip>
                            <div>All-Time: 19-23</div>
                            <div>Regular Season: 13-17</div>
                            <div>Playoffs: 2-6</div>
                        </Tooltip>
                    </RivalryCell>
                    <div>1-2</div>
                    <RecordCell total="2-5" regular="1-2" playoffs="1-3" />
                    <RecordCell total="1-6" regular="0-3" playoffs="1-3" />
                    <div>0-3</div>
                    <div>3-3</div>
                    <div>3-3</div>
                    <div>X</div>
                    <div>5-1</div>
                </GridRow>
                <GridRow>
                    <RivalryCell>
                        <div style={{ fontWeight: "bold", color: "#999999" }}>THANdrew</div>
                        <Tooltip>
                            <div>All-Time: 18-16</div>
                            <div>Regular Season: 17-13</div>
                            <div>Playoffs: 1-3</div>
                        </Tooltip>
                    </RivalryCell>
                    <div>1-2</div>
                    <div>2-1</div>
                    <div>2-1</div>
                    <div>3-0</div>
                    <RecordCell total="4-6" regular="3-3" playoffs="1-3" />
                    <div>5-1</div>
                    <div>1-5</div>
                    <div>X</div>
                </GridRow>
            </RecordDiv>
            </RecordsWrapper>

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
                                            <img src={selectedManager.s4banner} alt="banner"/>
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
                                                <StyleRecord><strong>Record:</strong> {roster.record}</StyleRecord>
                                                <p style={{ fontWeight: "bold", marginTop: "0", marginBottom: "0.4rem" }}><strong>Captain:</strong> {roster.captain}</p>
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
                                    <StyledMiniHeader style={{ color: "#303030", marginTop: "1.5rem" }}>Season 2 Roster</StyledMiniHeader>

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
                                                <StyleRecord><strong>Record:</strong> {roster2.record}</StyleRecord>
                                                <p style={{ fontWeight: "bold", marginTop: "0", marginBottom: "0.4rem" }}><strong>Captain:</strong> {roster2.captain}</p>
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

                                    <StyledMiniHeader style={{ color: "#303030", marginTop: "1.5rem" }}>Season 3 Roster</StyledMiniHeader>

                                    {(() => {
                                        const roster3 = getRosterForManagerS3(selectedManager.name, selectedManager.oldname);

                                        if (!roster3) {
                                            return <p>No Season 3 roster available.</p>;
                                        }

                                        return (
                                            <>
                                                {roster3.accolades && (
                                                    <div style={{display: "flex", flexDirection: "column", gap: "8px", marginBottom: "10px",}}>
                                                        {roster3.accolades.map((acc) => (
                                                            <div key={acc.type} style={{backgroundColor: acc.color, color: "white",
                                                                padding: "4px", borderRadius: "8px", fontWeight: "bold",}}>{acc.type}</div>
                                                        ))}
                                                    </div>
                                                )}
                                                <StyleRecord><strong>Record:</strong> {roster3.record}</StyleRecord>
                                                <p style={{ fontWeight: "bold", marginTop: "0", marginBottom: "0.4rem" }}><strong>Captain:</strong> {roster3.captain}</p>
                                                <img src={selectedManager.s3banner} alt="banner" />
                                                <ul style={{listStyleType: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.3rem",}}>
                                                    {roster3.roster.map((player) => (
                                                        <li key={player.name} style={{background: "#e3e3e3", padding: "6px 10px",
                                                            borderRadius: "6px", fontWeight: "500",}}>{player.name}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        );
                                    })()}

                                    <StyledMiniHeader style={{ color: "#303030", marginTop: "1.5rem" }}>Season 4 Roster</StyledMiniHeader>

                                    {(() => {
                                        const roster4 = getRosterForManagerS4(selectedManager.name, selectedManager.oldname);

                                        if (!roster4) {
                                            return <p>No Season 4 roster available.</p>;
                                        }

                                        return (
                                            <>
                                                {roster4.accolades && (
                                                    <div style={{display: "flex", flexDirection: "column", gap: "8px", marginBottom: "10px",}}>
                                                        {roster4.accolades.map((acc) => (
                                                            <div key={acc.type} style={{backgroundColor: acc.color, color: "white",
                                                                padding: "4px", borderRadius: "8px", fontWeight: "bold",}}>{acc.type}</div>
                                                        ))}
                                                    </div>
                                                )}
                                                <p style={{ fontWeight: "bold", marginTop: "0", marginBottom: "0.4rem" }}><strong>Captain:</strong> {roster4.captain}</p>
                                                <img src={selectedManager.s4banner} alt="banner" />
                                                <ul style={{listStyleType: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.3rem",}}>
                                                    {roster4.roster.map((player) => (
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