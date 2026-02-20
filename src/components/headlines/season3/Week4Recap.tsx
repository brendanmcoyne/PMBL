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

export default function Week4Recap3() {
    const game1 = {
        away: { name: "Brendan", color: "#CC0000", scores: [0, 0, 1, 0, 2, 7, 0], R: 10, H: 17, E: 4, LOB: 7 },
        home: { name: "Justave", color: "#FF9900", scores: [0, 0, 3, 0, 0, 6, 2], R: 11, H: 22, E: 0, LOB: 9 },
    };
    const game2 = {
        away: { name: "James", color: "#F1C232", scores: [1, 0, 1, 1, 5, 2, 0], R: 10, H: 22, E: 0, LOB: 9 },
        home: { name: "Isaac", color: "#3586E8", scores: [1, 5, 0, 0, 0, 0, 0], R: 6, H: 14, E: 2, LOB: 4 },
    };
    const game3 = {
        away: { name: "Morgan", color: "#FF00FF", scores: [2, 4, 6, 1, 0, 0, 0], R: 13, H: 24, E: 1, LOB: 11 },
        home: { name: "Trocean", color: "#9900FF", scores: [0, 1, 0, 1, 6, 4, 3], R: 15, H: 23, E: 3, LOB: 5 },
    };
    const game4 = {
        away: { name: "THANdrew", color: "#999999", scores: [3, 0, 0, 0, 3, 0, 0], R: 6, H: 16, E: 0, LOB: 5 },
        home: { name: "Marge", color: "#6AA84F", scores: [0, 0, 0, 1, 2, 1, 0], R: 4, H: 12, E: 1, LOB: 4 },
    };

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Week 4 Recap</StyledHeader>
            <GenImage src="/headlines/3week4.jpeg" alt="Draft"/>
            <ArticleMeta>
                Written by: PMBL News — February 20, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>2 articles in the same day??? I've entered flow state. Here's Week 4</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 1: <span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#FF9900" }}> Justave</span></StyledMiniHeader>
            <Passage>In a week, many trades were made. Look no further than Justave who completely gutted their team
            to bring in Boo, King Boo, Tonka, Claudius, and Gray Shy Guy. A completely new outfield, where all 3 players
            have played a combined 3 games in the PMBL. No scoring would happen for the 1st 2 innings, but in the 3rd,
            Brendan would score 1, followed by Justave scoring 3. Going into the 5th, Brendan would score 2 more, bringing
            it to a 3-3 stalemate. Wario was once again hitting perfect, and performing well on the mound. In the top
            of the 6th, things started to pick up. Mario was subbed out for King Boo, and things broke loose, as Brendans
            squad would explode for 7 runs, and King Boo, the new acquisition would be subbed out after making the score
            10-3 Brendan. Red Kamek would come in to get the final out to stop the bleeding. When things were looking
            good for Brendan, the team began to slowly and painfully fall apart. Justave would load the bases, and off of
            a star hit, Petey Piranha, who already had 2 RBIs and a homer this game, would make his first of 3 errors
            in the bottom of the 6th. Along with a Jake error in the outfield, 4 errors in a single inning completely
            killed Brendan's team, as Justave would score 6, with only 1 of those runs being earned from Baby Peach on
            the mound. These would be Petey's 4th, 5th, and 6th errors across the past 2 games, who was mentioned to be
            a Golden Glove candidate during the first 3 to 4 innings of the game. With Justave feeling great momentum,
            Claudius on the mound went 1-2-3 against his former team, and when Dixie Kong would go into pitch for Brendan,
            Hammer Bro would step up and launch a 2 run shot, winning it for Justave and completing the comeback. Only 6
            of Justave's 11 runs would be earned, the most runs off of errors one team has ever had in the PMBL, which
            handed Brendan his first loss.</Passage>

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
                <div className="mvp">Game MVP: Hammer Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Claudius (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Dixie Kong (0 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 2: <span style={{ color: "#F1C232" }}> James</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>Surprisingly, another team who made a lot of buzz this week on the Free Agency and trade markets
            was the 3-0 James team, who traded away key pieces like Red Pianta and Yellow Toad for Red Koopa and Dark
            Bones. To everyone's shock, he would be starting Paragoomba on the mound in this game against Isaac, the
            highest scoring team in the league. James would get on the board quick scoring 1 run, followed by a solo
            shot from Bowser in the bottom of the 1st to make it 1-1. In the bottom of the 2nd, disaster would strike
            for James and Paragoomba, as Bowser would launch a grand slam to center, making the score 6-1 after a Blue
            Pianta RBI at the start of the inning, subbing off Paragoomba. What looked to be rough moves for James,
            his team ended up clamping down, James would score 9 straight runs over the next 4 innings, 1 in the 3rd,
            1 in the 4th, 5 in the 5th, and 2 in the 6th. Despite Bowser's heroics in the batters box, he once again
            failed massively on the pitchers mound, giving up 7 earned runs off of 10 hits in 2 innings. James' team
            had very consistent hitting all around, including a Red Toad home run, his first ever homer. The game would
            end 10-6, with Bowser Jr and Red Koopa shutting out Isaac's offense for the last 5.2 innings of the game. Red
            Kritter would win MVP going 4/5, 2 Runs, 4 RBIs, 1 T, and 1 HR. James would join himself as the only team
            to ever start a season 4-0, as Isaac would drop to 2-2. </Passage>

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
                <div className="mvp">Game MVP: Red Kritter</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bowser Jr (2 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Bowser (0 - 2)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 3: <span style={{ color: "#9900FF" }}> Trocean</span> v.s.
                <span style={{ color: "#FF00FF" }}>Morgan</span></StyledMiniHeader>
            <Passage>As Morgan begins to lose hope on this season, he decides to play his game at Yoshi Park because "I
            hate that one". Starting Gramps on the mound, he sure did hate this game out of the gate, with the new and
            improved Trocean team with Brown Kritter would start the game with a 6-0 lead, getting Gramps off the mound
            after one inning pitched. Morgan's team would score a single run on a sac fly in the 2nd, before Trocean
            doubled their run total to 12 through 3 innings. The 12th run would be a Baby DK solo home run, and absolute
            shock to the fans. Morgan's team was an absolute mess, bobbling balls, missing throws, and getting hit by
            every item imaginable. It looked like an absolute masterclass. Trocean would snag on their 13th run, making
            the score 13-2. Everything going right for one team, and absolutely abhorred for the other. Wiggler got
            subbed off the mound for Trocean after 3.2 innings, and Donkey Kong would go into pitch. The points for
            Morgans team began in the 5th, as they scored 6 off of Donkey Kong, and went through their batting lineup
            with ease. This charge was led by Antenna, who ended up with 6 RBIs on the day. Now with a 13-8 lead, Antenna
            would go into pitch in the 6th, and he wouldn't give up a hit. With momentum shifting, Morgan would score
            on an error to make it 13-9 and then get a 2 run homer from Daisy to make it 13-11. The stadium was getting
            very quiet as Daisy made it only a 2 run game. Diddy Kong came into pitch, and gave up another run to make
            it 13-12 thanks to Red Shy Guy. He would get the needed outs to get into the 7th, but the momentum had clearly
            shifted. Antenna would get the first 2 outs with ease, but then Trocean's offense awakened, getting 3 straight
            hits. With the bases loaded for Wiggler, he would hit it straight to shortstop ending the top of the inning,
            stranding 3. These would be the 9th, 10th, and 11th runners left on base for Trocean.</Passage>

            <Passage>In the bottom of the 7th, Baby Luigi and Green Toad would get out quickly, leaving Diddy Kong only
            needing one out. Peach would star hit, and Daisy would just barely get around Brown Kritter, with Dry Bones
            up to bat. He would crack the ball to center using his femur, and the defense couldn't react in time, as
            Dry Bones would hit the game winning 3 run homer, completing the 11 run comeback, the largest deficit
            overcame in PMBL history. The fans couldn't believe their eyes, as Dry Bones went 5/5, with 5 Runs, 3 RBIs,
            and 1 HR won MVP in an absolute improbable comeback.</Passage>

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
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Antenna (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Diddy Kong (1 - 1)</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>Game 4: <span style={{ color: "#999999" }}>THANdrew</span> v.s.
                <span style={{ color: "#6AA84F" }}>Marge</span></StyledMiniHeader>
            <Passage>Marge attempting to avoid 0-4, they would head to the Playroom to face THANdrew. Andrew, arriving
                at his first game of the season after the surgery, was very excited to see his new hitter, Red Pianta,
                take center stage for the team. Both teams elected to start their Kameks on the mound, Green Kamek for
                Marge, and Blue Kamek for THANdrew. Green Kamek would go first, and not record a single out before being
                taken off. The first two batters would get hits, and then Boomerang Bro got a 3 run homer to right, and
                after 3 batters, Luigi was in at pitcher. Marge's team could not do anything offensively, as they would
                only record 4 hits through the first 3 innings. Luigi would fare well on the mound until he was subbed
                off in the 4th, he went 3 scoreless innings and gave up only 4 hits, a very questionable substitution.
                Marge would finally get on the board in the 4th thanks to Geek Squad, who would bat in Miss Jones.
                THANdrew's offense decided to wake up again, with their new acquisition Red Pianta getting a 2-RBI single,
                bringing in Bonnie and Purple Toad. The 6th run would come shortly after, with Abu Patel batting in
                Red Pianta. Birdo would come into pitch after Blue Kamek surprisingly was able to hold down the fort
                for 4 innings in the 5th, and immediately gave up 2 runs to Marge, making the score 6-3. This could have
                been extended, but for the 2nd time this game, the right fielder picked off King K Rool at 1st base due
                to how slow his running was. Marge would tack on another run in the 6th, making the score 6-4. In a game
                where their defense was so messed up, having King K Rool pitch and then get moved to center field, Marge
                was still holding on. Bob Marley would come into pitch in the 7th and not allow any runs, and in the
                bottom of the 7th, all Marge needed was for one of their next 3 batters to get on base for Green Kritter to
                get a chance. However, that did not happen, as Bob Marley, Luigi, and Piggie all failed to get a hit, giving
                THANdrew the 6-4 win, and making Marge the first team to ever go 0-4.
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
                <div className="mvp">Game MVP: Boomerang Bro</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Blue Kamek (1 - 0)</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Green Kamek (0 - 2)</span>
                </div>
                <span style={{fontSize: ".8rem"}}>Save: Birdo (1)</span>
            </GameSummary>

            <StyledMiniHeader>Awards</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">MVP of the Week</div>
                    <div className="player">Dry Bones</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description">
                        5/5, 5 Runs, 3 RBIs, 1 HR
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Pitcher of the Week</div>
                    <div className="player">Blue Kamek</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        (W) 4 IP, 5 Hits, 1 ER
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (No one pitched good)
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Captain of the Week</div>
                    <div className="player">Bowser Jr</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                    <div className="description" style={{marginBottom: "0"}}>
                        3/5, 1 Run, 2 RBIs, 1 D, 1 T
                    </div>
                    <div className="description" style={{marginTop: "0"}}>
                        (W) 3 IP, 6 Hits, 0 ER
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Rookie of the Week</div>
                    <div className="player">Tonka</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                    <div className="description">
                        4/5, 3 Runs, 2 RBIs
                    </div>
                </AwardBlock>

                <AwardBlock>
                    <div className="award-name">Surprise of the Week</div>
                    <div className="player">Antenna</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                    <div className="description">
                        6 RBIs to lead the team. 2 inning shutout to earn the win.
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