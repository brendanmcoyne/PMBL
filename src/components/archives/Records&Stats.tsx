import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
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

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 1.7rem;
    color: white;
    margin-top: 0;
    margin-bottom: 30px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const TriangleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    justify-items: center;
    margin-top: 30px;
    width: fit-content;

    /* Third item */
    & > *:nth-child(3) {
        grid-column: 1 / 3;
        justify-self: center;
    }

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default function RecordsStats() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    if (!ready) return null;

    return(
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives">← Back</Link>
            </ToggleButton>
            <StyledHeader>Records & Stats</StyledHeader>
            <StyledMiniHeader style={{textAlign: "center", color: "white"}}>Here you'll find all records and statistics from past seasons</StyledMiniHeader>
            <SeparatorLine/>
            <TriangleGrid>
                <StyledLink bg="/archives/records.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/records&stats/records">Records</Link>
                </StyledLink>
                <StyledLink bg="/archives/awards.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/records&stats/awards">Awards</Link>
                </StyledLink>
                <StyledLink bg="/archives/stats.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/records&stats/stats">Stats</Link>
                </StyledLink>
            </TriangleGrid>
        </ContentDiv>

    );
}
