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

export default function DraftRecap3() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Draft Recap</StyledHeader>
            <GenImage src="/headlines/draft3.jpg" alt="Draft" />
            <ArticleMeta>
                Written by: PMBL News — January 21, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Time has flown by, and now its time for the next PMBL Season. A ton of changes have been made to this
            years season. This years draft was probably the most interesting of the 3 so far, with multiple teams
            sabotaging each other. Lets begin!</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #1: <span style={{ color: "#9900FF" }}>Trocean</span></StyledMiniHeader>
            <Passage>Surprisingly the first overall pick was not Brendans, and even more surprisingly neither manager
            showed up for the draft. As expected, Trocean picked Donkey Kong, making him the #1 overall pick for the 2nd time
            in 3 years. Their draft took a few monkeys like Baby DK and Tiny Kong, along with all the brown Miis, with very
            hyped up rookie Sherpa. Manager Troy was talked to after the draft, saying he did not take players in revenge of
            Brendan taking monkeys, but taking Wiggler, King Boo, Waluigi and Blooper seemed awfully targeted. This franchise
            hopes to get out of their 3-7 record.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #2: <span style={{ color: "#CC0000" }}>Brendan</span></StyledMiniHeader>
            <Passage>Despite not getting the 1st overall pick, Brendan would slide into the 2nd overall pick, and take both league
            MVPs Petey Piranha and Funky Kong. That second pick would cause some tension, as Manager Troy from Trocean would then
            take Wiggler and King Boo from him. THANdrew was also not kind to Brendan, taking Birdo off the board with their first
            overall pick, and later taking Purple Toad for Brendan's "Purple Outfield" idea. Many managers were stunned in disbelief
            by how Manager Troy was drafting in spite of Brendan. </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #3: <span style={{ color: "#3586E8" }}>Isaac</span></StyledMiniHeader>
            <Passage>After the first 2 picks went up, Isaac very giggly picked Bowser as his first overall pick creating the 1st
            of 2 all blue teams. Isaac was one of the few teams who wasn't really cannibalized by any other team other than
            THANdrew trying to make the other half of the blue squad. Despite really wanting Yellow Toad, Isaac had a very good
            draft, and the league is projecting him as the odds-on favorite to win the World Series.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #4: <span style={{ color: "#FF9900" }}>Justave</span></StyledMiniHeader>
            <Passage>The drama never ends with this team. After being found guilty by unanimous decision, Justave has been banned from
            playing any home games at the Daisy Cruiser this year. They would be the first team to ever have a trade in the middle of the
            draft, trading their 1st and 5th round picks for THANdrew's 2nd and 3rd. Justin, known for bringing back talent from years
            past, would bring back World Series MVP Hammer Bro, and Pitcher of the Year Bob Marley. However, Marge would then start
            snagging multiple key players that made their team great, such as Green Kritter, Green Shy Guy, and Geek Squad. Oh and Luigi
            I guess. Justave would take Hamburger in a retaliation move against Marge in the 11th. Justave took Mario as their captain,
            marking the first time Justin will not have Luigi as his captain.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #5: <span style={{ color: "#6AA84F" }}>Marge</span></StyledMiniHeader>
            <Passage>Looking to bounce back from last years campaign, Marge quickly took big names of King K Rool and Green Kritter.
            They would snag Luigi from Justave and build a mostly green colored squad. They took 3 rookies for their roster,
            Miss Jones, Piggie, and Pikachu, to hopefully give their team a good mii presence. Matt also took Chungy again, marking
            only 1 of 2 players left who have played for the same organization throughout the entire history of PMBL. It'll also
            be interesting seeing Green Shy Guy, the guy who got shot, on a Justave division rival.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #6: <span style={{ color: "#FF00FF" }}>Morgan</span></StyledMiniHeader>
            <Passage>Back to back 6 seed positions in the draft for Morgan, this time King K Rool did not slide to him, being taken
            the pick prior. Morgan would start off his draft going for good pitchers, both Daisy and Peach. He would bring back
            Dry Bones, the 2nd of 2 players to play for the same team all 3 seasons. His draft would consist of multiple slap
            hitters, such as batting percentage leader Green Toad and Toadette. He would also bring back former outfielders
            Gramps and Danny B from his Season 1 squad. He also brought in golfer champion Antenna and fan favorite Nose. A lot
            of teams are speculating Morgan to have an off year due to his lack of hitting, but his teams usually start slow so
            we'll see.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #7: <span style={{ color: "#999999" }}>THANdrew</span></StyledMiniHeader>
            <Passage>With Manager Andrew taking a tiny step back in the organization this year, Thomas went out and became
            the first team to have 2 first round picks, taking Birdo and Boomerang Bro. He would then go to build the 2nd all
            blue team with Isaac, taking 4 blue miis along with Blue Kamek and Blue Shy Guy. This year Birdo will be separated
            from her lover Wiggler and synergized partner Petey Piranha. Same with Morgan's team, they lack hitting, yet have good
            synergy with all the blue characters, including controversial rookie "Bonnie". With back to back seasons just barely
            missing the playoffs, THANdrew is hoping that this is the year they finally make it.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #8: <span style={{ color: "#F1C232" }}>James</span></StyledMiniHeader>
            <Passage>Everyone in the draft room took a huge sigh of relief seeing James fall from back to back 2nd overall picks
            to 8th. He went primarily red, taking Fire Bro, Red Kritter, and Red Pianta with his first 3 picks. He then began switching
            between Red and Yellow, selecting Bowser Jr as his captain. This year will be the first time Bowser Jr will be a captain, and
            emerge from his dads shadow. He brought back his favorite mii Zekrom to help in the pitching department in an
            effort to make it back to the World Series, which the rest of the league wouldn't be too happy about.</Passage>

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