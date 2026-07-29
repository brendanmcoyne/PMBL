import type { StatRow } from "./statsTypes";

const PLAYER_ALIASES = [
    "player",
    "playername",
    "name",
    "athlete",
];

const DECIMAL_STATS = new Set([
    "avg",
    "obp",
    "slg",
    "ops",
    "era",
    "whip",
]);

export function normalizeHeader(
    header: string
): string {
    return header
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9+]/g, "");
}

export function parseStatNumber(
    value: string | undefined
): number {
    if (
        !value ||
        value.trim() === "" ||
        value === "#DIV/0!"
    ) {
        return 0;
    }

    const numericValue =
        Number.parseFloat(
            value.replace(/[,$%]/g, "")
        );

    return Number.isNaN(numericValue)
        ? 0
        : numericValue;
}

export function findHeader(
    row: StatRow,
    aliases: string[]
): string | undefined {
    return Object.keys(row).find(
        (header) =>
            aliases.includes(
                normalizeHeader(header)
            )
    );
}

export function getPlayerName(
    row: StatRow
): string {
    const playerHeader =
        findHeader(row, PLAYER_ALIASES);

    if (playerHeader) {
        return (
            row[playerHeader]?.trim() ?? ""
        );
    }

    return row.Player?.trim() ?? "";
}

export function getPlayerKey(
    name: string
): string {
    return name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}

export function normalizePlayerColumn(
    row: StatRow
): StatRow {
    const playerName = getPlayerName(row);

    const playerHeader =
        findHeader(row, PLAYER_ALIASES);

    const normalizedRow: StatRow = {
        Player: playerName,
    };

    Object.entries(row).forEach(
        ([header, value]) => {
            if (
                playerHeader &&
                header === playerHeader
            ) {
                return;
            }

            if (
                normalizeHeader(header) ===
                "player"
            ) {
                return;
            }

            normalizedRow[header.trim()] =
                value ?? "";
        }
    );

    return normalizedRow;
}

export function getRowValue(
    row: StatRow,
    header: string
): string {
    const normalizedTarget =
        normalizeHeader(header);

    const matchingHeader =
        Object.keys(row).find(
            (candidate) =>
                normalizeHeader(candidate) ===
                normalizedTarget
        );

    return matchingHeader
        ? row[matchingHeader] ?? ""
        : "";
}

export function getStat(
    row: StatRow,
    aliases: string[]
): number {
    const header =
        findHeader(row, aliases);

    return header
        ? parseStatNumber(row[header])
        : 0;
}

export function inningsToOuts(
    value: string | undefined
): number {
    if (
        !value ||
        value.trim() === ""
    ) {
        return 0;
    }

    const numericValue =
        Number.parseFloat(
            value.trim()
        );

    if (Number.isNaN(numericValue)) {
        return 0;
    }

    const wholeInnings =
        Math.floor(numericValue);

    const decimalPart =
        numericValue -
        wholeInnings;

    /*
     * Already formatted as baseball
     * innings notation, such as:
     *
     * 3.1 = 3 innings and 1 out
     * 3.2 = 3 innings and 2 outs
     */
    if (
        Math.abs(decimalPart - 0.1) <
        0.0001
    ) {
        return wholeInnings * 3 + 1;
    }

    if (
        Math.abs(decimalPart - 0.2) <
        0.0001
    ) {
        return wholeInnings * 3 + 2;
    }
    const fractionalOuts =
        Math.round(decimalPart * 3);

    return (
        wholeInnings * 3 +
        Math.min(
            2,
            Math.max(
                0,
                fractionalOuts
            )
        )
    );
}

export function outsToInnings(
    outs: number
): string {
    return `${Math.floor(outs / 3)}.${
        outs % 3
    }`;
}

export function formatStatValue(
    header: string,
    value: string
): string | number {
    if (
        !value ||
        value.trim() === ""
    ) {
        return "";
    }

    if (value === "#DIV/0!") {
        return 0;
    }

    const normalized =
        normalizeHeader(header);

    const numericValue =
        Number.parseFloat(value);

    if (Number.isNaN(numericValue)) {
        return value;
    }

    if (
        normalized === "ip" ||
        normalized === "inningspitched"
    ) {
        return outsToInnings(
            inningsToOuts(value)
        );
    }

    if (
        DECIMAL_STATS.has(normalized)
    ) {
        return numericValue.toFixed(3);
    }

    if (normalized === "wrc+") {
        return Math.round(numericValue);
    }

    return Math.round(numericValue);
}

export function getComparableValue(
    value: string
): number | string {
    const trimmed =
        value?.trim() ?? "";

    if (
        trimmed === "" ||
        trimmed === "#DIV/0!"
    ) {
        return 0;
    }

    const numericValue =
        Number(
            trimmed.replace(/[,$%]/g, "")
        );

    return Number.isNaN(numericValue)
        ? trimmed.toLowerCase()
        : numericValue;
}


export function collectHeaders(
    rows: StatRow[]
): string[] {
    const headers: string[] = [];
    const seen = new Set<string>();

    const addHeader = (
        header: string
    ) => {
        const normalized =
            normalizeHeader(header);

        if (!seen.has(normalized)) {
            seen.add(normalized);
            headers.push(header);
        }
    };

    addHeader("Player");

    rows.forEach((row) => {
        Object.keys(row).forEach(
            (header) => {
                if (
                    normalizeHeader(
                        header
                    ) !== "player"
                ) {
                    addHeader(header);
                }
            }
        );
    });

    return headers;
}