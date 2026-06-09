import { styled } from "styled-components";
import {Link} from "react-router-dom";
import { ToggleButton } from "../../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;


export default function Other4() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/Season3">← Back</Link>
            </ToggleButton>

        </ContentDiv>

    );
}