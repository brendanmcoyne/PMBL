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
`;

const GenImage = styled.img`
  width: 20%;
  height: auto;
`;

export default function Draft2() {
    return(
        <ContentDiv>
            <StyledHeader>This page is under construction.</StyledHeader>
            <GenImage src="/145px-Wiggler-MSS.webp" alt="Wiggle my Iggle" />
        </ContentDiv>
    );
}