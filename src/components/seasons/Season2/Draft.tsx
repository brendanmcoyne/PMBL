import { styled } from "styled-components";
import {Link} from "react-router-dom";

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

const ToggleButton = styled.button`
    background-color: lightgray;
    color: darkblue;
    font-size: 1.5rem;
    border: none;
    padding: 7px 15px;
    cursor: pointer;
    align-self: flex-start;  
    margin-left: 2rem;
`;

export default function Draft2() {
    return(
        <ContentDiv>
            <ToggleButton>
                <Link to="/archives/seasons/Season2">Back</Link>
            </ToggleButton>
            <StyledHeader>This page is under construction.</StyledHeader>
            <GenImage src="/145px-Wiggler-MSS.webp" alt="Wiggle my Iggle" />
        </ContentDiv>
    );
}