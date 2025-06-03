import { styled } from "styled-components";
import { Link } from "react-router-dom";

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
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 2;
    font-size: 2rem;
`;

const Story = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    width: 80%;
    align-items: center;
    background-color: darkgray;
`;

const GenImage = styled.img`
    width: 150px;
    border: 3px solid black;
    padding: 8px;
    margin: 20px 0;
    background-color: white;
`;

const Headline = styled.h2`
    text-align: center;
    font-weight: bold;
`;

const Description = styled.span`
    text-align: center;
`;

const StyledLink = styled.p`
    border: 3px solid black;
    font-size: 1.6rem;
    text-align: center;
    padding: 40px 80px;
    background-color: darkblue;
    display: flex;
    margin-left: 250px;
    margin-right: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
`;

export default function Players() {
    return(
        <ContentDiv>
            <StyledHeader>PMBL Headlines</StyledHeader>
            <StyledMiniHeader>Featuring all the top baseball stories!</StyledMiniHeader>
            <Story>
                <Headline>Koopa found Guilty of Assault</Headline>
                <GenImage src="/koopa_behind_the_bars.jpg" alt="Koopa" style={{ width: "500px", height: "300px", objectFit: "cover" }} />
                <Description>The Week 7 Incident has now been brought to justice, and the plantiff has been found guilty on all charges.</Description>
                <StyledLink>
                    <Link to="/headlines/Koopa">Click to read more!</Link>
                </StyledLink>
            </Story>

            <Story>
                <Headline>Dry Bones gets a slap on the wrist</Headline>
                <GenImage src="/DryBonesMSS.webp" alt="Dry Bones" />
                <Description>After weeks of accusations, the controversial ruling for Dry Bones has been released.</Description>
                <StyledLink>
                    <Link to="/headlines/DryBones">Click to read more!</Link>
                </StyledLink>
            </Story>

        </ContentDiv>


    );
}
