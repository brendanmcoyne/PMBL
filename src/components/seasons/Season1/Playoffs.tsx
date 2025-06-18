import {styled} from "styled-components";
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
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 2;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const Matchup = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto auto;
    align-items: center;
    gap: 0.25rem 2rem;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 500px;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const TeamName = styled.p`
    font-weight: bold;
    margin: 0;
    text-align: center;
`;

const TeamRecord = styled.span`
    font-size: 0.9rem;
    font-weight: bold;
    margin-top: -1rem;
    color: gray;
`;

const VsText = styled.p`
    font-weight: bold;
    margin: 0;
`;

const VsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Stadium = styled.span`
    font-size: 0.8rem;
    color: #555;
`;

const Scores = styled.span`
    font-weight: bold;
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

const Game = styled.h3`
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;
export default function Playoffs1() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "darkblue"}} to="/archives/seasons/Season1">Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 PMBL Playoffs</StyledHeader>
            <StyledMiniHeader>Conference Series</StyledMiniHeader>
            <StyledMiniHeader>(1) Brendan v.s. (4) Justin</StyledMiniHeader>

            <Game>Game 1</Game>
            <Matchup>
                <TeamName>Justin</TeamName>
                <VsText>vs</VsText>
                <TeamName>Brendan</TeamName>

                <TeamRecord>(0-1)</TeamRecord>
                <VsContainer>
                    <Scores>3 - 7</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(1-0)</TeamRecord>
            </Matchup>

            <Game>Game 2</Game>
            <Matchup>
                <TeamName>Justin</TeamName>
                <VsText>vs</VsText>
                <TeamName>Brendan</TeamName>

                <TeamRecord>(0-2)</TeamRecord>
                <VsContainer>
                    <Scores>1 - 7</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(2-0)</TeamRecord>
            </Matchup>

            <Game>Game 3</Game>
            <Matchup>
                <TeamName>Brendan</TeamName>
                <VsText>vs</VsText>
                <TeamName>Justin</TeamName>

                <TeamRecord>(3-0)</TeamRecord>
                <VsContainer>
                    <Scores>1 - 0</Scores>
                    <Stadium>DK Jungle</Stadium>
                </VsContainer>
                <TeamRecord>(0-3)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>(2) Morgan v.s. (3) James</StyledMiniHeader>

            <Game>Game 1</Game>
            <Matchup>
                <TeamName>James</TeamName>
                <VsText>vs</VsText>
                <TeamName>Morgan</TeamName>

                <TeamRecord>(1-0)</TeamRecord>
                <VsContainer>
                    <Scores>11 - 6</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(0-1)</TeamRecord>
            </Matchup>

            <Game>Game 2</Game>
            <Matchup>
                <TeamName>James</TeamName>
                <VsText>vs</VsText>
                <TeamName>Morgan</TeamName>

                <TeamRecord>(2-0)</TeamRecord>
                <VsContainer>
                    <Scores>11 - 5</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(0-2)</TeamRecord>
            </Matchup>

            <Game>Game 3</Game>
            <Matchup>
                <TeamName>Morgan</TeamName>
                <VsText>vs</VsText>
                <TeamName>James</TeamName>

                <TeamRecord>(1-2)</TeamRecord>
                <VsContainer>
                    <Scores>6 - 4</Scores>
                    <Stadium>Daisy Cruiser</Stadium>
                </VsContainer>
                <TeamRecord>(2-1)</TeamRecord>
            </Matchup>

            <Game>Game 4</Game>
            <Matchup>
                <TeamName>Morgan</TeamName>
                <VsText>vs</VsText>
                <TeamName>James</TeamName>

                <TeamRecord>(1-3)</TeamRecord>
                <VsContainer>
                    <Scores>4 - 6</Scores>
                    <Stadium>Daisy Cruiser</Stadium>
                </VsContainer>
                <TeamRecord>(3-1)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>WORLD SERIES</StyledMiniHeader>
            <StyledMiniHeader>(1) Brendan v.s. (3) James</StyledMiniHeader>

            <Game>Game 1</Game>
            <Matchup>
                <TeamName>James</TeamName>
                <VsText>vs</VsText>
                <TeamName>Brendan</TeamName>

                <TeamRecord>(1-0)</TeamRecord>
                <VsContainer>
                    <Scores>7 - 0</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(0-1)</TeamRecord>
            </Matchup>

            <Game>Game 2</Game>
            <Matchup>
                <TeamName>James</TeamName>
                <VsText>vs</VsText>
                <TeamName>Brendan</TeamName>

                <TeamRecord>(2-0)</TeamRecord>
                <VsContainer>
                    <Scores>13 - 6</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(0-2)</TeamRecord>
            </Matchup>

            <Game>Game 3</Game>
            <Matchup>
                <TeamName>Brendan</TeamName>
                <VsText>vs</VsText>
                <TeamName>James</TeamName>

                <TeamRecord>(0-3)</TeamRecord>
                <VsContainer>
                    <Scores>5 - 7</Scores>
                    <Stadium>Daisy Cruiser</Stadium>
                </VsContainer>
                <TeamRecord>(3-0)</TeamRecord>
            </Matchup>

            <StyledHeader>World Series Champion</StyledHeader>
            <StyledMiniHeader>James</StyledMiniHeader>
        </ContentDiv>

    )
}