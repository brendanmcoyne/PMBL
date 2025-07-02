import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { SeparatorLine } from "../components/headlines/HeadlineStyles";

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

const StyledHeader = styled.h1`
    font-size: 55px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px  2px 0 #000, 2px  2px 0 #000, 0px  0px 12px #ff0;
    margin-bottom: 0;
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
    width: 250px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: ${({ bg }) => `url(${bg})`};
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
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

const Gallery = styled.div`
    column-count: 2;
    column-gap: 16px;
    max-width: 800px;

    img {
        width: 100%;
        margin-bottom: 16px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        break-inside: avoid;
    }
`;

export default function Archives() {

    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    if (!ready) return null;

    return(
        <ContentDiv>
            <StyledHeader style={{fontSize: "80px"}}>Archives</StyledHeader>
            <StyledMiniHeader style={{textAlign: "center", color: "white"}}>Here you'll find any and all information from past seasons</StyledMiniHeader>
            <SeparatorLine/>
            <div style={{display: "flex", flexDirection: "row", marginTop: "30px"}}>
                <StyledLink bg="/archives/bowserbat.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1">Season 1</Link>
                </StyledLink>
                <StyledLink bg="/archives/mario-super-sluggers-screenshot.jpg">
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season2">Season 2</Link>
                </StyledLink>
            </div>

            <StyledHeader style={{fontSize: "80px"}}>Gallery</StyledHeader>
            <StyledMiniHeader>In here you'll find photos and memories from seasons past</StyledMiniHeader>
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
