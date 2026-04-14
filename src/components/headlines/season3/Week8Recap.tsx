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

export default function Week8Recap3() {
    const game1 = {
        away: { name: "Brendan", color: "#CC0000", scores: [2, 5, 1, 1, 2, 0, 3], R: 14, H: 21, E: 2, LOB: 9 },
        home: { name: "James", color: "#F1C232", scores: [2, 1, 0, 0, 7, 0, 1], R: 11, H: 19, E: 0, LOB: 7 },
    };
    const game2 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 0, 0, 1, 3, 0, 4], R: 8, H: 19, E: 0, LOB: 4 },
        home: { name: "Morgan", color: "#FF00FF", scores: [7, 0, 0, 0, 0, 0, 0], R: 7, H: 18, E: 3, LOB: 7 },
    };
    const game3 = {
        away: { name: "THANdrew", color: "#999999", scores: [4, 1, 0, 0, 6, 0, 5], R: 16, H: 19, E: 2, LOB: 1 },
        home: { name: "Trocean", color: "#9900FF", scores: [0, 0, 1, 0, 9, 0, 4], R: 14, H: 21, E: 2, LOB: 9 },
    };
    const game4 = {
        away: { name: "Isaac", color: "#3586E8", scores: [3, 0, 0, 0, 1, 3, 6], R: 13, H: 19, E: 6, LOB: 6 },
        home: { name: "Marge", color: "#6AA84F", scores: [1, 0, 3, 5, 1, 0, 4], R: 14, H: 19, E: 1, LOB: 6 },

    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Week 8 Recap</StyledHeader>
            <GenImage src="/headlines/3week8.jpg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — April 13, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>As the playoffs continue to heat up, Week 8 was one the most exciting games in PMBL history. Every
            game was decided by 3 or less runs, and every game was meaningful going into the 7th inning. Only 2
            weeks left to play!</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>Losing 3 of his last 4, with the last coming off of the winless Marge, Brendan was in free fall. He
                needed to make some changes to his team due to the amount of errors that were happening, so he deicded
                to bring in his beloved player from last year, Blooper, with Bertha out this week. He also decided to
                revamp the batting order, and move Funky Kong to shortstop. Moving Blooper to lead off, Petey and Funky
                would get the scoring started with solo shots to make it 2-0 off of Red Koopa. Red Koopa would then strike
                out Jake to end the inning. James would tie it in the 1st before Brendan's hitting tacked on 5 in the 2nd,
                taking Red Koopa off for James, bringing in Bowser Jr. Blooper would give up another run in the 2nd before
                being taken off for Waluigi. In the 3rd, after 1 out Bowser Jr would shockingly get off of the mound for
                Red Kritter. Red Kritter would quickly give up a run thanks to Blooper, hitting a blooper single to drive
                in Wario. Into the 5th, Brendan would score 2 more runs to make it 11-3 Brendan, the largest deficit James
                has faced by a mile this season. However, for Brendan's sake, all good things must come to an end. After
                the 4 errorless innings and with 2 outs on the board, MLK would star hit and Blooper would error at first,
                advancing the runners. Funky Kong would then error on the next batter which could've ended the inning, but
                James' bats woke up, scoring 7 straight runs, bringing the game back to a 1 run game, 11-10 Brendan, going
                into the Witching Hour. No runs would be scored in the 6th, but in the 7th, Brendan would get some luck.
                After Jack White going 1.2 innings scoreless, he would surrender 3 home runs on 3 straight pitches. Petey,
                Funky, and of course Dixie Kong, would hit back-to-back-to-back solo shot homers, bringing the lead to
                4. This inning would be a game changer for Brendan, as his team would only allow 1 run on a sac fly in the
                7th, to get a crucial 14-11 victory over James, his first since they first played back in Season 1.
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
                <div className="mvp">Game MVP: Petey Piranha</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Blooper (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Red Koopa (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Wario (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#FF00FF" }}> Morgan</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>An intense and hateful rivalry between these two franchises following last years playoff series,
            Morgan wanted to show no mercy quickly. Starting with Danny B on the mound, Danny B quickly went 1-2-3 through
            Justave's first 3 batters. Boo, who has had a wonderful season so far, did not fare the same today. Boo would
            go in and quickly give up 4 runs on 4 hits, and get pulled without getting an out. Mario wouldn't fare much
            better either, giving up 3 earned runs on 3 hits as well in the 1st, giving Morgan a 7-0 lead in the 1st.
            Justave's team would only record 1 hit through the first 3 innings, and absolute defensive masterclass by Morgan
            to begin the game. By the time it had gotten to the 4th inning, Danny B would still be pitching, and King Boo
            would be the 4th pitcher to enter for Justave after Red Kamek went 1.2 innings. Danny B would finally give
            up a run in the 4th to make it 7-1 Justave, but their luck would strike again, as Justave would score 3 more
            runs in the 5th, 2 of which came off of errors, enraging Morgan. Starting in the 4th or 5th inning, Morgan
            began making comments toward the Justave bench, chirping how Dave wasn't making his usual remarks toward the
            plays happening on the field. This sparked something in not only Dave but the team itself, as Dave began to
            taunt Morgan by making these remarks, and the team began to gain traction. Constantly clapping at every play,
            the score would be 7-4 Morgan going into the 7th, with Morgan being unable to score a single run from innings
            2 through 6. In the 7th, Danny B would finally be taken out for Peach, and Peach would implode on the mound,
            giving up 4 runs off of 6 hits and blowing the save and giving Justave their first lead, 8-7. In very similar
            fashion to the game against Marge the season prior, he would be very quick to put on his boots and leave
            shortly after King Boo got the 3 outs. King Boo would end up pitching 4.1 innings, and only give up 5 hits,
            as Justave would get back to .500 at 4-4. This would be Justave's 3rd game this season in which they would
            win off of errors/unearned runs.</Passage>
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
                <div className="mvp">Game MVP: Hammer Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: King Boo (1 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Peach (1 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#999999" }}> THANdrew</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>With their first playoff spot on the line, and the ability to finish with an above .500 record for
            the first time, THANdrew was yearning to win this game. Heading to the jungle, Trocean wasn't ready to get
            eliminated just yet, hoping to pull a win in their final home game. THANdrew would get off to a blazing start,
            big thanks in part to Trocean's outfields ineptitude. Baby DK and Light Blue Yoshi would be major culprits
            into giving up these 4 runs, as they wouldn't run and grab the ball, or be able to properly field. THANdrew
            would get another run in the 2nd, making it 5-0. Trocean would finally record a run in the 3rd, getting a sac
            fly, but with Blue Kamek still on the mound, it was looking incredibly unlikely. It would get so bad for
            Trocean that their captain Donkey Kong would end up giving up a grand slam to Blue Kamek, big thanks to another
            error and a huge bunt by Alfonzo combined with a Boo item from Blue Kamek. Donkey Kong would get pulled after
            THANdrew went up 10-1. However, after Birdo pitched a good 4th inning, only giving up 1 hit and getting a
            strikeout too, Birdo would only record 1 out in the 5th, giving up an absolutely shocking 8 earned runs. Both
            Donkey Kong and Wiggler would score 3 run homers, and would dray the lead to 2 before Birdo ended the game
            only pitching 1.1 innings, giving up 8 earned runs on 9 hits. Alfonzo would then come in and give up another run
            in the 5th, making it 11-10 before finally recording the out. A 9 run inning for Trocean, bringing it back
            within 1 going into the Witching Hour. Nothing would happen in the 6th, but in the 7th, Diddy would give up
            2 runs without recording an out, but then Brown Kritter would give up another 3, making it 16-10 THANdrew. Even
            more defensive ineptitude continued to crush Trocean, large in part to Baby DK. With the final inning that
            could matter for Trocean, their offense put up 4 on Alfonzo, including an errored run, to bring up Boomerang
            Bro with 2 outs on the board, down 2. Donkey Kong could not get it done at the plate. Trocean would leave
            9 stranded compared to THANdrew's 1 today, as THANdrew would clinch the playoffs for the first time ever
            with a 16-14 win, eliminating Trocean. </Passage>

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
                <div className="mvp">Game MVP: Blue Yoshi</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Blue Kamek (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Wiggler (1 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Boomerang Bro (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#3586E8" }}> Isaac</span> v.s.
                <span style={{ color: "#6AA84F" }}>Marge</span></StyledMiniHeader>
            <Passage>Despite getting their first win last week, Marge would be facing heavy competition, playing Isaac
                on his PhD signing day. This would be proved very quickly, as Blue Kritter would immediately hit a solo
                shot to start the game. Isaac would score another 2 runs to make it 3-0 Isaac in the first. King K Rool,
                the start would killed Brendan via his bat last week, would only pitch .2 innings before Luigi would
                sub in. Marge would get one on the board however in the 1st to try and get their offense going. No runs
                would be scored in the 2nd or the top of the 3rd, but King K would launch a nuke to right field on a
                3 run shot to give Marge a 4-3 lead, taking Saber off the mound for Bowser. Isaac's defense would error
                twice this inning, but it would not lead to anything. After another scoreless top of the inning for Isaac,
                Marge and King K would strike again, with him hitting another 2 run homer, and Green Kamek getting a
                2 RBI single. Now leading 9-3, Isaac was able to score a run thanks to a Bowser solo shot. Luigi would
                then be taken out after pitching 4 innings, giving up 1 earned run to the Bowser homer, but also getting
                a Bowser strikout. Marge would score yet another runs thanks to King K's third home run of the day, making
                the score 10-4 Marge. Going into the witching hour down 6, Blue Kritter would come alive again, getting
                his 2nd homer of the day off of Green Kamek, cutting Marge's lead in half to 10-7. Yellow Kamek would enter
                for Isaac in the 6th and pitch a no hit inning, bringing up heavy hitters for Isaac in the 7th. Blue Pianta
                and Blue Toad would get RBI's to tie the game in the 10th, and Green Shy Guy would blow the save to Blue
                Kritter, as he would hit his 3rd home run of the game, a 3 run homer, making it 13-10 Isaac, his first
                time leading since the 3rd inning. Green Shy Guy would immediately be subbed off for Piggie, who would
                only give up 1 hit and record the 2 needed outs. In the bottom of the 7th, Isaac would unexpectedly give
                up errors 5 and 6 on the day, which half were not even on stars, to load the bases for who else but King
                K Rool. He would wind up and hit a walkoff grand slam for Marge to right field, winning it 14-13 in a
                tremendous game. Isaac would set a record for most errors in one game by one team at 6, and King K would
                set a record for most home runs (4) and RBIs (10) in one game by one player. This would be the first
                game ever where a player on both teams would blow a save, as Marge would barely keep their playoffs hopes
                alive.
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
                <div className="mvp">Game MVP: King K Rool</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Piggie (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Yellow Kamek (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">King K Rool</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        4/5, 4 Runs, 10 RBIs, 4 HRs
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">King Boo</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description">
                        (W) 4.1 IP, 5 Hits
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Waluigi</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/4, 2 Runs, 1 RBI, 1 T
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        2.2 IP, 3 Hits, 3 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Piggie</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        2/4, 2 Runs, Recorded the save
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Blue Kamek</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description">
                        Blue Kamek grand slam
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