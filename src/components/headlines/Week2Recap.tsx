import {ContentDiv, StyledHeader, ArticleMeta, SeparatorLine, Passage, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton, Ruling} from "../../components/headlines/HeadlineStyles";
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

export default function Week2Recap() {
    const game1 = {
        away: { name: "Justave", color: "#FF9900", scores: [2, 1, 0, 0, 0, 0, 2], R: 5, H: 16, E: 0, LOB: 8 },
        home: { name: "Morgan", color: "#FF00FF",  scores: [0, 0, 4, 5, 1, 2, "X"], R: 12, H: 25, E: 0, LOB: 8 },
    };
    const game2 = {
        away: { name: "James", color: "#F1C232",  scores: [10, 0, 0, 0, 2, 0, 2], R: 14, H: 20, E: 0, LOB: 3 },
        home: { name: "Brendan", color: "#CC0000", scores: [3, 1, 0, 0, 5, 0, 0], R: 9, H: 19, E: 0, LOB: 7 },
    };
    const game3 = {
        away: { name: "Marge", color: "#6AA84F", scores: [0, 0, 0, 1, 0, 0, 0], R: 1, H: 6, E: 1, LOB: 2 },
        home: { name: "Isaac", color: "#3586E8", scores: [2, 0, 2, 0, 0, 0, "X"], R: 4, H: 8, E: 0, LOB: 3 },
    };
    const game4 = {
        away: { name: "Trocean", color: "#9900FF", scores: [0, 1, 0, 0, 0, 5, 0], R: 6, H: 12, E: 3, LOB: 3 },
        home: { name: "THANdrew", color: "#999999", scores: [3, 0, 0, 0, 5, 0, "X"], R: 8, H: 13, E: 2, LOB: 4 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Week 2 Recap</StyledHeader>
            <GenImage src="/week2.jpg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — September 23, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>With Week 2 now in the books, teams are starting to develop their identities. Winners and losers,
            home run and slap hitters, fan favorites to hated rivals. The season is only just begun!</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#FF00FF" }}>Morgan</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>Manager Dave has been well known for his irregular and very questionable managerial practices, and
            this game was no different. It was confirmed that fan favorite Bertha would be benched, but no one expected
            the smack talk he would be giving manager Morgan to start the game. Despite going up 3-0 after the 2nd inning,
            starting pitcher Bob Marley would not be jamming for long, as he would give up 4 earned runs in the 3rd in a
            lead Morgan would not relinquish. Morgan's hitting core was blazing, as King K. Rool went 3/4, a run, and 4
            RBIs, and Dry Bones going 4/5, 2 runs, and 2 RBIs. The real surprise was Choshi, who went a perfect 4/4 at
            his at bats, and also scoring 3 runs himself. Justave's batting couldn't say the same. Despite Geek Squad
            hitting a home run at his first at bat, nothing else got going for the rest of the team, as Morgan's defense
            locked down. Daisy would get the win for 6 innings pitched, a much better outing than last week against James.
            </Passage>
            <Passage>However, the league has become increasingly concerned with Manager Dave's practices, going as far
            as to saying he physically and verbally abuses his players. Additional whispers of an unknown retreat for
            his players has also been known to potentially be taking place behind the scenes. The league may begin
            to investigate into his practices since he is a new manager to the league. Concerned about the safety and
            the wellbeing of the players, the league may need to take disciplinary action against Justave if necessary,
            especially after Manager Justin saying "Our players have a very strict training regimen, especially after
            a loss".</Passage>

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
                <div className="mvp">Game MVP: Dry Bones + King K Rool</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Daisy (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bob Marley (1 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#CC0000" }}>Brendan</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>In the first rematch of the Season 1 World Series, Brendan looked to avenge the team that swept him
            by putting in a new starting pitcher, Claudius. Claudius would go on to have the worst pitching performance
            this league has ever seen, giving up 8 earned runs on 8 hits in 0.2 innings, immediately benched. He would
            also be the only player not to record a hit in this game, going 0/4. Captain Bowser would need to step in,
            pitching all the way into the 7th. However, he would give up 2 runs in the 1st, for the leagues first
            double digit performance by one team in one inning. Manager Brendan's team would claw and fight back, coming
            within 3 runs going into the 7th, but it was not enough. A record 7 home runs and 8 doubles were hit in this
            game, with James' front 3 batters doing most of the heavy lifting. Birdo would come in to clean up in the
            5th, even throwing a strikeout looking to Abu Patel. Wiggler would get the win on the mound with Claudius
            taking the loss.</Passage>

            <Passage>Immediately after the game, the league went straight into another investigation. This time about
            whether Claudius "threw" the game for his former lover, Manager James. Here's what the court had to say:</Passage>

            <Ruling>
                <h2>VERDICT</h2>
                <pre>
                    IN THE COURT OF HONORABLE JUDGE TOADSWORTH Mushroom Kingdom District{"\n"}
                    Court Case No. 26-LOVE-690{"\n"}
                    The Kingdom v. Claudius{"\n\n"}
                    After giving up 8 runs on 8 hits in 0.2 innings pitched against his former lover James, starting
                    pitcher Claudius of Team Brendan immediately came under heavy scrutiny and questioning by the
                    Managers Union for throwing the game in favor of his favorite manager. The former Crimson Tide
                    football player and Bunker Hill Community College alum has been known to still have romantic
                    feelings for manager James.{"\n\n"}
                    The jury — consisting of three Shy Guys, Pauline, Sabrina, Choad, Boo, Barry, and King K. Rool —
                    finds the defendant:
                    Guilty of attempting to throw the game in favor of his favorite manager, and guilty of illegally
                    gambling on the game, winning a large sum of money from James winning 14–9 at Daisy Cruiser.{"\n\n"}
                    Sentence: Claudius has been suspended indefinitely for his actions, which go against the league’s
                    rulebook on several counts. He will be automatically dropped from Manager Brendan's team during the
                    Week 2 FA period. Manager James and the Birdo Bows will not be penalized for Claudius throwing
                    the game, however, they will NOT be allowed to pick him up as a Free Agent. Any managers willing
                    to pick up Claudius may appeal to the High Court of Peach's Castle in order to acquire him, however,
                    he is not allowed to play against James' team for the rest of the season. With Manager Brendan
                    being first in the waiver wire this week, he can pick up anybody with Claudius being dropped from
                    his roster.{"\n\n"}
                    This verdict is final, unless appealed to the High Court of Peach’s Castle.{"\n"}
                    Hon. Judge Toadsworth presiding
                </pre>
            </Ruling>


            <Passage>Once again, Manager James would come away from a court case unscathed, however teams are
            beginning to wonder who in the Court Room he's friends with. Rumors have already speculated that of course
            Justave is interested in picking up Claudius, but they will have to appeal to the court if they want to
            start him in their rotation.</Passage>

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
                <div className="mvp">Game MVP: Birdo</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Wiggler (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Claudius (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#3586E8" }}>Isaac</span> v.s.
                <span style={{ color: "#6AA84F" }}> Marge</span></StyledMiniHeader>
            <Passage>In what was a very exciting and story line filled first game, Manager Isaac turned to Betty White
            to be his starting pitcher against Marge. In the most defensive oriented battle we have seen so far, Betty
            White did not disappoint. She pitched a complete game, only giving up 6 hits and 1 earned run. The starting
            pitcher from last week, Justin Nascimento, would be a big impact on the hitting side, as hit a 2 RBI Triple
            to give Isaac the lead. Marge's batting on the other hand was ice cold. Their last 4 batters in their lineup
            (Toadsworth, Peach, Yellow Magikoopa, and Boo) went a combined 0-for-9, and failed to reach the bases at all
            during this defensive slug fest. A season low 14 hits would be made between teams during this game, with no
            player having more than 2. Funky would win MVP for his performanc at the plate, going 2/2, 2 runs, an RBI,
            and a triple.</Passage>

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
                <div className="mvp">Game MVP: Funky Kong</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Betty White (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Boo (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#9900FF" }}>Trocean</span> v.s.
                <span style={{ color: "#999999" }}> THANdrew</span></StyledMiniHeader>
            <Passage>Prior to the start of this game, another ruling from the court was issued on the accusations
            on the Magikoopas using cork in their bats:</Passage>

            <Ruling>
                <h2>VERDICT</h2>
                <pre>
                    IN THE COURT OF HONORABLE JUDGE TOADSWORTH Mushroom Kingdom District{"\n"}
                    Court Case No. 27-CORKED-333{"\n"}
                    The Kingdom v. The Magikoopas{"\n\n"}
                    The week-and-a-half-long investigation has concluded regarding the threats against the Magikoopas
                    for using corked "bats," or wands. These theories spread like wildfire after numerous Week 1
                    accusations, claiming the Magikoopas had boosted their own batting stats by putting illegal
                    substances in their wands.{"\n\n"}
                    After being presented with all the research that was done, the jury — consisting of two Goombas,
                    three Toads, Blooper, Diddler, Michelle Obama, and Grayson McKean — finds there is not enough
                    evidence that the Magikoopas used illegal substances, and votes the Magikoopa clan not guilty,
                    with Grayson McKean casting the deciding 4–4 vote.{"\n\n"}
                    Sentence: The Magikoopas will still be under investigation until the end of the season, and the
                    league plans to issue another research report after the All-Star break. The teams with Magikoopas
                    on them have been warned that the usage of cork and other enhancement products may lead to
                    punishments and player bans ranging from games to an entire season. Drug tests and equipment
                    inspections will be happening more frequently and arbitrarily going forward.{"\n\n"}
                    The jury has also noted that the Koopa Klux Klan has no involvement with this case, and the court
                    asks that they not be questioned.{"\n\n"}
                    This verdict is final, unless appealed to the High Court of Peach’s Castle.{"\n"}
                    Hon. Judge Toadsworth presiding
                </pre>
            </Ruling>

            <Passage>The fans of the league were a little displeased, but THANdrew and Trocean rejoiced that their
            players would not be suspended.</Passage>

            <Passage>In doing so, we had our first Kamek vs Kamek pitching duel, between THANdrew's Green Magikoopa
            and Trocean's Red Magikoopa. After the first few innings, it was clear Kamek was the better Kamek. Red
            Magikoopa only lasted .2 innings before giving up 3 runs in the first, taking the loss. Green Magikoopa on
            the other hand would go 4 innings, only giving up 1 run, and getting the win. The real storyline of this
            game was the outfield. Both outfields had exceptional plays and pickoffs in the infield, while mustering a
            combined 5 errors total in the game, the most out of any PMBL game in history. THANdrew's bats were once
            again blazing as Larry Cuc would go 3/3, 2 runs, 3 RBIs, and a home run, which bounced off the outfielders
            glove into the stands, driving in 2 runs in the 1st inning. Trocean did stage a small comeback, shortening
            their deficit from 7 to 2, however Red Kritter would close out the game in relief of the struggling Waluigi,
            earning himself a save. Unlike last week, Blue Kritter would finally hit the ball, earning himself game
            MVP with his 3 RBI performance. The Trocean and Christach franchise has now gone 0-2 to start each season.</Passage>

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
                <div className="mvp">Game MVP: Blue Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Green Kamek (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Red Kamek (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Red Kritter (1)</span>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/5, 3 Runs, 4 RBIs, 2 HRs
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        2.2 IP, 7 Hits, 3 Runs, 1 ꓘ
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Betty White</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description">
                        7 IP, 6 Hits, 1 Run
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/5, 3 Runs, 4 RBIs, 2 HRs
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        2.2 IP, 7 Hits, 3 Runs, 1 ꓘ
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Larry Cuc</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description">
                        3/3, 2 Runs, 3 RBIs, 1 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Yellow Yoshi</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description">
                        Going 4/4 and scoring 3 Runs
                    </div>
                </AwardBlock>
            </AwardsSection>


            <SeparatorLine />
            <StyledMiniHeader>Check out more stories below!</StyledMiniHeader>

            <StoryDiv>
                <Stories>
                    <Story>
                        <MiniImage src="/miibaseball.jpg" alt="Mii" />
                        <Overlay>
                            <Headline>Head Analyst Predicts Mii Breakout Season</Headline>
                            <StyledLink to="/headlines/MiiBreakout">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
                <Stories>
                    <Story>
                        <MiniImage src="/koopa_behind_the_bars.jpg" alt="Koopa" />
                        <Overlay>
                            <Headline>Koopa Found Guilty of Assault</Headline>
                            <StyledLink to="/headlines/Koopa">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
                <Stories>
                    <Story>
                        <MiniImage src="/Caucasian_bones_playground.png" alt="Dry Bones" />
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