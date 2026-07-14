import styled from "styled-components";
import { StyledHeader } from "../CommonStyles.ts";

type RecordEntry = {
    id: string;
    title: string;
    holder?: string;
    holders?: string[];
    manager?: string;
    managers?: string[];
    recordValue: string;
    season?: string;
    week?: string;
    details?: string;
};

type RecordSection = {
    title: string;
    description?: string;
    records: RecordEntry[];
};

type ManagerColorProps = {
    $managerColor: string;
};

const recordSections: RecordSection[] = [
    {
        title: "Single-Game Records (Player)",
        description: "The best individual performances from a single game.",
        records: [
            {
                id: "most-hits-one-game",
                title: "Most Hits in a Game",
                holder: "Bowser Jr, Fire Bro",
                manager: "James",
                recordValue: "7 Hits",
                season: "Season 3",
                week: "Week 6",
                details: "Final score: 33–15",
            },
            {
                id: "most-rbis-one-game",
                title: "Most RBIs in a Game",
                holder: "King K. Rool",
                manager: "Marge",
                recordValue: "10 RBIs",
                season: "Season 3",
                week: "Week 8",
                details: "Final score: 14–13",
            },
            {
                id: "most-hrs-one-game",
                title: "Most HRs in a Game",
                holder: "King K. Rool",
                manager: "Marge",
                recordValue: "4 HRs",
                season: "Season 3",
                week: "Week 8",
                details: "Final score: 14–13",
            },
            {
                id: "most-strikeouts-one-game",
                title: "Most Strikeouts in a Game",
                holder: "Bowser",
                manager: "Brendan",
                recordValue: "3 Ks",
                season: "Season 2",
                week: "Week 1",
                details: "Final score: 2-3",
            },
            {
                id: "most-innings-pitched",
                title: "Most Innings Pitched in a Game",
                holder: "J-Nasty",
                manager: "Isaac",
                recordValue: "8 IP",
                season: "Season 2",
                week: "Week 7",
                details: "Final score: 5-7",
            },
        ],
    },
    {
        title: "Single-Game Records (Team)",
        description: "The best team performances from a single game.",
        records: [
            {
                id: "most-runs-one-team",
                title: "Most Runs by One Team",
                holder: "James",
                manager: "James",
                recordValue: "33 Runs",
                season: "Season 3",
                week: "Week 6",
                details: "Final score: 33–15",
            },
            {
                id: "most-runs-both-teams",
                title: "Most Runs by Both Teams",
                holders: ["James", "Marge"],
                managers: ["James", "Marge"],
                recordValue: "48 Runs",
                season: "Season 3",
                week: "Week 6",
                details: "Final score: 33–15",
            },
            {
                id: "most-hits-one-team",
                title: "Most Hits by One Team",
                holder: "James",
                manager: "James",
                recordValue: "45 Hits",
                season: "Season 3",
                week: "Week 6",
                details: "Final score: 33–15",
            },
            {
                id: "most-hits-both-teams",
                title: "Most Hits by Both Teams",
                holders: ["James", "Marge"],
                managers: ["James", "Marge"],
                recordValue: "73 Hits",
                season: "Season 3",
                week: "Week 6",
                details: "Final score: 33–15, James",
            },
            {
                id: "most-errors-one-team",
                title: "Most Errors by One Team",
                holder: "Isaac",
                manager: "Isaac",
                recordValue: "6 Errors",
                season: "Season 3",
                week: "Week 8",
                details: "Final score: 13-14",
            },
            {
                id: "most-errors-both-teams",
                title: "Most Errors by Both Teams",
                holders: ["Marge", "Isaac"],
                managers: ["Marge", "Isaac"],
                recordValue: "7 Errors",
                season: "Season 3",
                week: "Week 8",
                details: "Final score: 14–13, Marge",
            },
            {
                id: "most-players-lob-one-team",
                title: "Most Left on Base by One Team",
                holder: "Isaac",
                manager: "Isaac",
                recordValue: "13 LOB",
                season: "Season 2",
                week: "Week 1",
                details: "Final score: 5-6",
            },
            {
                id: "most-players-lob-both-teams",
                title: "Most Left on Base by Both Teams",
                holders: ["Isaac", "THANdrew"],
                managers: ["Isaac", "THANdrew"],
                recordValue: "20 LOB",
                season: "Season 2",
                week: "Week 1",
                details: "Final score: 6-5, THANdrew",
            },
            {
                id: "most-homeruns-one-team",
                title: "Most Home Runs by One Team",
                holder: "James",
                manager: "James",
                recordValue: "7 HRs",
                season: "Season 3",
                week: "Week 6",
                details: "Final score: 33–15",
            },
            {
                id: "most-homeruns-both-teams",
                title: "Most Home Runs by Both Teams",
                holders: ["James", "Marge"],
                managers: ["James", "Marge"],
                recordValue: "11 HRs",
                season: "Season 3",
                week: "Week 6",
                details: "Final score: 33–15",
            },
            {
                id: "biggest-shutout",
                title: "Biggest Shutout",
                holder: "Justave",
                manager: "Justave",
                recordValue: "16 Runs",
                season: "Season 2",
                week: "Week 4",
                details: "Final score: 16–0",
            },
            {
                id: "largest-margin-of-victory",
                title: "Largest Margin of Victory",
                holder: "Isaac",
                manager: "Isaac",
                recordValue: "19 Runs",
                season: "Season 1",
                week: "Week 8",
                details: "Final Score: 23-4",
            },
            {
                id: "largest-comeback",
                title: "Largest Comeback to Win",
                holder: "Morgan",
                manager: "Morgan",
                recordValue: "11 Runs",
                season: "Season 3",
                week: "Week 4",
                details: "Down 2-13, Won 15-13",
            },
            {
                id: "longest-game",
                title: "Longest Game",
                holders: ["Marge", "Trocean"],
                managers: ["Marge", "Trocean"],
                recordValue: "11 Innings",
                season: "Season 2",
                week: "Week 1",
                details: "Final Score: 6-5 Marge",
            },

        ],
    },
    {
        title: "Season Records (Player)",
        description: "Records accumulated over the course of one season.",
        records: [
            {
                id: "most-hits",
                title: "Most Hits in a Season",
                holder: "Green Toad",
                manager: "Justave",
                recordValue: "35 Hits",
                season: "Season 2",
            },
            {
                id: "most-rbis",
                title: "Most RBIs in a Season",
                holder: "King K. Rool",
                manager: "Morgan",
                recordValue: "33 RBIs",
                season: "Season 2",
            },
            {
                id: "most-runs",
                title: "Most Runs in a Season",
                holder: "Bowser Jr.",
                manager: "James",
                recordValue: "20 Runs",
                season: "Season 3",
            },
            {
                id: "most-hrs",
                title: "Most HRs in a Season",
                holder: "King K. Rool",
                manager: "Marge",
                recordValue: "12 HRs",
                season: "Season 3",
            },
            {
                id: "most-strikeouts",
                title: "Most Batting Ks in a Season",
                holder: "Abu Patel",
                manager: "THANdrew",
                recordValue: "3 Ks",
                season: "Season 3",
            },
            {
                id: "most-doubles",
                title: "Most Doubles in a Season",
                holder: "4 Players Tied",
                manager: "Multiple",
                recordValue: "6 Ds",
                season: "Season 2 & 3",
            },
            {
                id: "most-triples",
                title: "Most Triples in a Season",
                holder: "Bowser Jr",
                manager: "James",
                recordValue: "6 Ts",
                season: "Season 3",
            },
            {
                id: "best-bat-percent",
                title: "Best Batting Percentage (6+ Games)",
                holder: "Green Toad",
                manager: "Justave",
                recordValue: "0.778",
                season: "Season 2",
            },
            {
                id: "best-slug-percent",
                title: "Best Slugging Percentage (6+ Games)",
                holder: "King K. Rool",
                manager: "Marge",
                recordValue: "1.615",
                season: "Season 3",
            },
            {
                id: "most-innings-pitched",
                title: "Most Innings Pitched",
                holder: "Bob Marley",
                manager: "Justave",
                recordValue: "53.2 IP",
                season: "Season 2",
            },
            {
                id: "best-era",
                title: "Best ERA in a Season (10+ IP)",
                holder: "Blue Magikoopa",
                manager: "THANdrew",
                recordValue: "3.23 ERA",
                season: "Season 3",
            },
            {
                id: "most-wins",
                title: "Most Wins in a Season",
                holders: ["Birdo", "Bob Marley"],
                managers: ["James", "Justave"],
                recordValue: "5 Wins",
                season: "Season 2",
            },
            {
                id: "most-strikeouts",
                title: "Most Pitching Ks in a Season",
                holder: "Birdo",
                manager: "James",
                recordValue: "9 Ks",
                season: "Season 2",
            },
            {
                id: "best-whip",
                title: "Best WHIP in a Season (10+ IP)",
                holder: "Bob Marley",
                manager: "Justave",
                recordValue: "1.640",
                season: "Season 2",
            },
            {
                id: "most-hits-allowed",
                title: "Most Hits Allowed",
                holder: "Birdo",
                manager: "THANdrew",
                recordValue: "106 Hits",
                season: "Season 3",
            },
            {
                id: "most-hrs-allowed",
                title: "Most HRs Allowed",
                holder: "Birdo",
                manager: "THANdrew",
                recordValue: "14 HRs",
                season: "Season 3",
            },
            {
                id: "most-earned-runs-allowed",
                title: "Most Earned Runs Allowed",
                holder: "Donkey Kong",
                manager: "Trocean",
                recordValue: "57 ERs",
                season: "Season 3",
            },
        ],
    },
    {
        title: "Season Records (Team)",
        description: "Records accumulated over the course of one/two seasons.",
        records: [
            {
                id: "most-runs-season",
                title: "Most Runs in a Season",
                holder: "Brendan",
                manager: "Brendan",
                recordValue: "119 Runs",
                season: "Season 3",
            },
            {
                id: "least-runs-season",
                title: "Least Runs in a Season",
                holder: "Marge",
                manager: "Marge",
                recordValue: "44 Runs",
                season: "Season 2",
            },
            {
                id: "most-runs-against",
                title: "Most Runs Against",
                holder: "Trocean",
                manager: "Trocean",
                recordValue: "129 Runs",
                season: "Season 3",
            },
            {
                id: "least-runs-against",
                title: "Least Runs Against",
                holder: "Justave",
                manager: "Justave",
                recordValue: "42 Runs",
                season: "Season 2",
            },
            {
                id: "best-run-differential",
                title: "Best Run Differential",
                holder: "Justave",
                manager: "Justave",
                recordValue: "46 Runs",
                season: "Season 2",
            },
            {
                id: "worst-run-differential",
                title: "Worst Run Differential",
                holder: "Marge",
                manager: "Marge",
                recordValue: "-53 Runs",
                season: "Season 2",
            },
            {
                id: "longest-winning-streak",
                title: "Longest Winning Streak",
                holders: ["Isaac", "THANdrew"],
                managers: ["Isaac", "THANdrew"],
                recordValue: "5 Wins",
                season: "Season 2 & 3",
            },
            {
                id: "longest-losing-streak",
                title: "Longest Losing Streak",
                holder: "Marge",
                manager: "Marge",
                recordValue: "8 Losses",
                season: "Season 2 & 3",
            },
        ],
    },
];

const RecordsPage = styled.main`
    width: min(1100px, calc(100% - 32px));
    margin: 0 auto;
    padding: 40px 0;
`;

const RecordsSection = styled.section`
    margin-bottom: 38px;
`;

const SectionHeader = styled.div`
    margin-bottom: 16px;

    h2 {
        margin: 0;
        color: white;
        font-size: clamp(1.5rem, 3vw, 2rem);
    }

    p {
        margin: 6px 0 0;
        color: #bfc3ca;
        line-height: 1.5;
    }
`;

const RecordsList = styled.div`
    display: grid;
    gap: 14px;
`;

type RecordColorProps = {
    $recordColor: string;
};

const RecordCard = styled.article<RecordColorProps>`
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: minmax(180px, 1fr) minmax(240px, 1.4fr) auto;
    align-items: center;
    gap: 24px;
    padding: 20px 20px 20px 28px;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: white;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 8px;
        background: ${({ $recordColor }) => $recordColor};
    }

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

const RecordTitle = styled.div`
    h3 {
        margin: 0;
        color: #111827;
        font-size: 1.12rem;
        line-height: 1.3;
    }
`;

const RecordHolder = styled.div`
    min-width: 0;

    h4 {
        margin: 0 0 7px;
        color: #111827;
        font-size: 1.05rem;
    }
`;

const ManagerName = styled.span<ManagerColorProps>`
    color: ${({ $managerColor }) => $managerColor};
    font-weight: 900;
`;

const RecordDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px 16px;
    color: #4b5563;
    font-size: 0.9rem;

    span {
        white-space: nowrap;
    }
`;

const RecordValue = styled.div<RecordColorProps>`
    background: ${({ $recordColor }) => $recordColor};
    color: white;
    min-width: 115px;
    padding: 10px 16px;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 900;
    text-align: center;

    @media (max-width: 750px) {
        width: fit-content;
        min-width: 0;
    }
`;

const RecordContext = styled.p`
    margin: 8px 0 0;
    color: #6b7280;
    font-size: 0.88rem;
`;

const getManagerColor = (manager = ""): string => {
    const normalizedManager = manager.trim().toLowerCase();

    const managerColors: Record<string, string> = {
        brendan: "#CC0000",

        justave: "#FF9900",
        justin: "#FF9900",

        james: "#F1C232",

        marge: "#6AA84F",
        matt: "#6AA84F",

        isaac: "#3586E8",

        trocean: "#9900FF",
        christach: "#9900FF",

        morgan: "#FF00FF",

        thandrew: "#999999",
        dandrew: "#999999",
    };

    return managerColors[normalizedManager] || "#374151";
};

export default function Records() {

    return (
        <RecordsPage>
            <StyledHeader>PMBL Records</StyledHeader>

            {recordSections.map((section) => (
                <RecordsSection key={section.title}>
                    <SectionHeader>
                        <h2>{section.title}</h2>

                        {section.description && (
                            <p>{section.description}</p>
                        )}
                    </SectionHeader>

                    <RecordsList>
                        {section.records.map((record) => {
                            const managers = record.managers
                                ?? (record.manager ? [record.manager] : []);

                            const managerColors =
                                managers.length > 0
                                    ? managers.map(getManagerColor)
                                    : ["#374151"];

                            const recordColor = managerColors.length > 1 ? `linear-gradient(90deg,
                            ${managerColors[0]} 0%,
                            ${managerColors[0]} 50%,
                            ${managerColors[1]} 50%,
                            ${managerColors[1]} 100%)` : managerColors[0];

                            return (
                                <RecordCard key={record.id} $recordColor={recordColor}>
                                    <RecordTitle>
                                        <h3>{record.title}</h3>
                                    </RecordTitle>

                                    <RecordHolder>
                                        <h4>
                                            {record.holders ? (
                                                record.holders.map((holder, index) => (
                                                    <span key={holder}>
                                                        <ManagerName $managerColor={getManagerColor(holder)}>
                                                            {holder}
                                                        </ManagerName>

                                                        {index < record.holders!.length - 1 && " / "}
                                                    </span>
                                                ))) : (
                                                <ManagerName $managerColor={getManagerColor(record.holder)}>
                                                    {record.holder}
                                                </ManagerName>
                                            )}
                                        </h4>

                                        <RecordDetails>
                                            {managers.length > 0 && (
                                                <span><strong>{managers.length > 1 ? "Managers:" : "Manager:"}</strong>{" "}
                                                    {managers.map((manager, index) => (
                                                        <span key={manager}>
                                                            <ManagerName $managerColor={managerColors[index]}>
                                                                {manager}
                                                            </ManagerName>

                                                            {index < managers.length - 1 && " / "}
                                                        </span>
                                                    ))}
                                                </span>
                                            )}

                                            {record.season && (<span><strong>Season:</strong> {record.season}</span>)}

                                            {record.week && (<span><strong>Week:</strong> {record.week}</span>)}
                                        </RecordDetails>

                                        {record.details && (<RecordContext>{record.details}</RecordContext>)}
                                    </RecordHolder>

                                    <RecordValue $recordColor={recordColor}>
                                        {record.recordValue}
                                    </RecordValue>
                                </RecordCard>
                            );
                        })}
                    </RecordsList>
                </RecordsSection>
            ))}
        </RecordsPage>
    );
}