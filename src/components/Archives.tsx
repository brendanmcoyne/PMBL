import { styled } from "styled-components";
import { Link } from "react-router-dom";

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
    text-align: center;
    margin-bottom: 1rem;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 2;
    font-size: 2rem;
`;

const StyledLink = styled.p`
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 20px;
    border: 3px solid black;
    font-size: 1.6rem;
    text-align: center;
    padding: 40px 80px;
    background-color: darkblue;

    width: 200px; 
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
`;

export default function Archives() {
    return(
        <ContentDiv>
            <StyledHeader>Archives</StyledHeader>
            <StyledMiniHeader>Seasons</StyledMiniHeader>
            <StyledLink>
                <Link to="/archives/seasons/Season1">Season 1</Link>
                <p style={{color: '#FFFFFF', fontWeight: 'bold'}}>Spring 2025 Season</p>
            </StyledLink>
            <StyledLink>
                <Link to="/archives/seasons/Season2">Season 2</Link>
                <p style={{color: '#FFFFFF', fontWeight: 'bold'}}>Fall 2025 Season</p>
            </StyledLink>
        </ContentDiv>

    );
}
