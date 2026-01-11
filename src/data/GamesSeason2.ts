export type TeamLine = {
    name: string;
    color: string;
    scores: number[];
    R: number;
    H: number;
    E: number;
    LOB: number;
};

export type BattingStat = {
    player: string;
    team: string;
    AB: number;
    H: number;
    R: number;
    RBI: number;
    HR: number;
    AVG: string;
};

export type PitchingStat = {
    player: string;
    team: string;
    IP: number;
    H: number;
    ER: number;
    SO: number;
    ERA: string;
};

export type GameStats = {
    id: string;
    homeManager: string;
    awayManager: string;
    game: {
        away: TeamLine;
        home: TeamLine;
    };
    battingStats: BattingStat[];
    pitchingStats: PitchingStat[];
};

export const GamesSeason2: Record<string, GameStats> = {
    "Game1": {
        id: "Game1",
        awayManager: "Morgan",
        homeManager: "James",
        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [0, 0, 2, 2, 0, 5, 0],
                R: 9,
                H: 16,
                E: 0,
                LOB: 8
            },
            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [2, 0, 0, 0, 1, 0, 0],
                R: 3,
                H: 8,
                E: 0,
                LOB: 3
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 5, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Petey Piranha", team: "James", AB: 4, H: 3, R: 2, RBI: 4, HR: 1, AVG: "0.750" },
            { player: "Wiggler", team: "James", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Zekrom", team: "James", AB: 4, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Yellow Pianta", team: "James", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Toad", team: "James", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Alfonso", team: "James", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Pianta", team: "James", AB: 4, H: 3, R: 2, RBI: 2, HR: 2, AVG: "0.750" },
            { player: "Cascade", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },

            { player: "Daisy", team: "Morgan", AB: 3, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.333" },
            { player: "Dry Bones", team: "Morgan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Wario", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "King K Rool", team: "Morgan", AB: 3, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "Antenna", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Jon Daly", team: "Morgan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Yoshi", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby Mario", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Birdo", team: "James", IP: 5, H: 7, ER: 3, SO: 0, ERA: "4.20" },
            { player: "Zekrom", team: "James", IP: 2, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Daisy", team: "Morgan", IP: 2, H: 5, ER: 2, SO: 0, ERA: "7.00" },
            { player: "Yoshi", team: "Morgan", IP: 3.1, H: 9, ER: 6, SO: 0, ERA: "12.60" },
            { player: "Wario", team: "Morgan", IP: 1.2, H: 2, ER: 1, SO: 0, ERA: "4.20" },
        ]
    },
    "Game2": {
        id: "Game2",
        awayManager: "Marge",
        homeManager: "Trocean",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 0, 0, 0, 4, 0, 0, 0, 0, 1, 1],
                R: 6,
                H: 22,
                E: 0,
                LOB: 7
            },
            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 0, 1, 0, 3, 0, 0, 0, 0, 1, 0],
                R: 5,
                H: 20,
                E: 0,
                LOB: 10
            }
        },

        battingStats: [
            { player: "King Boo", team: "Marge", AB: 6, H: 4, R: 1, RBI: 2, HR: 0, AVG: "0.667" },
            { player: "Chungy", team: "Marge", AB: 6, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Yellow Shy Guy", team: "Marge", AB: 6, H: 4, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Hamburger", team: "Marge", AB: 5, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.200" },
            { player: "Yellow Toad", team: "Marge", AB: 5, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Toadette", team: "Marge", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Peach", team: "Marge", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Yellow Kamek", team: "Marge", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Boo", team: "Marge", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },

            { player: "Red Yoshi", team: "Trocean", AB: 6, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Dark Bones", team: "Trocean", AB: 6, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Mario", team: "Trocean", AB: 6, H: 4, R: 1, RBI: 3, HR: 0, AVG: "0.667" },
            { player: "Red Pianta", team: "Trocean", AB: 5, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Kimmy", team: "Trocean", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Shy Guy", team: "Trocean", AB: 5, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "MLK", team: "Trocean", AB: 5, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Red Kamek", team: "Trocean", AB: 5, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.200" },
            { player: "Red Koopa", team: "Trocean", AB: 5, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.400" },
        ],

        pitchingStats: [
            { player: "Boo", team: "Marge", IP: 4.2, H: 9, ER: 3, SO: 0, ERA: "4.50" },
            { player: "Peach", team: "Marge", IP: 6.1, H: 11, ER: 2, SO: 0, ERA: "2.21" },

            { player: "Red Kamek", team: "Trocean", IP: 4.1, H: 8, ER: 1, SO: 0, ERA: "1.62" },
            { player: "Mario", team: "Trocean", IP: 6, H: 14, ER: 5, SO: 0, ERA: "5.83" },
        ]
    },
    "Game3": {
        id: "Game3",
        awayManager: "Justave",
        homeManager: "Brendan",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 0, 3, 0, 0, 0, 0],
                R: 3,
                H: 17,
                E: 0,
                LOB: 10
            },
            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 1, 0, 0, 1, 0, 0],
                R: 2,
                H: 11,
                E: 0,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Geek Squad", team: "Justave", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Kritter", team: "Justave", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Luigi", team: "Justave", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Shy Guy", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Bertha", team: "Justave", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Green Dry Bones", team: "Justave", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Claudius", team: "Brendan", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Bowser Jr", team: "Brendan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Bowser", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Dry Bones", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Abu Patel", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Boomerang Bro", team: "Brendan", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Kamek", team: "Brendan", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Barry", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Yoshi", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 7, H: 11, ER: 2, SO: 0, ERA: "2.00" },

            { player: "Blue Kamek", team: "Brendan", IP: 2, H: 7, ER: 2, SO: 0, ERA: "7.00" },
            { player: "Bowser", team: "Brendan", IP: 4.2, H: 9, ER: 1, SO: 3, ERA: "1.50" },
            { player: "Bowser Jr", team: "Brendan", IP: 0.1, H: 1, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game4": {
        id: "Game4",
        awayManager: "THANdrew",
        homeManager: "Isaac",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 2, 0, 0, 3, 0, 0, 0, 1],
                R: 6,
                H: 14,
                E: 0,
                LOB: 6
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 2, 0, 2, 1, 0, 0, 0],
                R: 5,
                H: 23,
                E: 3,
                LOB: 13
            }
        },

        battingStats: [
            { player: "Nose", team: "THANdrew", AB: 5, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Waluigi", team: "THANdrew", AB: 5, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "Red Kritter", team: "THANdrew", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Fire Bro", team: "THANdrew", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Larry Cuc", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Kritter", team: "THANdrew", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Kamek", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Paratroopa", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Noki", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },

            { player: "Tiny Kong", team: "Isaac", AB: 6, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Betty White", team: "Isaac", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Funky Kong", team: "Isaac", AB: 5, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Donkey Kong", team: "Isaac", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "J-Nasty", team: "Isaac", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Brown Kritter", team: "Isaac", AB: 5, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.200" },
            { player: "Gramms", team: "Isaac", AB: 5, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Baby DK", team: "Isaac", AB: 5, H: 4, R: 1, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Dixie Kong", team: "Isaac", AB: 5, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.600" },
        ],

        pitchingStats: [
            { player: "Green Kamek", team: "THANdrew", IP: 2.1, H: 6, ER: 2, SO: 0, ERA: "6.00" },
            { player: "Waluigi", team: "THANdrew", IP: 2.1, H: 6, ER: 2, SO: 0, ERA: "6.00" },
            { player: "Larry Cuc", team: "THANdrew", IP: 3.2, H: 9, ER: 1, SO: 0, ERA: "1.91" },
            { player: "Green Noki", team: "THANdrew", IP: .2, H: 2, ER: 0, SO: 0, ERA: "0.00" },

            { player: "J-Nasty", team: "Isaac", IP: 4.2, H: 9, ER: 4, SO: 0, ERA: "6.00" },
            { player: "Donkey Kong", team: "Isaac", IP: 4.1, H: 5, ER: 2, SO: 1, ERA: "3.23" },
        ]
    },
    "Game5": {
        id: "Game5",
        awayManager: "Morgan",
        homeManager: "Justave",
        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [2, 1, 0, 0, 0, 0, 2],
                R: 5,
                H: 16,
                E: 0,
                LOB: 8
            },
            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 0, 4, 5, 1, 2, 0],
                R: 12,
                H: 25,
                E: 0,
                LOB: 8
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Geek Squad", team: "Justave", AB: 4, H: 2, R: 2, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Green Kritter", team: "Justave", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Luigi", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Shy Guy", team: "Justave", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Michelle Obama", team: "Justave", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Green Dry Bones", team: "Justave", AB: 2, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Daisy", team: "Morgan", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Dry Bones", team: "Morgan", AB: 5, H: 4, R: 2, RBI: 2, HR: 0, AVG: "0.800" },
            { player: "Wario", team: "Morgan", AB: 5, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "King K Rool", team: "Morgan", AB: 4, H: 3, R: 1, RBI: 4, HR: 0, AVG: "0.750" },
            { player: "Antenna", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Jon Daly", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Yoshi", team: "Morgan", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Baby Mario", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 4, H: 4, R: 3, RBI: 0, HR: 0, AVG: "1.000" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 2.2, H: 8, ER: 4, SO: 0, ERA: "10.50" },
            { player: "Luigi", team: "Justave", IP: 2, H: 13, ER: 6, SO: 0, ERA: "21.00" },
            { player: "Green Shy Guy", team: "Justave", IP: 2.1, H: 4, ER: 2, SO: 0, ERA: "6.00" },

            { player: "Daisy", team: "Morgan", IP: 6, H: 11, ER: 3, SO: 0, ERA: "3.50" },
            { player: "Wario", team: "Morgan", IP: 1, H: 5, ER: 2, SO: 0, ERA: "14.00" },
        ]
    },
    "Game6": {
        id: "Game6",
        awayManager: "Morgan",
        homeManager: "Justave",
        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [10, 0, 0, 0, 2, 0, 2],
                R: 14,
                H: 20,
                E: 0,
                LOB: 3
            },
            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [3, 1, 0, 0, 5, 0, 0],
                R: 9,
                H: 19,
                E: 0,
                LOB: 7
            }
        },

        battingStats: [
            { player: "Claudius", team: "Brendan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Bowser Jr", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Bowser", team: "Brendan", AB: 4, H: 2, R: 2, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Blue Dry Bones", team: "Brendan", AB: 4, H: 2, R: 2, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Abu Patel", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Boomerang Bro", team: "Brendan", AB: 4, H: 4, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Blue Kamek", team: "Brendan", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Barry", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Yoshi", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },

            { player: "Birdo", team: "James", AB: 5, H: 3, R: 3, RBI: 4, HR: 2, AVG: "0.600" },
            { player: "Petey Piranha", team: "James", AB: 5, H: 3, R: 2, RBI: 3, HR: 2, AVG: "0.600" },
            { player: "Wiggler", team: "James", AB: 5, H: 3, R: 2, RBI: 1, HR: 1, AVG: "0.600" },
            { player: "Zekrom", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Yellow Pianta", team: "James", AB: 4, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Blue Toad", team: "James", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Alfonso", team: "James", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Pianta", team: "James", AB: 4, H: 2, R: 2, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Cascade", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
        ],

        pitchingStats: [
            { player: "Claudius", team: "Brendan", IP: 0.2, H: 8, ER: 8, SO: 0, ERA: "84.00" },
            { player: "Bowser", team: "Brendan", IP: 5.1, H: 11, ER: 4, SO: 0, ERA: "5.25" },
            { player: "Bowser Jr", team: "Brendan", IP: 1, H: 2, ER: 2, SO: 0, ERA: "14.00" },

            { player: "Wiggler", team: "James", IP: 4.1, H: 12, ER: 6, SO: 0, ERA: "9.69" },
            { player: "Birdo", team: "James", IP: 2.2, H: 7, ER: 3, SO: 1, ERA: "7.88" },
        ]
    },
    "Game7": {
        id: "Game7",
        awayManager: "Isaac",
        homeManager: "Marge",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 0, 0, 1, 0, 0, 0],
                R: 1,
                H: 6,
                E: 1,
                LOB: 2
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [2, 0, 2, 0, 0, 0, 0],
                R: 4,
                H: 9,
                E: 0,
                LOB: 3
            }
        },

        battingStats: [
            { player: "Tiny Kong", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Betty White", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Funky Kong", team: "Isaac", AB: 2, H: 2, R: 2, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Donkey Kong", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "J-Nasty", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Brown Kritter", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Gramms", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Baby DK", team: "Isaac", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Dixie Kong", team: "Isaac", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "King Boo", team: "Marge", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Chungy", team: "Marge", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Yellow Shy Guy", team: "Marge", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Hamburger", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Yellow Toad", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Toadette", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Peach", team: "Marge", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yellow Kamek", team: "Marge", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Boo", team: "Marge", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Betty White", team: "Isaac", IP: 7, H: 6, ER: 1, SO: 0, ERA: "1.00" },

            { player: "Boo", team: "Marge", IP: 2.1, H: 7, ER: 4, SO: 0, ERA: "12.00" },
            { player: "Peach", team: "Marge", IP: 3.2, H: 2, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game8": {
        id: "Game8",
        awayManager: "Trocean",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 1, 0, 0, 0, 5, 0],
                R: 6,
                H: 12,
                E: 3,
                LOB: 3
            },
            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [3, 0, 0, 0, 5, 0, 0],
                R: 8,
                H: 13,
                E: 2,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Mario", team: "Trocean", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Red Yoshi", team: "Trocean", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Kimmy", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Koopa", team: "Trocean", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Dark Bones", team: "Trocean", AB: 2, H: 2, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "MLK", team: "Trocean", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Shy Guy", team: "Trocean", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Kamek", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Pianta", team: "Trocean", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Nose", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Waluigi", team: "THANdrew", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Red Kritter", team: "THANdrew", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Fire Bro", team: "THANdrew", AB: 3, H: 2, R: 2, RBI: 1, HR: 1, AVG: "0.667" },
            { player: "Larry Cuc", team: "THANdrew", AB: 3, H: 3, R: 2, RBI: 3, HR: 1, AVG: "1.000" },
            { player: "Blue Kritter", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 3, HR: 1, AVG: "0.667" },
            { player: "Green Kamek", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Green Paratroopa", team: "THANdrew", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Noki", team: "THANdrew", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Red Kamek", team: "Trocean", IP: 0.2, H: 3, ER: 3, SO: 0, ERA: "31.50" },
            { player: "Mario", team: "Trocean", IP: 3.2, H: 7, ER: 5, SO: 0, ERA: "9.55" },
            { player: "Red Yoshi", team: "Trocean", IP: 1.2, H: 2, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Green Kamek", team: "THANdrew", IP: 4, H: 3, ER: 1, SO: 0, ERA: "1.75" },
            { player: "Waluigi", team: "THANdrew", IP: 1, H: 8, ER: 4, SO: 0, ERA: "28.00" },
            { player: "Red Kritter", team: "THANdrew", IP: 2, H: 2, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
};
