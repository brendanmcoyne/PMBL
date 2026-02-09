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

export default function Week2Recap3() {
    const game1 = {
        away: { name: "Brendan", color: "#CC0000", scores: [0, 6, 4, 0, 0, 0, 11], R: 21, H: 35, E: 3, LOB: 10 },
        home: { name: "Morgan", color: "#FF00FF", scores: [0, 4, 2, 0, 0, 4, 1], R: 11, H: 21, E: 0, LOB: 9 },
    };
    const game2 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 5, 0, 0, 4, 2, 0], R: 11, H: 20, E: 0, LOB: 5 },
        home: { name: "Trocean", color: "#9900FF", scores: [0, 0, 4, 0, 0, 3, 2], R: 9, H: 22, E: 1, LOB: 9 },
    };
    const game3 = {
        away: { name: "THANdrew", color: "#999999", scores: [3, 0, 4, 2, 0, 3, 0], R: 12, H: 23, E: 0, LOB: 10 },
        home: { name: "Isaac", color: "#3586E8", scores: [3, 1, 1, 1, 0, 3, 2], R: 11, H: 21, E: 2, LOB: 5 },
    };
    const game4 = {
        away: { name: "Marge", color: "#6AA84F", scores: [0, 3, 0, 1, 0, 0, 2], R: 6, H: 13, E: 0, LOB: 5 },
        home: { name: "James", color: "#F1C232", scores: [1, 0, 0, 0, 3, 4, "X"], R: 8, H: 17, E: 0, LOB: 6 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Week 2 Recap</StyledHeader>
            <GenImage src="/headlines/3week2.jpg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — February 8, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>This week was arguably one of the most exciting weeks the PMBL has ever seen. Every game was
            extremely close until the end, and the fans went through multiple heart attacks during the 4-game
            stretch. </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#FF00FF" }}>Morgan</span></StyledMiniHeader>
            <Passage>Brendan speculated very early into the PMBL season that he would lose his matchup against Morgan
            because he claims, "Morgan always wins Week 2". Morgan would dismantle his fan favorite outfield to put
            his most hated team member Gramps on the mound to start. Gramps would continue to give Morgan more pain by
            letting up 5 runs in the 2nd before being taken out. Morgans hitting would get into a groove in the bottom
            of the 2nd, putting up 4 runs to bring the score to 6-4 Brendan. Peach would pitch one inning before matching
            the amount of earned runs Gramps gave up, making the score 10-4 Brendan after the top of the 3rd. Morgan's team
            would once again respond in kind by scoring 2 to make it 10-6. During this time, fans were very confused on
            whether to leave or stay. Morgan, known fan ambassador, was worried about their viewing pleasure. Morgan's team
            would tie it up in the bottom of the 6th to make it 10-10. Brendan, now sweating after blowing a 6-run lead, had
            the top of his lineup for the start of the 7th, and with momentum not on his side, his team shockingly proceeds
            to drop 11 runs in the top of the 7th to reach 21 runs. Morgan was enraged. Mostly in part due to Red Yoshis
            ineptitude at center field, Morgan's team failed to jump for multiple home runs in the 7th. Both Red Yoshi
            and Dry Bones would pitch and not record an out in the 7th as well, and Morgan's team would become the 2nd
            team all time to have more than 5 pitchers. Red Shy Guy would go into pitch and end the inning, and Morgan's
            team would score 1 before the end of the game to make the final score 21-11. This would be the first time
            that Morgan would not win his Week 2 matchup. Petey Piranha would have a league record 9 RBIs and 3 HRs in
            this game.</Passage>

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
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Wario (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Daisy (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#FF9900" }}> Justave</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>Despite numerous cries that they will be trading everyone, Justave did not make any changes to their
            roster after their 17-1 loss. They would start reigning pitcher of the year Bob Marley on the mound, hoping
            for his magic from last year. Trocean would get Tiny Kong back from her injury and start King Boo on the mound,
            who would quickly make work of Justave's first 3 batters, and Trocean would leave the bases loaded after 1.
            King Boo would give up his first earned run, and then Sherpa, the hyped up rookie, would proceed to drop the
            ball in the outfield to bring in 2 more runs for Justave, pulling King Boo off the mound. Justave would score
            2 more with the captain DK pitching, and get a 5-0 lead. Trocean would start to find some motion the inner
            after, scoring 4 to bring their deficit down to 1. Sherpa would do his part to bring in one run on his only
            hit of the night. Going into the 5th, Justave would score 4 in the 5th and 2 in the 6th to go up 7, big in
            part to Baby Daisy getting her 2nd & 3rd sacrifice flies of the game. Tarzan would come in to pitch for Trocean
            and go flawless. In the bottom of the 6th, Tiny Kong would prove her worth with an inside the park home run,
            driving in 3 runs to make it 11-7 in favor of Justave. Then, in the bottom of the 7th, Mario would relenquish
            2 more runs to make in 11-9, and then finally get the final out to win it for Justave 11-9. Bob Marley would
            only pitch 2.1 innings, but he would get his first win of the season, giving up 3 earned runs on 7 hits. Baby
            Daisy shockingly won MVP for the game, despite not recording a single hit. She went 0/3, scoring a run, and
            had 3 RBIs.</Passage>

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
                <div className="mvp">Game MVP: Baby Daisy</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: King Boo (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Mario (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#999999" }}>THANdrew</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>THANdrew coming off a one point loss at Daisy Cruiser in Week 1 decided to take their talents back
            to the Cruiser despite only scoring 3 runs. Against a team like Isaac who scored 17 runs last week, other
            manager thought this would be a very risky move. Isaac very selfishly put himself, Cascade, on the mound
            to start for Week 2. To the shock of the fans, THANdrew's offense would start really quick, with their
            first 6 batters all recording a hit, going up 3-0 and tying the number of runs he scored last week. Isaac would
            respond also rather quickly, with Bowser getting a solo shot on the first at bat, and Blue Kritter getting 2
            more. Blue Kamek would get off the mound after 0.2 innings in favor for Birdo. Isaac would tack on another
            run in the 2nd to take the lead 4-3. When it looked like his offense would blow past THANdrew, Birdo and
            company got the offense going, scoring another 4 runs in the 3rd and 2 more in the 4th, taking a 9-6 lead
            after the 4th inning. In the 4th, both runs were off of the Abu Patel 2 run homer right to right field. Bowser
            had a very poor pitching performance, only pitching 1.2 innings, and giving up 6 earned runs on 8 hits. THANdrew
            would score another 3 runs in the 6th to go up 12-6. Purple Toads 3 RBIs and Abu Patels 4 RBIs lead the charge
            at the first 2 spots in the batting lineup. Isaac's team would score 3 more, mostly in part to Bowser's 3rd
            home run of the game. Going into the 7th, THANdrew wouldn't be able to score in the top part, but in the bottom
            of the 7th, things got spicy. Isaac would score 2 more runs to make it 12-11, before Birdo would get pulled.
            Abu Patel would go onto the mound with a runner on 2nd for Blue Kritter. He would hit a shot high up into
            center field, right where Blue Yoshi was, and he would bobble the ball and then catch it. The fans were yelling
            and shouting when it happened. THANdrew barely wins 12-11, and almost lost the game on a bobbled ball, as get
            a huge win against their division rival. </Passage>
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
                <div className="mvp">Game MVP: Purple Toad</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (1 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bowser (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Abu Patel (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#6AA84F" }}>Marge</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>After an incredibly intense and exciting tripleheader, James and Marge would play their game the
                day after. Jack White would get his 2nd ever start on the mound against Geek Squad and his 1st start.
                James would get on the scoring 1st with a Fire Bro solo shot in the 1st, but then Marge would score 3
                runs in the 2nd to go up 3-1. Both Gry Guy and Green Kamek would homer in the 2nd, with Green Kamek
                doing an incredibly questionable hand gesture that many teams in the league are asking the higher-ups to
                investigate. Marge would get another run in the 4th to make it 4-1. The absolutely insanity about this
                was that King K Rool hit an RBI triple, one of the slowest players in the league is able to get to 3rd
                in one run. In the bottom of the 5th, Luigi would quickly give up 2 runs to James before being taken out,
                and then Green Kamek would give up a 3rd to tie the game for James 4-4. In the 6th, we would get our first
                ever Pianta vs Pianta pitching matchup, with Red Pianta representing James, and Yellow Pianta representing
                Marge. Last year, Yellow Pianta would blow a save against Isaac in the jungle. This year, Yellow Pianta
                would blow a game to his former team, also in the jungle. Yellow Pianta would give up 4 runs on 4 hits,
                to make the score 8-4 James. Marge would score 2 in the 7th, but the offense wouldn't be able to
                accomplish the comeback, as James would win 8-6. Red Pianta would get the win and Yellow Pianta would get
                the loss, as James goes to 2-0 and Marge goes to 0-2.

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
                <div className="mvp">Game MVP: Fire Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Red Pianta (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Yellow Pianta (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Petey Piranha</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                    <div className="description">
                        5/6, 4 Runs, 9 RBIs, 3 HRs
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        (W) 6 IP, 16 Hits, 8 ER
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (No one pitched good)
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Bowser Jr</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        2/4, 2 Runs, 2 RBIs
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 2.2 IP, 4 Hits, 1 ER, 1 K
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Tarzan</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>Trocean</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/4, 2 Runs
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        1.2 IP
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Baby Luigi</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description">
                        3/3, 2 Runs, 2 RBIs despite a 2-stat in hitting
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