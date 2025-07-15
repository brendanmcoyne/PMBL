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

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3rem;
    color: #FFD700;
    margin: 20px;
    text-shadow: 0 0 6px rgba(255, 215, 0, 0.4);

    @media screen and (max-width: 1000px) {
        font-size: 2.75rem;
    }
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 950px;
  justify-items: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    max-width: 350px;
  }
`;

const StatText = styled.h4`
    color: #FFD700;
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 3px;
    text-shadow: 0 0 5px rgba(244, 230, 140, 0.15);
`;

const StatSubText = styled.h5`
    margin: 0.2rem 0;
    font-size: 1.2rem;
    color: #CCCCCC;
    font-weight: normal;
`;

const StyledWeek = styled.p`
    font-size: 0.9rem;
    color: #aaa;
    margin-top: 0.4rem;
    font-style: italic;
`;

const NameSpan = styled.span<{ color: string }>`
    color: ${(props) => props.color};
    font-weight: bold;
`;

const VsText = styled.span`
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1rem;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
`;

const StatRowWrapper = styled.div`
    display: flex;
    flex-direction: row;  
    align-items: stretch;
    justify-content: center;
    gap: 10rem;
    width: 100%;
    max-width: 950px;
    margin-bottom: 2rem;

    @media screen and (max-width: 1000px) {
        flex-direction: column;  
        gap: 0.5rem;
        margin-bottom: 2.5rem;
        align-items: center;
    }
`;

const StatCard = styled.div`
    width: 340px;
    height: 170px;
    padding: 1.2rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    background-color: #2e2e2e;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        width: 340px;
        height: 170px;
        
    }
`;

const StatTitleContainer = styled.div`
    width: 300px;      
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 1000px) {
        width: 100%;
        justify-content: center;
        order: -1;
    }
    white-space: normal; 
    font-size: 2.5rem;
    line-height: 1;
    
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

const StatCardWrapper = styled.div`
    width: 325px;   
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StadiumDiv = styled.div`
    gap: 20px;
    margin: 0 50px;
    display: flex;
    flex-direction: column;
`;

export default function Other1 () {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season1">← Back</Link>
            </ToggleButton>
            <StyledHeader>Game Stats</StyledHeader>
            <SeparatorLine/>

            <StatsGrid>
                <StatRowWrapper>
                    <StatTitleContainer>
                        <StyledMiniHeader>Most Runs in a Game (One Team)</StyledMiniHeader>
                    </StatTitleContainer>
                    <StatCardWrapper>
                        <StatCard>
                            <StatText>23, <NameSpan color="#3586E8">Isaac</NameSpan></StatText>
                            <StatSubText>
                                <NameSpan color="#3586E8">Isaac</NameSpan> <VsText>vs</VsText> <NameSpan color="#9900FF">Christach</NameSpan>
                            </StatSubText>
                            <StatSubText>23 - 4</StatSubText>
                            <StyledWeek>Week 8</StyledWeek>
                        </StatCard>
                    </StatCardWrapper>
                </StatRowWrapper>

                <StatRowWrapper>
                    <StatCardWrapper>
                        <StatCard>
                            <StatText>29</StatText>
                            <StatSubText>
                                <NameSpan color="#F1C232">James</NameSpan> <VsText>vs</VsText> <NameSpan color="#6AA84F">Matt</NameSpan>
                            </StatSubText>
                            <StatSubText>14 - 15</StatSubText>
                            <StyledWeek>Week 10</StyledWeek>
                        </StatCard>
                    </StatCardWrapper>
                    <StatTitleContainer>
                        <StyledMiniHeader>Most Runs in a Game (Combined)</StyledMiniHeader>
                    </StatTitleContainer>
                </StatRowWrapper>

                <StatRowWrapper>
                    <StatTitleContainer>
                        <StyledMiniHeader>Biggest Shutout</StyledMiniHeader>
                    </StatTitleContainer>
                    <StatCardWrapper>
                        <StatCard>
                            <StatText>9, <NameSpan color="#3586E8">Isaac</NameSpan></StatText>
                            <StatSubText>
                                <NameSpan color="#3586E8">Isaac</NameSpan> <VsText>vs</VsText> <NameSpan color="#9900FF">Christach</NameSpan>
                            </StatSubText>
                            <StatSubText>9 - 0</StatSubText>
                            <StyledWeek>Week 1</StyledWeek>
                        </StatCard>
                    </StatCardWrapper>
                </StatRowWrapper>

                <StatRowWrapper>
                    <StatCardWrapper>
                        <StatCard>
                            <StatText>19, <NameSpan color="#3586E8">Isaac</NameSpan></StatText>
                            <StatSubText>
                                <NameSpan color="#9900FF">Christach</NameSpan> <VsText>vs</VsText> <NameSpan color="#3586E8">Isaac</NameSpan>
                            </StatSubText>
                            <StatSubText>4 - 23</StatSubText>
                            <StyledWeek>Week 8</StyledWeek>
                        </StatCard>
                    </StatCardWrapper>
                    <StatTitleContainer>
                        <StyledMiniHeader>Largest Margin of Victory</StyledMiniHeader>
                    </StatTitleContainer>
                </StatRowWrapper>

                <StatRowWrapper>
                    <StatTitleContainer>
                        <StyledMiniHeader>Most Consecutive Runs Scored</StyledMiniHeader>
                    </StatTitleContainer>
                    <StatCardWrapper>
                        <StatCard>
                            <StatText>21, All-Star East</StatText>
                            <StatSubText>All Star Game</StatSubText>
                            <StatSubText>21 - 4</StatSubText>
                            <StyledWeek>All Star Break</StyledWeek>
                        </StatCard>
                    </StatCardWrapper>
                </StatRowWrapper>

                <StatRowWrapper>
                    <StatCardWrapper>
                        <StatCard>
                            <StatText>8, <NameSpan color="#3586E8">Isaac</NameSpan> (Down 0 - 8)</StatText>
                            <StatSubText>
                                <NameSpan color="#999999">DANdrew</NameSpan> <VsText>vs</VsText> <NameSpan color="#3586E8">Isaac</NameSpan>
                            </StatSubText>
                            <StatSubText>Lost 15 - 10</StatSubText>
                        </StatCard>
                    </StatCardWrapper>
                    <StatTitleContainer>
                        <StyledMiniHeader>Biggest Deficit to Comeback and Tie</StyledMiniHeader>
                    </StatTitleContainer>
                </StatRowWrapper>

                <StatRowWrapper>
                    <StatTitleContainer>
                        <StyledMiniHeader>Biggest Comeback to Win</StyledMiniHeader>
                    </StatTitleContainer>
                    <StatCard>
                        <StatText>7, <NameSpan color="#6AA84F">Matt</NameSpan> (Down 8 - 1)</StatText>
                        <StatSubText>
                            <NameSpan color="#F1C232">James</NameSpan> <VsText>vs</VsText> <NameSpan color="#6AA84F">Matt</NameSpan>
                        </StatSubText>
                        <StatSubText>14 - 15</StatSubText>
                        <StyledWeek>Week 10</StyledWeek>
                    </StatCard>
                </StatRowWrapper>
            </StatsGrid>

            <StyledMiniHeader>Longest Game</StyledMiniHeader>
            <StatText style={{margin: "0"}}>10 Innings</StatText>
            <MultWinners>
                <StatCard style={{margin: "10px"}}>
                    <StatSubText>
                        <NameSpan color="#6AA84F">Matt</NameSpan> <VsText>vs</VsText> <NameSpan color="#FF9900">Justin</NameSpan>
                    </StatSubText>
                    <StatSubText>11 - 14</StatSubText>
                    <StyledWeek>Week 7</StyledWeek>
                </StatCard>
                <StatCard style={{margin: "10px"}}>
                    <StatSubText>
                        <NameSpan color="#999999">DANdrew</NameSpan> <VsText>vs</VsText> <NameSpan color="#3586E8">Isaac</NameSpan>
                    </StatSubText>
                    <StatSubText>15 - 10</StatSubText>
                    <StyledWeek>Week 10</StyledWeek>
                </StatCard>
                <StatCard style={{margin: "10px"}}>
                    <StatSubText>
                        <NameSpan color="#FF00FF">Morgan</NameSpan> <VsText>vs</VsText> <NameSpan color="#F1C232">James</NameSpan>
                    </StatSubText>
                    <StatSubText>6 - 4</StatSubText>
                    <StyledWeek>Conference Series Game 3</StyledWeek>
                </StatCard>
            </MultWinners>

            <StyledMiniHeader>Latest First Score</StyledMiniHeader>
            <StatCard>
                <StatText>Top 7th</StatText>
                <StatSubText>
                    <NameSpan color="#CC0000">Brendan</NameSpan> <VsText>vs</VsText> <NameSpan color="#FF9900">Justin</NameSpan>
                </StatSubText>
                <StatSubText>1 - 0</StatSubText>
                <StyledWeek>Conference Series Game 3</StyledWeek>
            </StatCard>

                <StyledHeader>Stadium Stats</StyledHeader>
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
                    <StatCard><StatText style={{color: "#111111"}}>Bowsers Castle: 0</StatText></StatCard>
                </StadiumDiv>
                <StadiumDiv>
                    <StyledMiniHeader>Home Team Records</StyledMiniHeader>
                    <StatCard><StatText style={{ color: "#FFD700" }}>Mario Stadium: 11 - 11</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#4CAF50" }}>Daisy Cruiser: 7 - 3</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#FFD700" }}>Yoshi Park: 4 - 4</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#FF4F4F" }}>Wario City: 1 - 4</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#FF4F4F" }}>DK Jungle: 1 - 3</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#FF4F4F" }}>Bowser Jr's Playroom: 0 - 1</StatText></StatCard>
                    <StatCard><StatText style={{ color: "#111111" }}>Bowsers Castle: 0 - 0</StatText></StatCard>
                </StadiumDiv>
            </Stadiums>
            <StyledMiniHeader style={{ fontSize: "60px", maxWidth: "750px", textAlign: "center"}}>
                Home Team Record
            </StyledMiniHeader>
            <StatCard style={{width: "200px", height: "100px"}}>
                <StatText>24 - 26</StatText>
            </StatCard>

            <StyledMiniHeader style={{ fontSize: "60px", maxWidth: "750px", textAlign: "center"}}>
                Games Morgan was in Attendance for
            </StyledMiniHeader>
            <StatCard style={{width: "200px", height: "100px"}}>
                <StatText>46 of 50</StatText>
            </StatCard>
        </ContentDiv>

    );
}