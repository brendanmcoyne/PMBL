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

export default function Week8Recap() {
    const game1 = {
        away: { name: "Isaac", color: "#3586E8", scores: [0, 0, 0, 5, 0, 1, 5], R: 11, H: 18, E: 1, LOB: 6 },
        home: { name: "James", color: "#F1C232", scores: [0, 4, 3, 0, 1, 1, 0], R: 9, H: 21, E: 1, LOB: 9 },
    };
    const game2 = {
        away: { name: "Marge", color: "#6AA84F", scores: [0, 0, 7, 0, 0, 2, 1], R: 10, H: 19, E: 0, LOB: 6 },
        home: { name: "Justave", color: "#FF9900", scores: [0, 1, 0, 0, 0, 0, 3], R: 4, H: 13, E: 0, LOB: 5 },
    }
    const game3 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [0, 0, 6, 1, 0, 3, 0], R: 10, H: 19, E: 0, LOB: 8 },
        home: { name: "Brendan", color: "#CC0000", scores: [0, 0, 0, 1, 3, 3, 1], R: 8, H: 15, E: 2, LOB: 5 },
    };
    const game4 = {
        away: { name: "THANdrew", color: "#999999", scores: [3, 1, 0, 0, 0, 0, 0], R: 4, H: 16, E: 0, LOB: 11 },
        home: { name: "Trocean", color: "#9900FF", scores: [2, 1, 0, 0, 0, 0, 2], R: 5, H: 14, E: 0, LOB: 4 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Week 8 Recap</StyledHeader>
            <GenImage src="/headlines/week8.jpg" alt="Week8"/>
            <ArticleMeta>
                Written by: PMBL News — November 14, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>For the first time in PMBL history, all 4 home teams won their games. This caused a fairly
                big shakeup in the playoffs picture. Maybe some of the teams we thought were making the playoffs won't?
            </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>In a high stakes clash, Isaac decided to take James to the jungle for his final home game of the
                season. Another big pitching duel was to commence, with Justin Nascimento and Birdo going head to head.
                The scoreboard stayed quiet for the first inning, before James' bats began to warm up and put 4 on the
                scoreboard in the 2nd. Isaac realized during this inning that he gave his crew the wrong lineup, accidentally
                messing up outfield chemistry in right. Gramms would attempt to catch a ball in right, but it would
                bounce off her glove and into the stands, counting for a 3 run homer for James in the 3rd. This would make
                the game 7-0 in James favor. Justin Nascimento would get  subbed out, an incredibly subpar day for him,
                as the team brought in Donkey Kong. In the 4th inning, Birdo would put runners on 1st and 2nd, and despite
                not giving up a single run, she would be pulled after 3 IP and 7 Hits given up. A very questionable decision
                by the pitching staff. When everyone in the crowd thought Wiggler or Zekrom would be stepping up next, it
                would be Blue Toad.
            </Passage>

            <Passage>Blue Toads disasterclass of a pitching performance would give up 5 runs without recording a single
                out on 3 hits, making the score 7-5 James. One of those hits would be a grand slam by Funky Kong.
                Blue Toad would be subbed out for Petey Piranha, the former MVP and Golden Glove winner. Many people were
                shocked by this switch, but Petey pitched fairly well. James would tack on a couple more runs in the 5th
                and in the 6th, with Isaac scoring 1 in the 6th, to make the score 9-6 James. Petey would let up 1 run
                in the 7th but would get 2 outs. So with 1 out remaining and up 2, James' team decides to put in Yellow
                Pianta to pitch. Only needing 1 out, Yellow Pianta would give up a hit to Dixie Kong to drive in a run
                making it 9-8. On the next batter, Yellow Pianta would give up a 3 run homer to Funky Kong. Giving
                Isaac his first lead of the game. Yellow Pianta would finally get the out, but Petey and the gang could
                not muster 2 runs, leaving Isaac the victor of the 11-9 comeback. This would be the 3rd 7 run comeback
                to win this season, as Isaac becomes the first team with a winning record.

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
                <div className="mvp">Game MVP: Funky Kong</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Donkey Kong (1 - 2)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Yellow Pianta (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Dixie Kong (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#FF9900" }}> Justave</span> v.s.
                <span style={{ color: "#6AA84F" }}> Marge</span></StyledMiniHeader>
            <Passage>A very smug Justave team would roll into Bowsers Castle for Game 2 of Week 8 off the thrill of the 9
            inning victory against Isaac the week prior. Playing Marge, they knew they beat them 16-0 earlier
            that year. Manager Justin has been talking for weeks about how big of a game the Week 10 clash against James
            would be. This game could definitely have been labeled as a trap game for Justave. From the first batter,
            Green Toad would ground out, ending his 19 hit streak, and from that moment, something felt off. Justave would
            get a solo homer from Hammer Bro in the 2nd to go up 1-0, as Marge pitcher Boo began to get tired, however Boo stayed
            poised. Marge's bats would explode in the 3rd however, scoring 7 to take a 7-1 lead over Justave. Yellow Shy
            Guy coming out of nowhere to knock down 3 RBIs in this game certainly helped their cause. Bob Marley looked
            very human today, only pitching 2.1 innings, giving up 5 earned runs on 9 hits. Boo on the other hand had
            his best pitching day by far. Going 5.1 IP, 8 hits, 1 earned run, and his first strikeout. Going into the
            bottom of the 7th, Marge would have an incredible 10-1 lead, a shock to dozens of PMBL fans. However, despite
            Boo's pitching performance and Marge's bats working today, none of this would have been possible without Yellow
            Kamek. Yellow Kamek this game played some of the greatest defense this league has ever seen at shortstop. Play after
            play, jumping to grab the ball, using his wand, and turning double plays looked effortless for him. Justave
            would score a few in the bottom of the 7th but that would do it. Marge would win 10-4 and keep the division race
            close between Justave and James, with Yellow Kamek deservingly winning Game MVP. </Passage>

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
                <div className="mvp">Game MVP: Yellow Kamek</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Boo (1 - 4)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bob Marley (3 - 3)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>Both of these teams winning back to back games would set up a great scenario at Mario Stadium. If THANdrew
            lost to Trocean in the next game, then the winner of this game would be in the playoff picture. To start off,
            Blooper would quickly let up a few hits, but no damage was done. Brendan's batters would deep shots, however
            the speed of Morgan's defense would easily reach them. Scoring started in the 3rd, when Morgan's team, lead by
            King K Rool, would score 6 in the 3rd, taking out fan favorite Blooper early. King K would get a big grand slam
            in this inning after Morgan's bats already scored 2. Morgan would score a 7th run in the 4th, with Brendan's
            team getting themselves on the board with 1 as well. Bowser would get a 3 run homer to left in the 5th to
            pull within 4, effectively taking out Reshiram to start the 6th. Within 3 now for Brendan, Blue Pianta
            would error at 2nd to put Diddy on 1st, and then Daisy would hit a homer to make it 9-4, a costly mistake
            to give up another run by Blue Pianta. After Morgan would bat in his 10th run of the day, Blue Pianta
            would error again in the same inning, however this would not lead to any score. Brendan's bats once again
            would respond scoring 3 runs to bring the lead back to 3. In the bottom of the 7th, it was joked about that
            Brendan's frustration would be at an all time high if the game ended 10-9 in favor of Morgan because of
            Blue Pianta's error. Bowser would immediately hit another homer, tying Petey Piranha for the league lead, making
            it 10-8. With Brendan very worried he would lose by 1, the rest of his bats would ground out, losing 10-8.
            Morgan, now off of winning 3 straight, finds himself in a decent position to make the playoffs after all hope
            looked lost after losing to Marge 3 weeks prior. </Passage>

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
                <div className="mvp">Game MVP: Dry Bones</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Reshiram (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Blooper (1 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#999999" }}> THANdrew</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>In what's already been a lost season for Trocean, due to the way the earlier games unfolded, Trocean
            would already be eliminated from the playoffs before their game even started. However, there plan to stay
            competitive for the rest of the season was shown by switching their batting and fielding lineups earlier in
            the week. Facing THANdrew, Morgan was a big supporter for his division rival in Trocean, cheering more for
            them than he ever does for his own team. MLK would get the nod to start tonight versus THANdrew, and would
            immediately give up a 3 run homer from Fire Bro. Trocean's team would respond in kind with an RBI shot by
            Red Toad, and then by Kimmy, making it 3-2 THANdrew. Green Kamek would be pulled after .2 innings for Waluigi,
            his shortest start of the year. Both teams would each tack on another run in the 2nd, making it 4-3 THANdrew.
            MLK would pitch into the 4th before being subbed in for Mario. THANdrew's team continued to get hits, however
            could never seal the deal. Troceans defense continued to lock down when players in scoring position, not
            allowing THANdrew any runs. It would stay 4-3 into the 7th, and Mario would pitch a 1-2-3 inning, bringing
            up Troceans offense.</Passage>

            <Passage>In the bottom of the 7th, Waluigi would surprisingly be subbed out for Fire Bro, who has never pitched
            in a PMBL game. He would quickly give up a hit to both Red Shy Guy and Red Yoshi, putting runners on 1st and 3rd.
            Mario would get up to the plate and hit a shot into shallow center, but Red Shy Guy would not run home and would
            stay at 3rd, yet Mario would get picked off, advancing Red Yoshi to 2nd. Red Pianta would then step up the plate,
            and do the exact same thing. Once again, for some reason Red Shy Guy would fail to run home to tie it, with this
            time Red Yoshi being picked off Now with 2 outs on the board down 1, Red Toad would save the day and hit the
            exact same shot right up the middle to finally score Red Shy Guy, tying it at 4. MLK on the next pitch would
            hit a huge shot into left center, scoring Red Pianta from 2nd to win the game 5-4 for Trocean. This would be
            the 3rd blown save for THANdrew this year, his 2nd with only one out remaining (Week 4 v.s. Brendan). Trocean
            and Morgan were both estatic, as Morgan would now jump THANdrew in the standings for the playoff picture, as
            THANdrew loses their 3rd straight. Isaac would become the 1st team to clinch the playoffs with the THANdrew
            loss.</Passage>


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
                <div className="mvp">Game MVP: MLK</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Mario (2 - 3)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Fire Bro (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Funky Kong</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description">
                        3/5, 3 Runs, 7 RBIs, 2 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Boo</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        (W) 5.1 IP, 8 Hits, 1 ER, 1 K
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Waluigi</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/4, 2 Runs, 2 Doubles
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        5.1 IP, 4 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Reshiram</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        1/4
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 5 IP, 10 Hits, 4 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Yellow Kamek</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        Incredible locking defense. Went 4/4 batting too.
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