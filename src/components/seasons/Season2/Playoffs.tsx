import { styled, keyframes, css } from "styled-components";
import {Link} from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";
import { GamesSeason2 } from "../../../data/GamesSeason2";
import type { GameStats } from "../../../data/GamesSeason2";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
    min-height: 100vh;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 2;
    font-size: 2rem;
    color: white;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const Matchup = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 0.25rem 2rem;
    padding: 1rem;
    background-color: #12121c;
    border-radius: 10px;
    width: 100%;
    color: white;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid white;
    max-width: 600px;
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
        width: 400px;
    }
`;

const TeamName = styled.p`
    font-weight: bold;
    margin: 0;
    font-size: 1.2rem;
`;

const TeamRecord = styled.p`
    font-size: 0.9rem;
    font-weight: bold;
    color: gray;
    margin: 0;
`;

const Stadium = styled.div`
    grid-column: span 3;
    font-size: 0.85rem;
    color: #aaa;
    text-align: center;
`;

const VsText = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0;
`;

const ScoreLine = styled.div`
    grid-column: 2;
    font-weight: bold;
    font-size: 1.3rem;
    text-align: center;
    margin-top: -1.5rem; 
`;

const GamesRow3 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
    max-width: 900px;
    margin-bottom: 3rem;
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const WorldSeriesHeader = styled(StyledMiniHeader)`
    font-family: 'Anton', sans-serif;
    font-size: 6rem;  
    letter-spacing: 0.1em;
    color: #FFD700;   
    text-shadow: 2px 2px 4px #000;
    margin-top: 2rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 1000px) {
        font-size: 48px;
    }
`;

const BannerDiv = styled.div`
    border: 20px solid #FF9900; 
    background-color: #EEEEEE;
    width: 700px;
    padding: 2rem 3rem;          
    box-shadow: 0 0 20px 5px rgba(241, 194, 50, 0.4); 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 3rem auto;
    @media screen and (max-width: 1000px) {
        width: 275px;
        margin-bottom: .25rem;
    }
`;

const ModalContent = styled.div<{ $navOffset: number; $animate?: boolean }>`
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #333333;
    color: white;
    width: min(900px, 94vw);
    padding-bottom: 10px;

    margin-top: ${({ $navOffset }) => `calc(${$navOffset}px)`};
    height: ${({ $navOffset }) => `calc(100vh - ${$navOffset}px - 24px)`};

    ${({ $animate }) =>
    $animate &&
    css`
            animation: ${fadeInUp} 0.6s ease forwards;
        `}
`;


const ModalScrollWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0 0.5rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
    

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

const ModalBackground = styled.div`
    position: fixed;
    inset: 0;
    z-index: 99999;

    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(6px);

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`;

const StatsTable = styled.table`
    border-collapse: collapse;
    margin: 2rem auto;
    width: 90%;
    max-width: 800px;
    color: white;
    text-align: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #444;
    border-radius: 10px;
    overflow: hidden;
    
`;

const StatsTh = styled.th`
    border: 1px solid #666;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    font-weight: bold;
`;

const StatsTd = styled.td`
    border: 1px solid #555;
    padding: 0.5rem;
    font-size: 1rem;
`;

const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: start;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const TeamColumn = styled.div`
    border-radius: 12px;
    background: rgba(255, 255, 255, .05);
`;

export default function Playoffs2() {
    const [selectedGame, setSelectedGame] = useState<GameStats | null>(null);
    const [navHeight, setNavHeight] = useState(0);

    useLayoutEffect(() => {
        const measure = () => {
            const nav = document.querySelector("nav");
            const h = nav ? Math.ceil(nav.getBoundingClientRect().height) : 0;
            setNavHeight(h);
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season2">← Back</Link>
            </ToggleButton>
            <StyledHeader style={{marginBottom: "10px"}}>Season 2 PMBL Playoffs</StyledHeader>

            <WorldSeriesHeader style={{color: "#888888"}}>Conference Series</WorldSeriesHeader>
            <StyledMiniHeader>
                (1) <span style={{color: "#FF9900"}}>Justave</span> v.s. (4) <span style={{color: "#FF00FF"}}>Morgan</span>
            </StyledMiniHeader>

            <GamesRow3>
                <div>
                    <StyledMiniHeader>Game 1</StyledMiniHeader>
                    <Matchup onClick={() => setSelectedGame(GamesSeason2["Game44"])} style={{ cursor: "pointer" }}>
                        <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                        <TeamRecord>(0-1)</TeamRecord>
                        <div/>
                        <TeamRecord>(1-0)</TeamRecord>
                        <ScoreLine>6 - 8</ScoreLine>
                        <Stadium>Daisy Cruiser</Stadium>
                    </Matchup>
                </div>

                <div>
                    <StyledMiniHeader>Game 2</StyledMiniHeader>
                    <Matchup onClick={() => setSelectedGame(GamesSeason2["Game45"])} style={{ cursor: "pointer" }}>
                        <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                        <TeamRecord>(1-1)</TeamRecord>
                        <div/>
                        <TeamRecord>(1-1)</TeamRecord>
                        <ScoreLine>8 - 7</ScoreLine>
                        <Stadium>Daisy Cruiser</Stadium>
                    </Matchup>
                </div>

                <div>
                    <StyledMiniHeader>Game 3</StyledMiniHeader>
                    <Matchup onClick={() => setSelectedGame(GamesSeason2["Game46"])} style={{ cursor: "pointer" }}>
                        <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                        <TeamRecord>(2-1)</TeamRecord>
                        <div/>
                        <TeamRecord>(1-2)</TeamRecord>
                        <ScoreLine>3 - 0</ScoreLine>
                        <Stadium>Mario Stadium</Stadium>
                    </Matchup>
                </div>
            </GamesRow3>
            <div style={{marginBottom: "50px"}}>
                <StyledMiniHeader>Game 4</StyledMiniHeader>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game47"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(3-1)</TeamRecord>
                    <div/>
                    <TeamRecord>(1-3)</TeamRecord>
                    <ScoreLine>16 - 0</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
            </div>

            <StyledMiniHeader>
                (2) <span style={{color: "#3586E8"}}>Isaac</span> v.s. (3) <span style={{color: "#F1C232"}}>James</span>
            </StyledMiniHeader>

            <GamesRow3>
                <div>
                    <StyledMiniHeader>Game 1</StyledMiniHeader>
                    <Matchup onClick={() => setSelectedGame(GamesSeason2["Game41"])} style={{ cursor: "pointer" }}>
                        <TeamName style={{color: "#F1C232"}}>James</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                        <TeamRecord>(1-0)</TeamRecord>
                        <div/>
                        <TeamRecord>(0-1)</TeamRecord>
                        <ScoreLine>22 - 16</ScoreLine>
                        <Stadium>DK Jungle</Stadium>
                    </Matchup>
                </div>
                <div>
                    <StyledMiniHeader>Game 2</StyledMiniHeader>
                    <Matchup onClick={() => setSelectedGame(GamesSeason2["Game42"])} style={{ cursor: "pointer" }}>
                        <TeamName style={{color: "#F1C232"}}>James</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                        <TeamRecord>(2-0)</TeamRecord>
                        <div/>
                        <TeamRecord>(0-2)</TeamRecord>
                        <ScoreLine>12 - 4</ScoreLine>
                        <Stadium>DK Jungle</Stadium>
                    </Matchup>
                </div>
                <div>
                    <StyledMiniHeader>Game 3</StyledMiniHeader>
                    <Matchup onClick={() => setSelectedGame(GamesSeason2["Game43"])} style={{ cursor: "pointer" }}>
                        <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#F1C232"}}>James</TeamName>
                        <TeamRecord>(0-3)</TeamRecord>
                        <div/>
                        <TeamRecord>(3-0)</TeamRecord>
                        <ScoreLine>2 - 14</ScoreLine>
                        <Stadium>Yoshi Park</Stadium>
                    </Matchup>
                </div>
            </GamesRow3>

            <WorldSeriesHeader>WORLD SERIES</WorldSeriesHeader>

            <StyledMiniHeader>
                (1) <span style={{color: "#FF9900"}}>Justave</span> v.s. (3) <span style={{color: "#F1C232"}}>James</span>
            </StyledMiniHeader>

            <GamesRow3>
                <div>
                    <StyledMiniHeader>Game 1</StyledMiniHeader>
                    <Matchup onClick={() => setSelectedGame(GamesSeason2["Game48"])} style={{ cursor: "pointer" }}>
                        <TeamName style={{ color: "#F1C232" }}>James</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                        <TeamRecord>(1-0)</TeamRecord>
                        <div />
                        <TeamRecord>(0-1)</TeamRecord>
                        <ScoreLine>17 - 9</ScoreLine>
                        <Stadium>Daisy Cruiser</Stadium>
                    </Matchup>
                </div>
                <div>
                    <StyledMiniHeader>Game 2</StyledMiniHeader>
                    <Matchup onClick={() => setSelectedGame(GamesSeason2["Game49"])} style={{ cursor: "pointer" }}>
                        <TeamName style={{ color: "#F1C232" }}>James</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                        <TeamRecord>(2-0)</TeamRecord>
                        <div />
                        <TeamRecord>(0-2)</TeamRecord>
                        <ScoreLine>5 - 7</ScoreLine>
                        <Stadium>Daisy Cruiser</Stadium>
                    </Matchup>
                </div>
                <div>
                    <StyledMiniHeader>Game 3</StyledMiniHeader>
                    <Matchup onClick={() => setSelectedGame(GamesSeason2["Game50"])} style={{ cursor: "pointer" }}>
                        <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{ color: "#F1C232" }}>James</TeamName>
                        <TeamRecord>(2-1)</TeamRecord>
                        <div />
                        <TeamRecord>(1-2)</TeamRecord>
                        <ScoreLine>10 - 7</ScoreLine>
                        <Stadium>Yoshi Park</Stadium>
                    </Matchup>
                </div>
            </GamesRow3>
            <div style={{marginBottom: "50px"}}>
                <StyledMiniHeader>Game 4</StyledMiniHeader>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game51"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{ color: "#F1C232" }}>James</TeamName>
                    <TeamRecord>(3-1)</TeamRecord>
                    <div />
                    <TeamRecord>(1-3)</TeamRecord>
                    <ScoreLine>8 - 6</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
            </div>

            <BannerDiv>
                <WorldSeriesHeader style={{marginBottom: "0", textShadow: "none", color: "#FF9900"}}>World Series Champions</WorldSeriesHeader>
                <img src="/LeagueLogo_noWords.png" alt="logo" style={{width: "150px", height: "150px", objectFit: "contain", margin: "0",}}/>
                <h2 style={{fontFamily: "'Anton', sans-serif", letterSpacing: "2px", fontSize: "4rem", margin: "0", color: "#FF9900"}}>Justave</h2>
                <h4 style={{fontFamily: "'Open Sans', sans-serif", color: "black"}}>Luigi Knights</h4>
                <img src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
            </BannerDiv>

            {selectedGame && (
                <ModalBackground onClick={() => setSelectedGame(null)}>
                    <ModalContent
                        $navOffset={navHeight}
                        $animate={!!selectedGame}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CloseButton onClick={() => setSelectedGame(null)}>✕</CloseButton>

                        <ModalScrollWrapper>
                            <h2 style={{ textAlign: "center", marginTop: "1.5rem" }}>{selectedGame.awayManager} vs {selectedGame.homeManager}</h2>

                            <StatsTable>
                                <thead>
                                <tr>
                                    <StatsTh>Team</StatsTh>
                                    {selectedGame.game.away.scores.map((_, i) => (
                                        <StatsTh key={i}>{i + 1}</StatsTh>
                                    ))}
                                    <StatsTh>R</StatsTh>
                                    <StatsTh>H</StatsTh>
                                    <StatsTh>E</StatsTh>
                                    <StatsTh>LOB</StatsTh>
                                </tr>
                                </thead>
                                <tbody>
                                {[selectedGame.game.away, selectedGame.game.home].map(team => (
                                    <tr key={team.name}>
                                        <StatsTd style={{ color: team.color }}>{team.name}</StatsTd>
                                        {team.scores.map((s, i) => (
                                            <StatsTd key={i}>{s}</StatsTd>
                                        ))}
                                        <StatsTd>{team.R}</StatsTd>
                                        <StatsTd>{team.H}</StatsTd>
                                        <StatsTd>{team.E}</StatsTd>
                                        <StatsTd>{team.LOB}</StatsTd>
                                    </tr>
                                ))}
                                </tbody>
                            </StatsTable>

                            <TwoColumnGrid>
                                <TeamColumn>
                                    <h3 style={{ color: selectedGame.game.away.color, textAlign: "center" }}>
                                        {selectedGame.game.away.name}
                                    </h3>

                                    <h4 style={{textAlign: "center", margin: "0px"}}>Batting</h4>
                                    <StatsTable>
                                        <tr>
                                            <StatsTh>Player</StatsTh>
                                            <StatsTh>AB</StatsTh>
                                            <StatsTh>H</StatsTh>
                                            <StatsTh>R</StatsTh>
                                            <StatsTh>RBI</StatsTh>
                                            <StatsTh>HR</StatsTh>
                                        </tr>
                                        <tbody>
                                        {selectedGame.battingStats
                                            .filter(p => p.team === selectedGame.game.away.name)
                                            .map(p => (
                                                <tr key={p.player}>
                                                    <StatsTd>{p.player}</StatsTd>
                                                    <StatsTd>{p.AB}</StatsTd>
                                                    <StatsTd>{p.H}</StatsTd>
                                                    <StatsTd>{p.R}</StatsTd>
                                                    <StatsTd>{p.RBI}</StatsTd>
                                                    <StatsTd>{p.HR}</StatsTd>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StatsTable>

                                    <h4 style={{textAlign: "center", margin: "0px"}}>Pitching</h4>
                                    <StatsTable>
                                        <thead>
                                        <tr>
                                            <StatsTh>Player</StatsTh>
                                            <StatsTh>IP</StatsTh>
                                            <StatsTh>H</StatsTh>
                                            <StatsTh>ER</StatsTh>
                                            <StatsTh>SO</StatsTh>
                                            <StatsTh>ERA</StatsTh>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {selectedGame.pitchingStats
                                            .filter((p) => p.team === selectedGame.game.away.name)
                                            .map((p) => (
                                                <tr key={p.player}>
                                                    <StatsTd>{p.player}</StatsTd>
                                                    <StatsTd>{p.IP}</StatsTd>
                                                    <StatsTd>{p.H}</StatsTd>
                                                    <StatsTd>{p.ER}</StatsTd>
                                                    <StatsTd>{p.SO}</StatsTd>
                                                    <StatsTd>{p.ERA}</StatsTd>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StatsTable>
                                </TeamColumn>

                                <TeamColumn>
                                    <h3 style={{ color: selectedGame.game.home.color, textAlign: "center" }}>
                                        {selectedGame.game.home.name}
                                    </h3>

                                    <h4 style={{textAlign: "center", margin: "0px"}}>Batting</h4>
                                    <StatsTable>
                                        <tr>
                                            <StatsTh>Player</StatsTh>
                                            <StatsTh>AB</StatsTh>
                                            <StatsTh>H</StatsTh>
                                            <StatsTh>R</StatsTh>
                                            <StatsTh>RBI</StatsTh>
                                            <StatsTh>HR</StatsTh>
                                        </tr>
                                        <tbody>
                                        {selectedGame.battingStats
                                            .filter(p => p.team === selectedGame.game.home.name)
                                            .map(p => (
                                                <tr key={p.player}>
                                                    <StatsTd>{p.player}</StatsTd>
                                                    <StatsTd>{p.AB}</StatsTd>
                                                    <StatsTd>{p.H}</StatsTd>
                                                    <StatsTd>{p.R}</StatsTd>
                                                    <StatsTd>{p.RBI}</StatsTd>
                                                    <StatsTd>{p.HR}</StatsTd>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StatsTable>

                                    <h4 style={{textAlign: "center", margin: "0px"}}>Pitching</h4>
                                    <StatsTable>
                                        <tr>
                                            <StatsTh>Player</StatsTh>
                                            <StatsTh>IP</StatsTh>
                                            <StatsTh>H</StatsTh>
                                            <StatsTh>ER</StatsTh>
                                            <StatsTh>SO</StatsTh>
                                            <StatsTh>ERA</StatsTh>
                                        </tr>
                                        <tbody>
                                        {selectedGame.pitchingStats
                                            .filter((p) => p.team === selectedGame.game.home.name)
                                            .map((p) => (
                                                <tr key={p.player}>
                                                    <StatsTd>{p.player}</StatsTd>
                                                    <StatsTd>{p.IP}</StatsTd>
                                                    <StatsTd>{p.H}</StatsTd>
                                                    <StatsTd>{p.ER}</StatsTd>
                                                    <StatsTd>{p.SO}</StatsTd>
                                                    <StatsTd>{p.ERA}</StatsTd>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StatsTable>
                                </TeamColumn>
                            </TwoColumnGrid>
                        </ModalScrollWrapper>
                    </ModalContent>
                </ModalBackground>

            )}
        </ContentDiv>

    )
}