import { styled } from "styled-components";
import {Link} from "react-router-dom";
import { SeparatorLine } from "../../headlines/HeadlineStyles";
import { ToggleButton } from "../../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const StyledHeader = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px  2px 0 #000, 2px  2px 0 #000, 0px  0px 12px #ff0;
    margin-bottom: 0;
    @media screen and (max-width: 1000px) {
         font-size: 55px;
    }
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 4rem;
    color: #FFBF00;
    margin: 20px;
    text-shadow: 0 0 8px rgba(255, 191, 0, 0.4);
    @media screen and (max-width: 1000px) {
        font-size: 2.5rem;
    }
`;

const StatCard = styled.div`
    padding: 1.2rem 1.5rem;
    border-radius: 12px;
    margin: 1rem 0;
    width: 100%;
    max-width: 450px;
    border-bottom: 1px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    background-color: #2d241b;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1000px) {
        width: 300px;
    }
`;

const StatText = styled.h4`
    color: #FFBF00;
    text-shadow: 0 0 8px rgba(255, 191, 0, 0.4);
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 3px;
    @media screen and (max-width: 1000px) {
        font-size: 1.4rem;
    }
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

export default function Other1 () {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "darkblue"}} to="/archives/seasons/Season1">Back</Link>
            </ToggleButton>
            <StyledHeader>Game Stats</StyledHeader>
            <SeparatorLine/>

                <StyledMiniHeader>Most Runs in a Game (One Team)</StyledMiniHeader>
                <StatCard>
                        <StatText>23, <NameSpan color="#3586E8">Isaac</NameSpan></StatText>
                        <StatSubText>
                                <NameSpan color="#3586E8">Isaac</NameSpan> <VsText>vs</VsText> <NameSpan color="#9900FF">Christach</NameSpan>
                        </StatSubText>
                        <StatSubText>23 - 4</StatSubText>
                        <StyledWeek>Week 8</StyledWeek>
                </StatCard>

            <StyledMiniHeader>Most Runs in a Game (Combined)</StyledMiniHeader>
                <StatCard>
                        <StatText>29</StatText>
                        <StatSubText>
                                <NameSpan color="#F1C232">James</NameSpan> <VsText>vs</VsText> <NameSpan color="#6AA84F">Matt</NameSpan>
                        </StatSubText>
                        <StatSubText>14 - 15</StatSubText>
                        <StyledWeek>Week 10</StyledWeek>
                </StatCard>

                <StyledMiniHeader>Biggest Shutout</StyledMiniHeader>
                <StatCard>
                        <StatText>9, <NameSpan color="#3586E8">Isaac</NameSpan></StatText>
                        <StatSubText>
                                <NameSpan color="#3586E8">Isaac</NameSpan> <VsText>vs</VsText> <NameSpan color="#9900FF">Christach</NameSpan>
                        </StatSubText>
                        <StatSubText>9 - 0</StatSubText>
                        <StyledWeek>Week 1</StyledWeek>
                </StatCard>

                <StyledMiniHeader>Largest Margin of Victory</StyledMiniHeader>
                <StatCard>
                        <StatText>19, <NameSpan color="#3586E8">Isaac</NameSpan></StatText>
                        <StatSubText>
                                <NameSpan color="#9900FF">Christach</NameSpan> <VsText>vs</VsText> <NameSpan color="#3586E8">Isaac</NameSpan>
                        </StatSubText>
                        <StatSubText>4 - 23</StatSubText>
                        <StyledWeek>Week 8</StyledWeek>
                </StatCard>

                <StyledMiniHeader>Most Consecutive Runs Scored</StyledMiniHeader>
                <StatCard>
                        <StatText>21, All-Star East</StatText>
                        <StatSubText>All Star Game</StatSubText>
                        <StatSubText>21 - 4</StatSubText>
                        <StyledWeek>All Star Break</StyledWeek>
                </StatCard>

                <StyledMiniHeader>Biggest Deficit to Comeback and Tie</StyledMiniHeader>
                <StatCard>
                        <StatText>8, <NameSpan color="#3586E8">Isaac</NameSpan> (Down 0 - 8)</StatText>
                        <StatSubText>
                                <NameSpan color="#999999">DANdrew</NameSpan> <VsText>vs</VsText> <NameSpan color="#3586E8">Isaac</NameSpan>
                        </StatSubText>
                        <StatSubText>Lost 15 - 10</StatSubText>
                </StatCard>

                <StyledMiniHeader>Biggest Comeback to Win</StyledMiniHeader>
                <StatCard>
                        <StatText>7, <NameSpan color="#6AA84F">Matt</NameSpan> (Down 8 - 1)</StatText>
                        <StatSubText>
                                <NameSpan color="#F1C232">James</NameSpan> <VsText>vs</VsText> <NameSpan color="#6AA84F">Matt</NameSpan>
                        </StatSubText>
                        <StatSubText>14 - 15</StatSubText>
                        <StyledWeek>Week 10</StyledWeek>
                </StatCard>

                <StyledMiniHeader>Longest Game</StyledMiniHeader>
                <StatText style={{margin: "0"}}>10 Innings</StatText>
                <StatCard>
                        <StatSubText>
                                <NameSpan color="#6AA84F">Matt</NameSpan> <VsText>vs</VsText> <NameSpan color="#FF9900">Justin</NameSpan>
                        </StatSubText>
                        <StatSubText>11 - 14</StatSubText>
                        <StyledWeek>Week 7</StyledWeek>
                </StatCard>
                <StatCard>
                        <StatSubText>
                                <NameSpan color="#999999">DANdrew</NameSpan> <VsText>vs</VsText> <NameSpan color="#3586E8">Isaac</NameSpan>
                        </StatSubText>
                        <StatSubText>15 - 10</StatSubText>
                        <StyledWeek>Week 10</StyledWeek>
                </StatCard>
                <StatCard>
                        <StatSubText>
                                <NameSpan color="#FF00FF">Morgan</NameSpan> <VsText>vs</VsText> <NameSpan color="#F1C232">James</NameSpan>
                        </StatSubText>
                        <StatSubText>6 - 4</StatSubText>
                        <StyledWeek>Conference Series Game 3</StyledWeek>
                </StatCard>

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

                <StyledMiniHeader>Games at each Stadium</StyledMiniHeader>
                <StatCard><StatText style={{color: "#FF4F4F"}}>Mario Stadium: 22</StatText></StatCard>
                <StatCard><StatText style={{color: "#FFA500"}}>Daisy Cruiser: 10</StatText></StatCard>
                <StatCard><StatText style={{color: "#4CAF50"}}>Yoshi Park: 8</StatText></StatCard>
                <StatCard><StatText style={{color: "#FFD700"}}>Wario City: 5</StatText></StatCard>
                <StatCard><StatText style={{color: "#8B4513"}}>DK Jungle: 4</StatText></StatCard>
                <StatCard><StatText style={{color: "#CDA434"}}>Bowser Jr's Playroom: 1</StatText></StatCard>
                <StatCard><StatText style={{color: "#111111"}}>Bowsers Castle: 0</StatText></StatCard>

                <StyledMiniHeader>Home Team Records</StyledMiniHeader>
                <StatCard><StatText style={{ color: "#FFD700" }}>Mario Stadium: 11 - 11</StatText></StatCard>
                <StatCard><StatText style={{ color: "#4CAF50" }}>Daisy Cruiser: 7 - 3</StatText></StatCard>
                <StatCard><StatText style={{ color: "#FFD700" }}>Yoshi Park: 4 - 4</StatText></StatCard>
                <StatCard><StatText style={{ color: "#FF4F4F" }}>Wario City: 1 - 4</StatText></StatCard>
                <StatCard><StatText style={{ color: "#FF4F4F" }}>DK Jungle: 1 - 3</StatText></StatCard>
                <StatCard><StatText style={{ color: "#FF4F4F" }}>Bowser Jr's Playroom: 0 - 1</StatText></StatCard>

                <StyledMiniHeader style={{ fontSize: "60px", maxWidth: "750px", textAlign: "center"}}>
                        Games Morgan was in Attendance for
                </StyledMiniHeader>
                <StatCard style={{width: "200px"}}>
                        <StatText>46 of 50</StatText>
                </StatCard>
        </ContentDiv>

    );
}