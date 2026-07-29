import {useEffect, useMemo, useState, type CSSProperties,} from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import {StyledHeader, ToggleButton,} from "../CommonStyles.ts";
import {aggregateAllTimeStats} from "./Stats/allTimeStats.ts";
import {EMPTY_STATS, SEASON_KEYS, SEASON_LABELS, STAT_URLS,} from "./Stats/statsConfig.ts";
import {collectHeaders, formatStatValue, getComparableValue, getRowValue, normalizeHeader, normalizePlayerColumn,} from "./Stats/statsUtils.ts";
import type {SeasonKey, SeasonSelection, SortConfig, StatRow, StatsBySeason, StatType,} from "./Stats/statsTypes.ts";
import {ButtonGroup, ControlButton, Controls, PageContainer, StatusMessage, StyledTable, TableTitle, TableWrapper,} from "./Stats/statsStyles.ts";

export default function Stats() {
    const [stats, setStats] =
        useState<StatsBySeason>(
            EMPTY_STATS
        );

    const [
        selectedSeason,
        setSelectedSeason,
    ] = useState<SeasonSelection>(
        "season4"
    );

    const [
        selectedStatType,
        setSelectedStatType,
    ] = useState<StatType>(
        "batting"
    );

    const [
        sortConfig,
        setSortConfig,
    ] = useState<SortConfig>(null);

    const [
        loadedSheets,
        setLoadedSheets,
    ] = useState(0);

    const totalSheets =
        SEASON_KEYS.length * 2;

    const isLoading =
        loadedSheets < totalSheets;

    useEffect(() => {
        let isMounted = true;

        const loadedOnce =
            new Set<string>();

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

                    const rows =
                        results.data
                            .filter((row) =>
                                Object.values(
                                    row
                                ).some(
                                    (cell) =>
                                        cell?.trim() !==
                                        ""
                                )
                            )
                            .map(
                                normalizePlayerColumn
                            )
                            .filter(
                                (row) =>
                                    row.Player.trim() !==
                                    ""
                            );

                    setStats(
                        (current) => ({
                            ...current,

                            [season]: {
                                ...current[
                                    season
                                    ],

                                [statType]:
                                rows,
                            },
                        })
                    );

                    const sheetKey =
                        `${season}-${statType}`;

                    if (
                        !loadedOnce.has(
                            sheetKey
                        )
                    ) {
                        loadedOnce.add(
                            sheetKey
                        );

                        setLoadedSheets(
                            loadedOnce.size
                        );
                    }
                },

                error: (error) => {
                    console.error(
                        `Unable to load ${season} ${statType} stats:`,
                        error
                    );

                    const sheetKey =
                        `${season}-${statType}`;

                    if (
                        isMounted &&
                        !loadedOnce.has(
                            sheetKey
                        )
                    ) {
                        loadedOnce.add(
                            sheetKey
                        );

                        setLoadedSheets(
                            loadedOnce.size
                        );
                    }
                },
            });
        };

        const fetchAllStats = () => {
            (
                Object.entries(
                    STAT_URLS
                ) as [
                    SeasonKey,
                    Record<
                        StatType,
                        string
                    >,
                ][]
            ).forEach(
                ([season, urls]) => {
                    fetchSheet(
                        season,
                        "batting",
                        urls.batting
                    );

                    fetchSheet(
                        season,
                        "pitching",
                        urls.pitching
                    );
                }
            );
        };

        fetchAllStats();

        const interval =
            window.setInterval(
                fetchAllStats,
                10_000
            );

        return () => {
            isMounted = false;

            window.clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setSortConfig(null);
    }, [selectedSeason, selectedStatType,]);

    const currentData =
        useMemo(() => {
            if (selectedSeason === "allTime") {
                return aggregateAllTimeStats(stats, selectedStatType);
            }

            return stats[selectedSeason][selectedStatType];
        }, [stats, selectedSeason, selectedStatType,]);

    const tableData =
        useMemo(() => {
            const preparedRows = currentData
                    .map(normalizePlayerColumn)
                    .map((row) => {
                        const hideAdvancedBattingStats = selectedStatType === "batting" && (selectedSeason === "season4" || selectedSeason === "allTime");

                        return Object.fromEntries(
                            Object.entries(row).filter(
                                ([header]) => {
                                    const normalizedHeader = normalizeHeader(header);

                                    if (
                                        selectedStatType === "pitching" &&
                                        normalizedHeader === "avg"
                                    ) {
                                        return false;
                                    }

                                    if (
                                        hideAdvancedBattingStats && (
                                            normalizedHeader === "woba" ||
                                            normalizedHeader === "wrc" ||
                                            normalizedHeader === "wrc+"
                                        )
                                    ) {
                                        return false;
                                    }

                                    return true;
                                }
                            )
                        );
                    })
                    .filter((row) => {
                        const gamesHeader =
                            Object.keys(row).find(
                                (header) => {
                                    const normalized =
                                        normalizeHeader(header);

                                    return (
                                        normalized === "g" ||
                                        normalized === "games"
                                    );
                                }
                            );

                        if (!gamesHeader) {
                            return true;
                        }

                        return (
                            Number.parseInt(row[gamesHeader] || "0", 10) > 0);
                    });

            if (!sortConfig) {
                return preparedRows;
            }

            const {key, direction,} = sortConfig;

            return [...preparedRows,].sort(
                (firstRow, secondRow
                ) => {
                    const firstValue =
                        getComparableValue(getRowValue(firstRow, key));

                    const secondValue =
                        getComparableValue(getRowValue(secondRow, key));

                    const comparison =
                        typeof firstValue === "number" &&
                        typeof secondValue === "number" ? firstValue - secondValue : String(firstValue).localeCompare(String(secondValue),
                                undefined, {
                                    numeric: true,
                                    sensitivity: "base",
                                }
                            );

                    return direction === "asc" ? comparison : -comparison;
                }
            );
        }, [currentData, selectedStatType, sortConfig,
        ]);

    const headers =
        useMemo(() => collectHeaders(tableData),
            [tableData]
        );

    const handleSort = (header: string) => {
        setSortConfig(
            (current) => {
                if (current?.key === header) {
                    return {key: header, direction: current.direction === "asc" ? "desc" : "asc",};
                }

                return {key: header, direction: "desc",};
            }
        );
    };

    const tableTitle = `${SEASON_LABELS[selectedSeason]} ${selectedStatType === "batting" ? "Batting" : "Pitching"} Stats`;

    return (
        <PageContainer>
            <ToggleButton>
                <Link style={{color: "white",}} to="/archives/records&stats">← Back</Link>
            </ToggleButton>

            <StyledHeader style={{marginTop: "5px", marginBottom: "10px"}}>Player Statistics</StyledHeader>
            <h4 style={{justifyContent: "center", display: "flex", color: "gray",
                opacity: "0.8", marginTop: "0"}}>(Sac Flys, Plate Appearances, and Batters Faced weren't tracked until Season 4)</h4>
            <Controls>
                <ButtonGroup aria-label="Select season">
                    {SEASON_KEYS.map(
                        (season) => (
                            <ControlButton
                                key={season}
                                type="button"
                                $active={selectedSeason === season}
                                onClick={() => setSelectedSeason(season)}>
                                {SEASON_LABELS[season]}
                            </ControlButton>
                        )
                    )}

                    <ControlButton type="button" $active={selectedSeason === "allTime"}
                        onClick={() => setSelectedSeason("allTime")}>All-Time
                    </ControlButton>
                </ButtonGroup>

                <ButtonGroup aria-label="Select statistic type">
                    {(["batting", "pitching",] as StatType[]).map(
                        (statType) => (
                            <ControlButton key={statType}
                                type="button"
                                $active={selectedStatType === statType}
                                onClick={() => setSelectedStatType(statType)}>
                                {statType === "batting" ? "Batting" : "Pitching"}
                            </ControlButton>
                        )
                    )}
                </ButtonGroup>
            </Controls>

            <TableTitle>{tableTitle}</TableTitle>

            {isLoading &&
            currentData.length === 0 ? (
                <StatusMessage>Loading statistics...</StatusMessage>
            ) : tableData.length === 0 ? (
                <StatusMessage>No statistics are available for this selection.</StatusMessage>
            ) : (
                <TableWrapper>
                    <StyledTable>
                        <thead>
                        <tr>
                            {headers.map(
                                (header) => {
                                    const isSorted = sortConfig?.key === header;

                                    const headerStyle: CSSProperties = {color: isSorted ? "gold" : "#fff",};

                                    return (
                                        <th key={header} onClick={() => handleSort(header)}
                                            style={headerStyle}>{header}

                                            {isSorted && (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                                        </th>
                                    );
                                }
                            )}
                        </tr>
                        </thead>

                        <tbody>
                        {tableData.map(
                            (row, rowIndex) => (
                                <tr key={`${row.Player}-${rowIndex}`}>
                                    {headers.map(
                                        (header) => {
                                            const cellStyle: CSSProperties =
                                                {color: sortConfig?.key === header ? "gold" : "#fff"};

                                            return (
                                                <td key={`${row.Player}-${header}`} style={cellStyle}>
                                                    {formatStatValue(
                                                        header,
                                                        selectedStatType === "batting" &&
                                                        (selectedSeason === "season4" || selectedSeason === "allTime") &&
                                                        (normalizeHeader(header) === "sf" || normalizeHeader(header) === "pa" || normalizeHeader(header) === "bf") &&
                                                        getRowValue(row, header).trim() === "" ? "0" : getRowValue(row, header)
                                                    )}
                                                </td>
                                            );
                                        }
                                    )}
                                </tr>
                            )
                        )}
                        </tbody>
                    </StyledTable>
                </TableWrapper>
            )}
        </PageContainer>
    );
}