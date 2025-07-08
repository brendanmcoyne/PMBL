import { styled } from "styled-components";
import {Link} from "react-router-dom";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
    position: relative;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 2;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const CenteredMatchupWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    @media screen and (max-width: 1000px) {
        width: 85%;
    }
`;

const MatchupLabel = styled.p`
    color: white;
    font-weight: bold;
    font-size: 30px;
    margin: 0;
    text-align: center;
`;

const Week = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 3rem;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
        width: 85%;
    }
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

export default function Schedule1() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season1">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 Regular Season</StyledHeader>
            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 1</StyledMiniHeader>

            <Week>
                <Matchup>
                    <TeamName style={{color: "#999999"}}>DANdrew</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <TeamRecord>(1-0)</TeamRecord>
                    <div />
                    <TeamRecord>(0-1)</TeamRecord>
                    <ScoreLine>2 - 0</ScoreLine>
                    <Stadium>Wario City</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                    <TeamRecord>(1-0)</TeamRecord>
                    <div />
                    <TeamRecord>(0-1)</TeamRecord>
                    <ScoreLine>8 - 7</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#9900FF"}}>Christach</TeamName>
                    <TeamRecord>(1-0)</TeamRecord>
                    <div />
                    <TeamRecord>(0-1)</TeamRecord>
                    <ScoreLine>9 - 0</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#6AA84F"}}>Matt</TeamName>
                    <TeamRecord>(0-1)</TeamRecord>
                    <div />
                    <TeamRecord>(1-0)</TeamRecord>
                    <ScoreLine>4 - 7</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 2</StyledMiniHeader>

            <Week>
                <Matchup>
                    <TeamName style={{color: "#6AA84F"}}>Matt</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <TeamRecord>(2-0)</TeamRecord>
                    <div/>
                    <TeamRecord>(1-1)</TeamRecord>
                    <ScoreLine>5 - 2</ScoreLine>
                    <Stadium>Bowser Jr's Playroom</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <TeamRecord>(1-1)</TeamRecord>
                    <div />
                    <TeamRecord>(1-1)</TeamRecord>
                    <ScoreLine>8 - 4</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#999999"}}>DANdrew</TeamName>
                    <TeamRecord>(1-1)</TeamRecord>
                    <div/>
                    <TeamRecord>(1-1)</TeamRecord>
                    <ScoreLine>13 - 5</ScoreLine>
                    <Stadium>DK Jungle</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#9900FF"}}>Christach</TeamName>
                    <TeamRecord>(1-1)</TeamRecord>
                    <div/>
                    <TeamRecord>(0-2)</TeamRecord>
                    <ScoreLine>9 - 8</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>

            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 3</StyledMiniHeader>

            <Week>
                <Matchup>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <TeamRecord>(1-2)</TeamRecord>
                    <div />
                    <TeamRecord>(2-1)</TeamRecord>
                    <ScoreLine>7 - 8</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>

                <Matchup>
                    <TeamName style={{color: "#6AA84F"}}>Matt</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <TeamRecord>(2-1)</TeamRecord>
                    <div />
                    <TeamRecord>(2-1)</TeamRecord>
                    <ScoreLine>3 - 11</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#999999"}}>DANdrew</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#9900FF"}}>Christach</TeamName>
                    <TeamRecord>(2-1)</TeamRecord>
                    <div />
                    <TeamRecord>(0-3)</TeamRecord>
                    <ScoreLine>17 - 6</ScoreLine>
                    <Stadium>Wario City</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(2-1)</TeamRecord>
                    <div />
                    <TeamRecord>(1-2)</TeamRecord>
                    <ScoreLine>9 - 7</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
            </Week>


            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 4</StyledMiniHeader>

            <Week>
                <Matchup>
                    <TeamName style={{color: "#6AA84F"}}>Matt</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <TeamRecord>(2-2)</TeamRecord>
                    <div />
                    <TeamRecord>(3-1)</TeamRecord>
                    <ScoreLine>6 - 19</ScoreLine>
                    <Stadium>DK Jungle</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#999999"}}>DANdrew</TeamName>
                    <TeamRecord>(3-1)</TeamRecord>
                    <div />
                    <TeamRecord>(2-2)</TeamRecord>
                    <ScoreLine>13 - 2</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <TeamRecord>(2-2)</TeamRecord>
                    <div />
                    <TeamRecord>(2-2)</TeamRecord>
                    <ScoreLine>5 - 7</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#9900FF"}}>Christach</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(1-3)</TeamRecord>
                    <div />
                    <TeamRecord>(1-3)</TeamRecord>
                    <ScoreLine>5 - 1</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 5</StyledMiniHeader>

            <Week>
                <Matchup>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <TeamRecord>(3-2)</TeamRecord>
                    <div />
                    <TeamRecord>(3-2)</TeamRecord>
                    <ScoreLine>5 - 15</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#9900FF"}}>Christach</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#6AA84F"}}>Matt</TeamName>
                    <TeamRecord>(1-4)</TeamRecord>
                    <div />
                    <TeamRecord>(3-2)</TeamRecord>
                    <ScoreLine>4 - 12</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#999999"}}>DANdrew</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                    <TeamRecord>(2-3)</TeamRecord>
                    <div />
                    <TeamRecord>(3-2)</TeamRecord>
                    <ScoreLine>2 - 9</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <TeamRecord>(2-3)</TeamRecord>
                    <div />
                    <TeamRecord>(3-2)</TeamRecord>
                    <ScoreLine>5 - 4</ScoreLine>
                    <Stadium>DK Jungle</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 6</StyledMiniHeader>

            <Week>
                <Matchup>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                    <TeamRecord>(3-3)</TeamRecord>
                    <div />
                    <TeamRecord>(4-2)</TeamRecord>
                    <ScoreLine>4 - 9</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#999999"}}>DANdrew</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(2-4)</TeamRecord>
                    <div />
                    <TeamRecord>(3-3)</TeamRecord>
                    <ScoreLine>3 - 5</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#6AA84F"}}>Matt</TeamName>
                    <TeamRecord>(4-2)</TeamRecord>
                    <div />
                    <TeamRecord>(3-3)</TeamRecord>
                    <ScoreLine>5 - 4</ScoreLine>
                    <Stadium>Wario City</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#9900FF"}}>Christach</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <TeamRecord>(2-4)</TeamRecord>
                    <div />
                    <TeamRecord>(3-3)</TeamRecord>
                    <ScoreLine>13 - 7</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 7</StyledMiniHeader>

            <Week>
                <Matchup>
                    <TeamName style={{color: "#6AA84F"}}>Matt</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                    <TeamRecord>(3-4)</TeamRecord>
                    <div />
                    <TeamRecord>(5-2)</TeamRecord>
                    <ScoreLine>11 - 14</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#999999"}}>DANdrew</TeamName>
                    <TeamRecord>(4-3)</TeamRecord>
                    <div />
                    <TeamRecord>(2-5)</TeamRecord>
                    <ScoreLine>10 - 6</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(3-4)</TeamRecord>
                    <div />
                    <TeamRecord>(4-3)</TeamRecord>
                    <ScoreLine>6 - 7</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#9900FF"}}>Christach</TeamName>
                    <TeamRecord>(4-3)</TeamRecord>
                    <div />
                    <TeamRecord>(3-4)</TeamRecord>
                    <ScoreLine>6 - 7</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 8</StyledMiniHeader>

            <Week>
                <Matchup>
                    <TeamName style={{color: "#9900FF"}}>Christach</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <TeamRecord>(3-5)</TeamRecord>
                    <div />
                    <TeamRecord>(4-4)</TeamRecord>
                    <ScoreLine>4 - 23</ScoreLine>
                    <Stadium>Wario City</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <TeamRecord>(5-3)</TeamRecord>
                    <div />
                    <TeamRecord>(5-3)</TeamRecord>
                    <ScoreLine>0 - 6</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(5-3)</TeamRecord>
                    <div />
                    <TeamRecord>(4-4)</TeamRecord>
                    <ScoreLine>7 - 1</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#6AA84F"}}>Matt</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#999999"}}>DANdrew</TeamName>
                    <TeamRecord>(3-5)</TeamRecord>
                    <div />
                    <TeamRecord>(3-5)</TeamRecord>
                    <ScoreLine>8 - 10</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 9</StyledMiniHeader>

            <Week>
                <Matchup>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <TeamRecord>(4-5)</TeamRecord>
                    <div />
                    <TeamRecord>(6-3)</TeamRecord>
                    <ScoreLine>8 - 10</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#6AA84F"}}>Matt</TeamName>
                    <TeamRecord>(6-3)</TeamRecord>
                    <div />
                    <TeamRecord>(3-6)</TeamRecord>
                    <ScoreLine>7 - 1</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#9900FF"}}>Christach</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#999999"}}>DANdrew</TeamName>
                    <TeamRecord>(3-6)</TeamRecord>
                    <div />
                    <TeamRecord>(4-5)</TeamRecord>
                    <ScoreLine>3 - 7</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
                <Matchup>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <TeamRecord>(4-5)</TeamRecord>
                    <div />
                    <TeamRecord>(6-3)</TeamRecord>
                    <ScoreLine>3 - 7</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 10</StyledMiniHeader>

            <Week>
                <Matchup>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#6AA84F"}}>Matt</TeamName>
                    <TeamRecord>(6-4)</TeamRecord>
                    <div />
                    <TeamRecord>(4-6)</TeamRecord>
                    <ScoreLine>14 - 15</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>

                <Matchup>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF9900"}}>Justin</TeamName>
                    <TeamRecord>(7-3)</TeamRecord>
                    <div />
                    <TeamRecord>(6-4)</TeamRecord>
                    <ScoreLine>8 - 5</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>

                <Matchup>
                    <TeamName style={{color: "#999999"}}>DANdrew</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <TeamRecord>(5-5)</TeamRecord>
                    <div />
                    <TeamRecord>(4-6)</TeamRecord>
                    <ScoreLine>15 - 10</ScoreLine>
                    <Stadium>Wario City</Stadium>
                </Matchup>

                <Matchup>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#9900FF"}}>Christach</TeamName>
                    <TeamRecord>(5-5)</TeamRecord>
                    <div />
                    <TeamRecord>(3-7)</TeamRecord>
                    <ScoreLine>9 - 4</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>** All Star Game **</StyledMiniHeader>

            <CenteredMatchupWrapper>
                <Matchup>
                    <TeamName style={{color: "#4A86E8"}}>All-Star East</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF0000"}}>All-Star West</TeamName>
                    <TeamRecord>(1-0)</TeamRecord>
                    <div />
                    <TeamRecord>(0-1)</TeamRecord>
                    <ScoreLine>21 - 4</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
            </CenteredMatchupWrapper>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Special Games</StyledMiniHeader>

            <Week style={{display: "flex", flexDirection: "column", maxWidth: "600px"}}>
                <Matchup style={{display: "flex", flexDirection: "column"}}>
                    <MatchupLabel>The Monty Mole Game</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 3</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{color: "#FF9900", marginRight: "10px"}}>Justin</TeamName>
                        </div>
                        <VsText>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{color: "#FF00FF", marginLeft: "10px"}}>Morgan</TeamName>
                        </div>
                    </div>
                    <ScoreLine>9 - 7</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                    <p style={{color: "lightgray"}}>Late in the 6th down 5 - 7 with the bases loaded, Monty Mole woould hit a grand
                        slam into left field to propel Justin ahead of Morgan. Monty Mole would later win game MVP and become one
                        of the most despised players in the league. </p>
                </Matchup>
                <Matchup style={{display: "flex", flexDirection: "column"}}>
                    <MatchupLabel>The Dominican Domination</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 5</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{color: "#FF00FF", marginRight: "10px"}}>Morgan</TeamName>
                        </div>
                        <VsText>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{color: "#3586E8", marginLeft: "10px"}}>Isaac</TeamName>
                        </div>
                    </div>
                    <ScoreLine>5 - 4</ScoreLine>
                    <Stadium>DK Jungle</Stadium>
                    <p style={{color: "lightgray"}}>After taking a surprising 2-0 lead, Morgan would then let up 4 straight runs to
                        be down 4-2. In the bottom of the 7th, Morgan rallied to score 3 after a great Petey Piranha defensive
                        performance and a 2 runs score from the Dominican. Captain Diddy would deliver a slap hit to drive in the winning run.</p>
                </Matchup>
                <Matchup style={{display: "flex", flexDirection: "column"}}>
                    <MatchupLabel>The Shy Guy Tribute Game</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 7</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{color: "#6AA84F", marginRight: "10px"}}>Matt</TeamName>
                        </div>
                        <VsText>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{color: "#FF9900", marginLeft: "10px"}}>Justin</TeamName>
                        </div>
                    </div>
                    <ScoreLine>11 - 14</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                    <p style={{color: "lightgray"}}>Right after the attacks of Red Shy Guy and Green Shy Guy, Goomba and Paragoomba
                        would be subbed in for their first games of the year. After giving up 5 to Matt in the 1st, Justin would rally
                        to tie it 11-11 in the bottom of the 7th. This game became the longest game in PMBL, being the first game to
                        go to the 10th inning. Daisy would hit a 3-run walkoff for Justin to seal the victory.</p>
                </Matchup>
                <Matchup style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <MatchupLabel>The Dominican Domination II</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 7</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{color: "#3586E8", marginRight: "10px"}}>Isaac</TeamName>
                        </div>
                        <VsText>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{color: "#FF00FF", marginLeft: "10px"}}>Morgan</TeamName>
                        </div>
                    </div>
                    <ScoreLine>6 - 7</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                    <p style={{color: "lightgray"}}>Down 3-6 in the 6th, Petey "The Dominican" Piranha would hit a grand slam to left center to
                        take the lead 7-6 over Isaac. Petey Piranha would win Game MVP again to continue his league MVP campaign, and take
                        division lead for the rest of the season.</p>
                </Matchup>
                <Matchup style={{display: "flex", flexDirection: "column"}}>
                    <MatchupLabel>The Yoshi Park Home Run Derby</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 10</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{ color: "#F1C232"}}>James</TeamName>
                        </div>
                        <VsText style={{ margin: "0 10px" }}>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{ color: "#6AA84F"}}>Matt</TeamName>
                        </div>
                    </div>
                    <ScoreLine>14 - 15</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                    <p style={{color: "lightgray"}}>With Matt already eliminated from the playoffs, he would find himself down 1-8 early,
                        but would rally to score 14 straight runs, with 9 of those runs coming in the top of the 7th. In the bottom of
                        the 7th, James would score 6 runs to bring the game within one, but failed to capitalize and would be swept in the
                        season series by Matt after the highest scoring game in league history.</p>
                </Matchup>
            </Week>
        </ContentDiv>
    );
}
