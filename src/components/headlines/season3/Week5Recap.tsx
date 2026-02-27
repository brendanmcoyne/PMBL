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

export default function Week5Recap3() {
    const game1 = {
        away: { name: "James", color: "#F1C232", scores: [1, 0, 0, 0, 0, 1, 1], R: 3, H: 9, E: 1, LOB: 3 },
        home: { name: "THANdrew", color: "#999999", scores: [2, 0, 0, 2, 0, 0, "X"], R: 4, H: 12, E: 0, LOB: 5 },
    };
    const game2 = {
        away: { name: "Trocean", color: "#9900FF", scores: [3, 0, 0, 0, 0, 4, 0], R: 7, H: 16, E: 0, LOB: 6 },
        home: { name: "Brendan", color: "#CC0000", scores: [0, 2, 7, 0, 5, 0, "X"], R: 14, H: 23, E: 2, LOB: 5 },
    };
    const game3 = {
        away: { name: "Marge", color: "#6AA84F", scores: [1, 0, 2, 0, 0, 2, 0], R: 5, H: 12, E: 1, LOB: 4 },
        home: { name: "Justave", color: "#FF9900", scores: [0, 1, 0, 3, 3, 0, "X"], R: 7, H: 16, E: 1, LOB: 4 },
    };
    const game4 = {
        away: { name: "Isaac", color: "#3586E8", scores: [0, 0, 0, 0, 1, 1, 2], R: 4, H: 14, E: 2, LOB: 6 },
        home: { name: "Morgan", color: "#FF00FF", scores: [0, 1, 2, 2, 3, 0, "X"], R: 8, H: 21, E: 0, LOB: 10 },

    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Week 5 Recap</StyledHeader>
            <GenImage src="/headlines/3week5.jpeg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — February 26, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Halfway through the season in a flash, with some crazy storylines to go along with it. Where
            does your favorite team stack up after the 1st half of the season?</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#999999" }}> THANdrew</span></StyledMiniHeader>
            <Passage>In a very THANdrew way, their first 4 games of the season have each been decided by less than 3 runs
            each. Close battles, tough losses, and small margin victories. Once again, James comes into his matchup against
            THANdrew once again at 4-0, looking to make history as the first team to ever start 5-0. He would start off
            strong thanks to a Red Kritter RBI, bringing in Bowser Jr off of Birdo. THANdrew would respond quickly by
            bringing in 2 runs of their own to take the lead 2-1 after the 1st. The 2nd and 3rd innings would be scoreless
            until the 4th, where THANdrew would get 2 more runs off of James' best pitcher, Bowser Jr. These plays would
            be set up mostly thanks to Diddler and Blue Kamek, who combined went 5/6, with 2 runs and a double. James
            was having no luck finding any offense going into the 6th, but would eventually get some action thanks to
            a Fire Bro solo home run, making the score 4-2 THANdrew. With hits and offense coming very scarcely this game,
            Birdo would survive on the mound for THANdrew into the 7th inning. Red Toad would come onto the mound for
            James in the 6th and not give up a single hit to keep the race tight. Into the 7th, Jack White would score
            a 3rd run for James off of a sacrifice fly, bringing in Red Toad, and with the THANdrew management calling
            and crying for Birdo to use a star pitch with 2 outs on the board, she would. She struck out Bowser Jr,
            and James was undefeated no more. THANdrew, for the second year in a row, would beat James in Week 5 at the
            Daisy Cruiser by 1 run to give James his first loss of the season. Diddler shockingly won MVP in this game,
            going 3/3 and scoring a run in a game that only had 21 combined hits between both teams. This season, there
            has only been 2 complete games thrown, and both of them have been by Birdo.</Passage>

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

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#9900FF" }}> Trocean</span> v.s.
                <span style={{ color: "#CC0000" }}> Brendan</span></StyledMiniHeader>
            <Passage>On a 3 game losing streak, Trocean was once again active on the trade block. For their 4th trade
            of the season, they brought in Yellow Pianta, who was benched on Marge's winless squad, and traded away
            Larry Cuc, Green Paratroopa, and $10, the first monetary trade made in PMBL history. Also, even with the passing
            of Gramps, Gramms had decided that she would still play for Trocean even though she is grieving. Coming off a 7-run
            blown lead against Justave, Brendan was really hopping for a bounce back game before considering any moves.
            With Wario on the mound, he felt confident. Wario would start the game by giving up a 2 run homer to Brown
            Kritter in the 1st for Trocean, causing concern for Brendan. His offense on the other hand would get on the
            board in the 2nd with a pair of runs, and then go on a spree in the 3rd by driving in 7 more runs. Petey
            Piranha added another home run to his heavy hitting season, and Donkey Kong was taken off the mound after
            2.2 innings for Diddy Kong. Wario would lock down on the mound after the 1st, going 4.1 innings, and giving
            up 3 earned runs on 9 hits. Wario was also able to avenge himself against Brown Kritter by recording a strikeout
            at his 2nd at bat. Brendan's bats would continue the scoring onslaught by scoring 5 more in the bottom of
            the 5th, making the score 14-3 in his favor, as the Trocean management was morally defeated. Hyped up rookie
            Sherpa went onto the mound after Diddy Kong, and he would not have a good day. He gave up 5 earned runs on 5 hits
            after 1.2 innings. A very, very rough day for Sherpa, as he was also the only player on either team that did
            not record a hit, going 0/3. Brendan would end up winning the game 14-7 despite some momentum from Trocean in
            the 6th to go to 4-1, and Trocean would go to 1-4. Despite the loss, Trocean's new acquisition Yellow Pianta
            went a perfect 3/3, 2 RBIs, and scored a run.</Passage>

            <Passage>Halfway through the season, with their playoff hopes looking dire, Trocean decided it was time for
            a split. The day after the game, they made their 5th trade of the season, and 3rd with Manager Brendan, this
            time dealing away their prized position Sherpa in exchange for Light Blue Yoshi (Libloshi). With his time
            at the Trocean franchise, he batted .267 across 4 games (missed one due to illness), getting 2 RBIs and
            one of 4 stolen bases on the year in the league. Manager Brendan is unsure if he will get any playing time
            this year.</Passage>

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

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#6AA84F" }}>Marge</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>Even though they came back and won last week against Brendan, Justave isn't satisfied, quoted by
            manager Justin "We highkey fraudulent" before their game against Marge. Heading back to Wario City, Justave
            looked to gain momentum and get above .500 for the first time this season. Marge on the other hand just
            doesn't want to be winless. The ultimate revenge game, with Luigi, Green Kritter, Green Shy Guy, Geek Squad,
            and Bob Marley all on Justave's championship team last year, and King Boo, Boo, and Hamburger (not playing)
            all on Marge's team last year. Last years Pitcher of the Year Bob Marley would get the start against his
            former team, while King Boo would be on the mound for Justave. Luigi would lead off and get a hit with Manager
            Dave rooting for him, embarrassing Justin and the credibility of the Justave franchise. He would immediately
            steal 2nd and then score a run thanks to a Green Kritter RBI to give Marge the early lead. Bottom of the
            2nd, World Series MVP Hammer Bro would hit a solo shot off of Bob Marley for Justave to tie it 1-1. Marge
            would counter in the 3rd, with a 2 run homer from Green Kritter to take the lead back, taking King Boo off
            the mound for Mario. In the 4th inning, Bob Marley would surprisingly be taken off the mound after 3 full
            innings, after only giving up 1 run for Luigi. Luigi would proceed to give the lead to Justave, giving up 3 runs
            off of a King Boo home run. Luigi would only pitch the 4th after this before Green Kamek would take the mound
            in the 5th, and he would give up 2 more off of another King Boo 2 RBI hit. King K Rool would take the mound next
            and give up a run to Boo on the next hit before closing out the 5th. Justave would have a 7-3 lead going into
            the Witching Hour. Thanks to a King K Rool solo shot and a Green Kamek double, Marge would cut the lead in half
            to make it 7-5 Justave. King K Rool wouldn't give up any runs in the bottom of the 6th to go into the 7th.
            In the 7th, old Marge pitcher Boo would go in for Mario in hopes of getting the save, and he would. Getting 3
            straight outs to give Justave their 2nd straight win at Wario City, as Marge falls to 0-5 on the first half
            of the season. Luigi would get the loss as a pitcher and not record a hit after his 1st at-bat.</Passage>

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

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#3586E8" }}> Isaac</span> v.s.
                <span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>Even though the game was late, the fans showed up and did not disappoint. Despite his previous
            hatred toward the cruiser, Morgan decided to head there against Isaac. The funeral for now deceased player
            Gramps had been pushed back for a week due to grieving, so the game would be played. Danny B would replace
            him in the lineup with Milk being called up from Triple-A. Dry Bones would be back on the mound after his
            Week 3 start, and would start very strong, and not allow any runs through the 1st and 2nd. Morgan would get
            the scoring started in the 2nd off of a Dry Bones RBI. Morgan would get 2 more runs in the 3rd rather quickly,
            taking Blue Pianta off the mound after giving up 2 runs on 7 hits through 2 innings for Bowser, who gave up
            the 3rd run. Dry Bones would be taken out in the 4th, but had a great start, going 3.2 innings, and only giving
            up 4 hits. He also recorded a strikeout against former president Barry. Daisy on her home turf would get a
            2 run homer in the 4th to give Morgan a 5-0 lead, a shock to some of the fans in the stand. Isaac was enraged
            and in disbelief during this game, as Morgan kept an incredibly buddhist and zen vibe to his coaching during
            this stretch. Isaac would finally get on the board thanks to a Blue Pianta solo shot in the 5th, but Peach
            would strike out Yellow Kamek to end the inning, ending a slight momentum shift. This would be the first game
            in PMBL history where multiple pitchers on the same team would record a strikeout. Bowser would give momentum
            straight back to Morgan has he scored 3 more runs, with 2 of them coming off of a Red Shy Guy 2 RBI double.
            He would be taken off the mound once again after 2.2 innings, giving up 6 earned runs off of 12 hits. Isaac
            would score a 2nd run in the 6th thanks to Blue Noki, and another 2 off of a Blue Kritter home run in the 7th,
            but Daisy would come in to pitch, and with home field advantage and the team grieving over the passing of Gramps
            they closed it out, giving Morgan his 3rd straight win with an 8-4 victory, and giving him division lead halfway
            through the season.</Passage>
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