import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    width: 100%;
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
    background-color: darkblue;
    border: 1px solid #ddd;
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    width: 90%;
    max-width: 700px;
`;

const GenImage = styled.img`
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    margin: 20px 0;
`;

const Headline = styled.h2`
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
`;

const Description = styled.p`
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: white;
    padding: 0 1rem;
`;

const StyledLink = styled(Link)`
    font-size: 1.2rem;
    text-decoration: none;
    border: 2px solid black;
    color: white;
    background-color: #003366;
    padding: 15px 30px;
    border-radius: 10px;
    margin-top: 20px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0055aa;
    }
`;

export default function Players() {
    return (
        <ContentDiv>
            <StyledHeader>PMBL Headlines</StyledHeader>
            <StyledMiniHeader>Featuring all the top baseball stories!</StyledMiniHeader>

            <Story>
                <Headline>Koopa Found Guilty of Assault</Headline>
                <GenImage
                    src="/koopa_behind_the_bars.jpg"
                    alt="Koopa"
                />
                <Description>
                    The Week 7 Incident has now been brought to justice, and the plaintiff has been found guilty on all charges.
                </Description>
                <StyledLink to="/headlines/Koopa.tsx">Click to read more!</StyledLink>
            </Story>

            <Story>
                <Headline>Dry Bones Gets a Slap on the Wrist</Headline>
                <GenImage
                    src="/Caucasian bones playground.png"
                    alt="Dry Bones"
                />
                <Description>
                    After weeks of accusations, the controversial ruling for Dry Bones has been released.
                </Description>
                <StyledLink to="/headlines/DryBones.tsx">Click to read more!</StyledLink>
            </Story>
        </ContentDiv>
    );

}
