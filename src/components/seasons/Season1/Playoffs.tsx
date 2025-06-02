import {styled} from "styled-components";

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
    grid-column: span 2;
    font-size: 2rem;
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

export default function Playoffs1() {
    return (
        <ContentDiv>
            <StyledHeader>Season 1 PMBL Playoffs</StyledHeader>
            <StyledMiniHeader>Conference Series</StyledMiniHeader>
            <StyledMiniHeader>(1) Brendan v.s. (4) Justin</StyledMiniHeader>

            <h3>Game 1</h3>
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

            <h3>Game 2</h3>
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

            <h3>Game 3</h3>
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

            <h3>Game 1</h3>
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

            <h3>Game 2</h3>
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

            <h3>Game 3</h3>
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

            <h3>Game 4</h3>
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

            <h3>Game 1</h3>
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

            <h3>Game 2</h3>
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

            <h3>Game 3</h3>
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