import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {StyledHeader, StyledLink, SeparatorLine, ToggleButton} from "../CommonStyles.ts";


export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const StyledMiniHeader = styled.h3<{ $animate?: boolean }>`
    text-align: center;
    font-size: 1.7rem;
    color: white;
    margin-top: 0;
    margin-bottom: 30px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const ResponsiveFlex = styled.div<{ $animate?: boolean }>`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default function Seasons() {

    return(
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives">← Back</Link>
            </ToggleButton>
            <StyledHeader>Seasons</StyledHeader>
            <StyledMiniHeader style={{textAlign: "center", color: "white"}}>Here you'll find any and all information from past seasons</StyledMiniHeader>
            <SeparatorLine/>
            <ResponsiveFlex>
                <StyledLink bg="/archives/s1.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1">Season 1</Link>
                </StyledLink>
                <StyledLink bg="/archives/s2.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season2">Season 2</Link>
                </StyledLink>
            </ResponsiveFlex>
            <ResponsiveFlex>
                <StyledLink bg="/archives/s3.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season3">Season 3</Link>
                </StyledLink>
                <StyledLink bg="/archives/s4.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season4">Season 4</Link>
                </StyledLink>
            </ResponsiveFlex>
        </ContentDiv>

    );
}
