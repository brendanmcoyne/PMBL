import { styled } from 'styled-components';

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 3rem 1rem;
    color: #f0f0f0;
`;

const Passage = styled.span`
  display: block;
  max-width: 800px;
  text-align: left;
  margin: 20px auto;
  line-height: 1.7;
`;

const StyledHeader = styled.h1`
    font-size: 3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    max-width: 90%;
    font-weight: 600;
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

const NewsletterRuling = styled.div`
  max-width: 800px;
  margin: 30px auto;
  background-color: #fef9e7; /* soft cream */
  color: #333;
  border-radius: 8px;
  border: 1.5px solid #d4c27a;
  padding: 20px 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.4rem;
    color: #b89830;
    border-bottom: 2px solid #d4c27a;
    padding-bottom: 6px;
    letter-spacing: 1.2px;
  }

  p {
    margin-bottom: 1rem;
  }

  em {
    font-style: italic;
    color: #555;
  }
`;

export default function DryBones() {
    return (
        <ContentDiv>
            <StyledHeader>Dry Bones gets a slap on the wrist</StyledHeader>
            <GenImage src="/Caucasian bones playground.png" alt="Dry Bones" />
            <ArticleMeta>
                Written by: PMBL News — May 6, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>
                Around Week 3, star hitter Dry Bones from Manager Morgan's Diddy Monkeys began facing severe backlash due to accusations made
                about him the week prior. The league was led to believe that Dry Bones had been spotted numerous times around preschools at
                peculiar hours. Manager Matt of the Yoshi Eggs said, "J-nasty and I just witnessed Caucasian bones walk into the Boston children’s museum"
                in the middle of Week 5. At the start of Week 7, Manager Morgan Odysseus Hartwell has this to say about his player:
            </Passage>

            <Passage>
                "Fake f*cking news about Caucasian bones I f*cking hate these hacks in the media who drum up obvious nonsense sh*t all the f*cking
                time for a quick buck and have zero respect for the game or the players, absolutely shameless character assassination"
            </Passage>

            <Passage>
                Allegations continued throughout the rest of Week 7 and the rest of the season, as fans and other managers continued to express their
                opinions on the player. "I'm a huge Caucasian bones hater", said Manager Brendan.
            </Passage>

            <Passage>
                The matter got even worse for Caucasian Bones, as the trial was scheduled to be right before the Conference Series against Manager James,
                and the verdict to be released during the series. However, the court had an unfavorable ruling:
            </Passage>

            <Ruling>
                <h2>VERDICT</h2>
                <pre>
                    IN THE COURT OF HONORABLE JUDGE TOADSWORTH Mushroom Kingdom District{"\n"}
                    Court Case No. 24-BONE-659{"\n"}
                    The Kingdom v. Dry Bones{"\n\n"}
                    After four grueling hours of testimony, the Court has reached a verdict in the matter of The Kingdom v. Dry Bones, in which the skeletal
                    Koopa “Caucasian Bones” was accused of “generally creeping out the preschool and exhibiting suspicious behavior toward individuals under
                    the age of 18.”{"\n\n"}
                    The jury - consisting of five Goombas, one Chain Chomp, Rosalina, and Black Toad - find the defendant:
                    Not guilty of unlawful “bonering” in a minor-zoned area,but guilty of persistent loitering and behavior deemed unsettling and inappropriate
                    for proximity to minors.{"\n\n"}
                    Sentence: Dry Bones is hereby ordered to remain at least 500 feet away from all educational institutions, playgrounds, mini-golf courses,
                    and nurseries. Furthermore, he must attend six weeks of therapy, hosted by Libloshi. If he follows through by not skipping any days of
                    therapy and maintaining his distance at all times, he will not be suspended for any playing time in Season 2 of the PMBL. Court is adjourned.{"\n\n"}
                    This verdict is final, unless appealed to the High Court of Peach’s Castle.{"\n"}
                    Hon. Judge Toadsworth presiding
                </pre>
            </Ruling>

            <Passage>
                Right after the verdict was dropped, the managers of the league rapidly expressed the feelings about the verdict:
            </Passage>

            <Passage>
                "JURY BIAS JURY BIAS ITS ALL GOOMBAS ITS ALL HIS FRIENDS THIS IS A HUMILIATION OF THE MUSHROOM KINGDOM LEGAL SYSTEM", Manager Andrew
            </Passage>

            <Passage>
                "THIS IS RIDICULOUS. AN OUTRAGE. THAT MAN SHOULD BE LOCKED UP", Manager Isaac
            </Passage>

            <Passage>
                "I'm chilling", Manager Morgan
            </Passage>

            <Passage>
                The Mushroom Kingdom Herald even went on to make a statement about this supposed robbery of the legal system:
            </Passage>

            <NewsletterRuling>
                <h3>JUDGE TOOK TRIP FROM BOWSER</h3>
                <p><em>By: Nose, Mushroom Kingdom Herald staff reporter</em></p>
                <p>
                    A top federal judge took an all-expense trip to Seaside Kingdom from Bowser, according to leaked financial records.
                </p>
                <p>
                    Judge Toadsworth visited the beloved vacation spot with his extended family without paying a dime, instead using
                    a trip voucher gifted by a top Bowser aide.
                </p>
                <p>
                    This comes as Toadsworth faces controversy after his ruling on a recent high-profile case gave an accused child creep no jail time.
                </p>
                <p>
                    “It’s a clear ethical violation,” said Elvin Gadd, a professor of law at Western Mushroom University. “This is grounds for disbarment.”
                </p>
                <p>
                    Toadsworth declined to comment.
                </p>
                <p>
                    A representative for Bowser declined an interview but provided a written statement.
                </p>
                <p>
                    “Bowser is a family man who deeply believes in this kingdom’s justice system,” the representative wrote.
                </p>
            </NewsletterRuling>

            <Passage>
                The league as a whole is now concerned that Toadsworth, AKA "The Judge", has ruined his credibility and his draft stock going into
                Season 2, after being a steal in the sixth round and being one of the only bright spots on Manager Chris and Zach's league low 3-7 record team.
                The Managers Union is also concerned about the credibility of the Mushroom Kingdom legal system going forward with any high profile
                cases, especially any those in acquaintance with Bowser.
            </Passage>

            <Passage>
                Dry Bones would go onto having a serviceable game in Game 3 of the Conference Series, clinching Manager Morgan's first win of the series
                in the 10th inning at Daisy Cruiser. However Manager James would win the next game to clinch his ticket to the World Series with a 3-1
                series win. Dry Bones denied to speak to the media following the series loss.
            </Passage>
        </ContentDiv>
    );
}