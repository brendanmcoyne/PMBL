import { styled } from "styled-components";

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
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 2rem;
`;

const StyledWinner = styled.h4`
    text-align: center;
    margin: 0;
    font-weight: bold;
`;

const StyledManager = styled.h5`
    text-align: center;
    margin: 0;
    font-weight: bold;
`;

const StyledTeam = styled.p`
    text-align: center;
    font-size: 0.8rem;
    margin: 0;
`;

export default function Awards1() {
    return (
        <ContentDiv>
            <StyledHeader>Season 1 Awards</StyledHeader>

            <StyledMiniHeader>Most Valuable Player</StyledMiniHeader>
            <StyledWinner>Petey Piranha</StyledWinner>
            <StyledManager>Morgan</StyledManager>
            <StyledTeam>Diddy Monkeys</StyledTeam>

            <StyledMiniHeader>Offensive Player of the Year</StyledMiniHeader>
            <StyledWinner>King K. Rool</StyledWinner>
            <StyledManager>James</StyledManager>
            <StyledTeam>Bowser Monsters</StyledTeam>

            <StyledMiniHeader>Defensive Player of the Year</StyledMiniHeader>
            <StyledWinner>Blue Kritter</StyledWinner>
            <StyledManager>Brendan</StyledManager>
            <StyledTeam>DK Wild</StyledTeam>

            <StyledMiniHeader>Golden Glove Award</StyledMiniHeader>
            <StyledWinner>Petey Piranha</StyledWinner>
            <StyledManager>Morgan</StyledManager>
            <StyledTeam>Diddy Monkeys</StyledTeam>

            <StyledWinner>Fire Bro</StyledWinner>
            <StyledManager>Isaac</StyledManager>
            <StyledTeam>Mario Fireballs</StyledTeam>

            <StyledWinner>Blue Kritter</StyledWinner>
            <StyledManager>Brendan</StyledManager>
            <StyledTeam>DK Wild</StyledTeam>

            <StyledMiniHeader>Silver Slugger Award</StyledMiniHeader>
            <StyledWinner>Petey Piranha</StyledWinner>
            <StyledManager>Morgan</StyledManager>
            <StyledTeam>Diddy Monkeys</StyledTeam>

            <StyledWinner>Fire Bro</StyledWinner>
            <StyledManager>Isaac</StyledManager>
            <StyledTeam>Mario Fireballs</StyledTeam>

            <StyledWinner>King K. Rool</StyledWinner>
            <StyledManager>James</StyledManager>
            <StyledTeam>Bowser Monsters</StyledTeam>

            <StyledMiniHeader>Morgan Hartwell Man of the Year Award</StyledMiniHeader>
            <StyledWinner>Dark Bones</StyledWinner>
            <StyledManager>Christach</StyledManager>
            <StyledTeam>Peach Monarchs</StyledTeam>

            <StyledMiniHeader>Manager of the Year</StyledMiniHeader>
            <StyledManager>Justin</StyledManager>
            <StyledTeam>Luigi Knights</StyledTeam>

            <StyledMiniHeader>Captain of the Year</StyledMiniHeader>
            <StyledManager>Diddy Kong</StyledManager>
            <StyledTeam>Diddy Monkeys</StyledTeam>

            <StyledMiniHeader>Cumback Player of the Year</StyledMiniHeader>
            <StyledWinner>Green Shy Guy</StyledWinner>
            <StyledManager>Justin</StyledManager>
            <StyledTeam>Luigi Knights</StyledTeam>

            <StyledMiniHeader>Most Improved Player</StyledMiniHeader>
            <StyledWinner>MLK</StyledWinner>
            <StyledManager>Christach</StyledManager>
            <StyledTeam>Peach Monarchs</StyledTeam>

            <StyledMiniHeader>Most Hated Player</StyledMiniHeader>
            <StyledWinner>Monty Mole</StyledWinner>
            <StyledManager>Justin</StyledManager>
            <StyledTeam>Luigi Knights</StyledTeam>
        </ContentDiv>
    );
}
