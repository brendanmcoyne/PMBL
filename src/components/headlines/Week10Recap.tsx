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
        away: { name: "Marge", color: "#6AA84F", scores: [0, 2, 1, 0, 0, 0, 0], R: 3, H: 9, E: 1, LOB: 4 },
        home: { name: "Brendan", color: "#CC0000", scores: [2, 0, 3, 3, 0, 4, "X"], R: 12, H: 19, E: 0, LOB: 3 },
    };
    const game2 = {
        away: { name: "Trocean", color: "#9900FF", scores: [0, 0, 4, 0, 0, 3, 0], R: 7, H: 19, E: 0, LOB: 9 },
        home: { name: "Isaac", color: "#3586E8", scores: [2, 0, 0, 0, 0, 1, 0], R: 3, H: 10, E: 1, LOB: 3 },
    }
    const game3 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 0, 7, 1, 1, 8, 0], R: 17, H: 22, E: 0, LOB: 4 },
        home: { name: "James", color: "#F1C232", scores: [1, 0, 0, 0, 0, 0, 0], R: 1, H: 9, E: 1, LOB: 3 },
    };
    const game4 = {
        away: { name: "THANdrew", color: "#999999", scores: [0, 1, 2, 3, 0, 1, 1], R: 8, H: 15, E: 1, LOB: 2 },
        home: { name: "Morgan", color: "#FF00FF", scores: [4, 0, 0, 2, 0, 3, "X"], R: 9, H: 20, E: 0, LOB: 10 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Week 10 Recap</StyledHeader>
            <GenImage src="/headlines/week10.jpg" alt="Week10"/>
            <ArticleMeta>
                Written by: PMBL News — November 29, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>An incredible final week of the season brought some amazing storylines, playoff shakeups, and even
                more questions regarding how the playoffs will go. The 4 playoff teams have officially been set. Let's see
                how everyone did this past week first.
            </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#6AA84F" }}> Marge</span> v.s.
                <span style={{ color: "#CC0000" }}> Brendan</span></StyledMiniHeader>
            <Passage>In the first every Week 10 PMBL game that means absolutely nothing for the playoffs, this game was
                filled with surprises. Bowser would quickly hit a 2 run shot to take the lead in the home run leaderboard,
                while Peach and Yellow Kamek would both get RBIs in the 2nd to make the score 2-2. King Boo would then hit
                a solo shot in the 3rd to give Marge a 3-2 lead. After that, Blooper would completely lock down their
                offense. While Brendan's offense would explode for the final time this year, putting 10 more runs on the
                board, highlighted by Diddlers 3 run homer and Blue Pianta's 4/4 4 RBI performance. However, the greatest
                part of this game in Brendan's eyes was Blooper. Blooper would pitch his first ever complete game, going
                all 7 innings and only giving up 3 earned runs on 9 hits. Blooper would also hit his first every home run,
                which had manager Brendan jumping for joy. Marge knew it would be a bad offensive day if Peach was their
                best hitter, who surprsingly went 2/3 with an RBI. In both teams final game of the year, Brendan would
                finish 4-6, despite being a big disappoint after last years World Series run, but a big improvement after
                starting 0-3. Marge on the other hand would go 3-7, ending worse than the 4-6 record from last year.
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
                <div className="mvp">Game MVP: Diddler, Blue Pianta</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Blooper (2 - 2)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Boo (1 - 6)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#3586E8" }}> Isaac</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>The only playoff implication that would come with this game would be if Issac wins, he would take the
                #1 seed. With Betty White out again for the 2nd week, he decided to rest a few starters and give Paragoomba
                and Jack White a chance to play this year. Justin Nascimento would play in the outfield today instead of
                pitch, giving Jack White his first ever start. Trocean on the other hand decided to give old Isaac player
                Grayson McKean the start for the first ever female mii start in PMBL history. Isaac would score quickly
                in the 1st, and to no ones surprise, those runs would come off of Funky and DK home runs. Grayson McKeans
                first two hits allowed in the PMBL would be solo shot home runs. After that however, Grayson began to lock
                down Isaac's offense. Depending on the which team you look at, you could either say Trocean's bats started
                blazing or Paragoombas defense was atrocious. Slowly running around in center field helped Trocean gain
                a huge advantage against the West Division winner. Dark Bones would have 5 RBIs in this game, with a huge
                2 RBI triple to get Trocean on the board in the 3rd, ending Jack White's pitching day. Trocean would shockingly
                end up winning 7-3, with Grayson McKean pitching a complete game. She only gave up 3 earned runs on
                10 hits. Paragoomba unsurprisingly would go 0/3, making him have the worst batting percentage in PMBL
                this year. Triangle would be a close 2nd, also going 0/3 in this game, making her 1/8 on the season.
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
                <div className="mvp">Game MVP: Dark Bones</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Grayson McKean (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Jack White (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>A huge matchup to decide not only who wins the East Division but also the #1 seeds created multiple
                storylines. However, playoff seeding wasn't the only thing being played for. The batting percentage title
                was on the line between fan favorite Green Toad and underdog Blue Toad, and also the Pitcher of the Year
                between Birdo and Bob Marley would most likely be decided by this. Petey would open for James however,
                so Birdo would come in for relief once Petey was tired. Petey would quickly get James on the board 1-0
                with a home run to tie the home run lead back up with Bowser. Bob Marley would stay calm. Once Petey got
                tired in the 3rd inning, Birdo would come in. To everyone's absolute shock, she would absolutely implode
                on the mound, starting one of the most lopsided games in PMBL history between two highly competitive
                games. Birdo would pitch .2 innings, giving up 5 earned runs on 5 hits. The next 5 innings would be
                an absolute annihilation of everything that made James' team great. Birdo would be subbed out for Blue
                Yoshi, completely killing outfield synergy. James would have to sit there in the dugout and watch his
                team give up home runs. 17 straight runs for Justave. The batters on team James couldn't hit a single
                thing. Bob Marley would not finish out the game, but he did win Game MVP for pitching 6.1 innings giving
                up 1 earned run, while also hitting a grand slam due to no outfield synergy. Justave would win, head to
                7-3, and clinch the #1 seed, and await to see who they play in the playoffs.
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
                <div className="mvp">Game MVP: Bob Marley</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (5 - 3)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Birdo (5 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#999999" }}> THANdrew</span> v.s.
                <span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>The biggest game in PMBL regular season history turned out to be an absolute thriller. The stakes were
                simple. Win and you're in, lose and you're out. An appetizer to the playoffs. Morgan would quickly get out
                to a 4-0 lead in the bottom of the 1st, getting Green Kamek out after .1 innings, giving up 3 runs. Waluigi,
                per usual, would come in next. THANdrew would get on the board at the start of the 2nd with a rare Blue Kritter
                hit and RBI. Despite getting the offense going, the defense looked to be in shambles. Shockingly, Waluigi
                would be pulled before recording an out in the 2nd, thus bringing in Larry Cuc. A horrific move for the
                outfield, destroying synergy on both sides of the field. Larry Cuc would begin to lock down on defense, and
                even record a strikout against Reshiram. THANdrew's defense would begin to put points up. Blue Kritter and Red
                Kritter would each hit home runs in the 3rd and 4th innings respectively, and with the help of Paratroopa's
                2 RBI day, THANdrew would take the lead 6-4, despite having Waluigi at center.
            </Passage>

            <Passage>Despite Morgan's erotic "worried" noises, his team would come back to tie it after putting Wario in
                to pitch. Wario and Diddy Kong would each record RBI singles in the 4th to tie it back up 6-6. Unlike last
                game where the James pitching staff caused a landslide of runs after killing outfield synergy, these would be
                the first 2 runs since the THANdrew pitching staff put Waluigi in center. No scoring would commence in the 5th,
                but Green Kamek would get a bloop RBI single into right for THANdrew to take back the lead by 1. Larry Cuc,
                still on the mound after 4.2 innings, would start to get tired. Wario would get on base thanks to an error
                by Blue Kritter, a costly one at that. Next pitch, King K Rool would drill a home run to right field, giving
                Morgan an 8-7 lead. Yellow Yoshi would then tack on another run off of Nose to make the lead 9-7 Morgan.
                THANdrew would then come up to bat in the 7th with the top of his lineup. Nose and Waluigi would both get
                out. Red Kritter, down 2, would hit a solo shot to right to make the score 9-8 Morgan. If the error by
                Blue Kritter wasn't committed, then this would be a tie game. Unfortunately for THANdrew, Fire Bro would
                get on base, but then Larry Cuc would ground out. Morgan wins an incredible regular season finale 9-8.

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
                <div className="mvp">Game MVP: King K Rool</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Wario (1 - 2)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Larry Cuc (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">King K Rool</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/4, 2 Runs, 5 RBIs, 2 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        Scored go-ahead run to clinch playoffs
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Bob Marley</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description">
                        (W) 6.1 IP, 9 Hits, 1 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Bowser</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/4, 2 Runs, 3 RBIs, 1 HR, 1 Triple
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="description">
                        None, they were all bad.
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Blooper</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                    <div className="description">
                        Complete game pitched. Hit his first home run too.
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