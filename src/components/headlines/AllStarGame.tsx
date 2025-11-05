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
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2rem auto;
    width: fit-content;
    text-align: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        width: 90%;
    }
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

const StatsTable = styled.table`
  border-collapse: collapse;
  margin: 2rem auto;
  width: 90%;
  max-width: 800px;
  color: white;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #444;
  border-radius: 10px;
  overflow: hidden;
`;

const StatsTh = styled.th`
  border: 1px solid #666;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  font-weight: bold;
`;

const StatsTd = styled.td`
  border: 1px solid #555;
  padding: 0.5rem;
`;


export default function AllStarGame() {
    const game = {
        away: { name: "East", color: "#3586E8", scores: [2, 0, 8, 1, 0, 0, 1], R: 12, H: 26, E: 0, LOB: 11 },
        home: { name: "West", color: "#CC0000", scores: [3, 0, 0, 4, 4, 0, 0], R: 11, H: 20, E: 0, LOB: 6 },
    };

    const battingStats = [
        {player: "Green Toad", team: "East", AB: 5, H: 5, R: 1, RBI: 1, HR: 0, AVG: "1.000"},
        {player: "Bob Marley", team: "East", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400"},
        {player: "Green Kritter", team: "East", AB: 5, H: 3, R: 3, RBI: 4, HR: 2, AVG: "0.600"},
        {player: "Petey Piranha", team: "East", AB: 5, H: 5, R: 3, RBI: 3, HR: 2, AVG: "1.000"},
        {player: "Birdo", team: "East", AB: 5, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.400"},
        {player: "Bowser", team: "East", AB: 5, H: 4, R: 2, RBI: 3, HR: 2, AVG: "0.800"},
        {player: "Boomerang Bro", team: "East", AB: 5, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.200"},
        {player: "Hamburger", team: "East", AB: 5, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.600"},
        {player: "Blue Pianta", team: "East", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333"},

        {player: "Red Kritter", team: "West", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500"},
        {player: "King K Rool", team: "West", AB: 5, H: 3, R: 2, RBI: 5, HR: 1, AVG: "0.600"},
        {player: "Brown Kritter", team: "West", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500"},
        {player: "J-Nasty", team: "West", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500"},
        {player: "Donkey Kong", team: "West", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333"},
        {player: "Funky Kong", team: "West", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750"},
        {player: "Fire Bro", team: "West", AB: 4, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.250"},
        {player: "Red Pianta", team: "West", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750"},
        {player: "Daisy", team: "West", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750"},
    ]

    const pitchingStats = [
        {player: "Bob Marley", team: "East", IP: 3.2, H: 8, ER: 3, SO: 0, ERA: "5.73"},
        {player: "Birdo", team: "East", IP: 0.1, H: 8, ER: 7, SO: 0, ERA: "147.00"},
        {player: "Bowser", team: "East", IP: 3, H: 4, ER: 1, SO: 0, ERA: "2.33"},

        {player: "J-Nasty", team: "West", IP: 2, H: 8, ER: 4, SO: 0, ERA: "14.00"},
        {player: "Donkey Kong", team: "West", IP: 1, H: 8, ER: 7, SO: 0, ERA: "49.00"},
        {player: "Daisy", team: "West", IP: 2, H: 5, ER: 0, SO: 0, ERA: "0.00"},
        {player: "Brown Kritter", team: "West", IP: 2, H: 5, ER: 1, SO: 0, ERA: "3.50"},
    ]

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 All Star Game Recap</StyledHeader>
            <GenImage src="/headlines/AllStar.jpg" alt="AllStar"/>
            <ArticleMeta>
                Written by: PMBL News — November 5, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>In the blink of an eye, we have already reached the ALl-Star Game. Both divisions came together
                and made a deal to disallow any sort of outfield synergy during this game, in efforts to get real all-stars
                into the game rather than last year's issues of allowing sub par players to play just for synergy. Last
                year's All-Star game was an absolute blowout, with the East Division killing the West by a score of 21-4.
                All 21 runs were scored consecutively.
            </Passage>

            <StyledMiniHeader style={{marginBottom: "0", color: "#4285F4"}}>East Division Lineup</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">Pitcher</div>
                    <div className="player">Bob Marley</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">Catcher</div>
                    <div className="player">Bowser (C)</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">1st Base</div>
                    <div className="player">Birdo</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">2nd Base</div>
                    <div className="player">Petey Piranha</div>
                    <div className="manager">Manager: <span style={{ color: "#F1C232" }}>James</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">Shortstop</div>
                    <div className="player">Boomerang Bro</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">3rd Base</div>
                    <div className="player">Blue Pianta</div>
                    <div className="manager">Manager: <span style={{ color: "#CC0000" }}>Brendan</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">Left Field</div>
                    <div className="player">Hamburger</div>
                    <div className="manager">Manager: <span style={{ color: "#6AA84F" }}>Marge</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">Center Field</div>
                    <div className="player">Green Toad</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">Right Field</div>
                    <div className="player">Green Kritter</div>
                    <div className="manager">Manager: <span style={{ color: "#FF9900" }}>Justave</span></div>
                </AwardBlock>
            </AwardsSection>

            <StyledMiniHeader style={{marginBottom: "0", color: "#FF0000"}}>West Division Lineup</StyledMiniHeader>

            <AwardsSection>
                <AwardBlock>
                    <div className="award-name">Pitcher</div>
                    <div className="player">J-Nasty</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">Catcher</div>
                    <div className="player">Red Pianta</div>
                    <div className="manager">Manager: <span style={{ color: "#9900FF" }}>Trocean</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">1st Base</div>
                    <div className="player">King K Rool</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">2nd Base</div>
                    <div className="player">Red Kritter</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">Shortstop</div>
                    <div className="player">Brown Kritter</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">3rd Base</div>
                    <div className="player">Daisy</div>
                    <div className="manager">Manager: <span style={{ color: "#FF00FF" }}>Morgan</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">Left Field</div>
                    <div className="player">Funky Kong</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">Center Field</div>
                    <div className="player">Fire Bro</div>
                    <div className="manager">Manager: <span style={{ color: "#999999" }}>THANdrew</span></div>
                </AwardBlock>
                <AwardBlock>
                    <div className="award-name">Right Field</div>
                    <div className="player">Donkey Kong (C)</div>
                    <div className="manager">Manager: <span style={{ color: "#3586E8" }}>Isaac</span></div>
                </AwardBlock>
            </AwardsSection>

            <Passage>The game began with Justin Nascimento quickly giving up 2 runs to Greeen Kritter and Petey RBIs
                in the 1st, and with no synergy in either outfield, both teams knew this was going to be a slugfest. The
                West would respond in kind, scoring 3 runs in the bottom of the 1st off of slap hits and good base running.
                Both pitchers would not give up any runs in the 2nd, before Justin Nascimento gave up 2 more in the 3rd
                off a 2 run home run shot by captain Bowser. He then get pulled for Donkey Kong, and that's when the East
                Divisions bats would truly come alive. The East would end up scoring 6 more runs in the 3rd, bringing
                the score from 2-3 West to 10-3 East. Donkey Kong would give up another run in the 4th before being pulled,
                giving up 7 runs off of 8 hits in 1 inning pitched.
            </Passage>

            <Passage>Daisy would then come in and clean up the West division defense, giving enough time for their bats
            to get their act together. Bob Marley would load the bases in the 4th before being pulled for Birdo, who
            has been a great pitcher all year. The All-Star Game could not have been ruder to Birdo, as Birdo would give up
            7 runs on 8 hits in only .1 innings. She got the final out in the 4th after giving up 4, and then gave up 3
            more in the 5th. Making the game 11-10 in favor of the East Division. Manager Dave was booing Birdo, calling
            for Bowser to be subbed in. Bowser would then eventually get subbed in with runners in scoring position, and
            give up another run in the 5th to tie in 11-11. This would tie the largest deficit in PMBL history for a team
            to comeback and tie. No scoring would happen in the 6th, with Brown Kritter coming into pitch for Daisy.
            A controversial substitution, with Daisy only giving up 5 hits after 2 innings. Brown Kritter would give up
            the go-ahead run to Petey Piranha, who hit 5/5 on the day, making the game 12-11 East Division. </Passage>

            <Passage>In the bottom of the 7th, the East Division defense made quick work of getting 2 outs, but then
            cracks started to form. The West got runners on 1st and 2nd, with King K Rool up to bat. On the 2nd pitch,
            King K Rool star hit the ball to right field, and Green Kritter made an absolutely amazing play to catch the
            pop fly to end it 12-11. One of the greatest games in PMBL history was just witnessed. The East Division
            heavily celebrated this victory, jumping up and down and hugging one another. Manager Isaac was very grumpy.</Passage>

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
                    <Td style={{color: game.away.color}}>{game.away.name}</Td>
                    {game.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game.away.R}</Td>
                    <Td>{game.away.H}</Td>
                    <Td>{game.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game.home.color}}>{game.home.name}</Td>
                    {game.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game.home.R}</Td>
                    <Td>{game.home.H}</Td>
                    <Td>{game.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>

            <GameSummary>
                <div className="mvp">Game MVP: Petey Piranha</div>
                <div className="pitchers">
                    <span style={{fontSize: ".8rem"}}>Winning Pitcher: Bowser</span>
                    <span style={{fontSize: ".8rem"}}>Losing Pitcher: Brown Kritter</span>
                </div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0", color: "#4285F4"}}>East Division Stats</StyledMiniHeader>
            <StatsTable>
                <thead>
                <tr>
                    <StatsTh>Player</StatsTh>
                    <StatsTh>AB</StatsTh>
                    <StatsTh>H</StatsTh>
                    <StatsTh>R</StatsTh>
                    <StatsTh>RBI</StatsTh>
                    <StatsTh>HR</StatsTh>
                    <StatsTh>AVG</StatsTh>
                </tr>
                </thead>
                <tbody>
                {battingStats.filter(b => b.team === "East").map((b, i) => (
                    <tr key={i}>
                        <StatsTd>{b.player}</StatsTd>
                        <StatsTd>{b.AB}</StatsTd>
                        <StatsTd>{b.H}</StatsTd>
                        <StatsTd>{b.R}</StatsTd>
                        <StatsTd>{b.RBI}</StatsTd>
                        <StatsTd>{b.HR}</StatsTd>
                        <StatsTd>{b.AVG}</StatsTd>
                    </tr>
                ))}
                </tbody>
            </StatsTable>

            <StatsTable style={{marginTop: "0"}}>
                <thead>
                <tr>
                    <StatsTh>Pitcher</StatsTh>
                    <StatsTh>IP</StatsTh>
                    <StatsTh>H</StatsTh>
                    <StatsTh>ER</StatsTh>
                    <StatsTh>SO</StatsTh>
                    <StatsTh>ERA</StatsTh>
                </tr>
                </thead>
                <tbody>
                {pitchingStats.filter(p => p.team === "East").map((p, i) => (
                    <tr key={i}>
                        <StatsTd>{p.player}</StatsTd>
                        <StatsTd>{p.IP}</StatsTd>
                        <StatsTd>{p.H}</StatsTd>
                        <StatsTd>{p.ER}</StatsTd>
                        <StatsTd>{p.SO}</StatsTd>
                        <StatsTd>{p.ERA}</StatsTd>
                    </tr>
                ))}
                </tbody>
            </StatsTable>

            <StyledMiniHeader style={{marginBottom: "0", color: "#FF0000"}}>West Division Stats</StyledMiniHeader>
            <StatsTable>
                <thead>
                <tr>
                    <StatsTh>Player</StatsTh>
                    <StatsTh>AB</StatsTh>
                    <StatsTh>H</StatsTh>
                    <StatsTh>R</StatsTh>
                    <StatsTh>RBI</StatsTh>
                    <StatsTh>HR</StatsTh>
                    <StatsTh>AVG</StatsTh>
                </tr>
                </thead>
                <tbody>
                {battingStats.filter(b => b.team === "West").map((b, i) => (
                    <tr key={i}>
                        <StatsTd>{b.player}</StatsTd>
                        <StatsTd>{b.AB}</StatsTd>
                        <StatsTd>{b.H}</StatsTd>
                        <StatsTd>{b.R}</StatsTd>
                        <StatsTd>{b.RBI}</StatsTd>
                        <StatsTd>{b.HR}</StatsTd>
                        <StatsTd>{b.AVG}</StatsTd>
                    </tr>
                ))}
                </tbody>
            </StatsTable>

            <StatsTable style={{marginTop: "0"}}>
                <thead>
                <tr>
                    <StatsTh>Pitcher</StatsTh>
                    <StatsTh>IP</StatsTh>
                    <StatsTh>H</StatsTh>
                    <StatsTh>ER</StatsTh>
                    <StatsTh>SO</StatsTh>
                    <StatsTh>ERA</StatsTh>
                </tr>
                </thead>
                <tbody>
                {pitchingStats.filter(p => p.team === "West").map((p, i) => (
                    <tr key={i}>
                        <StatsTd>{p.player}</StatsTd>
                        <StatsTd>{p.IP}</StatsTd>
                        <StatsTd>{p.H}</StatsTd>
                        <StatsTd>{p.ER}</StatsTd>
                        <StatsTd>{p.SO}</StatsTd>
                        <StatsTd>{p.ERA}</StatsTd>
                    </tr>
                ))}
                </tbody>
            </StatsTable>

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