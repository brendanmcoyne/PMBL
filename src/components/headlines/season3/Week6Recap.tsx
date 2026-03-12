import {ContentDiv, StyledHeader, ArticleMeta, SeparatorLine, Passage, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";
import {styled} from "styled-components";

const ScoreTable = styled.table`
    border-collapse: collapse;
    text-align: center;
    margin-bottom: 2rem;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
`;

const Th = styled.th`
    border: 1px solid #fff;
    padding: 0.25rem;
`;

const Td = styled.td`
    border: 1px solid #fff;
    padding: 0.25rem;
`;

const GameSummary = styled.div`
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #444;
    padding: 1rem;
    border-radius: 12px;
    text-align: center;
    margin: 0 auto 2rem auto;

    .mvp {
        font-style: italic;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }

    .pitchers {
        display: flex;
        justify-content: center;
        gap: 3rem;
        font-size: 0.95rem;
    }
`;

const AwardsSection = styled.div`
    display: grid;
    gap: 2rem;
    margin: 2rem auto;
    width: fit-content;
    text-align: center;
`;

const AwardBlock = styled.div`
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid #555;
    border-radius: 14px;
    padding: 1.5rem 2.5rem;
    min-width: 300px;
    max-width: 400px;

    .award-name {
        font-weight: bold;
        font-size: 1.3rem;
        margin-bottom: 0.75rem;
    }

    .player {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .manager {
        font-size: 1rem;
        margin-bottom: 0.75rem;
        color: #ccc;
    }

    .description {
        font-size: 0.95rem;
        line-height: 1.4;
        color: #ddd;
        margin-top: 0.5rem;
    }
`;

export const GenImage = styled.img`
    width: 800px;
    height: auto;
    object-fit: contain;
    border: 3px solid black;
    padding: 8px;
    margin: 20px 0;
    background-color: white;
    @media screen and (max-width: 1000px) {
        width: 400px;
    }
`;

export default function Week6Recap3() {
    const game1 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [0, 1, 2, 2, 3, 0, 0], R: 8, H: 21, E: 0, LOB: 10 },
        home: { name: "Trocean", color: "#9900FF", scores: [3, 0, 0, 0, 0, 4, "X"], R: 11, H: 16, E: 0, LOB: 6 },
    };
    const game2 = {
        away: { name: "James", color: "#F1C232", scores: [1, 0, 0, 0, 0, 1, 1], R: 33, H: 45, E: 1, LOB: 3 },
        home: { name: "Marge", color: "#6AA84F", scores: [1, 0, 2, 0, 0, 2, 0], R: 15, H: 28, E: 1, LOB: 4 },
    };
    const game3 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 0, 0, 0, 0, 0, 0], R: 4, H: 16, E: 1, LOB: 4 },
        home: { name: "THANdrew", color: "#999999", scores: [0, 0, 0, 0, 0, 0, "X"], R: 8, H: 12, E: 0, LOB: 5 },
    };
    const game4 = {
        away: { name: "Brendan", color: "#CC0000", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 0, E: 0, LOB: 0 },
        home: { name: "Isaac", color: "#3586E8", scores: [0, 0, 0, 0, 0, 0, "X"], R: 0, H: 0, E: 0, LOB: 0 },

    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Week 6 Recap</StyledHeader>
            <GenImage src="/headlines/3week6.jpeg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — March 9, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>In a week filled with sorrow and grieving, baseball is the light and the comfort the fans
            and managers needed. The league sends its condolences to Gramms and Geek Squad.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#FF00FF" }}> Morgan</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>After a very beautiful and emotional funeral procession for Gramps, the game began in DK jungle with
            the 2nd matchup of Morgan vs Trocean this season. </Passage>

            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(7)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
                    <Th>R</Th>
                    <Th>H</Th>
                    <Th>E</Th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td style={{color: game1.away.color}}>{game1.away.name}</Td>
                    {game1.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game1.away.R}</Td>
                    <Td>{game1.away.H}</Td>
                    <Td>{game1.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game1.home.color}}>{game1.home.name}</Td>
                    {game1.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game1.home.R}</Td>
                    <Td>{game1.home.H}</Td>
                    <Td>{game1.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: Diddler</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (2 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bowser Jr (2 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#6AA84F" }}>Marge</span></StyledMiniHeader>
            <Passage></Passage>

            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(7)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
                    <Th>R</Th>
                    <Th>H</Th>
                    <Th>E</Th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td style={{color: game2.away.color}}>{game2.away.name}</Td>
                    {game2.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game2.away.R}</Td>
                    <Td>{game2.away.H}</Td>
                    <Td>{game2.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game2.home.color}}>{game2.home.name}</Td>
                    {game2.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game2.home.R}</Td>
                    <Td>{game2.home.H}</Td>
                    <Td>{game2.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: Petey Piranha</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Wario (4 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Donkey Kong (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#FF9900" }}> Justave</span> v.s.
                <span style={{ color: "#999999" }}> THANdrew</span></StyledMiniHeader>
            <Passage></Passage>

            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(7)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
                    <Th>R</Th>
                    <Th>H</Th>
                    <Th>E</Th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td style={{color: game3.away.color}}>{game3.away.name}</Td>
                    {game3.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game3.away.R}</Td>
                    <Td>{game3.away.H}</Td>
                    <Td>{game3.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game3.home.color}}>{game3.home.name}</Td>
                    {game3.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game3.home.R}</Td>
                    <Td>{game3.home.H}</Td>
                    <Td>{game3.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: King Boo</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Mario (1 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Luigi (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Boo (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage></Passage>
            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(7)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
                    <Th>R</Th>
                    <Th>H</Th>
                    <Th>E</Th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td style={{color: game4.away.color}}>{game4.away.name}</Td>
                    {game4.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game4.away.R}</Td>
                    <Td>{game4.away.H}</Td>
                    <Td>{game4.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game4.home.color}}>{game4.home.name}</Td>
                    {game4.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game4.home.R}</Td>
                    <Td>{game4.home.H}</Td>
                    <Td>{game4.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: Daisy</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Dry Bones (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Blue Pianta (2 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">King Boo</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/3, 1 Run, 5 RBIs, 1 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 2.1 IP, 5 Hits, 3 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Dry Bones</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description">
                        (W) 3.2 IP, 4 Hits, 1 K
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Daisy</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/4, 3 Runs, 2 RBIs, 1 HR, 1 D
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        0.1 IP
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Piggy</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        3/4, 1 Run, 2 D
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Diddler</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description">
                        Perfect 3/3, 1 Run, 1 Double, and Game MVP
                    </div>
                </AwardBlock>
            </AwardsSection>


            <SeparatorLine />
            <StyledMiniHeader>Check out more stories below!</StyledMiniHeader>

            <StoryDiv>
                <Stories>
                    <Story>
                        <MiniImage src="/headlines/miibaseball.jpg" alt="Mii" />
                        <Overlay>
                            <Headline>Head Analyst Predicts Mii Breakout Season</Headline>
                            <StyledLink to="/headlines/MiiBreakout">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
                <Stories>
                    <Story>
                        <MiniImage src="/headlines/koopa_behind_the_bars.jpg" alt="Koopa" />
                        <Overlay>
                            <Headline>Koopa Found Guilty of Assault</Headline>
                            <StyledLink to="/headlines/Koopa">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
                <Stories>
                    <Story>
                        <MiniImage src="/headlines/Caucasian_bones_playground.png" alt="Dry Bones" />
                        <Overlay>
                            <Headline>Dry Bones Gets a Slap on the Wrist</Headline>
                            <StyledLink to="/headlines/DryBones">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
            </StoryDiv>
        </ContentDiv>
    );
}