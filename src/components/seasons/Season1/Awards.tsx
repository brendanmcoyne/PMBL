import { styled } from "styled-components";
import {Link} from "react-router-dom";
import { ToggleButton } from "../../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
    background-color: #1a1a1a;
`;

const StyledHeader = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px  2px 0 #000, 2px  2px 0 #000, 0 0 12px #ff0;
    margin-bottom: 30px;
    text-align: center;
    @media screen and (max-width: 1000px) {
        font-size: 55px;
    }
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 4rem;
    color: #FFBF00;
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
    border: 4px solid goldenrod;
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
    background-color: #2d241b;
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
    background-color: #2d241b;
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

export default function Awards1() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season1">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 Awards</StyledHeader>

            <StyledMiniHeader>Most Valuable Player</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey" />
                </ImageBox>
                <TextBox>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager style={{color: "#FF00FF"}}>Morgan</StyledManager>
                    <StyledTeam>Diddy Monkeys</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DiddyMonkeys.webp" alt="Diddy"/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Offensive Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season1awards/kingK.jpg" alt="King K"/>
                </ImageBox>
                <TextBox>
                    <StyledWinner>King K. Rool</StyledWinner>
                    <StyledManager style={{color: "#F1C232"}}>James</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser"/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Defensive Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/players/Blue_Kritter.webp" alt="Blue Kritter" />
                </ImageBox>
                <TextBox>
                    <StyledWinner>Blue Kritter</StyledWinner>
                    <StyledManager style={{color: "#CC0000"}}>Brendan</StyledManager>
                    <StyledTeam>DK Wild</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DKWilds.webp" alt="DK"/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Golden Glove Award</StyledMiniHeader>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey"/>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager style={{color: "#FF00FF"}}>Morgan</StyledManager>
                    <StyledTeam>Diddy Monkeys</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DiddyMonkeys.webp" alt="Diddy"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/FireBro.jpg" alt="Fire Bro"/>
                    <StyledWinner>Fire Bro</StyledWinner>
                    <StyledManager style={{color: "#3586E8"}}>Isaac</StyledManager>
                    <StyledTeam>Mario Fireballs</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-MarioFireballs.png" alt="Mario"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/players/Blue_Kritter.webp" alt="Blue Kritter"/>
                    <StyledWinner>Blue Kritter</StyledWinner>
                    <StyledManager style={{color: "#CC0000"}}>Brendan</StyledManager>
                    <StyledTeam>DK Wild</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DKWilds.webp" alt="DK"/>
                </WinnerDiv>
            </AwardDiv>

            <StyledMiniHeader>Silver Slugger Award</StyledMiniHeader>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey"/>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager style={{color: "#FF00FF"}}>Morgan</StyledManager>
                    <StyledTeam>Diddy Monkeys</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DiddyMonkeys.webp" alt="Diddy"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/FireBro.jpg" alt="Fire Bro"/>
                    <StyledWinner>Fire Bro</StyledWinner>
                    <StyledManager style={{color: "#3586E8"}}>Isaac</StyledManager>
                    <StyledTeam>Mario Fireballs</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-MarioFireballs.png" alt="Mario"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/kingK.jpg" alt="King K"/>
                    <StyledWinner>King K. Rool</StyledWinner>
                    <StyledManager style={{color: "#F1C232"}}>James</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser"/>
                </WinnerDiv>
            </AwardDiv>
            <StyledMiniHeader>Morgan Hartwell Man of the Year Award</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season1awards/DarkBones.jpg" alt="Dark Bones"/>
                </ImageBox>
                <TextBox>

                    <StyledWinner>Dark Bones</StyledWinner>
                    <StyledManager style={{color: "#9900FF"}}>Christach</StyledManager>
                    <StyledTeam>Peach Monarchs</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-PeachMonarchs.png" alt="Peach"/>
                </TextBox>
            </AwardRow>
            <StyledMiniHeader>Comeback Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season1awards/GreenShyGuy.jpg" alt="Gruy Guy"/>
                </ImageBox>
                <TextBox>

                    <StyledWinner>Green Shy Guy</StyledWinner>
                    <StyledManager style={{color: "#FF9900"}}>Justin</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </TextBox>
            </AwardRow>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage style={{objectFit: "cover"}} src="/managers/Justin.jpg" alt="Justin"/>
                    <StyledMiniHeader style={{margin: "0"}}>Manager of the Year</StyledMiniHeader>
                    <StyledManager style={{fontSize: "35px", color: "#FF9900"}}>Justin</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </WinnerDiv>
                <WinnerDiv>
                    <GenImage src="/season1awards/DiddyKong.jpg" alt="Diddy Kong"/>
                    <StyledMiniHeader style={{margin: "0"}}>Captain of the Year</StyledMiniHeader>
                    <StyledManager style={{fontSize: "35px"}}>Diddy Kong</StyledManager>
                    <StyledTeam>Diddy Monkeys</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DiddyMonkeys.webp" alt="Diddy"/>
                </WinnerDiv>
            </AwardDiv>
            <AwardDiv>
                <WinnerDiv>
                        <GenImage src="/players/mii.jpg" alt="MLK"/>
                        <StyledMiniHeader style={{margin: "0"}}>Most Improved Player</StyledMiniHeader>
                        <StyledWinner>MLK</StyledWinner>
                        <StyledManager style={{color: "#9900FF"}}>Christach</StyledManager>
                        <StyledTeam>Peach Monarchs</StyledTeam>
                        <ImgEmblem src="/emblems/MSS-Emblem-PeachMonarchs.png" alt="Peach"/>
                </WinnerDiv>
                <WinnerDiv>
                        <GenImage src="/season1awards/MontyMole.jpg" alt="Monty Mole"/>
                        <StyledMiniHeader style={{margin: "0"}}>Most Hated Player</StyledMiniHeader>
                        <StyledWinner>Monty Mole</StyledWinner>
                        <StyledManager style={{color: "#FF9900"}}>Justin</StyledManager>
                        <StyledTeam>Luigi Knights</StyledTeam>
                        <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </WinnerDiv>
            </AwardDiv>
        </ContentDiv>
    );
}
