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
    margin-left: 0;
    margin-right: 0;
`;

const TeamLabel = styled.div`
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 0.5rem;
`;

const Manager = styled.div`
    margin-bottom: 0.25rem;
`;

const Record = styled.p`
    color: lightgray;
    font-size: 1rem;
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

const Lob = styled.td`
    border: 1px solid #fff;
    padding: 0.25rem;
    width: 80px;
    @media screen and (max-width: 1000px) {
        width: 40px;
    }
`;

export default function Game() {
    const game = {
        away: { name: "Morgan", color: "", manager: "Aaron", record: "0-0", scores: [1, 0, 2, 0, 2, 0, 0], R: 5, H: 7, E: 1, LOB: 5  },
        home: { name: "James", color: "", manager: "Beth", record: "0-0", scores: [0, 0, 0, 2, 0, 0, 0], R: 2, H: 6, E: 0, LOB: 6 },
    };

    return (
        <ContentDiv>
            <TeamsRow>
                <TeamColumn>
                    <TeamLabel>Away Team</TeamLabel>
                    <Logo src="/emblems/MSS-Emblem-BowserJr.webp" alt={`${game.away.name} logo`} />
                    <Manager>Manager: {game.away.manager}</Manager>
                    <Record>({game.away.record})</Record>
                </TeamColumn>
                <p style={{margin: "0", transform: "translateY(-10px)", fontFamily: "'Luckiest Guy', cursive", fontSize: "3rem"}}>vs</p>
                <TeamColumn>
                    <TeamLabel>Home Team</TeamLabel>
                    <Logo src="/emblems/MSS-Emblem-MarioFireballs.png" alt={`${game.home.name} logo`} />
                    <Manager>Manager: {game.home.manager}</Manager>
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
                    <Lob style={{fontWeight: "bold"}}>LOB</Lob>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td>{game.away.name}</Td>
                    {game.away.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game.away.R}</Td>
                    <Td>{game.away.H}</Td>
                    <Td>{game.away.E}</Td>
                    <Lob>{game.away.LOB}</Lob>
                </tr>
                <tr>
                    <Td>{game.home.name}</Td>
                    {game.home.scores.map((s, i) => <Td key={i}>{s}</Td>)}
                    <Td>{game.home.R}</Td>
                    <Td>{game.home.H}</Td>
                    <Td>{game.home.E}</Td>
                    <Lob>{game.home.LOB}</Lob>
                </tr>
                </tbody>
            </ScoreTable>
            <h4 style={{marginTop: "0", marginBottom: "0.75rem"}}>Location: Daisy Cruiser</h4>
        </ContentDiv>
    );
}
