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

export default function Week3Recap() {
    const game1 = {
        away: { name: "Trocean", color: "#9900FF", scores: [0, 0, 6, 0, 0, 4, 2], R: 12, H: 25, E: 0, LOB: 12 },
        home: { name: "Morgan", color: "#FF00FF", scores: [2, 1, 1, 0, 0, 1, 0], R: 4, H: 10, E: 0, LOB: 4 },
    };
    const game2 = {
        away: { name: "Justave", color: "#FF9900", scores: [1, 0, 0, 0, 0, 0, 0], R: 1, H: 11, E: 0, LOB: 7 },
        home: { name: "THANdrew", color: "#999999", scores: [0, 0, 2, 0, 0, 1, "X"], R: 3, H: 8, E: 1, LOB: 3 },
    };
    const game3 = {
        away: { name: "James", color: "#F1C232", scores: [0, 4, 1, 6, 4, 6, 0], R: 21, H: 33, E: 0, LOB: 7 },
        home: { name: "Marge", color: "#6AA84F", scores: [0, 0, 0, 1, 1, 1, 1], R: 4, H: 16, E: 0, LOB: 6 },
    };
    const game4 = {
        away: { name: "Brendan", color: "#CC0000", scores: [0, 0, 0, 1, 1, 1, 0], R: 3, H: 12, E: 0, LOB: 5 },
        home: { name: "Isaac", color: "#3586E8", scores: [0, 0, 4, 1, 2, 0, "X"], R: 7, H: 14, E: 1, LOB: 3 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Week 3 Recap</StyledHeader>
            <GenImage src="/headlines/week3.webp" alt="Week3"/>
            <ArticleMeta>
                Written by: PMBL News — October 5, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Through 3 weeks, every manager now has a sense of which teams are good, which teams are bad,
            and which players they definitely should've drafted. Some teams have started to exceed expectations,
            others have stagnated incredibly hard. It's time once again for the Weekly Recap.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#9900FF" }}> Trocean </span>v.s.
                <span style={{ color: "#FF00FF" }}> Morgan</span></StyledMiniHeader>
            <Passage>In a new iteration of the Melrose Matchups, Trocean's team managers were able to capture their first
            ever win this week, putting up double digits against division rival Morgan "Morg" Hartwell. The bats were at
            an all time high for Trocean, knocking down 25 hits to eventually drive in all 12 runs. Shockingly, Red Pianta
            and Red Shy Guy both went perfect for the day, going 4/4 and 5/5 respectively, batting in a combined 6 runs,
            with Red Shy Guy scoring 2 of Red Pianta's 3 RBIs. A mess at pitching for Morgan in this game, sending 4 different
            pitchers out there, with none of them lasting more than 3 innings. Mario on the other hand for Trocean pitched
            excellent, only giving up 1 earned run while recording 3 K's, with 2 caught looking. Only 2 players on Morgan's
            team recorded multiple hits, as all 4 runs came on solo shots. Morgan will look to bounce back next week
            after taking a rough division loss.</Passage>

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
                <div className="mvp">Game MVP: Red Shy Guy</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Mario (1 - 1)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Wario (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#FF9900" }}>Justave</span> v.s.
                <span style={{ color: "#999999" }}> THANdrew</span></StyledMiniHeader>
            <Passage>The first game in the jungle proved to be an interesting one, as it quickly became a heavily defense
            oriented game. THANdrew so far has shown they like to heavily control the game from the defensive side of the
            ball, and they proved that again today. After giving up 1 run in the 1st and giving Justave hope, THANdrew
            locked their batters down. Greed Toad and Michelle both batted perfect, however 4 of their other 7 batters
            did not record a hit. 4 of THANdrew's batters also did not record a hit, but all they needed to win was
            the 2 home runs from Fire Bro and Larry Cuc. THANdrew only needed 8 hits to win the game, and Bob Marley
            will be the first pitcher in PMBL history to pitch the full game and not win. Fan favorite Nose would get
            the save, as THANdrew is the only team so far for any pitcher to record a save. THANdrew will become the first
            team in PMBL history to start 3-0.</Passage>

            <Passage>The alleged article the Justave management paid the New Donk Post to publish hasn't fooled anyone
            about their training practices. After the game, Manager Dave was still calling for everyone's head, and even
            calling for the benching of Green Shy Guy, much to the dismay of Manager Justin and the fans of PMBL.</Passage>

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
                <div className="mvp">Game MVP: Waluigi</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Waluigi (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bob Marley (1 - 2)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Nose (1)</span>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#6AA84F" }}> Marge</span></StyledMiniHeader>
            <Passage>With a quick scoreless 1st inning, this game became an absolute bludgeoning very quickly. James
            would go up 11-0 in a flash, and eventually become the first team this year to put more than 20 runs on a
            team, forcing Marge to put in 5 different pitchers, with each of them giving up at least 2 earned runs.
            Marge couldn't score until the 4th, but it was already too late. The absolute Marge Massacre continued well
            into the 6th inning, where Petey Piranha hit his 3rd home run of the game. Blue Toad and Alfonso would go
            a perfect 5/5 batting, with Alfonso having 6 RBIs, the most by a Mii ever. Petey also had 6 RBI's with his
            3 homers, as he went 5/6, scoring 4 runs. Captain Peach for Marge had a terrible day, giving up 7 earned runs,
            and going 0/2 with only a sacrifice fly. Boo would record back to back losses as the pitcher, with Birdo
            getting another win, giving only up 8 hits and 1 run, with 2 strikeouts. James now also becomes one of only
            2 teams to ever start their season 3-0.</Passage>
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
                <div className="mvp">Game MVP: Alfonso</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Boo (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#3586E8" }}> Isaac</span> v.s.
                <span style={{ color: "#CC0000" }}> Brendan</span></StyledMiniHeader>
            <Passage>In the 2nd rendition of The Battle of 726, Brendan needed a win. Starting Diddler on the mound,
            Manager Brendan was glad to get more than 2 innings out of his starting pitcher. However, Diddler would
            end up giving up a grand slam to Funky Kong in the 3rd, and Brendan's offense today could not catch up. Bowser
            would hit 2 home runs for Brendan in the 4th and 6th innings, but Isaac's batting was all around much better.
            Justin Nascimento would have a good pitching game, going 5.2 innings and giving up 3 runs. Despite the
            Magikoopa corking allegations, Blue Kamek failed to record a hit, as he went 0/3, along with Abu Patel. Isaac
            now gets back to back wins, being only 1 of 3 teams currently with a winning record, while Brendan will
            be coming the 2nd team in PMBL history to start 0-3, along with Christach of last year, as his disappointing
                season continues.
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
                <div className="mvp">Game MVP: Funky Kong</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: J-Nasty (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Diddler (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Petey Piranha</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description">
                        5/6, 4 Runs, 6 RBIs, 3 HRs
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Mario</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>Trocean</span></div>
                    <div className="description">
                        (W) 5.1 IP, 5 Hits, 1 ER, 3 K
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        4/6, 4 Runs
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 4 IP, 8 Hits, 1 ER, 2 K
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Justin Nascimento</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        1/3
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 5.2 IP, 11 Hits, 3 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Alfonso</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description">
                        Perfect 5/5 with 6 RBIs, a home run, and a triple.
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