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

export default function PlayoffRecap() {
    const game1 = {
        away: { name: "James", color: "#F1C232", scores: [0, 2, 3, 11, 0, 4, 2], R: 22, H: 35, E: 1, LOB: 8 },
        home: { name: "Isaac", color: "#3586E8", scores: [0, 0, 0, 6, 2, 0, 8], R: 16, H: 21, E: 1, LOB: 2 },
    };
    const game2 = {
        away: { name: "James", color: "#F1C232", scores: [0, 1, 5, 0, 0, 2, 4], R: 12, H: 20, E: 1, LOB: 7 },
        home: { name: "Isaac", color: "#3586E8", scores: [0, 0, 0, 0, 1, 2, 1], R: 4, H: 13, E: 1, LOB: 4 },
    };
    const game3 = {
        home: { name: "Isaac", color: "#3586E8", scores: [0, 0, 1, 0, 1, 0, 0], R: 2, H: 10, E: 0, LOB: 5 },
        away: { name: "James", color: "#F1C232", scores: [0, 3, 0, 2, 3, 6, "X"], R: 14, H: 20, E: 0, LOB: 3 },
    };
    const game4 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [0, 1, 0, 0, 0, 3, 2], R: 6, H: 16, E: 0, LOB: 9 },
        home: { name: "Justave", color: "#FF9900", scores: [0, 5, 0, 0, 3, 0, "X"], R: 8, H: 15, E: 1, LOB: 2 },
    };
    const game5 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 1, 0, 1, 4, 0, 1, 0, 0, 0], R: 7, H: 16, E: 2, LOB: 7 },
        home: { name: "Morgan", color: "#FF00FF", scores: [0, 0, 4, 0, 0, 0, 3, 0, 0, 1], R: 8, H: 17, E: 2, LOB: 4 },
    };
    const game6 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 6, E: 1, LOB: 2 },
        home: { name: "Justave", color: "#FF9900", scores: [0, 1, 0, 0, 2, 0, "X"], R: 3, H: 13, E: 1, LOB: 8 },
    };
    const game7 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 9, E: 0, LOB: 4 },
        home: { name: "Justave", color: "#FF9900", scores: [1, 7, 4, 0, 0, 2, "X"], R: 16, H: 22, E: 0, LOB: 7 },
    };
    const game8 = {
        away: { name: "James", color: "#F1C232", scores: [7, 0, 0, 0, 6, 1, 3], R: 17, H: 22, E: 0, LOB: 4 },
        home: { name: "Justave", color: "#FF9900", scores: [2, 1, 2, 3, 1, 0, 0], R: 9, H: 16, E: 0, LOB: 4 },
    };
    const game9 = {
        away: { name: "Justave", color: "#FF9900", scores: [1, 0, 0, 1, 0, 0, 1, 2, 0, 2], R: 7, H: 24, E: 1, LOB: 12 },
        home: { name: "James", color: "#F1C232", scores: [1, 0, 0, 1, 1, 0, 0, 2, 0, 0], R: 5, H: 15, E: 1, LOB: 8 },
    };
    const game10 = {
        away: { name: "James", color: "#F1C232", scores: [0, 0, 0, 0, 5, 0, 2], R: 7, H: 14, E: 3, LOB: 4 },
        home: { name: "Justave", color: "#FF9900", scores: [3, 0, 3, 1, 3, 0, "X"], R: 10, H: 16, E: 1, LOB: 5 },
    };
    const game11 = {
        away: { name: "Justave", color: "#FF9900", scores: [2, 0, 1, 0, 2, 2, 1], R: 8, H: 16, E: 0, LOB: 5 },
        home: { name: "James", color: "#F1C232", scores: [0, 3, 0, 0, 0, 1, 2], R: 6, H: 21, E: 1, LOB: 10 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Playoff Recap</StyledHeader>
            <GenImage src="/headlines/playoffs.jpg" alt="Week10"/>
            <ArticleMeta>
                Written by: PMBL News — December 26, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>This years playoffs were much tighter than last years. A new champion has been crowned, and the games
                weren't all complete blowouts. We want to thank all participants and managers for joining us on Season 2
                of the Professional Mario Baseball League.
            </Passage>

            <StyledMiniHeader style={{marginBottom: "0", color: "#888888"}}>Conference Series</StyledMiniHeader>
            <StyledMiniHeader style={{marginBottom: "0"}}>Series 1: (2)<span style={{ color: "#3586E8" }}> Isaac</span> v.s.
                (3)<span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>In Isaac's first playoff series as the West Division champion, he decided to bring James to the jungle
                for Game 1. With Mii of the Year Justin Nascimento on the mound going against Petey, it looked to be a big
                pitching duel. After 3 innings, it was 5-0 James. Following in close to their matchup in Week 8, James took
                the lead early. This lead however, became way too big to overcome. James would tie the league record with
                11 runs in one inning to go up 16-0 in the 4th. Justin Nascimento would finish a horrid day on the mound
                pitching 3 innings and give up 8 runs on 13 hits. Donkey Kong would replace him and do even worse, giving
                up 8 earned runs on 9 hits without getting a single out. Isaac would cut the lead in half going into the
                6th, as Birdo would only get through 1.2 innings, giving up 7 runs on 6 hits. James' offense didn't stop,
                as he would score 6 more runs to go up 22-8. Alfonso and Petey would end with 5 RBIs on the day. Funky Kong
                gave up 5 of those and Gramms would give up the 22nd run. Being down 14, Isaac's offense would come roaring
                back in the bottom of the 7th, scoring 8, making this game the highest scoring game of all time, ending at
                38 runs. James would win Game 1 22-16, with 6 home runs, and 8 different pitchers being used throughout
                this game.
            </Passage>

            <Passage>For Game 2, the game would start out quiet. Petey Piranha became the first pitcher to be taken out
                before giving up a hit, pitching 1 complete inning. Once up 2-0 in the 3rd, Alfonso of all people would
                hit a grand slam in the 3rd, giving James a 6-0 lead. Justin Nascimento would once again have a very off
                day, pitching only 2.1 innings, giving up 6 runs on 11 hits. Isaac's offense would get on the board in the 5th
                with a Funky Kong sacrifice fly, and then in the 6th, DK would hit a 2 run homer to make the score 8-3 James.
                Zekrom gave up all the runs for James, as Birdo was taken out after going 3.1 innings, recording 7 hits
                and a strikeout while no earned runs scored. The game would end 12-4 after a Petey Piranha 3 run shot and a
                Cascade RBI, and another sacrifice fly for Funky Kong. Birdo would record the win and Justin Nascimento
                would get another loss.
            </Passage>

            <Passage>Up 2-0 in the series, James would take Isaac to the Yoshi Park, which he started going to after
                losing back to back in the Daisy Cruiser. Hits starting coming quick against Isaac, with Justin Nascimento
                giving up 3 earned runs on 9 hits through 3 innings. Petey almost went perfect through 2, only giving up
                1 hit. A close game through 3, James would be up 3-1, however Isaac had only gotten 3 hits to this point,
                with yet another sacrifice fly from Funky Kong. Donkey Kong on the mound would be troublesome once again,
                giving up 7 runs and 9 hits through 2.1 innings. The game would end 14-2 in favor of James, sweeping Isaac
                and making the World Series for the 2nd consecutive year. Cascade of all people would win Game MVP, going
                3/3 with 2 runs, 3 RBIs, and a home run. 3 of Isaac's hitters, DK, Justin, and Brown Kritter would go hitless
                in Game 3.
            </Passage>

            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 1</StyledMiniHeader>
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
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Petey Piranha (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Justin Nascimento (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 2</StyledMiniHeader>
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
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Justin Nascimento (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 3</StyledMiniHeader>
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
                <div className="mvp">Game MVP: Cascade</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Justin Nascimento (0 - 3)</span>
                </div>
            </GameSummary>


            <StyledMiniHeader style={{marginBottom: "0", color: "#888888"}}>Conference Series</StyledMiniHeader>

            <StyledMiniHeader style={{marginBottom: "0"}}>Series 2: (1)<span style={{ color: "#FF9900" }}> Justave</span> v.s.
               (4)<span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>Morgan's resurgence back to the playoffs set up an eventful/up-and-coming rivalry in the PMBL between
                him and Justave in the Conference Series. Morgan previously beat Justave 12-5 in Week 2, before he made
                any changes to hit roster involving Reshiram and Diddy Kong. In game 1, Justave would jump out to a quick 5-1
                lead going into the 5th inning. Green Dry Bones was doing his part by getting 2 RBIs along with Koopa
                getting his first ever playoff RBI off a sac fly. Justave would score 3 more in the bottom of the 5th to
                stretch the lead to 7, however after this, Morgan's offense would start cooking. Reshiram would hit a home
                run in the top of the 6th to get the scoring going for Morgan, followed by RBIs from both Dry Bones and Wario.
                King K Rool has a sluggish day, only hitting 1/4. Bob Marley would be pulled after an impressive 5.2 innings
                pitched, giving up 4 runs on 13 hits, and recording his first 2 strikeouts on the year. Down 4 in the 7th,
                Morgan had 1 out with the bases loaded. Baby Daisy would hit a bloop out into right center, which Green Toad
                would astonishingly drop, brining in a run. Manager Dave was furious following this mishap. Yellow Yoshi would
                tag on another run to make it 8-6, but Luigi would get Baby Mario to bat into a double play, giving Game 1
                to Justave.
            </Passage>

            <Passage>Game 2 would start with more of the same, with Justave getting on the scoreboard first, and King K Rool not
                doing anything productive for the Morgan offense. Off of a Koopa error which bounced off his glove and
                into the right field foul section, Morgan's team would be able to score 2 runs, making in 4-1 Morgan in the
                3rd. Justave's offense would respond in kind, scoring 1 in the 4th, and 4 in the 5th, to make it 6-4 Justave.
                Reshiram would be pulled after 4.1 innings after giving up 5 runs on 10 hits. Bob Marley in kind would also
                be pulled in the 5th, going only 4 innings, and giving up 4 runs on 8 hits. Justave would score another
                run thanks to a Hammer Bro solo shot in the 7th to make it 7-4 Justave. In the bottom of the 7th, Dry Bones
                and Wario would both get on base with 2 outs for King K Rool, who was shockingly 0/3 so far in Game 2. With
                one crack of the bat, King K tied the game with a 3 run shot to right field over Green Toads head. This would
                bring the game into extras. Despite both teams erroring in the 8th, no runs were scored in the 8th or the 9th.
                In the 10th, Daisy once again made quick work of Justaves offense, but then Morgan's offense would load the bases
                with Baby Mario up and only 1 out. He would hit a bloop single straight through 2nd base, scoring King K Rool
                and tying the series 1-1 in the bottom of the 10th for Morgan. Baby Mario would win his first ever Game MVP.
            </Passage>

            <Passage>Shifting now to Mario Stadium, this would be the first series ever to be tied 1-1 going into Game 3. Justave
                once again would get on the scoreboard in the 2nd from another Koopa RBI, but the game would fall very quiet
                until the end of the 5th. Bob Marley wasn't letting any of Morgan's team get past him, and neither was
                Justave's outfield, who robbed multiple home runs. Hammer Bro would come through for Justave's offense however
                in the 5th, with a 2 run shot making it 3-0 Justave. Morgan's offense couldn't do anything the whole game,
                with 3 of his players not recording a hit, and not a single player recording multiple hits. The game would
                end 3-0, with Bob Marley pitching the first ever complete game and shutout in the playoffs, only giving
                up 6 hits. Both Green Dry Bones and Koopa would win Game MVP for Game 3, as Justave would take the series
                lead back.
            </Passage>

            <Passage>Now in Game 4, Morgan hoped that his team would come out of the dugout with a little more fight
                and will to win after what he just saw in Game 3. However, his players would demonstrate the complete
                opposite. Reshiram would step onto the plate and give up 7 runs on 9 hits through only 1.2 innings. Wario
                would replace him, and give up another 5 runs on 7 hits through 1.1 innings. A disaster for team Morgan.
                The bats of Justave just couldn't be stopped, as Morgan would find himself in a 12-0 hole at the end of
                the 3rd inning. This time, 4 of his players would not record a hit in this game, including Daisy for the
                second straight game, Dry Bones, and King K Rool, who only performed offensively in Game 2. Bob Marley
                once again pitched another complete game and shutout, this time giving up 9 hits instead of 6. With this
                loss, Justave would best Morgan in the conference series 3 games to 1, on the way to play James in the
                World Series in search of their first ever title. 
            </Passage>
            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 1</StyledMiniHeader>
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
                <div className="mvp">Game MVP: Green Dry Bones</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Reshiram (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Luigi (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 2</StyledMiniHeader>
            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(10)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
                    <Th>R</Th>
                    <Th>H</Th>
                    <Th>E</Th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td style={{color: game5.away.color}}>{game5.away.name}</Td>
                    {game5.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game5.away.R}</Td>
                    <Td>{game5.away.H}</Td>
                    <Td>{game5.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game5.home.color}}>{game5.home.name}</Td>
                    {game5.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game5.home.R}</Td>
                    <Td>{game5.home.H}</Td>
                    <Td>{game5.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: Baby Mario</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Daisy (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Luigi (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 3</StyledMiniHeader>
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
                    <Td style={{color: game6.away.color}}>{game6.away.name}</Td>
                    {game6.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game6.away.R}</Td>
                    <Td>{game6.away.H}</Td>
                    <Td>{game6.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game6.home.color}}>{game6.home.name}</Td>
                    {game6.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game6.home.R}</Td>
                    <Td>{game6.home.H}</Td>
                    <Td>{game6.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: Green Dry Bones, Koopa</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Reshiram (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 4</StyledMiniHeader>
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
                    <Td style={{color: game7.away.color}}>{game7.away.name}</Td>
                    {game7.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game7.away.R}</Td>
                    <Td>{game7.away.H}</Td>
                    <Td>{game7.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game7.home.color}}>{game7.home.name}</Td>
                    {game7.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game7.home.R}</Td>
                    <Td>{game7.home.H}</Td>
                    <Td>{game7.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: Hammer Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (3 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Reshiram (0 - 3)</span>
                </div>
            </GameSummary>



            <StyledMiniHeader style={{marginBottom: "0", color: "#FFD700"}}>World Series</StyledMiniHeader>
            <StyledMiniHeader style={{marginBottom: "0"}}>(1)<span style={{ color: "#FF9900" }}> Justave</span> v.s.
                (3)<span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>A highly anticipated rematch of Week 10, when Justave stomped James en route to their first division
                title, taking place in the World Series. Justave's faith in Bob Marley was very high after his performances
                in Games 3 & 4, and James wanted redemption badly, starting Birdo on the mound instead of Petey Piranha.
                James would come out with a bang, scoring 7 runs in the 1st, with his first 7 batters getting base hits.
                Birdo would hit a leadoff home run, and Alfonso hitting a 3 run homer to get Bob Marley off the mound
                without getting a single out. Justave would start their scoring in the 1st, and continue it into the 4th,
                scoring a Hammer Bro 2 run shot, making the score 8-7 Justave. Birdo would be taken out right before the
                Hammer Bro home run, giving up 6 earned runs on 10 hits in 3.2 innings. Now down 1, James would get back on
                the scoreboard once again, by scoring 6 runs in the top of the 5th, making it 13-8 James, including
                Wiggler and Yellow Pianta home runs. Green Shy Guy would go in as the Justave pitcher for the first time
                after Luigi gave up the 12th and 13th runs. Justave would score 1 more in the 5th, to bring the lead back
                to 4. Green Shy Guy would give up 1 run through 2 innings pitched, but then Koopa would come in to pitch,
                and give up 3 more runs in .2 innings, ending the score 17-9 in favor of James for Game 1.
            </Passage>

            <Passage>For Game 2, James went for a controversial move and took Birdo off the mound to start in favor of
                Petey Piranha. Thanks to an RBI by Green Kritter, Justave would get on the scoreboard first on the cruiser
                thanks to an RBI double scoring Bob Marley. James would respond in kind with another Birdo leadoff homer
                to center, making the score 1-1 in the 1st. Scoring would be dormant until the 4th inning, when Justave
                would get another run onto the board making it 2-1 Justave. James would once again stay in check thanks to
                Alfonso hitting an RBI, bringing Yellow Pianta home. James would continue the scoring in the 5th, scoring
                a third run off of Bob Marley, giving James the lead 3-2. Going into the 7th, Justave was in panic mode
                down 1. Petey and Birdo got through the first 6 innings, but the pitching team called in Blue Toad instead
                of Zekrom or Wiggler. Luckily for Justave, Hammer Bro, who was 0/3 for the game, hit a bloop up the middle,
                and due to the slant of the cruiser, got past Wiggler to tie the game at 3. Blue Toad would get another
                blown save on the season. Bob Marley would be taken out after 6.1 innings this game, a huge improvement
                from Game 1. Going into extras, Bob Marley would hit a 2 run homer, to extend the lead 5-3 Justave.
                James would once again respond, thanks to a Birdo 2 RBI double, tying the game once again. With Birdo on
                2nd and 2 outs, Petey Piranha, who was 0/4 with only a sac fly at this point, would strikeout looking
                off of Luigi, ending the 8th. A very quick 9th inning would take it to the 10th inning, when the tie
                would break once again, with Green Kritter hitting a 2 run homer, making it 7-5 Justave. With the bottom
                of James' lineup up, they couldn't get the job done, giving Justave the win and tying the series 1-1.
            </Passage>

            <Passage>Departing from the Cruiser and heading to Yoshi Park, James would still stick with Petey as his
                starting pitcher. Petey's woes would continue after going 0/5 in Game 2, by hitting straight into a pipe
                at his first at bat, and launching out in Koopa's glove by first base. Justave would take Petey off the
                mound quickly too, scoring 3 in the first and bring Birdo up after .2 innings. Birdo would only make it
                to the 3rd until she was taken out after giving up another 2 runs, making it 5-0 Justave. Now in the 3rd,
                Cascade was going into pitch, the leagues Most Hated Player due to his poor regular season playing performance.
                Justave would score one more in the 3rd and then one in the 4th to make it 7-0 Justave. The biggest issue
                for James was the errors, which his fielding has 3 errors in the first 2 innings, including drops in the outfield,
                and Petey Piranha sliding misses. These errors would prove very costly in continuing innings and letting
                Justave score more runs. Now in the 5th down 7, James would load the bases with no outs, Blue Yoshi would
                get James on the board with an RBI single. Cascade would get out, and then Birdo would score the 2nd RBI,
                following by Petey on a sac fly to bring in the 3rd run. Wiggler would get on base, then Zekrom would hit a ball
                to the deep infield near Green Kritter, who would throw it to Hammer Bro, who would completely miss the
                catch and cause another run to score. Dave was furious after this error. Yellow Pianta would get another
                RBI single, bringing the score 7-5 Justave. Blue Toad would end the inning on a groundout, but then
                Justave's offense would return, scoring 3 more runs in the 5th. Going into the 6th, Cascade had giving up
                5 runs on 7 hits through 2.2 innings, and was replaced by Blue Toad, who finished off the inning. In the 7th,
                Luigi quickly let up 2 run homer to Petey, making the score 10-7 Justave. After that, Luigi would lock down
                and not let James rally, giving Justave the 2-1 series lead.
            </Passage>

            <Passage>In the first ever World Series Game 4, James decided to go back to Birdo as the starter after the
            critism he faced from the other managers. Birdo would quickly give up 2 runs, to a Hammer Bro 2 run homer.
            James would score 3 in the 2nd to take the lead 3-2. Petey was finally back to his original form getting hits,
            with most of them being short slap hits into the shallow outfield. Bob Marley would be pulled in this inning,
            giving up 3 runs on 6 innings after 1.2 innings. Justave would tie it off of Hammer Bro's 2nd homer in the 3rd.
            No scoring would commence in the 4th, but Hammer Bro once again would hit a homer in the 5th, making it 5-3
            Justave. Hammer Bro would become the first player to get 3 consecutive home runs in the same game. Birdo would
            be pulled in the 7th after Koopa of all players would hit a 2 run shot to right, making it 7-3 Justave. Birdo
            would end up with a statline of 7 earned runs on 13 hits through 5 innings, with Alfonso coming in. Luigi
            continued to hold his weight. He gave up another run in the 6th to make it 7-4, but was going to hang around
            for the 7th inning. Green Bones, already 3/3 on the day, would get his 4th hit in the 7th, with this being
            a lead extending RBI to make it 8-4. In the bottom fo the 7th, Birdo would bat in another 2 runs to make it
            8-6 James, with Petey Piranha up. With a chance to get a game-tying home run, Petey would slap hit it to 3rd,
            which the defending would grab, throw it to Koopa and end the season for James. 8-6 the final score, with
            Justave winning the World Series 3 games to 1 over the defending champion.</Passage>

            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 1</StyledMiniHeader>
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
                    <Td style={{color: game8.away.color}}>{game8.away.name}</Td>
                    {game8.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game8.away.R}</Td>
                    <Td>{game8.away.H}</Td>
                    <Td>{game8.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game8.home.color}}>{game8.home.name}</Td>
                    {game8.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game8.home.R}</Td>
                    <Td>{game8.home.H}</Td>
                    <Td>{game8.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: Alfonso</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Zekrom (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Luigi (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 2</StyledMiniHeader>
            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(10)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
                    <Th>R</Th>
                    <Th>H</Th>
                    <Th>E</Th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td style={{color: game9.away.color}}>{game9.away.name}</Td>
                    {game9.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game9.away.R}</Td>
                    <Td>{game9.away.H}</Td>
                    <Td>{game9.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game9.home.color}}>{game9.home.name}</Td>
                    {game9.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game9.home.R}</Td>
                    <Td>{game9.home.H}</Td>
                    <Td>{game9.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: Green Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Luigi (1 - 2)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Blue Toad (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 3</StyledMiniHeader>
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
                    <Td style={{color: game10.away.color}}>{game10.away.name}</Td>
                    {game10.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game10.away.R}</Td>
                    <Td>{game10.away.H}</Td>
                    <Td>{game10.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game10.home.color}}>{game10.home.name}</Td>
                    {game10.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game10.home.R}</Td>
                    <Td>{game10.home.H}</Td>
                    <Td>{game10.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: Hammer Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (4 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Petey Piranha (1 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "6px"}}>Game 4</StyledMiniHeader>
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
                    <Td style={{color: game11.away.color}}>{game11.away.name}</Td>
                    {game11.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game11.away.R}</Td>
                    <Td>{game11.away.H}</Td>
                    <Td>{game11.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game11.home.color}}>{game11.home.name}</Td>
                    {game11.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game11.home.R}</Td>
                    <Td>{game11.home.H}</Td>
                    <Td>{game11.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <GameSummary>
                <div className="mvp">Game MVP: Hammer Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Luigi (2 - 2)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Birdo (2 - 1)</span>
                </div>
            </GameSummary>






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