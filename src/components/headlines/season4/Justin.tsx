import {ContentDiv, StyledHeader, ArticleMeta, SeparatorLine, Passage, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";
import {styled} from "styled-components";

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

export default function Justin() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>J-Nasty: From Underdog Coach to Injury-Riddled Pitcher</StyledHeader>
            <GenImage src="/headlines/Justin.jpg" alt="Draft" />
            <ArticleMeta>
                Written by: PMBL News — June 22, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Justin Nascimento was always seen as an underdog in his life. People didn't think he was capable of
            making it to the Big Leagues, but he was able to in more ways than one. </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Season 1</StyledMiniHeader>
            <Passage>He came into the league as a solo manager, taking over a franchise in the East Division. Having the 7th overall pick,
            odds didn't seem like they were in his favor to start. He drafted the Luigi and Daisy captain duo with his first two picks, and
            brought in hitters such as Green Kritter and Blue Pianta. Not known for being the heaviest hitting team or the team with the
            most synergy, Justin's team quickly became a fan favorite. He'd go 2-2 through the first 4 games, with every game being a nail
            biter. Every game was decided by less than 3 runs, including the Week 2 game against Christach where he won 9-8 after being up
            7-0, and a narrow 5-7 loss to James in Week 4 in the leagues first ever walk off homer. Going into Week 7, disaster struck when two
            of his players, Green Shy Guy and Red Shy Guy, were shot in a hit and run by Koopa from team James. Many managers got together
            for his Week 7 game against Matt, which ended up being one of the greatest games in PMBL history, winning 14-11 on a Daisy walkoff
            homer in the bottom of the 10th inning. Both Shy Guys would later return to the team, as Justin went 6-4 in the regular season
            and clinched a playoff berth, before the team of friendship would eventually get swept by Brendan in the Conference Series. He would
            later win Manager of the Year due to his efforts through the adversity of the leagues first injuries.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Season 2</StyledMiniHeader>
            <Passage>Big changes came for Justin in Season 2, as not only he got to manage with a co-manager, Dave, he also got to be a draftable
            player. Justin would be drafted in the 8th round by Isaac, and would be thrust into the starting position rather quickly. He would
            play against Justins managed team in Week 7, which many fans and critics of the league weren't very fond of Justin on both teams.
            Justin the pitcher pitched amazingly, going a PMBL record 8 innings, giving up 3 earned runs on 16 hits, and receiving no decision
            as Isaac's team would lose 3-5 in the 9th inning off of Donkey Kongs pitching. Justin the pitcher would end up winning Rookie of the Year,
            and getting runner up for Pitcher of the Year after going 4-0 through 8 starts, and having a 3.97 ERA. Justin the manager would have
            a great year, with Dave implementing his "coaching tactics", Justins team would start 1-2, but once Koopa came back from suspension,
            the squad would go on a 6-1 run to end the year, going 7-3 and winning the East Division and entire conference.</Passage>

            <Passage>Isaac's team also went 7-3, but was very quickly swept by James, and Justins pitching was nothing like his regualr season
            form. Justin went 0-3 through his 3 starts, and had a 14.28 ERA. Through 42.1 innings in the regular season, he gave up 24 earned runs,
            however in the postseason, he gave up 17 runs in only 8.1 innings, with his longest start being in Game 1, giving up 3 earned runs
            off of 11 hits in 3 innings. Shortly after the series, it was announced that Justin the pitcher would be needing Tommy John surgery
            on his throwing arm after the disappointing playoff exit. Justin the manager would get the job done in the end. Despite struggling
            against Morgan in Games 1 & 2, barely winning off of a questionable foul ball in Game 1, Justave would breeze through Morgan's team
            in Games 3 & 4, winning both thanks to Bob Marley shutouts. Hammer Bro would absolutely dominate in the World Series, winning Justave
            the World Series in 4 games. They would also become the first team to win a series after being down (James won Game 1).</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Season 3</StyledMiniHeader>
            <Passage>With Justin the pitcher out, only Justin the manager would be center stage this season. It would start a little rough for
            him however, as the league punished the franchise for Daves attempted bribery of officials to help boost his players stats over
            James in the World Series. Fans were not happy to find this out, as they were banned from their favorite stadium, the Daisy
            Cruiser. The management decided to get a little curious this draft however, by trading their 1st and 5th round picks to get
            another 2nd and 3rd. The season as a whole was nothing but a huge disappointment. Getting spanked 17-1 in the season opener was
            not a great start. The Justave management quickly traded away key pieces such as Brown Kritter and Dark Bones for new ones
            such as King Boo and Yellow Toad, but despite rolling out 20 different players, a league record, nothing clicked. Even in games
            they won, runs were being scored off of errors, which happened in 3 of their 4 wins this season against Trocean, Brendan, and
            Morgan. Hammer Bro was not the same player either, only getting 2 home runs on the year. The management became very non-existent,
            as once this team started losing more games, the coaching presence very quickly vanished from Dave, leaving Justin to manage. They
            would end up going 4-6, missing the playoffs and marking the first time a team not named Marge would finish last in the East.</Passage>

            <Passage>The news got even worse for Justin the pitcher, who quickly checked into Pianta Hospital and immediately regretted his
            decision. A report quickly came out that the doctors had operated on the wrong arm for the Tommy John surgery, quickly sparking
            havoc across the league and the hospital. Many reporters believed that because of this incident, Justin would most likely miss
            the next season too, just a season removed from a perfect 4-0 record and winning Rookie of the Year. </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Season 4</StyledMiniHeader>
            <Passage>Once healthy, Justin the pitcher was allowed to participate in a scrimmage before the PMBL Season 4 draft. He was playing
            3rd base when the absolute sheer embarrassment of being outrun by a Pianta was caught on camera and broadcast to the entire
            league. Due to the nature of the Piantas, and the leagues awareness to them being much more lazy creatures than mostly
            every other player, the league commanded Justin to create an apology video for his actions. Justin would proceed to sit down and
            call out the league, blaming them for his player falloff and the Pianta hospital incident. Criticizing the league for how
            they handled his situation, and not apologizing for not being able to catch a 275+ pound Pianta to 2nd base. He then went on
            the call out the league for punishing his squad last year about the manager Dave bribery sentence. Justin would proceed to
            skip the Season 4 draft to what many fans consider a "managerial vacation". Justin the player would seen get surgery on both
            of his legs, almost effectively ending his playing career.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>What's Next?</StyledMiniHeader>
            <Passage>Justin was present for his Week 1 loss against Morgan, but the fans have been upset and confused by the managerial
            staffs behavior since winning the World Series. They worry the "power of friendship" dynamic which helped the team morale
            in the first 2 seasons may have vanished, and reports of Justin going to grad school have been circling around the league,
            questioning his devotion to managing his franchise. As for the player, it looks like his time in the league may be up,
            after getting 4 surgeries in the past 2 seasons.</Passage>

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