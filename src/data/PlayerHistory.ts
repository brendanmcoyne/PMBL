export type PlayerSeasonHistory = {
    season: number;
    team: string;
    drafted?: boolean;
    draftPick?: string;
    transactions?: string[];
};

export type PlayerHistory = {
    name: string;
    history: PlayerSeasonHistory[];
};

export const playerHistory: PlayerHistory[] = [
    {
        name: "Abu Patel",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 9, Pick 8",
            },
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 8, Pick 8",
                transactions: [
                    "Traded to James in Week 4",
                ],
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 8, Pick 2",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 10, Pick 7",
            },
        ],
    },
    {
        name: "Alfonzo",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 8, Pick 1",
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 8, Pick 7",
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 10, Pick 2",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Antenna",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 9, Pick 7"
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 8, Pick 3",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 9, Pick 6",
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 9, Pick 7"
            },
        ],
    },
    {
        name: "Baby Daisy",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 7, Pick 6"
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 12, Pick 3",
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 7, Pick 4",
                transactions: [
                    "Dropped by Justave in Week 4",
                    "Picked up by Trocean in Week 6",
                ],
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 8, Pick 8"
            },
        ],
    },
    {
        name: "Baby DK",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 4, Pick 8",
            },
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 6, Pick 4",
            },
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 5, Pick 1",
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 6, Pick 6",
            },
        ],
    },
    {
        name: "Baby Luigi",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 5, Pick 1",
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 9, Pick 3",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 11, Pick 6",
            },
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 8, Pick 4",
            },
        ],
    },
    {
        name: "Baby Mario",
        history: [
            {
                season: 1,
                team: "Matt",
                drafted: true,
                draftPick: "Round 7, Pick 5",
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 5, Pick 6",
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 8, Pick 5",
                transactions: [
                    "Dropped by Justave in Week 4",
                ],
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 12, Pick 2",
            },
        ],
    },
    {
        name: "Baby Peach",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 7, Pick 3",
            },
            {
                season: 2,
                team: "N/A",
                drafted: false,
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 7, Pick 2",
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 6, Pick 1",
            },
        ],
    },
    {
        name: "Barry",
        history: [
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 9, Pick 1",
            },
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 8, Pick 6",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 8, Pick 7",
            },
        ],
    },
    {
        name: "Bertha",
        history: [
            {
                season: 1,
                team: "Matt",
                drafted: true,
                draftPick: "Round 12, Pick 4",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 10, Pick 1",
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 12, Pick 7",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Betty White",
        history: [
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 9, Pick 5",
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 10, Pick 3",
            },
        ],
    },
    {
        name: "Big D",
        history: [
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Birdo",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 1, Pick 6",
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 3, Pick 2",
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 1, Pick 4",
            },
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 1, Pick 5",
            },
        ],
    },
    {
        name: "Blooper",
        history: [
            {
                season: 1,
                team: "Matt",
                drafted: true,
                draftPick: "Round 5, Pick 5",
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 11, Pick 2",
                transactions: [
                    "Traded to Brendan in Week 4",
                ],
            },
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 10, Pick 8",
                transactions: [
                    "Traded to Brendan in Week 3",
                ],
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 9, Pick 1",
            },
        ],
    },
    {
        name: "Blue Dry Bones",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 7, Pick 2",
            },
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 4, Pick 8",
            },
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 2, Pick 6",
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 3, Pick 7",
            },
        ],
    },
    {
        name: "Blue Kritter",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 7, Pick 1",
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 2, Pick 6",
            },
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 3, Pick 3",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 3, Pick 4",
            },
        ],
    },
    {
        name: "Blue Magikoopa",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 4, Pick 1",
            },
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 5, Pick 1",
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 4, Pick 7",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 9, Pick 4",
            },
        ],
    },
    {
        name: "Blue Noki",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 12, Pick 6",
            },
            {
                season: 2,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Brendan in Week 2",
                    "Traded to James in Week 4",
                ],
            },
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 11, Pick 3",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Blue Pianta",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 4, Pick 2",
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 5, Pick 2",
                transactions: [
                    "Traded to Brendan in Week 4",
                ],
            },
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 4, Pick 6",
            },
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 4, Pick 4",
            },
        ],
    },
    {
        name: "Blue Shy Guy",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 6, Pick 1",
            },
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 6, Pick 8",
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 5, Pick 7",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 11, Pick 2",
            },
        ],
    },
    {
        name: "Blue Toad",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 3, Pick 3",
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 6, Pick 7",
            },
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 5, Pick 3",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 5, Pick 2",
            },
        ],
    },
    {
        name: "Blue Yoshi",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 9, Pick 4",
                transactions: [
                    "Traded to Isaac Post Draft",
                    "Traded to DANdrew Post Draft",
                ]
            },
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 7, Pick 1",
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 5, Pick 4",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 12, Pick 7",
            },
        ],
    },
    {
        name: "Bob Marley",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 9, Pick 1",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 7, Pick 8",
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 9, Pick 4",
                transactions: [
                    "Traded to Marge in Week 3",
                ]
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 9, Pick 8",
            },
        ],
    },
    {
        name: "Bonnie",
        history: [
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 7, Pick 7",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Boo",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 3, Pick 4",
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 2, Pick 2",
            },
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 7, Pick 5",
                transactions: [
                    "Traded to Justave in Week 3",
                ]
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 6, Pick 7",
            },
        ],
    },
    {
        name: "Boomerang Bro",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 5, Pick 8",
            },
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 3, Pick 1",
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 1, Pick 7",
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 3, Pick 3",
            },
        ],
    },
    {
        name: "Bowser",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 1, Pick 2",
            },
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 1, Pick 1",
            },
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 1, Pick 3",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 1, Pick 2",
            },
        ],
    },
    {
        name: "Bowser Jr.",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 2, Pick 7",
            },
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 2, Pick 8",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 4, Pick 1",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 2, Pick 7",
            },
        ],
    },
    {
        name: "Broseph",
        history: [
            {
                season: 1,
                team: "Matt",
                drafted: true,
                draftPick: "Round 11, Pick 4",
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 11, Pick 6",
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Brendan in Week 8",
                    "Dropped by Brendan in Week 9",
                    "Picked up by Brendan in Week 10",
                ]
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Brown Kritter",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 4, Pick 7",
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 3, Pick 3",
                transactions: [
                    "Traded to Isaac Post Draft",
                ]
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 2, Pick 5",
                transactions: [
                    "Traded to Trocean in Week 4"
                ]
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 2, Pick 6",
            },
        ],
    },
    {
        name: "Bugs Bunny",
        history: [
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 12, Pick 6",
            },
        ],
    },
    {
        name: "Candy",
        history: [
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 11, Pick 3",
                transactions: [
                    "Traded to Justave Post Draft",
                ]
            },
        ],
    },
    {
        name: "Cascade",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 9, Pick 3",
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 9, Pick 2",
            },
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 10, Pick 6",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Charlemagne",
        history: [
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 9, Pick 5",
            },
        ],
    },
    {
        name: "Chungy",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 11, Pick 3",
                transactions: [
                    "Traded to Matt Post Draft",
                ]
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 7, Pick 7",
            },
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 11, Pick 5",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Claudius",
        history: [
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 10, Pick 8",
                transactions: [
                    "Dropped by Brendan in Week 2",
                    "Picked up by Trocean in Week 7",
                    "Dropped by Trocean in Week 10",
                ]
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Justave in Week 4",
                ]
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Daisy",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 2, Pick 2",
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 2, Pick 3",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 1, Pick 6",
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 4, Pick 8",
            },
        ],
    },
    {
        name: "Danny B",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 12, Pick 5",
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 10, Pick 7",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 8, Pick 3",
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 8, Pick 1",
            },
        ],
    },
    {
        name: "Dark Bones",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 5, Pick 3",
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 5, Pick 4",
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 3, Pick 4",
                transactions: [
                    "Traded to James in Week 4",
                ]
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 2, Pick 2",
            },
        ],
    },
    {
        name: "Diddler",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 10, Pick 1",
            },
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 12, Pick 8",
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 9, Pick 7",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Diddy Kong",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 2, Pick 5",
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 10, Pick 6",
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 5, Pick 2",
                transactions: [
                    "Traded to Trocean Post Draft",
                ]
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 4, Pick 3",
            },
        ],
    },
    {
        name: "Dixie Kong",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 3, Pick 1",
            },
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 5, Pick 5",
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 6, Pick 7",
            },
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 5, Pick 6",
            },
        ],
    },
    {
        name: "Donkey Kong",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 1, Pick 1",
            },
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 1, Pick 5",
            },
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 1, Pick 1",
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 1, Pick 3",
            },
        ],
    },
    {
        name: "Dry Bones",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 5, Pick 4",
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 6, Pick 3",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 3, Pick 6",
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 1, Pick 8",
            },
        ],
    },
    {
        name: "Eugene",
        history: [
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 12, Pick 6",
            },
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 12, Pick 3",
                transactions: [
                    "Traded to Trocean Post Draft",
                    "Dropped by Trocean Post Draft",
                    "Picked up by Marge Post Draft",
                ]
            },
        ],
    },
    {
        name: "Fire Bro",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 3, Pick 6",
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 1, Pick 3",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 1, Pick 8",
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 1, Pick 7",
            },
        ],
    },
    {
        name: "Fish",
        history: [
            {
                season: 3,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Trocean Post Draft",
                    "Dropped by Trocean in Week 2",
                ]
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Funky Kong",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 2, Pick 1",
            },
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 3, Pick 5",
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 2, Pick 7",
            },
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 1, Pick 6",
            },
        ],
    },
    {
        name: "Geek Squad",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 8, Pick 2",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 8, Pick 1",
            },
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 10, Pick 4",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 10, Pick 5",
            },
        ],
    },
    {
        name: "Goomba",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 11, Pick 7",
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
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Gramms",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 10, Pick 8",
            },
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 10, Pick 4",
            },
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 11, Pick 1",
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 7, Pick 3",
            },
        ],
    },
    {
        name: "Gray Shy Guy",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 12, Pick 1",
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 8, Pick 5",
                transactions: [
                    "Traded to Brendan in Week 5",
                ]
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Justave in Week 4",
                ]
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Grayson McKean",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 9, Pick 6",
            },
            {
                season: 2,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Trocean in Week 10",
                ]
            },
            {
                season: 3,
                team: "Brendan",
                drafted: false,
                draftPick: "Round 8, Pick 7",
            },
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 8, Pick 3",
            },
        ],
    },
    {
        name: "Geek Squad",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 8, Pick 2",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 8, Pick 1",
            },
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 10, Pick 4",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 10, Pick 5",
            },
        ],
    },
    {
        name: "Green Dry Bones",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 6, Pick 8",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 4, Pick 1",
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 3, Pick 2",
            },
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 3, Pick 5",
            },
        ],
    },
    {
        name: "Green Kritter",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 3, Pick 7",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 1, Pick 8",
            },
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 2, Pick 4",
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 2, Pick 1",
            },
        ],
    },
    {
        name: "Green Magikoopa",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 8, Pick 7",
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 5, Pick 3",
            },
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 5, Pick 5",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 5, Pick 4",
            },
        ],
    },
    {
        name: "Green Noki",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 12, Pick 2",
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 12, Pick 6",
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Green Paratroopa",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 7, Pick 8",
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 6, Pick 6",
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 10, Pick 7",
                transactions: [
                    "Traded to Trocean in Week 3",
                    "Traded to Marge in Week 5",
                ]
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 11, Pick 4",
            },
        ],
    },
    {
        name: "Green Shy Guy",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 7, Pick 7",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 6, Pick 1",
            },
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 6, Pick 4",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 7, Pick 2",
            },
        ],
    },
    {
        name: "Green Toad",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 11, Pick 1",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 5, Pick 8",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 4, Pick 3",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 6, Pick 5",
            },
        ],
    },
    {
        name: "Hamburger",
        history: [
            {
                season: 1,
                team: "Matt",
                drafted: true,
                draftPick: "Round 10, Pick 4",
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 8, Pick 2",
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 11, Pick 4",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Hammer Bro",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 6, Pick 7",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 2, Pick 1",
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 2, Pick 2",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 2, Pick 5",
            },
        ],
    },
    {
        name: "Hima",
        history: [
            {
                season: 4,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Trocean Post Draft",
                ]
            },
        ],
    },
    {
        name: "Jack White",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 8, Pick 3",
            },
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 11, Pick 5",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 11, Pick 8",
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 11, Pick 8",
            },
        ],
    },
    {
        name: "Jake",
        history: [
            {
                season: 3,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Brendan in Week 2",
                ]
            },
            {
                season: 4,
                team: "Justave",
                drafted: false,
                draftPick: "Round 7, Pick 6",
            },
        ],
    },
    {
        name: "John Daly",
        history: [
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 11, Pick 6",
                transactions: [
                    "Dropped by Morgan in Week 5",
                ]
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Justin Bieber",
        history: [
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 12, Pick 8",
                transactions: [
                    "Traded to Brendan in Week 3",
                    "Dropped by Brendan in Week 10",
                ]
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 9, Pick 3",
            },
        ],
    },
    {
        name: "Kaguya",
        history: [
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 10, Pick 5",
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 7, Pick 8",
            },
        ],
    },
    {
        name: "Kimmy",
        history: [
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 8, Pick 5",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 7, Pick 8",
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 12, Pick 1",
            },
        ],
    },
    {
        name: "King Boo",
        history: [
            {
                season: 1,
                team: "Matt",
                drafted: true,
                draftPick: "Round 2, Pick 4",
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 1, Pick 7",
            },
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 3, Pick 1",
                transactions: [
                    "Traded to Justave in Week 4",
                ]
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 3, Pick 2",
            },
        ],
    },
    {
        name: "King K. Rool",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 3, Pick 2",
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 1, Pick 6",
            },
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 1, Pick 5",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 1, Pick 4",
            },
        ],
    },
    {
        name: "Koopa",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 9, Pick 2",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 9, Pick 8",
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 11, Pick 7",
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 7, Pick 7",
                transactions: [
                    "Traded to Isaac Post Draft",
                ]
            },
        ],
    },
    {
        name: "Larry Cuc",
        history: [
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 7, Pick 3",
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 9, Pick 2",
                transactions: [
                    "Traded to Trocean in Week 3",
                    "Traded to Marge in Week 5",
                ]
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 8, Pick 5",
            },
        ],
    },
    {
        name: "Light Blue Yoshi",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 6, Pick 4",
            },
            {
                season: 2,
                team: "N/A",
                drafted: false,
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 11, Pick 2",
                transactions: [
                    "Traded to Trocean in Week 5",
                ]
            },
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 4, Pick 6",
            },
        ],
    },
    {
        name: "Light Blue Shy Guy",
        history: [
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 4, Pick 3",
            },
        ],
    },
    {
        name: "Lucia",
        history: [
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 12, Pick 8",
            },
        ],
    },
    {
        name: "Luigi",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 1, Pick 7",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 3, Pick 8",
            },
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 3, Pick 5",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 4, Pick 4",
            },
        ],
    },
    {
        name: "Mario",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 2, Pick 3",
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 1, Pick 4",
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 3, Pick 7",
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 3, Pick 8",
            },
        ],
    },
    {
        name: "Michelle Obama",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 11, Pick 8",
                transactions: [
                    "Traded to Brendan in Week 5",
                ]
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 12, Pick 5",
                transactions: [
                    "Traded to Justave Post Draft",
                    "Traded to Trocean in Week 5",
                ]
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 12, Pick 4",
                transactions: [
                    "Dropped by Marge Post Draft",
                ]
            },
        ],
    },
    {
        name: "Milk",
        history: [
            {
                season: 3,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Called up to Morgans Team in Week 5",
                ]
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Miss Jones",
        history: [
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 9, Pick 5",
            },
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 10, Pick 4",
            },
        ],
    },
    {
        name: "MLK",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 8, Pick 6",
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 9, Pick 4",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 9, Pick 8",
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 11, Pick 7",
            },
        ],
    },
    {
        name: "Monty Mole",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 5, Pick 7",
            },
            {
                season: 2,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 11, Pick 1",
                transactions: [
                    "Traded to THANdrew in Week 5",
                ]
            },
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 8, Pick 8",
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 10, Pick 2",
            },
        ],
    },
    {
        name: "Nose",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 12, Pick 8",
                transactions: [
                    "Traded to DANdrew in Week 4",
                ]
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 10, Pick 6",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 10, Pick 3",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Paragoomba",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 6, Pick 2",
            },
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 7, Pick 5",
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by James in Week 4",
                ]
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Paratroopa",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 10, Pick 7",
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 9, Pick 6",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 10, Pick 1",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 9, Pick 2",
            },
        ],
    },
    {
        name: "Paratroopa",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 10, Pick 7",
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 9, Pick 6",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 10, Pick 1",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 9, Pick 2",
            },
        ],
    },
    {
        name: "Peach",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 1, Pick 3",
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 5, Pick 7",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 2, Pick 3",
            },
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 2, Pick 3",
            },
        ],
    },
    {
        name: "Petey Piranha",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 1, Pick 4",
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 1, Pick 2",
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 1, Pick 2",
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 1, Pick 1",
            },
        ],
    },
    {
        name: "Piggie",
        history: [
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 8, Pick 4",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 7, Pick 4",
            },
        ],
    },
    {
        name: "Pikachu",
        history: [
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 12, Pick 4",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Pink Yoshi",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 6, Pick 3",
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
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 7, Pick 1",
            },
        ],
    },
    {
        name: "Purple Toad",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 8, Pick 8",
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 12, Pick 2",
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 6, Pick 2",
            },
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 5, Pick 5",
            },
        ],
    },
    {
        name: "Purple Yoshi",
        history: [
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 6, Pick 4",
            },
        ],
    },
    {
        name: "Red Koopa",
        history: [
            {
                season: 1,
                team: "Matt",
                drafted: true,
                draftPick: "Round 8, Pick 4",
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 6, Pick 5",
            },
            {
                season: 3,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 12, Pick 2",
                transactions: [
                    "Traded to James in Week 4",
                ]
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 5, Pick 1",
                transactions: [
                    "Traded to Brendan Post Draft",
                ]
            },
        ],
    },
    {
        name: "Red Kritter",
        history: [
            {
                season: 1,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 2, Pick 8",
            },
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 2, Pick 4",
                transactions: [
                    "Traded to THANdrew Post Draft",
                ]
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 2, Pick 1",
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 2, Pick 8",
            },
        ],
    },
    {
        name: "Red Magikoopa",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 5, Pick 6",
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 2, Pick 5",
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 12, Pick 5",
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 8, Pick 2",
            },
        ],
    },
    {
        name: "Red Noki",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 11, Pick 3",
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
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Red Pianta",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 4, Pick 6",
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 3, Pick 4",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 3, Pick 8",
                transactions: [
                    "Traded to THANdrew in Week 4",
                ]
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 5, Pick 7",
            },
        ],
    },
    {
        name: "Red Shy Guy",
        history: [
            {
                season: 1,
                team: "Justin",
                drafted: true,
                draftPick: "Round 10, Pick 2",
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 4, Pick 5",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 7, Pick 6",
            },
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 11, Pick 5",
            },
        ],
    },
    {
        name: "Red Toad",
        history: [
            {
                season: 1,
                team: "Matt",
                drafted: true,
                draftPick: "Round 6, Pick 4",
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 7, Pick 4",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 5, Pick 8",
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 5, Pick 8",
            },
        ],
    },
    {
        name: "Red Yoshi",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 3, Pick 8",
                transactions: [
                    "Traded to Isaac Post Draft",
                ]
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 11, Pick 4",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 12, Pick 3",
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 10, Pick 1",
            },
        ],
    },
    {
        name: "Reshiram",
        history: [
            {
                season: 2,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Morgan in Week 5",
                ]
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Isaac in Week 4",
                    "Dropped by Isaac in Week 6",
                ]
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 10, Pick 8",
            },
        ],
    },
    {
        name: "Saber",
        history: [
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 6, Pick 6",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Sabrina",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 10, Pick 6",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 12, Pick 1",
                transactions: [
                    "Traded to Trocean Post Draft",
                    "Traded to Justave in Week 5",
                ]
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 6, Pick 3",
            },
        ],
    },
    {
        name: "Sherpa",
        history: [
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 7, Pick 1",
                transactions: [
                    "Traded to Brendan in Week 5",
                ]
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 8, Pick 6",
            },
        ],
    },
    {
        name: "Smurf",
        history: [
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 9, Pick 6",
            },
        ],
    },
    {
        name: "Tarzan",
        history: [
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 9, Pick 1",
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 10, Pick 6",
            },
        ],
    },
    {
        name: "Tate McRae",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 12, Pick 7",
            },
            {
                season: 2,
                team: "Justave",
                drafted: true,
                draftPick: "Round 11, Pick 8",
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Tiny Kong",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 4, Pick 5",
            },
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 4, Pick 4",
            },
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 6, Pick 8",
            },
            {
                season: 4,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 5, Pick 3",
            },
        ],
    },
    {
        name: "Toadette",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 4, Pick 3",
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 9, Pick 7",
            },
            {
                season: 3,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 6, Pick 3",
            },
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 7, Pick 5",
            },
        ],
    },
    {
        name: "Toadsworth",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 6, Pick 6",
            },
            {
                season: 2,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 10, Pick 5",
                transactions: [
                    "Dropped by Trocean in Week 7",
                ]
            },
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 9, Pick 3",
            },
            {
                season: 4,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 12, Pick 5",
            },
        ],
    },
    {
        name: "Tonka",
        history: [
            {
                season: 3,
                team: "N/A",
                drafted: false,
                transactions: [
                    "Picked up by Justave in Week 4",
                ]
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Tony Soprano",
        history: [
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Triangle",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 8, Pick 5",
            },
            {
                season: 2,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 12, Pick 4",
            },
            {
                season: 3,
                team: "N/A",
                drafted: false,
            },
            {
                season: 4,
                team: "Justave",
                drafted: true,
                draftPick: "Round 11, Pick 3",
            },
        ],
    },
    {
        name: "Waluigi",
        history: [
            {
                season: 1,
                team: "DANdrew",
                drafted: true,
                draftPick: "Round 1, Pick 8",
            },
            {
                season: 2,
                team: "THANdrew",
                drafted: true,
                draftPick: "Round 4, Pick 6",
            },
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 4, Pick 8",
                transactions: [
                    "Traded to Brendan Post Draft",
                ]
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 6, Pick 2",
            },
        ],
    },
    {
        name: "Wario",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 3, Pick 4",
                transactions: [
                    "Traded to Christach Post Draft",
                ]
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 3, Pick 6",
            },
            {
                season: 3,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 4, Pick 7",
            },
            {
                season: 4,
                team: "Brendan",
                drafted: true,
                draftPick: "Round 4, Pick 2",
            },
        ],
    },
    {
        name: "Wiggler",
        history: [
            {
                season: 1,
                team: "Christach",
                drafted: true,
                draftPick: "Round 2, Pick 6",
                transactions: [
                    "Traded to Matt Post Draft",
                ]
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 2, Pick 7",
            },
            {
                season: 3,
                team: "Trocean",
                drafted: true,
                draftPick: "Round 2, Pick 8",
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 3, Pick 1",
            },
        ],
    },
    {
        name: "Yellow Magikoopa",
        history: [
            {
                season: 1,
                team: "James",
                drafted: true,
                draftPick: "Round 5, Pick 2",
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 3, Pick 7",
            },
            {
                season: 3,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 7, Pick 3",
            },
            {
                season: 4,
                team: "James",
                drafted: true,
                draftPick: "Round 4, Pick 7",
            },
        ],
    },
    {
        name: "Yellow Pianta",
        history: [
            {
                season: 1,
                team: "Matt",
                drafted: true,
                draftPick: "Round 4, Pick 4",
            },
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 4, Pick 7",
            },
            {
                season: 3,
                team: "Marge",
                drafted: true,
                draftPick: "Round 4, Pick 4",
                transactions: [
                    "Traded to Trocean in Week 5",
                ]
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 6, Pick 8",
            },
        ],
    },
    {
        name: "Yellow Shy Guy",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 11, Pick 4",
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 4, Pick 2",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 8, Pick 1",
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Yellow Toad",
        history: [
            {
                season: 1,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 10, Pick 3",
                transactions: [
                    "Traded to Morgan Post Draft",
                ]
            },
            {
                season: 2,
                team: "Marge",
                drafted: true,
                draftPick: "Round 6, Pick 2",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 6, Pick 1",
                transactions: [
                    "Traded to Justave in Week 4",
                ]
            },
            {
                season: 4,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 4, Pick 1",
            },
        ],
    },
    {
        name: "Yellow Yoshi",
        history: [
            {
                season: 1,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 7, Pick 4",
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 7, Pick 3",
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 6, Pick 5",
                transactions: [
                    "Dropped by Justave in Week 4",
                ]
            },
            {
                season: 4,
                team: "N/A",
                drafted: false,
            },
        ],
    },
    {
        name: "Yoshi",
        history: [
            {
                season: 1,
                team: "Matt",
                drafted: true,
                draftPick: "Round 1, Pick 5",
            },
            {
                season: 2,
                team: "Morgan",
                drafted: true,
                draftPick: "Round 4, Pick 3",
            },
            {
                season: 3,
                team: "Justave",
                drafted: true,
                draftPick: "Round 4, Pick 5",
            },
            {
                season: 4,
                team: "Marge",
                drafted: true,
                draftPick: "Round 2, Pick 4",
            },
        ],
    },
    {
        name: "Zekrom",
        history: [
            {
                season: 2,
                team: "James",
                drafted: true,
                draftPick: "Round 7, Pick 2",
            },
            {
                season: 3,
                team: "James",
                drafted: true,
                draftPick: "Round 12, Pick 1",
                transactions: [
                    "Traded to Justave in Week 4",
                ]
            },
            {
                season: 4,
                team: "Isaac",
                drafted: true,
                draftPick: "Round 11, Pick 1",
            },
        ],
    },
];