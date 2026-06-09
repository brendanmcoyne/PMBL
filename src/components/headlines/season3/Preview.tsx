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

export default function Preview() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Playoff Preview</StyledHeader>
            <GenImage src="/headlines/playoffs3.jpg" alt="Draft" />
            <ArticleMeta>
                Written by: Delfino Times — May 9, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>For the FIRST TIME EVER, a team from the West Division will make the World Series. Is that because the West is strong? Or (much more likely) that the two East teams are playing each other and the two West teams are playing each other? The world will never know what the real reason is, but the semi-final matchups are nonetheless exciting.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}><span style={{ color: "#999999" }}>THANdrew</span> v.s.
                <span style={{ color: "#3586E8" }}> Isaac</span></StyledMiniHeader>
            <Passage>These two teams split in the regular season, with both games being determined by a single run. The 2-seeded THANdrew boasts the dynamic duo of Purple Toad and Red Pianta, paired with the soul-sucking Birdo and the organization's favorite Boomerang Bro. Finishing the regular season with a record of 7-3, they took the West Division crown and are hoping to continue their strong performance in the playoffs. Isaac brings his blue squad, sporting Officers Bones and Toad, Blue Pianta, and, of course, the menacing Bowser. After a poor first half of the season, the Isaac franchise rallied, finishing the back half of the season with a 4-1 record and locking in the 3 seed. Analysts have high hopes for this matchup, with multiple sources expecting the series to go 5 games. Game 1 is set to start at 2:00 PM EST.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}><span style={{ color: "#CC0000" }}> Brendan</span> v.s.
                <span style={{ color: "#F1C232" }}> James</span></StyledMiniHeader>
            <Passage>These two teams also split in the regular season, with both matchups happening at the Daisy Cruiser. While James ended with the higher run differential across the two games, Brendan’s team should not be taken lightly. Petey Piranha is (as always) a menace that needs to be addressed. Combined with Wario, the “Bad Breath Bomber,” and Funky “Gone Forever” Kong, Brendan boasts a club with powerful offense, putting up the most runs this season. Similarly, James also put up lots of runs, but gave up far fewer, having the second-highest +/- in all of PMBL. The Red Curtain of Fire Bro and Red Kritter stand tall in the middle infield, with Bowser Jr suppling plenty of slippery painted balls to advance all of James’ consistent contact hitters. Analysts favor James in this matchup, with a split between a sweep and a gentleman’s sweep. The fans are excited regardless. This matchup does not yet have a Game 1 start time (that will be revealed in due time).</Passage>

            <Passage>And with that, the Season 3 PMBL playoffs will begin! Here’s to home runs, few errors, and Brendan not getting screwed over by the ghosts at Luigi’s Mansion.</Passage>

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