import { styled } from "styled-components";
import {Link} from "react-router-dom";
import { ToggleButton } from "../../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem; 
`;

const StyledHeader = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0px 0px 12px #ff0;
    @media screen and (max-width: 1000px) {
        font-size: 55px;
    }
`;

const GenImage = styled.img`
    width: 20%;
    height: auto;
    @media screen and (max-width: 1000px) {
        width: 40%;
    }
`;

export default function Standings2() {
    return(
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season2">← Back</Link>
            </ToggleButton>
            <StyledHeader>This page is under construction.</StyledHeader>
            <GenImage src="/145px-Wiggler-MSS.webp" alt="Professional Mario Baseball League Logo" />
        </ContentDiv>
    );
}