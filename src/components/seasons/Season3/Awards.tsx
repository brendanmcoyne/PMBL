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

export default function Awards3() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season3">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 3 Awards</StyledHeader>

            <StyledMiniHeader>Most Valuable Player</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season2awards/Bowser.jpg" alt="Funky" />
                </ImageBox>
                <TextBox>
                    <StyledWinner>Bowser</StyledWinner>
                    <StyledManager style={{color: "#3586E8"}}>Isaac</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser"/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Offensive Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season1awards/kingK.jpg" alt="kingK" />
                </ImageBox>
                <TextBox>
                    <StyledWinner>King K Rool</StyledWinner>
                    <StyledManager style={{color: "#6AA84F"}}>Marge</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Defensive Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season2awards/Boomerang.jpg" alt="Boomerang"/>
                </ImageBox>
                <TextBox>
                    <StyledWinner>Boomerang Bro</StyledWinner>
                    <StyledManager style={{color: "#999999"}}>THANdrew</StyledManager>
                    <StyledTeam>Birdo Bows</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BirdoBows.webp" alt="Birdo"/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Golden Glove Award</StyledMiniHeader>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season2awards/Boomerang.jpg" alt="Boomerang"/>
                    <StyledWinner>Boomerang Bro</StyledWinner>
                    <StyledManager style={{color: "#999999"}}>THANdrew</StyledManager>
                    <StyledTeam>Birdo Bows</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BirdoBows.webp" alt="Birdo"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season2awards/Kritter.jpg" alt="Kritter"/>
                    <StyledWinner>Green Kritter</StyledWinner>
                    <StyledManager style={{color: "6AA84F"}}>Marge</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/FireBro.jpg" alt="Fire Bro"/>
                    <StyledWinner>Fire Bro</StyledWinner>
                    <StyledManager style={{color: "#F1C232"}}>James</StyledManager>
                    <StyledTeam>Bowser Jr Rookies</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserJr.webp" alt="BowserJr"/>
                </WinnerDiv>
            </AwardDiv>

            <StyledMiniHeader>Silver Slugger Award</StyledMiniHeader>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey"/>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager style={{color: "#CC0000"}}>Brendan</StyledManager>
                    <StyledTeam>Waluigi Spitballs</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-WaluigiSpitballs.webp" alt="Waluigi"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season2awards/Bowser.jpg" alt="Bowser"/>
                    <StyledWinner>Bowser</StyledWinner>
                    <StyledManager style={{color: "#3586E8"}}>Isaac</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser"/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/kingK.jpg" alt="King K"/>
                    <StyledWinner>King K. Rool</StyledWinner>
                    <StyledManager style={{color: "#6AA84F"}}>Marge</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </WinnerDiv>
            </AwardDiv>
            <StyledMiniHeader>Morgan Hartwell Man of the Year Award</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/players/Jake.jpg" alt="Jake"/>
                </ImageBox>
                <TextBox>
                    <StyledWinner>Jake O'Keefe</StyledWinner>
                    <StyledManager style={{color: "#CC0000"}}>Brendan</StyledManager>
                    <StyledTeam>Waluigi Spitballs</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-WaluigiSpitballs.webp" alt="Waluigi"/>
                </TextBox>
            </AwardRow>
            <StyledMiniHeader>Comeback Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season1awards/kingK.jpg" alt="King K"/>
                </ImageBox>
                <TextBox>
                    <StyledWinner>King K. Rool</StyledWinner>
                    <StyledManager style={{color: "#6AA84F"}}>Marge</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </TextBox>
            </AwardRow>
            <StyledMiniHeader>Pitcher of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season2awards/Birdo.jpg" alt="Birdo"/>
                </ImageBox>
                <TextBox>
                    <StyledWinner>Birdo</StyledWinner>
                    <StyledManager style={{color: "#999999"}}>THANdrew</StyledManager>
                    <StyledTeam>Birdo Bows</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BirdoBows.webp" alt="Birdo"/>
                </TextBox>
            </AwardRow>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage style={{objectFit: "cover"}} src="/managers/James.JPG" alt="James"/>
                    <StyledMiniHeader style={{margin: "0"}}>Manager of the Year</StyledMiniHeader>
                    <StyledManager style={{fontSize: "35px", color: "#F1C232"}}>James</StyledManager>
                    <StyledTeam>Bowser Jr Rookies</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserJr.webp" alt="BowserJr"/>
                </WinnerDiv>
                <WinnerDiv>
                    <GenImage src="/season2awards/bowserjr.jpg" alt="BowserJr"/>
                    <StyledMiniHeader style={{margin: "0"}}>Captain of the Year</StyledMiniHeader>
                    <StyledManager style={{fontSize: "35px"}}>Bowser Jr</StyledManager>
                    <StyledTeam>Bowser Jr Rookies</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserJr.webp" alt="BowserJr"/>
                </WinnerDiv>
            </AwardDiv>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season2awards/Bluenoki.jpg" alt="Bloop"/>
                    <StyledMiniHeader style={{margin: "0"}}>Most Improved Player</StyledMiniHeader>
                    <StyledWinner>Blue Noki</StyledWinner>
                    <StyledManager style={{color: "#3586E8"}}>Isaac</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser"/>
                </WinnerDiv>
                <WinnerDiv>
                    <GenImage src="/season2awards/Luigi.jpg" alt="Luigi"/>
                    <StyledMiniHeader style={{margin: "0"}}>Most Hated Player</StyledMiniHeader>
                    <StyledWinner>Luigi</StyledWinner>
                    <StyledManager style={{color: "#6AA84F"}}>Marge</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </WinnerDiv>
            </AwardDiv>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/players/Piggie.jpg" alt="Piggie"/>
                    <StyledMiniHeader style={{margin: "0"}}>Mii of the Year</StyledMiniHeader>
                    <StyledWinner>Piggie</StyledWinner>
                    <StyledManager style={{color: "#6AA84F"}}>Marge</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </WinnerDiv>
                <WinnerDiv>
                    <GenImage src="/players/Piggie.jpg" alt="Piggie"/>
                    <StyledMiniHeader style={{margin: "0"}}>Rookie of the Year</StyledMiniHeader>
                    <StyledWinner>Piggie</StyledWinner>
                    <StyledManager style={{color: "#6AA84F"}}>Marge</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi"/>
                </WinnerDiv>
            </AwardDiv>

            <AwardDiv>
                <WinnerDiv>
                    <StyledMiniHeader style={{margin: "0"}}>Stadium of the Year</StyledMiniHeader>
                    <StyledWinner style={{color: "#FF9900"}}>Yoshi Park</StyledWinner>
                    <StyledTeam>Host to all 3 GOTY candidates</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-YoshiEggs.webp" alt="Egg"/>
                </WinnerDiv>
                <WinnerDiv>
                    <StyledMiniHeader style={{margin: "0"}}>Game of the Year</StyledMiniHeader>
                    <StyledWinner>Week 6: James vs Marge</StyledWinner>
                    <StyledTeam>33 - 15</StyledTeam>
                    <ImgEmblem src="/emblems/MSS-Emblem-BowserJr.webp" alt="Rookie"/>
                </WinnerDiv>
            </AwardDiv>
        </ContentDiv>
    );
}
