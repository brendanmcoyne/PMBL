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

export default function Week5Recap() {
    const game1 = {
        away: { name: "Trocean", color: "#9900FF", scores: [0, 2, 0, 0, 1, 0, 0], R: 3, H: 14, E: 0, LOB: 6 },
        home: { name: "Isaac", color: "#3586E8", scores: [0, 1, 0, 7, 2, 0, 0], R: 10, H: 16, E: 0, LOB: 5 },
    };
    const game2 = {
        away: { name: "Brendan", color: "#CC0000", scores: [3, 1, 1, 0, 0, 0, 0], R: 5, H: 17, E: 1, LOB: 11},
        home: { name: "Justave", color: "#FF9900", scores: [1, 4, 1, 7, 1, 1, "X"], R: 15, H: 22, E: 2, LOB: 8 },
    };
    const game3 = {
        away: { name: "James", color: "#F1C232", scores: [1, 0, 2, 1, 0, 1, 0], R: 5, H: 14, E: 0, LOB: 8 },
        home: { name: "THANdrew", color: "#999999", scores: [3, 0, 1, 0, 0, 0, 2], R: 6, H: 14, E: 0, LOB: 5 },
    };
    const game4 = {
        away: { name: "Marge", color: "#6AA84F", scores: [0, 0, 0, 0, 1, 11, 0], R: 12, H: 21, E: 0, LOB: 5 },
        home: { name: "Morgan", color: "#FF00FF", scores: [4, 3, 0, 3, 0, 0, 2], R: 9, H: 14, E: 0, LOB: 2 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Week 5 Recap</StyledHeader>
            <GenImage src="/headlines/week5.webp" alt="Week5"/>
            <ArticleMeta>
                Written by: PMBL News — October 20, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>We've now reached the halfway point in the season, with plenty of story lines being talked about.
            We now have a clear set of front runners and bottom feeders, and the playoffs are slowly coming into view.
            It's time to go over the Week 5 games.
            </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#9900FF" }}> Trocean</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>Trocean has been very public about the fact they will be "Going to Cancun" due to their teams
            record and performance in the managements first season together. Isaac meanwhile believes he could be
            a contender in the World Series, being one of 3 teams with an above .500 record through Week 4. Surprisingly,
            Trocean would be the one to get out to an early start, leading 2-1 through 4 innings thanks to a Dark Bones
            home run. With 2 outs, all Trocean needed was Mario to get out of the inning with 2 runners on base. However,
            Funky Kong and Betty White would execute a perfect POW block, and the landslide began for Trocean. Following
            the 3 run play, Mario would be subbed out for Red Kamek, who would relinquish another 4 runs without recording
            an out. Isaac would finish with 7 runs in the bottom of the 4th. They would tack on 2 more in the bottom of the
            5th before shutting down Troceans offense completely for the final 2 innings of the game thanks to Donkey Kong's
            pitching. Isaac would now win his 4th straight, tying James (4-0) as the longest single season winning streak.
            Trocean drops to 1-4, and the trip to Cancun couldn't come any sooner.</Passage>

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
                <div className="mvp">Game MVP: Funky Kong</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Justin Nascimento (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Mario (1 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>With both teams coming off of big wins, the second matchup of Justave vs Brendan this season looked
            to be a good one at the Cruiser. After the win, Brendan traded away a package to get a heavy hitter, Blue Pianta, in hopes
            to really get his offense going and hopefully get back into the playoff race. Justave, coming off a very
            successful return campaign from Koopa, was looking to assert themselves as a top team. Brendan's pitching woes
            have been a concern for him all season, so he decided to start newcomer Blue Pianta on the mound, the 4th
            different starting pitcher this year, putting Diddler in the outfield. To start the game, the bats were blazing
            for Brendan, starting with 3 runs in the 1st, and Blue Pianta getting a hit at his first at bat with the team.
            Blue Pianta would become the first player to ever play a game for 2 different teams in a season. His pitching
            however was a different story, giving up a home run to one of the best leadoff batters in the league, Green Toad.
            Both offenses traded runs through the first 3 innings, with Justave leading 6-5 through 3 innings. Disaster
            struck in the 4th just like with Trocean, Brendan's defense gave up 7 runs. Luigi came in for the really
            struggling Bob Marley, who only lasted 1.1 innings. Luigi would get 2 pitches away from an immaculate
            inning, throwing 2 strikeouts in a row on 6 pitches to Bowser and Bowser Jr. The final score would be 15-5
            in favor of Justave, with visible frustration from Brendan, as the Daisy Cruiser proved to be unfavorable
            to him with more fielding mishaps once again. Despite Koopa going 0/4, The bats did very well for Justave,
            with Green Toad once again having another amazing day, hitting an amazing 19/22 on the season so far.</Passage>

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
                <div className="mvp">Game MVP: Geek Squad</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Luigi (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Blue Pianta (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#999999" }}> THANdrew</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>One of the most anticipated games of the season, THANdrew was hungry after taking a loss to
            a winless Brendan team. They started quick against James at the Cruiser. Scoring 3 in the first, this would
            be the first time James has trailed since the 3rd inning against Morgan in Week 1. One of those runs would
            come off of Larry Cuc, who looked normal this week, hitting a double to drive in Waluigi. James would answer,
            tying the game at 3-3 in the 3rd, before THANdrew scored another run in the bottom of the same inning. Shockingly,
            Birdo would only pitch 2 innings, the shortest a James starting pitcher has gone this season, getting replace by Zekrom.
                Green Kamek would walk Wiggler, the first time anyone has ever been walked from a ball 4. Waluigi
            would give up 2 runs without getting an out, and would be almost immediately subbed out for Red Kritter. James
            would tie the game in the 4th 4-4 and then take the lead in the 6th 5-4 thanks to Petey waking up from his
            in-game slump. THANdrew defense would get 3 quick outs in the top of the 7th to bring the top of his lineup
            up for the potential final 3 outs of the game. </Passage>

            <Passage>Nose would get a leadoff hit, but then Waluigi would ground into a double play in the bottom of the
            7th, with Red Kritter up to bat. Red Kritter at this point was 0/3 batting, and in line to take the loss as
            the pitcher who gave up the go-ahead run. Red Kritter would silence the critics by hitting a solo home run
            into right, tying to game 5-5. The crowd would erupt with cheers on the Cruiser. Zekrom, who had pitched
            4.2 innings, only giving up 3 hits and striking out Green Kamek, blew the save with Fire Bro now up. Fire Bro
            would proceed to do the exact same, smacking a solo shot to right to win it for THANdrew 6-5, giving James his
            first loss. This snapped James' 8 game winning streak, with the last loss coming on Game 3 of Conference Series
            against Morgan. THANdrew would reclaim to the top playoff spot at 4-1, as the last undefeated team falls. James
            was very silent postgame and refused to be interviewed. Petey and Zekrom were seen at the bar postgame. </Passage>
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
                <div className="mvp">Game MVP: Fire Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Red Kritter (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Zekrom (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#6AA84F" }}> Marge</span> v.s.
                <span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>Both teams 1-3 and in dire need of a win, Morgan made only the 2nd Free Agency move in league
                history, dropping famous golfer John Daly to pick up Reshiram. Morgan also made
                significant fielding swaps, benching fan favorite Antenna to bring in Baby Daisy. This would mark the
                first ever game for both Reshiram and Baby Daisy. Immediately, the changes seemed to be the best decision
                since drafting Petey last year for Morgan, as the bats blazed through the first 2 innings. Boo once again
                was taken out early for Luigi, going only .2 innings and giving up 4 runs. After getting shutout 16-0 the
                previous game by Justave, it looked like much of the same for Marge. Down 7-0 through 4 innings, nothing
                was going their way. In the 5th inning, everything would change, as Marge would finally strike on the
                scoreboard to bring in a run. Daisy would then be pulled in the wake of up and coming terrorist Yoshi after
                4.2 innings, only giving up 1 run. Yoshi would close out the 5th, but no one was ready for the terror of
                the 6th inning.</Passage>

            <Passage>Morgan was visibly and verbally upset that the game had put Yoshi into pitch, and he had every
                reason to be. After Yoshi threw Morgans 4 run lead last week against Isaac, the same terror would commence.
                Yoshi would get 1 out in the 6th, but also give up 5 runs. Consecutive slap hits from Marge would continue
                on every other pitch from Yoshi, dropping into shallow center field most of the time. Morgan was preparing
                to leave right when Wario was put on the mound up 7-6, but the pain did not stop. Marge's team would put up
                6 more runs off of Wario, including a 3 run inside the park home run by Yellow Toad, making the score 12-7.
                No team has ever put up 11 runs in one inning, breaking the record that James did in Week 2 (10). Morgan
                would score 2 runs late but could not come back. Marge had only scored 11 runs in their first 4 games, but
                in their game against Morgan they put up 12 for their 2nd win of the season.
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
                <div className="mvp">Game MVP: Yellow Toad</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Peach (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Wario (0 - 2)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: King Boo (1)</span>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Fire Bro</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/4, 2 Runs, 1 RBI, 1 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        Walk-off home run against 4-0 James
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Luigi</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description">
                        (W) 5.2 IP, 8 Hits, 1 ER, 2 K
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Daisy</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/4, 3 Runs, 2 RBIs, 1 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        4.2 IP, 8 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">J-Nasty</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        2/4, 1 Run, 1 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 4.2 IP, 11 Hits, 3 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Geek Squad</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description">
                        Hitting 3/5 with 2 home runs
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