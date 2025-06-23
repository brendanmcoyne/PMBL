import { styled } from "styled-components";
import {Link} from "react-router-dom";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
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

const StyledWinner = styled.h4`
    text-align: center;
    margin: 0;
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
    width: 180px;
    height: 200px;
    padding: 5px;
    background-color: white;
    align-items: center;
`;

const AwardDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 10px;
    width: 90%;
`;

const WinnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Awards1() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "darkblue"}} to="/archives/seasons/Season1">Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 Awards</StyledHeader>

            <StyledMiniHeader>Most Valuable Player</StyledMiniHeader>
                <GenImage src="/season1awards/petey.jpg" alt="Petey"/>
            <StyledWinner>Petey Piranha</StyledWinner>
            <StyledManager>Morgan</StyledManager>
            <StyledTeam>Diddy Monkeys</StyledTeam>

            <StyledMiniHeader>Offensive Player of the Year</StyledMiniHeader>
                <GenImage src="/season1awards/kingK.jpg" alt="King K"/>
            <StyledWinner>King K. Rool</StyledWinner>
            <StyledManager>James</StyledManager>
            <StyledTeam>Bowser Monsters</StyledTeam>

            <StyledMiniHeader>Defensive Player of the Year</StyledMiniHeader>
                <GenImage src="/players/Blue_Kritter.webp" alt="Blue Kritter"/>
            <StyledWinner>Blue Kritter</StyledWinner>
            <StyledManager>Brendan</StyledManager>
            <StyledTeam>DK Wild</StyledTeam>

            <StyledMiniHeader>Golden Glove Award</StyledMiniHeader>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey"/>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager>Morgan</StyledManager>
                    <StyledTeam>Diddy Monkeys</StyledTeam>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/FireBro.jpg" alt="Fire Bro"/>
                    <StyledWinner>Fire Bro</StyledWinner>
                    <StyledManager>Isaac</StyledManager>
                    <StyledTeam>Mario Fireballs</StyledTeam>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/players/Blue_Kritter.webp" alt="Blue Kritter"/>
                    <StyledWinner>Blue Kritter</StyledWinner>
                    <StyledManager>Brendan</StyledManager>
                    <StyledTeam>DK Wild</StyledTeam>
                </WinnerDiv>
            </AwardDiv>

            <StyledMiniHeader>Silver Slugger Award</StyledMiniHeader>
            <AwardDiv>
                <WinnerDiv>
                    <GenImage src="/season1awards/petey.jpg" alt="Petey"/>
                    <StyledWinner>Petey Piranha</StyledWinner>
                    <StyledManager>Morgan</StyledManager>
                    <StyledTeam>Diddy Monkeys</StyledTeam>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/FireBro.jpg" alt="Fire Bro"/>
                    <StyledWinner>Fire Bro</StyledWinner>
                    <StyledManager>Isaac</StyledManager>
                    <StyledTeam>Mario Fireballs</StyledTeam>
                </WinnerDiv>

                <WinnerDiv>
                    <GenImage src="/season1awards/kingK.jpg" alt="King K"/>
                    <StyledWinner>King K. Rool</StyledWinner>
                    <StyledManager>James</StyledManager>
                    <StyledTeam>Bowser Monsters</StyledTeam>
                </WinnerDiv>
            </AwardDiv>

            <StyledMiniHeader>Morgan Hartwell Man of the Year Award</StyledMiniHeader>
            <GenImage src="/season1awards/DarkBones.jpg" alt="Dark Bones"/>
            <StyledWinner>Dark Bones</StyledWinner>
            <StyledManager>Christach</StyledManager>
            <StyledTeam>Peach Monarchs</StyledTeam>

            <StyledMiniHeader>Manager of the Year</StyledMiniHeader>
                <GenImage src="/managers/Justin.jpg" alt="Justin"/>
            <StyledManager>Justin</StyledManager>
            <StyledTeam>Luigi Knights</StyledTeam>

            <StyledMiniHeader>Captain of the Year</StyledMiniHeader>
                <GenImage src="/season1awards/DiddyKong.jpg" alt="Diddy Kong"/>
            <StyledManager>Diddy Kong</StyledManager>
            <StyledTeam>Diddy Monkeys</StyledTeam>

            <StyledMiniHeader>Cumback Player of the Year</StyledMiniHeader>
                <GenImage src="/season1awards/GreenShyGuy.jpg" alt="Gruy Guy"/>
            <StyledWinner>Green Shy Guy</StyledWinner>
            <StyledManager>Justin</StyledManager>
            <StyledTeam>Luigi Knights</StyledTeam>

            <StyledMiniHeader>Most Improved Player</StyledMiniHeader>
                <GenImage src="/players/mii.jpg" alt="MLK"/>
            <StyledWinner>MLK</StyledWinner>
            <StyledManager>Christach</StyledManager>
            <StyledTeam>Peach Monarchs</StyledTeam>

            <StyledMiniHeader>Most Hated Player</StyledMiniHeader>
                <GenImage src="/season1awards/MontyMole.jpg" alt="Monty Mole"/>
            <StyledWinner>Monty Mole</StyledWinner>
            <StyledManager>Justin</StyledManager>
            <StyledTeam>Luigi Knights</StyledTeam>
        </ContentDiv>
    );
}
