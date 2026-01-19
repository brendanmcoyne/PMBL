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
        awayManager: "Brendan",
        homeManager: "James",
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
    "Game9": {
        id: "Game9",
        awayManager: "Trocean",
        homeManager: "Morgan",

        game: {
            away: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 0, 6, 0, 0, 4, 2],
                R: 12,
                H: 25,
                E: 0,
                LOB: 12
            },
            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [2, 1, 1, 0, 0, 0, 0],
                R: 4,
                H: 10,
                E: 0,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Mario", team: "Trocean", AB: 5, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Red Yoshi", team: "Trocean", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Kimmy", team: "Trocean", AB: 5, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Red Koopa", team: "Trocean", AB: 4, H: 2, R: 3, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Dark Bones", team: "Trocean", AB: 5, H: 3, R: 3, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "MLK", team: "Trocean", AB: 5, H: 4, R: 1, RBI: 2, HR: 0, AVG: "0.800" },
            { player: "Shy Guy", team: "Trocean", AB: 5, H: 5, R: 2, RBI: 3, HR: 0, AVG: "1.000" },
            { player: "Red Kamek", team: "Trocean", AB: 5, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "Red Pianta", team: "Trocean", AB: 4, H: 4, R: 0, RBI: 3, HR: 0, AVG: "1.000" },

            { player: "Daisy", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.250" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.250" },
            { player: "Wario", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "King K Rool", team: "Morgan", AB: 3, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.333" },
            { player: "Antenna", team: "Morgan", AB: 3, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.667" },
            { player: "Jon Daly", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Yoshi", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby Mario", team: "Morgan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Red Kamek", team: "Trocean", IP: 1.2, H: 5, ER: 3, SO: 0, ERA: "12.60" },
            { player: "Mario", team: "Trocean", IP: 5.1, H: 5, ER: 1, SO: 3, ERA: "1.31" },

            { player: "Daisy", team: "Morgan", IP: 2.1, H: 8, ER: 2, SO: 0, ERA: "6.00" },
            { player: "Wario", team: "Morgan", IP: 3, H: 10, ER: 4, SO: 0, ERA: "9.33" },
            { player: "Yoshi", team: "Morgan", IP: 1.1, H: 7, ER: 6, SO: 0, ERA: "31.50" },
            { player: "King K Rool", team: "Morgan", IP: 0.1, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game10": {
        id: "Game10",
        awayManager: "Justave",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [1, 0, 0, 0, 0, 0, 0],
                R: 1,
                H: 11,
                E: 0,
                LOB: 7
            },
            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 0, 2, 0, 0, 1, 0],
                R: 3,
                H: 8,
                E: 1,
                LOB: 3
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 4, H: 4, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Geek Squad", team: "Justave", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Kritter", team: "Justave", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Hammer Bro", team: "Justave", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Bob Marley", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Dry Bones", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Shy Guy", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Michelle Obama", team: "Justave", AB: 3, H: 3, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Luigi", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Nose", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Waluigi", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Red Kritter", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Fire Bro", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "Larry Cuc", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.667" },
            { player: "Blue Kritter", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Kamek", team: "THANdrew", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Paratroopa", team: "THANdrew", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Noki", team: "THANdrew", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 6, H: 8, ER: 3, SO: 0, ERA: "3.50" },

            { player: "Green Kamek", team: "THANdrew", IP: 1.2, H: 3, ER: 1, SO: 0, ERA: "4.20" },
            { player: "Waluigi", team: "THANdrew", IP: 3, H: 4, ER: 0, SO: 1, ERA: "0.00" },
            { player: "Nose", team: "THANdrew", IP: 2.1, H: 4, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game11": {
        id: "Game11",
        awayManager: "James",
        homeManager: "Marge",
        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [0, 4, 1, 6, 4, 6, 0],
                R: 21,
                H: 33,
                E: 0,
                LOB: 7
            },
            home: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 0, 0, 1, 1, 1, 1],
                R: 4,
                H: 16,
                E: 0,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 6, H: 4, R: 4, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Petey Piranha", team: "James", AB: 6, H: 5, R: 4, RBI: 6, HR: 3, AVG: "0.833" },
            { player: "Wiggler", team: "James", AB:6, H: 5, R: 3, RBI: 2, HR: 0, AVG: "0.833" },
            { player: "Zekrom", team: "James", AB: 6, H: 3, R: 3, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Yellow Pianta", team: "James", AB: 5, H: 3, R: 3, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Blue Toad", team: "James", AB: 5, H: 5, R: 3, RBI: 4, HR: 1, AVG: "1.000" },
            { player: "Alfonso", team: "James", AB: 5, H: 5, R: 1, RBI: 6, HR: 1, AVG: "1.000" },
            { player: "Blue Pianta", team: "James", AB: 5, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Cascade", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },

            { player: "King Boo", team: "Marge", AB: 4, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.500" },
            { player: "Chungy", team: "Marge", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Yellow Shy Guy", team: "Marge", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Hamburger", team: "Marge", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Yellow Toad", team: "Marge", AB: 3, H: 3, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Toadette", team: "Marge", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Peach", team: "Marge", AB: 2, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Yellow Kamek", team: "Marge", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Boo", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Birdo", team: "James", IP: 4, H: 8, ER: 1, SO: 2, ERA: "1.75" },
            { player: "Zekrom", team: "James", IP: 3, H: 8, ER: 3, SO: 0, ERA: "7.00" },

            { player: "Boo", team: "Marge", IP: 1.2, H: 7, ER: 4, SO: 0, ERA: "16.80" },
            { player: "Peach", team: "Marge", IP: 2.1, H: 9, ER: 7, SO: 0, ERA: "21.00" },
            { player: "Yellow Kamek", team: "Marge", IP: 1.1, H: 6, ER: 4, SO: 0, ERA: "21.00" },
            { player: "King Boo", team: "Marge", IP: 0.1, H: 5, ER: 2, SO: 0, ERA: "42.00" },
            { player: "Yellow Toad", team: "Marge", IP: 1.1, H: 6, ER: 4, SO: 0, ERA: "21.00" },
        ]
    },
    "Game12": {
        id: "Game12",
        awayManager: "Isaac",
        homeManager: "Brendan",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 0, 0, 1, 1, 1, 0],
                R: 3,
                H: 12,
                E: 0,
                LOB: 5
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 4, 1, 2, 0, 0],
                R: 7,
                H: 14,
                E: 1,
                LOB: 3
            }
        },

        battingStats: [
            { player: "Tiny Kong", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Betty White", team: "Isaac", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Funky Kong", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 4, HR: 1, AVG: "0.333" },
            { player: "Donkey Kong", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "J-Nasty", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Brown Kritter", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Gramms", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Baby DK", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Dixie Kong", team: "Isaac", AB: 3, H: 3, R: 1, RBI: 0, HR: 0, AVG: "1.000" },

            { player: "Boomerang Bro", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Bowser Jr", team: "Brendan", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Bowser", team: "Brendan", AB: 3, H: 2, R: 2, RBI: 2, HR: 2, AVG: "0.667" },
            { player: "Blue Dry Bones", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Diddler", team: "Brendan", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Kamek", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Barry", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Yoshi", team: "Brendan", AB: 2, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Abu Patel", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "J-Nasty", team: "Isaac", IP: 5.2, H: 11, ER: 3, SO: 0, ERA: "3.71" },
            { player: "Donkey Kong", team: "Isaac", IP: 1.1, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Diddler", team: "Brendan", IP: 4.1, H: 12, ER: 7, SO: 0, ERA: "11.95" },
            { player: "Bowser Jr", team: "Brendan", IP: 2.2, H: 2, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game13": {
        id: "Game13",
        awayManager: "Marge",
        homeManager: "Justave",
        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [4, 0, 2, 0, 0, 3, 7],
                R: 16,
                H: 26,
                E: 0,
                LOB: 4
            },
            home: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 0, 0, 0, 0, 0, 0],
                R: 0,
                H: 5,
                E: 0,
                LOB: 2
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 5, H: 4, R: 3, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 2, R: 2, RBI: 6, HR: 2, AVG: "0.500" },
            { player: "Green Kritter", team: "Justave", AB: 5, H: 4, R: 2, RBI: 4, HR: 2, AVG: "0.800" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Geek Squad", team: "Justave", AB: 5, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Green Dry Bones", team: "Justave", AB: 5, H: 4, R: 2, RBI: 3, HR: 1, AVG: "0.800" },
            { player: "Koopa", team: "Justave", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Green Shy Guy", team: "Justave", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Luigi", team: "Justave", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },

            { player: "King Boo", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Chungy", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yellow Shy Guy", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Hamburger", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Yellow Toad", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Toadette", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Peach", team: "Marge", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yellow Kamek", team: "Marge", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Boo", team: "Marge", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 7, H: 5, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Boo", team: "Marge", IP: 0.1, H: 5, ER: 4, SO: 0, ERA: "84.00" },
            { player: "Peach", team: "Marge", IP: 5.1, H: 11, ER: 5, SO: 0, ERA: "6.56" },
            { player: "Yellow Kamek", team: "Marge", IP: 0.1, H: 5, ER: 3, SO: 0, ERA: "63.00" },
            { player: "King Boo", team: "Marge", IP: 0.1, H: 2, ER: 4, SO: 0, ERA: "84.00" },
            { player: "Chungy", team: "Marge", IP: 0.2, H: 1, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game14": {
        id: "Game14",
        awayManager: "James",
        homeManager: "Trocean",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [3, 0, 3, 3, 5, 4, 3],
                R: 21,
                H: 30,
                E: 2,
                LOB: 7
            },
            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 1, 0, 1, 0, 0, 4],
                R: 6,
                H: 18,
                E: 0,
                LOB: 10
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 6, H: 4, R: 3, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Petey Piranha", team: "James", AB: 6, H: 4, R: 4, RBI: 3, HR: 1, AVG: "0.667" },
            { player: "Wiggler", team: "James", AB:6, H: 3, R: 3, RBI: 4, HR: 0, AVG: "0.500" },
            { player: "Zekrom", team: "James", AB: 6, H: 5, R: 4, RBI: 5, HR: 1, AVG: "0.833" },
            { player: "Yellow Pianta", team: "James", AB: 5, H: 3, R: 2, RBI: 4, HR: 0, AVG: "0.600" },
            { player: "Blue Toad", team: "James", AB: 5, H: 4, R: 0, RBI: 2, HR: 0, AVG: "0.800" },
            { player: "Alfonso", team: "James", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Blue Pianta", team: "James", AB: 5, H: 3, R: 1, RBI: 3, HR: 1, AVG: "0.600" },
            { player: "Cascade", team: "James", AB: 5, H: 3, R: 3, RBI: 0, HR: 0, AVG: "0.600" },

            { player: "Mario", team: "Trocean", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Red Yoshi", team: "Trocean", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Kimmy", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Koopa", team: "Trocean", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Dark Bones", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "MLK", team: "Trocean", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Shy Guy", team: "Trocean", AB: 3, H: 1, R: 2, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Kamek", team: "Trocean", AB: 4, H: 4, R: 1, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Red Pianta", team: "Trocean", AB: 4, H: 4, R: 0, RBI: 2, HR: 0, AVG: "1.000" },
        ],

        pitchingStats: [
            { player: "Birdo", team: "James", IP: 4.1, H: 10, ER: 2, SO: 2, ERA: "3.23" },
            { player: "Alfonso", team: "James", IP: 2.2, H: 8, ER: 4, SO: 0, ERA: "10.50" },

            { player: "Mario", team: "Trocean", IP: 2, H: 9, ER: 5, SO: 0, ERA: "17.50" },
            { player: "Red Kamek", team: "Trocean", IP: 1.1, H: 5, ER: 4, SO: 0, ERA: "21.00" },
            { player: "Red Pianta", team: "Trocean", IP: 1.1, H: 6, ER: 4, SO: 1, ERA: "21.00" },
            { player: "Red Koopa", team: "Trocean", IP: 1.2, H: 10, ER: 8, SO: 0, ERA: "33.60" },
            { player: "Red Yoshi", team: "Trocean", IP: 0.2, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game15": {
        id: "Game15",
        awayManager: "Brendan",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [2, 2, 0, 0, 0, 0, 2, 2],
                R: 8,
                H: 16,
                E: 1,
                LOB: 7
            },
            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 0, 3, 3, 0, 0, 0, 0],
                R: 6,
                H: 14,
                E: 0,
                LOB: 7
            }
        },

        battingStats: [
            { player: "Boomerang Bro", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Bowser Jr", team: "Brendan", AB: 5, H: 3, R: 3, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Bowser", team: "Brendan", AB: 5, H: 3, R: 2, RBI: 5, HR: 2, AVG: "0.600" },
            { player: "Blue Dry Bones", team: "Brendan", AB: 5, H: 4, R: 1, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Diddler", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Blue Kamek", team: "Brendan", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Barry", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Yoshi", team: "Brendan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Abu Patel", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },

            { player: "Nose", team: "THANdrew", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Waluigi", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Kritter", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Fire Bro", team: "THANdrew", AB: 4, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.250" },
            { player: "Larry Cuc", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Kritter", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Kamek", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Paratroopa", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Noki", team: "THANdrew", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
        ],

        pitchingStats: [
            { player: "Diddler", team: "Brendan", IP: 3, H: 8, ER: 3, SO: 0, ERA: "7.00" },
            { player: "Bowser", team: "Brendan", IP: 2.2, H: 5, ER: 3, SO: 0, ERA: "7.88" },
            { player: "Bowser Jr", team: "Brendan", IP: 2.1, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Green Kamek", team: "THANdrew", IP: 1.2, H: 7, ER: 4, SO: 1, ERA: "16.80" },
            { player: "Waluigi", team: "THANdrew", IP: 4.2, H: 4, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Green Noki", team: "THANdrew", IP: 1, H: 3, ER: 2, SO: 0, ERA: "14.00" },
            { player: "Larry Cuc", team: "THANdrew", IP: 0.2, H: 3, ER: 2, SO: 0, ERA: "21.00" },
        ]
    },
    "Game16": {
        id: "Game16",
        awayManager: "Morgan",
        homeManager: "Isaac",

        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 0, 1, 0, 4, 1],
                R: 6,
                H: 17,
                E: 1,
                LOB: 7
            },
            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 1, 0, 3, 0, 0, 0],
                R: 4,
                H: 11,
                E: 1,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Daisy", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Wario", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "King K Rool", team: "Morgan", AB: 3, H: 3, R: 2, RBI: 2, HR: 2, AVG: "1.000" },
            { player: "Antenna", team: "Morgan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Jon Daly", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yoshi", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby Mario", team: "Morgan", AB: 2, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 3, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.667" },

            { player: "Tiny Kong", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Betty White", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Funky Kong", team: "Isaac", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Donkey Kong", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.500" },
            { player: "J-Nasty", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 1, HR: 1, AVG: "0.750" },
            { player: "Brown Kritter", team: "Isaac", AB: 4, H: 4, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Gramms", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Baby DK", team: "Isaac", AB: 3, H: 3, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Dixie Kong", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Daisy", team: "Morgan", IP: 5, H: 9, ER: 1, SO: 0, ERA: "1.40" },
            { player: "Yoshi", team: "Morgan", IP: 1, H: 6, ER: 4, SO: 0, ERA: "28.00" },
            { player: "Wario", team: "Morgan", IP: 1, H: 2, ER: 1, SO: 0, ERA: "7.00" },

            { player: "J-Nasty", team: "Isaac", IP: 4.1, H: 8, ER: 4, SO: 0, ERA: "6.46" },
            { player: "Donkey Kong", team: "Isaac", IP: 2.2, H: 3, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game17": {
        id: "Game17",
        awayManager: "Trocean",
        homeManager: "Isaac",

        game: {
            away: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 2, 0, 0, 1, 0, 0],
                R: 3,
                H: 14,
                E: 0,
                LOB: 6
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 1, 0, 7, 2, 0, 0],
                R: 10,
                H: 17,
                E: 0,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Red Pianta", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Mario", team: "Trocean", AB: 4, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Red Yoshi", team: "Trocean", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Kimmy", team: "Trocean", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Koopa", team: "Trocean", AB: 3, H: 3, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Dark Bones", team: "Trocean", AB: 3, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "MLK", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Shy Guy", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Kamek", team: "Trocean", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Funky Kong", team: "Isaac", AB: 4, H: 3, R: 1, RBI: 3, HR: 0, AVG: "0.750" },
            { player: "Betty White", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Tiny Kong", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Donkey Kong", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "J-Nasty", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Brown Kritter", team: "Isaac", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Gramms", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby DK", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Dixie Kong", team: "Isaac", AB: 3, H: 3, R: 2, RBI: 2, HR: 0, AVG: "1.000" },
        ],

        pitchingStats: [
            { player: "Mario", team: "Trocean", IP: 3.2, H: 10, ER: 4, SO: 2, ERA: "7.64" },
            { player: "Red Kamek", team: "Trocean", IP: 0, H: 3, ER: 4, SO: 0, ERA: "999.99" },
            { player: "Red Pianta", team: "Trocean", IP: 2.1, H: 4, ER: 2, SO: 0, ERA: "4.50" },

            { player: "J-Nasty", team: "Isaac", IP: 4.2, H: 11, ER: 3, SO: 0, ERA: "6.46" },
            { player: "Donkey Kong", team: "Isaac", IP: 2.1, H: 3, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game18": {
        id: "Game18",
        awayManager: "Brendan",
        homeManager: "Justave",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [3, 1, 1, 0, 0, 0, 0],
                R: 5,
                H: 17,
                E: 1,
                LOB: 11
            },
            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [1, 4, 1, 7, 1, 1, 0],
                R: 15,
                H: 22,
                E: 2,
                LOB: 8
            }
        },

        battingStats: [
            { player: "Boomerang Bro", team: "Brendan", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Bowser Jr", team: "Brendan", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Bowser", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Dry Bones", team: "Brendan", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Diddler", team: "Brendan", AB: 3, H: 3, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Blue Kamek", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Blue Pianta", team: "Brendan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Shy Guy", team: "Brendan", AB: 3, H: 3, R: 1, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Barry", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Green Toad", team: "Justave", AB: 5, H: 5, R: 4, RBI: 3, HR: 1, AVG: "1.000" },
            { player: "Bob Marley", team: "Justave", AB: 5, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Green Kritter", team: "Justave", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Hammer Bro", team: "Justave", AB: 5, H: 2, R: 2, RBI: 4, HR: 1, AVG: "0.400" },
            { player: "Geek Squad", team: "Justave", AB: 5, H: 3, R: 2, RBI: 3, HR: 2, AVG: "0.600" },
            { player: "Green Dry Bones", team: "Justave", AB: 4, H: 3, R: 2, RBI: 1, HR: 1, AVG: "0.750" },
            { player: "Koopa", team: "Justave", AB: 4, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Green Shy Guy", team: "Justave", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Luigi", team: "Justave", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Blue Pianta", team: "Brendan", IP: 1.2, H: 9, ER: 5, SO: 0, ERA: "21.00" },
            { player: "Bowser", team: "Brendan", IP: 2.2, H: 5, ER: 5, SO: 0, ERA: "13.13" },
            { player: "Bowser Jr", team: "Brendan", IP: 2.2, H: 7, ER: 5, SO: 0, ERA: "13.13" },
            { player: "Blue Kamek", team: "Brendan", IP: 0.2, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Bob Marley", team: "Justave", IP: 1.1, H: 9, ER: 4, SO: 0, ERA: "21.00" },
            { player: "Luigi", team: "Justave", IP: 5.2, H: 8, ER: 1, SO: 2, ERA: "1.24" },
        ]
    },
    "Game19": {
        id: "Game19",
        awayManager: "THANdrew",
        homeManager: "James",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [1, 0, 2, 1, 0, 1, 0],
                R: 5,
                H: 16,
                E: 0,
                LOB: 8
            },
            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [3, 0, 1, 0, 0, 0, 2],
                R: 6,
                H: 14,
                E: 0,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 4, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.500" },
            { player: "Petey Piranha", team: "James", AB: 4, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Wiggler", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Zekrom", team: "James", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Yellow Pianta", team: "James", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Toad", team: "James", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Cascade", team: "James", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Blue Noki", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Abu Patel", team: "James", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Nose", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Waluigi", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Red Kritter", team: "THANdrew", AB: 4, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.250" },
            { player: "Fire Bro", team: "THANdrew", AB: 4, H: 3, R: 2, RBI: 1, HR: 1, AVG: "0.750" },
            { player: "Larry Cuc", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Blue Kritter", team: "THANdrew", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Green Kamek", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Green Paratroopa", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Noki", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Birdo", team: "James", IP: 2, H: 9, ER: 4, SO: 0, ERA: "14.00" },
            { player: "Zekrom", team: "James", IP: 4.2, H: 5, ER: 2, SO: 1, ERA: "3.00" },

            { player: "Green Kamek", team: "THANdrew", IP: 2.2, H: 6, ER: 1, SO: 0, ERA: "2.63" },
            { player: "Waluigi", team: "THANdrew", IP: 0, H: 4, ER: 2, SO: 0, ERA: "999.99" },
            { player: "Red Kritter", team: "THANdrew", IP: 4.1, H: 6, ER: 2, SO: 0, ERA: "3.23" },
        ]
    },
    "Game20": {
        id: "Game20",
        awayManager: "Marge",
        homeManager: "Morgan",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 0, 0, 0, 1, 11, 0],
                R: 12,
                H: 21,
                E: 0,
                LOB: 5
            },
            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [4, 3, 0, 0, 0, 0, 2],
                R: 9,
                H: 14,
                E: 0,
                LOB: 2
            }
        },

        battingStats: [
            { player: "King Boo", team: "Marge", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Chungy", team: "Marge", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Yellow Shy Guy", team: "Marge", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Hamburger", team: "Marge", AB: 4, H: 2, R: 2, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Yellow Toad", team: "Marge", AB: 4, H: 4, R: 2, RBI: 4, HR: 1, AVG: "1.000" },
            { player: "Toadette", team: "Marge", AB: 3, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Peach", team: "Marge", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Yellow Kamek", team: "Marge", AB: 3, H: 3, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Boo", team: "Marge", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },

            { player: "Daisy", team: "Morgan", AB: 4, H: 3, R: 3, RBI: 2, HR: 1, AVG: "0.750" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.500" },
            { player: "Wario", team: "Morgan", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "King K Rool", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.250" },
            { player: "Reshiram", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Daisy", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Baby Mario", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yoshi", team: "Morgan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Daisy", team: "Morgan", IP: 4.2, H: 8, ER: 1, SO: 0, ERA: "1.50" },
            { player: "Yoshi", team: "Morgan", IP: 0.2, H: 8, ER: 5, SO: 0, ERA: "52.50" },
            { player: "Wario", team: "Morgan", IP: 1.2, H: 5, ER: 6, SO: 0, ERA: "25.20" },

            { player: "Boo", team: "Marge", IP: 0.2, H: 5, ER: 4, SO: 0, ERA: "42.00" },
            { player: "Peach", team: "Marge", IP: 5.2, H: 7, ER: 4, SO: 0, ERA: "4.94" },
            { player: "King Boo", team: "Marge", IP: 0.2, H: 2, ER: 1, SO: 0, ERA: "10.50" },
        ]
    },
    "Game21": {
        id: "Game21",
        awayManager: "Isaac",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 0, 0, 1, 0, 0, 0],
                R: 1,
                H: 8,
                E: 0,
                LOB: 1
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [2, 2, 1, 0, 0, 0, 0],
                R: 5,
                H: 13,
                E: 0,
                LOB: 2
            }
        },

        battingStats: [
            { player: "Nose", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Waluigi", team: "THANdrew", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Kritter", team: "THANdrew", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Fire Bro", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Larry Cuc", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Kritter", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Kamek", team: "THANdrew", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Paratroopa", team: "THANdrew", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Noki", team: "THANdrew", AB: 2, H: 2, R: 0, RBI: 0, HR: 0, AVG: "1.000" },

            { player: "Funky Kong", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Betty White", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Tiny Kong", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Donkey Kong", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "J-Nasty", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Brown Kritter", team: "Isaac", AB: 3, H: 3, R: 2, RBI: 1, HR: 1, AVG: "1.000" },
            { player: "Gramms", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Baby DK", team: "Isaac", AB: 2, H: 2, R: 0, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Dixie Kong", team: "Isaac", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Green Kamek", team: "THANdrew", IP: 1, H: 5, ER: 2, SO: 0, ERA: "14.00" },
            { player: "Waluigi", team: "THANdrew", IP: 1.2, H: 5, ER: 3, SO: 0, ERA: "12.60" },
            { player: "Paratroopa", team: "THANdrew", IP: 3.1, H: 3, ER: 0, SO: 0, ERA: "0.00" },

            { player: "J-Nasty", team: "Isaac", IP: 7, H: 8, ER: 1, SO: 0, ERA: "1.00" },
        ]
    },
    "Game22": {
        id: "Game22",
        awayManager: "Marge",
        homeManager: "Morgan",

        game: {
            away: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [2, 0, 3, 2, 1, 3, 0],
                R: 11,
                H: 16,
                E: 1,
                LOB: 3
            },
            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 0, 0, 2, 0, 2, 0],
                R: 4,
                H: 13,
                E: 0,
                LOB: 1
            }
        },

        battingStats: [
            { player: "Daisy", team: "Morgan", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 3, R: 3, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Wario", team: "Morgan", AB: 4, H: 3, R: 3, RBI: 3, HR: 1, AVG: "0.750" },
            { player: "King K Rool", team: "Morgan", AB: 4, H: 3, R: 0, RBI: 4, HR: 0, AVG: "0.750" },
            { player: "Reshiram", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Baby Daisy", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Mario", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Diddy Kong", team: "Morgan", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },

            { player: "Red Toad", team: "Trocean", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Red Pianta", team: "Trocean", AB: 3, H: 3, R: 2, RBI: 3, HR: 1, AVG: "1.000" },
            { player: "Mario", team: "Trocean", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Kimmy", team: "Trocean", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Red Koopa", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Dark Bones", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "MLK", team: "Trocean", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Shy Guy", team: "Trocean", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Red Kamek", team: "Trocean", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Reshiram", team: "Morgan", IP: 5.2, H: 11, ER: 4, SO: 1, ERA: "4.94" },
            { player: "Diddy Kong", team: "Morgan", IP: 1.1, H: 2, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Red Kamek", team: "Trocean", IP: 2, H: 6, ER: 2, SO: 2, ERA: "7.00" },
            { player: "Mario", team: "Trocean", IP: 2, H: 5, ER: 5, SO: 0, ERA: "17.50" },
            { player: "Kimmy", team: "Trocean", IP: 3, H: 5, ER: 3, SO: 0, ERA: "7.00" },
        ]
    },
    "Game23": {
        id: "Game23",
        awayManager: "Justave",
        homeManager: "James",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [2, 0, 0, 0, 0, 0, 0],
                R: 2,
                H: 8,
                E: 0,
                LOB: 3
            },
            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [1, 1, 0, 0, 1, 3, 0],
                R: 6,
                H: 16,
                E: 1,
                LOB: 8
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 4, H: 4, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Kritter", team: "Justave", AB: 4, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 3, R: 1, RBI: 2, HR: 1, AVG: "0.750" },
            { player: "Geek Squad", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Dry Bones", team: "Justave", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Koopa", team: "Justave", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Green Shy Guy", team: "Justave", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Luigi", team: "Justave", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Birdo", team: "James", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Petey Piranha", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Wiggler", team: "James", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Zekrom", team: "James", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yellow Pianta", team: "James", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Blue Toad", team: "James", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Alfonso", team: "James", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Cascade", team: "James", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Yoshi", team: "James", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 7, H: 8, ER: 2, SO: 0, ERA: "2.00" },

            { player: "Birdo", team: "James", IP: 4.2, H: 11, ER: 3, SO: 1, ERA: "4.50" },
            { player: "Alfonso", team: "James", IP: 1.1, H: 5, ER: 3, SO: 0, ERA: "15.75" },
        ]
    },
    "Game24": {
        id: "Game24",
        awayManager: "Brendan",
        homeManager: "Marge",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 0, 0, 0, 4, 0, 2],
                R: 6,
                H: 20,
                E: 0,
                LOB: 10
            },
            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [1, 0, 3, 0, 1, 2, 0],
                R: 7,
                H: 20,
                E: 1,
                LOB: 9
            }
        },

        battingStats: [
            { player: "Boomerang Bro", team: "Brendan", AB: 3, H: 2, R: 2, RBI: 1, HR: 1, AVG: "0.667" },
            { player: "Bowser Jr", team: "Brendan", AB: 4, H: 4, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Bowser", team: "Brendan", AB: 4, H: 3, R: 2, RBI: 5, HR: 2, AVG: "0.750" },
            { player: "Blue Dry Bones", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Diddler", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Pianta", team: "Brendan", AB: 4, H: 4, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Barry", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Blue Shy Guy", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blooper", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "King Boo", team: "Marge", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Chungy", team: "Marge", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Yellow Shy Guy", team: "Marge", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Hamburger", team: "Marge", AB: 4, H: 4, R: 1, RBI: 3, HR: 1, AVG: "1.000" },
            { player: "Yellow Toad", team: "Marge", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Toadette", team: "Marge", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Peach", team: "Marge", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Yellow Kamek", team: "Marge", AB: 4, H: 4, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Boo", team: "Marge", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Blooper", team: "Brendan", IP: 4.1, H: 11, ER: 2, SO: 0, ERA: "3.23" },
            { player: "Bowser Jr", team: "Brendan", IP: 2.2, H: 9, ER: 2, SO: 0, ERA: "5.25" },

            { player: "Boo", team: "Marge", IP: 2, H: 8, ER: 4, SO: 0, ERA: "14.00" },
            { player: "Peach", team: "Marge", IP: 2.2, H: 9, ER: 1, SO: 1, ERA: "2.63" },
            { player: "King Boo", team: "Marge", IP: 1.1, H: 3, ER: 2, SO: 0, ERA: "10.50" },
        ]
    },
    "Game25": {
        id: "Game25",
        awayManager: "Justave",
        homeManager: "Isaac",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 0, 1, 0, 0, 2, 0, 0, 2],
                R: 5,
                H: 19,
                E: 0,
                LOB: 10
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 0, 0, 3, 0, 0, 0, 0],
                R: 5,
                H: 12,
                E: 0,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 5, H: 5, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Bob Marley", team: "Justave", AB: 5, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Kritter", team: "Justave", AB: 5, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Hammer Bro", team: "Justave", AB: 5, H: 3, R: 2, RBI: 3, HR: 1, AVG: "0.600" },
            { player: "Geek Squad", team: "Justave", AB: 5, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.200" },
            { player: "Green Dry Bones", team: "Justave", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Koopa", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Shy Guy", team: "Justave", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Luigi", team: "Justave", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },

            { player: "Funky Kong", team: "Isaac", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Betty White", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Tiny Kong", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Donkey Kong", team: "Isaac", AB: 4, H: 3, R: 1, RBI: 1, HR: 1, AVG: "0.750" },
            { player: "J-Nasty", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Brown Kritter", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Gramms", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby DK", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Dixie Kong", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 7, H: 11, ER: 3, SO: 0, ERA: "3.00" },
            { player: "Luigi", team: "Justave", IP: 2, H: 1, ER: 0, SO: 1, ERA: "0.00" },

            { player: "J-Nasty", team: "Isaac", IP: 8, H: 16, ER: 3, SO: 0, ERA: "2.63" },
            { player: "Donkey Kong", team: "Isaac", IP: 1, H: 3, ER: 2, SO: 0, ERA: "14.00" },
        ]
    },
    "Game26": {
        id: "Game26",
        awayManager: "Marge",
        homeManager: "James",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 0, 0, 0, 1, 0, 0],
                R: 1,
                H: 7,
                E: 0,
                LOB: 2
            },
            home: {
                name: "James",
                color: "#F1C232",
                scores: [0, 2, 2, 1, 4, 4, 0],
                R: 13,
                H: 24,
                E: 0,
                LOB: 8
            }
        },

        battingStats: [
            { player: "King Boo", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Chungy", team: "Marge", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Yellow Shy Guy", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Hamburger", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Yellow Toad", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Toadette", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Peach", team: "Marge", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Yellow Kamek", team: "Marge", AB: 2, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Boo", team: "Marge", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Birdo", team: "James", AB: 5, H: 4, R: 4, RBI: 4, HR: 1, AVG: "0.800" },
            { player: "Petey Piranha", team: "James", AB: 5, H: 3, R: 1, RBI: 2, HR: 1, AVG: "0.600" },
            { player: "Wiggler", team: "James", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Zekrom", team: "James", AB: 4, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.500" },
            { player: "Yellow Pianta", team: "James", AB: 4, H: 3, R: 3, RBI: 1, HR: 1, AVG: "0.750" },
            { player: "Blue Toad", team: "James", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Alfonso", team: "James", AB: 4, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Blue Yoshi", team: "James", AB: 4, H: 4, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Cascade", team: "James", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Boo", team: "Marge", IP: 2, H: 6, ER: 4, SO: 0, ERA: "14.00" },
            { player: "Peach", team: "Marge", IP: 2.2, H: 11, ER: 5, SO: 0, ERA: "13.13" },
            { player: "Yellow Kamek", team: "Marge", IP: .1, H: 3, ER: 1, SO: 0, ERA: "21.00" },
            { player: "King Boo", team: "Marge", IP: .2, H: 3, ER: 3, SO: 0, ERA: "31.50" },
            { player: "Yellow Toad", team: "Marge", IP: .1, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Birdo", team: "James", IP: 7, H: 7, ER: 1, SO: 0, ERA: "1.00" },
        ]
    },
    "Game27": {
        id: "Game27",
        awayManager: "Trocean",
        homeManager: "Brendan",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 0, 0, 2, 9, 0, 3],
                R: 14,
                H: 23,
                E: 0,
                LOB: 8
            },
            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [1, 0, 1, 2, 0, 1, 0],
                R: 5,
                H: 18,
                E: 0,
                LOB: 8
            }
        },

        battingStats: [
            { player: "Red Toad", team: "Trocean", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Red Pianta", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Mario", team: "Trocean", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Kimmy", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Koopa", team: "Trocean", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Dark Bones", team: "Trocean", AB: 4, H: 4, R: 1, RBI: 2, HR: 1, AVG: "1.000" },
            { player: "MLK", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Shy Guy", team: "Trocean", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Claudius", team: "Trocean", AB: 3, H: 3, R: 1, RBI: 0, HR: 0, AVG: "1.000" },

            { player: "Boomerang Bro", team: "Brendan", AB: 5, H: 3, R: 2, RBI: 2, HR: 1, AVG: "0.600" },
            { player: "Bowser Jr", team: "Brendan", AB: 5, H: 4, R: 2, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Bowser", team: "Brendan", AB: 4, H: 2, R: 3, RBI: 3, HR: 1, AVG: "0.500" },
            { player: "Blue Dry Bones", team: "Brendan", AB: 5, H: 3, R: 3, RBI: 3, HR: 1, AVG: "0.600" },
            { player: "Diddler", team: "Brendan", AB: 5, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Blue Pianta", team: "Brendan", AB: 5, H: 3, R: 0, RBI: 4, HR: 0, AVG: "0.600" },
            { player: "Barry", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Shy Guy", team: "Brendan", AB: 4, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Blooper", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Claudius", team: "Trocean", IP: 4, H: 11, ER: 5, SO: 1, ERA: "8.75" },
            { player: "Mario", team: "Trocean", IP: 2, H: 9, ER: 7, SO: 0, ERA: "24.50" },
            { player: "MLK", team: "Trocean", IP: 1, H: 3, ER: 2, SO: 0, ERA: "14.00" },

            { player: "Blooper", team: "Brendan", IP: 4, H: 11, ER: 4, SO: 2, ERA: "7.00" },
            { player: "Bowser Jr", team: "Brendan", IP: 3, H: 7, ER: 1, SO: 0, ERA: "2.33" },
        ]
    },
    "Game28": {
        id: "Game28",
        awayManager: "Morgan",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [3, 0, 5, 0, 0, 0, 0],
                R: 8,
                H: 14,
                E: 0,
                LOB: 5
            },
            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 1, 3, 0, 4, 0, 1],
                R: 19,
                H: 11,
                E: 0,
                LOB: 2
            }
        },

        battingStats: [
            { player: "Daisy", team: "Morgan", AB: 4, H: 1, R: 2, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.250" },
            { player: "Wario", team: "Morgan", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "King K Rool", team: "Morgan", AB: 3, H: 1, R: 1, RBI: 4, HR: 1, AVG: "0.333" },
            { player: "Reshiram", team: "Morgan", AB: 3, H: 2, R: 2, RBI: 3, HR: 1, AVG: "0.667" },
            { player: "Baby Daisy", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Baby Mario", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Diddy Kong", team: "Morgan", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Nose", team: "THANdrew", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Waluigi", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Kritter", team: "THANdrew", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Fire Bro", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Larry Cuc", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Kritter", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Green Kamek", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Green Paratroopa", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Green Noki", team: "THANdrew", AB: 3, H: 1, R: 1, RBI: 4, HR: 1, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Reshiram", team: "Morgan", IP: 2.1, H: 10, ER: 4, SO: 0, ERA: "12.00" },
            { player: "Wario", team: "Morgan", IP: 3.2, H: 4, ER: 4, SO: 0, ERA: "7.64" },
            { player: "Daisy", team: "Morgan", IP: 1, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Green Kamek", team: "THANdrew", IP: 2.2, H: 5, ER: 4, SO: 0, ERA: "10.50" },
            { player: "Waluigi", team: "THANdrew", IP: 2, H: 3, ER: 1, SO: 0, ERA: "3.50" },
            { player: "Blue Kritter", team: "THANdrew", IP: 1.1, H: 3, ER: 4, SO: 0, ERA: "21.00" },
        ]
    },
    "Game29": {
        id: "Game29",
        awayManager: "James",
        homeManager: "Isaac",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [0, 4, 3, 0, 1, 1, 0],
                R: 9,
                H: 21,
                E: 1,
                LOB: 9
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 0, 5, 0, 1, 5],
                R: 11,
                H: 21,
                E: 1,
                LOB: 9
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 5, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Petey Piranha", team: "James", AB: 5, H: 4, R: 1, RBI: 4, HR: 1, AVG: "0.800" },
            { player: "Wiggler", team: "James", AB: 5, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Zekrom", team: "James", AB: 5, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Yellow Pianta", team: "James", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Blue Toad", team: "James", AB: 4, H: 4, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Alfonso", team: "James", AB: 3, H: 2, R: 2, RBI: 4, HR: 0, AVG: "0.250" },
            { player: "Blue Yoshi", team: "James", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Abu Patel", team: "James", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Funky Kong", team: "Isaac", AB: 5, H: 3, R: 3, RBI: 7, HR: 2, AVG: "0.600" },
            { player: "Betty White", team: "Isaac", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Tiny Kong", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Donkey Kong", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "J-Nasty", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Brown Kritter", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Gramms", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Baby DK", team: "Isaac", AB: 4, H: 4, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Dixie Kong", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.750" },
        ],

        pitchingStats: [
            { player: "Birdo", team: "James", IP: 3, H: 7, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Blue Toad", team: "James", IP: 0, H: 3, ER: 5, SO: 0, ERA: "999.99" },
            { player: "Petey Piranha", team: "James", IP: 3.2, H: 5, ER: 2, SO: 0, ERA: "3.82" },
            { player: "Yellow Pianta", team: "James", IP: .1, H: 3, ER: 4, SO: 0, ERA: "84.00" },

            { player: "J-Nasty", team: "Isaac", IP: 2, H: 10, ER: 4, SO: 0, ERA: "14.00" },
            { player: "Donkey Kong", team: "Isaac", IP: 4.1, H: 11, ER: 2, SO: 0, ERA: "3.23" },
            { player: "Dixie Kong", team: "Isaac", IP: 0.2, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game30": {
        id: "Game30",
        awayManager: "Justave",
        homeManager: "Marge",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 0, 7, 0, 0, 2, 1],
                R: 10,
                H: 19,
                E: 0,
                LOB: 6
            },
            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 1, 0, 0, 0, 0, 3],
                R: 4,
                H: 13,
                E: 0,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 4, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Green Kritter", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Hammer Bro", team: "Justave", AB: 3, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.333" },
            { player: "Geek Squad", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Dry Bones", team: "Justave", AB: 3, H: 3, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Koopa", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Shy Guy", team: "Justave", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Luigi", team: "Justave", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "King Boo", team: "Marge", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Chungy", team: "Marge", AB: 4, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Yellow Shy Guy", team: "Marge", AB: 4, H: 1, R: 1, RBI: 3, HR: 0, AVG: "0.250" },
            { player: "Hamburger", team: "Marge", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yellow Toad", team: "Marge", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Toadette", team: "Marge", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Peach", team: "Marge", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Yellow Kamek", team: "Marge", AB: 4, H: 4, R: 2, RBI: 3, HR: 0, AVG: "1.000" },
            { player: "Boo", team: "Marge", AB: 4, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.750" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 2.1, H: 9, ER: 5, SO: 0, ERA: "15.00" },
            { player: "Luigi", team: "Justave", IP: 4.2, H: 10, ER: 5, SO: 1, ERA: "7.50" },

            { player: "Boo", team: "Marge", IP: 5.1, H: 8, ER: 1, SO: 1, ERA: "1.31" },
            { player: "Peach", team: "Marge", IP: 1.2, H: 5, ER: 3, SO: 0, ERA: "12.60" },
        ]
    },
    "Game31": {
        id: "Game31",
        awayManager: "Brendan",
        homeManager: "Morgan",

        game: {
            away: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 0, 6, 1, 0, 3, 0],
                R: 10,
                H: 19,
                E: 0,
                LOB: 8
            },
            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 0, 0, 1, 3, 3, 1],
                R: 8,
                H: 15,
                E: 2,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Daisy", team: "Morgan", AB: 4, H: 2, R: 2, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Dry Bones", team: "Morgan", AB: 5, H: 5, R: 3, RBI: 3, HR: 1, AVG: "1.000" },
            { player: "Wario", team: "Morgan", AB: 5, H: 4, R: 1, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "King K Rool", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 5, HR: 1, AVG: "0.500" },
            { player: "Reshiram", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Baby Daisy", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Baby Mario", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Diddy Kong", team: "Morgan", AB: 3, H: 1, R: 2, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Boomerang Bro", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Bowser Jr", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Bowser", team: "Brendan", AB: 4, H: 2, R: 2, RBI: 3, HR: 2, AVG: "0.500" },
            { player: "Blue Dry Bones", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Diddler", team: "Brendan", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Blue Pianta", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Barry", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Shy Guy", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Blooper", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Reshiram", team: "Morgan", IP: 5, H: 10, ER: 4, SO: 0, ERA: "5.60" },
            { player: "Daisy", team: "Morgan", IP: 2, H: 5, ER: 4, SO: 0, ERA: "14.00" },

            { player: "Blooper", team: "Brendan", IP: 2, H: 8, ER: 6, SO: 0, ERA: "21.00" },
            { player: "Bowser Jr", team: "Brendan", IP: 3, H: 8, ER: 4, SO: 0, ERA: "9.33" },
            { player: "Bowser", team: "Brendan", IP: 2, H: 3, ER: 0, SO: 1, ERA: "0.00" },
        ]
    },
    "Game32": {
        id: "Game32",
        awayManager: "THANdrew",
        homeManager: "Trocean",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [3, 1, 0, 0, 0, 0, 0],
                R: 4,
                H: 16,
                E: 0,
                LOB: 11
            },
            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [2, 1, 0, 0, 0, 0, 2],
                R: 5,
                H: 14,
                E: 0,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Nose", team: "THANdrew", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Waluigi", team: "THANdrew", AB: 4, H: 4, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Red Kritter", team: "THANdrew", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Fire Bro", team: "THANdrew", AB: 4, H: 3, R: 1, RBI: 3, HR: 1, AVG: "0.750" },
            { player: "Larry Cuc", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Kritter", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Kamek", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Paratroopa", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Noki", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },

            { player: "Mario", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Red Pianta", team: "Trocean", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Red Toad", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "MLK", team: "Trocean", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Dark Bones", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Koopa", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Kimmy", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Shy Guy", team: "Trocean", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Yoshi", team: "Trocean", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
        ],

        pitchingStats: [
            { player: "Green Kamek", team: "THANdrew", IP: .2, H: 5, ER: 2, SO: 0, ERA: "21.00" },
            { player: "Waluigi", team: "THANdrew", IP: 5.1, H: 4, ER: 1, SO: 0, ERA: "1.31" },
            { player: "Fire Bro", team: "THANdrew", IP: .2, H: 5, ER: 2, SO: 0, ERA: "21.00" },

            { player: "MLK", team: "Trocean", IP: 3.2, H: 10, ER: 4, SO: 0, ERA: "7.64" },
            { player: "Mario", team: "Trocean", IP: 3.1, H: 6, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game33": {
        id: "Game33",
        awayManager: "Trocean",
        homeManager: "Justave",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 0, 4, 0, 2, 6, 4],
                R: 16,
                H: 21,
                E: 0,
                LOB: 6
            },
            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 0, 0, 3, 0, 0, 1],
                R: 4,
                H: 10,
                E: 0,
                LOB: 3
            }
        },

        battingStats: [
            { player: "Mario", team: "Trocean", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Pianta", team: "Trocean", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Toad", team: "Trocean", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "MLK", team: "Trocean", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Dark Bones", team: "Trocean", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Red Koopa", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Kimmy", team: "Trocean", AB: 3, H: 3, R: 1, RBI: 2, HR: 1, AVG: "1.000" },
            { player: "Shy Guy", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Yoshi", team: "Trocean", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Green Toad", team: "Justave", AB: 5, H: 3, R: 3, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Bob Marley", team: "Justave", AB: 5, H: 4, R: 2, RBI: 3, HR: 0, AVG: "0.800" },
            { player: "Green Kritter", team: "Justave", AB: 5, H: 3, R: 2, RBI: 6, HR: 1, AVG: "0.600" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 3, R: 3, RBI: 3, HR: 1, AVG: "0.750" },
            { player: "Geek Squad", team: "Justave", AB: 5, H: 2, R: 1, RBI: 3, HR: 1, AVG: "0.400" },
            { player: "Green Dry Bones", team: "Justave", AB: 5, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Koopa", team: "Justave", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Shy Guy", team: "Justave", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Luigi", team: "Justave", AB: 4, H: 3, R: 3, RBI: 0, HR: 0, AVG: "0.750" },
        ],

        pitchingStats: [
            { player: "MLK", team: "Trocean", IP: 4.2, H: 8, ER: 6, SO: 0, ERA: "9.00" },
            { player: "Mario", team: "Trocean", IP: 0.1, H: 7, ER: 6, SO: 0, ERA: "126.00" },
            { player: "Shy Guy", team: "Trocean", IP: 1, H: 5, ER: 3, SO: 0, ERA: "21.00" },
            { player: "Dark Bones", team: "Trocean", IP: 1, H: 1, ER: 1, SO: 0, ERA: "7.00" },

            { player: "Bob Marley", team: "Justave", IP: 7, H: 10, ER: 4, SO: 0, ERA: "4.00" },
        ]
    },
    "Game34": {
        id: "Game34",
        awayManager: "Isaac",
        homeManager: "Morgan",

        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [3, 2, 0, 0, 0, 2, 1],
                R: 8,
                H: 20,
                E: 0,
                LOB: 9
            },
            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [3, 0, 0, 0, 0, 1, 1],
                R: 5,
                H: 15,
                E: 1,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Funky Kong", team: "Isaac", AB: 5, H: 5, R: 3, RBI: 3, HR: 2, AVG: "1.000" },
            { player: "Triangle", team: "Isaac", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Tiny Kong", team: "Isaac", AB: 5, H: 4, R: 2, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Donkey Kong", team: "Isaac", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "J-Nasty", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Brown Kritter", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Gramms", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Baby DK", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Dixie Kong", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },

            { player: "Daisy", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Wario", team: "Morgan", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "King K Rool", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 3, HR: 1, AVG: "0.500" },
            { player: "Reshiram", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Baby Daisy", team: "Morgan", AB: 2, H: 0, R: 1, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 3, H: 3, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Baby Mario", team: "Morgan", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Diddy Kong", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "J-Nasty", team: "Isaac", IP: 6, H: 14, ER: 4, SO: 1, ERA: "4.67" },
            { player: "Donkey Kong", team: "Isaac", IP: 1, H: 1, ER: 1, SO: 0, ERA: "7.00" },

            { player: "Reshiram", team: "Morgan", IP: 2.2, H: 10, ER: 5, SO: 0, ERA: "13.13" },
            { player: "Wario", team: "Morgan", IP: 3.2, H: 9, ER: 3, SO: 0, ERA: "5.73" },
            { player: "Daisy", team: "Morgan", IP: 0.2, H: 1, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game35": {
        id: "Game35",
        awayManager: "James",
        homeManager: "Brendan",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [1, 0, 0, 1, 0, 0, 2],
                R: 4,
                H: 16,
                E: 0,
                LOB: 7
            },
            home: {
                name: "James",
                color: "#F1C232",
                scores: [0, 3, 2, 2, 0, 1, 0],
                R: 8,
                H: 19,
                E: 1,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Petey Piranha", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Wiggler", team: "James", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Zekrom", team: "James", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Yellow Pianta", team: "James", AB: 3, H: 3, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Blue Toad", team: "James", AB: 3, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.667" },
            { player: "Alfonso", team: "James", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Blue Yoshi", team: "James", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Abu Patel", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Boomerang Bro", team: "Brendan", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Bowser Jr", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Bowser", team: "Brendan", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Dry Bones", team: "Brendan", AB: 3, H: 3, R: 0, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Diddler", team: "Brendan", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Pianta", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Barry", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Shy Guy", team: "Brendan", AB: 2, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blooper", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Petey Piranha", team: "James", IP: 0.2, H: 3, ER: 1, SO: 0, ERA: "10.50" },
            { player: "Birdo", team: "James", IP: 5, H: 7, ER: 1, SO: 1, ERA: "1.40" },
            { player: "Blue Yoshi", team: "James", IP: 1.1, H: 6, ER: 2, SO: 0, ERA: "10.50" },

            { player: "Blooper", team: "Brendan", IP: 2.1, H: 9, ER: 4, SO: 0, ERA: "12.00" },
            { player: "Bowser Jr", team: "Brendan", IP: 1.2, H: 8, ER: 3, SO: 1, ERA: "12.60" },
            { player: "Bowser", team: "Brendan", IP: 2, H: 2, ER: 1, SO: 0, ERA: "3.50" },
        ]
    },
    "Game36": {
        id: "Game36",
        awayManager: "THANdrew",
        homeManager: "Marge",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 0, 0, 0, 1, 0, 0],
                R: 1,
                H: 6,
                E: 0,
                LOB: 1
            },
            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [3, 0, 0, 0, 3, 0, 0],
                R: 6,
                H: 14,
                E: 0,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Nose", team: "THANdrew", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Waluigi", team: "THANdrew", AB: 2, H: 2, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Red Kritter", team: "THANdrew", AB: 3, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Fire Bro", team: "THANdrew", AB: 3, H: 3, R: 0, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Larry Cuc", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Blue Kritter", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Green Kamek", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Green Paratroopa", team: "THANdrew", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Green Noki", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "King Boo", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Chungy", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Yellow Shy Guy", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Hamburger", team: "Marge", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Yellow Toad", team: "Marge", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Toadette", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Peach", team: "Marge", AB: 3, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Yellow Kamek", team: "Marge", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Boo", team: "Marge", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Green Kamek", team: "THANdrew", IP: 4.2, H: 3, ER: 1, SO: 0, ERA: "1.50" },
            { player: "Waluigi", team: "THANdrew", IP: 2.1, H: 3, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Boo", team: "Marge", IP: 2, H: 9, ER: 3, SO: 0, ERA: "10.50" },
            { player: "Peach", team: "Marge", IP: 4, H: 6, ER: 3, SO: 0, ERA: "5.25" },
        ]
    },
    "Game37": {
        id: "Game37",
        awayManager: "Marge",
        homeManager: "Brendan",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 2, 1, 0, 0, 0, 0],
                R: 3,
                H: 9,
                E: 1,
                LOB: 4
            },
            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [2, 0, 3, 3, 0, 4, 0],
                R: 12,
                H: 19,
                E: 0,
                LOB: 3
            }
        },

        battingStats: [
            { player: "King Boo", team: "Marge", AB: 4, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.500" },
            { player: "Chungy", team: "Marge", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Yellow Shy Guy", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Hamburger", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yellow Toad", team: "Marge", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Toadette", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Peach", team: "Marge", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Yellow Kamek", team: "Marge", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Boo", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Boomerang Bro", team: "Brendan", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Bowser Jr", team: "Brendan", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Bowser", team: "Brendan", AB: 4, H: 3, R: 2, RBI: 3, HR: 1, AVG: "0.750" },
            { player: "Blue Dry Bones", team: "Brendan", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Diddler", team: "Brendan", AB: 4, H: 3, R: 2, RBI: 3, HR: 1, AVG: "0.750" },
            { player: "Blue Pianta", team: "Brendan", AB: 4, H: 4, R: 0, RBI: 4, HR: 0, AVG: "1.000" },
            { player: "Barry", team: "Brendan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Shy Guy", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blooper", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Boo", team: "Marge", IP: 2.2, H: 7, ER: 5, SO: 0, ERA: "13.13" },
            { player: "Peach", team: "Marge", IP: 3, H: 10, ER: 5, SO: 0, ERA: "11.67" },
            { player: "King Boo", team: "Marge", IP: 0.1, H: 2, ER: 2, SO: 0, ERA: "42.00" },

            { player: "Blooper", team: "Brendan", IP: 7, H: 9, ER: 3, SO: 0, ERA: "3.00" },
        ]
    },
    "Game38": {
        id: "Game38",
        awayManager: "Isaac",
        homeManager: "Trocean",

        game: {
            away: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 0, 4, 0, 0, 3, 0],
                R: 7,
                H: 19,
                E: 0,
                LOB: 9
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [2, 0, 0, 0, 0, 1, 0],
                R: 3,
                H: 10,
                E: 1,
                LOB: 3
            }
        },

        battingStats: [
            { player: "Triangle", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Funky Kong", team: "Isaac", AB: 3, H: 2, R: 2, RBI: 2, HR: 2, AVG: "0.667" },
            { player: "Donkey Kong", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.333" },
            { player: "J-Nasty", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Brown Kritter", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Gramms", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Paragoomba", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Jack White", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Tiny Kong", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Red Yoshi", team: "Trocean", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Mario", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Pianta", team: "Trocean", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Red Toad", team: "Trocean", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "MLK", team: "Trocean", AB: 3, H: 1, R: 2, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Dark Bones", team: "Trocean", AB: 4, H: 3, R: 0, RBI: 5, HR: 0, AVG: "0.750" },
            { player: "Kimmy", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Grayson McKean", team: "Trocean", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Michelle Obama", team: "Trocean", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Jack White", team: "Isaac", IP: 2.1, H: 9, ER: 3, SO: 0, ERA: "9.00" },
            { player: "Donkey Kong", team: "Isaac", IP: 4.2, H: 10, ER: 4, SO: 0, ERA: "6.00" },

            { player: "Grayson McKean", team: "Trocean", IP: 7, H: 10, ER: 3, SO: 1, ERA: "3.00" },
        ]
    },
    "Game39": {
        id: "Game39",
        awayManager: "James",
        homeManager: "Justave",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 0, 7, 1, 1, 8, 0],
                R: 17,
                H: 22,
                E: 0,
                LOB: 4
            },
            home: {
                name: "James",
                color: "#F1C232",
                scores: [1, 0, 0, 0, 0, 0, 0],
                R: 1,
                H: 9,
                E: 1,
                LOB: 3
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Petey Piranha", team: "James", AB: 3, H: 3, R: 1, RBI: 1, HR: 1, AVG: "1.000" },
            { player: "Wiggler", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Zekrom", team: "James", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yellow Pianta", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Toad", team: "James", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Alfonso", team: "James", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Yoshi", team: "James", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Abu Patel", team: "James", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Green Toad", team: "Justave", AB: 5, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Bob Marley", team: "Justave", AB: 5, H: 3, R: 2, RBI: 5, HR: 1, AVG: "0.600" },
            { player: "Green Kritter", team: "Justave", AB: 5, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.200" },
            { player: "Hammer Bro", team: "Justave", AB: 5, H: 3, R: 3, RBI: 1, HR: 1, AVG: "0.600" },
            { player: "Geek Squad", team: "Justave", AB: 5, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Green Dry Bones", team: "Justave", AB: 5, H: 4, R: 1, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Koopa", team: "Justave", AB: 5, H: 2, R: 2, RBI: 3, HR: 0, AVG: "0.400" },
            { player: "Green Shy Guy", team: "Justave", AB: 3, H: 2, R: 2, RBI: 3, HR: 0, AVG: "0.667" },
            { player: "Luigi", team: "Justave", AB: 4, H: 3, R: 3, RBI: 0, HR: 0, AVG: "0.750" },
        ],

        pitchingStats: [
            { player: "Petey Piranha", team: "James", IP: 2, H: 4, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Birdo", team: "James", IP: 0.2, H: 5, ER: 5, SO: 1, ERA: "52.50" },
            { player: "Blue Yoshi", team: "James", IP: 2.2, H: 7, ER: 5, SO: 0, ERA: "13.13" },
            { player: "Abu Patel", team: "James", IP: 0.1, H: 6, ER: 7, SO: 0, ERA: "147.00" },
            { player: "Blue Toad", team: "James", IP: 1.1, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Bob Marley", team: "Justave", IP: 6.1, H: 9, ER: 1, SO: 0, ERA: "1.11" },
            { player: "Luigi", team: "Justave", IP: 0.2, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game40": {
        id: "Game40",
        awayManager: "THANdrew",
        homeManager: "Morgan",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 1, 2, 3, 0, 1, 1],
                R: 8,
                H: 15,
                E: 1,
                LOB: 2
            },
            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [4, 0, 0, 2, 0, 3, 0],
                R: 9,
                H: 20,
                E: 0,
                LOB: 10
            }
        },

        battingStats: [
            { player: "Nose", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Waluigi", team: "THANdrew", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Kritter", team: "THANdrew", AB: 4, H: 3, R: 2, RBI: 3, HR: 2, AVG: "0.750" },
            { player: "Fire Bro", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Larry Cuc", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Kritter", team: "THANdrew", AB: 3, H: 2, R: 2, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "Green Kamek", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Green Paratroopa", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Green Noki", team: "THANdrew", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Daisy", team: "Morgan", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 3, R: 2, RBI: 1, HR: 1, AVG: "0.750" },
            { player: "Wario", team: "Morgan", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "King K Rool", team: "Morgan", AB: 4, H: 3, R: 2, RBI: 5, HR: 2, AVG: "0.750" },
            { player: "Reshiram", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Daisy", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Baby Mario", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Diddy Kong", team: "Morgan", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
        ],

        pitchingStats: [
            { player: "Green Kamek", team: "THANdrew", IP: 0.1, H: 3, ER: 3, SO: 0, ERA: "63.00" },
            { player: "Waluigi", team: "THANdrew", IP: 0.2, H: 5, ER: 1, SO: 0, ERA: "10.50" },
            { player: "Larry Cuc", team: "THANdrew", IP: 4.2, H: 10, ER: 4, SO: 1, ERA: "6.00" },
            { player: "Nose", team: "THANdrew", IP: 1, H: 2, ER: 1, SO: 0, ERA: "7.00" },

            { player: "Reshiram", team: "Morgan", IP: 3, H: 10, ER: 6, SO: 0, ERA: "14.00" },
            { player: "Wario", team: "Morgan", IP: 4, H: 5, ER: 2, SO: 0, ERA: "3.50" },
        ]
    },
    "AllStarGame": {
        id: "AllStarGame",
        awayManager: "All-Star East",
        homeManager: "All-Star West",

        game: {
            away: {
                name: "All-Star East",
                color: "#FF0000",
                scores: [2, 0, 8, 1, 0, 0, 1],
                R: 12,
                H: 26,
                E: 0,
                LOB: 11
            },
            home: {
                name: "All-Star West",
                color: "#4A86E8",
                scores: [3, 0, 0, 4, 4, 0, 0],
                R: 11,
                H: 20,
                E: 0,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Green Toad", team: "All-Star East", AB: 5, H: 5, R: 1, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Bob Marley", team: "All-Star East", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Green Kritter", team: "All-Star East", AB: 5, H: 3, R: 3, RBI: 4, HR: 2, AVG: "0.600" },
            { player: "Petey Piranha", team: "All-Star East", AB: 5, H: 5, R: 3, RBI: 3, HR: 2, AVG: "1.000" },
            { player: "Birdo", team: "All-Star East", AB: 5, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Bowser", team: "All-Star East", AB: 5, H: 4, R: 2, RBI: 3, HR: 2, AVG: "0.800" },
            { player: "Boomerang Bro", team: "All-Star East", AB: 5, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.200" },
            { player: "Hamburger", team: "All-Star East", AB: 5, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Blue Pianta", team: "All-Star East", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Red Kritter", team: "All-Star West", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "King K Rool", team: "All-Star West", AB: 5, H: 3, R: 2, RBI: 5, HR: 1, AVG: "0.600" },
            { player: "Brown Kritter", team: "All-Star West", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "J-Nasty", team: "All-Star West", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Donkey Kong", team: "All-Star West", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Funky Kong", team: "All-Star West", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Fire Bro", team: "All-Star West", AB: 4, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.250" },
            { player: "Red Pianta", team: "All-Star West", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Daisy", team: "All-Star West", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "All-Star East", IP: 3.2, H: 8, ER: 3, SO: 0, ERA: "5.73" },
            { player: "Birdo", team: "All-Star East", IP: 0.1, H: 8, ER: 7, SO: 0, ERA: "147.00" },
            { player: "Bowser", team: "All-Star East", IP: 3, H: 4, ER: 1, SO: 0, ERA: "2.33" },

            { player: "J-Nasty", team: "All-Star West", IP: 2, H: 8, ER: 4, SO: 0, ERA: "14.00" },
            { player: "Donkey Kong", team: "All-Star West", IP: 1, H: 8, ER: 7, SO: 0, ERA: "49.00" },
            { player: "Daisy", team: "All-Star West", IP: 2, H: 5, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Brown Kritter", team: "All-Star West", IP: 2, H: 5, ER: 1, SO: 0, ERA: "3.50" },
        ],
    },
    "Game41": {
        id: "Game41",
        awayManager: "James",
        homeManager: "Isaac",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [0, 2, 3, 11, 0, 4, 2],
                R: 22,
                H: 35,
                E: 1,
                LOB: 8
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 0, 6, 2, 0, 8],
                R: 16,
                H: 21,
                E: 1,
                LOB: 2
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 6, H: 3, R: 3, RBI: 4, HR: 1, AVG: "0.500" },
            { player: "Petey Piranha", team: "James", AB: 6, H: 4, R: 3, RBI: 5, HR: 2, AVG: "0.667" },
            { player: "Wiggler", team: "James", AB: 6, H: 4, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Zekrom", team: "James", AB: 6, H: 6, R: 4, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Yellow Pianta", team: "James", AB: 5, H: 4, R: 3, RBI: 2, HR: 0, AVG: "0.800" },
            { player: "Blue Toad", team: "James", AB: 6, H: 4, R: 2, RBI: 3, HR: 0, AVG: "0.667" },
            { player: "Alfonso", team: "James", AB: 5, H: 3, R: 1, RBI: 5, HR: 0, AVG: "0.600" },
            { player: "Blue Yoshi", team: "James", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Cascade", team: "James", AB: 5, H: 4, R: 3, RBI: 1, HR: 0, AVG: "0.800" },

            { player: "Tiny Kong", team: "Isaac", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Betty White", team: "Isaac", AB: 4, H: 3, R: 4, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Funky Kong", team: "Isaac", AB: 5, H: 3, R: 1, RBI: 3, HR: 0, AVG: "0.600" },
            { player: "Donkey Kong", team: "Isaac", AB: 5, H: 3, R: 3, RBI: 3, HR: 1, AVG: "0.600" },
            { player: "J-Nasty", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Brown Kritter", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.250" },
            { player: "Gramms", team: "Isaac", AB: 4, H: 2, R: 2, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Baby DK", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 2, HR: 1, AVG: "0.750" },
            { player: "Dixie Kong", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Petey Piranha", team: "James", IP: 3, H: 5, ER: 1, SO: 0, ERA: "2.33" },
            { player: "Birdo", team: "James", IP: 1.2, H: 6, ER: 7, SO: 0, ERA: "29.40" },
            { player: "Cascade", team: "James", IP: 1.1, H: 9, ER: 6, SO: 0, ERA: "31.50" },
            { player: "Alfonso", team: "James", IP: 1, H: 1, ER: 2, SO: 0, ERA: "14.00" },

            { player: "J-Nasty", team: "Isaac", IP: 3, H: 13, ER: 8, SO: 0, ERA: "18.67" },
            { player: "Donkey Kong", team: "Isaac", IP: 0, H: 9, ER: 8, SO: 0, ERA: "999.99" },
            { player: "Funky Kong", team: "Isaac", IP: 2.1, H: 9, ER: 5, SO: 0, ERA: "15.00" },
            { player: "Gramms", team: "Isaac", IP: 1.2, H: 4, ER: 1, SO: 0, ERA: "4.20" },
        ]
    },
    "Game42": {
        id: "Game42",
        awayManager: "James",
        homeManager: "Isaac",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [0, 1, 5, 0, 0, 2, 4],
                R: 12,
                H: 20,
                E: 1,
                LOB: 7
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 0, 0, 1, 2, 1],
                R: 4,
                H: 13,
                E: 1,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Funky Kong", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Betty White", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Tiny Kong", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Donkey Kong", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 2, HR: 1, AVG: "0.333" },
            { player: "J-Nasty", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Brown Kritter", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Gramms", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Baby DK", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Dixie", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Birdo", team: "James", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Petey Piranha", team: "James", AB: 4, H: 3, R: 2, RBI: 3, HR: 1, AVG: "0.750" },
            { player: "Wiggler", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Zekrom", team: "James", AB: 5, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Yellow Pianta", team: "James", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Toad", team: "James", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Alfonso", team: "James", AB: 4, H: 3, R: 1, RBI: 4, HR: 1, AVG: "0.750" },
            { player: "Blue Yoshi", team: "James", AB: 4, H: 1, R: 2, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Cascade", team: "James", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" }
        ],

        pitchingStats: [
            { player: "J-Nasty", team: "Isaac", IP: 2.1, H: 11, ER: 6, SO: 0, ERA: "18.00" },
            { player: "Dixie Kong", team: "Isaac", IP: 2.2, H: 9, ER: 5, SO: 0, ERA: "13.13" },
            { player: "Gramms", team: "Isaac", IP: 1, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Petey Piranha", team: "James", IP: 1, H: 0, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Birdo", team: "James", IP: 3.1, H: 7, ER: 0, SO: 1, ERA: "0.00" },
            { player: "Zekrom", team: "James", IP: 2.2, H: 6, ER: 4, SO: 0, ERA: "10.50" }
        ]
    },
    "Game43": {
        id: "Game43",
        awayManager: "Isaac",
        homeManager: "James",

        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 1, 0, 1, 0, 0],
                R: 2,
                H: 10,
                E: 0,
                LOB: 5
            },
            home: {
                name: "James",
                color: "#F1C232",
                scores: [0, 3, 0, 2, 3, 6, 0],
                R: 14,
                H: 20,
                E: 0,
                LOB: 3
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Petey Piranha", team: "James", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Wiggler", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Zekrom", team: "James", AB: 4, H: 4, R: 3, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Yellow Pianta", team: "James", AB: 4, H: 3, R: 3, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Blue Toad", team: "James", AB: 4, H: 4, R: 4, RBI: 8, HR: 2, AVG: "1.000" },
            { player: "Alfonso", team: "James", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Blue Yoshi", team: "James", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Cascade", team: "James", AB: 3, H: 3, R: 2, RBI: 3, HR: 1, AVG: "1.000" },

            { player: "Funky Kong", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Betty White", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Tiny Kong", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Donkey Kong", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Justin", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Brown Kritter", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Dixie Kong", team: "Isaac", AB: 3, H: 3, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Baby DK", team: "Isaac", AB: 2, H: 2, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Gramms", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" }
        ],

        pitchingStats: [
            { player: "Petey Piranha", team: "James", IP: 2, H: 1, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Birdo", team: "James", IP: 4.1, H: 9, ER: 2, SO: 0, ERA: "3.23" },
            { player: "Zekrom", team: "James", IP: 0.2, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "J-Nasty", team: "Isaac", IP: 3, H: 9, ER: 3, SO: 0, ERA: "7.00" },
            { player: "Donkey Kong", team: "Isaac", IP: 2.1, H: 9, ER: 7, SO: 0, ERA: "21.00" },
            { player: "Baby DK", team: "Isaac", IP: 0.2, H: 2, ER: 4, SO: 0, ERA: "42.00" }
        ]
    },
    "Game44": {
        id: "Game44",
        awayManager: "Morgan",
        homeManager: "Justave",

        game: {
            away: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 1, 0, 0, 0, 3, 2],
                R: 6,
                H: 16,
                E: 0,
                LOB: 9
            },
            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 5, 0, 0, 3, 0, 0],
                R: 8,
                H: 15,
                E: 1,
                LOB: 2
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Green Kritter", team: "Justave", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Hammer Bro", team: "Justave", AB: 3, H: 3, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Geek Squad", team: "Justave", AB: 3, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Green Dry Bones", team: "Justave", AB: 3, H: 3, R: 0, RBI: 3, HR: 0, AVG: "1.000" },
            { player: "Koopa", team: "Justave", AB: 3, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Green Shy Guy", team: "Justave", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Luigi", team: "Justave", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Daisy", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Dry Bones", team: "Morgan", AB: 5, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Wario", team: "Morgan", AB: 4, H: 3, R: 0, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "King K Rool", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Reshiram", team: "Morgan", AB: 4, H: 2, R: 2, RBI: 1, HR: 1, AVG: "0.500" },
            { player: "Baby Daisy", team: "Morgan", AB: 4, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Baby Mario", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Diddy Kong", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" }
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 5.2, H: 13, ER: 4, SO: 2, ERA: "4.94" },
            { player: "Luigi", team: "Justave", IP: 1.1, H: 3, ER: 1, SO: 0, ERA: "5.25" },

            { player: "Reshiram", team: "Morgan", IP: 5, H: 11, ER: 5, SO: 0, ERA: "7.00" },
            { player: "Daisy", team: "Morgan", IP: 2, H: 4, ER: 1, SO: 3, ERA: "3.50" }
        ]
    },
    "Game45": {
        id: "Game45",
        awayManager: "Morgan",
        homeManager: "Justave",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 1, 0, 1, 4, 0, 1, 0, 0, 0],
                R: 7,
                H: 16,
                E: 2,
                LOB: 7
            },
            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 0, 4, 0, 0, 0, 3, 0, 0, 1],
                R: 8,
                H: 17,
                E: 2,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 5, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Bob Marley", team: "Justave", AB: 5, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Green Kritter", team: "Justave", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Hammer Bro", team: "Justave", AB: 5, H: 3, R: 2, RBI: 4, HR: 2, AVG: "0.600" },
            { player: "Geek Squad", team: "Justave", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Green Dry Bones", team: "Justave", AB: 5, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Koopa", team: "Justave", AB: 5, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Shy Guy", team: "Justave", AB: 5, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Luigi", team: "Justave", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Daisy", team: "Morgan", AB: 5, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Dry Bones", team: "Morgan", AB: 5, H: 4, R: 1, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Wario", team: "Morgan", AB: 5, H: 4, R: 1, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "King K Rool", team: "Morgan", AB: 5, H: 2, R: 2, RBI: 3, HR: 1, AVG: "0.400" },
            { player: "Reshiram", team: "Morgan", AB: 5, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.200" },
            { player: "Baby Daisy", team: "Morgan", AB: 5, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Mario", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Diddy Kong", team: "Morgan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" }
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 4, H: 8, ER: 4, SO: 0, ERA: "7.00" },
            { player: "Luigi", team: "Justave", IP: 5.1, H: 9, ER: 3, SO: 0, ERA: "3.95" },

            { player: "Reshiram", team: "Morgan", IP: 4.1, H: 10, ER: 5, SO: 0, ERA: "8.08" },
            { player: "Daisy", team: "Morgan", IP: 4.2, H: 6, ER: 2, SO: 0, ERA: "3.00" }
        ]
    },
    "Game46": {
        id: "Game46",
        awayManager: "Morgan",
        homeManager: "Justave",

        game: {
            away: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 0, 0, 0, 0, 0, 0],
                R: 0,
                H: 6,
                E: 1,
                LOB: 2
            },
            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 1, 0, 0, 2, 0, 0],
                R: 3,
                H: 13,
                E: 1,
                LOB: 8
            }
        },

        battingStats: [
            { player: "Daisy", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Dry Bones", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Wario", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "King K Rool", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Reshiram", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Baby Daisy", team: "Morgan", AB: 1, H: 1, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby Mario", team: "Morgan", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Diddy Kong", team: "Morgan", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Green Toad", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Kritter", team: "Justave", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Hammer Bro", team: "Justave", AB: 3, H: 2, R: 2, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "Geek Squad", team: "Justave", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Green Dry Bones", team: "Justave", AB: 3, H: 3, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Koopa", team: "Justave", AB: 2, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Green Shy Guy", team: "Justave", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Luigi", team: "Justave", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" }
        ],

        pitchingStats: [
            { player: "Reshiram", team: "Morgan", IP: 4.2, H: 10, ER: 0, SO: 3, ERA: "0.00" },
            { player: "Wario", team: "Morgan", IP: 1.1, H: 3, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Bob Marley", team: "Justave", IP: 7, H: 6, ER: 0, SO: 0, ERA: "3.50" }
        ]
    },
    "Game47": {
        id: "Game47",
        awayManager: "Morgan",
        homeManager: "Justave",

        game: {
            away: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 0, 0, 0, 0, 0, 0],
                R: 0,
                H: 9,
                E: 0,
                LOB: 4
            },
            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [1, 7, 4, 0, 0, 2, 0],
                R: 14,
                H: 22,
                E: 0,
                LOB: 7
            }
        },

        battingStats: [
            { player: "Daisy", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Dry Bones", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Wario", team: "Morgan", AB: 3, H: 3, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "King K Rool", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Reshiram", team: "Morgan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Baby Daisy", team: "Morgan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Yellow Yoshi", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Baby Mario", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Diddy Kong", team: "Morgan", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Green Toad", team: "Justave", AB: 5, H: 4, R: 2, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Bob Marley", team: "Justave", AB: 5, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "Green Kritter", team: "Justave", AB: 4, H: 4, R: 3, RBI: 2, HR: 1, AVG: "1.000" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 3, R: 2, RBI: 6, HR: 2, AVG: "0.750" },
            { player: "Geek Squad", team: "Justave", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Dry Bones", team: "Justave", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Koopa", team: "Justave", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Gray Guy", team: "Justave", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Luigi", team: "Justave", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" }
        ],

        pitchingStats: [
            { player: "Reshiram", team: "Morgan", IP: 1.2, H: 9, ER: 7, SO: 0, ERA: "29.40" },
            { player: "Wario", team: "Morgan", IP: 1.1, H: 7, ER: 5, SO: 0, ERA: "26.25" },
            { player: "Daisy", team: "Morgan", IP: 3, H: 6, ER: 2, SO: 0, ERA: "4.67" },

            { player: "Bob Marley", team: "Justave", IP: 7, H: 9, ER: 0, SO: 0, ERA: "0.00" }
        ]
    },
    "Game48": {
        id: "Game1WS",
        awayManager: "James",
        homeManager: "Justave",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [7, 0, 0, 0, 6, 1, 3],
                R: 17,
                H: 22,
                E: 0,
                LOB: 4
            },
            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [2, 1, 2, 3, 1, 0, 0],
                R: 9,
                H: 16,
                E: 0,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Kritter", team: "Justave", AB: 4, H: 3, R: 3, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 2, R: 2, RBI: 4, HR: 2, AVG: "0.500" },
            { player: "Geek Squad", team: "Justave", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Dry Bones", team: "Justave", AB: 4, H: 4, R: 2, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Koopa", team: "Justave", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Green Shy Guy", team: "Justave", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Luigi", team: "Justave", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },

            { player: "Birdo", team: "James", AB: 5, H: 3, R: 1, RBI: 3, HR: 1, AVG: "0.600" },
            { player: "Petey Piranha", team: "James", AB: 5, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Wiggler", team: "James", AB: 5, H: 2, R: 1, RBI: 3, HR: 1, AVG: "0.400" },
            { player: "Zekrom", team: "James", AB: 5, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Yellow Pianta", team: "James", AB: 5, H: 3, R: 3, RBI: 2, HR: 1, AVG: "0.600" },
            { player: "Blue Toad", team: "James", AB: 5, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Alfonso", team: "James", AB: 4, H: 3, R: 3, RBI: 4, HR: 1, AVG: "0.750" },
            { player: "Blue Yoshi", team: "James", AB: 4, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Cascade", team: "James", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" }
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 0, H: 7, ER: 7, SO: 0, ERA: "999.99" },
            { player: "Luigi", team: "Justave", IP: 4.1, H: 9, ER: 6, SO: 0, ERA: "9.69" },
            { player: "Green Shy Guy", team: "Justave", IP: 2, H: 4, ER: 1, SO: 0, ERA: "3.50" },
            { player: "Koopa", team: "Justave", IP: 0.2, H: 2, ER: 3, SO: 0, ERA: "31.50" },

            { player: "Birdo", team: "James", IP: 3.2, H: 10, ER: 6, SO: 0, ERA: "11.45" },
            { player: "Zekrom", team: "James", IP: 3.1, H: 6, ER: 3, SO: 0, ERA: "6.30" }
        ]
    },
    "Game49": {
        id: "Game49",
        awayManager: "James",
        homeManager: "Justave",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [1, 0, 0, 1, 0, 0, 1, 2, 0, 2],
                R: 7,
                H: 24,
                E: 1,
                LOB: 12
            },
            home: {
                name: "James",
                color: "#F1C232",
                scores: [1, 0, 0, 1, 1, 0, 0, 2, 0, 0],
                R: 5,
                H: 15,
                E: 1,
                LOB: 8
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Justave", AB: 6, H: 5, R: 1, RBI: 1, HR: 0, AVG: "0.833" },
            { player: "Bob Marley", team: "Justave", AB: 6, H: 3, R: 2, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Green Kritter", team: "Justave", AB: 6, H: 5, R: 1, RBI: 3, HR: 1, AVG: "0.833" },
            { player: "Hammer Bro", team: "Justave", AB: 6, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.167" },
            { player: "Geek Squad", team: "Justave", AB: 5, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Dry Bones", team: "Justave", AB: 5, H: 4, R: 0, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Koopa", team: "Justave", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Green Shy Guy", team: "Justave", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Luigi", team: "Justave", AB: 5, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.600" },

            { player: "Birdo", team: "James", AB: 5, H: 3, R: 1, RBI: 3, HR: 1, AVG: "0.600" },
            { player: "Petey Piranha", team: "James", AB: 5, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Wiggler", team: "James", AB: 5, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Zekrom", team: "James", AB: 5, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Yellow Pianta", team: "James", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Blue Toad", team: "James", AB: 5, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Alfonso", team: "James", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Blue Yoshi", team: "James", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Cascade", team: "James", AB: 3, H: 0, R: 1, RBI: 0, HR: 0, AVG: "0.000" }
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 6.1, H: 9, ER: 3, SO: 0, ERA: "3.32" },
            { player: "Luigi", team: "Justave", IP: 2.2, H: 6, ER: 2, SO: 1, ERA: "5.25" },

            { player: "Petey Piranha", team: "James", IP: 1.1, H: 3, ER: 1, SO: 0, ERA: "5.25" },
            { player: "Birdo", team: "James", IP: 4.2, H: 9, ER: 1, SO: 1, ERA: "1.50" },
            { player: "Blue Toad", team: "James", IP: 3.2, H: 12, ER: 5, SO: 0, ERA: "9.55" },
            { player: "Cascade", team: "James", IP: 0.1, H: 1, ER: 0, SO: 0, ERA: "0.00" }
        ]
    },
    "Game50": {
        id: "Game50",
        awayManager: "Justave",
        homeManager: "James",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [0, 0, 0, 0, 5, 0, 2],
                R: 7,
                H: 14,
                E: 3,
                LOB: 4
            },
            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [3, 0, 3, 1, 3, 0, 0],
                R: 10,
                H: 16,
                E: 1,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Petey Piranha", team: "James", AB: 4, H: 1, R: 2, RBI: 3, HR: 1, AVG: "0.250" },
            { player: "Wiggler", team: "James", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Zekrom", team: "James", AB: 3, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Yellow Pianta", team: "James", AB: 4, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Blue Toad", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Alfonso", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Yoshi", team: "James", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Cascade", team: "James", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            
            { player: "Green Toad", team: "Justave", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Kritter", team: "Justave", AB: 4, H: 2, R: 2, RBI: 4, HR: 2, AVG: "0.500" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 3, R: 2, RBI: 3, HR: 2, AVG: "0.750" },
            { player: "Geek Squad", team: "Justave", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Green Dry Bones", team: "Justave", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Koopa", team: "Justave", AB: 2, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Green Shy Guy", team: "Justave", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Luigi", team: "Justave", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" }
        ],

        pitchingStats: [
            { player: "Petey Piranha", team: "James", IP: 0.2, H: 3, ER: 2, SO: 0, ERA: "21.00" },
            { player: "Birdo", team: "James", IP: 1.1, H: 6, ER: 3, SO: 0, ERA: "15.75" },
            { player: "Cascade", team: "James", IP: 2.2, H: 7, ER: 5, SO: 0, ERA: "13.13" },
            { player: "Blue Toad", team: "James", IP: 1.1, H: 0, ER: 0, SO: 0, ERA: "0.00" },
            
            { player: "Bob Marley", team: "Justave", IP: 4.1, H: 10, ER: 3, SO: 0, ERA: "4.85" },
            { player: "Luigi", team: "Justave", IP: 1.2, H: 4, ER: 4, SO: 0, ERA: "16.80" }
        ]
    },
    "Game51": {
        id: "Game51",
        awayManager: "Justave",
        homeManager: "James",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [2, 0, 1, 0, 2, 2, 1],
                R: 8,
                H: 16,
                E: 0,
                LOB: 5
            },
            home: {
                name: "James",
                color: "#FFD966",
                scores: [0, 3, 0, 0, 0, 1, 2],
                R: 6,
                H: 21,
                E: 1,
                LOB: 10
            }
        },

        battingStats: [
            { player: "Birdo", team: "James", AB: 5, H: 3, R: 1, RBI: 5, HR: 0, AVG: "0.600" },
            { player: "Petey Piranha", team: "James", AB: 5, H: 4, R: 0, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Wiggler", team: "James", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Zekrom", team: "James", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Yellow Pianta", team: "James", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Toad", team: "James", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Alfonso", team: "James", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Yoshi", team: "James", AB: 3, H: 3, R: 3, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Cascade", team: "James", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Green Toad", team: "Justave", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Green Kritter", team: "Justave", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 4, R: 4, RBI: 5, HR: 3, AVG: "1.000" },
            { player: "Geek Squad", team: "Justave", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Dry Bones", team: "Justave", AB: 4, H: 4, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Koopa", team: "Justave", AB: 4, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Green Shy Guy", team: "Justave", AB: 2, H: 2, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Luigi", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" }
        ],

        pitchingStats: [
            { player: "Birdo", team: "James", IP: 5, H: 13, ER: 7, SO: 0, ERA: "9.80" },
            { player: "Alfonso", team: "James", IP: 2, H: 8, ER: 1, SO: 0, ERA: "3.50" },

            { player: "Bob Marley", team: "Justave", IP: 1.2, H: 6, ER: 3, SO: 0, ERA: "12.60" },
            { player: "Luigi", team: "Justave", IP: 5.1, H: 15, ER: 3, SO: 0, ERA: "3.94" }
        ]
    }
};
