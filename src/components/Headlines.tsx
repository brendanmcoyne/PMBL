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
`;

const Story = styled.div<{ animate?: boolean }>`
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    margin: 1rem;
    transition: 0.5s;
    &:hover {
        transform: scale(1.05);
        @media screen and (max-width: 750px) {
            transform: none;
        }
    }
    @media screen and (max-width: 600px) {
        height: 250px;
        margin: 0.75rem 0;
    }
    ${({ animate }) =>
            animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.7s;
    `}
`;

const GenImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(65%);
`;

const Headline = styled.h2`
    color: white;
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
    padding: 0.75rem 1.25rem;
    max-width: 90%;
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
        font-size: 1.7rem;
    }
`;

const StyledLink = styled(Link)`
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
            <StyledHeader animate={ready}>PMBL Headlines</StyledHeader>
            <StyledMiniHeader animate={ready}>Featuring all the top baseball stories!</StyledMiniHeader>
            <SeparatorLine animate={ready}/>
            <Story animate={ready}>
                <GenImage src="/miibaseball.jpg" alt="Miis" />
                <Overlay>
                    <Headline>Head Analyst Predicts Mii Breakout Season</Headline>
                    <StyledLink to="/headlines/MiiBreakout">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story animate={ready}>
                <GenImage src="/koopa_behind_the_bars.jpg" alt="Koopa" />
                <Overlay>
                    <Headline>Koopa Found Guilty of Assault</Headline>
                    <StyledLink to="/headlines/Koopa">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story animate={ready}>
                <GenImage src="/Caucasian_bones_playground.png" alt="Dry Bones" />
                <Overlay>
                    <Headline>Dry Bones Gets a Slap on the Wrist</Headline>
                    <StyledLink to="/headlines/DryBones">Click to read more!</StyledLink>
                </Overlay>
            </Story>
        </ContentDiv>
    );

}
