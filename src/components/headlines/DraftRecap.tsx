import {ContentDiv, StyledHeader, GenImage, ArticleMeta, SeparatorLine, Passage, NewsletterRuling, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";

export default function DraftRecap() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Draft Recap</StyledHeader>
            <GenImage src="/draft.jpg" alt="Draft" />
            <ArticleMeta>
                Written by: PMBL News — September 2, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>The PMBL Season 2 Draft has now been completed. From obvious 1st round candidates to shocking high rounders,
                from reunions to rivals, and from enemies to teammates, this years draft had an amazing blend of surprises and funny
                moments. We're here to recap what every team did in the draft.</Passage>

            <StyledMiniHeader>Pick #1: Brendan</StyledMiniHeader>
            <Passage>Coming off a 7-3 record and getting swept in the World Series, Team Brendan once again recieved the
            #1 Overall selection in the draft. This time, he used the "if you can't beat 'em, join 'em" strategy by drafting
            key players from the team that destroyed him the year prior. He took Bowser, Bowser Jr, and Blue Dry Bones
            from Manager James, focusing on a blue based team, adding 3 Blue Miis, and rookie Mii Claudius into the mix as well.</Passage>

            <StyledMiniHeader>Pick #2: James</StyledMiniHeader>
            <Passage>The defending champs land in the 2nd Overall selection and land the reigning MVP Petey Piranha to bolster
            the hitting core, along with fan favorite Wiggler. Seeing their former captain Bowser leave was tragic, however picking
            up star pitcher Birdo will help on the defensive side. Reporters have speculated the move to reunite the former lovers
            Wiggler and Birdo onto the same team, describing their chemistry as a "wild one". It'll be interesting if their chemistry
            will be the core of their success or their destruction.</Passage>

            <StyledMiniHeader>Pick #3: THANdrew</StyledMiniHeader>
            <Passage>After the death of Manager Danny Dolan, Manager Andrew decides to bring in Dannish manager Thomas Larsen IV, the first
            European. After some confusion on whether they wanted Fire Bro or Hammer Bro, they ultimately took former Gold Glove Fire Bro
            and reigning Defensive Player of the Year Blue Kritter. THANdrew also decided to bring back captain Waluigi, along with beloved
            shortstop and fan favorite Nose, along with rookie Larry the Cucumber, Nose's cousin. After rattling off 3 wins to end their
            season and just barely missing the playoffs at 5-5, THANdrew is expecting a playoff run this year with this core.</Passage>

            <StyledMiniHeader>Pick #4: Trocean</StyledMiniHeader>
            <Passage>Less than 24 hours before the draft, Managers Ocean Man and Troy Bolduc were appointed to team Christach after
            a shocking departure from the league. Landing in the 4th Overall Selection, they decide to take Mario and create the Red
            Rifle team, with 10 of their first 11 players being red characters. Highlighted by Morgan Hartwell Man of the Year
            recipient Dark Bones and Most Improved Player from Season 1, MLK, Trocean is looking to beat Christach's previous 3-7
            record with ease. </Passage>

            <StyledMiniHeader>Pick #5: Isaac</StyledMiniHeader>
            <Passage>Looking for a turnaround after Season 1's late season collapse, Manager Isaac receives good fortune by snagging
            previous #1 Pick Donkey Kong in the 5th selection. He goes for the All-Monkey team, snagging every single monkey
            except for Diddy Kong, creating a strong chemistry throughout the batting order. After the shocking pick of Paragoomba,
            Isaac snags 2 highly regarded rookies in Betty White and Justin Nascimento with his next 2 picks. Jack White will
            also be returning to his lineup, but will need to get back into his first-half form from last season. </Passage>

            <StyledMiniHeader>Pick #6: Morgan</StyledMiniHeader>
            <Passage>Morgan Hartwell was enraged to see his bitter rival take his beloved Petey Piranha, so in a reverse move,
            Manager Morgan would take Manager James' best hitter in King K. Rool with his first selection. To the distaste
            of the rest of the league, Morgan would back Caucasian Bones by selecting him once again, after fulling backing
            his player during the scandal last season. Diddy Kong is making a return to his team once, as the former captain
            shockingly dropped all the way to the 10th round, the largest slide ever for a captain. It is unclear if Diddy will get
            any playing time, let alone the captaincy once again. Morgan would also snag not only 1, but 2 top notch golfers, Antenna
            rookie John Daly, who will look to be key components to the reigning West Division champ.</Passage>

            <StyledMiniHeader>Pick #7: Marge</StyledMiniHeader>
            <Passage>With a heavier analytical approach this time around and Manager George Dailey, Manager Matt looks to end the
            stretch of 2 wins in his last 8 games. Adding an elite pitching core to start off the draft with both King Boo and Boo,
            they would then start to create a "Yellows Only" squad to create a much needed chemistry in their outfield. Their reunion
            with both Chungy and Hamburger will definitely help in their defensive strategy, as the managers seemed to take a defense
            oriented strategy coming into the draft. The 3 Toad lineup (Yellow Toad, Purple Toad, Toadette) will definitely provide
            a significant amount of speed to their roster, along with an abundance of slap hitting. </Passage>

            <StyledMiniHeader>Pick #8: Justave</StyledMiniHeader>
            <Passage>Last but certainly not least, Justin cruised to the playoffs with a 6-4 record last year off the power of
            friendship and in the wake of tragedy. Almost every headline was surrounding this team, which will continue again
            this year. Adding former downhill skier David Moro to his managing squad, Team Justave looks to bring the magic of
            last year into a championship run this year. They start by bringing back slugger Green Kritter and Captain Luigi from
            last years squad, along with All Star Game MVP Green Dry Bones. One of the biggest storylines going into the draft
            was if Manager Justin would be reunited with Green Shy Guy, and his dream would come true in 6th round. Manager Justin
            would bring back a record 4 players from his previous team, with the 4th being Geek Squad.</Passage>

            <Passage>However, not everything would be sunshines and lollipops for the players on Team Justave, as in the 9th round,
            the managers made one of the most shocking draft picks in league history. Koopa was selected by Justave, the criminal
            who bombed both Green Shy Guy and Red Shy Guy the season prior. Controversy quickly erupted within the draft room,
            truly questioning the discipline within the locker room. Koopa is suspended for 3 games and is not eligible to play
            until Week 4, but Team Justave is willing to take that bet on him. The Mushroom Kingdom Herald had this to say:</Passage>

            <NewsletterRuling>
                <h3>BREAKING: Koopa, Green Shy Guy drafted to same team</h3>
                <p><em>By: Nose, Mushroom Kingdom Herald staff reporter</em></p>
                <p>Following months of legal action between the two, Koopa and Green Shy Guy will play together in the upcoming Mario Baseball season.</p>
                <p>Green Shy Guy and Red Shy Guy were victims of a hit-and-run last year near Mario Stadium. Koopa was found guilty on 3 counts related to the shooting.</p>
                <p>Team Justave drafted Green Shy Guy in the 6th round, followed by Koopa in the 9th.</p>
                <p>Neither player responded for comment.</p>
                <p>While the league suspended Koopa for the first 3 games, the two will practice together every week.</p>
                <p>Speaking on MSPN, analyst Pat McAfee expected tensions during and outside of games.</p>
                <p>“You can’t pair two players with so much history without expecting some tension,” he said.</p>
                <p>The regular season starts next week.</p>
            </NewsletterRuling>

            <Passage>And with that, the Season 2 Draft comes to an end. The regular season will kick off with the 48 Buswell Battle
            between James and Morgan, with King K Rool back in the house he built, and Petey Piranha going against his former team.</Passage>

            <SeparatorLine />
            <StyledMiniHeader>Check out more stories below!</StyledMiniHeader>

            <StoryDiv>
                <Stories>
                    <Story>
                        <MiniImage src="/miibaseball.jpg" alt="Mii" />
                        <Overlay>
                            <Headline>Head Analyst Predicts Mii Breakout Season</Headline>
                            <StyledLink to="/headlines/MiiBreakout">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
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