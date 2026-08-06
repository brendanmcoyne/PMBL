import {
    useEffect,
    useMemo,
    useState,
} from "react";
import Papa from "papaparse";
import styled from "styled-components";

import { players } from "../data/playerNames.ts";
import type { Player } from "../data/playerNames.ts";

import { StyledHeader } from "./CommonStyles.ts";

import { aggregateAllTimeStats } from "./archives/Stats/allTimeStats.ts";
import {
    EMPTY_STATS,
    SEASON_KEYS,
    STAT_URLS,
} from "./archives/Stats/statsConfig.ts";
import {
    formatStatValue,
    getRowValue,
    normalizePlayerColumn,
} from "./archives/Stats/statsUtils.ts";

import type {
    SeasonKey,
    StatRow,
    StatsBySeason,
    StatType,
} from "./archives/Stats/statsTypes.ts";

type ComparisonDirection = "higher" | "lower";

type ComparisonStat = {
    key: string;
    label: string;
    direction: ComparisonDirection;
};

type ComparisonWinner =
    | "first"
    | "second"
    | "tie"
    | "none";

type AwardCount = {
    name: string;
    firstCount: number;
    secondCount: number;
};

const PageContainer = styled.main`
    width: min(1200px, 94%);
    margin: 0 auto;
    padding: 2rem 0 4rem;
    color: white;
`;

const PageDescription = styled.p`
    max-width: 700px;
    margin: 0 auto 1.75rem;
    color: #cfcfcf;
    text-align: center;
    font-size: 1.05rem;
`;

const SelectorPanel = styled.section`
    display: grid;
    grid-template-columns:
        minmax(220px, 1fr)
        auto
        minmax(220px, 1fr);
    align-items: end;
    gap: 1.5rem;
    padding: 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.07);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        align-items: center;
    }
`;

const SelectorLabel = styled.label`
    font-size: 1rem;
    font-weight: bold;
`;

const Versus = styled.div`
    padding-bottom: 0.8rem;
    color: gold;
    font-family: "Archivo Black", sans-serif;
    font-size: 1.35rem;
    text-align: center;

    @media screen and (max-width: 700px) {
        padding: 0;
    }
`;

const ResetButton = styled.button`
    display: block;
    margin: 1rem auto 0;
    padding: 0.7rem 1.2rem;
    border: none;
    border-radius: 9px;
    background: #2c2c80;
    color: white;
    font-size: 0.95rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #1d3fdc;
    }
`;

const StatusMessage = styled.p`
    margin: 3rem 0;
    color: #d8d8d8;
    text-align: center;
    font-size: 1.1rem;
`;

const PlayerHeaderGrid = styled.section`
    display: grid;
    grid-template-columns:
        minmax(0, 1fr)
        auto
        minmax(0, 1fr);
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const PlayerHeaderCard = styled.article<{
    $accent: string;
}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0;
    padding: 1.5rem;
    border: 2px solid ${({ $accent }) => $accent};
    border-bottom-width: 7px;
    border-radius: 18px;
    background:
        radial-gradient(
            circle at top,
            rgba(255, 255, 255, 0.18),
            transparent 45%
        ),
        rgba(255, 255, 255, 0.07);
    box-shadow:
        0 15px 30px rgba(0, 0, 0, 0.28),
        0 0 15px ${({ $accent }) => $accent}55;
`;

const HeaderVersus = styled.div`
    color: gold;
    font-family: "Archivo Black", sans-serif;
    font-size: 1.8rem;
    text-align: center;
`;

const PlayerImage = styled.img`
    width: 170px;
    height: 170px;
    padding: 5px;
    border: 4px solid white;
    border-radius: 12px;
    background: white;
    object-fit: cover;

    @media screen and (max-width: 500px) {
        width: 140px;
        height: 140px;
    }
`;

const PlayerName = styled.h2`
    margin: 1rem 0 0.35rem;
    text-align: center;
`;

const PlayerScore = styled.div`
    color: gold;
    font-weight: bold;
`;

const ResultCard = styled.section`
    margin: 2rem 0;
    padding: 1.6rem;
    border: 3px solid gold;
    border-radius: 18px;
    background:
        linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.2),
            rgba(255, 255, 255, 0.06)
        );
    text-align: center;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
`;

const ResultLabel = styled.div`
    color: #dedede;
    font-size: 0.95rem;
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
`;

const ResultWinner = styled.div`
    margin: 0.35rem 0;
    color: gold;
    font-family: "Archivo Black", sans-serif;
    font-size: clamp(1.8rem, 5vw, 3rem);
`;

const ResultExplanation = styled.p`
    margin: 0;
    color: #e1e1e1;
`;

const SummaryGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`;

const SummaryCard = styled.article`
    padding: 1.2rem;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.09);
    text-align: center;
`;

const SummaryTitle = styled.h3`
    margin: 0;
`;

const SummaryScore = styled.div`
    margin: 0.4rem 0;
    color: gold;
    font-size: 1.7rem;
    font-weight: bold;
`;

const SummaryText = styled.div`
    color: #cfcfcf;
    font-size: 0.9rem;
`;

const ComparisonSection = styled.section`
    margin: 2rem 0;
`;

const SectionTitle = styled.h2`
    margin-bottom: 0.75rem;
    color: white;
    font-family: "Archivo Black", sans-serif;
    text-align: center;
`;

const ComparisonTable = styled.table`
    width: 100%;
    overflow: hidden;
    border-collapse: separate;
    border-spacing: 0;
    border: 2px solid #4a90e2;
    border-radius: 14px;
    background: #f0f4f8;
    color: black;
    table-layout: fixed;

    th,
    td {
        padding: 0.85rem 0.7rem;
        border-bottom: 1px solid #c5d2dc;
        text-align: center;
    }

    tr:last-child td {
        border-bottom: none;
    }

    @media screen and (max-width: 600px) {
        th,
        td {
            padding: 0.7rem 0.35rem;
            font-size: 0.85rem;
        }
    }
`;

const PlayerColumnHeader = styled.th`
    width: 25%;
    background: #07246c;
    color: white;
`;

const StatColumnHeader = styled.th`
    width: 50%;
    background: #2c2c80;
    color: white;
`;

const ValueCell = styled.td<{
    $winner: boolean;
}>`
    background: ${({ $winner }) =>
    $winner
        ? "rgba(255, 215, 0, 0.42)"
        : "transparent"};
    color: ${({ $winner }) =>
    $winner ? "#1f3b00" : "black"};
    font-size: 1.05rem;
    font-weight: ${({ $winner }) =>
    $winner ? "900" : "bold"};
`;

const StatLabelCell = styled.td`
    background: #dbe9f4;
    font-weight: bold;
`;

const NoAwards = styled.p`
    padding: 1.5rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.08);
    color: #d6d6d6;
    text-align: center;
`;

const SearchField = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 0;
`;

const SearchInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 0.85rem 1rem;
    border: 2px solid #4a90e2;
    border-radius: 10px;
    background: white;
    color: black;
    font-size: 1rem;
    font-weight: bold;
    outline: none;

    &:focus {
        border-color: gold;
        box-shadow:
            0 0 0 3px
            rgba(255, 215, 0, 0.22);
    }
`;

const SuggestionList = styled.div`
    position: absolute;
    top: calc(100% + 0.4rem);
    left: 0;
    right: 0;
    z-index: 50;
    max-height: 300px;
    overflow-y: auto;
    border: 2px solid #4a90e2;
    border-radius: 10px;
    background: white;
    box-shadow:
        0 14px 30px
        rgba(0, 0, 0, 0.35);
`;

const SuggestionButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.65rem 0.8rem;
    border: none;
    border-bottom: 1px solid #d8d8d8;
    background: white;
    color: black;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    cursor: pointer;

    &:last-child {
        border-bottom: none;
    }

    &:hover,
    &:focus {
        background: #dbe9f4;
    }
`;

const SuggestionImage = styled.img`
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border: 2px solid #4a90e2;
    border-radius: 6px;
    background: white;
    object-fit: cover;
`;

const NoSuggestions = styled.div`
    padding: 0.9rem;
    color: #555555;
    font-style: italic;
    text-align: center;
`;

const battingComparisons: ComparisonStat[] = [
    {
        key: "G",
        label: "Games",
        direction: "higher",
    },
    {
        key: "AB",
        label: "At Bats",
        direction: "higher",
    },
    {
        key: "R",
        label: "Runs",
        direction: "higher",
    },
    {
        key: "H",
        label: "Hits",
        direction: "higher",
    },
    {
        key: "2B",
        label: "Doubles",
        direction: "higher",
    },
    {
        key: "3B",
        label: "Triples",
        direction: "higher",
    },
    {
        key: "HR",
        label: "Home Runs",
        direction: "higher",
    },
    {
        key: "RBI",
        label: "RBI",
        direction: "higher",
    },
    {
        key: "BB",
        label: "Walks",
        direction: "higher",
    },
    {
        key: "SO",
        label: "Strikeouts",
        direction: "lower",
    },
    {
        key: "SB",
        label: "Stolen Bases",
        direction: "higher",
    },
    {
        key: "AVG",
        label: "Batting Average",
        direction: "higher",
    },
    {
        key: "OBP",
        label: "On-Base Percentage",
        direction: "higher",
    },
    {
        key: "SLG",
        label: "Slugging Percentage",
        direction: "higher",
    },
    {
        key: "OPS",
        label: "OPS",
        direction: "higher",
    },
];

const pitchingComparisons: ComparisonStat[] = [
    {
        key: "W",
        label: "Wins",
        direction: "higher",
    },
    {
        key: "L",
        label: "Losses",
        direction: "lower",
    },
    {
        key: "ERA",
        label: "ERA",
        direction: "lower",
    },
    {
        key: "G",
        label: "Games",
        direction: "higher",
    },
    {
        key: "GS",
        label: "Games Started",
        direction: "higher",
    },
    {
        key: "CG",
        label: "Complete Games",
        direction: "higher",
    },
    {
        key: "SHO",
        label: "Shutouts",
        direction: "higher",
    },
    {
        key: "SV",
        label: "Saves",
        direction: "higher",
    },
    {
        key: "IP",
        label: "Innings Pitched",
        direction: "higher",
    },
    {
        key: "H",
        label: "Hits Allowed",
        direction: "lower",
    },
    {
        key: "ER",
        label: "Earned Runs",
        direction: "lower",
    },
    {
        key: "HR",
        label: "Home Runs Allowed",
        direction: "lower",
    },
    {
        key: "BB",
        label: "Walks Allowed",
        direction: "lower",
    },
    {
        key: "K",
        label: "Strikeouts",
        direction: "higher",
    },
    {
        key: "WHIP",
        label: "WHIP",
        direction: "lower",
    },
];

function numericValue(
    row: StatRow | null,
    key: string
): number | null {
    if (!row) {
        return null;
    }

    const rawValue = getRowValue(row, key);

    if (
        rawValue === undefined ||
        rawValue === null ||
        String(rawValue).trim() === ""
    ) {
        return null;
    }

    const parsedValue = Number.parseFloat(
        String(rawValue).replace(/,/g, "")
    );

    return Number.isFinite(parsedValue)
        ? parsedValue
        : null;
}

function compareValues(
    firstValue: number | null,
    secondValue: number | null,
    direction: ComparisonDirection
): ComparisonWinner {
    if (
        firstValue === null &&
        secondValue === null
    ) {
        return "none";
    }

    if (firstValue === null) {
        return "second";
    }

    if (secondValue === null) {
        return "first";
    }

    if (firstValue === secondValue) {
        return "tie";
    }

    if (direction === "higher") {
        return firstValue > secondValue
            ? "first"
            : "second";
    }

    return firstValue < secondValue
        ? "first"
        : "second";
}

function findPlayerRow(
    rows: StatRow[],
    playerName: string
): StatRow | null {
    return (
        rows.find(
            (row) =>
                getRowValue(
                    row,
                    "Player"
                ).trim() === playerName
        ) ?? null
    );
}

function countPlayerAwards(
    player: Player | null
): Record<string, number> {
    if (
        !player ||
        !Array.isArray(player.awards)
    ) {
        return {};
    }

    return player.awards.reduce<Record<string, number>>(
        (totals, award) => {
            totals[award.name] =
                (totals[award.name] ?? 0) + 1;

            return totals;
        },
        {}
    );
}

function formatComparisonValue(
    row: StatRow | null,
    statKey: string
): string | number {
    if (!row) {
        return "—";
    }

    const value = getRowValue(
        row,
        statKey
    );

    if (
        value === undefined ||
        value === null ||
        String(value).trim() === ""
    ) {
        return "—";
    }

    return formatStatValue(
        statKey,
        String(value)
    );
}

function playerAccentColor(
    player: Player | null
): string {
    if (!player) {
        return "#4a90e2";
    }

    if (player.color === "Light Blue") {
        return "#6dd5fa";
    }

    if (player.color === "Light Green") {
        return "#8bc34a";
    }

    if (player.color === "White") {
        return "#d9d9d9";
    }

    if (player.color === "Black") {
        return "#555555";
    }

    return player.color?.toLowerCase() || "#4a90e2";
}

type PlayerSearchInputProps = {
    id: string;
    label: string;
    value: string;
    excludedPlayerName: string;
    onChange: (playerName: string) => void;
};

function PlayerSearchInput({
                               id,
                               label,
                               value,
                               excludedPlayerName,
                               onChange,
                           }: PlayerSearchInputProps) {
    const [searchText, setSearchText] =
        useState(value);

    const [isOpen, setIsOpen] =
        useState(false);

    useEffect(() => {
        setSearchText(value);
    }, [value]);

    const matchingPlayers =
        useMemo(() => {
            const normalizedSearch =
                searchText
                    .trim()
                    .toLowerCase();

            if (!normalizedSearch) {
                return players
                    .filter(
                        (player) =>
                            player.name !==
                            excludedPlayerName
                    )
                    .slice(0, 8);
            }

            return players
                .filter(
                    (player) =>
                        player.name !==
                        excludedPlayerName &&
                        player.name
                            .toLowerCase()
                            .includes(
                                normalizedSearch
                            )
                )
                .sort((first, second) => {
                    const firstStartsWith =
                        first.name
                            .toLowerCase()
                            .startsWith(
                                normalizedSearch
                            );

                    const secondStartsWith =
                        second.name
                            .toLowerCase()
                            .startsWith(
                                normalizedSearch
                            );

                    if (
                        firstStartsWith &&
                        !secondStartsWith
                    ) {
                        return -1;
                    }

                    if (
                        !firstStartsWith &&
                        secondStartsWith
                    ) {
                        return 1;
                    }

                    return first.name.localeCompare(
                        second.name
                    );
                })
                .slice(0, 8);
        }, [
            searchText,
            excludedPlayerName,
        ]);

    const selectPlayer = (
        playerName: string
    ) => {
        setSearchText(playerName);
        onChange(playerName);
        setIsOpen(false);
    };

    const handleTextChange = (
        newValue: string
    ) => {
        setSearchText(newValue);
        setIsOpen(true);

        const exactMatch =
            players.find(
                (player) =>
                    player.name.toLowerCase() ===
                    newValue
                        .trim()
                        .toLowerCase()
            );

        if (
            exactMatch &&
            exactMatch.name !==
            excludedPlayerName
        ) {
            onChange(exactMatch.name);
        } else {
            onChange("");
        }
    };

    return (
        <SearchField>
            <SelectorLabel htmlFor={id}>
                {label}
            </SelectorLabel>

            <SearchInput
                id={id}
                type="text"
                value={searchText}
                placeholder="Type a player name"
                autoComplete="off"
                onFocus={() =>
                    setIsOpen(true)
                }
                onChange={(event) =>
                    handleTextChange(
                        event.target.value
                    )
                }
                onKeyDown={(event) => {
                    if (
                        event.key === "Enter" &&
                        matchingPlayers.length > 0
                    ) {
                        event.preventDefault();

                        selectPlayer(
                            matchingPlayers[0].name
                        );
                    }

                    if (
                        event.key === "Escape"
                    ) {
                        setIsOpen(false);
                    }
                }}
                onBlur={() => {
                    window.setTimeout(
                        () =>
                            setIsOpen(false),
                        150
                    );
                }}
            />

            {isOpen && (
                <SuggestionList>
                    {matchingPlayers.length >
                    0 ? (
                        matchingPlayers.map(
                            (player) => (
                                <SuggestionButton
                                    key={
                                        player.name
                                    }
                                    type="button"
                                    onMouseDown={(
                                        event
                                    ) => {
                                        event.preventDefault();
                                    }}
                                    onClick={() =>
                                        selectPlayer(
                                            player.name
                                        )
                                    }
                                >
                                    <SuggestionImage
                                        src={
                                            player.src
                                        }
                                        alt=""
                                    />

                                    <span>
                                        {
                                            player.name
                                        }
                                    </span>
                                </SuggestionButton>
                            )
                        )
                    ) : (
                        <NoSuggestions>
                            No matching players
                        </NoSuggestions>
                    )}
                </SuggestionList>
            )}
        </SearchField>
    );
}

export default function ComparePlayers() {
    const [stats, setStats] =
        useState<StatsBySeason>(
            EMPTY_STATS
        );

    const [
        loadedSheets,
        setLoadedSheets,
    ] = useState(0);

    const [
        firstPlayerName,
        setFirstPlayerName,
    ] = useState("");

    const [
        secondPlayerName,
        setSecondPlayerName,
    ] = useState("");

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
                                Object.values(row).some(
                                    (cell) =>
                                        cell?.trim() !== ""
                                )
                            )
                            .map(normalizePlayerColumn)
                            .filter(
                                (row) =>
                                    row.Player.trim() !== ""
                            );

                    setStats(
                        (current) => ({
                            ...current,

                            [season]: {
                                ...current[season],
                                [statType]: rows,
                            },
                        })
                    );

                    const sheetKey =
                        `${season}-${statType}`;

                    if (
                        !loadedOnce.has(sheetKey)
                    ) {
                        loadedOnce.add(sheetKey);

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

                    if (isMounted && !loadedOnce.has(sheetKey)) {
                        loadedOnce.add(sheetKey);

                        setLoadedSheets(loadedOnce.size);
                    }
                },
            });
        };

        (
            Object.entries(STAT_URLS) as [
                SeasonKey,
                Record<StatType, string>,
            ][]
        ).forEach(([season, urls]) => {
            fetchSheet(season, "batting", urls.batting);
            fetchSheet(season, "pitching", urls.pitching);
        });

        return () => {
            isMounted = false;
        };
    }, []);

    const firstPlayer =
        useMemo(
            () =>
                players.find((player) => player.name === firstPlayerName) ?? null,
            [firstPlayerName]
        );

    const secondPlayer =
        useMemo(
            () =>
                players.find((player) => player.name === secondPlayerName) ?? null,
            [secondPlayerName]
        );

    const allTimeBatting =
        useMemo(
            () =>
                aggregateAllTimeStats(stats, "batting"),
            [stats]
        );

    const allTimePitching = useMemo(() => aggregateAllTimeStats(stats, "pitching"), [stats]);
    const firstBatting = useMemo(() => findPlayerRow(allTimeBatting, firstPlayerName), [allTimeBatting, firstPlayerName,]);
    const secondBatting = useMemo(() => findPlayerRow(allTimeBatting, secondPlayerName), [allTimeBatting, secondPlayerName,]);
    const firstPitching = useMemo(() => findPlayerRow(allTimePitching, firstPlayerName), [allTimePitching, firstPlayerName,]);
    const secondPitching = useMemo(() => findPlayerRow(allTimePitching, secondPlayerName), [allTimePitching, secondPlayerName,]);

    const battingResult =
        useMemo(() => {
            let firstWins = 0;
            let secondWins = 0;
            let ties = 0;

            battingComparisons.forEach(
                (stat) => {
                    const winner = compareValues(numericValue(firstBatting, stat.key), numericValue(secondBatting, stat.key), stat.direction);

                    if (winner === "first") {
                        firstWins += 1;
                    }

                    if (winner === "second") {
                        secondWins += 1;
                    }

                    if (winner === "tie") {
                        ties += 1;
                    }
                }
            );

            return {firstWins, secondWins, ties};
        }, [firstBatting, secondBatting]);

    const pitchingResult =
        useMemo(() => {
            let firstWins = 0;
            let secondWins = 0;
            let ties = 0;

            pitchingComparisons.forEach(
                (stat) => {
                    const winner = compareValues(numericValue(firstPitching, stat.key), numericValue(secondPitching, stat.key), stat.direction);

                    if (winner === "first") {
                        firstWins += 1;
                    }

                    if (winner === "second") {
                        secondWins += 1;
                    }

                    if (winner === "tie") {
                        ties += 1;
                    }
                }
            );

            return {
                firstWins,
                secondWins,
                ties,
            };
        }, [
            firstPitching,
            secondPitching,
        ]);

    const awardRows =
        useMemo<AwardCount[]>(() => {
            const firstAwards =
                countPlayerAwards(firstPlayer);

            const secondAwards =
                countPlayerAwards(secondPlayer);

            const awardNames =
                Array.from(
                    new Set([
                        ...Object.keys(firstAwards),
                        ...Object.keys(secondAwards),
                    ])
                ).sort();

            return awardNames.map(
                (awardName) => ({
                    name: awardName,
                    firstCount: firstAwards[awardName] ?? 0,
                    secondCount: secondAwards[awardName] ?? 0,
                })
            );
        }, [firstPlayer, secondPlayer,]);

    const firstOverallScore =
        battingResult.firstWins +
        pitchingResult.firstWins;

    const secondOverallScore =
        battingResult.secondWins +
        pitchingResult.secondWins;

    const comparisonReady =
        Boolean(
            firstPlayer &&
            secondPlayer
        );

    const overallWinner =
        !comparisonReady
            ? null
            : firstOverallScore >
            secondOverallScore
                ? firstPlayer
                : secondOverallScore >
                firstOverallScore
                    ? secondPlayer
                    : null;

    const resetComparison = () => {
        setFirstPlayerName("");
        setSecondPlayerName("");
    };

    return (
        <PageContainer>
            <StyledHeader>
                Compare Players
            </StyledHeader>

            <PageDescription>
                Select two players to compare
                their all-time batting,
                pitching, and awards.
            </PageDescription>

            <SelectorPanel>
                <PlayerSearchInput
                    id="first-player"
                    label="Player 1"
                    value={firstPlayerName}
                    excludedPlayerName={
                        secondPlayerName
                    }
                    onChange={setFirstPlayerName}
                />

                <Versus>VS</Versus>

                <PlayerSearchInput
                    id="second-player"
                    label="Player 2"
                    value={secondPlayerName}
                    excludedPlayerName={
                        firstPlayerName
                    }
                    onChange={setSecondPlayerName}
                />
            </SelectorPanel>

            {(firstPlayerName ||
                secondPlayerName) && (
                <ResetButton
                    type="button"
                    onClick={resetComparison}
                >
                    Reset Comparison
                </ResetButton>
            )}

            {isLoading && (
                <StatusMessage>
                    Loading all-time
                    statistics...
                </StatusMessage>
            )}

            {!isLoading &&
                !comparisonReady && (
                    <StatusMessage>
                        Select two players to
                        begin the comparison.
                    </StatusMessage>
                )}

            {!isLoading &&
                comparisonReady &&
                firstPlayer &&
                secondPlayer && (
                    <>
                        <PlayerHeaderGrid>
                            <PlayerHeaderCard
                                $accent={playerAccentColor(
                                    firstPlayer
                                )}
                            >
                                <PlayerImage
                                    src={
                                        firstPlayer.src
                                    }
                                    alt={
                                        firstPlayer.name
                                    }
                                />

                                <PlayerName>
                                    {firstPlayer.name}
                                </PlayerName>

                                <PlayerScore>
                                    Overall score:{" "}
                                    {
                                        firstOverallScore
                                    }
                                </PlayerScore>
                            </PlayerHeaderCard>

                            <HeaderVersus>
                                VS
                            </HeaderVersus>

                            <PlayerHeaderCard
                                $accent={playerAccentColor(
                                    secondPlayer
                                )}
                            >
                                <PlayerImage
                                    src={
                                        secondPlayer.src
                                    }
                                    alt={
                                        secondPlayer.name
                                    }
                                />

                                <PlayerName>
                                    {secondPlayer.name}
                                </PlayerName>

                                <PlayerScore>
                                    Overall score:{" "}
                                    {
                                        secondOverallScore
                                    }
                                </PlayerScore>
                            </PlayerHeaderCard>
                        </PlayerHeaderGrid>

                        <ResultCard>
                            {overallWinner ? (
                                <>
                                    <ResultLabel>
                                        Comparison
                                        Winner
                                    </ResultLabel>

                                    <ResultWinner>
                                        🏆{" "}
                                        {
                                            overallWinner.name
                                        }
                                    </ResultWinner>
                                    <ResultExplanation>Based on all-time statistical category wins.</ResultExplanation>
                                </>
                            ) : (
                                <>
                                    <ResultLabel>Comparison Result</ResultLabel>
                                    <ResultWinner>Tie</ResultWinner>
                                    <ResultExplanation>Both players finished with the same overall score.</ResultExplanation>
                                </>
                            )}
                        </ResultCard>

                        <SummaryGrid>
                            <SummaryCard>
                                <SummaryTitle>Batting</SummaryTitle>
                                <SummaryScore>{battingResult.firstWins}{" "}–{" "}{battingResult.secondWins}</SummaryScore>
                                <SummaryText>{battingResult.ties}{" "}tied categories</SummaryText>
                            </SummaryCard>

                            <SummaryCard>
                                <SummaryTitle>Pitching</SummaryTitle>

                                <SummaryScore>
                                    {
                                        pitchingResult.firstWins
                                    }{" "}
                                    –{" "}
                                    {
                                        pitchingResult.secondWins
                                    }
                                </SummaryScore>

                                <SummaryText>
                                    {
                                        pitchingResult.ties
                                    }{" "}
                                    tied
                                    categories
                                </SummaryText>
                            </SummaryCard>
                        </SummaryGrid>

                        <ComparisonSection>
                            <SectionTitle>
                                All-Time Batting
                            </SectionTitle>

                            <ComparisonTable>
                                <thead>
                                <tr>
                                    <PlayerColumnHeader>
                                        {
                                            firstPlayer.name
                                        }
                                    </PlayerColumnHeader>

                                    <StatColumnHeader>
                                        Statistic
                                    </StatColumnHeader>

                                    <PlayerColumnHeader>
                                        {
                                            secondPlayer.name
                                        }
                                    </PlayerColumnHeader>
                                </tr>
                                </thead>

                                <tbody>
                                {battingComparisons.map(
                                    (stat) => {
                                        const winner =
                                            compareValues(
                                                numericValue(
                                                    firstBatting,
                                                    stat.key
                                                ),
                                                numericValue(
                                                    secondBatting,
                                                    stat.key
                                                ),
                                                stat.direction
                                            );

                                        return (
                                            <tr
                                                key={
                                                    stat.key
                                                }
                                            >
                                                <ValueCell
                                                    $winner={
                                                        winner ===
                                                        "first"
                                                    }
                                                >
                                                    {formatComparisonValue(
                                                        firstBatting,
                                                        stat.key
                                                    )}
                                                </ValueCell>

                                                <StatLabelCell>
                                                    {
                                                        stat.label
                                                    }
                                                </StatLabelCell>

                                                <ValueCell
                                                    $winner={
                                                        winner ===
                                                        "second"
                                                    }
                                                >
                                                    {formatComparisonValue(
                                                        secondBatting,
                                                        stat.key
                                                    )}
                                                </ValueCell>
                                            </tr>
                                        );
                                    }
                                )}
                                </tbody>
                            </ComparisonTable>
                        </ComparisonSection>

                        <ComparisonSection>
                            <SectionTitle>
                                All-Time Pitching
                            </SectionTitle>

                            <ComparisonTable>
                                <thead>
                                <tr>
                                    <PlayerColumnHeader>
                                        {
                                            firstPlayer.name
                                        }
                                    </PlayerColumnHeader>

                                    <StatColumnHeader>
                                        Statistic
                                    </StatColumnHeader>

                                    <PlayerColumnHeader>
                                        {
                                            secondPlayer.name
                                        }
                                    </PlayerColumnHeader>
                                </tr>
                                </thead>

                                <tbody>
                                {pitchingComparisons.map(
                                    (stat) => {
                                        const winner =
                                            compareValues(
                                                numericValue(
                                                    firstPitching,
                                                    stat.key
                                                ),
                                                numericValue(
                                                    secondPitching,
                                                    stat.key
                                                ),
                                                stat.direction
                                            );

                                        return (
                                            <tr
                                                key={
                                                    stat.key
                                                }
                                            >
                                                <ValueCell
                                                    $winner={
                                                        winner ===
                                                        "first"
                                                    }
                                                >
                                                    {formatComparisonValue(
                                                        firstPitching,
                                                        stat.key
                                                    )}
                                                </ValueCell>

                                                <StatLabelCell>
                                                    {
                                                        stat.label
                                                    }
                                                </StatLabelCell>

                                                <ValueCell
                                                    $winner={
                                                        winner ===
                                                        "second"
                                                    }
                                                >
                                                    {formatComparisonValue(
                                                        secondPitching,
                                                        stat.key
                                                    )}
                                                </ValueCell>
                                            </tr>
                                        );
                                    }
                                )}
                                </tbody>
                            </ComparisonTable>
                        </ComparisonSection>

                        <ComparisonSection>
                            <SectionTitle>
                                Awards
                            </SectionTitle>

                            {awardRows.length ===
                            0 ? (
                                <NoAwards>
                                    Neither player has
                                    received an award.
                                </NoAwards>
                            ) : (
                                <ComparisonTable>
                                    <thead>
                                    <tr>
                                        <PlayerColumnHeader>
                                            {
                                                firstPlayer.name
                                            }
                                        </PlayerColumnHeader>

                                        <StatColumnHeader>
                                            Award
                                        </StatColumnHeader>

                                        <PlayerColumnHeader>
                                            {
                                                secondPlayer.name
                                            }
                                        </PlayerColumnHeader>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {awardRows.map(
                                        (award) => (
                                            <tr
                                                key={
                                                    award.name
                                                }
                                            >
                                                <ValueCell
                                                    $winner={
                                                        award.firstCount >
                                                        award.secondCount
                                                    }
                                                >
                                                    {
                                                        award.firstCount
                                                    }
                                                </ValueCell>

                                                <StatLabelCell>{award.name}</StatLabelCell>

                                                <ValueCell $winner={award.secondCount > award.firstCount}>{award.secondCount}</ValueCell>
                                            </tr>
                                        )
                                    )}
                                    </tbody>
                                </ComparisonTable>
                            )}
                        </ComparisonSection>
                    </>
                )}
        </PageContainer>
    );
}
