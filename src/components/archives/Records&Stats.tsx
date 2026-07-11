import { styled, css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { StyledHeader, StyledLink, SeparatorLine } from "../CommonStyles.ts";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
    ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.5s;
    `}
`;

const ResponsiveFlex = styled.div<{ $animate?: boolean }>`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
    ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.5s;
    `}
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
            <StyledHeader $animate={ready}>Seasons</StyledHeader>
            <StyledMiniHeader $animate={ready} style={{textAlign: "center", color: "white"}}>Here you'll find any and all information from past seasons</StyledMiniHeader>
            <SeparatorLine $animate={ready}/>
            <ResponsiveFlex $animate={ready}>
                <StyledLink bg="/archives/s1.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/records&stats/records">Records</Link>
                </StyledLink>
                <StyledLink bg="/archives/s2.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/records&stats/awards">Awards</Link>
                </StyledLink>
                <StyledLink bg="/archives/s3.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/records&stats/stats">Stats</Link>
                </StyledLink>
            </ResponsiveFlex>
        </ContentDiv>

    );
}
