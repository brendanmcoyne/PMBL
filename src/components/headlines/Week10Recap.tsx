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

export default function Week10Recap() {
    const game1 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 0, 4, 0, 2, 6, 4], R: 16, H: 21, E: 0, LOB: 6 },
        home: { name: "Trocean", color: "#9900FF", scores: [0, 0, 0, 3, 0, 0, 1], R: 4, H: 10, E: 0, LOB: 3 },
    };
    const game2 = {
        away: { name: "Isaac", color: "#3586E8", scores: [3, 2, 0, 0, 0, 2, 1], R: 8, H: 20, E: 0, LOB: 9 },
        home: { name: "Morgan", color: "#FF00FF", scores: [3, 0, 0, 0, 0, 1, 1], R: 5, H: 15, E: 1, LOB: 5 },
    }
    const game3 = {
        away: { name: "James", color: "#F1C232", scores: [1, 0, 0, 1, 0, 0, 2], R: 4, H: 16, E: 0, LOB: 7 },
        home: { name: "Brendan", color: "#CC0000", scores: [0, 3, 2, 2, 0, 1, "X"], R: 8, H: 19, E: 1, LOB: 5 },
    };
    const game4 = {
        away: { name: "Marge", color: "#6AA84F", scores: [0, 0, 0, 0, 1, 0, 0], R: 1, H: 6, E: 0, LOB: 1 },
        home: { name: "THANdrew", color: "#999999", scores: [3, 0, 0, 0, 3, 0, "X"], R: 6, H: 14, E: 0, LOB: 5 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Week 9 Recap</StyledHeader>
            <GenImage src="/headlines/week9.jpg" alt="Week9"/>
            <ArticleMeta>
                Written by: PMBL News — November 23, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>We are now one week away from the playoffs, and there is a lot on the line. Playoff spots, division
                titles, and embarrassing regular season collapses are all on the line for some teams.
            </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#9900FF" }}> Trocean</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>After their embarrassing loss last week against Marge, Justave was prepared to come back with a vengeance.
                Their managerial staff decided to go with the "silent treatment" for this game, not saying a single word
                or expressing any sort of emotion throughout the entire game. This would be met by boos from the fans
                and other managers, who thought it created a more boring and lifeless vibe to the game and their team. The
                pitching duel between Bob Marley and MLK was going steadily into the 5th inning, where the score was only
                4-3 in favor of Justave. MLK would give up 2 more in the 5th before being subbed out for Mario, who
                would close out the inning with Justave up 6-3. Once in the 6th inning, Justaves batters would finally come
                alive on the cruiser, destroying Mario as a pitcher. Justaves bats would go on to score 10 runs across the
                6th and the 7th, with Green Kritter doing most of the heavy work, knocking down 6 RBIs. Despite all the
                storylines about the Koopa and Green Shy Guy combo together, Koopa went 0/4. The 2nd game in a row where
                Koopa would not record a hit raised a lot of concerns from his team about his playing ability. In wake
                of another terrible outing for Trocean's team, Kimmy would hit a home run in the 7th to boost morale. The
                score would end 16-4, and Justave would clinch the 2nd playoff spot this season, becoming the first team
                to make consecutive playoffs.
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
                <div className="mvp">Game MVP: Green Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (4 - 3)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: MLK (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#3586E8" }}> Isaac</span> v.s.
                <span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>With Morgan on a hot streak and the division title on the line, another game between Mii pitchers
                took center stage at Mario Stadium. The biggest storyline of this game was that Betty White would not be
                playing due to injury, therefore Triangle would be making her PMBL debut. Runs would start fast, with
                Isaac scoring 3 in the top of the 1st, and Morgan scoring 3 in the bottom. Fans chirped King K Rool while
                he was up to bat, saying he was going to ground out. King K then hit a 3 run shot to silence the critics.
                Diddy Kong would be in the lineup for Morgan today, playing against the rest of the monkeys. Claims about
                collusion and throwing for his friends were floated throughout the game, and many people definitely
                considered it when Diddy struck out at his first at bat against Justin. Scoring would go quiet until the
                6th inning, still leading 5-3, Isaac would score 2 more runs, thanks in part to Funky Kongs 2nd home run
                of the day. Morgan would then score a run in the bottom of the 6th to bring it back within 3, this time
                from a Wario RBI. In the 7th inning, Isaac's team would score one more run to make it 8-4, ending Wario's
                time on the mound, giving up 3 runs on 9 hits. In the bottom of the 7th, Isaacs infield would error to put
                Baby Daisy on base, and Baby Mario would slap hit to bring her home. However, Donkey Kong would be able
                to close it out, sealing the West Division title for Isaac. Despite Morgan being 4-5, this game didn't
                matter in terms of his chances to make the playoffs. The only thing that matters is his Week 10 game
                against THANdrew.


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
                <div className="mvp">Game MVP: Funky Kong</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Justin Nascimento (4 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Reshiram (2 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#CC0000" }}> Brendan</span></StyledMiniHeader>
            <Passage>Both teams coming off of close losses the week prior, with James choking a 7-0 lead, he needs a
                win in order to claim a playoff spot, and Brendan needs a win to stay alive. Petey Piranha would get
                the start on the mound today after his 3.2 inning performance the week prior impressed James. Today he
                would only go .2 innings, and Blones would quickly knock down an RBI to mkae it 1-0 Brendan. Birdo would
                then come in and pitch like the All-Star pitcher she has been this year, going 5 innings, and giving up
                1 earned run on 7 hits, with a strikeout on Barry. Blooper had an off day, giving up 4 runs on 9 hits
                through 2.1 innings. The weakest part of the Brendan team in this game was their fielding, giving up
                unnecessary runs due to inept fielding decisions. The worst part for Brendan was his teams base running,
                which locked itself into a triple play not once but twice during this game. James' bats were back to normal
                after their brief dry spell, even though this would be the only game so far this season that his bats would
                not record a home run. Despite scoring 2 in the top of the 7th, Brendan's team did not have enough, giving
                James the 8-4 victory, knocking Brendan out of the playoff race. James would clinch the 3rd playoff spot
                with a record of 6-3, with a large division clinching game next week against Justave. Birdo won MVP
                based on her great pitching day and her 3/4 and 1 RBI batting.
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
                <div className="mvp">Game MVP: Birdo</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (5 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Blooper (1 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#999999" }}> THANdrew</span> v.s.
                <span style={{ color: "#6AA84F" }}> Marge</span></StyledMiniHeader>
            <Passage>Coming into this game, THANdrew had now lost 3 straight games and was in dire need of a win. Marge
                coming off of a huge upset against Justave was looking to stay alive in the playoff race. Matt's coaching
                practices have been very publicized over the course of the past weeks, and it was time to see if that
                "coaching" would pay off. After the amazing pitching performance Boo had last week, Marge hoped Boo would
                be able to replicate that today. Instead, Boo only went 2 innings, giving up 3 earned runs on 9 hits, with
                all 3 of those runs coming in the 1st inning. Green Kamek would have his best day on the mound for THANdrew,
                pitching 4.2 IP, only giving up 3 hits and one earned run. The run would come on a sacrifice fly from Peach.
                She would go 0/3 today however, as her batting percentage would continue to go down. Blue Kritter on the
                other hand was able to record a hit and 2 RBIs to boost his batting percentage. THANdrew would score 3 more
                in the 5th, including a Larry Cuc RBI. Waluigi would come into pitch in the 5th, and only give up 3 hits in
                2.1 innings. THANdrews defense would have a great day, as Green Kamek and Waluigi collectively would only
                give up 6 hits. 4 of Marge's hitters would not record a hit during this game, as THANdrew would win 6-1, and
                secure their 2nd straight non-losing record, as Marge has been eliminated from the playoffs.
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
                <div className="mvp">Game MVP: Red Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Green Kamek (1 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Boo (1 - 5)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Funky Kong</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description">
                        5/5, 3 Runs, 3 RBIs, 2 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Bob Marley</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description">
                        (W) 7 IP, 10 Hits, 4 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/4, 1 Run, 1 RBI
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        5 IP, 7 Hits, 1 ER, 1 K
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Kimmy</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>Trocean</span></div>
                    <div className="description">
                        3/3, 1 Run, 2 RBIs, 1 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Green Kamek</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description">
                        4.2 IP, 3 Hits, 1 ER. Best pitching performance this season
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