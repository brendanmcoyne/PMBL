export type PlayerSeasonHistory = {
    season: number;
    team: string;
    drafted?: boolean;
    draftPick?: string;
    transactions?: string[];
};

export type RetiredHistory = {
    name: string;
    history: PlayerSeasonHistory[];
};

export const retiredHistory: RetiredHistory[] = [
    {
        name: "Entity 404",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 11, Pick 2",
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 12, Pick 7",
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Gramps",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 10, Pick 5",
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 10, Pick 2",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 5, Pick 6",
            },
        ],
    },
    {
        name: "Jesstithyn",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 12, Pick 3",
            },
            {
                season: 2,
                team: "N/A",
                drafted: false,
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Justin Nascimento",
        history: [
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 8, Pick 4",
            },
        ],
    },
];