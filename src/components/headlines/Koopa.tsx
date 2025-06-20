import { styled } from 'styled-components';

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 2rem 1rem;
    color: white;
`;

const ArticleMeta = styled.div`
  font-size: 0.9rem;
  color: #aaa;
  margin: 8px 0 16px 0;
  font-style: italic;
  text-align: center;
`;

const SeparatorLine = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 0 0 30px 0;
  width: 80%;
  max-width: 600px;
`;

const StyledHeader = styled.h1`
    font-size: 3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    max-width: 90%;
    font-weight: 600;
`;

const GenImage = styled.img`
    max-width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: contain;
    border: 3px solid black;
    padding: 8px;
    margin: 20px 0;
    background-color: white;
`;

const Passage = styled.span`
    display: block;
    max-width: 800px;
    text-align: left;
    margin: 20px auto;
    line-height: 1.7;
`;

const Ruling = styled.div`
    max-width: 800px;
    margin: 30px auto;
    background-color: #f4e1c1;
    color: #222;
    border-radius: 8px;
    border: 2px solid #444;
    padding: 25px 30px;
    font-family: "Georgia", serif;
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);

    h2 {
        margin-bottom: 1rem;
        font-size: 1.6rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-bottom: 2px solid #8b6e3a;
        padding-bottom: 8px;
        color: #6b4e1a;
    }

    p, pre {
        margin: 1rem 0;
        white-space: pre-wrap;
    }
`;

export default function Koopa() {
    return (
        <ContentDiv>
            <StyledHeader>Koopa found Guilty of Assault</StyledHeader>
            <GenImage src="/koopa_behind_the_bars.jpg" alt="Koopa"/>
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
        </ContentDiv>
    );
}
