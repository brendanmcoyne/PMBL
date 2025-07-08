import { styled } from "styled-components";
import { StyledHeader } from "../components/CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const GenImage = styled.img`
    width: 20%;
    height: auto;
    @media screen and (max-width: 1000px) {
        width: 40%;
    }
`;

export default function CurrentSeason() {
    return(
        <ContentDiv>
            <StyledHeader>This page is under construction.</StyledHeader>
            <GenImage src="/145px-Wiggler-MSS.webp" alt="Professional Mario Baseball League Logo" />
        </ContentDiv>
    );
}