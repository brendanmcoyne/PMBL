import { styled } from "styled-components";

const StyledHeader = styled.header`
    background-color: darkblue;
    color: lightgray;
    display: flex;
    align-items: center; 
    padding-top: 4px;
    padding-left: 10px;
    height: 60px; 
`;

const StyledH3 = styled.h3`
    background-color: darkblue;
    color: white;
    font-size: 28px; 
    margin: 0; 
`;

export default function Header() {
    return(
        <StyledHeader>
            <StyledH3>PMBL Website</StyledH3>
        </StyledHeader>
        );
}