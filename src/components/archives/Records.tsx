import styled from "styled-components";
import {StyledHeader, ToggleButton} from "../CommonStyles.ts";
import {Link} from "react-router-dom";

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
                manager: "Brendan",
                recordValue: "119 Runs",
                season: "Season 3",
            },
            {
                id: "least-runs-season",
                title: "Least Runs in a Season",
                manager: "Marge",
                recordValue: "44 Runs",
                season: "Season 2",
            },
            {
                id: "most-runs-against",
                title: "Most Runs Against",
                manager: "Trocean",
                recordValue: "129 Runs",
                season: "Season 3",
            },
            {
                id: "least-runs-against",
                title: "Least Runs Against",
                manager: "Justave",
                recordValue: "42 Runs",
                season: "Season 2",
            },
            {
                id: "best-run-differential",
                title: "Best Run Differential",
                manager: "Justave",
                recordValue: "46 Runs",
                season: "Season 2",
            },
            {
                id: "worst-run-differential",
                title: "Worst Run Differential",
                manager: "Marge",
                recordValue: "-53 Runs",
                season: "Season 2",
            },
            {
                id: "longest-winning-streak",
                title: "Longest Winning Streak",
                managers: ["Isaac", "THANdrew"],
                recordValue: "5 Wins",
                season: "Season 2 & 3",
            },
            {
                id: "longest-losing-streak",
                title: "Longest Losing Streak",
                manager: "Marge",
                recordValue: "8 Losses",
                season: "Season 2 & 3",
            },
        ],
    },
    {
        title: "All-Time Records (Player)",
        description: "Records accumulated over the history of PMBL statistics. (Only full seasons are counted)",
        records: [
            {
                id: "most-hits-all-time",
                title: "Most Hits",
                holder: "Green Toad",
                recordValue: "60 Hits",
            },
            {
                id: "most-doubles-all-time",
                title: "Most Doubles",
                holders: ["Baby DK", "Peach", "Petey Piranha"],
                recordValue: "8 Doubles",
            },
            {
                id: "most-triples-all-time",
                title: "Most Triples",
                holder: "Bowser Jr",
                recordValue: "7 Triples",
            },
            {
                id: "most-homeruns-all-time",
                title: "Most Home Runs",
                holders: ["Bowser", "King K. Rool", "Petey Piranha"],
                recordValue: "22 HRs",
            },
            {
                id: "most-rbis-all-time",
                title: "Most RBIs",
                holder: "King K. Rool",
                recordValue: "62 RBIs",
            },
            {
                id: "most-batting-strikeouts",
                title: "Most Batting Strikeouts",
                holder: "Abu Patel",
                recordValue: "4 Ks",
            },
            {
                id: "best-batting-average",
                title: "Best Batting Average",
                holder: "Purple Toad",
                recordValue: "0.733",
            },
            {
                id: "best-slugging-percentage",
                title: "Best Slugging Percentage",
                holder: "King K. Rool",
                recordValue: "1.520",
            },
            {
                id: "most-pitching-wins",
                title: "Most Pitching Wins",
                holder: "Birdo",
                recordValue: "9 Wins",
            },
            {
                id: "most-pitching-losses",
                title: "Most Pitching Losses",
                holders: ["Boo", "Donkey Kong"],
                recordValue: "6 Losses",
            },
            {
                id: "best-era-all-time",
                title: "Best ERA (50+ IP)",
                holder: "Bob Marley",
                recordValue: "4.480",
            },
            {
                id: "most-complete-games",
                title: "Most Complete Games Pitched",
                holder: "Bob Marley",
                recordValue: "5",
            },
            {
                id: "innings-pitched",
                title: "Most Innings Pitched",
                holder: "Birdo",
                recordValue: "88.0 IP",
            },
            {
                id: "most-hits-pitcher",
                title: "Most Hits Given Up",
                holder: "Birdo",
                recordValue: "184 Hits",
            },
            {
                id: "most-runs-pitcher",
                title: "Most Runs Given Up",
                holder: "Mario",
                recordValue: "88.0 IP",
            },
            {
                id: "most-homeruns-pitcher",
                title: "Most Homers Given Up",
                holder: "Birdo",
                recordValue: "17 HRs",
            },
            {
                id: "Most-strikeouts",
                title: "Most Strikeouts All Time",
                holder: "Birdo",
                recordValue: "14 Ks",
            },
            {
                id: "Most-strikeouts-swinging",
                title: "Most Strikeouts Swinging",
                holder: "Birdo",
                recordValue: "12 Ks",
            },
            {
                id: "Most-strikeouts-looking",
                title: "Most Strikeouts Looking",
                holder: "Luigi",
                recordValue: "7 ꓘs",
            },
        ],
    },
];

const RecordsPage = styled.main`
    width: min(1240px, calc(100% - 40px));
    margin: 0 auto;
    padding: 45px 0 80px;

    @media (max-width: 600px) {
        width: min(100% - 24px, 1240px);
        padding-top: 28px;
    }
`;

const RecordsSection = styled.section`
    margin-bottom: 64px;
`;

const SectionHeader = styled.div`
    position: relative;
    margin-bottom: 24px;
    padding-left: 18px;

    &::before {
        content: "";
        position: absolute;
        top: 3px;
        bottom: 3px;
        left: 0;
        width: 5px;
        border-radius: 999px;
        background: darkblue;
    }

    h2 {
        margin: 0;
        color: white;
        font-size: clamp(1.45rem, 2.5vw, 2rem);
        line-height: 1.2;
    }

    p {
        margin: 7px 0 0;
        color: #aeb4bf;
        font-size: 0.95rem;
        line-height: 1.5;
    }
`;

const RecordsList = styled.div`
    display: grid;
    gap: 14px;
`;

type RecordColorProps = {
    $recordColor: string;
    $compact?: boolean;
};

const RecordCard = styled.article<RecordColorProps>`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    min-height: ${({ $compact }) => ($compact ? "125px" : "200px")};

    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;

    background: linear-gradient(145deg, rgba(255, 255, 255, 0.095), rgba(255, 255, 255, 0.035)), #242424;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

    &::before {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 7px;
        background: ${({ $recordColor }) => $recordColor};
    }

    &::after {
        content: "";
        position: absolute;
        top: -90px;
        right: -90px;
        width: 210px;
        height: 210px;
        border-radius: 50%;
        background: ${({ $recordColor }) => $recordColor};
        opacity: 0.08;
        pointer-events: none;
    }

    @media (max-width: 700px) {
        min-height: 0;
    }
`;

const RecordTitle = styled.div`
    min-width: 0;

    span {
        display: block;
        margin-bottom: 7px;
        color: #9299a5;
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 1.4px;
        text-transform: uppercase;
    }

    h3 {
        margin: 0;
        color: white;
        font-size: 1.22rem;
        line-height: 1.35;
    }
`;

const RecordValue = styled.div<RecordColorProps>`
    min-width: 105px;
    padding: 10px 15px;
    border-radius: 12px;
    background: ${({ $recordColor }) => $recordColor};
    color: white;
    font-size: 0.95rem;
    font-weight: 900;
    text-align: center;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);

    @media (max-width: 500px) {
        min-width: 0;
        width: fit-content;
    }
`;

const RecordBody = styled.div<{ $compact?: boolean }>`
    position: relative;
    z-index: 1;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding: ${({ $compact }) =>
            $compact ? "0 24px 18px 30px" : "0 24px 18px 30px"};
`;

const RecordHolder = styled.div`
    h4 {
        margin: 0 0 14px;
        font-size: 1.1rem;
        line-height: 1.4;
    }
`;

const ManagerList = styled.span`
    border: none;
    background: none;
`;

const ManagerName = styled.span<ManagerColorProps>`
    color: ${({ $managerColor }) => $managerColor};
    font-weight: 900;
`;

const RecordDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;

    > span {
        padding: 6px 9px;
        border: 1px solid rgba(255, 255, 255, 0.09);
        border-radius: 7px;
        background: rgba(255, 255, 255, 0.045);
        color: #c8cbd1;
        font-size: 0.82rem;
        line-height: 1.25;
    }

    strong {
        color: white;
    }
`;

const RecordContext = styled.p`
    margin: 14px 0 0;
    padding-top: 13px;
    border-top: 1px solid rgba(255, 255, 255, 0.09);
    color: #9fa5af;
    font-size: 0.85rem;
    line-height: 1.45;
`;

const CardTop = styled.div<{ $compact?: boolean }>`
    position: relative;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: ${({ $compact }) => ($compact ? "center" : "flex-start")};
    gap: 18px;

    padding: ${({ $compact }) =>
            $compact ? "20px 24px 10px 30px" : "18px 24px 12px 30px"};

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const PageIntro = styled.div`
    text-align: center;
    margin-bottom: 60px;

    p {
        max-width: 650px;
        margin: 12px auto 0;
        color: #b8bdc7;
        font-size: 1rem;
        line-height: 1.6;
    }
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
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/records&stats">← Back</Link>
            </ToggleButton>

            <PageIntro>
                <StyledHeader>PMBL Records</StyledHeader>
            </PageIntro>

            {recordSections.map((section) => (
                <RecordsSection key={section.title}>
                    <SectionHeader>
                        <h2>{section.title}</h2>
                        {section.description && (<p>{section.description}</p>)}
                    </SectionHeader>

                    <RecordsList>
                        {section.records.map((record) => {
                            const managers = record.managers ?? (record.manager ? [record.manager] : []);

                            const managerColors = managers.length > 0 ? managers.map(getManagerColor) : ["#6b7280"];
                            const recordColor =
                                managerColors.length > 1 ? `linear-gradient(135deg,
                                ${managerColors[0]} 0%,${managerColors[0]} 48%,${managerColors[1]} 52%,${managerColors[1]} 100%)` : managerColors[0];

                            const holders = record.holders ?? (record.holder ? [record.holder] : []);
                            const isCompact = section.title === "Season Records (Team)" || section.title === "All-Time Records (Player)"

                            return (
                                <RecordCard key={record.id} $recordColor={recordColor} $compact={isCompact}>
                                    <CardTop $compact={isCompact}>
                                        <RecordTitle>
                                            <span>PMBL Record</span>
                                            <h3>{record.title}</h3>
                                        </RecordTitle>

                                        <RecordValue $recordColor={recordColor}>
                                            {record.recordValue}
                                        </RecordValue>
                                    </CardTop>

                                    <RecordBody $compact={isCompact}>
                                        {holders.length > 0 && (
                                            <RecordHolder>
                                                <h4>
                                                    {holders.map((holder, index) => {
                                                        const holderColor = managerColors[Math.min(index, managerColors.length - 1)];

                                                        return (
                                                            <span key={`${record.id}-${holder}`}>
                                                                <ManagerName $managerColor={holderColor}>
                                                                    {holder}
                                                                </ManagerName>
                                                                {index < holders.length - 1 && " / "}
                                                            </span>
                                                        );
                                                    })}
                                                </h4>
                                            </RecordHolder>
                                        )}

                                        <RecordDetails>
                                            {managers.length > 0 && (
                                                <span>
                                                    <strong>
                                                        {managers.length > 1
                                                            ? "Managers:"
                                                            : "Manager:"}
                                                    </strong>{" "}
                                                    {managers.map(
                                                        (manager, index) => (
                                                            <ManagerList key={`${record.id}-${manager}`}>
                                                                <ManagerName $managerColor={managerColors[index]}>
                                                                    {manager}
                                                                </ManagerName>

                                                                {index < managers.length - 1 && " / "}
                                                            </ManagerList>
                                                        )
                                                    )}
                                                </span>
                                            )}

                                            {record.season && (
                                                <span>
                                                    <strong>Season:</strong>{" "}
                                                    {record.season}
                                                </span>
                                            )}

                                            {record.week && (
                                                <span>
                                                    <strong>Week:</strong>{" "}
                                                    {record.week}
                                                </span>
                                            )}
                                        </RecordDetails>

                                        {record.details && (
                                            <RecordContext>
                                                {record.details}
                                            </RecordContext>
                                        )}
                                    </RecordBody>
                                </RecordCard>
                            );
                        })}
                    </RecordsList>
                </RecordsSection>
            ))}
        </RecordsPage>
    );
}