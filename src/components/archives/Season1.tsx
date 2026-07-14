import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { ToggleButton, StyledHeader, StyledMiniHeader, StyledLink, SeparatorLine } from "../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const ResponsiveFlex = styled.div<{ $animate?: boolean }>`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default function Season1() {
    return(
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 PMBL</StyledHeader>
            <StyledMiniHeader style={{textAlign: "center", color: "white"}}>All Records from Season 1</StyledMiniHeader>
            <SeparatorLine />
            <ResponsiveFlex>
                <StyledLink bg="/archives/schedule.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/Season1/Schedule">Schedule</Link>
                </StyledLink>
                <StyledLink bg="/archives/Draft.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/Season1/Draft">Draft</Link>
                </StyledLink>
            </ResponsiveFlex>
            <ResponsiveFlex>
                <StyledLink bg="/archives/Standings.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/Season1/Standings">Standings</Link>
                </StyledLink>
                <StyledLink bg="/archives/playoffs.png">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/Season1/Playoffs">Playoffs</Link>
                </StyledLink>
            </ResponsiveFlex>
        </ContentDiv>

    );
}
