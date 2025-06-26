import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem 1rem;
    font-size: calc(0.5rem + 1vw);
`;

const StyledHeader = styled.h1`
    text-align: center;
    margin-bottom: 1rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 2rem;
    color: white;
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
    padding: 1rem;
`;

const GenImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(65%);
`;

const Headline = styled.h2`
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
    margin: 0;
    padding: 0 1rem;
`;

const StyledLink = styled(Link)`
    margin-top: 1rem;
    font-size: 1.1rem;
    text-decoration: none;
    border: none;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 8px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

export default function Players() {
    return (
        <ContentDiv>
            <StyledHeader>PMBL Headlines</StyledHeader>
            <StyledMiniHeader>Featuring all the top baseball stories!</StyledMiniHeader>

            <Story>
                <GenImage src="/miibaseball.jpg" alt="Miis" />
                <Overlay>
                    <Headline>Head Analyst Predicts Mii Breakout Season</Headline>
                    <StyledLink to="/headlines/MiiBreakout.tsx">Click to read more!</StyledLink>
                </Overlay>
            </Story>

            <Story>
                <GenImage src="/koopa_behind_the_bars.jpg" alt="Koopa" />
                <Overlay>
                    <Headline>Koopa Found Guilty of Assault</Headline>
                    <StyledLink to="/headlines/Koopa.tsx">Click to read more!</StyledLink>
                </Overlay>
            </Story>

            <Story>
                <GenImage src="/Caucasian_bones_playground.png" alt="Dry Bones" />
                <Overlay>
                    <Headline>Dry Bones Gets a Slap on the Wrist</Headline>
                    <StyledLink to="/headlines/DryBones.tsx">Click to read more!</StyledLink>
                </Overlay>
            </Story>


        </ContentDiv>
    );

}
