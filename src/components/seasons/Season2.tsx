import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { ToggleButton, StyledHeader, StyledMiniHeader, StyledLink, SeparatorLine } from "../CommonStyles.ts";
import { LinkButton } from "../StatLeaders.tsx";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const LinkDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`;

export default function Season2() {
    return(
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 PMBL</StyledHeader>
            <StyledMiniHeader style={{textAlign: "center", color: "white"}}>All Records from Season 2</StyledMiniHeader>
            <SeparatorLine />
            <LinkDiv>
                <StyledLink bg="/archives/schedule.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season2/Schedule">Schedule</Link>
                </StyledLink>
                <StyledLink bg="/archives/Draft.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season2/Draft">Draft</Link>
                </StyledLink>
                <StyledLink bg="/archives/awards.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season2/Awards">Awards</Link>
                </StyledLink>
                <StyledLink bg="/archives/Standings.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season2/Standings">Standings</Link>
                </StyledLink>
                <StyledLink bg="/archives/playoffs.png">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season2/Playoffs">Playoffs</Link>
                </StyledLink>
                <StyledLink bg="/archives/other.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season2/Other">Other</Link>
                </StyledLink>
            </LinkDiv>
            <StyledMiniHeader style={{marginTop: "40px", textAlign: "center", color: "white"}}>Click down below to see all Season 2 stats</StyledMiniHeader>

            <LinkButton to="/season/stats" style={{width: "15rem", backgroundColor: "darkblue"}} state={{ stateSet: "set2"}}>
                View Full Season Stats
            </LinkButton>
        </ContentDiv>

    );
}
