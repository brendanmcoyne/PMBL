import { ContentDiv, StyledHeader, GenImage, ArticleMeta, SeparatorLine, Passage, NewsletterRuling, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline} from "../../components/headlines/HeadlineStyles";

export default function MiiBreakout() {
    return (
        <ContentDiv>
            <StyledHeader>Head Analyst Predicts Mii Breakout Season</StyledHeader>
            <GenImage src="/miibaseball.jpg" alt="Miis" />
            <ArticleMeta>
                Written by: PMBL News — June 26, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>The faces of the league are typically the best statistical players. King K Rool for his hitting, Petey Piranha for his
            fielding, and Bowser for his pitching to name a few. The stars of the league are usually dominant in a certain aspect of play on the diamond.</Passage>

            <Passage>However, there is a group of players within the league that usually go unrecognized. Maybe it's because of their average stats,
            or their lackluster celebrations, this group of individuals within the PMBL are not thought of as stars of the league.</Passage>

            <Passage>That group of individuals are the Miis. The scrawny group of players coming all the way from Wuhu Island known for slap hitting
            and decent fielding have been very serviceable for many teams in Season 1. They make up roughly 3 players per roster, with at least
            one usually getting playing time each game.</Passage>

            <Passage>The Mii Players Union (M.P.U.) believes that Miis deserve a lot more credit and respect on the field and in the press. The M.P.U. believes they are
            some of the most, if not the most, hardest working players in the league as a whole.</Passage>

            <Passage>The Head Analyst of the league came out with this statement earlier this week: "I truly belive that Mii stock will boom this upcoming season.
            They are some of the most underrated slap hitters and fielders in the league. They may not hit a home run when they get up to bat,
            but they can and will easily put your team in a position to succeed. They. Are. VALUABLE." He comprised some general stats for viewers
            to know how important Miis were in the league:</Passage>

            <NewsletterRuling>
                <h3>MII STATISTICS</h3>
                <p><em>Brought to you by the PMBL Statistics Department</em></p>
                <p>Total Miis Drafted in Season 1: <strong>25</strong></p>
                <p>Miis that played at least 1 game: <strong>21/25 (84%)</strong></p>
                <p>Miis that played at least 5 games: <strong>20/25 (80%)</strong></p>
                <p>Miis that played every game: <strong>16/25 (64%)</strong></p>
                <p>Miis who played in the Playoffs: <strong>Bob Marley, Gramms, Entity 404, Tate McRae, Gramps, Danny B, Geek Squad, Antenna</strong></p>
                <p>Miis who won Game MVP: <strong>Hamburger (2x), Bertha, Jesstithyn, Alfonzo</strong></p>
                <p>Miis who won other awards: <strong>MLK (Most Improved)</strong></p>
            </NewsletterRuling>

            <Passage>Theres been some great stories for some Miis. Many Miis were given a chance by their managers to play, and
            made sure they would capitalize on the opportunity.</Passage>

            <Passage>One of them was Nose, an orange shirt Mii who was selected as the last pick of the draft (12th Round, 96th Overall) and was
            not used on Manager Brendan's team at all during his tenure. Near the end of Week 5, Nose was traded to Manager DANdrew and the Spitballs
            in return for Michelle Obama. Nose was put into the lineup in Week 6 at shortstop, and played impressive ball, helping DANdrew rally
            off 3 wins to end the season at 5 - 5, just barely missing the playoffs.</Passage>

            <Passage>He tied for runner up in both the Most Improved Player and Comeback Player of the Year awards, and even got a job at the Mushroom
            Kingdom Herald during his down time. </Passage>

            <Passage>Another orange Mii was Tate McRae, who Manager James took as the penultimate pick (12th Round, 95th Overall) and was put into
            action in Week 7, after Manager James and the Monsters dropped to a 3 - 3 record after a bad 7 - 13 loss to Christach. In a lineup where there
            was no abundance of hitting, Tate McRae added even more, by recording hit after hit almost every single game. She
            became a pivotal player in the Monster's championship run (along with Entity 404).</Passage>

            <Passage>Many other Mii situations, such as Bob Marley going 7 - 2 in the regular season as Manager Brendan's starting pitcher, Gramps and
            Danny B being stars in the outfield for Manager Morgan and helping the Monkeys win the West Division, and Bertha from
            Manager Matt becoming a fan favorite, have showed the league and its viewers how impactful the Miis are to the PMBL.</Passage>

            <StyledMiniHeader style={{marginTop: "10px"}}>So what's the downside?</StyledMiniHeader>

            <Passage>Despite all the feel good moments for some Miis, theres been some hardships for others.</Passage>

            <Passage>Manager Isaac began playing "Seven Nation Army" when 1st Basemen Jack White would step up to the plate, and his
            production took a noise dive along with the team, going from 3 - 1 to 4 - 6 and missing the playoffs.</Passage>

            <Passage>The world renowned golfer Antenna was a decent slap hitter for Manager Justin and the Knights, cruising to a 6 - 4
            record and taking the #4 seed in the playoffs. Against Manager Brendan in the Conference Series, Antenna went an astonishing
            0-for-10 in his at-bats, as the Knights got swept 3-0 by the Wild. </Passage>

            <Passage>The most concerning stat for the Miis is their productivity in larger amounts. Managers Matt, Isaac, and DANdrew started
            at least 3 Miis (4 for Matt) in all of their games. They each went 4 - 6, 4 - 6, and 5 - 5 respectively, with all 3 of them missing
            the playoffs. </Passage>

            <Passage>The league looks to introduce more Miis into the mix next season, hopefully making the Mii/total player pool slightly more
            competitive. The Managers Union will be discussing any changes that need to be made right before the Season 2 Draft.</Passage>
            <SeparatorLine />
            <StyledMiniHeader>Check out more stories below!</StyledMiniHeader>

            <StoryDiv>
                <Stories>
                    <Story>
                        <MiniImage src="/koopa_behind_the_bars.jpg" alt="Koopa" />
                        <Overlay>
                            <Headline>Koopa Found Guilty of Assault</Headline>
                            <StyledLink to="/headlines/Koopa">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>

                <Stories>
                    <Story>
                        <MiniImage src="/Caucasian_bones_playground.png" alt="Dry Bones" />
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