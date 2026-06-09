import { styled } from "styled-components";
import {Link} from "react-router-dom";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
    background-color: #1a1a1a;
`;

export default function Awards4() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/Season4">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 4 Awards</StyledHeader>
        </ContentDiv>
    );
}
