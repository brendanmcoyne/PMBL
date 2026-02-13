import {ContentDiv, StyledHeader, GenImage, ArticleMeta, SeparatorLine, Passage, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";

export default function Cascade() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Cascade CAPTURED by alleged girlfriend, OUT Week 4</StyledHeader>
            <GenImage src="/headlines/Cascade.jpg" alt="Cascade" />
            <ArticleMeta>
                Written by: PMBL News — Feburary 12, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Breaking news has just entered the scene on a very scary and disturbing story.</Passage>

            <Passage>Cascade, last seen in his home roughly around noon on Thursday, February 12th, has allegedly
            been kidnapped and captured by his alleged girlfriend, known by her alias, "Gail".</Passage>

            <Passage>This has come after numerous accounts of frequent disappearance have been reported by worried
            roommate Troy "Drake Maye" Bolduc, and his known clubs he is apart of, most notably The Boston University
            Dodgeball Club, and Alpha Sigma Sigma.</Passage>

            <Passage>His whereabouts are currently unknown, and it has been said that around the time of February 14th
            to be a "high danger time" for some. The Bowser Monsters are worried about his whereabouts currently, as they
            have had no contact with him since shortly after their Week 3 win against Trocean. </Passage>

            <Passage>Until he is spotted within the facility or by any higher ups of the PMBL, he will be listed out
            indefinitely due to a "family matter". The league will be investigating into his and "Gails" whereabouts and
            how this can be prevented in the near future to ensure the safety of all players in the league.</Passage>

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
                        <MiniImage src="/headlines/koopa_behind_the_bars.jpg" alt="Koopa" />
                        <Overlay>
                            <Headline>Koopa Found Guilty of Assault</Headline>
                            <StyledLink to="/headlines/Koopa">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
            </StoryDiv>
        </ContentDiv>
    );
}