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
    grid-template-columns: repeat(2, minmax(300px, 400px));
    gap: 2rem;
    justify-content: center;
    margin: 2rem auto;
    text-align: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
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

const StatLeadersBlock = styled.div`
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid #555;
    border-radius: 14px;
    padding: 1.5rem;
    max-width: 1000px;
    margin: 2rem auto;
`;

const LeaderboardTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;

    th, td {
        border: 1px solid #555;
        padding: 0.75rem;
    }

    th {
        background: rgba(255,255,255,0.1);
    }

    tr:nth-child(even) {
        background: rgba(255,255,255,0.03);
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

export default function Week2Recap4() {
    const game1 = {
        away: { name: "Justave", color: "#FF9900", scores: [2, 1, 1, 2, 0, 2, 0], R: 8, H: 18, E: 0, LOB: 8 },
        home: { name: "James", color: "#F1C232", scores: [2, 0, 0, 1, 1, 0, 0], R: 4, H: 16, E: 3, LOB: 7 },
    };
    const game2 = {
        away: { name: "Marge", color: "#6AA84F", scores: [0, 2, 0, 0, 0, 1, 1], R: 4, H: 10, E: 2, LOB: 4 },
        home: { name: "Isaac", color: "#3586E8", scores: [0, 9, 0, 2, 0, 0, "X"], R: 11, H: 17, E: 0, LOB: 8 },
    };
    const game3 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [1, 2, 2, 0, 5, 2, "X"], R: 12, H: 20, E: 0, LOB: 8 },
        home: { name: "Trocean", color: "#9900FF", scores: [0, 0, 3, 4, 4, 0, "X"], R: 11, H: 22, E: 1, LOB: 7 },
    };
    const game4 = {
        away: { name: "Brendan", color: "#CC0000", scores: [0, 2, 0, 1, 2, 0, 0], R: 5, H: 13, E: 0, LOB: 5 },
        home: { name: "THANdrew", color: "#999999", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 7, E: 0, LOB: 5 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 4 Week 1 Recap</StyledHeader>
            <GenImage src="/headlines/4week1.jpeg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — June 23, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Welcome to Season 4. Even though this season will be online, we hope the fans will still show
                up to watch their favorite teams compete. The league is excited for some of the new looking lineups this year.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#FF9900" }}>Justave</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>

            </Passage>

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
                <div className="mvp">Game MVP: Grayson McKean</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Peach (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bowser Jr (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#6AA84F" }}> Marge</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>

            </Passage>

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
                <div className="mvp">Game MVP: Red Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Wiggler (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Miss Jones (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#9900FF" }}> Trocean</span> v.s.
                <span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>

            </Passage>
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
                <div className="mvp">Game MVP: Mario, Kaguya</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Triangle (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#999999" }}> THANdrew</span></StyledMiniHeader>
            <Passage>

            </Passage>
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
                <div className="mvp">Game MVP: Birdo</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Wario (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection style={{marginTop: "0"}}>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Abu Patel</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description">
                        4/4, 3 runs, 5 RBIs, 2 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Bob Marley</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description">
                        (W) 5.1 IP, 7 Hits, 2 ER, 1 K
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Diddy Kong</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>Trocean</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/4, 1 Run, 3 RBIs, 1 Double
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        2.1 IP, 4 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="description">
                        Not awarded.
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Blue Noki</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description">
                        5/5, 3 Runs, 2 RBIs
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Disappointment of the Week</div>
                    <div className="player">Light Blue Yoshi</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description">
                        0/3 and 2 fielding errors
                    </div>
                </AwardBlock>
            </AwardsSection>


            <StyledMiniHeader>Week 1 Stat Leaders</StyledMiniHeader>

            <StatLeadersBlock style={{marginTop: "0"}}>
                <LeaderboardTable>
                    <thead>
                    <tr>
                        <th>Stat</th>
                        <th>1st</th>
                        <th>2nd</th>
                        <th>3rd</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Batting Average</td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Abu Patel</span> (1.000)
                        </td>
                        <td>
                            <span style={{ color: "#999999" }}>Geek Squad</span> (1.000)
                        </td>
                        <td>4 Players (1.000)</td>
                    </tr>

                    <tr>
                        <td>Home Runs</td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Abu Patel</span> (2)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Baby DK</span> (1)
                        </td>
                        <td>4 Players (1)</td>
                    </tr>

                    <tr>
                        <td>RBIs</td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Abu Patel</span> (5)
                        </td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Dry Bones</span> (4)
                        </td>
                        <td>2 Players (3)</td>
                    </tr>

                    <tr>
                        <td>Runs</td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Abu Patel</span> (3)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Baby DK</span> (3)
                        </td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Kaguya</span> (3)
                        </td>
                    </tr>

                    <tr>
                        <td>Hits</td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Abu Patel</span> (4)
                        </td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Kaguya</span> (4)
                        </td>
                        <td>3 Players (4)</td>
                    </tr>

                    <tr>
                        <td>ERA (Min. 3 IP)</td>
                        <td>
                            <span style={{ color: "#3586E8" }}>Baby Daisy</span> (0.00)
                        </td>
                        <td>
                            <span style={{ color: "#999999" }}>King K. Rool</span> (1.62)
                        </td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Bob Marley</span> (2.63)
                        </td>
                    </tr>

                    <tr>
                        <td>Innings Pitched</td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Bob Marley</span> (5.1)
                        </td>
                        <td>
                            <span style={{ color: "#3586E8" }}>Baby Daisy</span> (4.1)
                        </td>
                        <td>2 Players (4.1)</td>
                    </tr>

                    <tr>
                        <td>Strikeouts</td>
                        <td>
                            <span style={{ color: "#CC0000" }}>Antenna</span> (1)
                        </td>
                        <td>
                            <span style={{ color: "#6AA84F" }}>Birdo</span> (1)
                        </td>
                        <td>4 Players (1)</td>
                    </tr>
                    </tbody>
                </LeaderboardTable>
            </StatLeadersBlock>

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