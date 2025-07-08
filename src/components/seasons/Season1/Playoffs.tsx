import {styled} from "styled-components";
import {Link} from "react-router-dom";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";

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
    border: 20px solid #F1C232; 
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

export default function Playoffs1() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season1">← Back</Link>
            </ToggleButton>
            <StyledHeader style={{marginBottom: "10px"}}>Season 1 PMBL Playoffs</StyledHeader>

            <WorldSeriesHeader style={{color: "#888888"}}>Conference Series</WorldSeriesHeader>
            <StyledMiniHeader>
                (1) <span style={{color: "#CC0000"}}>Brendan</span> v.s. (4) <span style={{color: "#FF9900"}}>Justin</span>
            </StyledMiniHeader>

            <GamesRow3>
                <div>
                    <StyledMiniHeader>Game 1</StyledMiniHeader>
                    <Matchup>
                        <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                        <TeamRecord>(0-1)</TeamRecord>
                        <div/>
                        <TeamRecord>(1-0)</TeamRecord>
                        <ScoreLine>3 - 7</ScoreLine>
                        <Stadium>Mario Stadium</Stadium>
                    </Matchup>
                </div>

                <div>
                    <StyledMiniHeader>Game 2</StyledMiniHeader>
                    <Matchup>
                        <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                        <TeamRecord>(0-2)</TeamRecord>
                        <div/>
                        <TeamRecord>(2-0)</TeamRecord>
                        <ScoreLine>1 - 7</ScoreLine>
                        <Stadium>Mario Stadium</Stadium>
                    </Matchup>
                </div>

                <div>
                    <StyledMiniHeader>Game 3</StyledMiniHeader>
                    <Matchup>
                        <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                        <TeamRecord>(3-0)</TeamRecord>
                        <div/>
                        <TeamRecord>(0-3)</TeamRecord>
                        <ScoreLine>1 - 0</ScoreLine>
                        <Stadium>DK Jungle</Stadium>
                    </Matchup>
                </div>
            </GamesRow3>

            <StyledMiniHeader>
                (2) <span style={{color: "#FF00FF"}}>Morgan</span> v.s. (3) <span style={{color: "#F1C232"}}>James</span>
            </StyledMiniHeader>

            <GamesRow3>
                <div>
                    <StyledMiniHeader>Game 1</StyledMiniHeader>
                    <Matchup>
                        <TeamName style={{color: "#F1C232"}}>James</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                        <TeamRecord>(1-0)</TeamRecord>
                        <div/>
                        <TeamRecord>(0-1)</TeamRecord>
                        <ScoreLine>11 - 6</ScoreLine>
                        <Stadium>Mario Stadium</Stadium>
                    </Matchup>
                </div>
                <div>
                    <StyledMiniHeader>Game 2</StyledMiniHeader>
                    <Matchup>
                        <TeamName style={{color: "#F1C232"}}>James</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                        <TeamRecord>(2-0)</TeamRecord>
                        <div/>
                        <TeamRecord>(0-2)</TeamRecord>
                        <ScoreLine>11 - 5</ScoreLine>
                        <Stadium>Mario Stadium</Stadium>
                    </Matchup>
                </div>
                <div>
                    <StyledMiniHeader>Game 3</StyledMiniHeader>
                    <Matchup>
                        <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#F1C232"}}>James</TeamName>
                        <TeamRecord>(1-2)</TeamRecord>
                        <div/>
                        <TeamRecord>(2-1)</TeamRecord>
                        <ScoreLine>6 - 4</ScoreLine>
                        <Stadium>Daisy Cruiser</Stadium>
                    </Matchup>
                </div>
            </GamesRow3>
                <div style={{marginBottom: "50px"}}>
                    <StyledMiniHeader style={{marginTop: "5px"}}>Game 4</StyledMiniHeader>
                    <Matchup>
                        <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{color: "#F1C232"}}>James</TeamName>
                        <TeamRecord>(1-3)</TeamRecord>
                        <div/>
                        <TeamRecord>(3-1)</TeamRecord>
                        <ScoreLine>4 - 6</ScoreLine>
                        <Stadium>Daisy Cruiser</Stadium>
                    </Matchup>
                </div>


            <WorldSeriesHeader>WORLD SERIES</WorldSeriesHeader>

            <StyledMiniHeader>
                (1) <span style={{color: "#CC0000"}}>Brendan</span> v.s. (3) <span style={{color: "#F1C232"}}>James</span>
            </StyledMiniHeader>

            <GamesRow3>
                <div>
                    <StyledMiniHeader>Game 1</StyledMiniHeader>
                    <Matchup>
                        <TeamName style={{ color: "#F1C232" }}>James</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{ color: "#CC0000" }}>Brendan</TeamName>
                        <TeamRecord>(1-0)</TeamRecord>
                        <div />
                        <TeamRecord>(0-1)</TeamRecord>
                        <ScoreLine>7 - 0</ScoreLine>
                        <Stadium>Mario Stadium</Stadium>
                    </Matchup>
                </div>
                <div>
                    <StyledMiniHeader>Game 2</StyledMiniHeader>
                    <Matchup>
                        <TeamName style={{ color: "#F1C232" }}>James</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{ color: "#CC0000" }}>Brendan</TeamName>
                        <TeamRecord>(2-0)</TeamRecord>
                        <div />
                        <TeamRecord>(0-2)</TeamRecord>
                        <ScoreLine>13 - 6</ScoreLine>
                        <Stadium>Mario Stadium</Stadium>
                    </Matchup>
                </div>
                <div>
                    <StyledMiniHeader>Game 3</StyledMiniHeader>
                    <Matchup>
                        <TeamName style={{ color: "#CC0000" }}>Brendan</TeamName>
                        <VsText>vs</VsText>
                        <TeamName style={{ color: "#F1C232" }}>James</TeamName>
                        <TeamRecord>(0-3)</TeamRecord>
                        <div />
                        <TeamRecord>(3-0)</TeamRecord>
                        <ScoreLine>5 - 7</ScoreLine>
                        <Stadium>Daisy Cruiser</Stadium>
                    </Matchup>
                </div>
            </GamesRow3>

            <BannerDiv>
                <WorldSeriesHeader style={{marginBottom: "0", textShadow: "none"}}>World Series Champions</WorldSeriesHeader>
                <img src="/LeagueLogo_noWords.png" alt="logo" style={{width: "150px", height: "150px", objectFit: "contain", margin: "0",}}/>
                <h2 style={{fontFamily: "'Anton', sans-serif", letterSpacing: "2px", fontSize: "4rem", margin: "0", color: "#F1C232"}}>James</h2>
                <h4 style={{fontFamily: "'Open Sans', sans-serif", color: "black"}}>Bowser Monsters</h4>
                <img src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser"/>
            </BannerDiv>
        </ContentDiv>

    )
}