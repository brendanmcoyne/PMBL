import {ContentDiv, StyledHeader, GenImage, ArticleMeta, SeparatorLine, Passage, Ruling, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";

export default function Koopa() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Koopa found Guilty of Assault</StyledHeader>
            <GenImage src="/headlines/koopa_behind_the_bars.jpg" alt="Koopa"/>
            <ArticleMeta>
                Written by: PMBL News — June 2, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>
                After the Week 6 win against Manager Isaac and the Mario Fireballs, two of Manager Justin's players, Red Shy Guy and
                Green Shy Guy were shot outside of Mario Stadium in a hit and run. This news was broadcasted on the Week 7 news report
                along with the story about Dry Bones.
            </Passage>

            <Passage>
                From the beginning, it was believed by the Managers Union that Koopa from Bowser Monsters was at fault for this disaster.
                As the rumors continued to spread about Koopa before the investigation, Manager James quickly made this statement:
            </Passage>

            <Passage>
                "Koopa Troopa will be suspended indefinitely while being under investigation for involvement in the attacks on the shy guys"
            </Passage>

            <Passage>
                After being the only player on Manager James' team to not get any playing time, Koopa became the first player in the league to
                see their season end, as Manager James put his foot down due to his actions. Two days later, Manager James had this to say:
            </Passage>

            <Passage>
                "After the first round of investigations Koopa Troopa has been suspended indefinitely by the league without pay. During week 6
                his kart was found to hold a dangerous weapon that may be related to the shooting of the shy guys. This weapon has now been taken
                in for further investigation."
            </Passage>

            <Passage>
                The weapon in question was found to be a Blue Shell, and the managers reacted accordingly. Fear struck the league as an attack of
                this level revealed deep systematic problems between players, the court was ready to launch a full investigation. Manager Matt of
                the Yoshi Eggs also claimed that, "Red koopa denies any affiliation with the Koopa Klux Klan as well as the Communist party".
            </Passage>

            <Passage>
                Weeks later, Manager James and the Bowser Monsters would go on to win the first ever PMBL World Series, sweeping Manager Brendan
                and the DK Wild 3-0. Shortly thereafter, the court ruling was released to the public:
            </Passage>

            <Ruling>
                <h2>VERDICT</h2>
                <pre>
    IN THE COURT OF HONORABLE JUDGE TOADSWORTH Mushroom Kingdom District{"\n"}
                    Court Case No. 25-KOOPA-912{"\n"}
                    The Kingdom v. Koopa Troopa{"\n\n"}
                    After weeks of testimonies and deliberation, the Court has reached a verdict in the matter of The Kingdom v. Koopa Troopa, in which
                    the defendant Green Koopa was accused of “vehicular shelling” of both Red Shy Guy, also known as Ruy Guy, and Green Shy Guy, known as
                    Gruy Guy, shortly after their 9-4 win against Isaac in Week 6.{"\n\n"}
                    The jury — consisting of Yellow Shy Guy, Green Dry Bones, 2 Piantas, Baby Luigi, and 4 Nokis — finds the defendant:
                    Guilty of aggravated assault with a deadly weapon from his Bullet Bike, guilty of reckless endangerment by launching projectiles from
                    a moving vehicle, and guilty of speeding in a school zone during school hours{"\n\n"}
                    Sentence: Koopa Troopa has been SUSPENDED for the first 3 games of the Season 2 PMBL season. He will still be available on draft
                    night, however managers have been informed he may not play until Week 4. Any MVPs that Koopa Troopa wins during Season 2 will be
                    STRIPPED and given to the 2nd highest point scoring player. He owes $16,750 in damages to the victims for medical bills and
                    emotional damages. Violating his 3 game suspension will cause an indefinite suspension from playing time. His license will
                    not be revoked.{"\n\n"}
                    The Jury has also noted that both the Koopa Klux Klan and manager James had no involvement in the drive by shooting. No evidence
                    was found for any teammates or klansman being aware of the intentions of Koopa, and neither the klan nor the team will be punished
                    due to his actions. {"\n\n"}
                    This verdict is final, unless appealed to the High Court of Peach’s Castle.
                    Hon. Judge Toadsworth presiding
  </pre>
            </Ruling>


            <Passage>
                Manager Justin was relieved in the fact that his players got retribution, and that Koopa was brought to justice. Manager James was also
                relieved that him and his team would not face any punishment due to Koopa's actions. To this day, this has been one of the harshest rulings
                that the court has given to a sports related case. The punishment has not only struck fear into players and managers to follow the rules,
                but has given the court some of it's credibility back after the controversial Dry Bones ruling.
            </Passage>

            <SeparatorLine />
            <StyledMiniHeader>Check out more stories below!</StyledMiniHeader>

            <StoryDiv>
                <Stories>
                    <Story>
                        <MiniImage src="/headlines/draft.jpg" alt="Draft" />
                        <Overlay>
                            <Headline>Season 2 Draft Recap</Headline>
                            <StyledLink to="/headlines/DraftRecap">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
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
