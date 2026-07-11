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

export default function Week3Recap4() {
    const game1 = {
        away: { name: "Isaac", color: "#3586E8", scores: [2, 1, 0, 0, 0, 1, 0], R: 4, H: 12, E: 1, LOB: 7 },
        home: { name: "James", color: "#F1C232", scores: [0, 0, 2, 1, 1, 3, "X"], R: 7, H: 14, E: 3, LOB: 8 },
    };
    const game2 = {
        away: { name: "Trocean", color: "#9900FF", scores: [1, 3, 0, 3, 0, 0, 0], R: 7, H: 18, E: 1, LOB: 7 },
        home: { name: "Marge", color: "#6AA84F", scores: [0, 0, 1, 1, 0, 0, 6], R: 8, H: 21, E: 0, LOB: 8 },
    };
    const game3 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [0, 0, 2, 0, 1, 0, 1], R: 4, H: 9, E: 0, LOB: 6 },
        home: { name: "Brendan", color: "#CC0000", scores: [1, 0, 1, 0, 0, 0, 0], R: 2, H: 11, E: 2, LOB: 3 },
    };
    const game4 = {
        away: { name: "THANdrew", color: "#999999", scores: [1, 0, 1, 0, 0, 0, 5], R: 7, H: 14, E: 1, LOB: 6 },
        home: { name: "Justave", color: "#FF9900", scores: [1, 3, 0, 0, 0, 1, 0], R: 5, H: 16, E: 0, LOB: 7 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 4 Week 3 Recap</StyledHeader>
            <GenImage src="/headlines/4week3.jpg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — July 11, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>This has been a very strange week in terms of blown leads, with multiple happening in the final
            inning. Who would have thought the West Division would be this dominant this year?</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#3586E8" }}> Isaac</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>With James surprisingly starting 0-2, and being the only team that has lost at home, many fans around
                the league were surprised. Now playing Isaac, it wouldn't start lucky for him, as with 2 outs and the
                bases loaded, Daisy would hit a shot to center, but Abu Patel would error, scoring 2 runs for Isaac. Boo
                would quickly be pulled to start the 2nd, right before Red Kritter would hit a solo shot to center, making
                it 3-0 Isaac rather quickly. With no offense going for James in the first 2 innings, it looked as if Isaac
                would quickly run away with this game once again, but James would strike, scoring 2 in the 3rd and another
                in the 4th to tie it 3-3. Isaac's offense would soon disappear, and Daisy would surrender the lead
                in the 5th, giving up another run to make it 4-3 James. Another error would give Isaac another run, as the
                game would be tied 4-4 after a Yellow Magikoopa bobble. There have been 5 unearned runs scored this year,
                and all 5 have been by Isaac. Despite the bad RNG for James, his team would get enough of a lead in the
                bottom of the 6th, scoring 2 and taking Daisy off the mound. Wiggler would come on and led up another one
                to make it 7-4 James. Isaac's offense would go 1-2-3 in the 7th, giving James his first win and Isaac his
                first loss. James is now 6-1 against Isaac all time, one of the most dominant head to head records in PMBL.
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
                <div className="mvp">Game MVP: Bowser</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bowser (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Daisy (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#9900FF" }}> Trocean</span> v.s.
                <span style={{ color: "#6AA84F" }}> Marge</span></StyledMiniHeader>
            <Passage>The 2 teams in the league looking to finally make their first playoff berth square off at Bowser
                Jr Playroom. The hype around this Trocean team has stretched all the way to the Hyrule Kingdom as Manager
                Ocean has been shouting it from the mountain tops. Still on his managerial vacation, Manager Troy was left
                once again to manage the squad. DK hoping to redeem himself on the mound, he'd get the start against Blue
                Pianta. Troceans offense would pick right back up where they left off, scoring 4 runs by the 2nd inning
                to take a 4-0 lead. Marge looked completely lost to start this game. No one could hit, and the fielding was
                not up to par. Marge would finally strike in the 3rd thanks to a Yoshi infield sac hit, however Trocean
                would have 3 more runs up their sleeve for the 4th, making it 7-1 Trocean. The DK critics were definitely
                silenced to start this game, with a 3 run homer and through 6 innings of pitching, only given up 2 earned
                runs. The score would be 7-2 going into the 7th, and DK would be looking pitch his first ever complete game.
                Birdo would start the 7th with a base hit, followed by Yoshi and Green Dry Bones hits to load the bases.
                Green Toad would bat in a run, followed by Blue Pianta batting in 2 more to make it 7-5 Trocean. DK would
                then be pulled after 6.1 innings, giving up 5 earned runs on a record 18 hits in one game. Diddy would
                then jump onto the mound, and immediately give up a double to Purple Toad, making it 7-6 Trocean. Michelle
                Obama would strikeout to put Trocean one away, but then Purple Yoshi would step up and deliver a hit
                right up the middle to tie the game, and then Birdo once again would walk it off, this time off of a
                Diddy Kong star hit into left center, winning it for Marge 8-7. This would be the largest 7th inning
                blown lead in league history, as both teams head to 2-1.
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
                <div className="mvp">Game MVP: Birdo</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Diddy Kong (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#FF00FF" }}> Morgan</span> v.s.
                <span style={{ color: "#CC0000" }}> Brendan</span></StyledMiniHeader>
            <Passage>After another brutal loss for Brendan last week, it seemed as if luck was definitely not on his
                side this season to start. In hopes of a first win, Blue Dry Bones would get his first ever start on the
                mound for Brendan against his old ace Bob Marley, and Blue Dry Bones did his job well, going 2 innings,
                and giving up 3 hits and no earned runs. Brendan would get the early lead thanks to a Dark Bones solo
                shot in the 1st, but Morgan would counter with a Green Kritter 2 run homer in the 3rd, both teams first
                home runs of the year. Brendan would tie it in the bottom of the 3rd thanks to another Dark Bones RBI,
                bringing in Wario. With no offense from the bottom part of his batting order, Morgan would get another
                RBI in the 5th from Green Kritter, his 3rd of the day, and taking the lead 3-2. Brendan's bats continued
                to struggle like they had for the first couple of games, hitting balls far into the outfield but not
                far enough. Going into the 7th inning, with MLK having a great game in right field, he would bobble the ball
                 on a Yellow Toad hit, which would then lead to yet another Green Kritter RBI 2 batters later. For Brendan's
                case, the 1 run lead turning into a 2 run lead wouldn't matter, as his team could not muster any runs in
                the bottom of the 7th to lose 4-2 to Morgan. Brendan would start 0-3 and be the only team winless so
                far this season. Dark Bones and Wario grumble as they have been the teams only sense of offense this year,
                with Fire Bro and Red Pianta disappointing the fans. Morgans team heavily lacked offense today too, but
                Bob Marley's pitching and Green Kritter were all they needed to stay tied atop the West Division standings.
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
                <div className="mvp">Game MVP: Green Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Waluigi (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Mario (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#999999" }}> THANdrew</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>Any game that involves THANdrew is going to be a crazy one, especially after the Dixie Kong news
                this past week, with Luigi allegedly being the attacker. The game started with a King K Rool triple
                to start the inning off of some poor fielding from Justaves outfield, making it 1-0 THANdrew. Justave,
                starting Funky Kong on the mound, was looking to gain some momentum off of last weeks big divisional win
                against James. Their offense would quickly pick back up after the top of the 1st, scoring a run off of
                a Funky Kong RBI. The team would then put 3 more on the board, thanks to a Sabrina deep shot to right
                center, followed by a Smurf RBI single to make the lead 4-1 Justave. Shortly thereafter in the 3rd, Piggie
                would show some of her rookie form by hitting a solo shot over the wall in left field to make it 4-2 Justave.
                Scoring would stay dormant throughout the next few innings, with very little base runners and Funky Kong
                pitching a very clean game. Hammer Bro would error at 2nd but no runs would score off of it. With Green
                Kamek pitching in the 6th, he would get up only 1 run through his 2 innings pitched to Smurf, making it
                5-2 Justave in the bottom of the 6th, bringing on Toadsworth for THANdrew. In the top of the 7th, things
                would begin to change quickly. After some hits from the bottom of THANdrew lineup, which was incredibly
                quiet for the entirety of the game so far, Green Kamek would bat in Blue Kritter to make it 5-3, and then
                Hammer Bro would absolutely hammer the ball to center field, hitting a 3-run homer, giving THANdrew the lead
                6-5. Funky Kong, 2 outs away from a complete game, would then be pulled, bringing in Peach. Peach would
                embarassingly give up another RBI to Luigi, making it 7-5 THANdrew. Now pitching in a win position for
                THANdrew, Toadsworth would very quickly get through the Justave batters, and steal another win on
                the Daisy Cruiser. Despite being 2-1, THANdrew is not in the playoff picture due to tiebreaker at the
                moment.
            </Passage>

            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(8)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
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
                <div className="mvp">Game MVP: Hammer Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Toadsworth (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Funky Kong (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection style={{marginTop: "0"}}>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Hammer Bro</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        2/4, 1 Run, 3 RBIs, 1 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        Go-ahead home run in the 7th to win it
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Bowser</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description">
                        (W) 6 IP, 9 Hits, 1 ER, 1 K
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/5, 1 Run, 1 RBI
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 5.1 IP, 11 Hits, 3 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Purple Yoshi</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        3/5, 1 Run, 1st ever RBI
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Smurf</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description">
                        Back to back games with a home run
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Disappointment of the Week</div>
                    <div className="player">Diddy Kong</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>Trocean</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        Blew the save in the bottom of the 7th
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (L, BS) .1 IP, 3 Hits, 3 ER
                    </div>
                </AwardBlock>
            </AwardsSection>


            <StyledMiniHeader>Week 3 Stat Leaders</StyledMiniHeader>

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
                            <span style={{ color: "#CC0000" }}>Wario</span> (0.900)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Diddy Kong</span> (0.750)
                        </td>
                        <td>
                            2 Players (0.750)
                        </td>
                    </tr>

                    <tr>
                        <td>Home Runs</td>
                        <td>
                            <span style={{ color: "#3586E8" }}>Red Kritter</span> (3)
                        </td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Abu Patel</span> (2)
                        </td>
                        <td>
                            4 Players (2)
                        </td>
                    </tr>

                    <tr>
                        <td>RBIs</td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Abu Patel</span> (6)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Boomerang Bro</span> (6)
                        </td>
                        <td>
                            <span style={{ color: "#3586E8" }}>Red Kritter</span> (6)
                        </td>
                    </tr>

                    <tr>
                        <td>Runs</td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Abu Patel</span> (5)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Diddy Kong</span> (5)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Tiny Kong</span> (5)
                        </td>
                    </tr>

                    <tr>
                        <td>Hits</td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Bowser Jr</span> (9)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Diddy Kong</span> (9)
                        </td>
                        <td>
                            <span style={{ color: "#CC0000" }}>Wario</span> (9)
                        </td>
                    </tr>

                    <tr>
                        <td>ERA (Min. 7 IP)</td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Mario</span> (2.63)
                        </td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Bob Marley</span> (2.89)
                        </td>
                        <td>
                            <span style={{ color: "#6AA84F" }}>Birdo</span> (4.20)
                        </td>
                    </tr>

                    <tr>
                        <td>Innings Pitched</td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Bowser</span> (13.2)
                        </td>
                        <td>
                            <span style={{ color: "#6AA84F" }}>Birdo</span> (13.1)
                        </td>
                        <td>
                            <span style={{ color: "#3586E8" }}>Donkey Kong</span> (11.1)
                        </td>
                    </tr>

                    <tr>
                        <td>Strikeouts</td>
                        <td>
                            <span style={{ color: "#6AA84F" }}>Birdo</span> (2)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Diddy Kong</span> (2)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Donkey Kong</span> (2)
                        </td>
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