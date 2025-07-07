import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { SeparatorLine } from "../components/headlines/HeadlineStyles";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem 1rem;
    font-size: calc(0.5rem + 1vw);
`;

const StyledHeader = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0px 0px 12px #ff0;
    margin-bottom: 0;
    @media screen and (max-width: 1000px) {
        font-size: 55px;
    }
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 1.7rem;
    color: white;
    margin-bottom: 30px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const Story = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    margin: 1rem;
    transition: 0.5s;
    &:hover {
        transform: scale(1.05);
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
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
    return (
        <ContentDiv>
            <StyledHeader>PMBL Headlines</StyledHeader>
            <StyledMiniHeader>Featuring all the top baseball stories!</StyledMiniHeader>
            <SeparatorLine />

            <Story>
                <GenImage src="/miibaseball.jpg" alt="Miis" />
                <Overlay>
                    <Headline>Head Analyst Predicts Mii Breakout Season</Headline>
                    <StyledLink to="/headlines/MiiBreakout">Click to read more!</StyledLink>
                </Overlay>
            </Story>

            <Story>
                <GenImage src="/koopa_behind_the_bars.jpg" alt="Koopa" />
                <Overlay>
                    <Headline>Koopa Found Guilty of Assault</Headline>
                    <StyledLink to="/headlines/Koopa">Click to read more!</StyledLink>
                </Overlay>
            </Story>

            <Story>
                <GenImage src="/Caucasian_bones_playground.png" alt="Dry Bones" />
                <Overlay>
                    <Headline>Dry Bones Gets a Slap on the Wrist</Headline>
                    <StyledLink to="/headlines/DryBones">Click to read more!</StyledLink>
                </Overlay>
            </Story>


        </ContentDiv>
    );

}
