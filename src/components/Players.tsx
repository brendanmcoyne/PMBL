import { styled } from "styled-components";

const StyledHeader = styled.h1`
    position: absolute;
    align-items: center;
`;
export default function Players() {
    return(
        <StyledHeader>Welcome to the Professional Mario Baseball League (Players)</StyledHeader>
    );
}
