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

const DivisionHeader = styled.h3`
  text-align: center;
  grid-column: span 3;
  font-size: 2rem;
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
`;

const PlayerName = styled.span`
  font-weight: bold;
  text-align: center;
`;

export default function Players() {
    const [sortOption, setSortOption] = useState("az");
    const colorOrder = ["Red", "Orange", "Yellow", "Light Green", "Green", "Light Blue", "Blue", "Pink", "Purple", "Brown", "White", "Black", "None"];

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
                    <Player key={player.name}>
                        <GenImage src={player.src} alt={player.name} />
                        <PlayerName>{player.name}</PlayerName>
                    </Player>
                ))}
            </DivisionDiv>
        </ContentDiv>
    );
}
