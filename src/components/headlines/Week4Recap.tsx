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

export default function Week4Recap() {
    const game1 = {
        away: { name: "Justave", color: "#FF9900", scores: [4, 0, 2, 0, 0, 3, 7], R: 16, H: 26, E: 0, LOB: 4 },
        home: { name: "Marge", color: "#6AA84F", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 5, E: 0, LOB: 2 },
    };
    const game2 = {
        away: { name: "James", color: "#F1C232", scores: [3, 0, 3, 3, 5, 4, 3], R: 21, H: 30, E: 2, LOB: 7 },
        home: { name: "Trocean", color: "#9900FF", scores: [0, 1, 0, 1, 0, 0, 4], R: 6, H: 18, E: 0, LOB: 10 },
    };
    const game3 = {
        away: { name: "Brendan", color: "#CC0000", scores: [2, 2, 0, 0, 0, 0, 2, 2], R: 8, H: 16, E: 1, LOB: 7 },
        home: { name: "THANdrew", color: "#999999", scores: [0, 0, 3, 3, 0, 0, 0, 0], R: 6, H: 14, E: 0, LOB: 7 },
    };
    const game4 = {
        away: { name: "Isaac", color: "#3586E8", scores: [0, 0, 0, 1, 0, 4, 1], R: 6, H: 17, E: 1, LOB: 7 },
        home: { name: "Morgan", color: "#FF00FF", scores: [0, 1, 0, 3, 0, 0, 0], R: 4, H: 11, E: 1, LOB: 5 },

    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Week 4 Recap</StyledHeader>
            <GenImage src="/headlines/week4.jpg" alt="Week3"/>
            <ArticleMeta>
                Written by: PMBL News — October 8, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Week 3 was sort of a down week for the league as a whole, with a few non competitive games and
            very few storylines. However, Week 4 bounced back hard, giving PMBL fans the content and the gameplay that
            each and every devoted fan desires. Buckle up.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#6AA84F" }}> Marge</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>The first match of the Computer Engineering Clash this season between Justin and Matt now features new co-managers,
            but the same storylines. Their first ever matchup in Season 1 was the Shy Guy Tribute Game, one of the most
            famous and electric games ever played in the PMBL. Red Shy Guy and Green Shy Guy were shot and hospitalized
            right before this game, and Justin's team still went on to win. Koopa, the shooter, was found guilty and
            sentenced to a 3 game suspension.</Passage>

            <Passage>Today marked the turning point. Koopa was set to play in his first ever PMBL game, alongside the person
            he shot, and did not disappoint. Despite shooting his now teammate Green Shy Guy, Koopa created great
            chemistry with him and went on to have a very serviceable game for Justave, going 3/5, 1 run, and an RBI.
            To no ones surprise, Koopa was very good with items. The real star of the show was Bob Marley, who pitched
            the first complete game shutout in PMBL history, while also batting 2/4, with 2 runs, 6 RBIs, and 2 HRs,
            easily winning Game MVP for the first time.</Passage>

            <Passage>This game was an absolute disaster for Marge, as for the second week in a row, they gave up 15+
            points. Their team had a record low 5 hits, with captain Peach become the player with the lowest batting
            percentage (.100) in the league. It got so bad for Marge that photos of co-manager George on his phone
            during the 2nd inning of the game were released to the public. Tweets were released about Matt's comments
            about the team right after the game:</Passage>

            <img src="/brtweet1.jpg" alt="yurt"/>

            <Passage>Known Marge affiliate and Wiggler hater Jessica "Kaitlin" Laman was seen going into the dugout DURING
            the game, which is off limits due to player safety and disruption of play. She started trying to discuss
            business deals with the managers during the 5th, completely unrelated to PMBL, which was not a popular move.
            Boos rained down from the crowd, with fans becoming very upset at Marge for clearly giving up. Following the
            game, fans saw managers of Marge trashing the stadium after losing 16-0, the largest shutout in PMBL history.
            Fans regarded these actions after a loss as
            disgusting and atrocious acts against the game. These events were so bad, the press had to release a statement:</Passage>

            <Ruling>
                <h2>STATEMENT FROM OWNERS OF DAISY CRUISER YACHT CLUB</h2>
                <pre>
                    The owners of the Daisy Cruiser Yacht Club are deeply disappointed by the recent incidents
                    that have occurred aboard our vessels.{"\n\n"}
                    We graciously allow the PMBL to use our ship to spread the game of baseball and allow guests to
                    enjoy a night game following a long day of relaxation by the pool.{"\n\n"}
                    Effective immediately, the Daisy Cruiser Yacht Club will be hereby BANNING Jessica Laman from any
                    games on this cruiser, and will no longer be able to use any of our services.{"\n\n"}
                    Additionally, we are issuing a formal warning to Marge. Any repeat misconduct will result in
                    financial penalties. While we will not pursue legal action against the PMBL at this time, repeated
                    offenses by any party will lead to stricter consequences.{"\n\n"}
                    At the Daisy Cruiser Yacht Club, we take the safety and enjoyment of our guests seriously. We
                    remain committed to ensuring a welcoming and secure environment for all who come aboard.{"\n\n"}

                    Pauline, Yacht Club President{"\n"}
                </pre>
            </Ruling>

            <Passage>Marge drops their 3rd straight game, and will play @ Morgan next week.</Passage>
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
                <div className="mvp">Game MVP: Bob Marley</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (2 - 2)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Boo (0 - 3)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>Last week, James dropped 21 points against Marge, and this week, he became the first team to ever
            do it in back to back weeks. James once again came out swinging, putting up at least 3 runs in all but one
            inning he played. Trocean couldn't come close. Trocean had Red Kamek and Red Pianta hit perfectly, yet the top
            of their batting order could not do anything. Week after week Manager Ocean talks about how Red Pianta is
            the only person in the league with a steal, however that stat ended today. It was known before the game that
            Wiggler was playing with more than his MVP bid on the line today, he was also playing for his relationship
            with captain Birdo. He did not want to mess that up. He successfully stole 2nd and was able to make it home
            on the next hit from Zekrom. Wiggler batted 3/6, 3 Runs, and 4 RBIs, getting the much wanted validation from
            captain Birdo after the game. The much publicized relationship between Birdo and Wiggler continues to have
            more storylines every day, sparking controversy if a player should be allowed to date the team captain due
            to favortism. Zekrom had 5 RBIs and a HR, winning MVP. Petey had a bit of an off day, giving up 2 errors and
            starting 1/3, but he locked back in to stay in the MVP race. James will now become the first team to ever go
            to 4-0, as he looks forward to the playoffs.</Passage>

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
                <div className="mvp">Game MVP: Zekrom</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (3 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Mario (1 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#999999" }}> THANdrew</span></StyledMiniHeader>
            <Passage>You may have heard this before, but Brendan is still in search of his first win of the season. This
            week, it was not looking good, as he was playing the undefeated THANdrew. Looking to avoid being the first
            team to ever fall to 0-4, Brendan's bat came out swinging. In the first inning, Bowser would hit a 2 run
            shot to center, and hit another one in the second inning, going up 4-0. Manager Andrew very derogatorily said
            "How am I losing to BRENDAN? He's the worst team in the league!". His team would then score 6 innings between
            the 3rd and 4th inning to go up 6-4. Leadoff batter for Brendan, Boomerang Bro, who had the highest batting
            percentage coming into today, had a very off game, going 1/4 with a strikeout caught looking. However, for
            the first time this season, a batter was hit by a ball. Waluigi drilled Boomerang Bro in the arm, being the
            first walk of the season. Bowser Jr grounded into a double play on the next pitch.</Passage>

            <Passage>In the top of the 7th, things were looking dire for Brendan. 2 outs, men on 1st and 2nd, and Diddler
            was up to bat. Being 0/3 in the game, and Green Noki being subbed in to close the game, he cracked one to
            right field, with Blue Kamek using the boo item at exactly the right time, and scoring 2 runs to tie the
            game at 6-6. Blue Kamek would also steal 2nd in this inning, however Blue Yoshi would get hit by his own
            POW to end in the inning.</Passage>

            <Passage>In the bottom of the 7th, something very strange was noticed. With Larry Cuc up to bat, he looked
            a little different. This man was wearing glasses. Larry Cuc does not wear glasses. The Managers Union quickly
            saw that this person looked a lot more like Geek Squad than he did Larry Cuc. He would fly out to shallow
            center, causing speculation that this person may not be Larry Cuc. Going into extra innings, Brendan would score
            2, with Bowser, one of the slowest in the league, stealing 2nd. The perfect item usage on a bunt by Blones
            fireballed allegedly "Larry Cuc" to get in another run. This "Larry Cuc" figure pitched the last .2 for
            THANdrew, giving up 2 runs. Bowser Jr on the mound would clamp down for Brendan, sealing the 8-6 victory,
            the first of the year for Brendan, and the first loss for THANdrew. </Passage>
            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(8)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
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
                <div className="mvp">Game MVP: Bowser</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bowser Jr (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Larry Cuc (1 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#FF00FF" }}>Morgan</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>Morgan opened this game mocking Justin Nascimento on the mound, and Morgan's team would make quick
                work of him. King K Rool would hit 2 home runs in this game, both which were solo shots in the 2nd and
                the 4th. Manager Morgan has also been openly critical on Funky Kong, saying the 2x Game MVP is overrated
                and can't hit. He was true about that today, as Morgan's defense clamped down and kept Funky hitless.
                Many remarks were made from the crowd during this game, specifically targeted Betty White's looks and the
                Monkey Squad playing in the jungle. Going into the 6th inning, Daisy had pitched a great game, giving up
                only 1 earned run through 5 innings, with Morgan having a 4-1 lead. The management then decided to pull
                a controversial move, subbing in Yoshi instead of Wario to pitch. This move proved to be disastrous, as
                Yoshi would blow the lead giving up 4. It also did not help that Yoshi went 0/4 in the game. Justin
                Nascimento would hit a solo shot after Morgan finally put in Wario in the 7th to make the score 6-4. Isaac's
                defense would force a game ending triple play to win their 3rd straight game. Morgan refused to comment
                about Yoshi or his team after the game.
            </Passage>

            <Passage>During the game however, something very strange happened. A camera malfunction occurred in the 5th
            inning. On the play, Brown Kritter fielded the ball at shortstop, threw it to Gramms at 2nd, and then Gramms
            threw it to first for the double play. However, when the replay was shown, the replay showed Funky Kong
            picking off Wario at home, and the catcher throwing to 1st base, completely the double play. Manager Morgan
            pleaded to torture Lakitu for this mistake. A few of the cameramen have been relieved of their duties because
            of this mistake.</Passage>

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
                <div className="mvp">Game MVP: Brown Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Donkey Kong (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Yoshi (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Bob Marley</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        2/4, 2 Runs, 6 RBIs, 2 HR
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 7 IP, 5 Hits
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Bob Marley</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description">
                        (W) 7 IP, 5 Hits
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Bowser</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/5, 2 Runs, 5 RBIs, 2 HRs, 1 Stolen Base
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        2.2 IP, 5 Hits, 3 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Zekrom</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description">
                        5/6, 4 Runs, 5 RBIs, 1 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Diddler</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        Scored game-tying 2 RBI double in the 7th with 2 outs.
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        Perfect item usage on bunt
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