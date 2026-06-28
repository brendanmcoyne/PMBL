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
        away: { name: "Morgan", color: "#FF00FF", scores: [0, 0, 0, 0, 0, 0, 3], R: 3, H: 12, E: 0, LOB: 6 },
        home: { name: "Trocean", color: "#9900FF", scores: [7, 0, 1, 0, 2, 0, "X"], R: 10, H: 20, E: 0, LOB: 6 },
    };
    const game4 = {
        away: { name: "Brendan", color: "#CC0000", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 0, E: 0, LOB: 0 },
        home: { name: "THANdrew", color: "#999999", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 0, E: 0, LOB: 0 },
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
            <Passage>Coming off his first ever Opening Week loss, James looked to ride the ship against division opponent
                Justave, who lost 12-2 to Morgan the week prior. Bowser Jr would take his spot on the mound against Dixie Kongs
                first ever start. With a new batting order, Light Blue Shy Guy would record his first ever hit in the majors, and
                his first run as Funky Kong would bat 2 runs in after they were loaded. The top of the inning would end off of
                a predictable strikeout from Grayson McKean before James' bats would score 2 of thier own, getting Dixie off the
                mound after only .2 innings. King Boo would record the RBIs thanks to Bowser putting himself and Bowser Jr into
                scoring position. Justave would get runs in both the 2nd and 3rd thanks to solo shots by Peach and Triangle, and
                then a 3rd solo shot by newcomer Smurf in the top of the 4th, followed by a Funkey Kong sacrifice fly to make it
                6-2 Justave. Peach would be taken off the mound in favor of Funky Kong surprisingly in the 4th for Justaves team,
                who would give up a sac fly to King Boo in the 4th and another Abu Patel RBI in the 5th making the score 6-4
                Justave. Going into the witching hour, Dixie Kong would get her first RBI of the season, bringing in Light Blue
                Shy Guy, and Grayson would get a very lucky RBI off of a King Boo error at 3rd base, extending the Justave lead
                back to 4 runs, and taking Bowser off the mound for Yellow Magikoopa. James would be unable to score for his
                last 2 innings batting, and he would fall to Justave for the first time since the World Series 8-4. Despite
                Funky Kong having 3 RBIs and 3 different batters hitting solo homers, the game MVP would be given to Grayson
                McKean, who went 2/3 with a K, and RBI'ed off of an error. The fans once again very upset with the Game MVP
                voting, calling it "fraudulent" like Petey Piranha's in Week 1. Justave for the 4th straight year will start
                1-1, while James for the first time ever will start 0-2.
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
            <Passage>Coming off a big walk off win at the castle, vibes were high for Marge. Bringing sophomore Miss
                Jones onto the mound against Wiggler. No hits would be exchanged in the 1st inning, but in the 2nd
                inning, Birdo would hit a deep drive to right center, scoring 2 to give Marge an early 2 run lead.
                That would very quickly end as Marge's fielding completely fell apart, as Yoshi would error at
                shortstop and then fail to throw the ball to second. This would end up giving Red Kritter a
                grand slam to make it 4-2 Isaac. The Marge outfield would get the 2nd out off of Yellow Pianta, but give up
                3 more hits, including to Petey for a ground-rule double, taking Miss Jones off the mound down 5-2. Isaac
                would get some luck thanks to Eugene deciding to synergy pass the ball to Purple Toad instead of catching
                it himself, allowing 2 more runs to score off of a Daisy triple. Lucia and Tate McRae would each pick up
                another RBI to make it 9-2 Isaac, a disastrous fielding inning for Marge. Marges bats could not find
                anything for the rest of the game, repeatedly grounding to short and having 1-2-3 innings. Red Kritter
                would hit another 2 run homer in the 4th for Isaac making it 11-2, and Baby Luigi and Birdo would each
                bat in a run in the 6th and 7th innings, with Birdos being a solo shot. The starting 2 batters in Marges
                lineup, Eugene and Purple Toad, both went 0-4, including Purple Toad erroring in left field. The game
                would end 11-4 Isaac in the jungle, and Isaac would go to 2-0 for the first time ever.
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

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#FF00FF" }}> Morgan</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>Per tradition in the Trocean management, Manager Ocean loves to skip important baseball events for
                family vacations. Last year he failed to attend the draft, and this year he is missing out on Week 2
                against Morgan, taking an indefinite amount of time away from the team. Morgan would also not be
                present for his game, leaving the players to "figure it out", with longest tenured players Danny B
                and Dry Bones taking the leadership roles. Danny B would be start on the mound against Diddy Kong for Trocean.
                Diddy Kong would quickly get rid of the 1st 3 batters, before Danny B would watch his PMBL life flash before
                his eyes, giving up hits to the first 8 batters he saw, giving up 6 earned runs, and being taken off the
                mound without recording an out. This would be the longest streak of hits to start a game in PMBL history.
                Mario would then quickly come up and end the inning, but a 7-0 lead with the starter out was a terrible
                sight for Morgan fans. The game stayed very balanced and in check for the remainder of the innings, with
                Trocean scoring another run in the 3rd and 2 more in the 5th. Morgans bats could get absolutely zero
                momentum whatsoever. The Ketchup & Mustard toad duo was very dormant up until the 7th inning, and Dry
                Bones was not able to get sort of offense going for his team. In the 7th inning, with Donkey Kong hoping
                to end his day scoreless after an almost Danny B-like performance last week on the mound, he would give up
                3 runs off of RBI singles. The DK haters rejoiced as his pitching woes still were continuing in Week 2.
                The game would end on a very fitting Danny B double play. Troceans 10-3 win would bring them 2 games above
                .500 for the first time in their history, and the fans don't know how to react. The Morgan fans know
                exactly how to react to Danny B, rivaling the Red Yoshi performance from a season ago, Danny B went
                0/4, and giving up 6 earned runs on 8 hits without recording an out. For the first time in PMBL history,
                Trocean will sit #1 in league rankings to end the week. Morgan is the only team which has never sat #1.
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
                <div className="mvp">Game MVP: Brown Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Diddy Kong (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Danny B (0 - 1)</span>
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