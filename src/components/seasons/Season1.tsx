import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { SeparatorLine } from "../headlines/HeadlineStyles";
import { ToggleButton, StyledHeader } from "../CommonStyles.ts";

interface StyledLinkProps {
    bg?: string;
}

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 1.7rem;
    color: white;
    margin-bottom: 30px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const StyledLink = styled.p<StyledLinkProps>`
    margin: 20px 60px;
    border: 3px solid black;
    font-size: 1.6rem;
    text-align: center;
    padding: 40px 80px;
    border-radius: 8px;
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: ${({ bg }) => `url(${bg})`};
    background-size: cover;
    background-position: center;
    position: relative;
    transition: transform 0.2s;
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5); 
        z-index: 1;
    }
    &:hover {
        transform: scale(1.07);
    }
    a {
        color: white;
        font-weight: bold;
        z-index: 2;
        text-shadow: 1px 1px 4px black;
    }
`;

const LinkDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`;

export default function Season1() {
    return(
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 PMBL</StyledHeader>
            <StyledMiniHeader style={{textAlign: "center", color: "white"}}>All Records from Season 1</StyledMiniHeader>
            <SeparatorLine/>
            <LinkDiv>
                <StyledLink bg="/archives/schedule.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Schedule">Schedule</Link>
                </StyledLink>
                <StyledLink bg="/archives/Draft.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Draft">Draft</Link>
                </StyledLink>
                <StyledLink bg="/archives/awards.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Awards">Awards</Link>
                </StyledLink>
                <StyledLink bg="/archives/Standings.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Standings">Standings</Link>
                </StyledLink>
                <StyledLink bg="/archives/playoffs.png">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Playoffs">Playoffs</Link>
                </StyledLink>
                <StyledLink bg="/archives/other.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Other">Other</Link>
                </StyledLink>
            </LinkDiv>
        </ContentDiv>

    );
}
