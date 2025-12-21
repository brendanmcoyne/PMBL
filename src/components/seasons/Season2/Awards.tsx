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

export default function Awards2() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season2">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 Awards</StyledHeader>

            <StyledMiniHeader>Most Valuable Player</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season2awards/Funky.jpg" alt="Funky" />
                </ImageBox>
                <TextBox>
                    <StyledWinner>Funky Kong</StyledWinner>
                    <StyledManager style={{color: "#3586E8"}}>Isaac</StyledManager>
                    <StyledTeam>DK Wild</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DKWilds.webp" alt="Diddy"/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Offensive Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey" />
                </ImageBox>
                <TextBox>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager style={{color: "#F1C232"}}>James</StyledManager>
                    <StyledTeam>Birdo Bows</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BirdoBows.webp" alt="Birdo"/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Defensive Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/players/Red_Kritter.webp" alt="Red Kritter"/>
                </ImageBox>
                <TextBox>
                    <StyledWinner>Red Kritter</StyledWinner>
                    <StyledManager style={{color: "#999999"}}>THANdrew</StyledManager>
                    <StyledTeam>Waluigi Spitballs</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-WaluigiSpitballs.webp" alt="Waluigi"/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Golden Glove Award</StyledMiniHeader>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/players/Yellow_Magikoopa.webp" alt="Kamek"/>
                    <StyledWinner>Yellow Magikoopa</StyledWinner>
                    <StyledManager style={{color: "#6AA84F"}}>Marge</StyledManager>
                    <StyledTeam>Peach Monarchs</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-PeachMonarchs.png" alt="Peach"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season2awards/Kritter.jpg" alt="Kritter"/>
                    <StyledWinner>Green Kritter</StyledWinner>
                    <StyledManager style={{color: "#FF9900"}}>Justave</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/players/Red_Kritter.webp" alt="Red Kritter"/>
                    <StyledWinner>Red Kritter</StyledWinner>
                    <StyledManager style={{color: "#999999"}}>THANdrew</StyledManager>
                    <StyledTeam>Waluigi Spitballs</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-WaluigiSpitballs.webp" alt="Waluigi"/>
                </WinnerDiv>
            </AwardDiv>

            <StyledMiniHeader>Silver Slugger Award</StyledMiniHeader>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey"/>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager style={{color: "#F1C232"}}>James</StyledManager>
                    <StyledTeam>Birdo Bows</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BirdoBows.webp" alt="Birdo"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season2awards/Bowser.jpg" alt="Bowser"/>
                    <StyledWinner>Bowser</StyledWinner>
                    <StyledManager style={{color: "#CC0000"}}>Brendan</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/kingK.jpg" alt="King K"/>
                    <StyledWinner>King K. Rool</StyledWinner>
                    <StyledManager style={{color: "#FF00FF"}}>Morgan</StyledManager>
                    <StyledTeam>Daisy Flowers</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DaisyFlowers.webp" alt="Daisy"/>
                </WinnerDiv>
            </AwardDiv>
            <StyledMiniHeader>Morgan Hartwell Man of the Year Award</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season2awards/Blooper.jpg" alt="Blooper"/>
                </ImageBox>
                <TextBox>
                    <StyledWinner>Blooper</StyledWinner>
                    <StyledManager style={{color: "#CC0000"}}>Brendan</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser"/>
                </TextBox>
            </AwardRow>
            <StyledMiniHeader>Comeback Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/players/Grayson McKean.jpg" alt="Grayson"/>
                </ImageBox>
                <TextBox>
                    <StyledWinner>Grayson McKean</StyledWinner>
                    <StyledManager style={{color: "#9900FF"}}>Trocean</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-MarioFireballs.png" alt="Mario"/>
                </TextBox>
            </AwardRow>
            <StyledMiniHeader>Pitcher of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/players/Bob Marley.jpg" alt="Bob"/>
                </ImageBox>
                <TextBox>
                    <StyledWinner>Bob Marley</StyledWinner>
                    <StyledManager style={{color: "#FF9900"}}>Justave</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </TextBox>
            </AwardRow>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage style={{objectFit: "cover"}} src="/managers/Morgan.jpg" alt="Morgan"/>
                    <StyledMiniHeader style={{margin: "0"}}>Manager of the Year</StyledMiniHeader>
                    <StyledManager style={{fontSize: "35px", color: "#FF00FF"}}>Morgan</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </WinnerDiv>
                <WinnerDiv>
                    <GenImage src="/season2awards/Birdo.jpg" alt="Birdo"/>
                    <StyledMiniHeader style={{margin: "0"}}>Captain of the Year</StyledMiniHeader>
                    <StyledManager style={{fontSize: "35px"}}>Birdo</StyledManager>
                    <StyledTeam>Birdo Bows</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BirdoBows.webp" alt="Birdo"/>
                </WinnerDiv>
            </AwardDiv>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season2awards/Blooper.jpg" alt="Bloop"/>
                    <StyledMiniHeader style={{margin: "0"}}>Most Improved Player</StyledMiniHeader>
                    <StyledWinner>Blooper</StyledWinner>
                    <StyledManager style={{color: "#CC0000"}}>Brendan</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser"/>
                </WinnerDiv>
                <WinnerDiv>
                    <GenImage src="/players/Cascade.jpg" alt="Cascade"/>
                    <StyledMiniHeader style={{margin: "0"}}>Most Hated Player</StyledMiniHeader>
                    <StyledWinner>Cascade</StyledWinner>
                    <StyledManager style={{color: "#F1C232"}}>James</StyledManager>
                    <StyledTeam>Birdo Bows</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BirdoBows.webp" alt="Luigi"/>
                </WinnerDiv>
            </AwardDiv>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/players/Bob Marley.jpg" alt="Bob"/>
                    <StyledMiniHeader style={{margin: "0"}}>Mii of the Year</StyledMiniHeader>
                    <StyledWinner>Bob Marley</StyledWinner>
                    <StyledManager style={{color: "#FF9900"}}>Justave</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </WinnerDiv>
                <WinnerDiv>
                    <GenImage src="/players/Justin Nascimento.jpg" alt="JN"/>
                    <StyledMiniHeader style={{margin: "0"}}>Rookie of the Year</StyledMiniHeader>
                    <StyledWinner>Cascade</StyledWinner>
                    <StyledManager style={{color: "#3586E8"}}>Isaac</StyledManager>
                    <StyledTeam>DK Wild</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DKWilds.webp" alt="Luigi"/>
                </WinnerDiv>
            </AwardDiv>

            <AwardDiv>
                <WinnerDiv>
                    <StyledMiniHeader style={{margin: "0"}}>Stadium of the Year</StyledMiniHeader>
                    <StyledWinner style={{color: "#FF9900"}}>Daisy Cruiser</StyledWinner>
                    <StyledTeam>Playoff Stadium for Justave</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DaisyFlowers.webp" alt="Flower"/>
                </WinnerDiv>
                <WinnerDiv>
                    <StyledMiniHeader style={{margin: "0"}}>Game of the Year</StyledMiniHeader>
                    <StyledWinner>Week 10: Morgan vs THANdrew</StyledWinner>
                    <StyledTeam>9 - 8</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-DaisyFlowers.webp" alt="Flower"/>
                </WinnerDiv>
            </AwardDiv>
        </ContentDiv>
    );
}
