import { styled } from "styled-components";

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
    align-items: center;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const GenImage = styled.img`
    max-width: 100%;
    width: 20vw;
    height: auto;
    margin-bottom: 30px;
`;

export default function CurrentSeason() {
    return(
        <ContentDiv>
            <StyledHeader>This page is under construction.</StyledHeader>
            <GenImage src="/145px-Wiggler-MSS.webp" alt="Professional Mario Baseball League Logo" />
        </ContentDiv>
    );
}