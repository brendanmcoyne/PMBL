import { styled } from "styled-components";
import {Link} from "react-router-dom";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
    background-color: #1a1a1a;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 3.5rem;
    color: #2ac;
    font-family: 'Oswald', sans-serif;
    margin: 20px;
    text-shadow: 0 0 8px rgba(255, 191, 0, 0.4);
    @media screen and (max-width: 1000px) {
        font-size: 2.5rem;
    }
`;

const GenImage = styled.img`
    width: 100%;
    max-width: 280px;  
    height: 280px;
    object-fit: contain;
    border-radius: 16px;
    border: 4px solid black;
    background-color: white;
    margin-bottom: 1rem;
`;

const AwardDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    width: 95%;
    max-width: 1200px;
    margin: 2rem auto;
`;

const WinnerDiv = styled.div`
    background-color: #0a2631;
    border-radius: 16px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease;
    border-bottom: 2px solid white;
`;

const TextBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    text-align: left;
    align-items: center;

    @media (max-width: 768px) {
        text-align: center;
        align-items: center;
    }
`;

const StyledWinner = styled.h4`
    font-size: 30px;
    margin: 0;
    color: white;
`;

const StyledManager = styled.h5`
    font-size: 20px;
    margin: 0;
    color: white;
`;

const StyledTeam = styled.p`
    font-size: 0.9rem;
    color: #ccc;
    margin: 0;
`;

const ImageBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AwardRow = styled.div`
    display: flex;
    background-color: #0a2631;
    border-radius: 20px;
    padding: 28px;
    width: 95%;             
    max-width: 1000px;      
    margin-bottom: 3rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
    flex-wrap: wrap;
    border-bottom: 2px solid white;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        padding: 20px 0;
    }
`;

const ImgEmblem = styled.img`
    margin-top: 10px; 
    width: 80px;
    height: auto; 
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
`;

export default function Awards4() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/Season4">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 4 Awards</StyledHeader>
        </ContentDiv>
    );
}
