import { styled } from "styled-components";
import { useState } from "react";
import { players } from "../data/playerNames.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const SortSelect = styled.select`
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
`;

const DivisionDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 90%;
`;

const DivisionHeader = styled.h1`
    text-align: center;
    grid-column: span 3;
`;

const Player = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const GenImage = styled.img`
    width: 150px;
    height: auto;
    border: 3px solid black;
    padding: 5px;
    
    &:hover {
        background-color: lightgray;
    }
`;

const PlayerName = styled.span`
  font-weight: bold;
  text-align: center;
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    text-align: center;
    position: relative;
    border: 2px solid black;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 100%;
    background-color: red;
    border: 2px solid red;
`;

export default function Players() {
    const [sortOption, setSortOption] = useState("az");
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const colorOrder = [
        "Red", "Orange", "Yellow", "Light Green", "Green",
        "Light Blue", "Blue", "Pink", "Purple", "Brown",
        "White", "Black", "None"
    ];

    const sortedPlayers = [...players]
        .filter((player) => {
            if (sortOption === "captains") return player.captain;
            return true;
        })
        .sort((a, b) => {
            if (sortOption === "az") return a.name.localeCompare(b.name);
            if (sortOption === "za") return b.name.localeCompare(a.name);
            if (sortOption === "color") return colorOrder.indexOf(a.color) - colorOrder.indexOf(b.color);
            return 0;
        });

    return (
        <ContentDiv>
            <DivisionHeader>Player List</DivisionHeader>

            <SortSelect value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="az">Sort A-Z</option>
                <option value="za">Sort Z-A</option>
                <option value="color">Sort by Color</option>
                <option value="captains">Captains Only</option>
            </SortSelect>

            <DivisionDiv>
                {sortedPlayers.map((player) => (
                    <Player key={player.name} onClick={() => setSelectedPlayer(player)}>
                        <GenImage src={player.src} alt={player.name} />
                        <PlayerName>{player.name}</PlayerName>
                    </Player>
                ))}
            </DivisionDiv>

            {selectedPlayer && (
                <ModalBackground onClick={() => setSelectedPlayer(null)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setSelectedPlayer(null)}>✕</CloseButton>
                        <h2>{selectedPlayer.name} {selectedPlayer.captain ? "(C)" : ""}</h2>
                        <p>{selectedPlayer.nickname}</p>
                        <img src={selectedPlayer.src} alt={selectedPlayer.name} width="150" />
                        <p>Color: {selectedPlayer.color}</p>
                    </ModalContent>
                </ModalBackground>
            )}
        </ContentDiv>
    );
}
