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

export default function Week4Recap4() {
    const game1 = {
        away: { name: "James", color: "#F1C232", scores: [0, 0, 2, 0, 3, 0, 0], R: 5, H: 11, E: 1, LOB: 2 },
        home: { name: "Morgan", color: "#FF00FF", scores: [0, 1, 3, 3, 0, 0, "X"], R: 7, H: 17, E: 1, LOB: 7 },
    };
    const game2 = {
        away: { name: "Trocean", color: "#9900FF", scores: [0, 0, 2, 2, 1, 0, 7], R: 12, H: 20, E: 1, LOB: 8 },
        home: { name: "Isaac", color: "#3586E8", scores: [1, 0, 0, 0, 0, 0, 0], R: 1, H: 9, E: 3, LOB: 4 },
    };
    const game3 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 2, 2, 0, 0, 0, 0], R: 4, H: 12, E: 0, LOB: 1 },
        home: { name: "Brendan", color: "#CC0000", scores: [0, 0, 0, 3, 0, 2, "X"], R: 5, H: 17, E: 1, LOB: 9 },
    };
    const game4 = {
        away: { name: "Marge", color: "#6AA84F", scores: [0, 0, 0, 3, 0, 4, 2], R: 8, H: 24, E: 1, LOB: 5 },
        home: { name: "THANdrew", color: "#999999", scores: [1, 2, 0, 0, 0, 0, 1], R: 4, H: 11, E: 0, LOB: 5 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 4 Week 4 Recap</StyledHeader>
            <GenImage src="/headlines/4week4.jpg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — July 23, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Despite only being 4 weeks in, this season we have already seen a record amount of blown saves,
            including multiple this week. This week would also be an absolute huge week for the Dry Bones family, with
            every single one of them having good games.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>
                In a historically lopsided rivalry, Morgan looks to avenge his woes against James and 3 straight losses
                against him by taking him to Yoshi Park. Without Danny B available, Morgan would look to Kimmy to start
                on the mound, and give Baby Peach her season debut. No score would happen in the 1st, but in the 2nd,
                Red Toad would knock down an RBI to get the scoring going for Morgan, making it 1-0. James would fight
                back with 2 of his own, coming off of a deep Bowser single to drive in 2. Then Dry Bones would counter
                in the bottom of the 3rd, hitting a 2 run shot to left field over the head of Blue Toad. Green Kritter
                one pitch later would hit his own solo shot, making it 4-2 Morgan. The scoring run wouldn't end there,
                as franchise player Dry Bones would then take another one deep in the 4th, driving in Baby Peach and
                Yellow Toad for a 3 run homer, making it 7-2 Morgan. This would take Bowser off the mound after 3.1 IP
                and bring on Bowser Jr. James would start to fight back in the 5th after Kimmy was taken off the mound.
                Bowser Jr would drive in Blue Toad, and then Bowser would hit a 2 run shot to make it 7-5 Morgan. Despite
                the early runs for Mario, he held his composure. Pitching into the 7th still up 2, Bowser Jr would hit a
                fair ball into right field, and would be picked off at 2nd to end the game 7-5, and give Bowser Jr the
                first recorded Caught Stealing in PMBL history. Morgan would also have his best ever start through 4 games
                at 3-1, and Dry Bones would win MVP.
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
                <div className="mvp">Game MVP: Dry Bones</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Kimmy (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bowser (1 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Mario (2)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#9900FF" }}> Trocean</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>A heavyweight bout in the West for division lead, Isaac would look to bounce back after a lackluster
                game against his kryptonite in James, and Trocean having a disastrous performance in the 7th inning last
                week to Marge. The game would start with a quick Brown Kritter error, quickly putting Isaac's runners in
                scoring position. Petey would then step up and continue his reputation of hitting sacrifice flies by
                driving in Yellow Pianta to make it 1-0 Isaac. Trocean wouldn't be able to muster any offense in either
                the 1st or 2nd, but finally struck in the 3rd, handing Baby Daisy her first ever earned runs and taking
                the lead 2-1. Trocean's earned runs wouldn't end there, as Daisy would take the mound in the 4th, and give
                her 2 more, and another 1 in the 5th, going up 5-1 Trocean. The game seemed fairly steady until the 7th, when
                Trocean released all past aggression by dropping 7 more runs in their final frame, with multiple home runs
                coming off the bats of Donkey Kong and Boomerang Bro. 3 errors would help lead to scoring plays for Trocean,
                with 2 from Petey and 1 from Red Kritter. Absolute decimation. The only time Trocean has ever beaten Isaac
                was the final week of Season 2, when Isaac decided to rest starters, but this would end up being the worst
                regular season loss in the Isaac franchise history in terms of run differential. An absolute 12-1 beatdown,
                as Trocean takes a game on the road in a strong West Division, as Gramms would win MVP despite being the
                only player on the squad to not have an RBI. 5 of Isaac's players would go hitless for the 2nd time this
                year.
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
                <div className="mvp">Game MVP: Gramms</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Diddy Kong (2 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Baby Daisy (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#FF9900" }}> Justave</span> v.s.
                <span style={{ color: "#CC0000" }}> Brendan</span></StyledMiniHeader>
            <Passage>
                Starting 0-3 for the 2nd time in 3 years for Brendan, and starting 1-2 for the 4th straight year for Justave,
            both teams were looking for wins to get back into the division. Bonnie would be taking the mound for Brendan
            while Dixie Kong would be taking it for Justave. Going into the 2nd tied 0-0, Bonnie and Dixie were looking
            fairly solid to start. Peach would then hit a start hit to right center, somehow affecting MLK with her
            feminine tendencies, scoring 2 for Justave. Justave would score another 2 runs in the 3rd, thanks to Triangle
            and Funky RBI singles, taking a 4-0 lead. Dixie would pitch 3 innings scoreless before being taken out for
            Peach, while Bonnie would pitch 4.2 innings, giving up 4 runs on 9 hits. In the 4th, Peach would quickly fall
            apart on the mound, getting tired after just one inning, and letting 3 runs come home thanks to Blue Dry Bones
            and Bonnies bats. Now only up 4-3 going into the witching hour, Justave needed to hold on with Sabrina on the
            mound, but a 2nd base error would tie the game up and give Bonnie her 3rd RBI of the game, and shortly after,
            Dark Bones would hit a deep single to left scoring Blue Dry Bones to make it 5-4 in Brendans favor, blowing
            the save for Sabrina. Red Pianta would make an incredible diving play for Brendan at 1st in the top of the 7th,
            and then Jake would ground into a double play to end the game 5-4 Brendan, giving him his first win of the year,
            and have Justave start 1-3, the first time they'd ever do so. Dark Bones would win MVP off a stellar hit to drive
            in the go-ahead run, and the week of Bones would continue, with Blue Dry Bones also going 3/4 and driving in
            a run.</Passage>
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
                <div className="mvp">Game MVP: Dark Bones</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Wario (1 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Sabrina (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#6AA84F" }}> Marge</span> v.s.
                <span style={{ color: "#999999" }}> THANdrew</span></StyledMiniHeader>
            <Passage>In a pretty unexpected week so far, THANdrew would shock us all by taking their heavy hitting team
                to Luigis Mansion. What was even more stunning was their offense started very quickly, scoring 3 runs
                across the 1st and 2nd innings, and taking Miss Jones off the mound rather quickly. Marges offense looked
                incredibly off, which has been a theme for them for the first couple of innings this season. THANdrew's
                defense turned not one, but two triple plays in this game, leaving manager George distraught. Finally
                in the 4th, Marge got on the board thanks to Green Toad driving in 2, giving Toadsworth his first ever
                earned runs as well. Luigi would come onto the mound, and would pitch 2 solid innings going into the
                Witching Hour up 3-2. Luigi would blow the save rather quickly letting Miss Jones bat a runner in, followed
                by Green Toad picking up his 3rd RBI, and Blue Pianta getting one as well. After that, Green Kamek stepped
                up and let one up as well to Purple Toad, and all of the sudden Marge was up 6-3. The troubles continued
                for THANdrew in the 7th as Geek Squad on the mound would give up 2 more, this time both to Green Dry Bones,
                who went a perfect 4/4 with 2 runs and 2 RBIs in the game. Marges offense was cooking, with a record 7 doubles
                and 3 players who went perfect batting for the day, including Eugene who went 3/3. THANdrew would score one
                off of a Miss Jones error in the 7th, but the game would end 8-4, giving Marge their best ever start through
                4 games at 3-1. Eugene going a perfect 3/3 would win MVP and the hearts of the fans in the crowd after
                being benched due to poor play earlier this season. It is undecided if he will be in the lineup next week
                when Michelle Obama returns.
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
                <div className="mvp">Game MVP: Eugene, Miss Jones</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (3 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Luigi (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection style={{marginTop: "0"}}>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Dry Bones</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description">
                        2/4, 2 Runs, 5 RBIs, 2 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        (W) 5.1 IP, 5 Hits, 1 R, 0 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Diddy Kong</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>Trocean</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/5, 1 Run, 1 RBI
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 4.1 IP, 6 Hits, 1 ER, 1 K
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
                    <div className="player">Eugene</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        3/3, Game MVP
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Disappointment of the Week</div>
                    <div className="player">Petey Piranha</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description">
                        0/2, 1 RBI off Sac Fly, 2 fielding errors
                    </div>
                </AwardBlock>
            </AwardsSection>


            <StyledMiniHeader>Week 4 Stat Leaders</StyledMiniHeader>

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
                            <span style={{ color: "#CC0000" }}>Wario</span> (0.846)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Diddy Kong</span> (0.706)
                        </td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Yellow Toad</span> (0.706)
                        </td>
                    </tr>

                    <tr>
                        <td>Home Runs</td>
                        <td>
                            <span style={{ color: "#999999" }}>Hammer Bro</span> (3)
                        </td>
                        <td>
                            <span style={{ color: "#3586E8" }}>Red Kritter</span> (3)
                        </td>
                        <td>
                            8 Players (2)
                        </td>
                    </tr>

                    <tr>
                        <td>RBIs</td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Boomerang Bro</span> (9)
                        </td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Bowser</span> (9)
                        </td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Dry Bones</span> (9)
                        </td>
                    </tr>

                    <tr>
                        <td>Runs</td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Tiny Kong</span> (7)
                        </td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Bowser Jr</span> (6)
                        </td>
                        <td>
                            3 Players (6)
                        </td>

                    </tr>

                    <tr>
                        <td>Hits</td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Diddy Kong</span> (12)
                        </td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Yellow Toad</span> (12)
                        </td>
                        <td>
                            4 Players (11)
                        </td>

                    </tr>

                    <tr>
                        <td>ERA (Min. 10 IP)</td>
                        <td>
                            <span style={{ color: "#FF00FF" }}>Bob Marley</span> (2.65)
                        </td>
                        <td>
                            <span style={{ color: "#6AA84F" }}>Birdo</span> (3.00)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Diddy Kong</span> (3.28)
                        </td>

                    </tr>

                    <tr>
                        <td>Innings Pitched</td>
                        <td>
                            <span style={{ color: "#6AA84F" }}>Birdo</span> (18.2)
                        </td>
                        <td>
                            <span style={{ color: "#F1C232" }}>Bowser</span> (17.0)
                        </td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Donkey Kong</span> (14.0)
                        </td>
                    </tr>

                    <tr>
                        <td>Strikeouts</td>
                        <td>
                            <span style={{ color: "#9900FF" }}>Diddy Kong</span> (3)
                        </td>
                        <td>
                            <span style={{ color: "#6AA84F" }}>Birdo</span> (2)
                        </td>
                        <td>
                            2 Players (2)
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