export type StatRow = Record<string, string>;

export type SeasonKey =
    | "season2"
    | "season3"
    | "season4";

export type SeasonSelection =
    | SeasonKey
    | "allTime";

export type StatType =
    | "batting"
    | "pitching";

export type SortDirection =
    | "asc"
    | "desc";

export type SortConfig = {
    key: string;
    direction: SortDirection;
} | null;

export type StatsTypes = {
    batting: StatRow[];
    pitching: StatRow[];
};

export type StatsBySeason = Record<
    SeasonKey,
    StatsTypes
>;