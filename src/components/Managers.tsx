import { styled } from "styled-components";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem; /* Add some top padding */
`;

const StyledHeader = styled.h1`
    text-align: center; /* Center the header text */
    margin-bottom: 1rem; /* Space below the header */
`;

export default function Managers() {
    return(
        <ContentDiv>
            <StyledHeader>Managers List</StyledHeader>
            <h3>East Division</h3>
            <p>Brendan</p>
            <p>Justin</p>
            <p>James</p>
            <p>Matt</p>

            <h3>West Division</h3>
            <p>Isaac</p>
            <p>Christach</p>
            <p>Morgan</p>
            <p>DANdrew</p>
        </ContentDiv>
    );
}
