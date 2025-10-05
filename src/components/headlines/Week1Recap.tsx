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

export default function Week1Recap() {
    const game1 = {
        away: { name: "James", color: "#F1C232", scores: [0, 0, 2, 2, 0, 5, 0], R: 9, H: 16, E: 0, LOB: 8 },
        home: { name: "Morgan", color: "#FF00FF", scores: [2, 0, 0, 0, 1, 0, 0], R: 3, H: 8, E: 0, LOB: 3 },
    };
    const game2 = {
        away: { name: "Trocean", color: "#9900FF", scores: [0, 0, 1, 0, 3, 0, 0, 0, 0, 1, 0], R: 5, H: 20, E: 0, LOB: 10 },
        home: { name: "Marge", color: "#6AA84F", scores: [0, 0, 0, 0, 4, 0, 0, 0, 0, 1, "1X"], R: 6, H: 22, E: 0, LOB: 7 },
    };
    const game3 = {
        away: { name: "Justave", color: "#FF9900", scores: [0, 0, 3, 0, 0, 0, 0], R: 3, H: 17, E: 0, LOB: 10 },
        home: { name: "Brendan", color: "#CC0000", scores: [0, 1, 0, 0, 1, 0, 0], R: 2, H: 11, E: 0, LOB: 6 },
    };
    const game4 = {
        away: { name: "THANdrew", color: "#999999", scores: [0, 2, 0, 0, 3, 0, 0, 0, 1], R: 6, H: 14, E: 0, LOB: 6 },
        home: { name: "Isaac", color: "#3586E8", scores: [0, 0, 2, 0, 2, 1, 0, 0, 0], R: 5, H: 23, E: 3, LOB: 13 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Week 1 Recap</StyledHeader>
            <GenImage src="/headlines/week1.jpg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — September 14, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>What an incredible start to the season so far. Storylines are already writing themselves as the Week 1
            games have concluded. Up and coming players, terrible mistakes, new fan favorites, and so much more. Down below,
            all highlights and lowlights from every game are shown:</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#FF00FF" }}>Morgan</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>Following the banner raising that didn't happen, James' new starter Birdo would quickly give up
                2 earned runs to Morgan via King K Rool and the first home run of the season. Birdo however would bounce
                back on the mound, throwing the next 3 innings scoreless before giving up a run in the 5th. Morgan's
                starter Daisy would be pulled after just 2 innings after she tied the game up 2-2. Once Yoshi took the
                mound, James' hitting core exploded. In 3.1 innings, Yoshi would give up 6 earned runs on 9 hits,
                giving reigning MVP Petey Piranha his 4 RBIs and Blue Pianta his 2 home run day. Rookie Zekrom would
                close it out in the 7th for Manager James in his first ever game, capping off the inaugural game of
                Season 2 with a score of 9-3 James. James would improve his record to 5-1 against Morgan in the 48 Buswell
                Battle. This would be the second season in a row where the only away team to lose in Week 1 would be
                Morgan.</Passage>

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
                <div className="mvp">Game MVP: Blue Pianta</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Birdo (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Yoshi (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#6AA84F" }}>Marge</span> v.s.
                <span style={{ color: "#9900FF" }}> Trocean</span></StyledMiniHeader>
            <Passage>A game with 3 brand new managers, this matchup began with a pitching duel between Red Kamek and
                Boo, with only one run being scored in the first 4 innings. Red Kamek would only allow 1 earned run
                through 4.2 innings in his first start this season. However, his game sparked controversies due to
                both Kamek's oddly efficient batting stats, with Yellow Kamek going 2/4 and a run, and Red Kamek
                knocking down an RBI.
                Captain Mario for team Trocean had an incredible day, as he hit 4/6 with 3 RBIs, a triple, and a run.
                His pitching was a different story. Despite pitching 6 innings, Mario would give up 5 runs on 14 hits,
                including the game winner in the 11th inning, making this the longest game in PMBL history. The one
                to knock down the RBI was none other than Hamburger, a returning player from Matts roster the season
                prior. After going 0/4 earlier in the game, Hamburger would hit a bloop into left center to drive in
                the game winning run. Peach pitched amazing for Marge going 6.1 innings, and giving up 2 runs on 11 hits,
                securing her the game MVP. </Passage>

            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(11)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
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
                <div className="mvp">Game MVP: Peach</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Peach (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Mario (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#FF9900" }}>Justave</span> v.s.
                <span style={{ color: "#CC0000" }}> Brendan</span></StyledMiniHeader>
            <Passage>In game 3 of Week 1, the corked bat allegations against the Magikoopas would continue, with Blue
                Kamek on Brendan's team going 2/3, an RBI, and a run. That would be one of the only brightspots for Manager
                Brendan's new offense, as the offense was held to only 11 hits off of former starter Bob Marley and the back
                of Justave's infield. Both Bowser Jr and Blones would go 0/7 in their at bats. With a good amount of Justin's
                previous core returning to the team, they picked up their stride from last years regular season winning streak,
                with Green Kritter leading the pack going 2/4, 2 RBIs, a double, a triple, and a run scored. Bowser coming in
                for relief on Blue Kamek pitched 4.2 innings would take the loss, however he would throw not 1, not 2, but 3
                strikeouts swinging. Manager Dave, despite being a huge fan, has already made comments regarding fan favorite
                Mii Bertha being on the chopping block heading into Week 2 due to her batting ineptitude. Meanwhile, Justin
                can finally breathe easy after snapping the 5 game losing streak to Brendan, as Brendan would lose his second
                season opener in a row to the team with the last pick in the draft.</Passage>
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
                <div className="mvp">Game MVP: Green Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bob Marley (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bowser (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#999999" }}>THANdrew</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>In an interesting turn of events, Isaac would choose to bring him and his team to Bowser's
                Castle for the first ever game played at the venue. Rookie Justin Nascimento would be on the mound to start
                for Isaac, and surprisingly Green Noki would be in the lineup for THANdrew, marking the first time a Noki
                would participate in PMBL. Rookies played a big part in this game, with Berry White and Larry Cuc each
                hitting an RBI in this game for Isaac and THANdrew respectively. The Kritter trade that happened earlier
                that week between Red Kritter and Brown Kritter didn't show any extreme impact on the game, with both
                Kritters having at least one RBI. The real disappointment was the third Kritter, Blue Kritter, who
                had an abysmal performance at the plate, going 0/4 and struck out looking for the former DPOY. Despite
                Baby DK and his alleged
                corked banana going 4/5 and a run, it didn't hide his and Dixie's horrific fielding as they gave up a
                combined 3 errors in the outfield. Justin Nasimento would pitch 4.2 innings giving up 9 hits and 4 earned
                runs, however Manager Isaac claims this statline did not reflect his gameplay due to the errors.</Passage>

            <Passage>In the 9th inning, calamity struck for Isaac in the unlikeliest of heroes for THANdrew. Green Noki,
                despite being 0/3 on the day and facing constant backlash from managers and critics, would hit a bloop
                single right through second base to score the go ahead run for her first ever hit and first ever Noki
                hit in league history. In the bottom of the 9th, Larry Cuc, after pitching for 3.2 innings, would be
                taken out for Green Noki, who would be tasked with getting the final 2 outs of the game, which she did.
                Manager Andrew would get his 4th straight regular season game win, 3 of those going into extra innings.</Passage>

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
                <div className="mvp">Game MVP: Waluigi</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Larry Cuc (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Donkey Kong (0 - 1)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Green Noki (1)</span>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Blue Pianta</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description">
                        3/4, 2 Runs, 2 RBIs, 2 HRs
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Bob Marley</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description">
                        (W) 7 IP, 11 Hits, 2 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Waluigi</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/5, 2 Runs, 2 RBIs
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        2.1 IP, 6 Hits, 2 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Zekrom</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                       1/4, 1 Run, 2 RBIs
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        2 IP, 1 Hit, 0 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Green Noki</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        Go ahead RBI on only hit.
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        Pitched final 2 outs in first ever game
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