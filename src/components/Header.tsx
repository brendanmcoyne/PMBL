import { styled } from "styled-components";

const StyledHeader = styled.header`
    background-color: darkblue;
    color: lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    text-align: left;
`;

const StyledH3 = styled.h3`
    background-color: darkblue;
    color: white;
`;

export default function Header() {
    return(
        <StyledHeader>
            <StyledH3>PMBL Website</StyledH3>
        </StyledHeader>
        );
}