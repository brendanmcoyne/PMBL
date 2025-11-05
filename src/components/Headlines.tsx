import { styled, keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { Overlay } from "../components/headlines/HeadlineStyles";
import { StyledHeader, SeparatorLine, StyledMiniHeader } from "../components/CommonStyles.ts";
import {useEffect, useState} from "react";

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
    width: 100%;
    padding: 2rem 1rem;
    font-size: calc(0.5rem + 1vw);
    @media screen and (max-width: 800px) {
        max-width: 100%;
        margin: 0 auto;
        box-sizing: border-box; 
    }
`;

export const Story = styled.div<{ $animate?: boolean }>`
    position: relative;
    align-items: center;
    width: 100%;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    margin: 1rem auto;
    transition: 0.5s;
    &:hover {
        transform: scale(1.05);
        @media screen and (max-width: 750px) {
            transform: none;
        }
    }
    @media screen and (max-width: 900px) {
        height: 200px;
        width: 100%;
        border-radius: 5px;
    }
    
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.7s;
    `}
`;

export const GenImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(65%);
    @media screen and (max-width: 750px) {
        width: 350px;
        display: inline-block;
    }
`;

export const Headline = styled.h2`
    color: white;
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
    padding: 0.75rem 1.25rem;
    max-width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 750px) {
        font-size: 1.2rem;  
        line-height: 1.3;
    }
`;

export const StyledLink = styled(Link)`
    font-size: 1.1rem;
    text-decoration: none;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 8px;
    text-align: center;
    pointer-events: auto;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

export default function Players() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    if (!ready) return null;

    return (
        <ContentDiv>
            <StyledHeader $animate={ready}>PMBL Headlines</StyledHeader>
            <StyledMiniHeader $animate={ready}>Featuring all the top baseball stories!</StyledMiniHeader>
            <SeparatorLine $animate={ready}/>
            <Story $animate={ready}>
                <GenImage src="/headlines/blooper.jpeg" alt="Blooper" />
                <Overlay>
                    <Headline>Blooper Asks Crush Out, Got Something Better Instead</Headline>
                    <StyledLink to="/headlines/Blooper">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/AllStar.jpg" alt="AllStar" />
                <Overlay>
                    <Headline>Season 2 All Star Game Recap</Headline>
                    <StyledLink to="/headlines/AllStarGame">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/week6.jpg" alt="Week6" />
                <Overlay>
                    <Headline>Season 2 Week 6 Recap</Headline>
                    <StyledLink to="/headlines/Week6Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/week5.webp" alt="Week5" />
                <Overlay>
                    <Headline>Season 2 Week 5 Recap</Headline>
                    <StyledLink to="/headlines/Week5Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/week4.jpg" alt="Week4" />
                <Overlay>
                    <Headline>Season 2 Week 4 Recap</Headline>
                    <StyledLink to="/headlines/Week4Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/week3.webp" alt="Week3" />
                <Overlay>
                    <Headline>Season 2 Week 3 Recap</Headline>
                    <StyledLink to="/headlines/Week3Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/training.jpg" alt="Training" />
                <Overlay>
                    <Headline>Deep Dive into the Justave Process</Headline>
                    <StyledLink to="/headlines/Training">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/week2.jpg" alt="Week2" />
                <Overlay>
                    <Headline>Season 2 Week 2 Recap</Headline>
                    <StyledLink to="/headlines/Week2Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/week1.jpg" alt="Week1" />
                <Overlay>
                    <Headline>Season 2 Week 1 Recap</Headline>
                    <StyledLink to="/headlines/Week1Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/corkedbat.jpg" alt="Corked" />
                <Overlay>
                    <Headline>Corked Bat Allegations Have Caused Outrage</Headline>
                    <StyledLink to="/headlines/CorkedBat">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/draft.jpg" alt="Draft" />
                <Overlay>
                    <Headline>Season 2 Draft Recap</Headline>
                    <StyledLink to="/headlines/DraftRecap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/miibaseball.jpg" alt="Miis" />
                <Overlay>
                    <Headline>Head Analyst Predicts Mii Breakout Season</Headline>
                    <StyledLink to="/headlines/MiiBreakout">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/koopa_behind_the_bars.jpg" alt="Koopa" />
                <Overlay>
                    <Headline>Koopa Found Guilty of Assault</Headline>
                    <StyledLink to="/headlines/Koopa">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animate={ready}>
                <GenImage src="/headlines/Caucasian_bones_playground.png" alt="Dry Bones" />
                <Overlay>
                    <Headline>Dry Bones Gets a Slap on the Wrist</Headline>
                    <StyledLink to="/headlines/DryBones">Click to read more!</StyledLink>
                </Overlay>
            </Story>
        </ContentDiv>
    );

}
