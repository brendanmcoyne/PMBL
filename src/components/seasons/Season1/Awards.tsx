import { styled } from "styled-components";
import {Link} from "react-router-dom";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding: 2rem;
    background-color: #1a1a1a;
    min-height: 100vh;
`;

const StyledHeader = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px  2px 0 #000, 2px  2px 0 #000, 0px  0px 12px #ff0;
    margin-bottom: 30px;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 2rem;
    color: #FFBF00;
    margin-top: 0;
    margin-bottom: 20px;
    text-shadow: 0 0 8px rgba(255, 191, 0, 0.4);
`;

const StyledWinner = styled.h4`
    text-align: center;
    margin: 0;
    font-size: 35px;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const StyledManager = styled.h5`
    text-align: center;
    margin: 0;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const StyledTeam = styled.p`
    text-align: center;
    font-size: 0.8rem;
    margin: 0;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const ToggleButton = styled.button`
    background-color: lightgray;
    color: darkblue;
    font-size: 1.5rem;
    border: none;
    padding: 7px 15px;
    cursor: pointer;
    align-self: flex-start;  
    margin-left: 2rem;
`;

const GenImage = styled.img`
    width: 100%;
    max-width: 280px;  
    height: 280px;
    object-fit: contain;
    border-radius: 16px;
    border: 4px solid white;
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
    background-color: #2c2c2c;
    border-radius: 16px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease;
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

const ImageBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AwardRow = styled.div`
    display: flex;
    gap: 32px;
    background-color: #2c2c2c;
    border-radius: 20px;
    padding: 32px;
    width: 95%;             
    max-width: 1000px;      
    margin-bottom: 3rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
    flex-wrap: wrap;
`;

export default function Awards1() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "darkblue"}} to="/archives/seasons/Season1">Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 Awards</StyledHeader>

            <StyledMiniHeader>Most Valuable Player</StyledMiniHeader>
            <AwardRow>

                <ImageBox>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey" />
                </ImageBox>
                <TextBox>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager>Morgan</StyledManager>
                    <StyledTeam>Diddy Monkeys</StyledTeam>
                    <img src="/emblems/MSS-Emblem-DiddyMonkeys.webp" alt="Diddy" style={{ width: "80px", height: "auto" }}/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Offensive Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season1awards/kingK.jpg" alt="King K"/>
                </ImageBox>
                <TextBox>
                    <StyledWinner>King K. Rool</StyledWinner>
                    <StyledManager>James</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                    <img src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser" style={{ width: "80px", height: "auto" }}/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Defensive Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/players/Blue_Kritter.webp" alt="Blue Kritter" />
                </ImageBox>
                <TextBox>
                    <StyledWinner>Blue Kritter</StyledWinner>
                    <StyledManager>Brendan</StyledManager>
                    <StyledTeam>DK Wild</StyledTeam>
                    <img src="/emblems/MSS-Emblem-DKWilds.webp" alt="DK" style={{ width: "80px", height: "auto" }}/>
                </TextBox>
            </AwardRow>

            <StyledMiniHeader>Golden Glove Award</StyledMiniHeader>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey"/>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager>Morgan</StyledManager>
                    <StyledTeam>Diddy Monkeys</StyledTeam>
                    <img src="/emblems/MSS-Emblem-DiddyMonkeys.webp" alt="Diddy" style={{ width: "80px", height: "auto" }}/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/FireBro.jpg" alt="Fire Bro"/>
                    <StyledWinner>Fire Bro</StyledWinner>
                    <StyledManager>Isaac</StyledManager>
                    <StyledTeam>Mario Fireballs</StyledTeam>
                    <img src="/emblems/MSS-Emblem-MarioFireballs.png" alt="Mario" style={{ width: "80px", height: "auto" }}/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/players/Blue_Kritter.webp" alt="Blue Kritter"/>
                    <StyledWinner>Blue Kritter</StyledWinner>
                    <StyledManager>Brendan</StyledManager>
                    <StyledTeam>DK Wild</StyledTeam>
                    <img src="/emblems/MSS-Emblem-DKWilds.webp" alt="DK" style={{ width: "80px", height: "auto" }}/>
                </WinnerDiv>
            </AwardDiv>

            <StyledMiniHeader>Silver Slugger Award</StyledMiniHeader>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey"/>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager>Morgan</StyledManager>
                    <StyledTeam>Diddy Monkeys</StyledTeam>
                    <img src="/emblems/MSS-Emblem-DiddyMonkeys.webp" alt="Diddy" style={{ width: "80px", height: "auto" }}/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/FireBro.jpg" alt="Fire Bro"/>
                    <StyledWinner>Fire Bro</StyledWinner>
                    <StyledManager>Isaac</StyledManager>
                    <StyledTeam>Mario Fireballs</StyledTeam>
                    <img src="/emblems/MSS-Emblem-MarioFireballs.png" alt="Mario" style={{ width: "80px", height: "auto" }}/>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/kingK.jpg" alt="King K"/>
                    <StyledWinner>King K. Rool</StyledWinner>
                    <StyledManager>James</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                    <img src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser" style={{ width: "80px", height: "auto" }}/>
                </WinnerDiv>
            </AwardDiv>
            <StyledMiniHeader>Morgan Hartwell Man of the Year Award</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season1awards/DarkBones.jpg" alt="Dark Bones"/>
                </ImageBox>
                <TextBox>

                    <StyledWinner>Dark Bones</StyledWinner>
                    <StyledManager>Christach</StyledManager>
                    <StyledTeam>Peach Monarchs</StyledTeam>
                    <img src="/emblems/MSS-Emblem-PeachMonarchs.png" alt="Peach" style={{ width: "80px", height: "auto" }}/>
                </TextBox>
            </AwardRow>
            <StyledMiniHeader>Comeback Player of the Year</StyledMiniHeader>
            <AwardRow>
                <ImageBox>
                    <GenImage src="/season1awards/GreenShyGuy.jpg" alt="Gruy Guy"/>
                </ImageBox>
                <TextBox>

                    <StyledWinner>Green Shy Guy</StyledWinner>
                    <StyledManager>Justin</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <img src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi" style={{ width: "80px", height: "auto" }}/>
                </TextBox>
            </AwardRow>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/managers/Justin.jpg" alt="Justin"/>
                    <StyledMiniHeader>Manager of the Year</StyledMiniHeader>
                    <StyledManager style={{fontSize: "35px"}}>Justin</StyledManager>
                    <StyledTeam>Luigi Knights</StyledTeam>
                    <img src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi" style={{ width: "80px", height: "auto" }}/>
                </WinnerDiv>
                <WinnerDiv>
                    <GenImage src="/season1awards/DiddyKong.jpg" alt="Diddy Kong"/>
                    <StyledMiniHeader>Captain of the Year</StyledMiniHeader>
                    <StyledManager style={{fontSize: "35px"}}>Diddy Kong</StyledManager>
                    <StyledTeam>Diddy Monkeys</StyledTeam>
                    <img src="/emblems/MSS-Emblem-DiddyMonkeys.webp" alt="Diddy" style={{ width: "80px", height: "auto" }}/>
                </WinnerDiv>
            </AwardDiv>
            <AwardDiv>
                <WinnerDiv>
                        <GenImage src="/players/mii.jpg" alt="MLK"/>
                        <StyledMiniHeader>Most Improved Player</StyledMiniHeader>
                        <StyledWinner>MLK</StyledWinner>
                        <StyledManager>Christach</StyledManager>
                        <StyledTeam>Peach Monarchs</StyledTeam>
                        <img src="/emblems/MSS-Emblem-PeachMonarchs.png" alt="Peach" style={{ width: "80px", height: "auto" }}/>
                </WinnerDiv>
                <WinnerDiv>
                        <GenImage src="/season1awards/MontyMole.jpg" alt="Monty Mole"/>
                        <StyledMiniHeader>Most Hated Player</StyledMiniHeader>
                        <StyledWinner>Monty Mole</StyledWinner>
                        <StyledManager>Justin</StyledManager>
                        <StyledTeam>Luigi Knights</StyledTeam>
                        <img src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi" style={{ width: "80px", height: "auto" }}/>
                </WinnerDiv>
            </AwardDiv>
        </ContentDiv>
    );
}
