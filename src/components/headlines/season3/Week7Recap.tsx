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

export default function Week7Recap3() {
    const game1 = {
        away: { name: "Justave", color: "#FF9900", scores: [1, 0, 0, 0, 0, 2, 0], R: 3, H: 15, E: 2, LOB: 8 },
        home: { name: "James", color: "#F1C232", scores: [0, 0, 3, 3, 0, 0, "X"], R: 6, H: 12, E: 2, LOB: 5 },
    };
    const game2 = {
        away: { name: "Isaac", color: "#3586E8", scores: [3, 0, 1, 4, 1, 1, 4], R: 6, H: 25, E: 1, LOB: 9 },
        home: { name: "Trocean", color: "#9900FF", scores: [0, 0, 1, 1, 0, 1, 0], R: 3, H: 11, E: 1, LOB: 5 },
    };
    const game3 = {
        away: { name: "THANdrew", color: "#999999", scores: [0, 2, 0, 0, 2, 7, 5], R: 16, H: 27, E: 1, LOB: 10 },
        home: { name: "Morgan", color: "#FF00FF", scores: [0, 0, 2, 0, 0, 0, 2], R: 4, H: 12, E: 0, LOB: 5 },
    };
    const game4 = {
        away: { name: "Marge", color: "#6AA84F", scores: [1, 5, 0, 1, 0, 2, 0], R: 9, H: 19, E: 0, LOB: 7 },
        home: { name: "Brendan", color: "#CC0000", scores: [2, 0, 0, 6, 0, 0, 0], R: 6, H: 15, E: 2, LOB: 6 },

    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Week 7 Recap</StyledHeader>
            <GenImage src="/headlines/3week7.jpg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — April 2, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Back after spring break, the PMBL season picks back up as the playoff push commences. Some boring
            games, but some interesting stories, as one of the biggest games of the year draws near.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#FF9900" }}> Justave</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>With former manager Daniel "Danny" Dolan in the stands, it looked to be great game for the
            first at Bowsers Castle this game. Jack White would get the start for James' team against King Boo,
            and would quickly give up a run in the first on a sac fly from Hammer Bro in the top of the 1st. King
            Boo would start pretty good for Justave, not allowing any runs until the 3rd inning, before giving up 3 runs,
            with one of those being off an error in the outfield. The new yellow outfield for Justave has some growing
            pains, as they had 2 errors on the day. Mario would enter onto the mound next and do fairly worse, giving
            up another 3 runs in the 4th, making it 6-1 James. Red Koopa batting in 2 RBIs and Bowser Jr's unstoppable
            star hit continued to do numbers for James' squad, as a bases clearing triple for Bowser Jr gave his team
            quite the advantage. Jack White would be taken out in the 5th, only giving up 1 earned run on 8 hits to
            bring in Bowser Jr. Bowser Jr would give up 2 runs at the start of the witching hour, one of those being on
            an error by the outfield, making it 6-3 in favor of James. Boo pitched the last 2 innings for Justave and not
            allowing any runs, but their offense failed to help them out, with both Hammer Bro and Mario failing to get
            a base hit in this game. Despite Fire Bro and Red Kritter not recording hits either, it didn't matter for James,
            as he would go to 6-1 on the season following the 6-3 victory, the best record in PMBL history through 7 games.
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
                <div className="mvp">Game MVP: Bowser Jr</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Jack White (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: King Boo (0 - 2)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Bowser Jr (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#3586E8" }}> Isaac</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>Despite losing 23-12 the first time they played at Wario City this year, Trocean felt determined
            coming off of the Morgan win, and decided to travel back to the city. Isaac would pick back up where his
            offense left off last time against Trocean by scoring 3 runs in the 1st. Trocean's offense heavily struggled
            through the first 2 innings, only getting one hit off of Blue Pianta. Isaac would get another run in the 3rd
            before Trocean would get on the board thanks to Yellow Pianta, making the score 4-1 Isaac. Bowser decided to
            take the game into his own hands, but hitting a grand slam into left center, making it 8-1, and taking Donkey
            Kong off the mound after 8 earned runs and 15 hits through 3 innings. Trocean would score another in the 4th
            making it 8-2, but the offense could not find any sort of rhythm. Light Blue Yoshi would get his first ever
            pitching appearance in the 6th inning, ruining outfield chemistry. While he would only give up 1 run in the 6th,
            he would give up 4 more in the 7th, highlighted by a Saber 2 run home run. This home run would make it 14-3
            in favor of Isaac. Blue Pianta would still be on the mound going into the 7th, but would eventually give out
            after 6.1 innings, giving up 3 earned runs and 11 hits on the day. Bowser would quickly come in and get the
            double play, winning it for Isaac, and bringing his record back above .500. Bowser would win MVP hitting 2 home
            runs and driving in 8 RBIs, which were his first home runs since Week 4.</Passage>
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
                <div className="mvp">Game MVP: Bowser</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Blue Pianta (3 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Donkey Kong (0 - 3)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#999999" }}> THANdrew</span> v.s.
                <span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>A much anticipated matchup in the West Division, as Morgan was 5-0 all-time against THANdrew coming
            into this game. He decided to once again play them at the Daisy Cruiser, and even upped the anti by bringing
            in the Lotus Sutra, in hopes that his "Buddhist" ideas would once again carry him to victory. Unfortunately
            for him, Andrew would also know much about the Lotus Sutra, thus brining the Buddhism Battle to a stalemate.
            The game stayed very even to start. Nothing was scored in the 1st, until THANdrew drove in 2 in the 2nd. Morgan
            would tie up the game in the 3rd, scoring 2 of his own from a Daisy home run. In this game, we saw Peach and Birdo
            strike out each other. This is the first time a player has pitched a strike and struck out batting in the
            same game, and it was to each other. THANdrew would score 2 more, this time off of Peach to go up 4-2 in the 5th,
            and Morgan would leave the bases loaded and not record a run in the 5th. To start the 6th, Andrew's buddhist
            powers overpowered Morgan, as his team would score 7 runs in a row, completely flipping the game. Despite Thomas
            not being here, his favorite player, Bonnie, would end up hitting a grand slam in the 7th, making the score 16-2
            in the blink of an eye. Morgan would score 2 more in the bottom of the 7th off of a Green Toad home run, but
            the team couldn't mount any sort of rally, as THANdrew would win their 4th straight game to go to 5-2. This loss
            by Morgan would clinch James a playoff spot. </Passage>

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
                <div className="mvp">Game MVP: Bonnie</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (4 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Peach (1 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#6AA84F" }}>Marge</span> v.s.
                <span style={{ color: "#CC0000" }}> Brendan</span></StyledMiniHeader>
            <Passage>Morgan was 5-0 against THANdrew coming into this week, and so was Brendan against Marge all time.
            Once again their matchup would be played at Yoshi Park, and the winless Marge would come out early and get a run
            on the board thanks to a solo Kritter home run. Brendan's team would respond in kind thanks to Petey Piranha
            hitting a 2 run homer to left field, giving Brendan the 2-1 lead. Wario would give up a few hits to start the 2nd,
            but then Brendan's kryptonite would strike again, the errors. Bertha would create not 1, but 2 errors at shortstop,
            culminating in a 5 run inning for Marge, 2 of those were not earned by Wario. Wario shockingly would go off the mound
            after 1.2 innings, bringing in Waluigi. Waluigi also would not have that much stamina either, only staying for
            1.1 innings, giving up only 1 run in the 4th, making it 7-2 Marge. Brendan's team would find some offense in the 4th,
            scoring 4 runs thanks to his pitchers Wario and Waluigi. With the score 7-6, and no synergy in left field, Brendan
            was hoping momentum would swing back his way, but King K, hit his 2nd home run of the night in the 6th, making
            it 9-6 Marge. By far King K's best game of the season, Marge joked about how their team was only trying since it
            was April Fools day when the game was played. Green Magikoopa played incredibly well at shortstop, and Piggie on
            the mound pitched very well for 3.1 innings. Despite her earlier errors, Bertha pitched 2 scoreless innings to
            give Brendan a fighting chance, but his offense was incapable of coming back. The game would end 9-6, and Marge
            would snap the losing streak and get their 1st win of the season. Brendan would fall to 4-3, with playoff hopes
            slowly falling, losing 3 of his past 4, looking like a very good candidate for choke of the year.</Passage>

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
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Piggie (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Wario (4 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">King K Rool</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/4, 2 Runs, 5 RBIs, 2 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        Led Marge to first victory of the season
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Blue Pianta</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description">
                        (W) 6.1 IP, 11 Hits, 3 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Bowser</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/5, 3 Runs, 8 RBIs, 2 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        0.2 IP
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Bonnie</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description">
                        4/5, 2 Runs, 5 RBIs, 1 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Bonnie</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>THANdrew</span></div>
                    <div className="description">
                        Bonnie grand slam
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