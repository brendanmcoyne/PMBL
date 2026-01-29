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

export default function Week1Recap3() {
    const game1 = {
        away: { name: "Isaac", color: "#3586E8", scores: [0, 0, 2, 6, 3, 2, 4], R: 17, H: 26, E: 0, LOB: 8 },
        home: { name: "Justave", color: "#FF9900", scores: [0, 0, 0, 0, 0, 0, 1], R: 1, H: 13, E: 1, LOB: 10 },
    };
    const game2 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [0, 1, 0, 0, 0, 0, 0], R: 1, H: 13, E: 0, LOB: 8 },
        home: { name: "James", color: "#F1C232", scores: [2, 3, 0, 0, 0, 1, "X"], R: 6, H: 17, E: 0, LOB: 7 },
    };
    const game3 = {
        away: { name: "Marge", color: "#6AA84F", scores: [1, 0, 2, 0, 3, 1, 0], R: 7, H: 17, E: 1, LOB: 6 },
        home: { name: "Trocean", color: "#9900FF", scores: [0, 0, 3, 3, 1, 2, "X"], R: 9, H: 15, E: 1, LOB: 7 },
    };
    const game4 = {
        away: { name: "THANdrew", color: "#999999", scores: [0, 0, 1, 0, 1, 0, 1], R: 3, H: 12, E: 1, LOB: 5 },
        home: { name: "Brendan", color: "#CC0000", scores: [0, 0, 2, 0, 2, 0, "X"], R: 4, H: 10, E: 1, LOB: 7 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Week 1 Recap</StyledHeader>
            <GenImage src="/headlines/3week1.jpg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — January 25, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>With college coming to an end, the PMBL season is just beginning. New rules, new players, new teams.
                Excitement fills the air for all 8 teams, with new rosters and new dreams. Lets begin!</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#3586E8" }}> Isaac</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>Coming off of 7-3 records, the 2 best teams of last years season sqaure off at the brand new
                stadium, Luigis Mansion. Justave, coming off high and mighty after their World Series championship, would
                surprisingly not start Pitcher of the Year Bob Marley, and instead would turn to Kaguya. Isaac, the odds-on
                favorite to win the World Series, starting with Blue Pianta on the mound, would play pretty well for his
                second ever start, going 2.2 IP and allowing 6 hits. Kaguya would give up 2 earned runs in the 3rd before
                being taken out in the 3rd, but then the slaughter began. With Justave's team hoping for success once again,
                they would not find it here, as Isaac would absolutely steamroll Justave's team, going up 17-0 after the top
                of the 7th. This would be the first game in PMBL history that a team would have to resort to their 6th
                pitcher, and each of the 6 pitchers gave up at least 1 run. To add to the pain, Justave had 4 players not
                record a hit, including Isaac's former player Brown Kritter. Justave would tack 1 on to prevent the largest
                shutout in PMBL history in the 7th, but the damage was already done. The World Series hangover was definitely
                visible for this franchise, as they hope to bounce back next week.</Passage>

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
                <div className="mvp">Game MVP: Blue Dry Bones</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Blue Pianta (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Kaguya (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#FF00FF" }}>Morgan</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>The old battle of Buswell returns, with this iteration heading to Wario City, as James looks to make
                it back to the World Series with much less hitting power and much more chemistry. Many managers have discussed
                Morgan's team being a very character filled team this year, returning his fan favorite outfield from Season 1,
                and bringing in core characters such as Nose and Green Toad. The old outfield which will remain nameless would
                get on base quick, but Gramps would immediately ground into a triple play to end the 1st. James would quickly
                put 2 on the board with a Kimmy RBI and Red Kritter solo home run. Morgans two female stars, Daisy and Peach would
                each hit doubles in the 2nd, however for the first time ever, Peach would hit the leagues first Ground rule
                double, to make the sure 2-1. In the bottom of the 2nd, James would get a Bowser Jr  3-run inside the park
                home run, making the score 5-1. The ineptitude of Gramps in this game continued to haunt Morgan in this game,
                slipping multiple times in the outfield. James would tack on another in the bottom of the 6th, with Bowser
                Jr scoring his 3rd run off of Kimmy's 2nd RBI. Morgan in the 7th would get the bases loaded thanks to Danny B's
                4/4 effort and Dry Bones 3/4 performance, but when an 0/3 Gramps stepped up to the plate, he would hit the ball,
                bounce off of Red Kritters, glove and into MLK's glove to the end game 0/4. Morgan was enraged, as he loses
                to James in Week 1 again. James would get a full game out of his 2nd year player Zekrom, giving up only
                1 run on 13 hits.</Passage>

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
                <div className="mvp">Game MVP: Bowser Jr</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Zekrom (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Daisy (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#6AA84F" }}>Marge</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>With the bottom 2 teams from last year facing off once again in Week 1, Trocean looks to avenge
                last years Week 1 loss in the 11 inning thriller. It didn't start out well for them, as Marge jumped out
                to a 3-0 lead in the 3rd. Trocean would respond with 3 in the bottom of the 3rd to tie it 3-3. This was in
                part to Marge's old player King Boo sending a 2-run shot to left field. In the bottom of the 4th, Trocean
                would strike again with a 2 run DK home run. Luigi's rough outing after Boo's 2 inning shutout went only 1.2 IP,
                7 hits, 6 runs, and a strikeout on Wiggler. Marge would then tie it in the 5th with a King K homer, effectively
                taking Donkey Kong out of the game as pitcher. Sherpa, who started 0/2 today to start, would finally get his
                first PMBL hit in the 5th with a shot to right field. Moments later, he would steal 2nd, getting the first
                steal of the PMBL season. DK would drive Sherpa in to take the lead 7-6, then Marge would respond again with
                an RBI from Green Kritter. Baby DK would get his second RBI of the game in the bottom of the 6th, along
                with Sherpa getting his first ever RBI to extend the lead by 2. Diddy would shut down the bottom half
                of Marge's lineup in the 7th, to give Trocean their 9-7 victory in the jungle. This would be Trocean's first
                time above .500 in the franchises history, as their start their season 1-0.</Passage>
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
                <div className="mvp">Game MVP: Donkey Kong</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Diddy Kong (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Green Kamek (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#999999" }}>THANdrew</span> v.s.
                <span style={{ color: "#CC0000" }}> Brendan</span></StyledMiniHeader>
            <Passage>To end a pretty uneventful first week of the season, Brendan would play THANdrew at the Daisy Cruiser
                with a little bit of controversy due to THANdrew taking both Birdo and Purple Toad. Brendan traded Diddy Kong
                before the week started to Trocean in return for Waluigi, who he selected to be his captain. A good pitching
                duel was set to take place between Wario and Birdo, and both of them did not disappoint. No scoring would
                happen for the first 2 innings, but Purple Toad in his debut would get his first RBI, driving in the rookie
                Bonnie. Brendan would respond in the bottom of the 3rd, with Funky Kong getting a 2 run homer to center.
                Scoring would open up again in the 5th, with a very shallow Blue Magikoopa solo homer on team THANdrew,
                once again sparking controversy about their alleged "corked bats". With the game 2-2, Funky Kong would
                once again get a 2 run homer, this time driving in Petey Piranha, making it 4-2. No scoring would happen in
                the 6th, to bring the game to the 7th. Wario would immediately be subbed out for Waluigi, who would quickly
                get 2 outs. Diddler and Blue Shy Guy would both get hits, putting them on 1st and 2nd. Bonnie would step up,
                and hit a ball right at Bertha, bouncing off her glove for an error and loading the bases. Purple Toad now
                would step up and get his 2nd RBI of the game, bringing in Diddler and going 4/4 on the day. Then Abu Patel
                would step up to the plate, 0/3 for the day, and only down 1 with the bases loaded and 2 outs on the board. He
                would hit it right to Bertha, who would throw it to Petey Piranha on second, but both Petey and Purple Toad
                would get hit by the POW. Luckily for Brendan, his right fielder Baby Peach was able to get there and throw
                it to Petey to get the out on 2nd, to win the game 4-3 for Brendan. Birdo would pitch the full game and still
                get the loss, and Waluigi would record a save.</Passage>
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
                <div className="mvp">Game MVP: Funky Kong</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Wario (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Birdo (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Waluigi (1)</span>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Donkey Kong</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>Trocean</span></div>
                    <div className="description">
                        4/4, 3 runs, 4 RBIs, 2 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Zekrom</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description">
                        (W) 7 IP, 13 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Donkey Kong</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>Trocean</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/4, 3 runs, 4 RBIs, 2 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        4.1 IP, 11 Hits, 6 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Piggie</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                    <div className="description">
                        4/4, 2 Runs, 1 RBI
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Blue Noki</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description">
                        5/5, 3 Runs, 2 RBIs
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