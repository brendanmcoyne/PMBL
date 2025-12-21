import { styled } from "styled-components";
import {Link} from "react-router-dom";
import { SeparatorLine } from "../../headlines/HeadlineStyles";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const NameSpan = styled.span<{ color: string }>`
    color: ${(props) => props.color};
    font-weight: bold;
`;

const MultWinners = styled.div`
    @media screen and (min-width: 750px) {
        display: flex;
        flex-direction: row;
    }
`;

const Stadiums = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

const StadiumDiv = styled.div`
    gap: 20px;
    margin: 0 50px;
    display: flex;
    flex-direction: column;
`;

const StatRow = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 1000px;
    margin: 2rem auto;
`;


const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 1.75rem;
    color: #2ac;
    margin-top: 0;
    margin-bottom: 5px;
    position: relative;
    font-family: 'Oswald', sans-serif;

    &::after {
        content: "";
        display: block;
        width: 60px;
        height: 3px;
        background: #888888;
        margin: 0.4rem auto 0;
        border-radius: 2px;
    }

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

const StatCard = styled.div`
    width: 300px;       
    height: 200px;     
    padding: 1.5rem;
    border-radius: 16px;
    background: linear-gradient(145deg, #1e1e1e, #121212);
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 6px 20px rgba(0,0,0,0.6);
    }

    @media screen and (max-width: 1000px) {
        height: auto;
        min-height: 180px;
    }
`;

const StatText = styled.h4`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 3px;
  text-shadow: 0 0 5px rgba(255,255,255,0.1);
  text-align: center;
`;

const StatSubText = styled.h5`
  margin: 0.2rem 0;
  font-size: 1rem;
  color: #bbb;
  font-weight: normal;
  text-align: center;
`;

const StyledWeek = styled.p`
  font-size: 0.85rem;
  color: #888;
  margin-top: 0.3rem;
  font-style: italic;
  text-align: center;
`;

const StatValue = styled.h2`
  color: #fff;
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  text-align: center;
`;

const VsText = styled.span`
  color: #ddd;
  font-weight: bold;
  font-size: 1rem;
  text-shadow: 0 0 5px rgba(0,0,0,0.6);
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 950px;
  width: 100%;
  margin: 0;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const AwardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  text-align: center;  
`;

export default function Other1 () {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season1">← Back</Link>
            </ToggleButton>
            <StyledHeader style={{marginBottom: "15px"}}>Game Stats</StyledHeader>
            <SeparatorLine/>

            <AwardsGrid>
            <StatRow>
                <StyledMiniHeader>Most Runs in a Game (One Team)</StyledMiniHeader>
                <StatCard>
                    <StatValue>23, <NameSpan color="#3586E8">Isaac</NameSpan></StatValue>
                    <StatSubText>
                        <NameSpan color="#3586E8">Isaac</NameSpan> <VsText>vs</VsText> <NameSpan color="#9900FF">Christach</NameSpan>
                    </StatSubText>
                    <StatSubText>23 - 4 • Week 8</StatSubText>
                </StatCard>
            </StatRow>

            <StatRow>
                <StyledMiniHeader>Most Runs in a Game (Combined)</StyledMiniHeader>
                <StatCard>
                    <StatValue>29</StatValue>
                    <StatSubText>
                        <NameSpan color="#F1C232">James</NameSpan> <VsText>vs</VsText> <NameSpan color="#6AA84F">Matt</NameSpan>
                    </StatSubText>
                    <StatSubText>14 - 15 • Week 10</StatSubText>
                </StatCard>
            </StatRow>
            </AwardsGrid>

            <AwardsGrid>
            <StatRow>
                <StyledMiniHeader>Biggest Shutout</StyledMiniHeader>
                <StatCard>
                    <StatValue>9, <NameSpan color="#3586E8">Isaac</NameSpan></StatValue>
                    <StatSubText>
                        <NameSpan color="#3586E8">Isaac</NameSpan> <VsText>vs</VsText> <NameSpan color="#9900FF">Christach</NameSpan>
                    </StatSubText>
                    <StatSubText>9 - 0 • Week 1</StatSubText>
                </StatCard>
            </StatRow>

            <StatRow>
                <StyledMiniHeader>Largest Margin of Victory</StyledMiniHeader>
                <StatCard>
                    <StatValue>19, <NameSpan color="#3586E8">Isaac</NameSpan></StatValue>
                    <StatSubText>
                        <NameSpan color="#9900FF">Christach</NameSpan> <VsText>vs</VsText> <NameSpan color="#3586E8">Isaac</NameSpan>
                    </StatSubText>
                    <StatSubText>4 - 23 • Week 8</StatSubText>
                </StatCard>
            </StatRow>
            </AwardsGrid>

            <AwardsGrid>
            <StatRow>
                <StyledMiniHeader>Most Consecutive Runs Scored</StyledMiniHeader>
                <StatCard>
                    <StatValue>21, All-Star East</StatValue>
                    <StatSubText>All Star Game</StatSubText>
                    <StatSubText>21 - 4</StatSubText>
                    <StyledWeek>All Star Break</StyledWeek>
                </StatCard>
            </StatRow>

            <StatRow>
                <StyledMiniHeader>Biggest Deficit to Tie</StyledMiniHeader>
                <StatCard>
                    <StatValue>8, <NameSpan color="#3586E8">Isaac</NameSpan> (0 - 8)</StatValue>
                    <StatSubText>
                        <NameSpan color="#999999">DANdrew</NameSpan> <VsText>vs</VsText> <NameSpan color="#3586E8">Isaac</NameSpan>
                    </StatSubText>
                    <StatSubText>Lost 15 - 10 • Week 10</StatSubText>
                </StatCard>
            </StatRow>
            </AwardsGrid>

            <AwardsGrid>
            <StatRow>
                <StyledMiniHeader>Biggest Comeback to Win</StyledMiniHeader>
                    <StatCard>
                        <StatValue>7, <NameSpan color="#6AA84F">Matt</NameSpan> (8 - 1)</StatValue>
                        <StatSubText>
                            <NameSpan color="#F1C232">James</NameSpan> <VsText>vs</VsText> <NameSpan color="#6AA84F">Matt</NameSpan>
                        </StatSubText>
                        <StatSubText>14 - 15 • Week 10</StatSubText>
                    </StatCard>
            </StatRow>

            <StatRow>
                <StyledMiniHeader>Latest First Score</StyledMiniHeader>
                <StatCard>
                    <StatValue>Top 7th</StatValue>
                    <StatSubText>
                        <NameSpan color="#CC0000">Brendan</NameSpan> <VsText>vs</VsText> <NameSpan color="#FF9900">Justin</NameSpan>
                    </StatSubText>
                    <StatSubText>1 - 0</StatSubText>
                    <StyledWeek>Conference Series Game 3</StyledWeek>
                </StatCard>
            </StatRow>
            </AwardsGrid>

            <StyledMiniHeader style={{marginTop: "20px"}}>Longest Game</StyledMiniHeader>
            <StatText style={{margin: "10px"}}>10 Innings</StatText>
            <MultWinners>
                <StatCard style={{margin: "10px"}}>
                    <StatSubText style={{fontSize: "1.75rem"}}>
                        <NameSpan color="#6AA84F">Matt</NameSpan> <VsText style={{fontSize: "1.75rem"}}>vs</VsText> <NameSpan color="#FF9900">Justin</NameSpan>
                    </StatSubText>
                    <StatSubText style={{fontSize: "1.25rem", margin: "0"}}>11 - 14 </StatSubText>
                    <StyledWeek>Week 7</StyledWeek>
                </StatCard>
                <StatCard style={{margin: "10px"}}>
                    <StatSubText style={{fontSize: "1.75rem"}}>
                        <NameSpan color="#999999">DANdrew</NameSpan> <VsText style={{fontSize: "1.75rem"}}>vs</VsText> <NameSpan color="#3586E8">Isaac</NameSpan>
                    </StatSubText>
                    <StatSubText style={{fontSize: "1.25rem", margin: "0"}}>15 - 10</StatSubText>
                    <StyledWeek>Week 10</StyledWeek>
                </StatCard>
                <StatCard style={{margin: "10px"}}>
                    <StatSubText style={{fontSize: "1.75rem"}}>
                        <NameSpan color="#FF00FF">Morgan</NameSpan> <VsText style={{fontSize: "1.75rem"}}>vs</VsText> <NameSpan color="#F1C232">James</NameSpan>
                    </StatSubText>
                    <StatSubText style={{fontSize: "1.25rem", margin: "0"}}>6 - 4</StatSubText>
                    <StyledWeek>Conference Series Game 3</StyledWeek>
                </StatCard>
            </MultWinners>

                <StyledHeader style={{marginBottom: "15px"}}>Stadium Stats</StyledHeader>
                <SeparatorLine />

            <Stadiums>
                <StadiumDiv>
                    <StyledMiniHeader>Games at each Stadium</StyledMiniHeader>
                    <StatCard><StatText style={{color: "#FF4F4F"}}>Mario Stadium: 22</StatText></StatCard>
                    <StatCard><StatText style={{color: "#FFA500"}}>Daisy Cruiser: 10</StatText></StatCard>
                    <StatCard><StatText style={{color: "#4CAF50"}}>Yoshi Park: 8</StatText></StatCard>
                    <StatCard><StatText style={{color: "#FFD700"}}>Wario City: 5</StatText></StatCard>
                    <StatCard><StatText style={{color: "#8B4513"}}>DK Jungle: 4</StatText></StatCard>
                    <StatCard><StatText style={{color: "#CDA434"}}>Bowser Jr's Playroom: 1</StatText></StatCard>
                    <StatCard><StatText style={{color: "#777777"}}>Bowsers Castle: 0</StatText></StatCard>
                </StadiumDiv>
                <StadiumDiv>
                    <StyledMiniHeader>Home Team Records</StyledMiniHeader>
                    <StatCard><StatText style={{ color: "#FFD700" }}>Mario Stadium: 11 - 11</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#4CAF50" }}>Daisy Cruiser: 7 - 3</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#FFD700" }}>Yoshi Park: 4 - 4</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#FF4F4F" }}>Wario City: 1 - 4</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#FF4F4F" }}>DK Jungle: 1 - 3</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#FF4F4F", fontSize: "1.43rem" }}>Bowser Jr's Playroom: 0 - 1</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#777777" }}>Bowsers Castle: 0 - 0</StatText></StatCard>
                </StadiumDiv>
            </Stadiums>

            <StyledHeader style={{marginBottom: "15px"}}>Other</StyledHeader>
            <SeparatorLine />

            <AwardsGrid style={{margin: "20px 0 60px 0"}}>
                <AwardWrapper>
                    <StyledMiniHeader>
                        Home Team Record
                    </StyledMiniHeader>
                    <StatCard style={{ width: "200px", height: "100px" }}>
                        <StatText>24 - 26</StatText>
                    </StatCard>
                </AwardWrapper>

                <AwardWrapper>
                    <StyledMiniHeader>
                        Games Morgan was in Attendance
                    </StyledMiniHeader>
                    <StatCard style={{ width: "200px", height: "100px" }}>
                        <StatText>46 of 50</StatText>
                    </StatCard>
                </AwardWrapper>
            </AwardsGrid>
        </ContentDiv>

    );
}