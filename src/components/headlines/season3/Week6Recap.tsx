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

export default function Week6Recap3() {
    const game1 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [0, 1, 2, 2, 3, 0, 0], R: 8, H: 21, E: 0, LOB: 10 },
        home: { name: "Trocean", color: "#9900FF", scores: [3, 0, 0, 0, 0, 4, "X"], R: 11, H: 16, E: 0, LOB: 6 },
    };
    const game2 = {
        away: { name: "James", color: "#F1C232", scores: [1, 0, 0, 0, 0, 1, 1], R: 33, H: 45, E: 1, LOB: 3 },
        home: { name: "Marge", color: "#6AA84F", scores: [1, 0, 2, 0, 0, 2, 0], R: 15, H: 28, E: 1, LOB: 4 },
    };
    const game3 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 0, 0, 0, 0, 0, 0], R: 4, H: 16, E: 1, LOB: 4 },
        home: { name: "THANdrew", color: "#999999", scores: [0, 0, 0, 0, 0, 0, "X"], R: 8, H: 12, E: 0, LOB: 5 },
    };
    const game4 = {
        away: { name: "Brendan", color: "#CC0000", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 0, E: 0, LOB: 0 },
        home: { name: "Isaac", color: "#3586E8", scores: [0, 0, 0, 0, 0, 0, "X"], R: 0, H: 0, E: 0, LOB: 0 },

    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Week 6 Recap</StyledHeader>
            <GenImage src="/headlines/3week6.jpg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — March 15, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>In a week filled with sorrow and grieving, baseball is the light and the comfort the fans
            and managers needed. The league sends its condolences to Gramms and Geek Squad.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#FF00FF" }}> Morgan</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>After a very beautiful and emotional funeral procession for Gramps, the game began in DK jungle with
            the 2nd matchup of Morgan vs Trocean this season. Despite grieving, Gramms would be playing in the wake of
            her dead husband Gramps. Morgan's team would quickly score a run off of Wiggler in the 1st in honor of Gramps
            thanks to captain Daisy. The honeymoon would be short lived, as Trocean's new lineup would put up 6 big runs
            in the 2nd, quickly taking Danny B off the mound quickly. Light Blue Yoshi started the scoring for Trocean in
            his first hit in over 2 seasons. Morgan's team would fight back by scoring 3 in the 3rd off of Wiggler, taking
            him off the mound after 2.1 innings, bringing in Diddy Kong. Trocean's offense wouldn't stop in the 3rd, scoring
            5 more runs to make the score 11-4 Trocean, awfully similiar to their first matchup. Peack would only pitch one
            inning after giving up 3 runs in the 3rd off of a Brown Kritter home run. Morgan would get a Dry Bones homer
            in the 4th to make it 11-7 in the 4th, and would tag on another run in the 6th thanks to a Danny B sacrifice
            fly to bring it within 3. Donkey Kong would come in for Trocean in the 6th, and pitch into the 7th. Morgan would
            get runners on 1st and 2nd, but Donkey Kong would clamp down and earn the save, getting Trocean their first
            win since Week 1. Wiggler would earn the win, and Brown Kritter would get Game MVP. Gramms would go a perfect
            2/2 with one RBI.</Passage>

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
                <div className="mvp">Game MVP: Brown Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Wiggler (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Danny B (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Donkey Kong (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#6AA84F" }}>Marge</span></StyledMiniHeader>
            <Passage>In Week 10 of Season 1, Matt and James came together at Yoshi Park to play a game that was nicknamed
            "The Yoshi Park Home Run Derby", culminating in a 15-14 Matt victory over the eventual World Series champion.
            This was the highest scoring game at that time, until it was beaten last season. As Marge was 0-5 coming into
            this game, they would start this game up 5-0 against James quick. Everything was going smoothly until Matt showed
            up to the dugout late, as he claimed he was "taking a shower". This would quickly force James to tie the score,
            scoring 5 in the 3rd. Marge would respond by scoring 4 more in the 3rd to go back up 9-5. James would then
            turn his offensive incompetence into absolute rage and fury. He would score 9 in the 4th, and 8 in the 5th
            to make it 22-9 James, and absolute shock to the fans in the stadium. Bowser Jr's repeated star hits continued
            to be a problem for any opposing outfield. James would score 2 more in the 6th to make it 24-9 James. This
            would be the most that any team has ever scored in a single game. This record breaking game would not stop there,
            as Marge would attempt to bring it back by scoring 6 runs in the bottom of the 6th to make it 24-15 James,
            officially making this the highest scoring game in PMBL history. James was not done. He scored another 9 runs
            in the top of the 7th, making the score to a final 33-15 James. The first game that has ever surpassed 40 runs
            by both teams and 30 runs by one team. The individual stats are even crazier. Bowser Jr and Fire Bro became
            the first players to ever go 7 for 7, and Fire Bro set a new record for RBIs with 9. Fire Bro even recorded
            a strikeout at pitcher against Geek Squad. This game also included 13 different pitchers, with a record 8 of them
            coming from Marge. Everyone on Marge's team pitched except for Green Shy Guy. There was a total of 12 home runs
            hit in this game, coming from 8 different players. Despite hitting 3 home runs for Marge, Green Kritter and
            his team would head to 0-6.</Passage>

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
                <div className="mvp">Game MVP: Fire Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Red Kritter (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Green Kritter (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#FF9900" }}> Justave</span> v.s.
                <span style={{ color: "#999999" }}> THANdrew</span></StyledMiniHeader>
            <Passage>After the absolute offensive explosion seen in the game prior, THANdrew vs Justin would be a lot
            less intense in terms of high end scoring. THANdrew would put one on the board in the bottom of the 1st at
            the Cruiser thanks to Boomerang Bro, giving Boo his first earned run of the year. Justave's outfield would
            then put runs on the board in the 3rd, getting one from a sac fly from Tonka, taking Blue Kamek out of the
            game. Birdo would come in and quickly give up a hit to Claudius, giving Justave the 2-1 lead. With Manager
            Dave watching from home with "basketball related injury", the dugout was a little quieter than usual. Birdo
            would drive in 2 after giving up the go ahead run at her next at bat, large in part to Gray Shy Guy and
            Claudius napping in the outfield. Manager Justin was incredibly upset at his outfield, yet decided to call
            out the upper management and higher ups in the league, calling for unfair play against the Justave organization.
            The Justave organization has received a verbal warning due to their ongoing complaints this season against the
            league. The franchises complaining would continue after THANdrew would score 5 more in the 5th, starting with
            Red Pianta getting his 3rd hit of the day, Abu Patel driving in 2 more runs, and Blue Yoshi getting a sac fly.
            Mario on the mound would be the main culprit for this fall apart, giving up 4 of those 5 runs before King Boo
            gave up the 5th. Despite his poor pitching performance, Mario would hit a solo shot in the 6th to make it
            8-3 THANdrew, and with King Boo and Boo getting on base, Birdo was able to lock down and leave them stranded.
            Kaguya would get an RBI in the 7th to make it 8-4, but Mario would ground out to end the inning and the game,
            giving THANdrew their 3rd straight win, and taking solo possession of 1st in the West Division going into
            the All-Star Break. Following the game, Justin heavily critized Claudius and Gray Shy Guy for their outfield
            performance, demanding their heads. </Passage>

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
                <div className="mvp">Game MVP: Red Pianta</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (3 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Mario (1 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>For the 3rd rendition of The Battle of 726, Isaac would take Brendan to the DK Jungle, with Saber
            starting on the mound against Waluigi. With a new batting lineup, he looked to fix his offensive slump. In
            the first few innings, nothing was working. Brendan on the other hand scored 4 in the 3rd to open the scoring
            after loading the bases. Petey would be the driving force has he would get the first RBI, followed by Funky,
            Dixie, and Baby Peach all in 1 inning. Petey would get up again in the 4th and score a 5th run to make it 5-0.
            He was also locking down at 2nd bases up until that point. However, the errors once again became a major
            problem. Waluigi would let up 2 in the 4th, with 1 runner reaching base after a Petey Piranha error. Waluigi
            would then get subbed out for Wario. Petey Piranha would have 2 more errors in the 5th, one on a score, giving
            Isaac 4 more runs and the lead, 6-5. Petey would make up for some of his mistakes by tying the game in the 6th
            off of a sacrifice fly to make it 6-6, however he would give up his 4th error of the game, tying the record
            for most by one team with Brendan 2 weeks ago against Justave. In the top of the 7th, things were looking
            well for Brendan. With the bases loaded, Wario would step up to the plate only going 1/3 for the day. Despite
            the anticipation from the crowd with 2 outs to star hit, he would not. Flying out to center field with the
            bases loaded. Bowser would get out the jam. In the bottom of the 7th, Wario would get one out thanks to
            Blue Noki's bad base running, but then Blue Toad, who was 3/3 so far on the day, would hit a star hit at Bertha
            who would error for the 5th error of the day for Brendan, and drive home Blue Pianta winning the game for Isaac.
            Brendan's errors would kill him once again, losing the game by one, as Isaac gets a much needed win to stay
            in the division race behind THANdrew. </Passage>

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
                <div className="mvp">Game MVP: Blue Toad</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bowser (1 - 2)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Wario (4 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Fire Bro</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description">
                        7/7, 3 Runs, 9 RBIs, 1 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description">
                        (W) 5 IP, 9 Hits, 3 ER, 1 K
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Bowser Jr</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        7/7, 5 Runs, 3 RBIs, 1 T
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        1.1 IP, 6 Hits, 3 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Piggie</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        4/6, 3 Runs, 4 RBIs, 1 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Light Blue Yoshi</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>Trocean</span></div>
                    <div className="description">
                        First game in 2 seasons, gets go-ahead home run
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