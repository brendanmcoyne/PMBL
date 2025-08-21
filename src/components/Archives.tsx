import { styled, css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { StyledHeader, StyledLink, SeparatorLine } from "../components/CommonStyles.ts";

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

const StyledMiniHeader = styled.h3<{ animate?: boolean }>`
    text-align: center;
    font-size: 1.7rem;
    color: white;
    margin-top: 0;
    margin-bottom: 30px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    ${({ animate }) =>
            animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.5s;
    `}
`;

const Gallery = styled.div`
    column-count: 2;
    column-gap: 16px;
    max-width: 800px;

    img {
        width: 100%;
        @media screen and (max-width: 750px) {
            max-width: 400px;
        }
        margin-bottom: 16px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        break-inside: avoid;
    }
    @media screen and (max-width: 1000px) {
        max-width: 400px;
    }
`;

const ResponsiveFlex = styled.div<{ animate?: boolean }>`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
    ${({ animate }) =>
            animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.5s;
    `}
`;

export default function Archives() {
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
            <StyledHeader animate={ready}>Archives</StyledHeader>
            <StyledMiniHeader animate={ready} style={{textAlign: "center", color: "white"}}>Here you'll find any and all information from past seasons</StyledMiniHeader>
            <SeparatorLine animate={ready}/>
            <ResponsiveFlex animate={ready}>
                <StyledLink bg="/archives/bowserbat.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1">Season 1</Link>
                </StyledLink>
                <StyledLink bg="/archives/mario-super-sluggers-screenshot.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season2">Season 2</Link>
                </StyledLink>
            </ResponsiveFlex>

            <StyledHeader animate={ready} style={{fontSize: "80px", marginTop: "70px"}}>Gallery</StyledHeader>
            <StyledMiniHeader animate={ready}>In here you'll find photos and memories from seasons past</StyledMiniHeader>
            <SeparatorLine/>

            <Gallery>
                <img src="/archives/IMG_7373.jpg" alt="1"/>
                <img src="/archives/IMG_7375.jpg" alt="2"/>
                <img src="/archives/IMG_7376.jpg" alt="3"/>
                <img src="/archives/IMG_7425.jpg" alt="4"/>
                <img src="/archives/IMG_7436.jpg" alt="5"/>
            </Gallery>
        </ContentDiv>

    );
}
