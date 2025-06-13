import { styled } from "styled-components";
import GoogleLogin from "./GoogleLogin"; // adjust the path as needed

const StyledHeader = styled.header`
    background-color: darkblue;
    color: lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;  /* push items to edges */
    padding: 4px 10px;
    height: 60px;
`;

const StyledH3 = styled.h3`
    background-color: darkblue;
    color: white;
    font-size: 28px;
    margin: 0;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledH3>PMBL Website</StyledH3>
            <GoogleLogin />
        </StyledHeader>
    );
}
