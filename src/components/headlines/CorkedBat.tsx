import {ContentDiv, StyledHeader, GenImage, ArticleMeta, SeparatorLine, Passage, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";

export default function CorkedBat() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Corked Bat Allegations Have Caused Outrage</StyledHeader>
            <GenImage src="/corkedbat.jpg" alt="Corked" />
            <ArticleMeta>
                Written by: Delfino Times — September 8, 2025
            </ArticleMeta>
            <SeparatorLine />

            <Passage>In an already exhilarating start to Season 2, rumors have been circulating around the league
            accusing the Magikoopas of using corked wands for bats.</Passage>

            <Passage>Accusations began running rampant as Red and Yellow Magikoopa made their Season 2 debuts in the
            second game of Week 1. As the game began, both managers Trocean and Marge joked from their respective
            dugouts, accusing the other team’s Magikoopa of corking their wand to improve their batting ability. What
            started as friendly banter between new managers quickly turned into embittered jeers, as the Magikoopas
            began consistently driving balls into the outfield. While a majority of those balls were hunted down, the
            power with which the balls were hit shocked audiences, since the Magikoopas rank in the bottom 10%
            of the league in both slap hit and charge hit power. Each manager was continuously calling their
            opponents Magikoopa a cheater.</Passage>

            <Passage>Blue Magikoopa’s performance further raised eyebrows in the next game between
            Brendan and Justave. He batted 2 for 3 with an RBI double in an ultimate 3-2 loss for Manager Brendan.
            His performance landed him in the top 8 of the league in OBP, SLG, and OPS, but further pushed the Managers
            Union to consider investigating these claims.</Passage>

            <Passage>PMBL fans are likely reminded of the Season 1 corked bat and magical sorcery accusations that Red
            Magikoopa faced after being a 2x Game MVP for Manager Isaac. Manager Morgan claims the Magikoopas are
            “just like that,” but refused to say whether he believed the Magikoopas were criminals or had hidden power
            that the MSPN NextGen Stat rankings did not show.</Passage>

            <Passage>No investigation has been formally opened by the Managers Union or the league itself. However, all
            eyes will be on the final Magikoopa, as indications suggest that Green Magikoopa is in line to make his
            Season 2 debut for THANdrew as they take on Isaac in the final game of Week 1.</Passage>

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
    )
}