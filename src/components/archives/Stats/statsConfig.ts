import type {
    SeasonKey,
    SeasonSelection,
    StatsBySeason,
    StatType,
} from "./statsTypes";

export const SEASON_KEYS: SeasonKey[] = [
    "season2",
    "season3",
    "season4",
];

export const STAT_URLS: Record<
    SeasonKey,
    Record<StatType, string>
> = {
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
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vSyH2fyM4Lp5Wp90e5Qm7qW80tLkHUzvM-5PNdotc4Y-DAFYKH_SwN3UtXTWHekivwKW8y14CXseSsT/pub?gid=0&single=true&output=csv",

        pitching:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vSyH2fyM4Lp5Wp90e5Qm7qW80tLkHUzvM-5PNdotc4Y-DAFYKH_SwN3UtXTWHekivwKW8y14CXseSsT/pub?gid=1644998744&single=true&output=csv",
    },
};

export const EMPTY_STATS: StatsBySeason = {
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
};

export const SEASON_LABELS: Record<
    SeasonSelection,
    string
> = {
    season2: "Season 2",
    season3: "Season 3",
    season4: "Season 4",
    allTime: "All-Time",
};