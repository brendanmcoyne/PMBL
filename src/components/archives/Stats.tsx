import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Papa from "papaparse";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {StyledHeader, ToggleButton} from "../CommonStyles.ts";

type StatRow = Record<string, string>;
type SeasonKey = "season2" | "season3" | "season4" | "allTime";
type StatType = "batting" | "pitching";
type SortDirection = "asc" | "desc";

type SortConfig = {
    key: string;
    direction: SortDirection;
} | null;

type SeasonStats = {
    batting: StatRow[];
    pitching: StatRow[];
};

type StatsBySeason = Record<SeasonKey, SeasonStats>;

const STAT_URLS: Record<SeasonKey, Record<StatType, string>> = {
    season2: {
        batting:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQI9f3DvikuiVGwybMAzw-RWIrETSb1TXze3TVmYDvjdfUb_usdve9KnRkuXxmZNmIW3DLapKjmNg9F/pub?gid=0&single=true&output=csv",
        pitching:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQI9f3DvikuiVGwybMAzw-RWIrETSb1TXze3TVmYDvjdfUb_usdve9KnRkuXxmZNmIW3DLapKjmNg9F/pub?gid=235178407&single=true&output=csv",
    },

    season3: {
        batting:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5wCbbjTUbYIHGbkCscbS-p_3YgUAZ5SiyJmKj0l9FgWEjN6jisRwQzCpgkRoaMANdjLfr427LlzTt/pub?gid=0&single=true&output=csv",
        pitching:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5wCbbjTUbYIHGbkCscbS-p_3YgUAZ5SiyJmKj0l9FgWEjN6jisRwQzCpgkRoaMANdjLfr427LlzTt/pub?gid=61989451&single=true&output=csv",
    },

    season4: {
        batting:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vR6Yquslv4MzdUiPB-H0AsVEyIMJok9SLEhBO9fuIPve_vjjFMRspjSpTA4bzsFxj6Tfezzj1UbosDM/pub?gid=0&single=true&output=csv",
        pitching:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vR6Yquslv4MzdUiPB-H0AsVEyIMJok9SLEhBO9fuIPve_vjjFMRspjSpTA4bzsFxj6Tfezzj1UbosDM/pub?gid=1237690545&single=true&output=csv",
    },
    allTime: {
        batting:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vSyH2fyM4Lp5Wp90e5Qm7qW80tLkHUzvM-5PNdotc4Y-DAFYKH_SwN3UtXTWHekivwKW8y14CXseSsT/pub?gid=0&single=true&output=csv",
        pitching:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vSyH2fyM4Lp5Wp90e5Qm7qW80tLkHUzvM-5PNdotc4Y-DAFYKH_SwN3UtXTWHekivwKW8y14CXseSsT/pub?gid=1644998744&single=true&output=csv",
    },
};

const EMPTY_STATS: StatsBySeason = {
    season2: {
        batting: [],
        pitching: [],
    },
    season3: {
        batting: [],
        pitching: [],
    },
    season4: {
        batting: [],
        pitching: [],
    },
    allTime: {
        batting: [],
        pitching: [],
    },
};

const SEASON_LABELS: Record<SeasonKey, string> = {
    season2: "Season 2",
    season3: "Season 3",
    season4: "Season 4",
    allTime: "All-Time",
};

const PageContainer = styled.main`
    width: min(1200px, calc(100% - 2rem));
    margin: 2rem auto;
    color: white;
    font-family: "Bebas Neue", sans-serif;
`;

const Controls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
`;

const ControlButton = styled.button<{ $active: boolean }>`
    padding: 0.65rem 1.4rem;
    border: 2px solid ${({ $active }) => ($active ? "gold" : "#666")};
    border-radius: 8px;
    background-color: ${({ $active }) => ($active ? "#555" : "#333")};
    color: ${({ $active }) => ($active ? "gold" : "white")};
    font-family: "Bebas Neue", sans-serif;
    font-size: 1.25rem;
    cursor: pointer;
    transition:
        background-color 0.2s ease,
        color 0.2s ease,
        border-color 0.2s ease;

    &:hover {
        background-color: #666;
        border-color: gold;
    }
`;

const TableTitle = styled.h2`
    margin: 0 0 1rem;
    text-align: center;
    font-size: 2.5rem;
    color: #f9f9f9;

    @media screen and (max-width: 500px) {
        font-size: 1.8rem;
    }
`;

const TableWrapper = styled.div`
    width: 100%;
    padding: 1.5rem;
    overflow-x: auto;
    box-sizing: border-box;
    background-color: #2e2e2e;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 600px) {
        padding: 0.75rem;
    }
`;

const StyledTable = styled.table`
    width: 100%;
    min-width: max-content;
    border-collapse: collapse;
    font-size: 1.2rem;

    th,
    td {
        padding: 0.75rem 0.5rem;
        text-align: center;
        white-space: nowrap;
    }

    th {
        background-color: #555;
        color: white;
        font-size: 1.3rem;
        cursor: pointer;
        user-select: none;
    }

    th:hover {
        background-color: #666;
    }

    tbody tr:nth-child(even) {
        background-color: #383838;
    }

    tbody tr:hover {
        background-color: #484848;
    }

    td {
        border-bottom: 1px solid #444;
    }
`;

const StatusMessage = styled.p`
    margin: 3rem 0;
    text-align: center;
    font-size: 1.6rem;
    color: #ddd;
`;

const decimalStats = [
    "avg",
    "obp",
    "slg",
    "ops",
    "era",
    "whip",
    "woba",
    "wrc",
    "wrc+",
];

function formatStatValue(header: string, value: string): string | number {
    if (value === "#DIV/0!") {
        return 0;
    }

    if (value === undefined || value === null || value.trim() === "") {
        return "";
    }

    const lowerHeader = header.toLowerCase();
    const numericValue = Number.parseFloat(value);

    if (Number.isNaN(numericValue)) {
        return value;
    }

    if (decimalStats.includes(lowerHeader)) {
        return numericValue.toFixed(3);
    }

    if (lowerHeader === "ip") {
        const integerPart = Math.floor(numericValue);
        const decimalPart = Number(
            (numericValue - integerPart).toFixed(1)
        );

        let displayedDecimal = decimalPart;

        if (decimalPart === 0.3) {
            displayedDecimal = 0.1;
        } else if (decimalPart === 0.7) {
            displayedDecimal = 0.2;
        }

        return (integerPart + displayedDecimal).toFixed(1);
    }

    return Math.round(numericValue);
}

function getComparableValue(value: string): number | string {
    const trimmedValue = value?.trim() ?? "";

    if (trimmedValue === "" || trimmedValue === "#DIV/0!") {
        return 0;
    }

    const cleanedValue = trimmedValue.replace(/[,$%]/g, "");
    const numericValue = Number(cleanedValue);

    if (!Number.isNaN(numericValue)) {
        return numericValue;
    }

    return trimmedValue.toLowerCase();
}

export default function Stats() {
    const [stats, setStats] = useState<StatsBySeason>(EMPTY_STATS);
    const [selectedSeason, setSelectedSeason] =
        useState<SeasonKey>("season4");
    const [selectedStatType, setSelectedStatType] =
        useState<StatType>("batting");
    const [sortConfig, setSortConfig] = useState<SortConfig>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchSheet = (
            season: SeasonKey,
            statType: StatType,
            url: string
        ) => {
            Papa.parse<StatRow>(url, {
                download: true,
                header: true,
                skipEmptyLines: true,

                complete: (results) => {
                    if (!isMounted) {
                        return;
                    }

                    const rows = results.data.filter((row) =>
                        Object.values(row).some(
                            (cell) => cell?.trim() !== ""
                        )
                    );

                    setStats((currentStats) => ({
                        ...currentStats,
                        [season]: {
                            ...currentStats[season],
                            [statType]: rows,
                        },
                    }));

                    setIsLoading(false);
                },

                error: (error) => {
                    console.error(
                        `Unable to load ${season} ${statType} stats:`,
                        error
                    );

                    if (isMounted) {
                        setIsLoading(false);
                    }
                },
            });
        };

        const fetchAllStats = () => {
            (
                Object.entries(STAT_URLS) as [
                    SeasonKey,
                    Record<StatType, string>,
                ][]
            ).forEach(([season, urls]) => {
                fetchSheet(season, "batting", urls.batting);
                fetchSheet(season, "pitching", urls.pitching);
            });
        };

        fetchAllStats();

        const interval = window.setInterval(fetchAllStats, 10_000);

        return () => {
            isMounted = false;
            window.clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setSortConfig(null);
    }, [selectedSeason, selectedStatType]);

    const currentData = stats[selectedSeason][selectedStatType];

    const tableData = useMemo(() => {
        const filteredColumns = currentData.map((row) => {
            if (selectedStatType !== "pitching") {
                return row;
            }

            return Object.fromEntries(
                Object.entries(row).filter(
                    ([header]) => header.toLowerCase() !== "avg"
                )
            );
        });

        const playersWithGames = filteredColumns.filter((row) => {
            const gamesKey = Object.keys(row).find((key) => {
                const lowerKey = key.toLowerCase();
                return lowerKey === "g" || lowerKey === "games";
            });

            if (!gamesKey) {
                return true;
            }

            const gamesPlayed = Number.parseInt(
                row[gamesKey] || "0",
                10
            );

            return gamesPlayed > 0;
        });

        if (!sortConfig) {
            return playersWithGames;
        }

        const { key, direction } = sortConfig;

        return [...playersWithGames].sort((firstRow, secondRow) => {
            const firstValue = getComparableValue(firstRow[key] ?? "");
            const secondValue = getComparableValue(secondRow[key] ?? "");

            let comparison = 0;

            if (
                typeof firstValue === "number" &&
                typeof secondValue === "number"
            ) {
                comparison = firstValue - secondValue;
            } else {
                comparison = String(firstValue).localeCompare(
                    String(secondValue),
                    undefined,
                    {
                        numeric: true,
                        sensitivity: "base",
                    }
                );
            }

            return direction === "asc" ? comparison : -comparison;
        });
    }, [currentData, selectedStatType, sortConfig]);

    const headers = useMemo(() => {
        if (tableData.length === 0) {
            return [];
        }

        return Object.keys(tableData[0]);
    }, [tableData]);

    const handleSort = (header: string) => {
        setSortConfig((currentSort) => {
            if (currentSort?.key === header) {
                return {
                    key: header,
                    direction:
                        currentSort.direction === "asc" ? "desc" : "asc",
                };
            }

            return {
                key: header,
                direction: "desc",
            };
        });
    };

    const tableTitle = `${SEASON_LABELS[selectedSeason]} ${
        selectedStatType === "batting" ? "Batting" : "Pitching"
    } Stats`;

    return (
        <PageContainer>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/records&stats">← Back</Link>
            </ToggleButton>

            <StyledHeader style={{marginTop: "5px"}}>Player Statistics</StyledHeader>

            <Controls>
                <ButtonGroup aria-label="Select season">
                    <ControlButton
                        type="button"
                        $active={selectedSeason === "season2"}
                        onClick={() => setSelectedSeason("season2")}
                    >
                        Season 2
                    </ControlButton>

                    <ControlButton
                        type="button"
                        $active={selectedSeason === "season3"}
                        onClick={() => setSelectedSeason("season3")}
                    >
                        Season 3
                    </ControlButton>

                    <ControlButton
                        type="button"
                        $active={selectedSeason === "season4"}
                        onClick={() => setSelectedSeason("season4")}
                    >
                        Season 4
                    </ControlButton>

                    <ControlButton
                        type="button"
                        $active={selectedSeason === "allTime"}
                        onClick={() => setSelectedSeason("allTime")}
                    >
                        All-Time
                    </ControlButton>
                </ButtonGroup>

                <ButtonGroup aria-label="Select statistic type">
                    <ControlButton
                        type="button"
                        $active={selectedStatType === "batting"}
                        onClick={() => setSelectedStatType("batting")}
                    >
                        Batting
                    </ControlButton>

                    <ControlButton
                        type="button"
                        $active={selectedStatType === "pitching"}
                        onClick={() => setSelectedStatType("pitching")}
                    >
                        Pitching
                    </ControlButton>
                </ButtonGroup>
            </Controls>

            <TableTitle>{tableTitle}</TableTitle>

            {isLoading && currentData.length === 0 ? (
                <StatusMessage>Loading statistics...</StatusMessage>
            ) : tableData.length === 0 ? (
                <StatusMessage>
                    No statistics are available for this selection.
                </StatusMessage>
            ) : (
                <TableWrapper>
                    <StyledTable>
                        <thead>
                        <tr>
                            {headers.map((header) => {
                                const isSorted =
                                    sortConfig?.key === header;

                                const headerStyle: CSSProperties = {
                                    color: isSorted ? "gold" : "#fff",
                                };

                                return (
                                    <th
                                        key={header}
                                        onClick={() =>
                                            handleSort(header)
                                        }
                                        style={headerStyle}
                                    >
                                        {header}

                                        {isSorted &&
                                            (sortConfig.direction ===
                                            "asc"
                                                ? " ▲"
                                                : " ▼")}
                                    </th>
                                );
                            })}
                        </tr>
                        </thead>

                        <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header) => {
                                    const cellStyle: CSSProperties = {
                                        color:
                                            sortConfig?.key ===
                                            header
                                                ? "gold"
                                                : "#fff",
                                    };

                                    return (
                                        <td
                                            key={`${rowIndex}-${header}`}
                                            style={cellStyle}
                                        >
                                            {formatStatValue(
                                                header,
                                                row[header] ?? ""
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                        </tbody>
                    </StyledTable>
                </TableWrapper>
            )}
        </PageContainer>
    );
}