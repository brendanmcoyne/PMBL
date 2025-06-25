import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

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
    background-color: #00008b;
    border-radius: 15px;
    width: 200px; 
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.05);
        background-color: #00007b;
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
        break-inside: avoid; /* prevents image cutoff across columns */
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
            <StyledHeader>Archives</StyledHeader>
            <h3 style={{textAlign: "center", color: "white"}}>Here you'll find any and all information from past seasons</h3>
            <div style={{display: "flex", flexDirection: "row"}}>
                <StyledLink>
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season1">Season 1</Link>
                    <p style={{color: '#FFFFFF', fontWeight: 'bold'}}>Spring 2025 Season</p>
                </StyledLink>
                <StyledLink>
                    <Link style={{color: "lightgray", fontWeight: "bold"}} to="/archives/seasons/Season2">Season 2</Link>
                    <p style={{color: '#FFFFFF', fontWeight: 'bold'}}>Fall 2025 Season</p>
                </StyledLink>
            </div>

            <h3 style={{textAlign: "center", color: "white", marginTop: "50px"}}>Gallery</h3>

            <Gallery>
                <img src="/archives/IMG_7373.jpg" alt="IMG_6188"/>
                <img src="/archives/IMG_7375.jpg" alt="IMG_6189"/>
                <img src="/archives/IMG_7376.jpg" alt="IMG_6190"/>
            </Gallery>
        </ContentDiv>

    );
}
