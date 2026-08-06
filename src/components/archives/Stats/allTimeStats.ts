import type {
    StatRow,
    StatsBySeason,
    StatType,
} from "./statsTypes";

import {
    SEASON_KEYS,
} from "./statsConfig";

import {
    getPlayerKey,
    getPlayerName,
    getRowValue,
    getStat,
    inningsToOuts,
    normalizeHeader,
    normalizePlayerColumn,
    outsToInnings,
    parseStatNumber,
} from "./statsUtils";

const RATE_STATS = new Set([
    "avg",
    "obp",
    "slg",
    "ops",
    "era",
    "whip",
    "h7",
]);

function findMatchingHeader(
    rows: StatRow[],
    aliases: string[]
): string | undefined {
    for (const row of rows) {
        const header =
            Object.keys(row).find(
                (candidate) =>
                    aliases.includes(
                        normalizeHeader(
                            candidate
                        )
                    )
            );

        if (header) {
            return header;
        }
    }

    return undefined;
}

function recalculateBattingRates(
    result: StatRow,
    sourceRows: StatRow[]
): void {
    const hits =
        getStat(result, [
            "h",
            "hits",
        ]);

    const atBats =
        getStat(result, [
            "ab",
            "atbats",
        ]);

    const walks =
        getStat(result, [
            "bb",
            "walks",
        ]);

    const hitByPitch =
        getStat(result, [
            "hbp",
            "hitbypitch",
        ]);

    const sacrificeFlies =
        getStat(result, [
            "sf",
            "sacrificeflies",
        ]);

    const doubles =
        getStat(result, [
            "2b",
            "doubles",
        ]);

    const triples =
        getStat(result, [
            "3b",
            "triples",
        ]);

    const homeRuns =
        getStat(result, [
            "hr",
            "homeruns",
        ]);

    const avg =
        atBats > 0
            ? hits / atBats
            : 0;

    const obpDenominator =
        atBats +
        walks +
        hitByPitch +
        sacrificeFlies;

    const obp =
        obpDenominator > 0
            ? (
            hits +
            walks +
            hitByPitch
        ) / obpDenominator
            : 0;

    const singles =
        Math.max(
            0,
            hits -
            doubles -
            triples -
            homeRuns
        );

    const totalBases =
        singles +
        doubles * 2 +
        triples * 3 +
        homeRuns * 4;

    const slg =
        atBats > 0
            ? totalBases / atBats
            : 0;

    const avgHeader =
        findMatchingHeader(
            sourceRows,
            ["avg"]
        );

    const obpHeader =
        findMatchingHeader(
            sourceRows,
            ["obp"]
        );

    const slgHeader =
        findMatchingHeader(
            sourceRows,
            ["slg"]
        );

    const opsHeader =
        findMatchingHeader(
            sourceRows,
            ["ops"]
        );

    if (avgHeader) {
        result[avgHeader] =
            String(avg);
    }

    if (obpHeader) {
        result[obpHeader] =
            String(obp);
    }

    if (slgHeader) {
        result[slgHeader] =
            String(slg);
    }

    if (opsHeader) {
        result[opsHeader] =
            String(obp + slg);
    }

}

function recalculatePitchingRates(
    result: StatRow,
    sourceRows: StatRow[]
): void {
    const ipHeader =
        findMatchingHeader(
            sourceRows,
            [
                "ip",
                "inningspitched",
            ]
        );

    const totalOuts =
        ipHeader
            ? inningsToOuts(
                getRowValue(
                    result,
                    ipHeader
                )
            )
            : 0;

    const innings =
        totalOuts / 3;

    const earnedRuns =
        getStat(result, [
            "er",
            "earnedruns",
        ]);

    const walks =
        getStat(result, [
            "bb",
            "walks",
        ]);

    const hitsAllowed =
        getStat(result, [
            "h",
            "hits",
            "ha",
            "hitsallowed",
        ]);

    const eraHeader =
        findMatchingHeader(
            sourceRows,
            ["era"]
        );

    const whipHeader =
        findMatchingHeader(
            sourceRows,
            ["whip"]
        );

    const h7Header =
        findMatchingHeader(
            sourceRows,
            [
                "h7",
                "hits7",
                "hitsper7",
                "hitsper7innings",
            ]
        );

    if (eraHeader) {
        result[eraHeader] =
            String(
                innings > 0
                    ? (
                    earnedRuns * 7
                ) / innings
                    : earnedRuns > 0
                        ? 999.99
                        : 0
            );
    }

    if (whipHeader) {
        result[whipHeader] =
            String(
                innings > 0
                    ? (
                    walks +
                    hitsAllowed
                ) / innings
                    : earnedRuns > 0
                        ? 999.99
                        : 0
            );
    }

    if (h7Header) {
        result[h7Header] =
            String(
                innings > 0
                    ? (
                    hitsAllowed * 7
                ) / innings
                    : earnedRuns > 0
                        ? 999.99
                        : 0
            );
    }
}

function aggregatePlayerRows(
    rows: StatRow[],
    statType: StatType
): StatRow {
    const normalizedRows =
        rows.map(
            normalizePlayerColumn
        );

    const result: StatRow = {Player: getPlayerName(normalizedRows[0])};

    const headers =
        Array.from(
            new Set(
                normalizedRows.flatMap(
                    (row) =>
                        Object.keys(row)
                )
            )
        );

    headers.forEach((header) => {
        const normalized =
            normalizeHeader(header);

        if (normalized === "player") {
            return;
        }

        if (RATE_STATS.has(normalized)) {
            result[header] = "";

            return;
        }

        if (
            normalized === "ip" ||
            normalized ===
            "inningspitched"
        ) {
            const totalOuts =
                normalizedRows.reduce(
                    (sum, row) =>
                        sum +
                        inningsToOuts(
                            getRowValue(
                                row,
                                header
                            )
                        ),
                    0
                );

            result[header] =
                outsToInnings(totalOuts);

            return;
        }

        const values =
            normalizedRows
                .map((row) =>
                    getRowValue(
                        row,
                        header
                    )
                )
                .filter(
                    (value) =>
                        value.trim() !== ""
                );

        const numeric =
            values.some((value) => {
                const cleaned =
                    value.replace(
                        /[,$%]/g,
                        ""
                    );

                return !Number.isNaN(
                    Number.parseFloat(
                        cleaned
                    )
                );
            });

        if (numeric) {
            result[header] =
                String(
                    normalizedRows.reduce(
                        (sum, row) =>
                            sum +
                            parseStatNumber(
                                getRowValue(
                                    row,
                                    header
                                )
                            ),
                        0
                    )
                );
        } else {
            result[header] =
                values[0] ?? "";
        }
    });

    if (statType === "batting") {
        recalculateBattingRates(
            result,
            normalizedRows
        );
    } else {
        recalculatePitchingRates(
            result,
            normalizedRows
        );
    }

    return result;
}

export function aggregateAllTimeStats(
    stats: StatsBySeason,
    statType: StatType
): StatRow[] {
    const rowsByPlayer =
        new Map<string, StatRow[]>();

    SEASON_KEYS
        .flatMap(
            (season) =>
                stats[season][statType]
        )
        .map(normalizePlayerColumn)
        .forEach((row) => {
            const playerName =
                getPlayerName(row);

            if (!playerName) {
                return;
            }

            const key =
                getPlayerKey(playerName);

            const existing =
                rowsByPlayer.get(key) ??
                [];

            existing.push(row);

            rowsByPlayer.set(
                key,
                existing
            );
        });

    return Array.from(
        rowsByPlayer.values()
    ).map((rows) =>
        aggregatePlayerRows(
            rows,
            statType
        )
    );
}