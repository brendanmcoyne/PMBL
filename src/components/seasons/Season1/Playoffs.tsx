import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
    position: relative;
`;

const StyledHeader = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 12px #ff0;
    margin-bottom: 0;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 2;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const ToggleButton = styled.button`
    background-color: lightgray;
    font-size: 1.5rem;
    border: none;
    padding: 7px 15px;
    cursor: pointer;
    align-self: flex-start;
    margin-left: 2rem;
`;

const Matchup = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto auto auto auto;
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
  margin-bottom: 2rem;
`;

const WorldSeriesHeader = styled(StyledMiniHeader)`
  font-family: 'Anton', sans-serif;
  font-size: 6rem;  
  letter-spacing: 0.1em;
  color: #FFD700;   
  text-shadow: 2px 2px 4px #000;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ConfSeriesHeader = styled(StyledMiniHeader)`
  font-family: 'Anton', sans-serif;
  font-size: 5rem;  
  letter-spacing: 0.1em;
  color: #888888;   
  text-shadow: 2px 2px 4px #000;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export default function Playoffs1() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "darkblue"}} to="/archives/seasons/Season1">Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 PMBL Playoffs</StyledHeader>
            <ConfSeriesHeader>Conference Series</ConfSeriesHeader>
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

            <StyledHeader>World Series Champion</StyledHeader>
            <StyledMiniHeader>James</StyledMiniHeader>
        </ContentDiv>

    )
}