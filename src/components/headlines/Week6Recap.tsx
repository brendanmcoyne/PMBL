import {ContentDiv, StyledHeader, ArticleMeta, SeparatorLine, Passage, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../components/headlines/HeadlineStyles";
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

export default function Week6Recap() {
    const game1 = {
        away: { name: "THANdrew", color: "#999999", scores: [0, 0, 0, 1, 0, 0, 0], R: 1, H: 8, E: 0, LOB: 1 },
        home: { name: "Isaac", color: "#3586E8", scores: [2, 2, 1, 0, 0, 0, "X"], R: 5, H: 13, E: 0, LOB: 2 },
    };
    const game2 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [2, 0, 3, 2, 1, 3, 0], R: 11, H: 16, E: 1, LOB: 3 },
        home: { name: "Trocean", color: "#9900FF", scores: [0, 0, 0, 2, 0, 2, 0], R: 2, H: 13, E: 0, LOB: 1 },
    };
    const game3 = {
        away: { name: "James", color: "#F1C232", scores: [2, 0, 0, 0, 0, 0, 0], R: 2, H: 8, E: 0, LOB: 3 },
        home: { name: "Justave", color: "#FF9900", scores: [1, 1, 0, 0, 1, 3, "X"], R: 6, H: 16, E: 1, LOB: 8 },
    };
    const game4 = {
        away: { name: "Marge", color: "#6AA84F", scores: [0, 0, 0, 0, 4, 0, 2], R: 6, H: 20, E: 0, LOB: 10 },
        home: { name: "Brendan", color: "#CC0000", scores: [1, 0, 3, 0, 1, 2, "X"], R: 7, H: 20, E: 1, LOB: 9 },

    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Week 6 Recap</StyledHeader>
            <GenImage src="/headlines/week6.jpg" alt="Week6"/>
            <ArticleMeta>
                Written by: PMBL News — November 3, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>A lot of standings shakeups happened today, as the trade deadline looms large. Are we truly sure
                who the best team in the league is? I don't think we're truly ready to declare that just yet.
            </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#3586E8" }}> Isaac</span> v.s.
                <span style={{ color: "#999999" }}> THANdrew</span></StyledMiniHeader>
            <Passage>Following an amazing game against the undefeated James, THANdrew's team was definitely riding the
            high. Defeating the #1 offense definitely shifted the leagues attention. However they failed to realize that
            this wasn't the World Series. There's more games to play. Going into Bowser Jr's Playroom against the sneaky
            up and coming 4-1 Isaac, they were hoping for another victory like in Week 1. However, THANdrew's offense
            went nonexistent. Without Andrew at the game, the team lacked any sort of momentum or firepower, going
            down 5-0 after 3 innings, going through both Green Kamek and Waluigi in 2.2 innings on the mound. Justin
            Nascimento once again picked an absolute masterclass, only giving up 8 hits throughout all 7 innings. The only
            THANdrew point this game would come off of a Fire Bro RBI in the 4th, scoring Waluigi. A total of 5 players
            did not record a hit in this game, and a record-low 3 runners would be left on base. Brown Kritter would win
            MVP for Isaac, going 3/3, 2 runs, 1 RBI, and 1 HR. Paratroopa came in for relief for Waluigi, and pitched pretty
            solid, going 3.1 innings and only giving up 3 hits. The big impact for this game is now that Isaac has won 5
            straight games, which is a new record in a single season, and THANdrew loses division lead, sliding to 4-2. THANdrew
            does not play another .500 team for the rest of the regular season, while Isaac still has to play Justave and James.
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
                <div className="mvp">Game MVP: Brown Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Justin Nascimento (3 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Green Kamek (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#FF00FF" }}> Morgan</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>Manager Morgan has had enough of his losing ways, and in dire need to bring his team and his own mojo
            back up, he finally decides to play Diddy Kong in the lineup, his former captain. This game against Trocean
            would also be the first start for Reshiram, and he started off with a bang. Reshiram start the game with a 3
            pitch strikeout of Red Toad, and held his own for 5.2 innings. For the first time since playing Justave, Morgan's
            bats would consistency blazing throughout the entire game. He would go up 7-0 after the 4th innings, which was
            the same exact lead he had over Marge the week prior. Trocean starting to gain momentum, scoring 2 runs in the 4th,
            which sent Morgan into a spiral about choking another 7-0 lead. Luckily in Morgan's case, his offense did not shut down,
            as he would tack on 4 more runs to stretch his lead from 5 to 9 through the next 2 innings. Wario in his home stadium
            played incredibly well, going 3/4, 3 runs, 3 RBIs, 2 Doubles, and 1 HR. Morgan would get much needed revenge on Trocean
            after losing to them in Week 3 by a score of 12-4. Trocean on the other hand would become the first 1-5 in the history
            of PMBL, marking the worst record through 6 games. None of their pitchers lasted for more than 3 innings, and each one
            game up at least 2 runs. Red Pianta was on the one bright spot for Trocean getting 3 RBIs and 1 HR, but that would be it.
            Trocean is looking forward to their matchup against Brendan next week, which some are calling the "Cancun Bowl". </Passage>

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
                <div className="mvp">Game MVP: Wario</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Reshiram (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Red Kamek (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#FF9900" }}> Justave</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>In a shocking turn of events, James is the home team and decided to play at Daisy Cruiser once again.
            Believing that the week prior was a fluke, he was destined to get a win this week and get back on track. His
            team started quick, with Yellow Pianta and Blue Toad both hitting RBI singles in the 1st to get an early 2-0
            lead. With Manager Justin absent from the game with a stress related injury, Manager Dave was in full control.
            Justave would continuously keep chipping away at James, delivering slap hit after slap hit into shallow outfield
            pockets. Despite the 2 runs given up in the 1st, Bob Marley clamped down. To much of the surprise of the league,
            James' team was thoroughly shut down. Justave was up 3-2 in the top of the 6th, and for the second straight inning,
            Bob Marley went 1-2-3 through James' batting order. Justave would score 6 insurance runs in the bottom of the 6th,
            thanks to a Hammer Bro home run and Green Toad and Gritter cleaning up again. Green Toad CONTINUES his hitting streak.
            It has now been 3 straight games he has made base after every single at bat. He is now 23/26, with an .885 batting
            average. The 3rd straight win for Justave and over the alleged best team in the league has really turned some heads.
            Justave now sits atop the division, and will play the 5-1 Isaac next week in a huge matchup. Manager Dave was
            very emotional after the game, giving all the creidt right back to the players. Manager James refused to comment, as
            his team astonishingly tied THANdrew for only 8 hits in the game. </Passage>

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
                <div className="mvp">Game MVP: Hammer Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (3 - 2)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Birdo (3 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#6AA84F" }}> Marge</span></StyledMiniHeader>
            <Passage>A lot of frustration for both of these teams, but this game at Yoshi Park was a very exciting matchup.
            Brendan's pitching woes continued after starting newcomer Blue Pianta on the mound in Week 5, but in Week 6 he
            would be handing the reigns to the other newcomer, Blooper. This would be the 5th different starting pitcher
            (Blue Kamek, Claudius, Diddler, Blue Pianta) he would throw out this year. Blooper would start very well. The
            best pitching start Brendan has had all year, going scoreless through 3 innings. Brendan's bats would also put
            up 4 runs in those 3 innings, getting Boo off the mound after 2 full innings. Contact hit after contact hit was
            getting Brendan's players on base and in scoring position early. However, after Marge's impressive 7-0 comeback
            last week, they quickly tied it up in the 4th. With Blooper finishing with 4.1 IP, 11 Hits, and 3 Runs. Chants
            of Blooper's name were pouring down from the stand and the dugout, and from what it looked like today on the
            mound, Blooper will be staying the starting pitcher for Brendan for the rest of the season. Boomerang Bro would
            get hit with another pitch, the 2nd time he has been hit this season. What is crazier is that he is the only player
            to be hit by a pitch this year. </Passage>

            <Passage>Bowser would extend the lead to 7-4 in the bottom of the 6th off a 2 run shot, his second home run of the
            day. However, in the 7th, things started to get a little scary for Brendan. The pitching staff elected to go
            with Bowser Jr instead of Bowser for the relief pitching role from Blooper. It looked to a be a good choice early
            on, with Blooper making Gold Glove caliber plays at 3rd base to end the 5th and 6th. However, Bowser Jr would
            let up a 2 run home run to Hamburger into left with 1 out, and the team was in panic mode. Marges slap hitting
            suddenly came alive, and Bowser Jr would relinquish 3 hits on the next 4 batters, leaving the bases loaded, up 1,
            with 2 outs for King Boo. 2/4 and an RBI on the day already, and hit would hit a bloop shot, barely being caught
            by Boomerang Bro, to end the game, leaving the bases loaded, and sealing Brendan's 2nd win of the season.</Passage>

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
                <div className="mvp">Game MVP: Bowser</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bowser Jr (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Peach (2 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Wario</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/4, 3 Runs, 3 RBIs, 2 Doubles, 1 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">J-Nasty</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description">
                        (W) 7 IP, 8 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Bowser</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                    <div className="description">
                        3/4, 2 Runs, 5 RBIs, 2 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">J-Nasty</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        0/3
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 7 IP, 8 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Hamburger</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        4/4, with a 2 run home run
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