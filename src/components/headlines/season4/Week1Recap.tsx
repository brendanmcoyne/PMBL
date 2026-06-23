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

export default function Week1Recap4() {
    const game1 = {
        away: { name: "THANdrew", color: "#999999", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 7, E: 0, LOB: 5 },
        home: { name: "Isaac", color: "#3586E8", scores: [1, 0, 0, 0, 0, 0,"X"], R: 1, H: 5, E: 1, LOB: 3 },

    };
    const game2 = {
        away: { name: "James", color: "#F1C232", scores: [7, 0, 0, 1, 1, 0, 1], R: 10, H: 20, E: 0, LOB: 8 },
        home: { name: "Trocean", color: "#9900FF", scores: [0, 0, 3, 4, 4, 0, "X"], R: 11, H: 22, E: 1, LOB: 7 },
    };
    const game3 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 0, 0, 0, 0, 2, 0], R: 2, H: 7, E: 2, LOB: 3 },
        home: { name: "Morgan", color: "#FF00FF", scores: [1, 2, 2, 0, 5, 2, "X"], R: 12, H: 20, E: 0, LOB: 8 },
    };
    const game4 = {
        away: { name: "Brendan", color: "#CC0000", scores: [0, 2, 0, 1, 2, 0, 0], R: 5, H: 13, E: 0, LOB: 5 },
        home: { name: "Marge", color: "#6AA84F", scores: [1, 0, 2, 0, 0, 2, 2], R: 7, H: 15, E: 0, LOB: 6 },
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

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#999999" }}> THANdrew</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>With Isaac now a champion, he would face off against THANdrew once again after defeating them 3-1
            in the Conference Series last season. Being graced the #1 pick, Petey Piranha looks to start his championship
            run, as he is the only player to make all 3 playoffs and not win it all. One of the most interesting pitching
            matchups would take place, with Baby Daisy vs King K. Rool on the mound. This would be the first time in PMBL
            history where one starting pitcher would be 10x heavier than the other. Petey Piranha would hit a sacrifice fly
            off of King K in the 1st making it 1-0 Isaac, and neither pitcher would give up another earned run. Both would
            pitch 4.1 innings, with Baby Daisy giving up 6 hits, and King K only giving up 3. A very good starting pitching
            duel with little to no offense. THANdrew's base running was incredibly lackluster, with not one but two of thier
            hitters being thrown out, including Hammer Bro at home which would've tied the game. Absolutely zero offense
            could happen even when Daisy and Luigi took the mound for their teams. Despite the sac fly, Petey could not
            muster a hit, and neither could hitters 5 through 9 behind him on Isaac's team. Luigi, while pitching fairly
            well, went 0/3 and struck out looking in a cruical spot in the 7th inning, thus leading to a 1-0 win for Isaac.
            Fans were incredibly disappointed by this game, an absolute joke of a starting game, which caused them to worry
            about the future games this year due to the leagues changes. Petey would win a "fraudulent" MVP after going
            0/2 and a sac fly, as Isaac would only win off of 5 hits thanks to his starting 3 in the batting lineup.</Passage>

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
                <div className="mvp">Game MVP: Petey Piranha</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Baby Daisy (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: King K. Rool (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Daisy (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>Two complete opposite teams last year face off in Week 1 with somewhat similar team structure
            as years before. James brought back Bowser Jr and made him captain over Bowser, and Trocean likewise took
            Diddy Kong again and made him captain over Donkey Kong. This would be the first ever matchup where Bowser
            Jr and Diddy Kong would play each other as captains. Donkey Kong getting the start the mound, hoping to
            erase his horrific performance on the mound last year. He could not. He would get the first out, and then
            immediately give up 7 runs. He would see 11 batters in the first inning. The biggest was a 3 run homer by Abu
            Patel. Donkey would get pulled 1.2 innings in for Diddy Kong, but a horrific performance to start, giving up
            7 earned runs off of 8 hits. Diddy would bring the team back, hitting a 2 RBI double in the 3rd, and then score
            off of a Sherpa sac double to make it 7-3. Abu would then hit his 2nd homer against Trocean to make it 8-3
            shortly after. Troceans bats would strike again in the bottom of the 4th thanks to a Baby DK 3 run homer, and
            another Sherpa RBI to make it 8-7 James, pulling Bowser off the mound in favor of captain Bowser Jr. Gramms
            would enter the mound in the 5th, quickly load the bases, and Abu Patel would get his 3rd hit and 5th RBI, making
            it 9-7 James. Once again, Trocean's bats wouldn't stop. Boomerang Bro got his first hit of the season off a
            2-run homer to tie the game 9-9, then Tiny and Diddy would get back to back RBI singles to give Trocean an
            11-9 lead. Nothing would happen in the 6th, but James would get his players into scoring position in the 7th.
            Bowser would hit a bloop single to drive in Abu Patel, and with Bowser Jr at 3rd, Paratroopa would ground out,
            giving Trocean the comeback 11-10 victory. In the stat era (Season 2 - Present), Trocean has never won a game
            where they have scored first, and now they've come back down 7-0 to win. This is James 4th 7-run blown lead
            in his franchise history, 3rd in which he has lost. This is the first time James has lost Opening Week.</Passage>

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
                <div className="mvp">Game MVP: Diddy Kong</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Gramms (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bowser Jr (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#FF9900" }}>Justave</span> v.s.
                <span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>Justave had a very interesting draft, taking 7 miis of pink and light blue shirt color. Nicknamed
            the "Cotton Candy Squad", they look to redeem last years disappointment with a Week 1 win against Morgan, who
            has never won in Opening Week. Triangle would get her first ever start against the veteran himself, Bob Marley.
            Triangle struggled on her first ever start, giving up 8 hits and 4 earned runs in 2.2 innings. Morgan
            would score 1 in the 1st, 2 in the 2nd, and 2 in the 3rd. His players would be getting on base very efficiently,
            and Bob Marley would be pitching very well once again. He would get his first ever regular season strikeout
            on the fading Grayson McKean, and would pitch 4 innings scoreless. The runs would only hit him off of a Funky
            Kong 2-run homer in the 5th inning with Triangle on base. Bob Marley would finish the day going 5.1 innings
            and given up 2 earned runs off fo 7 hits, and recorded a strikeout. Justave's team really struggled in Opening Week.
            Their team is very young, and lacked some experience. Smurf and Light Blue Shy Guy made their PMBL debuts going
            a combined 1/6, and the Pink outfield went 2/7. Peach did not record a hit, and only lasted 1.1 innings on the
            mound, and last years Morgan Hartwell Man of the Year Award recipient, Jake, pitching 1 inning and gave up
            5 runs. 4 players on Justave did not record hits, including Peach. Light Blue Yoshi committed 2 errors at
            2nd base which would help Morgan score more runs. It was would be 12-2 Morgan win in the end, with Mario winning
            his first ever Game MVP, going 3/4, 2 Runs, and an RBI with 2 doubles. He also took over for Bob on the mound
            pitching a hitless 1.2 innings. Kaguya also got MVP, going 4/4 with 3 runs and an RBI.</Passage>
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
                <span style={{ color: "#6AA84F" }}> Marge</span></StyledMiniHeader>
            <Passage>In the final game of the week, Marge would take Brendan to Bowsers Castle to fight back against his
            heavier hitting squad, and be debuting Purple Yoshi in the outfield. Very excited about his outfield, Brendan
            would be starting the Koopa and Bones outfield, consisting of Dark Bones, Blue Dry Bones, and Red Koopa. Marge
            would start the scoring off of Yoshi hittig an RBI in the first, and Brendan would counter with 2 RBIs thanks to
            Waluigi in the 2nd. Antenna, starting on the mound for Brendan, would strike out Eugene looking, which Marge
            threatened to drop him after the game. Marge would fight back with 2 more RBIs in the 3rd off of Green Dry Bones
            and Baby Luigi to go up 3-2. Blue Pianta would get off the mound in favor of Birdo, and would give up the game
            tying run to Wario, making it 3-3. Antenna would bat in 2 more runs in the 5th after striking out the inning
            before to give Brendan the 5-3 lead. In the Witching Hour, Marge's bats were able to get past Brendan's outfield
            once again, with Purple Toad and Blue Pianta both hitting RBI singles to tie it 5-5. The King Bob-omb in the
            outfield played a big role, throwing and successfully hitting bombs on outfielders for both teams due to the
            shorter bomb fuses introduced this year. In the 7th, Red Koopa would hit a ball off of King Bob-omb, which
            Purple Toad would make the heads up play to catch it for the out. In the 7th, Wario would get one out with Baby
            Luigi on base, and Birdo, who was 0/3 to start the game would step up and a hit a deep shot. Red Koopa would get
            hit by the fire and be unable to jump and catch it in time, giving Marge the 7-5 home run walkoff against Brendan.
            Birdo off that one home run would instantly win MVP, and Marge now leads the East Division for the first time
            since Season 1 Week 2. </Passage>
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