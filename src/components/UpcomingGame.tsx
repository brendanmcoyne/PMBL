import { styled } from "styled-components";

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
    color: white;
`;

const TeamsRow = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;     
    width: 80%;
    margin-bottom: 2rem;
    gap: 1.5rem; 
`;

const TeamColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

const TeamLabel = styled.div`
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Logo = styled.img`
    width: 130px;
    height: 130px;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 1000px) {
        width: 100px;
        height: 100px;
    }
`;

const Manager = styled.div`
    margin-bottom: 0;
`;

const Record = styled.p`
    color: lightgray;
    font-size: .75rem;
    margin: 0;
`;

const ScoreTable = styled.table`
    border-collapse: collapse;
    text-align: center;
    margin-bottom: 2rem;
    width: 85%;
`;

const Th = styled.th`
    border: 1px solid #fff;
    padding: 0.25rem;
`;

const Td = styled.td`
    border: 1px solid #fff;
    padding: 0.25rem;
`;

export default function Game() {


    const game = {
        away: { name: "Isaac", color: "#3586E8", manager: "Isaac", record: "0-0", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 0, E: 0, LOB: 0 },
        home: { name: "Justave", color: "#FF9900", manager: "Justave", record: "0-0", scores: [0, 0, 0, 0, 0, 0, 0], R: 0, H: 0, E: 0, LOB: 0 },
    };

    {/*
        Brendan: "#CC0000"
        Justave: "#FF9900"
        James: "#F1C232"
        Marge: "#6AA84F"
        Isaac: "#3586E8"
        Trocean: "#9900FF"
        Morgan: "#FF00FF"
        THANdrew: "#999999"
    */}

    return (
        <ContentDiv>
            <TeamsRow>
                <TeamColumn>
                    <TeamLabel>Away Team</TeamLabel>
                    <Logo src="/emblems/MSS-Emblem-DKWilds.webp" alt={`${game.away.name} logo`} />
                    <Manager style={{color: game.away.color}}>{game.away.manager}</Manager>
                    <Record>({game.away.record})</Record>
                </TeamColumn>
                <p style={{margin: "0", transform: "translateY(-10px)", fontFamily: "'Luckiest Guy', cursive", fontSize: "3rem"}}>vs</p>
                <TeamColumn>
                    <TeamLabel>Home Team</TeamLabel>
                    <Logo src="/emblems/MSS-Emblem-LuigiKnights.webp" alt={`${game.home.name} logo`} />
                    <Manager style={{color: game.home.color}}>{game.home.manager}</Manager>
                    <Record>({game.home.record})</Record>
                </TeamColumn>
            </TeamsRow>

            <ScoreTable>
                <thead>
                <tr>
                    <Th>Team</Th>
                    {[...Array(7)].map((_, i) => <Th key={i}>{i + 1}</Th>)}
                    <Th>R</Th>
                    <Th>H</Th>
                    <Th>E</Th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td style={{color: game.away.color}}>{game.away.name}</Td>
                    {game.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game.away.R}</Td>
                    <Td>{game.away.H}</Td>
                    <Td>{game.away.E}</Td>
                </tr>
                <tr>
                    <Td style={{color: game.home.color}}>{game.home.name}</Td>
                    {game.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game.home.R}</Td>
                    <Td>{game.home.H}</Td>
                    <Td>{game.home.E}</Td>
                </tr>
                </tbody>
            </ScoreTable>
            <h4 style={{ marginTop: "0", marginBottom: "0.75rem" }}>
                Location: <span style={{ color: "#4CAF50" }}>Yoshi Park</span>
            </h4>

            {/*
                Mario Stadium: "#FF4F4F"
                Daisy Cruiser: "#FFA500"
                Yoshi Park: "#4CAF50"
                Wario City: "#FFD700"
                DK Jungle: "#8B4513"
                Bowser Jr's Playroom: "#CDA434"
                Bowsers Castle: "#111111"
            */}
        </ContentDiv>
    );
}
