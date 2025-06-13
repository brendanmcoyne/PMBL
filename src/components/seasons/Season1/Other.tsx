import { styled } from "styled-components";
import {Link} from "react-router-dom";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 2rem;
`;

const StyledWinner = styled.h4`
    text-align: center;
    margin: 0;
    font-weight: bold;
`;

const StyledManager = styled.h4`
    text-align: center;
    margin: 0;
    font-weight: bold;
`;

const StyledScore = styled.h4`
    text-align: center;
    margin: 0;
    font-weight: bold;
`;

const StyledTeam = styled.p`
    text-align: center;
    font-size: 0.8rem;
    margin: 0;
`;

const ToggleButton = styled.button`
    background-color: lightgray;
    color: darkblue;
    font-size: 1.5rem;
    border: none;
    padding: 7px 15px;
    cursor: pointer;
    align-self: flex-start;  
    margin-left: 2rem;
`;


export default function Other1 () {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link to="/archives/seasons/Season1">Back</Link>
            </ToggleButton>
            <StyledHeader>Game Stats</StyledHeader>

            <StyledMiniHeader>Most Runs in a Game (One Team)</StyledMiniHeader>
            <StyledWinner>23, Isaac</StyledWinner>
            <StyledManager>Christach vs Isaac</StyledManager>
            <StyledScore>4 - 23</StyledScore>
            <StyledTeam>Week 8</StyledTeam>

            <StyledMiniHeader>Most Runs in a Game (Combined)</StyledMiniHeader>
            <StyledWinner>29</StyledWinner>
            <StyledManager>James vs Matt</StyledManager>
            <StyledScore>14 - 15</StyledScore>
            <StyledTeam>Week 10</StyledTeam>

            <StyledMiniHeader>Biggest Shutout</StyledMiniHeader>
            <StyledWinner>9, Isaac</StyledWinner>
            <StyledManager>Isaac vs Christach</StyledManager>
            <StyledScore>9 - 0</StyledScore>
            <StyledTeam>Week 1</StyledTeam>

            <StyledMiniHeader>Largest Margin of Victory</StyledMiniHeader>
            <StyledWinner>19, Isaac</StyledWinner>
            <StyledManager>Christach vs Isaac</StyledManager>
            <StyledScore>4 - 23</StyledScore>
            <StyledTeam>Week 8</StyledTeam>

            <StyledMiniHeader>Most Consecutive Runs Scored</StyledMiniHeader>
            <StyledWinner>21, All-Star East</StyledWinner>
            <StyledManager>All Star Game</StyledManager>
            <StyledScore>21 - 4</StyledScore>
            <StyledTeam>All Star Break</StyledTeam>

            <StyledMiniHeader>Biggest Deficit to Comeback and Tie</StyledMiniHeader>
            <StyledWinner>8, Isaac (Down 0 - 8)</StyledWinner>
            <StyledManager>DANdrew vs Isaac</StyledManager>
            <StyledScore>Lost 15 - 10</StyledScore>
            <StyledTeam>Week 10</StyledTeam>

            <StyledMiniHeader>Biggest Comeback to Win</StyledMiniHeader>
            <StyledWinner>7, Matt (Down 8 - 1)</StyledWinner>
            <StyledManager>James vs Matt</StyledManager>
            <StyledScore>14 - 15</StyledScore>
            <StyledTeam>Week 10</StyledTeam>

            <StyledMiniHeader>Longest Game</StyledMiniHeader>
            <StyledWinner>10 Innings</StyledWinner>
            <StyledManager>Matt vs Justin</StyledManager>
            <StyledScore>11 - 14</StyledScore>
            <StyledTeam>Week 7</StyledTeam>
            <StyledManager>DANdrew vs Isaac</StyledManager>
            <StyledScore>15 - 10</StyledScore>
            <StyledTeam>Week 10</StyledTeam>
            <StyledManager>Morgan vs James</StyledManager>
            <StyledScore>6 - 4</StyledScore>
            <StyledTeam>Conference Series Game 3</StyledTeam>

            <StyledMiniHeader>Latest First Score</StyledMiniHeader>
            <StyledWinner>Top 7th</StyledWinner>
            <StyledManager>Brendan vs Justin</StyledManager>
            <StyledScore>1 - 0</StyledScore>
            <StyledTeam>Conference Series Game 3</StyledTeam>

            <StyledHeader>Stadium Stats</StyledHeader>
            <StyledMiniHeader>Games at each Stadium (Incl. Playoffs)</StyledMiniHeader>
            <StyledWinner>Mario Stadium: 23</StyledWinner>
            <StyledWinner>Daisy Cruiser: 10</StyledWinner>
            <StyledWinner>Yoshi Park: 7</StyledWinner>
            <StyledWinner>Wario City: 5</StyledWinner>
            <StyledWinner>DK Jungle: 4</StyledWinner>
            <StyledWinner>Bowser Jr's Playroom: 1</StyledWinner>
            <StyledWinner>Bowsers Castle: 0</StyledWinner>

            <StyledMiniHeader>Home team records</StyledMiniHeader>
            <StyledWinner>Mario Stadium: 11 - 11</StyledWinner>
            <StyledWinner>Daisy Cruiser: 7 - 3</StyledWinner>
            <StyledWinner>Yoshi Park: 4 - 4</StyledWinner>
            <StyledWinner>Wario City: 1 - 4</StyledWinner>
            <StyledWinner>DK Jungle: 1 - 3</StyledWinner>
            <StyledWinner>Bowser Jr's Playroom: 0 - 1</StyledWinner>

            <StyledHeader>Games Morgan was in attendance for</StyledHeader>
            <StyledMiniHeader>46 of 50</StyledMiniHeader>



        </ContentDiv>

    );
}