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

export default function Week7Recap() {
    const game1 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 0, 1, 0, 0, 2, 0, 0, 2], R: 5, H: 19, E: 0, LOB: 10 },
        home: { name: "Isaac", color: "#3586E8", scores: [0, 0, 0, 0, 5, 0, 0, 0, 0], R: 3, H: 12, E: 0, LOB: 6 },
    };
    const game2 = {
        away: { name: "Marge", color: "#6AA84F", scores: [0, 0, 0, 0, 1, 0, 0], R: 1, H: 7, E: 0, LOB: 2 },
        home: { name: "James", color: "#F1C232", scores: [0, 2, 2, 1, 4, 4, "X"], R: 13, H: 24, E: 0, LOB: 8 },
    };
    const game3 = {
        away: { name: "Brendan", color: "#CC0000", scores: [0, 0, 0, 2, 9, 0, 3], R: 14, H: 23, E: 0, LOB: 8 },
        home: { name: "Trocean", color: "#9900FF", scores: [1, 0, 1, 2, 0, 1, 0], R: 5, H: 18, E: 0, LOB: 8 },
    };
    const game4 = {
        away: { name: "THANdrew", color: "#999999", scores: [3, 0, 5, 0, 0, 0, 0], R: 8, H: 14, E: 0, LOB: 5 },
        home: { name: "Morgan", color: "#FF00FF", scores: [0, 1, 3, 0, 4, 0, 1], R: 9, H: 11, E: 0, LOB: 2 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Week 7 Recap</StyledHeader>
            <GenImage src="/headlines/week7.jpg" alt="Week7"/>
            <ArticleMeta>
                Written by: PMBL News — November 9, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>What an exciting week. Comebacks, big playoff previews, controversial umpiring, and impressive pitching.
                Only 3 weeks away from the playoffs. Will a bottom feeder sneak up and make the dance?
            </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#FF9900" }}> Justave</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>A huge matchup between the two best record teams in the league. Both starting All-Star pitchers,
                Justin Nascimento and Bob Marley, will be facing off against each other in this much anticipated
                matchup. The interesting storyline was the fact that Justin Nascimento would be pitching against
                his own team he manages, sparking concern about rigging the game after the Claudius case.
                It started slow, with the 1st 2 innings being scoreless on both sides. Justave would strike the
                scoreboard first, going up 1-0 in the top of the 3rd. It would stay 1-0 until the bottom of the 5th, until
                Isaac's item usage would strike again, getting a Tiny Kong inside the park home run. Isaac, who's known
                for his incredible item usage, has been very known for taking advantage of outfield mishaps on his
                opponent. Captain DK would hit a solo shot quickly after to make it 3-1 Isaac in the 5th, but Justave would
                not pull Bob Marley. In the 6th, Green Kritter would step up to the plate, and launch a nuke into left
                field. Angled toward the foul pole, it was shown to be still in play, but the umpire called it foul. Many
                fans were furious by this call, while Manager Isaac sat in silence about that controversial call. Regardless,
                Justave would tie it in 3-3 in the top of the 6th.
            </Passage>

            <Passage>Into the 7th, Justin Nascimento would shutdown once again. Bob Marley would respond in kind in the
                bottom of the 7th, marking the 4th time this season he's pitched 7 innings. This would be the first time
                that both pitchers would pitch all 7 innings, and they would both continue into extra innings. In the top
                of the 8th, Justave would load the bases, and Luigi would get up to bat with 2 outs, and he would finally
                receive the elusive "RBI Chance" screen. He would ground out. Justin Nascimento would become the first pitcher
                to ever pitch 8 full innings. In the bottom of the 8th, Bob Marley would be done after 1 hitter, bringing
                in Luigi. Luigi would strike out Dixie to end the 8th, going into the 9th. Justin Nascimento would be subbed
                out for Donkey Kong, who would give up a 2 run to Hammer Bro to break the tie. Luigi would be able to finish
                out the bottom of the 9th, and that would be it. Justave would defeat Isaac in a beautiful 5-3 pitching duel.
            </Passage>
            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(9)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
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
                <div className="mvp">Game MVP: Hammer Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Luigi (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Donkey Kong (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#6AA84F" }}> Marge</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>For the first time in over a year, James decides not to go to the Daisy Cruiser. After his really
            bad offensive output over the psat couple of weeks, he decides to take his team to Yoshi Park against Marge.
            Today would be a breath of fresh air and a much needed offensive burst for James. James' bats would immediately
            start blazing. Birdo would pitch an absolute masterclass. Pitching all 7 innings and giving up only 1 ER and 7
            hits, it is the best stat line we have ever seen from a starting pitcher. The bats would also be coming
            from unlikely sources for James, with Abu Patel getting 2 RBIs after replacing Cascade, and Blue Yoshi, winning
            Game MVP and hitting 4/4, 1 run, and 2 RBIs. Marge's bats once again were ineffective, with their only offense
            coming off of Peach's triple and Yamek's subsequent RBI single in the 5th. The real story of this game was Birdo,
            who had a terrible performance in the All-Star game, having an amazing day, both batting and pitching. Yellow
            Toad was also a great storyline, getting to pitch in the 6th down 12, and striking out Wiggler, his only batter.
            This would be only the second time a Yoshi would win Game MVP (Pink Yoshi, Season 1).</Passage>

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
                <div className="mvp">Game MVP: Blue Yoshi</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Reshiram (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Red Kamek (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#9900FF" }}> Trocean</span> v.s.
                <span style={{ color: "#CC0000" }}> Brendan</span></StyledMiniHeader>
            <Passage>After a wild ending to last weeks game, Brendan looks to keep up the momentum with Blooper as his
            pitcher. Against Trocean, this matchup quickly became "The Cancun Bowl". Trocean even decided to pick up
            Claudius off of waivers after managerial approval due to his suspension, and they were gonna start him at
            pitcher. Right away, the difference from his Week 2 start was astounding, going through the 1st 3 batters
            easily, and striking out Bowser Jr. Kimmy, who was getting picked on by the media earlier this week for
            not recording an RBI yet, finally got one in the 1st, giving Trocean the 1-0 lead. Blooper struggled early,
            but would lock back in going forward. Blooper would pitch 4 innings, giving up 11 hits and 4 earned runs.
            Down 4-2 going into the 5th, Brendan's bats had enough of losing, and started swinging. Brendan would score
            9 in the 5th, going up 11-3. Claudius would give up 3 of those, with Mario coming in and giving up the other
            6. Blooper would be pulled in the 5th, but he did record 2 strikeouts, one in the 3rd and one in the 4th.
            Bowser Jr would pitch the last 3, and only give up 1 run in the 14-5 victory. Brendan now has won back to back,
            and Trocean, sitting at 1-6, can no longer win the division.</Passage>

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
                <div className="mvp">Game MVP: Blue Dry Bones</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Blooper (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Claudius (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#FF00FF" }}> Morgan</span> v.s.
                <span style={{ color: "#999999" }}> THANdrew</span></StyledMiniHeader>
            <Passage>Morgan inserting Diddy into his lineup truly changed the offense for the better last week. Looking
            to win back to back, he now plays THANdrew. Unfortunately for him, THANdrew chose the Daisy Cruiser. THANdrew
            would start the game by getting an PMBL record by his first 7 batters would all get a hit. 7 straight singles
            would start THANdrew up 3-0 in the 1st. Morgan would get an RBI from Yellow Yoshi in the 2nd to go back down 2.
            In the 3rd inning, THANdrew would load the bases for Green Noki, a player who Morgan has shown much
            hatred toward. Green Noki would wind up and crack a grand slam to left, adding onto Blue Kritters sacrifice fly
            earlier in the inning to go up 8-1. Morgan in disbelief and despair, hit team would slowly crawl their way back
            into the competition. In the 3rd, King K Rool would hit a 3 run homer to bring the score back to 8-4. Wario's
            pitching completely shut down THANdrew's bats after the Green Noki grand slam. THANdrew's team on the heels,
            they put in Blue Kritter in to pitch for the first time ever. In the 5th, Reshiram would get an inside the
            park home run to tie the game back up to 8-8. The collapsing THANdrew couldn't get a hit off of Daisy in the 7th,
            and on the first pitch in the bottom of the 7th, Dry Bones would walk it off with a homer to left, winning
            the game for Morgan 9-8. Morgan, along with Brendan, has won his 2nd straight, and is now only a game back
            of THANdrew, which they play again in Week 10. </Passage>


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
                <div className="mvp">Game MVP: Dry Bones</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Daisy (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Blue Kritter (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/5, 4 Runs, 4 RBIs, 1 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 7 IP, 7 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description">
                        (W) 7 IP, 7 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/5, 4 Runs, 4 RBIs, 1 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 7 IP, 7 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">J-Nasty</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        1/4
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        8 IP, 16 Hits, 3 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Green Noki</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description">
                        Grand slam. That's it.
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