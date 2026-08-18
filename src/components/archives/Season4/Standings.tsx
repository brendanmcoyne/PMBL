import styled from "styled-components";
import { Link } from "react-router-dom";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";

type TeamStatus = "conference" | "division" | "playoff" | "eliminated";

interface Team {
    name: string;
    color: string;
    status?: TeamStatus;
    record: string;
    divisionRecord: string;
    streak: string;
    pointsFor: number;
    pointsAgainst: number;
}

interface DivisionProps {
    name: string;
    color: string;
    teams: Team[];
}

const eastTeams: Team[] = [
    {
        name: "Marge",
        color: "#6AA84F",
        status: "conference",
        record: "5-1",
        divisionRecord: "3-0",
        streak: "W4",
        pointsFor: 49,
        pointsAgainst: 38,
    },
    {
        name: "Justave",
        color: "#FF9900",
        status: "eliminated",
        record: "2-4",
        divisionRecord: "2-2",
        streak: "W1",
        pointsFor: 40,
        pointsAgainst: 45,
    },
    {
        name: "Brendan",
        color: "#CC0000",
        status: "eliminated",
        record: "1-4",
        divisionRecord: "1-2",
        streak: "L1",
        pointsFor: 35,
        pointsAgainst: 40,
    },
    {
        name: "James",
        color: "#F1C232",
        status: "eliminated",
        record: "1-4",
        divisionRecord: "0-2",
        streak: "L2",
        pointsFor: 35,
        pointsAgainst: 59,
    },
];

const westTeams: Team[] = [
    {
        name: "Trocean",
        color: "#9900FF",
        status: "conference",
        record: "4-1",
        divisionRecord: "3-0",
        streak: "W2",
        pointsFor: 49,
        pointsAgainst: 27,
    },
    {
        name: "Morgan",
        color: "#FF00FF",
        status: "playoff",
        record: "3-2",
        divisionRecord: "0-2",
        streak: "L1",
        pointsFor: 31,
        pointsAgainst: 28,
    },
    {
        name: "Isaac",
        color: "#3586E8",
        status: "playoff",
        record: "3-2",
        divisionRecord: "2-1",
        streak: "W1",
        pointsFor: 29,
        pointsAgainst: 29,
    },
    {
        name: "THANdrew",
        color: "#999999",
        status: "eliminated",
        record: "2-3",
        divisionRecord: "0-2",
        streak: "L2",
        pointsFor: 28,
        pointsAgainst: 36,
    },

];

const statusSymbols: Record<TeamStatus, string> = {
    conference: "z",
    division: "y",
    playoff: "x",
    eliminated: "e",
};

const statusColors: Record<TeamStatus, string> = {
    conference: "#5b9cff",
    division: "#ffad33",
    playoff: "#55a868",
    eliminated: "#a0a0a0",
};

export const ContentDiv = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 4rem;
`;

const StandingsContainer = styled.div`
    display: grid;
    width: min(1200px, 100%);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;

    @media screen and (max-width: 950px) {
        grid-template-columns: 1fr;
        max-width: 650px;
    }
`;

const DivisionSection = styled.section`
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    background: rgba(18, 18, 28, 0.95);
    box-shadow:
        0 16px 40px rgba(0, 0, 0, 0.28),
        inset 0 1px 0 rgba(255, 255, 255, 0.06);
`;

const DivisionHeader = styled.h2<{ $accentColor: string }>`
    margin: 0;
    padding: 1.25rem;
    color: ${({ $accentColor }) => $accentColor};
    font-family: "Bebas Neue", sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: 2px;
    text-align: center;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    background: linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.12),
        rgba(255, 255, 255, 0.03)
    );
`;

const TableScroller = styled.div`
    overflow-x: auto;
`;

const StandingsTable = styled.div`
    width: 100%;
`;

const GridRow = styled.div<{ $eliminated?: boolean }>`
    display: grid;
    grid-template-columns:
        minmax(130px, 1.7fr)
        repeat(3, minmax(62px, 0.8fr))
        repeat(3, minmax(48px, 0.65fr));
    align-items: center;
    min-height: 52px;
    padding: 0 1rem;
    color: ${({ $eliminated }) =>
    $eliminated ? "rgba(255, 255, 255, 0.58)" : "#ffffff"};
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: ${({ $eliminated }) =>
    $eliminated ? "rgba(255, 255, 255, 0.015)" : "transparent"};
    transition:
        background-color 150ms ease,
        transform 150ms ease;

    &:nth-child(odd) {
        background-color: rgba(255, 255, 255, 0.025);
    }

    &:last-child {
        border-bottom: none;
    }

    > div:first-child {
        text-align: left;
    }
`;

const HeaderRow = styled(GridRow)`
    min-height: 46px;
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0.06);

    > div:not(:first-child) {
        font-variant-numeric: tabular-nums;
    }
`;

const TeamName = styled.div<{ $teamColor: string }>`
    overflow: hidden;
    color: ${({ $teamColor }) => $teamColor};
    font-weight: 700;
    white-space: nowrap;
`;

const StatusSymbol = styled.sup<{ $status: TeamStatus }>`
    margin-left: 2px;
    color: ${({ $status }) => statusColors[$status]};
    font-size: 0.7em;
`;

const Stat = styled.div`
    font-variant-numeric: tabular-nums;
`;

const StreakBadge = styled.span<{ $winning: boolean }>`
    display: inline-flex;
    min-width: 34px;
    justify-content: center;
    padding: 0.2rem 0.4rem;
    color: ${({ $winning }) => ($winning ? "#7ee787" : "#ff8b8b")};
    font-size: 0.78rem;
    font-weight: 700;
`;

const Differential = styled.div<{ $value: number }>`
    color: ${({ $value }) => {
    if ($value > 0) return "#7ee787";
    if ($value < 0) return "#ff8b8b";
    return "white";
}};
    font-weight: 700;
    font-variant-numeric: tabular-nums;
`;

const Legend = styled.div`
    display: grid;
    width: min(900px, 100%);
    grid-template-columns: repeat(4, minmax(150px, 1fr));
    gap: 0.75rem;
    margin-top: 2rem;

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
    }

    @media screen and (max-width: 450px) {
        grid-template-columns: 1fr;
    }
`;

const LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.75rem 1rem;
    color: #d4d4d8;
    font-size: 0.85rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    background: rgba(18, 18, 28, 0.75);
`;

const LegendSymbol = styled.span<{ $color?: string }>`
    min-width: 18px;
    color: ${({ $color }) => $color ?? "white"};
    font-weight: 800;
    text-align: center;
`;

function Division({ name, color, teams }: DivisionProps) {
    return (
        <DivisionSection>
            <DivisionHeader $accentColor={color}>{name}</DivisionHeader>

            <TableScroller>
                <StandingsTable>
                    <HeaderRow>
                        <div>Team</div>
                        <div>Record</div>
                        <div>Div</div>
                        <div>Streak</div>
                        <div>PF</div>
                        <div>PA</div>
                        <div>PD</div>
                    </HeaderRow>

                    {teams.map((team) => {
                        const differential = team.pointsFor - team.pointsAgainst;

                        return (
                            <GridRow key={team.name} $eliminated={team.status === "eliminated"}>
                                <TeamName $teamColor={team.color}>
                                    {team.name}

                                    {team.status && (
                                        <StatusSymbol $status={team.status}>
                                            {statusSymbols[team.status]}
                                        </StatusSymbol>
                                    )}
                                </TeamName>

                                <Stat>{team.record}</Stat>
                                <Stat>{team.divisionRecord}</Stat>

                                <Stat>
                                    <StreakBadge $winning={team.streak.startsWith("W")}>
                                        {team.streak}
                                    </StreakBadge>
                                </Stat>

                                <Stat>{team.pointsFor}</Stat>
                                <Stat>{team.pointsAgainst}</Stat>

                                <Differential $value={differential}>{differential > 0 ? `+${differential}` : differential}</Differential>
                            </GridRow>
                        );
                    })}
                </StandingsTable>
            </TableScroller>
        </DivisionSection>
    );
}

export default function Standings4() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white", textDecoration: "none",}} to="/archives/Season4">← Back</Link>
            </ToggleButton>

            <StyledHeader>Season 4 PMBL Standings</StyledHeader>

            <StandingsContainer>
                <Division name="East Division" color="#4285F4" teams={eastTeams}/>
                <Division name="West Division" color="#FF0000" teams={westTeams}/>
            </StandingsContainer>

            <Legend>
                <LegendItem>
                    <LegendSymbol $color={statusColors.conference}>z</LegendSymbol>
                    Clinched Conference
                </LegendItem>

                <LegendItem>
                    <LegendSymbol $color={statusColors.division}>y</LegendSymbol>
                    Clinched Division
                </LegendItem>

                <LegendItem>
                    <LegendSymbol $color={statusColors.playoff}>x</LegendSymbol>
                    Clinched Playoff Berth
                </LegendItem>

                <LegendItem>
                    <LegendSymbol $color={statusColors.eliminated}>e</LegendSymbol>
                    Eliminated
                </LegendItem>

                <LegendItem>
                    <LegendSymbol>Div</LegendSymbol>
                    Division Record
                </LegendItem>

                <LegendItem>
                    <LegendSymbol>PF</LegendSymbol>
                    Points For
                </LegendItem>

                <LegendItem>
                    <LegendSymbol>PA</LegendSymbol>
                    Points Against
                </LegendItem>

                <LegendItem>
                    <LegendSymbol>PD</LegendSymbol>
                    Points Differential
                </LegendItem>
            </Legend>
        </ContentDiv>
    );
}