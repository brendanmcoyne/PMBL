import { styled } from "styled-components";

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

export default function Schedule1() {
    return (
        <ContentDiv>
            <StyledHeader>Season 1 Regular Season</StyledHeader>
            <StyledMiniHeader>Week 1</StyledMiniHeader>

            <Matchup>
                <TeamName>DANdrew</TeamName>
                <VsText>vs</VsText>
                <TeamName>Brendan</TeamName>

                <TeamRecord>(1-0)</TeamRecord>
                <VsContainer>
                    <Scores>2 - 0</Scores>
                    <Stadium>Wario City</Stadium>
                </VsContainer>
                <TeamRecord>(0-1)</TeamRecord>
            </Matchup>
            <Matchup>
                <TeamName>James</TeamName>
                <VsText>vs</VsText>
                <TeamName>Justin</TeamName>

                <TeamRecord>(1-0)</TeamRecord>
                <VsContainer>
                    <Scores>8 - 7</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(0-1)</TeamRecord>
            </Matchup>
            <Matchup>
                <TeamName>Isaac</TeamName>
                <VsText>vs</VsText>
                <TeamName>Christach</TeamName>

                <TeamRecord>(1-0)</TeamRecord>
                <VsContainer>
                    <Scores>9 - 0</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(0-1)</TeamRecord>
            </Matchup>
            <Matchup>
                <TeamName>Morgan</TeamName>
                <VsText>vs</VsText>
                <TeamName>Matt</TeamName>

                <TeamRecord>(0-1)</TeamRecord>
                <VsContainer>
                    <Scores>4 - 7</Scores>
                    <Stadium>Yoshi Park</Stadium>
                </VsContainer>
                <TeamRecord>(1-0)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>Week 2</StyledMiniHeader>

            <Matchup>
                <TeamName>Matt</TeamName>
                <VsText>vs</VsText>
                <TeamName>James</TeamName>

                <TeamRecord>(2-0)</TeamRecord>
                <VsContainer>
                    <Scores>5 - 2</Scores>
                    <Stadium>Bowser Jr's Playroom</Stadium>
                </VsContainer>
                <TeamRecord>(1-1)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Brendan</TeamName>
                <VsText>vs</VsText>
                <TeamName>Isaac</TeamName>

                <TeamRecord>(1-1)</TeamRecord>
                <VsContainer>
                    <Scores>8 - 4</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(1-1)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Justin</TeamName>
                <VsText>vs</VsText>
                <TeamName>Christach</TeamName>

                <TeamRecord>(1-1)</TeamRecord>
                <VsContainer>
                    <Scores>9 - 8</Scores>
                    <Stadium>Yoshi Park</Stadium>
                </VsContainer>
                <TeamRecord>(0-2)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Morgan</TeamName>
                <VsText>vs</VsText>
                <TeamName>DANdrew</TeamName>

                <TeamRecord>(1-1)</TeamRecord>
                <VsContainer>
                    <Scores>13 - 5</Scores>
                    <Stadium>DK Jungle</Stadium>
                </VsContainer>
                <TeamRecord>(1-1)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>Week 3</StyledMiniHeader>

            <Matchup>
                <TeamName>James</TeamName>
                <VsText>vs</VsText>
                <TeamName>Brendan</TeamName>

                <TeamRecord>(1-2)</TeamRecord>
                <VsContainer>
                    <Scores>7 - 8</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(2-1)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Matt</TeamName>
                <VsText>vs</VsText>
                <TeamName>Isaac</TeamName>

                <TeamRecord>(2-1)</TeamRecord>
                <VsContainer>
                    <Scores>3 - 11</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(2-1)</TeamRecord>
            </Matchup>

            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>The Monty Mole Game</p>

            <Matchup>
                <TeamName>Justin</TeamName>
                <VsText>vs</VsText>
                <TeamName>Morgan</TeamName>

                <TeamRecord>(2-1)</TeamRecord>
                <VsContainer>
                    <Scores>9 - 7</Scores>
                    <Stadium>Yoshi Park</Stadium>
                </VsContainer>
                <TeamRecord>(1-2)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>DANdrew</TeamName>
                <VsText>vs</VsText>
                <TeamName>Christach</TeamName>

                <TeamRecord>(2-1)</TeamRecord>
                <VsContainer>
                    <Scores>17 - 6</Scores>
                    <Stadium>Wario City</Stadium>
                </VsContainer>
                <TeamRecord>(0-3)</TeamRecord>
            </Matchup>


            <StyledMiniHeader>Week 4</StyledMiniHeader>

            <Matchup>
                <TeamName>Isaac</TeamName>
                <VsText>vs</VsText>
                <TeamName>DANdrew</TeamName>

                <TeamRecord>(3-1)</TeamRecord>
                <VsContainer>
                    <Scores>13 - 2</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(2-2)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Matt</TeamName>
                <VsText>vs</VsText>
                <TeamName>Brendan</TeamName>

                <TeamRecord>(2-2)</TeamRecord>
                <VsContainer>
                    <Scores>19 - 6</Scores>
                    <Stadium>DK Jungle</Stadium>
                </VsContainer>
                <TeamRecord>(3-1)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Justin</TeamName>
                <VsText>vs</VsText>
                <TeamName>James</TeamName>

                <TeamRecord>(2-2)</TeamRecord>
                <VsContainer>
                    <Scores>5 - 7</Scores>
                    <Stadium>Daisy Cruiser</Stadium>
                </VsContainer>
                <TeamRecord>(2-2)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Christach</TeamName>
                <VsText>vs</VsText>
                <TeamName>Morgan</TeamName>

                <TeamRecord>(1-3)</TeamRecord>
                <VsContainer>
                    <Scores>5 - 1</Scores>
                    <Stadium>Yoshi Park</Stadium>
                </VsContainer>
                <TeamRecord>(1-3)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>Week 5</StyledMiniHeader>

            <Matchup>
                <TeamName>Brendan</TeamName>
                <VsText>vs</VsText>
                <TeamName>James</TeamName>

                <TeamRecord>(3-2)</TeamRecord>
                <VsContainer>
                    <Scores>5 - 15</Scores>
                    <Stadium>Daisy Cruiser</Stadium>
                </VsContainer>
                <TeamRecord>(3-2)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Christach</TeamName>
                <VsText>vs</VsText>
                <TeamName>Matt</TeamName>

                <TeamRecord>(1-4)</TeamRecord>
                <VsContainer>
                    <Scores>4 - 12</Scores>
                    <Stadium>Yoshi Park</Stadium>
                </VsContainer>
                <TeamRecord>(3-2)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>DANdrew</TeamName>
                <VsText>vs</VsText>
                <TeamName>Justin</TeamName>

                <TeamRecord>(2-3)</TeamRecord>
                <VsContainer>
                    <Scores>2 - 9</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(3-2)</TeamRecord>
            </Matchup>

            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>The Dominican Domination</p>

            <Matchup>
                <TeamName>Morgan</TeamName>
                <VsText>vs</VsText>
                <TeamName>Isaac</TeamName>

                <TeamRecord>(2-3)</TeamRecord>
                <VsContainer>
                    <Scores>5 - 4</Scores>
                    <Stadium>DK Jungle</Stadium>
                </VsContainer>
                <TeamRecord>(3-2)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>Week 6</StyledMiniHeader>

            <Matchup>
                <TeamName>Isaac</TeamName>
                <VsText>vs</VsText>
                <TeamName>Justin</TeamName>

                <TeamRecord>(3-3)</TeamRecord>
                <VsContainer>
                    <Scores>4 - 9</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(4-2)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>DANdrew</TeamName>
                <VsText>vs</VsText>
                <TeamName>Morgan</TeamName>

                <TeamRecord>(2-4)</TeamRecord>
                <VsContainer>
                    <Scores>3 - 5</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(3-3)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Brendan</TeamName>
                <VsText>vs</VsText>
                <TeamName>Matt</TeamName>

                <TeamRecord>(4-2)</TeamRecord>
                <VsContainer>
                    <Scores>4 - 5</Scores>
                    <Stadium>Wario City</Stadium>
                </VsContainer>
                <TeamRecord>(3-3)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Christach</TeamName>
                <VsText>vs</VsText>
                <TeamName>James</TeamName>

                <TeamRecord>(2-4)</TeamRecord>
                <VsContainer>
                    <Scores>13 - 7</Scores>
                    <Stadium>Daisy Cruiser</Stadium>
                </VsContainer>
                <TeamRecord>(3-3)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>Week 7</StyledMiniHeader>

            <Matchup>
                <TeamName>Brendan</TeamName>
                <VsText>vs</VsText>
                <TeamName>Christach</TeamName>

                <TeamRecord>(4-3)</TeamRecord>
                <VsContainer>
                    <Scores>6 - 7</Scores>
                    <Stadium>Daisy Cruiser</Stadium>
                </VsContainer>
                <TeamRecord>(3-4)</TeamRecord>
            </Matchup>

            <p>The Shy Guy Tribute Game</p>
            <Matchup>
                <TeamName>Matt</TeamName>
                <VsText>vs</VsText>
                <TeamName>Justin</TeamName>

                <TeamRecord>(3-4)</TeamRecord>
                <VsContainer>
                    <Scores>11 - 14</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(5-2)</TeamRecord>
            </Matchup>

            <p>The Dominican Domination II</p>
            <Matchup>
                <TeamName>Isaac</TeamName>
                <VsText>vs</VsText>
                <TeamName>Morgan</TeamName>

                <TeamRecord>(3-4)</TeamRecord>
                <VsContainer>
                    <Scores>6 - 7</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(4-3)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>James</TeamName>
                <VsText>vs</VsText>
                <TeamName>DANdrew</TeamName>

                <TeamRecord>(4-3)</TeamRecord>
                <VsContainer>
                    <Scores>10 - 6</Scores>
                    <Stadium>Yoshi Park</Stadium>
                </VsContainer>
                <TeamRecord>(2-5)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>Week 8</StyledMiniHeader>

            <Matchup>
                <TeamName>Justin</TeamName>
                <VsText>vs</VsText>
                <TeamName>Brendan</TeamName>

                <TeamRecord>(5-3)</TeamRecord>
                <VsContainer>
                    <Scores>0 - 6</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(5-3)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Christach</TeamName>
                <VsText>vs</VsText>
                <TeamName>Isaac</TeamName>

                <TeamRecord>(3-5)</TeamRecord>
                <VsContainer>
                    <Scores>4 - 23</Scores>
                    <Stadium>Wario City</Stadium>
                </VsContainer>
                <TeamRecord>(4-4)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>James</TeamName>
                <VsText>vs</VsText>
                <TeamName>Morgan</TeamName>

                <TeamRecord>(5-3)</TeamRecord>
                <VsContainer>
                    <Scores>7 - 1</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(4-4)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Matt</TeamName>
                <VsText>vs</VsText>
                <TeamName>DANdrew</TeamName>

                <TeamRecord>(3-5)</TeamRecord>
                <VsContainer>
                    <Scores>8 - 10</Scores>
                    <Stadium>Daisy Cruiser</Stadium>
                </VsContainer>
                <TeamRecord>(3-5)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>Week 9</StyledMiniHeader>

            <Matchup>
                <TeamName>Isaac</TeamName>
                <VsText>vs</VsText>
                <TeamName>James</TeamName>

                <TeamRecord>(4-5)</TeamRecord>
                <VsContainer>
                    <Scores>8 - 10</Scores>
                    <Stadium>Daisy Cruiser</Stadium>
                </VsContainer>
                <TeamRecord>(6-3)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Justin</TeamName>
                <VsText>vs</VsText>
                <TeamName>Matt</TeamName>

                <TeamRecord>(6-3)</TeamRecord>
                <VsContainer>
                    <Scores>1 - 7</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(3-6)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Morgan</TeamName>
                <VsText>vs</VsText>
                <TeamName>Brendan</TeamName>

                <TeamRecord>(4-5)</TeamRecord>
                <VsContainer>
                    <Scores>3 - 7</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(6-3)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Christach</TeamName>
                <VsText>vs</VsText>
                <TeamName>DANdrew</TeamName>

                <TeamRecord>(3-6)</TeamRecord>
                <VsContainer>
                    <Scores>3 - 7</Scores>
                    <Stadium>Yoshi Park</Stadium>
                </VsContainer>
                <TeamRecord>(4-5)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>Week 10</StyledMiniHeader>

            <p>The Yoshi Park Home Run Derby</p>
            <Matchup>
                <TeamName>James</TeamName>
                <VsText>vs</VsText>
                <TeamName>Matt</TeamName>

                <TeamRecord>(6-4)</TeamRecord>
                <VsContainer>
                    <Scores>14 - 15</Scores>
                    <Stadium>Yoshi Park</Stadium>
                </VsContainer>
                <TeamRecord>(4-6)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Brendan</TeamName>
                <VsText>vs</VsText>
                <TeamName>Justin</TeamName>

                <TeamRecord>(7-3)</TeamRecord>
                <VsContainer>
                    <Scores>8 - 5</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(6-4)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>DANdrew</TeamName>
                <VsText>vs</VsText>
                <TeamName>Isaac</TeamName>

                <TeamRecord>(5-5)</TeamRecord>
                <VsContainer>
                    <Scores>15 - 10</Scores>
                    <Stadium>Wario City</Stadium>
                </VsContainer>
                <TeamRecord>(4-6)</TeamRecord>
            </Matchup>

            <Matchup>
                <TeamName>Morgan</TeamName>
                <VsText>vs</VsText>
                <TeamName>Christach</TeamName>

                <TeamRecord>(5-5)</TeamRecord>
                <VsContainer>
                    <Scores>9 - 4</Scores>
                    <Stadium>Daisy Cruiser</Stadium>
                </VsContainer>
                <TeamRecord>(3-7)</TeamRecord>
            </Matchup>

            <StyledMiniHeader>** All Star Game **</StyledMiniHeader>

            <Matchup>
                <TeamName>All-Star East</TeamName>
                <VsText>vs</VsText>
                <TeamName>All-Star West</TeamName>

                <TeamRecord>(1-0)</TeamRecord>
                <VsContainer>
                    <Scores>21 - 4</Scores>
                    <Stadium>Mario Stadium</Stadium>
                </VsContainer>
                <TeamRecord>(0-1)</TeamRecord>
            </Matchup>
        </ContentDiv>
    );
}
