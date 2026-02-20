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

export default function Week3Recap3() {
    const game1 = {
        away: { name: "James", color: "#F1C232", scores: [1, 2, 0, 0, 6, 0, 2], R: 11, H: 24, E: 2, LOB: 9 },
        home: { name: "Justave", color: "#FF9900", scores: [2, 1, 1, 2, 1, 0, 0], R: 7, H: 13, E: 0, LOB: 6 },
    };
    const game2 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [2, 0, 0, 0, 3, 1, 0, 2], R: 8, H: 15, E: 1, LOB: 8 },
        home: { name: "THANdrew", color: "#999999", scores: [1, 1, 3, 0, 0, 0, 1, 1], R: 7, H: 19, E: 3, LOB: 6 },
    };
    const game3 = {
        away: { name: "Trocean", color: "#9900FF", scores: [1, 0, 1, 6, 0, 0, 4], R: 12, H: 21, E: 2, LOB: 6 },
        home: { name: "Isaac", color: "#3586E8", scores: [1, 9, 3, 10, 0, 0, "X"], R: 23, H: 31, E: 2, LOB: 4 },
    };
    const game4 = {
        away: { name: "Brendan", color: "#CC0000", scores: [1, 2, 6, 5, 0, 1, 3], R: 18, H: 26, E: 4, LOB: 8 },
        home: { name: "Marge", color: "#6AA84F", scores: [5, 0, 0, 2, 1, 2, 0], R: 10, H: 18, E: 2, LOB: 5 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Week 3 Recap</StyledHeader>
            <GenImage src="/headlines/3week3.jpg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — February 19, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Coming off an incredibly entertaining Week 2, Week 3 saw much less drama, but a lot more scoring.
            This year, scoring and errors have gone way up, with defense being left by the wayside.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>A rematch of last years World Series was set to take place in Yoshi Park, with James' favorite mii from
            last year Zekrom going up against rookie Kaguya in her second start. FIre Bro would get the scoring started right
            away with a solo shot in the 1st, with his brother Hammer Bro responding, getting a 2 run single for Justave to take
            the lead 2-1. Both teams would be tied up at 3 by the end of the 2nd. Kaguya would get off the mound only after
            1.2 IP, bringing up Yoshi to the mound. In the 3rd and 4th innings, this is where James' defense would break down.
            Giving up not 1, but 2 errors. Giving Justave a 3 run lead by the end of the 4th, 6-3. Then in the 5th, led by
            Bowser Jr and Red Kritter, James scored 6. Yoshi was scoreless on the mound until he let up 2, and then Mario came
            onto the mound to give up 4 more, despite already having 2 outs on the board, giving James a 9-6 lead. During this
            inning, multiple cries rained from the Justave dugout about unfair calls going against them, asking for the
            so-called "refs" to make better calls. Manager Morgan later explained the Manager Dave that there are no refs
            in baseball. One more run for Justave and two more runs for James would end the game 11-7. MLK would pitch
            2 shutout innings to end it for James, only giving up 1 hit. James would start 3-0 for the 2nd straight season,
            with Justave starting 1-2 for the 3rd consecutive season. </Passage>

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
                <div className="mvp">Game MVP: Red Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bowser Jr (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Mario (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#FF00FF" }}>Morgan</span> v.s.
                <span style={{ color: "#999999" }}>THANdrew</span></StyledMiniHeader>
            <Passage>With the 0-2 start, Morgan decided to mix up his pitching rotation by starting Dry Bones on the mound
            against THANdrew at the Daisy Cruiser. Two teams not super known for their hitting were set to take place at
            the stadium with the shortest outfield. Morgan would start the scoring quick however, driving in 2 off his
            first 3 batters. Dry Bones would record a strikeout off of Abu Patel in the first inning, but then THANdrew
            would score 1 in the 1st and another in the 2nd to make it 2-2. Dry Bones would be taken off the mound after
            surrendering the lead on an error. Daisy would give up 2 more runs to make the score 5-2 in favor of THANdrew.
            Nothing would happen in the 4th, but in the 5th, Gramps, who has been nothing but a thorn in Morgan's side,
            hit a 3-run homer to tie the game at 5. This was right around the time that Manager Thomas announced that
            he would choose to have 2 wives if able, so they could be friends. Back to the game, Morgan would grab the
            lead off of another error from Purple Toad on 3rd to give his team the 6-5 lead. He would carry this lead into
            the bottom of the 7th, up by 1 with his first win of the season on the line. After recording 1 out, Daisy would
            blow the save by giving up an RBI to Purple Toad, the man who costed THANdrew the lead off the error previously.
            Morgan was enraged that the game was going to extras, but lucky for him, Peach would hit a 2-RBI double to left
            center in the top of the 8th off of Abu Patel. THANdrew would quickly get runners in scoring position, and even
            score a run thanks to a Blue Yoshi sac-fly. With Birdo, who was 0/3 up to bat, she would bunt with 2 outs on
            the board, in which Green Toad from the catcher position would use an excellent power throw thanks to Peach
            synergy, and get her out at 1st, effectively ending the losing streak for Morgan, and getting him his first
            win.</Passage>

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
                <div className="mvp">Game MVP: Peach, Gramps, Shy Guy</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Peach (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Abu Patel (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#9900FF" }}> Trocean</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>Both teams coming off of close losses the week prior, they look to bounce back to make it back
            to 2-1. Heading to Wario City, Blue Pianta would get the starting nod from Isaac, while captain DK
            would be on the mound once again for Trocean. Things started civil, with a 1-1 tie going into the 2nd. Trocean
            didn't score any runs in the top of the inning, but Isaac would lay down the hammer in the bottom. Quickly
            dismantling Donkey and Diddy as their #1 and #2 pitchers, Isaac would score 9 in the bottom of the 2nd, making
            it 10-1. Trocean would score another run in the 3rd off of Bowser to make the lead 8 before Isaac would put
            3 more up on the scoreboard to increase the scoring to 13-2. At this point, Trocean was down to their 3rd
            pitcher by the 3rd inning, which was King Boo. Trocean started to mount a comeback, putting up 6 on Bowser
            in the 4th to cut the lead from 11 to 5. However, disaster would strike again, as Isaac's bats would score
            another 10 runs in the bottom of the 4th, making it 23-8, tying the record for most runs scored by one team
            in one game. Trocean would go through 4 different pitchers this inning, King Boo, Monty Mole, Wiggler, and
            Tiny Kong. King Boo got the first 2 outs of the inning, and the teams pitching staff didn't record another
            one until Tiny was up to pitch. At the end of the game, it got so dire for Trocean that they became the
            first team to ever field 7 pitchers, with Baby DK coming in, and impressively not allowing a single hit
            in his full inning of pitching. 4 more runs would be scored for Trocean in the 7th to end it 23-12, the 2nd
            highest scoring game in PMBL history. </Passage>
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
                <div className="mvp">Game MVP: Blue Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Blue Pianta (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Donkey Kong (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#6AA84F" }}>Marge</span></StyledMiniHeader>
            <Passage>A 2-0 versus 0-2 matchup, Marge chose to take Brendan to their favorite stadium, Yoshi Park.
            With haste, Petey would send the ball flying out of the park on his first pitch seen, making it 1-0.
            However for him, he began giving up errors rather quickly, which invoked a 5-run inning for Marge in the
            1st. Panic time didn't hit Brendan's team quite yet, as they swiftly scored 2 in the 2nd, 6 in the 3rd,
            and 5 in the 4th to make it a 14-5 lead. The errors also started to pile up for Marge, as their team recorded
            2 errors during this 3 inning session. Luigi would quickly head off the mound in the 3rd after only 2.1 IP,
            and Green Kamek would not be able to record an out in the 3rd before the newly traded Bob Marley took center
            stage. He also had an off day on his new team, going 1.1 IP, giving up 3 earned runs on 6 hits. Green Kritter
            would take the mound next for Marge in the 4th, and gave up 4 runs of his own. Marge would start to climb
            back after getting Wario off the mound later that inning, scoring 2 off of Waluigi in the bottom of the
            4th, and a 3rd in the bottom of the 5th. Again, Petey Piranha would miss a catch on a star hit, his 3rd
            error of the game. He would commit a 4th error the inning after, scoring a run and making Brendan's team the
            first team to error 4 times in one game. Up 15-10 in the 7th, Brendan's bats would tack on 3 more insurance
            runs against rookie Miss Jones before Baby Peach got all 3 outs to win Brendan the game 18-10. Brendan would
            become the 4th team to ever start 3-0 (THANdrew, James twice), and Marge would be the 3rd team to ever
            start 0-3 (Christach, Brendan).

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
                <div className="mvp">Game MVP: Petey Piranha</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Wario (3 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bob Marley (1 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Blue Pianta</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/5, 1 Run, 6 RBIs, 1 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 2.2 IP, 6 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        5.1 IP, 10 Hits, 5 ER, 1 K
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (No one pitched good)
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Waluigi</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/5, 3 Runs, 4 RBIs
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        2 IP, 5 Hits, 3 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Saber</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description">
                        4/5, 3 Runs, 1 RBI
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Gramps</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description">
                        3 run home run to tie the game
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