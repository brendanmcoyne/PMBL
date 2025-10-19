import {ContentDiv, StyledHeader, GenImage, ArticleMeta, SeparatorLine, Passage, Ruling, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";

export default function Issues() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Dry Bones Gets a Slap on the Wrist</StyledHeader>
            <GenImage src="/headlines/Caucasian_bones_playground.png" alt="Dry Bones" />
            <ArticleMeta>
                Written by: PMBL News — May 6, 2025
            </ArticleMeta>
            <SeparatorLine />
        </ContentDiv>
    );
}