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
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
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

export default function Season1() {
    return(
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "darkblue"}} to="/archives">Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 PMBL</StyledHeader>
            <StyledLink>
                <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Schedule">Schedule</Link>
            </StyledLink>
            <StyledLink>
                <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Draft">Draft</Link>
            </StyledLink>
            <StyledLink>
                <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Awards">Awards</Link>
            </StyledLink>
            <StyledLink>
                <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Standings">Standings</Link>
            </StyledLink>
            <StyledLink>
                <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Playoffs">Playoffs</Link>
            </StyledLink>
            <StyledLink>
                <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1/Other">Other</Link>
            </StyledLink>
        </ContentDiv>

    );
}
