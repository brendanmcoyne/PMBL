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

export const GamesSeason4: Record<string, GameStats> = {
    "Game1": {
        id: "Game1",
        awayManager: "THANdrew",
        homeManager: "Isaac",
        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 0, 0, 0, 0, 0, 0],
                R: 0,
                H: 7,
                E: 0,
                LOB: 5
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [1, 0, 0, 0, 0, 0, 0],
                R: 1,
                H: 5,
                E: 1,
                LOB: 3
            }
        },

        battingStats: [
            { player: "Larry Cuc", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Kritter", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Hammer Bro", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "King K Rool", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Luigi", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Kamek", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Piggie", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Geek Squad", team: "THANdrew", AB: 2, H: 2, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Toadsworth", team: "THANdrew", AB: 2, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Yellow Pianta", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Zekrom", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Wiggler", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Petey Piranha", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Daisy", team: "Isaac", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Reshiram", team: "Isaac", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby Daisy", team: "Isaac", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Lucia", team: "Isaac", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Kritter", team: "Isaac", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "King K Rool", team: "THANdrew", IP: 4.1, H: 3, ER: 1, SO: 0, ERA: "1.62" },
            { player: "Luigi", team: "THANdrew", IP: 1.2, H: 2, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Baby Daisy", team: "Isaac", IP: 4.1, H: 6, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Bowser", team: "Isaac", IP: 2.2, H: 1, ER: 0, SO: 1, ERA: "0.00" },
        ]
    },
    "Game2": {
        id: "Game2",
        awayManager: "James",
        homeManager: "Trocean",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [7, 0, 0, 1, 1, 0, 1],
                R: 10,
                H: 20,
                E: 0,
                LOB: 8
            },
            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 0, 3, 4, 4, 0, 0],
                R: 11,
                H: 22,
                E: 1,
                LOB: 7
            }
        },

        battingStats: [
            { player: "Bowser Jr", team: "James", AB: 5, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Bowser", team: "James", AB: 5, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.400" },
            { player: "Paratroopa", team: "James", AB: 5, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "King Boo", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Boo", team: "James", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Yellow Magikoopa", team: "James", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Barry", team: "James", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Blue Toad", team: "James", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Abu Patel", team: "James", AB: 4, H: 4, R: 3, RBI: 5, HR: 2, AVG: "1.000" },
            
            { player: "Tiny Kong", team: "Trocean", AB: 4, H: 4, R: 2, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Diddy Kong", team: "Trocean", AB: 4, H: 3, R: 1, RBI: 3, HR: 0, AVG: "0.750" },
            { player: "Donkey Kong", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Sherpa", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Brown Kritter", team: "Trocean", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Tarzan", team: "Trocean", AB: 4, H: 4, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Boomerang Bro", team: "Trocean", AB: 4, H: 1, R: 1, RBI: 2, HR: 1, AVG: "0.250" },
            { player: "Gramms", team: "Trocean", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Baby DK", team: "Trocean", AB: 4, H: 3, R: 3, RBI: 3, HR: 1, AVG: "0.750" },
        ],

        pitchingStats: [
            { player: "Donkey Kong", team: "Trocean", IP: 1.2, H: 8, ER: 7, SO: 1, ERA: "29.40" },
            { player: "Diddy Kong", team: "Trocean", IP: 2.1, H: 4, ER: 1, SO: 0, ERA: "3.00" },
            { player: "Gramms", team: "Trocean", IP: 3, H: 8, ER: 2, SO: 1, ERA: "10.50" },

            { player: "Bowser", team: "James", IP: 3.2, H: 14, ER: 7, SO: 0, ERA: "13.36" },
            { player: "Bowser Jr", team: "James", IP: 2, H: 7, ER: 4, SO: 0, ERA: "14.00" },
            { player: "King Boo", team: "James", IP: .1, H: 1, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game3": {
        id: "Game3",
        awayManager: "Justave",
        homeManager: "Morgan",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 0, 0, 0, 0, 2, 0],
                R: 2,
                H: 7,
                E: 2,
                LOB: 3
            },

            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [1, 2, 2, 0, 5, 2, 0],
                R: 12,
                H: 20,
                E: 0,
                LOB: 8
            }
        },

        battingStats: [
            { player: "Light Blue Yoshi", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Triangle", team: "Justave", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Funky Kong", team: "Justave", AB: 3, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "Smurf", team: "Justave", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Light Blue Shy Guy", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Peach", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Grayson McKean", team: "Justave", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Jake", team: "Justave", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Sabrina", team: "Justave", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Yellow Toad", team: "Morgan", AB: 5, H: 4, R: 1, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Dry Bones", team: "Morgan", AB: 5, H: 2, R: 1, RBI: 4, HR: 0, AVG: "0.400" },
            { player: "Green Kritter", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Bob Marley", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Mario", team: "Morgan", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Kimmy", team: "Morgan", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Kaguya", team: "Morgan", AB: 4, H: 4, R: 3, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Jack White", team: "Morgan", AB: 2, H: 1, R: 2, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Red Toad", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Triangle", team: "Justave", IP: 2.2, H: 8, ER: 4, SO: 0, ERA: "10.50" },
            { player: "Peach", team: "Justave", IP: 1.1, H: 5, ER: 2, SO: 0, ERA: "10.50" },
            { player: "Jake", team: "Justave", IP: 1, H: 5, ER: 5, SO: 0, ERA: "35.00" },
            { player: "Light Blue Yoshi", team: "Justave", IP: 1, H: 2, ER: 1, SO: 0, ERA: "7.00" },

            { player: "Bob Marley", team: "Morgan", IP: 5.1, H: 7, ER: 2, SO: 1, ERA: "2.63" },
            { player: "Mario", team: "Morgan", IP: 1.2, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game4": {
        id: "Game4",
        awayManager: "Brendan",
        homeManager: "Marge",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 2, 0, 1, 2, 0, 0],
                R: 5,
                H: 13,
                E: 0,
                LOB: 5
            },

            home: {
                name: "Marge",
                color: "#6AA84F",
                scores: [1, 0, 2, 0, 0, 2, 2],
                R: 7,
                H: 15,
                E: 0,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Blue Dry Bones", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Red Koopa", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Dark Bones", team: "Brendan", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Antenna", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Fire Bro", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Kamek", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Wario", team: "Brendan", AB: 3, H: 3, R: 1, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Waluigi", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Red Pianta", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Green Dry Bones", team: "Marge", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Miss Jones", team: "Marge", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Luigi", team: "Marge", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Yoshi", team: "Marge", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Birdo", team: "Marge", AB: 4, H: 1, R: 1, RBI: 2, HR: 1, AVG: "0.250" },
            { player: "Purple Yoshi", team: "Marge", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Eugene", team: "Marge", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Purple Toad", team: "Marge", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Blue Pianta", team: "Marge", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Antenna", team: "Brendan", IP: 3.2, H: 9, ER: 3, SO: 1, ERA: "5.73" },
            { player: "Wario", team: "Brendan", IP: 2.2, H: 6, ER: 4, SO: 0, ERA: "10.50" },


            { player: "Blue Pianta", team: "Marge", IP: 2.2, H: 4, ER: 2, SO: 0, ERA: "5.25" },
            { player: "Birdo", team: "Marge", IP: 4.1, H: 9, ER: 3, SO: 1, ERA: "4.85" },
        ]
    },
    "Game5": {
        id: "Game5",
        awayManager: "Brendan",
        homeManager: "Morgan",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 6, 4, 0, 0, 0, 11],
                R: 21,
                H: 35,
                E: 3,
                LOB: 10
            },

            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 4, 2, 0, 0, 4, 1],
                R: 11,
                H: 21,
                E: 0,
                LOB: 9
            }
        },

        battingStats: [
            { player: "Green Dry Bones", team: "Brendan", AB: 6, H: 4, R: 3, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Petey Piranha", team: "Brendan", AB: 6, H: 5, R: 4, RBI: 9, HR: 3, AVG: "0.833" },
            { player: "Bertha", team: "Brendan", AB: 5, H: 4, R: 2, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Funky Kong", team: "Brendan", AB: 6, H: 4, R: 1, RBI: 3, HR: 1, AVG: "0.667" },
            { player: "Dixie Kong", team: "Brendan", AB: 6, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Jake", team: "Brendan", AB: 6, H: 4, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Baby Peach", team: "Brendan", AB: 6, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Wario", team: "Brendan", AB: 4, H: 4, R: 3, RBI: 4, HR: 1, AVG: "1.000" },
            { player: "Waluigi", team: "Brendan", AB: 5, H: 4, R: 3, RBI: 0, HR: 0, AVG: "0.800" },

            { player: "Green Toad", team: "Morgan", AB: 5, H: 4, R: 1, RBI: 2, HR: 0, AVG: "0.800" },
            { player: "Peach", team: "Morgan", AB: 5, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Daisy", team: "Morgan", AB: 5, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Dry Bones", team: "Morgan", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Gramps", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Shy Guy", team: "Morgan", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Antenna", team: "Morgan", AB: 4, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Red Yoshi", team: "Morgan", AB: 2, H: 0, R: 1, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Baby Luigi", team: "Morgan", AB: 3, H: 3, R: 2, RBI: 2, HR: 0, AVG: "1.000" },
        ],

        pitchingStats: [
            { player: "Waluigi", team: "Brendan", IP: 1.1, H: 7, ER: 3, SO: 0, ERA: "15.75" },
            { player: "Wario", team: "Brendan", IP: 4.2, H: 12, ER: 7, SO: 0, ERA: "10.50" },
            { player: "Baby Peach", team: "Brendan", IP: 1, H: 2, ER: 1, SO: 0, ERA: "7.00" },

            { player: "Gramps", team: "Morgan", IP: 1.2, H: 7, ER: 5, SO: 0, ERA: "21.00" },
            { player: "Peach", team: "Morgan", IP: 1, H: 6, ER: 5, SO: 0, ERA: "35.00" },
            { player: "Daisy", team: "Morgan", IP: 3.2, H: 11, ER: 3, SO: 0, ERA: "5.73" },
            { player: "Red Yoshi", team: "Morgan", IP: 0, H: 2, ER: 3, SO: 0, ERA: "999.99" },
            { player: "Dry Bones", team: "Morgan", IP: 0, H: 3, ER: 4, SO: 0, ERA: "0.00" },
            { player: "Shy Guy", team: "Morgan", IP: 1, H: 4, ER: 1, SO: 0, ERA: "7.00" },
        ]
    },
    "Game6": {
        id: "Game6",
        awayManager: "Justave",
        homeManager: "Trocean",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 5, 0, 0, 4, 2, 0],
                R: 11,
                H: 20,
                E: 0,
                LOB: 5
            },

            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 0, 4, 0, 0, 3, 2],
                R: 9,
                H: 22,
                E: 1,
                LOB: 9
            }
        },

        battingStats: [
            { player: "Yoshi", team: "Justave", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Mario", team: "Justave", AB: 5, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Brown Kritter", team: "Justave", AB: 5, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 3, R: 3, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Bob Marley", team: "Justave", AB: 4, H: 4, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Dark Bones", team: "Justave", AB: 4, H: 4, R: 2, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Baby Daisy", team: "Justave", AB: 3, H: 0, R: 1, RBI: 3, HR: 0, AVG: "0.000" },
            { player: "Yellow Yoshi", team: "Justave", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Baby Mario", team: "Justave", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },

            { player: "Tiny Kong", team: "Trocean", AB: 5, H: 4, R: 2, RBI: 3, HR: 1, AVG: "0.800" },
            { player: "Diddy Kong", team: "Trocean", AB: 5, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "Donkey Kong", team: "Trocean", AB: 5, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.400" },
            { player: "Wiggler", team: "Trocean", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "King Boo", team: "Trocean", AB: 4, H: 4, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Sheepa", team: "Trocean", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Monty", team: "Trocean", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Tarzan", team: "Trocean", AB: 4, H: 4, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Baby DK", team: "Trocean", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Justave", IP: 2.1, H: 7, ER: 3, SO: 0, ERA: "9.00" },
            { player: "Yoshi", team: "Justave", IP: 3.1, H: 10, ER: 3, SO: 0, ERA: "6.30" },
            { player: "Mario", team: "Justave", IP: 1.1, H: 5, ER: 3, SO: 0, ERA: "15.75" },

            { player: "King Boo", team: "Trocean", IP: 1, H: 4, ER: 1, SO: 0, ERA: "7.00" },
            { player: "Donkey Kong", team: "Trocean", IP: 3.2, H: 12, ER: 6, SO: 0, ERA: "11.45" },
            { player: "Diddy Kong", team: "Trocean", IP: 0.2, H: 4, ER: 2, SO: 1, ERA: "21.00" },
            { player: "Tarzan", team: "Trocean", IP: 1.2, H: 2, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game7": {
        id: "Game7",
        awayManager: "THANdrew",
        homeManager: "Isaac",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [3, 0, 4, 2, 0, 3, 0],
                R: 12,
                H: 23,
                E: 0,
                LOB: 10
            },

            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [3, 1, 1, 1, 0, 3, 2],
                R: 11,
                H: 21,
                E: 2,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Purple Toad", team: "THANdrew", AB: 5, H: 4, R: 2, RBI: 3, HR: 0, AVG: "0.800" },
            { player: "Abu Patel", team: "THANdrew", AB: 5, H: 3, R: 2, RBI: 4, HR: 1, AVG: "0.600" },
            { player: "Blue Yoshi", team: "THANdrew", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Birdo", team: "THANdrew", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Boomerang Bro", team: "THANdrew", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Blue Kamek", team: "THANdrew", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Diddler", team: "THANdrew", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Shy Guy", team: "THANdrew", AB: 3, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Alfonzo", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Bowser", team: "Isaac", AB: 5, H: 4, R: 4, RBI: 4, HR: 3, AVG: "0.800" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 5, H: 3, R: 3, RBI: 2, HR: 1, AVG: "0.600" },
            { player: "Saber", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Barry", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Blue Toad", team: "Isaac", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Blue Pianta", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 3, HR: 0, AVG: "0.500" },
            { player: "Cascade", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Noki", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
        ],

        pitchingStats: [
            { player: "Blue Kamek", team: "THANdrew", IP: 0.2, H: 5, ER: 3, SO: 0, ERA: "31.50" },
            { player: "Birdo", team: "THANdrew", IP: 6, H: 16, ER: 8, SO: 0, ERA: "9.33" },
            { player: "Abu Patel", team: "THANdrew", IP: 0.1, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Cascade", team: "Isaac", IP: 2.1, H: 9, ER: 3, SO: 0, ERA: "9.00" },
            { player: "Bowser", team: "Isaac", IP: 1.2, H: 8, ER: 6, SO: 1, ERA: "25.20" },
            { player: "Blue Kritter", team: "Isaac", IP: 3, H: 6, ER: 3, SO: 0, ERA: "7.00" },
        ]
    },
    "Game8": {
        id: "Game8",
        awayManager: "Marge",
        homeManager: "James",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 3, 0, 1, 0, 0, 2],
                R: 6,
                H: 13,
                E: 0,
                LOB: 5
            },

            home: {
                name: "James",
                color: "#F1C232",
                scores: [1, 0, 0, 0, 3, 4, 0],
                R: 8,
                H: 17,
                E: 0,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Luigi", team: "Marge", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Piggie", team: "Marge", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Kritter", team: "Marge", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "King K Rool", team: "Marge", AB: 4, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Miss Jones", team: "Marge", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Shy Guy", team: "Marge", AB: 3, H: 1, R: 1, RBI: 2, HR: 1, AVG: "0.333" },
            { player: "Geek Squad", team: "Marge", AB: 3, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.667" },
            { player: "Green Kamek", team: "Marge", AB: 3, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.667" },
            { player: "Yellow Pianta", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Bowser Jr", team: "James", AB: 4, H: 2, R: 2, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Fire Bro", team: "James", AB: 4, H: 4, R: 3, RBI: 4, HR: 2, AVG: "1.000" },
            { player: "Kimmy", team: "James", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Red Kritter", team: "James", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "MLK", team: "James", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Red Toad", team: "James", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Red Pianta", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Jack White", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Paratroopa", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
        ],

        pitchingStats: [
            { player: "Geek Squad", team: "Marge", IP: 2.2, H: 4, ER: 1, SO: 0, ERA: "2.63" },
            { player: "Luigi", team: "Marge", IP: 1.1, H: 6, ER: 2, SO: 0, ERA: "10.50" },
            { player: "Green Kamak", team: "Marge", IP: 1, H: 3, ER: 1, SO: 0, ERA: "7.00" },
            { player: "Yellow Pianta", team: "Marge", IP: 1, H: 4, ER: 4, SO: 0, ERA: "28.00" },

            { player: "Jack White", team: "James", IP: 2.2, H: 6, ER: 3, SO: 0, ERA: "7.88" },
            { player: "Bowser Jr", team: "James", IP: 2.2, H: 4, ER: 1, SO: 1, ERA: "2.63" },
            { player: "Red Pianta", team: "James", IP: 1.2, H: 3, ER: 2, SO: 0, ERA: "8.40" },
        ]
    },
    "Game9": {
        id: "Game9",
        awayManager: "James",
        homeManager: "Justave",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [1, 2, 0, 0, 6, 0, 2],
                R: 11,
                H: 24,
                E: 2,
                LOB: 9
            },

            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [2, 1, 1, 2, 1, 0, 0],
                R: 7,
                H: 13,
                E: 0,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Bowser Jr", team: "James", AB: 5, H: 4, R: 4, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Fire Bro", team: "James", AB: 5, H: 4, R: 3, RBI: 3, HR: 2, AVG: "0.800" },
            { player: "Kimmy", team: "James", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Red Kritter", team: "James", AB: 5, H: 3, R: 1, RBI: 4, HR: 1, AVG: "0.600" },
            { player: "MLK", team: "James", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Red Toad", team: "James", AB: 4, H: 4, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Red Pianta", team: "James", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Yellow Toad", team: "James", AB: 4, H: 3, R: 0, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Zekrom", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Yoshi", team: "Justave", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Mario", team: "Justave", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Brown Kritter", team: "Justave", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 2, R: 2, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Dark Bones", team: "Justave", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Kaguya", team: "Justave", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby Mario", team: "Justave", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Yellow Yoshi", team: "Justave", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Baby Daisy", team: "Justave", AB: 3, H: 3, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
        ],

        pitchingStats: [
            { player: "Zekrom", team: "James", IP: 3.2, H: 10, ER: 5, SO: 0, ERA: "9.55" },
            { player: "Bowser Jr", team: "James", IP: 1.1, H: 2, ER: 0, SO: 2, ERA: "0.00" },
            { player: "MLK", team: "James", IP: 2, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Kaguya", team: "Justave", IP: 1.2, H: 7, ER: 3, SO: 0, ERA: "12.60" },
            { player: "Yoshi", team: "Justave", IP: 3, H: 7, ER: 2, SO: 0, ERA: "4.67" },
            { player: "Mario", team: "Justave", IP: 2, H: 10, ER: 6, SO: 0, ERA: "21.00" },
            { player: "Baby Mario", team: "Justave", IP: 0.1, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game10": {
        id: "Game10",
        awayManager: "Morgan",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [2, 0, 0, 0, 3, 1, 0, 2],
                R: 8,
                H: 15,
                E: 1,
                LOB: 8
            },

            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [1, 1, 3, 0, 0, 0, 1, 0],
                R: 7,
                H: 19,
                E: 3,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Morgan", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Peach", team: "Morgan", AB: 5, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.400" },
            { player: "Daisy", team: "Morgan", AB: 5, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Dry Bones", team: "Morgan", AB: 5, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Gramps", team: "Morgan", AB: 3, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.333" },
            { player: "Shy Guy", team: "Morgan", AB: 4, H: 4, R: 0, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Antenna", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Red Yoshi", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby Luigi", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },

            { player: "Purple Toad", team: "THANdrew", AB: 5, H: 4, R: 2, RBI: 2, HR: 0, AVG: "0.800" },
            { player: "Abu Patel", team: "THANdrew", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Blue Yoshi", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Birdo", team: "THANdrew", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Boomerang Bro", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Blue Kamek", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Diddler", team: "THANdrew", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Blue Shy Guy", team: "THANdrew", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Bonnie", team: "THANdrew", AB: 3, H: 0, R: 1, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Dry Bones", team: "Morgan", IP: 2.1, H: 6, ER: 2, SO: 1, ERA: "6.00" },
            { player: "Daisy", team: "Morgan", IP: 4, H: 9, ER: 3, SO: 0, ERA: "5.25" },
            { player: "Peach", team: "Morgan", IP: 1.2, H: 4, ER: 1, SO: 0, ERA: "4.20" },

            { player: "Birdo", team: "THANdrew", IP: 5.2, H: 10, ER: 5, SO: 1, ERA: "6.18" },
            { player: "Blue Kamek", team: "THANdrew", IP: 1.1, H: 1, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Abu Patel", team: "THANdrew", IP: 1, H: 4, ER: 2, SO: 0, ERA: "14.00" },
        ]
    },
    "Game11": {
        id: "Game11",
        awayManager: "Trocean",
        homeManager: "Isaac",

        game: {
            away: {
                name: "Trocean",
                color: "#9900FF",
                scores: [1, 0, 1, 6, 0, 0, 4],
                R: 12,
                H: 21,
                E: 2,
                LOB: 6
            },

            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [1, 9, 3, 10, 0, 0, 0],
                R: 23,
                H: 31,
                E: 2,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Tiny Kong", team: "Trocean", AB: 5, H: 4, R: 2, RBI: 3, HR: 0, AVG: "0.800" },
            { player: "Diddy Kong", team: "Trocean", AB: 5, H: 4, R: 2, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Donkey Kong", team: "Trocean", AB: 5, H: 4, R: 2, RBI: 3, HR: 2, AVG: "0.800" },
            { player: "Wiggler", team: "Trocean", AB: 5, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "King Boo", team: "Trocean", AB: 4, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Sherpa", team: "Trocean", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Monty Mole", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Tarzan", team: "Trocean", AB: 2, H: 0, R: 1, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby DK", team: "Trocean", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Bowser", team: "Isaac", AB: 4, H: 3, R: 4, RBI: 4, HR: 2, AVG: "0.750" },
            { player: "Blanco", team: "Isaac", AB: 5, H: 3, R: 3, RBI: 3, HR: 1, AVG: "0.600" },
            { player: "Saber", team: "Isaac", AB: 5, H: 4, R: 3, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 4, HR: 1, AVG: "0.750" },
            { player: "Barry", team: "Isaac", AB: 5, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Blue Toad", team: "Isaac", AB: 5, H: 5, R: 3, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Blue Pianta", team: "Isaac", AB: 5, H: 4, R: 1, RBI: 6, HR: 1, AVG: "0.800" },
            { player: "Blue Noki", team: "Isaac", AB: 5, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Yellow Kamek", team: "Isaac", AB: 5, H: 3, R: 3, RBI: 1, HR: 0, AVG: "0.600" },
        ],

        pitchingStats: [
            { player: "Donkey Kong", team: "Trocean", IP: 1.1, H: 6, ER: 6, SO: 0, ERA: "31.50" },
            { player: "Diddy Kong", team: "Trocean", IP: 1.1, H: 6, ER: 5, SO: 1, ERA: "26.25" },
            { player: "King Boo", team: "Trocean", IP: 1, H: 8, ER: 2, SO: 0, ERA: "14.00" },
            { player: "Monty Mole", team: "Trocean", IP: 0, H: 2, ER: 1, SO: 0, ERA: "999.99" },
            { player: "Wiggler", team: "Trocean", IP: 0, H: 5, ER: 0, SO: 0, ERA: "999.99" },
            { player: "Tiny Kong", team: "Trocean", IP: 1.1, H: 5, ER: 3, SO: 0, ERA: "15.75" },
            { player: "Baby DK", team: "Trocean", IP: 1, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Blue Pianta", team: "Isaac", IP: 2.2, H: 6, ER: 1, SO: 0, ERA: "2.63" },
            { player: "Bowser", team: "Isaac", IP: 3.1, H: 11, ER: 8, SO: 0, ERA: "16.80" },
            { player: "Yellow Kamek", team: "Isaac", IP: 1, H: 4, ER: 2, SO: 0, ERA: "14.00" },
        ]
    },
    "Game12": {
        id: "Game12",
        awayManager: "Brendan",
        homeManager: "Marge",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [1, 2, 6, 5, 0, 1, 3],
                R: 18,
                H: 26,
                E: 4,
                LOB: 8
            },

            home: {
                name: "Marge",
                color: "#6AA84F",
                scores: [5, 0, 0, 2, 1, 2, 0],
                R: 10,
                H: 18,
                E: 2,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Luigi", team: "Marge", AB: 5, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Piggie", team: "Marge", AB: 2, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Kritter", team: "Marge", AB: 4, H: 2, R: 2, RBI: 5, HR: 2, AVG: "0.500" },
            { player: "King K Rool", team: "Marge", AB: 4, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.500" },
            { player: "Miss Jones", team: "Marge", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Green Shy Guy", team: "Marge", AB: 3, H: 2, R: 1, RBI: 1, HR: 1, AVG: "0.667" },
            { player: "Geek Squad", team: "Marge", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Kamek", team: "Marge", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Bob Marley", team: "Marge", AB: 2, H: 2, R: 1, RBI: 1, HR: 0, AVG: "1.000" },

            { player: "Green Dry Bones", team: "Brendan", AB: 6, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Petey Piranha", team: "Brendan", AB: 5, H: 2, R: 3, RBI: 5, HR: 2, AVG: "0.400" },
            { player: "Bertha", team: "Brendan", AB: 5, H: 4, R: 0, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Funky Kong", team: "Brendan", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Dixie Kong", team: "Brendan", AB: 4, H: 3, R: 4, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Jake", team: "Brendan", AB: 4, H: 4, R: 2, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Baby Peach", team: "Brendan", AB: 4, H: 2, R: 3, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Wario", team: "Brendan", AB: 5, H: 3, R: 2, RBI: 3, HR: 0, AVG: "0.600" },
            { player: "Waluigi", team: "Brendan", AB: 5, H: 4, R: 3, RBI: 4, HR: 0, AVG: "0.800" },
        ],

        pitchingStats: [
            { player: "Luigi", team: "Marge", IP: 2.1, H: 7, ER: 3, SO: 1, ERA: "9.00" },
            { player: "Green Kamek", team: "Marge", IP: 0, H: 2, ER: 1, SO: 0, ERA: "999.99" },
            { player: "Bob Marley", team: "Marge", IP: 1.1, H: 6, ER: 3, SO: 0, ERA: "15.75" },
            { player: "Green Kritter", team: "Marge", IP: 2, H: 7, ER: 5, SO: 0, ERA: "17.50" },
            { player: "Miss Jones", team: "Marge", IP: 1.1, H: 4, ER: 3, SO: 0, ERA: "15.75" },

            { player: "Wario", team: "Brendan", IP: 3, H: 8, ER: 4, SO: 0, ERA: "9.33" },
            { player: "Waluigi", team: "Brendan", IP: 2, H: 5, ER: 3, SO: 0, ERA: "10.50" },
            { player: "Baby Peach", team: "Brendan", IP: 2, H: 2, ER: 1, SO: 0, ERA: "3.50" },
        ]
    },
    "Game13": {
        id: "Game13",
        awayManager: "Brendan",
        homeManager: "Justave",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 0, 1, 0, 2, 7, 0],
                R: 10,
                H: 17,
                E: 4,
                LOB: 8
            },

            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 0, 3, 0, 0, 6, 2],
                R: 11,
                H: 22,
                E: 0,
                LOB: 9
            }
        },

        battingStats: [
            { player: "Green Dry Bones", team: "Brendan", AB: 5, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.200" },
            { player: "Petey Piranha", team: "Brendan", AB: 4, H: 2, R: 2, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Bertha", team: "Brendan", AB: 4, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Funky Kong", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.250" },
            { player: "Dixie Kong", team: "Brendan", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Jake", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Peach", team: "Brendan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Wario", team: "Brendan", AB: 4, H: 4, R: 3, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Waluigi", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },

            { player: "Gray Shy Guy", team: "Justave", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Tonka", team: "Justave", AB: 5, H: 4, R: 3, RBI: 2, HR: 0, AVG: "0.800" },
            { player: "Claudius", team: "Justave", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Hammer Bro", team: "Justave", AB: 5, H: 3, R: 2, RBI: 3, HR: 1, AVG: "0.600" },
            { player: "Red Kamek", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Kaguya", team: "Justave", AB: 3, H: 3, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Mario", team: "Justave", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "King Boo", team: "Justave", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Boo", team: "Justave", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Waluigi", team: "Brendan", IP: 2, H: 5, ER: 1, SO: 0, ERA: "3.50" },
            { player: "Wario", team: "Brendan", IP: 3.2, H: 13, ER: 2, SO: 0, ERA: "3.82" },
            { player: "Baby Peach", team: "Brendan", IP: 0.1, H: 2, ER: 1, SO: 0, ERA: "21.00" },
            { player: "Dixie Kong", team: "Brendan", IP: 0.2, H: 2, ER: 2, SO: 0, ERA: "21.00" },

            { player: "Boo", team: "Justave", IP: 2.1, H: 2, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Mario", team: "Justave", IP: 2.2, H: 6, ER: 3, SO: 0, ERA: "7.88" },
            { player: "King Boo", team: "Justave", IP: 0.2, H: 6, ER: 7, SO: 0, ERA: "73.50" },
            { player: "Red Kamek", team: "Justave", IP: 0.1, H: 3, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Claudius", team: "Justave", IP: 1, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game14": {
        id: "Game14",
        awayManager: "James",
        homeManager: "Isaac",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [1, 0, 1, 1, 5, 2, 0],
                R: 10,
                H: 22,
                E: 0,
                LOB: 9
            },

            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [1, 5, 0, 0, 0, 0, 0],
                R: 6,
                H: 14,
                E: 2,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Bowser Jr", team: "James", AB: 5, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "Fire Bro", team: "James", AB: 5, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Kimmy", team: "James", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Kritter", team: "James", AB: 5, H: 4, R: 2, RBI: 4, HR: 1, AVG: "0.800" },
            { player: "MLK", team: "James", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Toad", team: "James", AB: 4, H: 3, R: 2, RBI: 2, HR: 1, AVG: "0.750" },
            { player: "Paragoomba", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Paratroopa", team: "James", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Red Koopa", team: "James", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },

            { player: "Bowser", team: "Isaac", AB: 3, H: 3, R: 2, RBI: 5, HR: 2, AVG: "1.000" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Saber", team: "Isaac", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blitter", team: "Isaac", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Barry", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Toad", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Pianta", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Blue Noki", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Yellow Kamek", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
        ],

        pitchingStats: [
            { player: "Paragoomba", team: "James", IP: 1.1, H: 7, ER: 6, SO: 0, ERA: "31.50" },
            { player: "Bowser Jr", team: "James", IP: 3.1, H: 6, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Red Magikoopa", team: "James", IP: 2.2, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Saber", team: "Isaac", IP: 3, H: 7, ER: 3, SO: 0, ERA: "7.00" },
            { player: "Bowser", team: "Isaac", IP: 2, H: 10, ER: 7, SO: 0, ERA: "24.50" },
            { player: "Yellow Kamek", team: "Isaac", IP: 2, H: 5, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game15": {
        id: "Game15",
        awayManager: "Trocean",
        homeManager: "Morgan",

        game: {
            away: {
                name: "Trocean",
                color: "#9900FF",
                scores: [2, 4, 6, 1, 0, 0, 0],
                R: 13,
                H: 24,
                E: 1,
                LOB: 11
            },

            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 1, 1, 0, 6, 4, 3],
                R: 15,
                H: 23,
                E: 3,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Tiny Kong", team: "Trocean", AB: 4, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Diddy Kong", team: "Trocean", AB: 5, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Donkey Kong", team: "Trocean", AB: 5, H: 2, R: 1, RBI: 3, HR: 1, AVG: "0.400" },
            { player: "Gramms", team: "Trocean", AB: 4, H: 1, R: 2, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Brown Kritter", team: "Trocean", AB: 5, H: 2, R: 1, RBI: 3, HR: 0, AVG: "0.400" },
            { player: "Tarzan", team: "Trocean", AB: 4, H: 4, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Monty Mole", team: "Trocean", AB: 5, H: 3, R: 0, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "Wiggler", team: "Trocean", AB: 5, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Baby DK", team: "Trocean", AB: 4, H: 2, R: 2, RBI: 1, HR: 1, AVG: "0.500" },

            { player: "Green Toad", team: "Morgan", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Peach", team: "Morgan", AB: 5, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Daisy", team: "Morgan", AB: 5, H: 4, R: 3, RBI: 3, HR: 1, AVG: "0.800" },
            { player: "Dry Bones", team: "Morgan", AB: 5, H: 5, R: 5, RBI: 3, HR: 1, AVG: "1.000" },
            { player: "Gramps", team: "Morgan", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Shy Guy", team: "Morgan", AB: 3, H: 3, R: 1, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Antenna", team: "Morgan", AB: 3, H: 2, R: 1, RBI: 6, HR: 0, AVG: "0.667" },
            { player: "Red Yoshi", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Baby Luigi", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Wiggler", team: "Trocean", IP: 3.2, H: 8, ER: 2, SO: 0, ERA: "3.82" },
            { player: "Donkey Kong", team: "Trocean", IP: 1.1, H: 10, ER: 8, SO: 0, ERA: "42.00" },
            { player: "Diddy Kong", team: "Trocean", IP: 1.2, H: 5, ER: 4, SO: 0, ERA: "16.80" },

            { player: "Gramps", team: "Morgan", IP: 1, H: 9, ER: 6, SO: 0, ERA: "42.00" },
            { player: "Daisy", team: "Morgan", IP: 1.2, H: 5, ER: 3, SO: 0, ERA: "12.60" },
            { player: "Peach", team: "Morgan", IP: 1.1, H: 5, ER: 2, SO: 0, ERA: "10.50" },
            { player: "Green Toad", team: "Morgan", IP: 1.1, H: 2, ER: 1, SO: 0, ERA: "5.25" },
            { player: "Antenna", team: "Morgan", IP: 2, H: 3, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game16": {
        id: "Game16",
        awayManager: "THANdrew",
        homeManager: "Marge",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [3, 0, 0, 0, 3, 0, 0],
                R: 6,
                H: 16,
                E: 0,
                LOB: 5
            },

            home: {
                name: "Marge",
                color: "#6AA84F",
                scores: [0, 0, 0, 1, 2, 1, 0],
                R: 4,
                H: 12,
                E: 1,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Purple Toad", team: "THANdrew", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Pianta", team: "THANdrew", AB: 4, H: 4, R: 2, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Boomerang Bro", team: "THANdrew", AB: 4, H: 3, R: 1, RBI: 3, HR: 1, AVG: "0.750" },
            { player: "Abu Patel", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Birdo", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Yoshi", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Diddler", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Kamek", team: "THANdrew", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Bonnie", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Luigi", team: "Marge", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Piggie", team: "Marge", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Green Kritter", team: "Marge", AB: 3, H: 3, R: 1, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "King K Rool", team: "Marge", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Miss Jones", team: "Marge", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Green Shy Guy", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Geek Squad", team: "Marge", AB: 3, H: 3, R: 0, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Green Kamek", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Bob Marley", team: "Marge", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
        ],

        pitchingStats: [
            { player: "Blue Kamek", team: "THANdrew", IP: 4, H: 5, ER: 1, SO: 0, ERA: "1.75" },
            { player: "Birdo", team: "THANdrew", IP: 3, H: 7, ER: 3, SO: 0, ERA: "7.00" },

            { player: "Green Kamek", team: "Marge", IP: 0, H: 3, ER: 3, SO: 0, ERA: "999.99" },
            { player: "Luigi", team: "Marge", IP: 3, H: 4, ER: 0, SO: 0, ERA: "0.00" },
            { player: "King K Rool", team: "Marge", IP: 1.2, H: 5, ER: 2, SO: 0, ERA: "8.40" },
            { player: "Green Shy Guy", team: "Marge", IP: 1.1, H: 2, ER: 1, SO: 0, ERA: "5.25" },
            { player: "Bob Marley", team: "Marge", IP: 1, H: 2, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game17": {
        id: "Game17",
        awayManager: "James",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [1, 0, 0, 0, 0, 1, 1],
                R: 3,
                H: 9,
                E: 2,
                LOB: 3
            },

            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [2, 0, 0, 2, 0, 0, 0],
                R: 4,
                H: 12,
                E: 0,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Bowser Jr", team: "James", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Fire Bro", team: "James", AB: 3, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.333" },
            { player: "Kimmy", team: "James", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Red Kritter", team: "James", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "MLK", team: "James", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Toad", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Jack White", team: "James", AB: 3, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Dark Bones", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Koopa", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Purple Toad", team: "THANdrew", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Red Pianta", team: "THANdrew", AB: 3, H: 3, R: 1, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Boomerang Bro", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Abu Patel", team: "THANdrew", AB: 2, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Birdo", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Yoshi", team: "THANdrew", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Diddler", team: "THANdrew", AB: 3, H: 3, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Blue Kamek", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Bonnie", team: "THANdrew", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Birdo", team: "THANdrew", IP: 7, H: 9, ER: 3, SO: 1, ERA: "3.00" },

            { player: "Jack White", team: "James", IP: 3, H: 8, ER: 2, SO: 0, ERA: "4.67" },
            { player: "Bowser Jr", team: "James", IP: 2, H: 4, ER: 2, SO: 0, ERA: "7.00" },
            { player: "Red Toad", team: "James", IP: 1, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game18": {
        id: "Game18",
        awayManager: "Trocean",
        homeManager: "Brendan",

        game: {
            away: {
                name: "Trocean",
                color: "#9900FF",
                scores: [3, 0, 0, 0, 0, 4, 0],
                R: 7,
                H: 16,
                E: 0,
                LOB: 6
            },

            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 2, 7, 0, 5, 0, 0],
                R: 14,
                H: 23,
                E: 2,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Tiny Kong", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Diddy Kong", team: "Trocean", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Donkey Kong", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Sherpa", team: "Trocean", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Brown Kritter", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Gramms", team: "Trocean", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Baby DK", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Yellow Pianta", team: "Trocean", AB: 3, H: 3, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Wiggler", team: "Trocean", AB: 2, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Green Dry Bones", team: "Brendan", AB: 4, H: 4, R: 2, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Petey Piranha", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 3, HR: 1, AVG: "0.500" },
            { player: "Bertha", team: "Brendan", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Funky Kong", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Dixie Kong", team: "Brendan", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Jake", team: "Brendan", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Peach", team: "Brendan", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Wario", team: "Brendan", AB: 4, H: 3, R: 2, RBI: 3, HR: 0, AVG: "0.750" },
            { player: "Waluigi", team: "Brendan", AB: 4, H: 2, R: 2, RBI: 2, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Donkey Kong", team: "Trocean", IP: 2.2, H: 13, ER: 7, SO: 0, ERA: "18.38" },
            { player: "Diddy Kong", team: "Trocean", IP: 1.2, H: 5, ER: 2, SO: 0, ERA: "8.40" },
            { player: "Sherpa", team: "Trocean", IP: 1.2, H: 5, ER: 5, SO: 0, ERA: "21.00" },

            { player: "Wario", team: "Brendan", IP: 4.1, H: 9, ER: 3, SO: 1, ERA: "4.85" },
            { player: "Waluigi", team: "Brendan", IP: 2.2, H: 7, ER: 4, SO: 0, ERA: "10.50" },
        ]
    },
    "Game19": {
        id: "Game19",
        awayManager: "Marge",
        homeManager: "Justave",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [1, 0, 2, 0, 0, 2, 0],
                R: 5,
                H: 12,
                E: 1,
                LOB: 7
            },

            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 1, 0, 3, 3, 0, 0],
                R: 7,
                H: 16,
                E: 1,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Luigi", team: "Marge", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Piggie", team: "Marge", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Green Kritter", team: "Marge", AB: 3, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.333" },
            { player: "King K Rool", team: "Marge", AB: 2, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.500" },
            { player: "Miss Jones", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Shy Guy", team: "Marge", AB: 3, H: 3, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Geek Squad", team: "Marge", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Kamek", team: "Marge", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Bob Marley", team: "Marge", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Gray Shy Guy", team: "Justave", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Tonka", team: "Justave", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Claudius", team: "Justave", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.250" },
            { player: "Red Kamek", team: "Justave", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Kaguya", team: "Justave", AB: 3, H: 3, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Mario", team: "Justave", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "King Boo", team: "Justave", AB: 3, H: 3, R: 1, RBI: 5, HR: 1, AVG: "1.000" },
            { player: "Boo", team: "Justave", AB: 3, H: 3, R: 0, RBI: 1, HR: 0, AVG: "1.000" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Marge", IP: 3, H: 5, ER: 1, SO: 0, ERA: "2.33" },
            { player: "Luigi", team: "Marge", IP: 1, H: 6, ER: 3, SO: 0, ERA: "21.00" },
            { player: "Green Kamek", team: "Marge", IP: 0.2, H: 3, ER: 2, SO: 0, ERA: "21.00" },
            { player: "King K", team: "Marge", IP: 1.1, H: 2, ER: 1, SO: 0, ERA: "5.25" },

            { player: "King Boo", team: "Justave", IP: 2.1, H: 5, ER: 3, SO: 0, ERA: "9.00" },
            { player: "Mario", team: "Justave", IP: 3.2, H: 7, ER: 2, SO: 0, ERA: "3.82" },
            { player: "Boo", team: "Justave", IP: 1, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game20": {
        id: "Game20",
        awayManager: "Isaac",
        homeManager: "Morgan",

        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 0, 0, 1, 1, 2],
                R: 8,
                H: 14,
                E: 2,
                LOB: 6
            },

            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 1, 2, 2, 3, 0, 0],
                R: 4,
                H: 21,
                E: 0,
                LOB: 10
            }
        },

        battingStats: [
            { player: "Bowser", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Saber", team: "Isaac", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 2, HR: 1, AVG: "0.750" },
            { player: "Barry", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Toad", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Pianta", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.333" },
            { player: "Blue Noki", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Yellow Kamek", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Green Toad", team: "Morgan", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Peach", team: "Morgan", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Daisy", team: "Morgan", AB: 4, H: 3, R: 3, RBI: 2, HR: 1, AVG: "0.750" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Danny B", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Shy Guy", team: "Morgan", AB: 4, H: 3, R: 0, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Antenna", team: "Morgan", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Red Yoshi", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Baby Luigi", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
        ],

        pitchingStats: [
            { player: "Blue Pianta", team: "Isaac", IP: 2, H: 7, ER: 2, SO: 0, ERA: "7.00" },
            { player: "Bowser", team: "Isaac", IP: 2.2, H: 12, ER: 6, SO: 1, ERA: "15.75" },
            { player: "Yellow Kamek", team: "Isaac", IP: 1.1, H: 2, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Dry Bones", team: "Morgan", IP: 3.2, H: 4, ER: 0, SO: 1, ERA: "0.00" },
            { player: "Peach", team: "Morgan", IP: 3, H: 10, ER: 4, SO: 1, ERA: "9.33" },
            { player: "Daisy", team: "Morgan", IP: 0.1, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game21": {
        id: "Game21",
        awayManager: "Morgan",
        homeManager: "Trocean",

        game: {
            away: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [1, 0, 3, 3, 0, 1, 0],
                R: 8,
                H: 19,
                E: 2,
                LOB: 9
            },

            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 6, 5, 0, 0, 0, 0],
                R: 11,
                H: 18,
                E: 1,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Morgan", AB: 5, H: 5, R: 4, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Peach", team: "Morgan", AB: 5, H: 4, R: 2, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Daisy", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 3, R: 1, RBI: 4, HR: 1, AVG: "0.750" },
            { player: "Danny B", team: "Morgan", AB: 4, H: 3, R: 0, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Shy Guy", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Antenna", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Yoshi", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Luigi", team: "Morgan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Wiggler", team: "Trocean", AB: 4, H: 3, R: 2, RBI: 3, HR: 0, AVG: "0.750" },
            { player: "Yellow Pianta", team: "Trocean", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Brown Kritter", team: "Trocean", AB: 4, H: 2, R: 2, RBI: 4, HR: 1, AVG: "0.500" },
            { player: "Gramms", team: "Trocean", AB: 2, H: 2, R: 0, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Donkey Kong", team: "Trocean", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Diddy Kong", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby DK", team: "Trocean", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Baby Daisy", team: "Trocean", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Light Blue Yoshi", team: "Trocean", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Danny B", team: "Morgan", IP: 1.2, H: 6, ER: 6, SO: 0, ERA: "25.20" },
            { player: "Peach", team: "Morgan", IP: 1, H: 5, ER: 3, SO: 0, ERA: "21.00" },
            { player: "Daisy", team: "Morgan", IP: 3.1, H: 7, ER: 2, SO: 0, ERA: "4.20" },

            { player: "Wiggler", team: "Trocean", IP: 2.1, H: 6, ER: 4, SO: 0, ERA: "12.00" },
            { player: "Diddy Kong", team: "Trocean", IP: 3, H: 9, ER: 4, SO: 0, ERA: "9.33" },
            { player: "Donkey Kong", team: "Trocean", IP: 1.2, H: 4, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game22": {
        id: "Game22",
        awayManager: "James",
        homeManager: "Marge",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [0, 0, 5, 9, 8, 2, 9],
                R: 33,
                H: 45,
                E: 1,
                LOB: 8
            },

            home: {
                name: "Marge",
                color: "#6AA84F",
                scores: [3, 2, 4, 0, 0, 6, 0],
                R: 15,
                H: 28,
                E: 0,
                LOB: 11
            }
        },

        battingStats: [
            { player: "Bowser Jr", team: "James", AB: 7, H: 7, R: 5, RBI: 3, HR: 0, AVG: "1.000" },
            { player: "Fire Bro", team: "James", AB: 7, H: 7, R: 3, RBI: 9, HR: 1, AVG: "1.000" },
            { player: "Kimmy", team: "James", AB: 7, H: 4, R: 2, RBI: 2, HR: 0, AVG: "0.571" },
            { player: "Red Kritter", team: "James", AB: 7, H: 4, R: 3, RBI: 4, HR: 2, AVG: "0.571" },
            { player: "MLK", team: "James", AB: 7, H: 5, R: 3, RBI: 3, HR: 1, AVG: "0.714" },
            { player: "Red Toad", team: "James", AB: 7, H: 3, R: 2, RBI: 3, HR: 0, AVG: "0.429" },
            { player: "Jack White", team: "James", AB: 7, H: 5, R: 5, RBI: 3, HR: 1, AVG: "0.714" },
            { player: "Dark Bones", team: "James", AB: 7, H: 5, R: 5, RBI: 5, HR: 2, AVG: "0.714" },
            { player: "Red Koopa", team: "James", AB: 6, H: 5, R: 5, RBI: 1, HR: 0, AVG: "0.833" },

            { player: "Luigi", team: "Marge", AB: 6, H: 5, R: 3, RBI: 1, HR: 0, AVG: "0.833" },
            { player: "Piggie", team: "Marge", AB: 6, H: 4, R: 3, RBI: 4, HR: 1, AVG: "0.667" },
            { player: "Green Kritter", team: "Marge", AB: 5, H: 4, R: 3, RBI: 6, HR: 3, AVG: "0.800" },
            { player: "King K Rool", team: "Marge", AB: 5, H: 4, R: 2, RBI: 1, HR: 1, AVG: "0.800" },
            { player: "Miss Jones", team: "Marge", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Green Shy Guy", team: "Marge", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Geek Squad", team: "Marge", AB: 5, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Green Kamek", team: "Marge", AB: 5, H: 4, R: 1, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Bob Marley", team: "Marge", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
        ],

        pitchingStats: [
            { player: "Red Koopa", team: "James", IP: 0.2, H: 5, ER: 2, SO: 0, ERA: "21.00" },
            { player: "Bowser Jr", team: "James", IP: 1.1, H: 6, ER: 3, SO: 0, ERA: "15.75" },
            { player: "Red Kritter", team: "James", IP: 3, H: 9, ER: 4, SO: 0, ERA: "9.33" },
            { player: "Fire Bro", team: "James", IP: 1, H: 5, ER: 6, SO: 1, ERA: "42.00" },
            { player: "Dark Bones", team: "James", IP: 1, H: 3, ER: 0, SO: 0, ERA: "0.00" },

            { player: "King K Rool", team: "Marge", IP: 2, H: 7, ER: 2, SO: 0, ERA: "7.00" },
            { player: "Luigi", team: "Marge", IP: 1, H: 4, ER: 3, SO: 0, ERA: "21.00" },
            { player: "Green Kamek", team: "Marge", IP: 0, H: 3, ER: 3, SO: 0, ERA: "999.99" },
            { player: "Green Kritter", team: "Marge", IP: 1.1, H: 8, ER: 6, SO: 0, ERA: "31.50" },
            { player: "Miss Jones", team: "Marge", IP: 0.1, H: 7, ER: 8, SO: 0, ERA: "168.00" },
            { player: "Bob Marley", team: "Marge", IP: 1.1, H: 7, ER: 4, SO: 0, ERA: "21.00" },
            { player: "Geek Squad", team: "Marge", IP: 0, H: 5, ER: 3, SO: 0, ERA: "999.99" },
            { player: "Piggie", team: "Marge", IP: 1, H: 4, ER: 2, SO: 0, ERA: "14.00" },
        ]
    },
    "Game23": {
        id: "Game23",
        awayManager: "Justave",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 0, 2, 0, 0, 1, 1],
                R: 4,
                H: 13,
                E: 1,
                LOB: 9
            },

            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [1, 0, 2, 0, 5, 0, 0],
                R: 8,
                H: 16,
                E: 1,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Gray Shy Guy", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Tonka", team: "Justave", AB: 4, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Claudius", team: "Justave", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Red Kamek", team: "Justave", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Kaguya", team: "Justave", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Mario", team: "Justave", AB: 4, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.250" },
            { player: "King Boo", team: "Justave", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Boo", team: "Justave", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Purple Toad", team: "THANdrew", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Pianta", team: "THANdrew", AB: 4, H: 4, R: 2, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Boomerang Bro", team: "THANdrew", AB: 4, H: 4, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Abu Patel", team: "THANdrew", AB: 4, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Birdo", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.667" },
            { player: "Blue Yoshi", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Diddler", team: "THANdrew", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Kamek", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Bonnie", team: "THANdrew", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Blue Kamek", team: "THANdrew", IP: 2, H: 4, ER: 1, SO: 0, ERA: "3.50" },
            { player: "Birdo", team: "THANdrew", IP: 5, H: 9, ER: 3, SO: 1, ERA: "4.20" },

            { player: "Boo", team: "Justave", IP: 2, H: 4, ER: 1, SO: 0, ERA: "3.50" },
            { player: "Mario", team: "Justave", IP: 2, H: 9, ER: 6, SO: 0, ERA: "21.00" },
            { player: "King Boo", team: "Justave", IP: 2, H: 3, ER: 1, SO: 0, ERA: "3.50" },
        ]
    },
    "Game24": {
        id: "Game24",
        awayManager: "Brendan",
        homeManager: "Isaac",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 0, 4, 1, 0, 1, 0],
                R: 6,
                H: 16,
                E: 5,
                LOB: 8
            },

            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 0, 2, 4, 0, 1],
                R: 7,
                H: 15,
                E: 1,
                LOB: 9
            }
        },

        battingStats: [
            { player: "Green Dry Bones", team: "Brendan", AB: 4, H: 3, R: 3, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Petey Piranha", team: "Brendan", AB: 4, H: 2, R: 0, RBI: 3, HR: 0, AVG: "0.500" },
            { player: "Bertha", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Funky Kong", team: "Brendan", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Dixie Kong", team: "Brendan", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Jake", team: "Brendan", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Peach", team: "Brendan", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Wario", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Waluigi", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Barry", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Bowser", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Noki", team: "Isaac", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Pianta", team: "Isaac", AB: 2, H: 2, R: 2, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Blue Toad", team: "Isaac", AB: 4, H: 4, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Saber", team: "Isaac", AB: 2, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Cascade", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.667" },
        ],

        pitchingStats: [
            { player: "Saber", team: "Isaac", IP: 2.2, H: 6, ER: 2, SO: 0, ERA: "5.25" },
            { player: "Bowser", team: "Isaac", IP: 4.1, H: 10, ER: 4, SO: 0, ERA: "6.46" },

            { player: "Waluigi", team: "Brendan", IP: 3.2, H: 6, ER: 2, SO: 0, ERA: "3.82" },
            { player: "Wario", team: "Brendan", IP: 2.2, H: 9, ER: 3, SO: 0, ERA: "7.88" },
        ]
    },
    "Game25": {
        id: "Game25",
        awayManager: "Justave",
        homeManager: "James",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [1, 0, 0, 0, 0, 2, 0],
                R: 3,
                H: 15,
                E: 2,
                LOB: 8
            },

            home: {
                name: "James",
                color: "#F1C232",
                scores: [0, 0, 3, 3, 0, 0, 0],
                R: 6,
                H: 12,
                E: 2,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Bowser Jr", team: "James", AB: 3, H: 3, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Fire Bro", team: "James", AB: 2, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Kimmy", team: "James", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Red Kritter", team: "James", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "MLK", team: "James", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Toad", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Jack White", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Dark Bones", team: "James", AB: 3, H: 3, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Red Koopa", team: "James", AB: 3, H: 2, R: 2, RBI: 2, HR: 0, AVG: "0.667" },

            { player: "Yellow Toad", team: "Justave", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Hamburger", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Zekrom", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Red Kamek", team: "Justave", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Kaguya", team: "Justave", AB: 3, H: 3, R: 1, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Mario", team: "Justave", AB: 2, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "King Boo", team: "Justave", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Boo", team: "Justave", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
        ],

        pitchingStats: [
            { player: "Jack White", team: "James", IP: 4.1, H: 8, ER: 1, SO: 0, ERA: "1.62" },
            { player: "Bowser Jr", team: "James", IP: 2.2, H: 7, ER: 1, SO: 0, ERA: "2.63" },

            { player: "King Boo", team: "Justave", IP: 2, H: 5, ER: 2, SO: 0, ERA: "7.00" },
            { player: "Mario", team: "Justave", IP: 2, H: 5, ER: 3, SO: 0, ERA: "10.50" },
            { player: "Boo", team: "Justave", IP: 2, H: 2, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game26": {
        id: "Game26",
        awayManager: "Isaac",
        homeManager: "Trocean",

        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [3, 0, 1, 4, 1, 1, 4],
                R: 14,
                H: 25,
                E: 1,
                LOB: 9
            },

            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 0, 1, 1, 0, 1, 0],
                R: 3,
                H: 11,
                E: 1,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Blue Kritter", team: "Isaac", AB: 5, H: 4, R: 3, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Barry", team: "Isaac", AB: 5, H: 4, R: 3, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 5, H: 4, R: 3, RBI: 3, HR: 1, AVG: "0.800" },
            { player: "Bowser", team: "Isaac", AB: 5, H: 4, R: 3, RBI: 8, HR: 2, AVG: "0.800" },
            { player: "Blue Noki", team: "Isaac", AB: 5, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Pianta", team: "Isaac", AB: 5, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Blue Toad", team: "Isaac", AB: 5, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Saber", team: "Isaac", AB: 5, H: 4, R: 1, RBI: 2, HR: 1, AVG: "0.800" },
            { player: "Cascade", team: "Isaac", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Wiggler", team: "Trocean", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Yellow Pianta", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Brown Kritter", team: "Trocean", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Gramms", team: "Trocean", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Donkey Kong", team: "Trocean", AB: 3, H: 3, R: 2, RBI: 1, HR: 1, AVG: "1.000" },
            { player: "Diddy Kong", team: "Trocean", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Baby DK", team: "Trocean", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Baby Daisy", team: "Trocean", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Light Blue Yoshi", team: "Trocean", AB: 2, H: 0, R: 1, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Blue Pianta", team: "Isaac", IP: 6.1, H: 11, ER: 3, SO: 0, ERA: "3.32" },
            { player: "Bowser", team: "Isaac", IP: 0.2, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Donkey Kong", team: "Trocean", IP: 3, H: 15, ER: 8, SO: 0, ERA: "18.67" },
            { player: "Diddy Kong", team: "Trocean", IP: 1.2, H: 4, ER: 1, SO: 0, ERA: "4.20" },
            { player: "Libloshi", team: "Trocean", IP: 1.1, H: 5, ER: 5, SO: 0, ERA: "26.25" },
            { player: "Baby Daisy", team: "Trocean", IP: 1, H: 1, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game27": {
        id: "Game27",
        awayManager: "THANdrew",
        homeManager: "Morgan",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 2, 0, 0, 2, 7, 5],
                R: 16,
                H: 27,
                E: 1,
                LOB: 10
            },

            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 0, 2, 0, 0, 0, 2],
                R: 4,
                H: 12,
                E: 0,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Green Toad", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Peach", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Daisy", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "Dry Bones", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Danny B", team: "THANdrew", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Shy Guy", team: "THANdrew", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Antenna", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Yoshi", team: "THANdrew", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Baby Luigi", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Purple Toad", team: "Morgan", AB: 6, H: 3, R: 0, RBI: 3, HR: 0, AVG: "0.500" },
            { player: "Red Pianta", team: "Morgan", AB: 6, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Boomerang Bro", team: "Morgan", AB: 5, H: 4, R: 2, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Abu Patel", team: "Morgan", AB: 5, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "Birdo", team: "Morgan", AB: 5, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.200" },
            { player: "Blue Yoshi", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Diddler", team: "Morgan", AB: 5, H: 4, R: 3, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Blue Kamek", team: "Morgan", AB: 4, H: 4, R: 3, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Bonnie", team: "Morgan", AB: 5, H: 4, R: 2, RBI: 5, HR: 1, AVG: "0.800" },
        ],

        pitchingStats: [
            { player: "Birdo", team: "Morgan", IP: 6.1, H: 11, ER: 4, SO: 1, ERA: "4.42" },
            { player: "Blue Kamek", team: "Morgan", IP: 0.2, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Dry Bones", team: "THANdrew", IP: 1.2, H: 6, ER: 2, SO: 0, ERA: "8.40" },
            { player: "Peach", team: "THANdrew", IP: 3.2, H: 9, ER: 2, SO: 1, ERA: "3.82" },
            { player: "Daisy", team: "THANdrew", IP: 0.1, H: 5, ER: 3, SO: 0, ERA: "63.00" },
            { player: "Antenna", team: "THANdrew", IP: 0.2, H: 6, ER: 3, SO: 0, ERA: "31.50" },
            { player: "Red Yoshi", team: "THANdrew", IP: 0.2, H: 1, ER: 4, SO: 0, ERA: "42.00" },
        ]
    },
    "Game28": {
        id: "Game28",
        awayManager: "Marge",
        homeManager: "Brendan",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [1, 5, 0, 1, 0, 2, 0],
                R: 9,
                H: 19,
                E: 0,
                LOB: 7
            },

            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [2, 0, 0, 4, 0, 0, 0],
                R: 6,
                H: 15,
                E: 2,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Green Dry Bones", team: "Brendan", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Petey Piranha", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 3, HR: 1, AVG: "0.500" },
            { player: "Bertha", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Funky Kong", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Dixie Kong", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Jake", team: "Brendan", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Baby Peach", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Wario", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Waluigi", team: "Brendan", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },

            { player: "Luigi", team: "Marge", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Piggie", team: "Marge", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Kritter", team: "Marge", AB: 4, H: 4, R: 3, RBI: 2, HR: 1, AVG: "1.000" },
            { player: "King K Rool", team: "Marge", AB: 4, H: 4, R: 2, RBI: 5, HR: 2, AVG: "1.000" },
            { player: "Miss Jones", team: "Marge", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Cry Guy", team: "Marge", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Geek Squad", team: "Marge", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Kamek", team: "Marge", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Bob Marley", team: "Marge", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Piggie", team: "Marge", IP: 3.1, H: 10, ER: 4, SO: 0, ERA: "8.40" },
            { player: "Luigi", team: "Marge", IP: 3.1, H: 4, ER: 2, SO: 0, ERA: "4.20" },
            { player: "Green Kamek", team: "Marge", IP: 0.1, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Wario", team: "Brendan", IP: 1.2, H: 8, ER: 3, SO: 0, ERA: "12.60" },
            { player: "Waluigi", team: "Brendan", IP: 1.1, H: 5, ER: 1, SO: 0, ERA: "5.25" },
            { player: "Baby Peach", team: "Brendan", IP: 2, H: 5, ER: 2, SO: 0, ERA: "7.00" },
            { player: "Bertha", team: "Brendan", IP: 2, H: 1, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game29": {
        id: "Game29",
        awayManager: "Brendan",
        homeManager: "James",

        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [2, 5, 1, 1, 2, 0, 3],
                R: 14,
                H: 21,
                E: 2,
                LOB: 8
            },

            home: {
                name: "James",
                color: "#F1C232",
                scores: [2, 1, 0, 0, 7, 0, 1],
                R: 11,
                H: 19,
                E: 0,
                LOB: 2
            }
        },

        battingStats: [
            { player: "Bowser Jr", team: "James", AB: 5, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Fire Bro", team: "James", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Kimmy", team: "James", AB: 4, H: 1, R: 2, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Red Kritter", team: "James", AB: 4, H: 3, R: 2, RBI: 5, HR: 2, AVG: "0.750" },
            { player: "MLK", team: "James", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Toad", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Jack White", team: "James", AB: 4, H: 4, R: 2, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Dark Bones", team: "James", AB: 4, H: 3, R: 2, RBI: 3, HR: 1, AVG: "0.750" },
            { player: "Red Koopa", team: "James", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },

            { player: "Blooper", team: "Brendan", AB: 5, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.200" },
            { player: "Petey Piranha", team: "Brendan", AB: 5, H: 3, R: 2, RBI: 3, HR: 2, AVG: "0.600" },
            { player: "Funky Kong", team: "Brendan", AB: 5, H: 4, R: 2, RBI: 5, HR: 2, AVG: "0.800" },
            { player: "Dixie Kong", team: "Brendan", AB: 5, H: 2, R: 2, RBI: 1, HR: 1, AVG: "0.400" },
            { player: "Jake", team: "Brendan", AB: 5, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Baby Peach", team: "Brendan", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Green Dry Bones", team: "Brendan", AB: 5, H: 4, R: 2, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Wario", team: "Brendan", AB: 5, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Waluigi", team: "Brendan", AB: 4, H: 4, R: 2, RBI: 1, HR: 0, AVG: "1.000" },
        ],

        pitchingStats: [
            { player: "Red Koopa", team: "James", IP: 1, H: 5, ER: 4, SO: 1, ERA: "28.00" },
            { player: "Bowser Jr", team: "James", IP: 1.1, H: 4, ER: 3, SO: 0, ERA: "15.75" },
            { player: "Red Kritter", team: "James", IP: 2, H: 8, ER: 4, SO: 0, ERA: "14.00" },
            { player: "Jack White", team: "James", IP: 2.2, H: 8, ER: 3, SO: 0, ERA: "7.88" },

            { player: "Blooper", team: "Brendan", IP: 1.2, H: 6, ER: 3, SO: 0, ERA: "12.60" },
            { player: "Waluigi", team: "Brendan", IP: 2.2, H: 3, ER: 3, SO: 0, ERA: "7.88" },
            { player: "Wario", team: "Brendan", IP: 2.2, H: 10, ER: 5, SO: 0, ERA: "13.13" },
        ]
    },
    "Game30": {
        id: "Game30",
        awayManager: "Morgan",
        homeManager: "Justave",

        game: {
            away: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [7, 0, 0, 0, 0, 0, 0],
                R: 7,
                H: 18,
                E: 3,
                LOB: 7
            },

            home: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 0, 0, 1, 3, 0, 4],
                R: 8,
                H: 19,
                E: 0,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 3, HR: 0, AVG: "0.500" },
            { player: "Peach", team: "Morgan", AB: 4, H: 4, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Daisy", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 3, R: 1, RBI: 4, HR: 1, AVG: "0.750" },
            { player: "Danny B", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Shy Guy", team: "Morgan", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Antenna", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Yoshi", team: "Morgan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Baby Luigi", team: "Morgan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Yellow Toad", team: "Justave", AB: 4, H: 4, R: 3, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Hamburger", team: "Justave", AB: 2, H: 0, R: 1, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Zekrom", team: "Justave", AB: 3, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 4, R: 1, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Red Kamek", team: "Justave", AB: 4, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Kaguya", team: "Justave", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Mario", team: "Justave", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "King Boo", team: "Justave", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Boo", team: "Justave", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Danny B", team: "Morgan", IP: 6, H: 13, ER: 2, SO: 0, ERA: "2.33" },
            { player: "Peach", team: "Morgan", IP: 1, H: 6, ER: 4, SO: 0, ERA: "28.00" },

            { player: "Boo", team: "Justave", IP: 0, H: 4, ER: 4, SO: 0, ERA: "999.99" },
            { player: "Mario", team: "Justave", IP: 1, H: 6, ER: 3, SO: 0, ERA: "21.00" },
            { player: "Red Kamek", team: "Justave", IP: 1.2, H: 3, ER: 0, SO: 1, ERA: "0.00" },
            { player: "King Boo", team: "Justave", IP: 4.1, H: 5, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game31": {
        id: "Game31",
        awayManager: "THANdrew",
        homeManager: "Trocean",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [4, 1, 0, 0, 6, 0, 5],
                R: 16,
                H: 19,
                E: 2,
                LOB: 1
            },

            home: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 0, 1, 0, 9, 0, 4],
                R: 14,
                H: 21,
                E: 2,
                LOB: 9
            }
        },

        battingStats: [
            { player: "Wiggler", team: "THANdrew", AB: 5, H: 4, R: 4, RBI: 3, HR: 1, AVG: "0.800" },
            { player: "Yellow Pianta", team: "THANdrew", AB: 5, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Brown Kritter", team: "THANdrew", AB: 5, H: 2, R: 2, RBI: 4, HR: 0, AVG: "0.400" },
            { player: "Gramms", team: "THANdrew", AB: 3, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Donkey Kong", team: "THANdrew", AB: 5, H: 4, R: 1, RBI: 3, HR: 1, AVG: "0.800" },
            { player: "Diddy Kong", team: "THANdrew", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Baby DK", team: "THANdrew", AB: 5, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.200" },
            { player: "Baby Daisy", team: "THANdrew", AB: 5, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.200" },
            { player: "Light Blue Yoshi", team: "THANdrew", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Purple Toad", team: "Trocean", AB: 5, H: 5, R: 3, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Red Pianta", team: "Trocean", AB: 5, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Boomerang Bro", team: "Trocean", AB: 5, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "Abu Patel", team: "Trocean", AB: 5, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Birdo", team: "Trocean", AB: 3, H: 2, R: 3, RBI: 3, HR: 0, AVG: "0.667" },
            { player: "Blue Yoshi", team: "Trocean", AB: 3, H: 2, R: 2, RBI: 3, HR: 0, AVG: "0.667" },
            { player: "Alfonzo", team: "Trocean", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Blue Kamek", team: "Trocean", AB: 4, H: 2, R: 2, RBI: 4, HR: 1, AVG: "0.500" },
            { player: "Bonnie", team: "Trocean", AB: 3, H: 0, R: 1, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Wiggler", team: "THANdrew", IP: 1.1, H: 5, ER: 4, SO: 0, ERA: "21.00" },
            { player: "Donkey Kong", team: "THANdrew", IP: 3.1, H: 7, ER: 6, SO: 0, ERA: "12.60" },
            { player: "Diddy Kong", team: "THANdrew", IP: 1.1, H: 5, ER: 2, SO: 0, ERA: "10.50" },
            { player: "Brown Kritter", team: "THANdrew", IP: 1, H: 2, ER: 3, SO: 0, ERA: "21.00" },

            { player: "Blue Kamek", team: "Trocean", IP: 3, H: 4, ER: 1, SO: 0, ERA: "2.33" },
            { player: "Birdo", team: "Trocean", IP: 1.1, H: 9, ER: 8, SO: 1, ERA: "42.00" },
            { player: "Alfonzo", team: "Trocean", IP: 2.1, H: 8, ER: 4, SO: 0, ERA: "12.00" },
            { player: "Boomerang Bro", team: "Trocean", IP: 0.1, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game32": {
        id: "Game32",
        awayManager: "Isaac",
        homeManager: "Marge",

        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [3, 0, 0, 0, 1, 3, 6],
                R: 13,
                H: 19,
                E: 6,
                LOB: 6
            },

            home: {
                name: "Marge",
                color: "#6AA84F",
                scores: [1, 0, 3, 5, 1, 0, 4],
                R: 14,
                H: 19,
                E: 1,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Luigi", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Piggie", team: "Isaac", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Kritter", team: "Isaac", AB: 4, H: 2, R: 3, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "King K Rool", team: "Isaac", AB: 5, H: 4, R: 4, RBI: 10, HR: 4, AVG: "0.800" },
            { player: "Miss Jones", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Green Shy Guy", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Geek Squad", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Green Kamek", team: "Isaac", AB: 3, H: 3, R: 0, RBI: 3, HR: 0, AVG: "1.000" },
            { player: "Bob Marley", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Blue Kritter", team: "Marge", AB: 5, H: 3, R: 3, RBI: 7, HR: 3, AVG: "0.600" },
            { player: "Saber", team: "Marge", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Bones", team: "Marge", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Bowser", team: "Marge", AB: 5, H: 3, R: 2, RBI: 2, HR: 1, AVG: "0.600" },
            { player: "Yellow Kamek", team: "Marge", AB: 4, H: 4, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Blue Noki", team: "Marge", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Blue Pianta", team: "Marge", AB: 4, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Blue Toad", team: "Marge", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Cascade", team: "Marge", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "King K Rool", team: "Isaac", IP: 0.2, H: 5, ER: 3, SO: 0, ERA: "31.50" },
            { player: "Luigi", team: "Isaac", IP: 4, H: 5, ER: 1, SO: 1, ERA: "1.75" },
            { player: "Green Kamek", team: "Isaac", IP: 0.2, H: 2, ER: 3, SO: 0, ERA: "31.50" },
            { player: "Green Shy Guy", team: "Isaac", IP: 1, H: 6, ER: 6, SO: 0, ERA: "42.00" },
            { player: "Piggie", team: "Isaac", IP: 0.2, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Saber", team: "Marge", IP: 2.1, H: 10, ER: 4, SO: 0, ERA: "12.00" },
            { player: "Bowser", team: "Marge", IP: 2.1, H: 6, ER: 6, SO: 0, ERA: "18.00" },
            { player: "Yellow Kamek", team: "Marge", IP: 1.1, H: 3, ER: 4, SO: 0, ERA: "21.00" },
        ]
    },
    "Game33": {
        id: "Game33",
        awayManager: "Trocean",
        homeManager: "James",

        game: {
            away: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 0, 0, 2, 2, 0, 2, 0],
                R: 6,
                H: 13,
                E: 2,
                LOB: 4
            },

            home: {
                name: "James",
                color: "#F1C232",
                scores: [3, 0, 0, 2, 1, 0, 1, 1],
                R: 7,
                H: 14,
                E: 1,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Bowser Jr", team: "James", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Fire Bro", team: "James", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Kimmy", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Red Kritter", team: "James", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "MLK", team: "James", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Dark Bones", team: "James", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Red Koopa", team: "James", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Paratroopa", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Paragoomba", team: "James", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },

            { player: "Tiny Kong", team: "Trocean", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Diddy Kong", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Donkey Kong", team: "Trocean", AB: 3, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Tarzan", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Brown Kritter", team: "Trocean", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Gramms", team: "Trocean", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Wiggler", team: "Trocean", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Yellow Pianta", team: "Trocean", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby DK", team: "Trocean", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
        ],

        pitchingStats: [
            { player: "Paragoomba", team: "James", IP: 3.2, H: 5, ER: 1, SO: 0, ERA: "1.91" },
            { player: "Bowser Jr", team: "James", IP: 2.2, H: 4, ER: 3, SO: 0, ERA: "7.88" },
            { player: "Kimmy", team: "James", IP: 1.2, H: 4, ER: 2, SO: 0, ERA: "8.40" },

            { player: "Diddy Kong", team: "Trocean", IP: 2, H: 5, ER: 3, SO: 0, ERA: "10.50" },
            { player: "Donkey Kong", team: "Trocean", IP: 5, H: 9, ER: 3, SO: 0, ERA: "4.20" },
        ]
    },
    "Game34": {
        id: "Game34",
        awayManager: "Marge",
        homeManager: "Morgan",

        game: {
            away: {
                name: "Marge",
                color: "#6AA84F",
                scores: [2, 6, 1, 0, 0, 3, 0],
                R: 12,
                H: 15,
                E: 1,
                LOB: 8
            },

            home: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [2, 0, 0, 0, 1, 3, 0],
                R: 6,
                H: 21,
                E: 3,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Green Toad", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Peach", team: "Morgan", AB: 4, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Daisy", team: "Morgan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Dry Bones", team: "Morgan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Milk", team: "Morgan", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Shy Guy", team: "Morgan", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Antenna", team: "Morgan", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Red Yoshi", team: "Morgan", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Luigi", team: "Morgan", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Luigi", team: "Marge", AB: 5, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Piggie", team: "Marge", AB: 5, H: 4, R: 2, RBI: 3, HR: 0, AVG: "0.800" },
            { player: "Green Kritter", team: "Marge", AB: 5, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.400" },
            { player: "King K Rool", team: "Marge", AB: 5, H: 4, R: 2, RBI: 2, HR: 1, AVG: "0.800" },
            { player: "Miss Jones", team: "Marge", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Green Shy Guy", team: "Marge", AB: 3, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Geek Squad", team: "Marge", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Green Kamek", team: "Marge", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Larry Cuc", team: "Marge", AB: 4, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.750" },
        ],

        pitchingStats: [
            { player: "Dry Bones", team: "Morgan", IP: 1, H: 7, ER: 4, SO: 1, ERA: "28.00" },
            { player: "Peach", team: "Morgan", IP: 1.1, H: 4, ER: 2, SO: 0, ERA: "10.50" },
            { player: "Daisy", team: "Morgan", IP: 4.2, H: 10, ER: 4, SO: 0, ERA: "6.00" },

            { player: "Green Kamek", team: "Marge", IP: 1, H: 4, ER: 2, SO: 0, ERA: "14.00" },
            { player: "Luigi", team: "Marge", IP: 6, H: 11, ER: 4, SO: 0, ERA: "4.67" },
        ]
    },
    "Game35": {
        id: "Game35",
        awayManager: "Isaac",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [1, 1, 0, 1, 0, 0, 1],
                R: 4,
                H: 15,
                E: 0,
                LOB: 7
            },

            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 0, 3, 0, 0, 0, 0],
                R: 3,
                H: 11,
                E: 0,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Purple Toad", team: "THANdrew", AB: 4, H: 4, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Red Pianta", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Boomerang Bro", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Abu Padel", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Birdo", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Yoshi", team: "THANdrew", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Alfonzo", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Kamek", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Bonnie", team: "THANdrew", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 1, HR: 1, AVG: "0.750" },
            { player: "Barry", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Bowser", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Noki", team: "Isaac", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Pianta", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.333" },
            { player: "Blue Toad", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Saber", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Cascade", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
        ],

        pitchingStats: [
            { player: "Birdo", team: "THANdrew", IP: 7, H: 15, ER: 4, SO: 0, ERA: "4.00" },

            { player: "Blue Pianta", team: "Isaac", IP: 2, H: 7, ER: 3, SO: 1, ERA: "10.50" },
            { player: "Bowser", team: "Isaac", IP: 5, H: 8, ER: 1, SO: 1, ERA: "1.40" },
        ]
    },
    "Game36": {
        id: "Game36",
        awayManager: "Justave",
        homeManager: "Brendan",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [0, 2, 1, 1, 1, 0, 0],
                R: 5,
                H: 11,
                E: 1,
                LOB: 5
            },

            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [10, 0, 0, 5, 0, 0, 0],
                R: 15,
                H: 25,
                E: 1,
                LOB: 8
            }
        },

        battingStats: [
            { player: "Bertha", team: "Brendan", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Petey Piranha", team: "Brendan", AB: 5, H: 3, R: 3, RBI: 3, HR: 1, AVG: "0.600" },
            { player: "Funky Kong", team: "Brendan", AB: 5, H: 5, R: 3, RBI: 5, HR: 2, AVG: "1.000" },
            { player: "Dixie Kong", team: "Brendan", AB: 5, H: 4, R: 1, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Jake", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Baby Peach", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Dry Bones", team: "Brendan", AB: 4, H: 4, R: 2, RBI: 2, HR: 1, AVG: "1.000" },
            { player: "Wario", team: "Brendan", AB: 4, H: 2, R: 2, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Waluigi", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Yellow Toad", team: "Justave", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Hamburger", team: "Justave", AB: 4, H: 3, R: 2, RBI: 2, HR: 1, AVG: "0.750" },
            { player: "Zekrom", team: "Justave", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Hammer Bro", team: "Justave", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Red Kamek", team: "Justave", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Kaguya", team: "Justave", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Mario", team: "Justave", AB: 2, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "King Boo", team: "Justave", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Boo", team: "Justave", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Bertha", team: "Brendan", IP: 3, H: 8, ER: 3, SO: 0, ERA: "7.00" },
            { player: "Waluigi", team: "Brendan", IP: 4, H: 3, ER: 2, SO: 0, ERA: "3.50" },

            { player: "King Boo", team: "Justave", IP: 0.1, H: 6, ER: 4, SO: 0, ERA: "84.00" },
            { player: "Mario", team: "Justave", IP: 1.2, H: 7, ER: 5, SO: 0, ERA: "21.00" },
            { player: "Boo", team: "Justave", IP: 1, H: 2, ER: 0, SO: 1, ERA: "0.00" },
            { player: "Red Kamek", team: "Justave", IP: 0.1, H: 1, ER: 2, SO: 0, ERA: "42.00" },
            { player: "Zekrom", team: "Justave", IP: 0.1, H: 5, ER: 3, SO: 0, ERA: "63.00" },
            { player: "Hammer Bro", team: "Justave", IP: 1.1, H: 4, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game37": {
        id: "Game37",
        awayManager: "James",
        homeManager: "Brendan",

        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [0, 0, 2, 1, 5, 4, 0],
                R: 12,
                H: 20,
                E: 4,
                LOB: 8
            },

            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [1, 0, 0, 3, 0, 0, 0],
                R: 4,
                H: 7,
                E: 2,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Blooper", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Petey Piranha", team: "Brendan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Funky Kong", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Dixie Kong", team: "Brendan", AB: 1, H: 1, R: 1, RBI: 3, HR: 1, AVG: "1.000" },
            { player: "Justin Bieber", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Jake", team: "Brendan", AB: 1, H: 0, R: 1, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Green Dry Bones", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Wario", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Waluigi", team: "Brendan", AB: 2, H: 2, R: 0, RBI: 1, HR: 0, AVG: "1.000" },

            { player: "Bowser Jr", team: "James", AB: 5, H: 3, R: 3, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Fire Bro", team: "James", AB: 4, H: 3, R: 2, RBI: 4, HR: 2, AVG: "0.750" },
            { player: "Kimmy", team: "James", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Red Kritter", team: "James", AB: 5, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Jack White", team: "James", AB: 5, H: 2, R: 3, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Dark Bones", team: "James", AB: 4, H: 3, R: 2, RBI: 4, HR: 1, AVG: "0.750" },
            { player: "Red Koopa", team: "James", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Paratroopa", team: "James", AB: 4, H: 4, R: 0, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Paragoomba", team: "James", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Blooper", team: "Brendan", IP: 2.2, H: 3, ER: 2, SO: 1, ERA: "5.25" },
            { player: "Waluigi", team: "Brendan", IP: 1.1, H: 5, ER: 3, SO: 0, ERA: "15.75" },
            { player: "Wario", team: "Brendan", IP: 1.2, H: 8, ER: 6, SO: 0, ERA: "25.20" },
            { player: "Green Dry Bones", team: "Brendan", IP: 1.1, H: 4, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Kimmy", team: "James", IP: 3.2, H: 6, ER: 2, SO: 0, ERA: "3.82" },
            { player: "Bowser Jr", team: "James", IP: 3.1, H: 1, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game38": {
        id: "Game38",
        awayManager: "Trocean",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "Trocean",
                color: "#9900FF",
                scores: [0, 5, 0, 1, 4, 0, 0],
                R: 10,
                H: 23,
                E: 1,
                LOB: 8
            },

            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 3, 1, 3, 1, 6, 0],
                R: 14,
                H: 22,
                E: 0,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Purple Toad", team: "Trocean", AB: 5, H: 4, R: 1, RBI: 3, HR: 0, AVG: "0.800" },
            { player: "Red Pianta", team: "Trocean", AB: 5, H: 3, R: 1, RBI: 3, HR: 0, AVG: "0.600" },
            { player: "Boomerang Bro", team: "Trocean", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Abu Patel", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Birdo", team: "Trocean", AB: 4, H: 3, R: 3, RBI: 2, HR: 1, AVG: "0.750" },
            { player: "Blue Yoshi", team: "Trocean", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Diddler", team: "Trocean", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Blue Kamek", team: "Trocean", AB: 4, H: 4, R: 3, RBI: 3, HR: 0, AVG: "1.000" },
            { player: "Bonnie", team: "Trocean", AB: 2, H: 1, R: 2, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Tiny Kong", team: "THANdrew", AB: 5, H: 4, R: 2, RBI: 1, HR: 0, AVG: "0.800" },
            { player: "Diddy Kong", team: "THANdrew", AB: 5, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Donkey Kong", team: "THANdrew", AB: 5, H: 4, R: 3, RBI: 6, HR: 1, AVG: "0.800" },
            { player: "Tarzan", team: "THANdrew", AB: 4, H: 4, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Monty Mole", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Gramms", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Brown Kritter", team: "THANdrew", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Wiggler", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby DK", team: "THANdrew", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
        ],

        pitchingStats: [
            { player: "Blue Kamek", team: "Trocean", IP: 1.1, H: 5, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Birdo", team: "Trocean", IP: 2.1, H: 10, ER: 5, SO: 0, ERA: "15.00" },
            { player: "Boomerang Bro", team: "Trocean", IP: 1.2, H: 7, ER: 5, SO: 0, ERA: "21.00" },
            { player: "Abu Patel", team: "Trocean", IP: 1.2, H: 1, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Wiggler", team: "THANdrew", IP: 1.2, H: 7, ER: 3, SO: 0, ERA: "12.60" },
            { player: "Donkey Kong", team: "THANdrew", IP: 3.2, H: 11, ER: 7, SO: 0, ERA: "13.36" },
            { player: "Diddy Kong", team: "THANdrew", IP: 0.1, H: 5, ER: 4, SO: 0, ERA: "84.00" },
            { player: "Tiny Kong", team: "THANdrew", IP: 0.1, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game39": {
        id: "Game39",
        awayManager: "Morgan",
        homeManager: "Isaac",

        game: {
            away: {
                name: "Morgan",
                color: "#FF00FF",
                scores: [0, 0, 0, 0, 0, 0, 0],
                R: 0,
                H: 11,
                E: 2,
                LOB: 6
            },

            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 7, 0, 0, 1, 0, 0],
                R: 8,
                H: 17,
                E: 0,
                LOB: 10
            }
        },

        battingStats: [
            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Saber", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Bowser", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 3, HR: 1, AVG: "0.500" },
            { player: "Toadsworth", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Toad", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Pianta", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Noki", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Eugene", team: "Isaac", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "Green Toad", team: "Morgan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Peach", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Daisy", team: "Morgan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Dry Bones", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Milk", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Shy Guy", team: "Morgan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Antenna", team: "Morgan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Red Yoshi", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Baby Luigi", team: "Morgan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
        ],

        pitchingStats: [
            { player: "Toadsworth", team: "Isaac", IP: 3, H: 4, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Bowser", team: "Isaac", IP: 3, H: 7, ER: 0, SO: 1, ERA: "0.00" },

            { player: "Milk", team: "Morgan", IP: 1, H: 6, ER: 3, SO: 3, ERA: "21.00" },
            { player: "Peach", team: "Morgan", IP: 2.1, H: 4, ER: 3, SO: 0, ERA: "9.00" },
            { player: "Daisy", team: "Morgan", IP: 2.2, H: 7, ER: 1, SO: 0, ERA: "2.63" },
        ]
    },
    "Game40": {
        id: "Game40",
        awayManager: "Justave",
        homeManager: "Marge",

        game: {
            away: {
                name: "Justave",
                color: "#FF9900",
                scores: [3, 0, 0, 0, 0, 0, 5],
                R: 8,
                H: 19,
                E: 4,
                LOB: 5
            },

            home: {
                name: "Marge",
                color: "#6AA84F",
                scores: [6, 1, 0, 0, 0, 3, 0],
                R: 10,
                H: 18,
                E: 3,
                LOB: 10
            }
        },

        battingStats: [
            { player: "Luigi", team: "Marge", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Piggie", team: "Marge", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Kritter", team: "Marge", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "King K", team: "Marge", AB: 3, H: 2, R: 2, RBI: 3, HR: 1, AVG: "0.667" },
            { player: "Miss Jones", team: "Marge", AB: 3, H: 2, R: 2, RBI: 2, HR: 0, AVG: "0.667" },
            { player: "Green Shy Guy", team: "Marge", AB: 2, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Geek Squad", team: "Marge", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Green Kamek", team: "Marge", AB: 4, H: 3, R: 0, RBI: 3, HR: 0, AVG: "0.750" },
            { player: "Bob Marley", team: "Marge", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },

            { player: "King Boo", team: "Justave", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Boo", team: "Justave", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Gray Shy Guy", team: "Justave", AB: 2, H: 1, R: 2, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Tonka", team: "Justave", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Claudius", team: "Justave", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Mario", team: "Justave", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Yellow Toad", team: "Justave", AB: 4, H: 4, R: 0, RBI: 2, HR: 0, AVG: "1.000" },
            { player: "Hamburger", team: "Justave", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Zekrom", team: "Justave", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Bob Marley", team: "Marge", IP: 3, H: 9, ER: 3, SO: 0, ERA: "7.00" },
            { player: "Luigi", team: "Marge", IP: 4, H: 9, ER: 4, SO: 1, ERA: "7.00" },

            { player: "Gray Shy Guy", team: "Justave", IP: 0, H: 6, ER: 3, SO: 0, ERA: "999.99" },
            { player: "Mario", team: "Justave", IP: 5.1, H: 9, ER: 0, SO: 1, ERA: "0.00" },
            { player: "King Boo", team: "Justave", IP: 0.2, H: 4, ER: 2, SO: 0, ERA: "21.00" },
        ]
    },
    "AllStarGame": {
        id: "AllStarGame",
        awayManager: "All-Star West",
        homeManager: "All-Star East",
        game: {
            away: {
                name: "All-Star West",
                color: "#FF0000",
                scores: [0, 1, 10, 4, 0, 0, 0],
                R: 15,
                H: 26,
                E: 0,
                LOB: 9
            },
            home: {
                name: "All-Star East",
                color: "#4A86E8",
                scores: [1, 2, 0, 2, 0, 1, 8],
                R: 14,
                H: 24,
                E: 2,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Wario", team: "All-Star East", AB: 5, H: 5, R: 2, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Bowser Jr", team: "All-Star East", AB: 5, H: 4, R: 1, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Fire Bro", team: "All-Star East", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Petey Piranha", team: "All-Star East", AB: 5, H: 3, R: 0, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "King Boo", team: "All-Star East", AB: 5, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.200" },
            { player: "Red Kritter", team: "All-Star East", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "King K Rool", team: "All-Star East", AB: 4, H: 3, R: 3, RBI: 1, HR: 1, AVG: "0.750" },
            { player: "Green Kritter", team: "All-Star East", AB: 4, H: 2, R: 2, RBI: 5, HR: 2, AVG: "0.500" },
            { player: "Funky Kong", team: "All-Star East", AB: 4, H: 3, R: 3, RBI: 3, HR: 3, AVG: "0.750" },

            { player: "Birdo", team: "All-Star West", AB: 5, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Boomerang Bro", team: "All-Star West", AB: 5, H: 3, R: 2, RBI: 3, HR: 1, AVG: "0.600" },
            { player: "Bowser", team: "All-Star West", AB: 4, H: 3, R: 3, RBI: 3, HR: 2, AVG: "0.750" },
            { player: "Blue Dry Bones", team: "All-Star West", AB: 5, H: 4, R: 1, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Dry Bones", team: "All-Star West", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Tiny Kong", team: "All-Star West", AB: 5, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Donkey Kong", team: "All-Star West", AB: 5, H: 4, R: 3, RBI: 4, HR: 2, AVG: "0.800" },
            { player: "Green Toad", team: "All-Star West", AB: 3, H: 3, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Red Pianta", team: "All-Star West", AB: 4, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.750" }
        ],

        pitchingStats: [
            { player: "Bowser Jr", team: "All-Star East", IP: 2.1, H: 10, ER: 3, SO: 0, ERA: "9.00" },
            { player: "Wario", team: "All-Star East", IP: 0.2, H: 8, ER: 8, SO: 0, ERA: "84.00" },
            { player: "King Boo", team: "All-Star East", IP: 1.1, H: 5, ER: 4, SO: 0, ERA: "21.00" },
            { player: "Petey Piranha", team: "All-Star East", IP: 2.2, H: 3, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Bowser", team: "All-Star West", IP: 6.1, H: 18, ER: 7, SO: 0, ERA: "7.74" },
            { player: "Donkey Kong", team: "All-Star West", IP: 0.2, H: 6, ER: 7, SO: 0, ERA: "73.50" }
        ]
    },
    "Game41": {
        id: "Game41",
        awayManager: "Isaac",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [2, 5, 2, 0, 4, 1, 0],
                R: 14,
                H: 26,
                E: 0,
                LOB: 10
            },

            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 1, 1, 2, 0, 0, 0],
                R: 4,
                H: 19,
                E: 0,
                LOB: 10
            }
        },

        battingStats: [
            { player: "Purple Toad", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Pianta", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Boomerang Bro", team: "THANdrew", AB: 4, H: 3, R: 1, RBI: 3, HR: 1, AVG: "0.750" },
            { player: "Abu Patel", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Birdo", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Yoshi", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Diddler", team: "THANdrew", AB: 4, H: 4, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Blue Kamek", team: "THANdrew", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Bonnie", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },

            { player: "Blue Kritter", team: "Isaac", AB: 5, H: 4, R: 2, RBI: 2, HR: 0, AVG: "0.800" },
            { player: "Barry", team: "Isaac", AB: 4, H: 3, R: 4, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 5, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Bowser", team: "Isaac", AB: 5, H: 4, R: 1, RBI: 3, HR: 0, AVG: "0.800" },
            { player: "Blue Noki", team: "Isaac", AB: 5, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Blue Pianta", team: "Isaac", AB: 5, H: 3, R: 1, RBI: 6, HR: 1, AVG: "0.600" },
            { player: "Blue Toad", team: "Isaac", AB: 5, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.600" },
            { player: "Saber", team: "Isaac", AB: 5, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.400" },
            { player: "Cascade", team: "Isaac", AB: 5, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.400" },
        ],

        pitchingStats: [
            { player: "Birdo", team: "THANdrew", IP: 1.2, H: 9, ER: 5, SO: 1, ERA: "21.00" },
            { player: "Blue Kamek", team: "THANdrew", IP: 0.1, H: 2, ER: 2, SO: 0, ERA: "42.00" },
            { player: "Diddler", team: "THANdrew", IP: 2, H: 5, ER: 2, SO: 0, ERA: "7.00" },
            { player: "Abu Patel", team: "THANdrew", IP: 1.2, H: 7, ER: 5, SO: 0, ERA: "21.00" },
            { player: "Red Pianta", team: "THANdrew", IP: 1.1, H: 3, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Blue Pianta", team: "Isaac", IP: 3.1, H: 11, ER: 2, SO: 1, ERA: "4.20" },
            { player: "Bowser", team: "Isaac", IP: 3.2, H: 8, ER: 2, SO: 2, ERA: "3.82" },
        ]
    },
    "Game42": {
        id: "Game42",
        awayManager: "Isaac",
        homeManager: "THANdrew",

        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [1, 0, 0, 0, 0, 0, 1],
                R: 2,
                H: 13,
                E: 0,
                LOB: 5
            },

            home: {
                name: "THANdrew",
                color: "#999999",
                scores: [1, 1, 0, 0, 2, 0, 0],
                R: 4,
                H: 11,
                E: 1,
                LOB: 5
            }
        },

        battingStats: [
            { player: "Purple Toad", team: "THANdrew", AB: 3, H: 3, R: 2, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Red Pianta", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Boomerang Bro", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "Abu Patel", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Birdo", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Yoshi", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Diddler", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Kamek", team: "THANdrew", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Bonnie", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Barry", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Bowser", team: "Isaac", AB: 4, H: 4, R: 0, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Blue Noki", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Blue Pianta", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Toad", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Saber", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Cascade", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
        ],

        pitchingStats: [
            { player: "Blue Kamek", team: "THANdrew", IP: 2, H: 3, ER: 1, SO: 0, ERA: "3.50" },
            { player: "Birdo", team: "THANdrew", IP: 5, H: 10, ER: 1, SO: 1, ERA: "1.40" },

            { player: "Saber", team: "Isaac", IP: 2.2, H: 7, ER: 2, SO: 0, ERA: "5.25" },
            { player: "Bowser", team: "Isaac", IP: 3.1, H: 4, ER: 2, SO: 2, ERA: "4.20" },
        ]
    },
    "Game43": {
        id: "Game43",
        awayManager: "THANdrew",
        homeManager: "Isaac",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 0, 0, 2, 4, 0, 0],
                R: 6,
                H: 18,
                E: 1,
                LOB: 6
            },

            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 7, 0, 1, 0, 1, 0],
                R: 9,
                H: 16,
                E: 2,
                LOB: 2
            }
        },

        battingStats: [
            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 4, R: 1, RBI: 2, HR: 1, AVG: "1.000" },
            { player: "Barry", team: "Isaac", AB: 4, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Bowser", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.333" },
            { player: "Blue Pianta", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Toad", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Saber", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Noki", team: "Isaac", AB: 2, H: 1, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Cascade", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Purple Toad", team: "THANdrew", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Red Pianta", team: "THANdrew", AB: 4, H: 4, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Boomerang Bro", team: "THANdrew", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Abu Patel", team: "THANdrew", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Birdo", team: "THANdrew", AB: 4, H: 2, R: 1, RBI: 3, HR: 1, AVG: "0.500" },
            { player: "Blue Yoshi", team: "THANdrew", AB: 2, H: 2, R: 1, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Diddler", team: "THANdrew", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Kamek", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Bonnie", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
        ],

        pitchingStats: [
            { player: "Blue Pianta", team: "Isaac", IP: 3, H: 7, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Bowser", team: "Isaac", IP: 4, H: 11, ER: 5, SO: 0, ERA: "8.75" },

            { player: "Birdo", team: "THANdrew", IP: 1.2, H: 9, ER: 7, SO: 0, ERA: "29.40" },
            { player: "Blue Kamek", team: "THANdrew", IP: 2.1, H: 4, ER: 1, SO: 0, ERA: "3.00" },
            { player: "Abu Patel", team: "THANdrew", IP: 2, H: 3, ER: 1, SO: 0, ERA: "3.50" },
        ]
    },
    "Game44": {
        id: "Game44",
        awayManager: "THANdrew",
        homeManager: "Isaac",

        game: {
            away: {
                name: "THANdrew",
                color: "#999999",
                scores: [0, 0, 1, 0, 0, 0, 2],
                R: 3,
                H: 9,
                E: 1,
                LOB: 2
            },

            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 3, 0, 3, 0, 3, 0],
                R: 9,
                H: 17,
                E: 2,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Barry", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 4, H: 4, R: 1, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Bowser", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 3, HR: 1, AVG: "0.250" },
            { player: "Blue Pianta", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Toad", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Saber", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Noki", team: "Isaac", AB: 3, H: 2, R: 2, RBI: 2, HR: 0, AVG: "0.667" },
            { player: "Cascade", team: "Isaac", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Purple Toad", team: "THANdrew", AB: 3, H: 3, R: 0, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Red Pianta", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Boomerang Bro", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Abu Patel", team: "THANdrew", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Birdo", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Yoshi", team: "THANdrew", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Diddler", team: "THANdrew", AB: 1, H: 0, R: 1, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Kamek", team: "THANdrew", AB: 3, H: 2, R: 2, RBI: 2, HR: 1, AVG: "0.667" },
            { player: "Bonnie", team: "THANdrew", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
        ],

        pitchingStats: [
            { player: "Saber", team: "Isaac", IP: 6.2, H: 9, ER: 3, SO: 0, ERA: "3.15" },
            { player: "Bowser", team: "Isaac", IP: 0.1, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Blue Kamek", team: "THANdrew", IP: 1.2, H: 5, ER: 2, SO: 0, ERA: "8.40" },
            { player: "Birdo", team: "THANdrew", IP: 4.2, H: 12, ER: 6, SO: 1, ERA: "9.00" },
            { player: "Diddler", team: "THANdrew", IP: 0.2, H: 0, ER: 0, SO: 0, ERA: "0.00" },
        ]
    },
    "Game45": {
        id: "Game45",
        awayManager: "Brendan",
        homeManager: "James",
        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 2, 4, 1, 2, 0, 1],
                R: 10,
                H: 20,
                E: 3,
                LOB: 10
            },
            home: {
                name: "James",
                color: "#F1C232",
                scores: [1, 1, 0, 0, 3, 0, 0],
                R: 5,
                H: 14,
                E: 2,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Bertha", team: "Brendan", AB: 4, H: 0, R: 1, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Petey Piranha", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Funky Kong", team: "Brendan", AB: 5, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Dixie Kong", team: "Brendan", AB: 5, H: 4, R: 1, RBI: 0, HR: 0, AVG: "0.800" },
            { player: "Jake", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.250" },
            { player: "Baby Peach", team: "Brendan", AB: 3, H: 0, R: 1, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Green Dry Bones", team: "Brendan", AB: 4, H: 4, R: 3, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Wario", team: "Brendan", AB: 4, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Waluigi", team: "Brendan", AB: 4, H: 4, R: 0, RBI: 2, HR: 0, AVG: "1.000" },

            { player: "Bowser Jr", team: "James", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Fire Bro", team: "James", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Kimmy", team: "James", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Kritter", team: "James", AB: 4, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "MLK", team: "James", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Red Toad", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Jack White", team: "James", AB: 1, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Dark Bones", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Koopa", team: "James", AB: 3, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.667" }
        ],

        pitchingStats: [
            { player: "Bertha", team: "Brendan", IP: 4.1, H: 12, ER: 5, SO: 0, ERA: "8.08" },
            { player: "Wario", team: "Brendan", IP: 2.2, H: 2, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Red Koopa", team: "James", IP: 2, H: 4, ER: 2, SO: 0, ERA: "7.00" },
            { player: "Bowser Jr", team: "James", IP: 1.1, H: 8, ER: 4, SO: 0, ERA: "21.00" },
            { player: "Jack White", team: "James", IP: 2, H: 3, ER: 3, SO: 0, ERA: "10.50" },
            { player: "Red Toad", team: "James", IP: 0.2, H: 2, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Fire Bro", team: "James", IP: 1, H: 3, ER: 1, SO: 0, ERA: "7.00" }
        ]
    },
    "Game46": {
        id: "Game46",
        awayManager: "Brendan",
        homeManager: "James",
        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 1, 2, 1, 0, 0, 1],
                R: 5,
                H: 14,
                E: 2,
                LOB: 8
            },
            home: {
                name: "James",
                color: "#F1C232",
                scores: [0, 3, 0, 0, 0, 0, 0],
                R: 3,
                H: 9,
                E: 0,
                LOB: 4
            }
        },

        battingStats: [
            { player: "Blooper", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Petey Piranha", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Funky Kong", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Dixie Kong", team: "Brendan", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Jake", team: "Brendan", AB: 4, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Baby Peach", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Green Dry Bones", team: "Brendan", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Wario", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Waluigi", team: "Brendan", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Bowser Jr", team: "James", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Fire Bro", team: "James", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Kimmy", team: "James", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Red Kritter", team: "James", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "MLK", team: "James", AB: 3, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.333" },
            { player: "Red Toad", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Jack White", team: "James", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Dark Bones", team: "James", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Red Koopa", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" }
        ],

        pitchingStats: [
            { player: "Blooper", team: "Brendan", IP: 1.1, H: 6, ER: 1, SO: 0, ERA: "5.25" },
            { player: "Waluigi", team: "Brendan", IP: 2.1, H: 3, ER: 2, SO: 0, ERA: "6.00" },
            { player: "Wario", team: "Brendan", IP: 3.1, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Jack White", team: "James", IP: 2.2, H: 6, ER: 1, SO: 0, ERA: "2.63" },
            { player: "Bowser Jr", team: "James", IP: 2.1, H: 5, ER: 2, SO: 0, ERA: "6.00" },
            { player: "Dark Bones", team: "James", IP: 1.1, H: 3, ER: 1, SO: 0, ERA: "5.25" },
            { player: "Fire Bro", team: "James", IP: 0.2, H: 0, ER: 0, SO: 0, ERA: "0.00" }
        ]
    },
    "Game47": {
        id: "Game47",
        awayManager: "James",
        homeManager: "Brendan",
        game: {
            away: {
                name: "James",
                color: "#F1C232",
                scores: [0, 0, 3, 0, 2, 0, 0],
                R: 5,
                H: 12,
                E: 1,
                LOB: 8
            },
            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [10, 0, 0, 0, 0, 1, 0],
                R: 11,
                H: 15,
                E: 2,
                LOB: 7
            }
        },

        battingStats: [
            { player: "Bowser Jr", team: "James", AB: 4, H: 3, R: 2, RBI: 2, HR: 0, AVG: "0.750" },
            { player: "Fire Bro", team: "James", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Kimmy", team: "James", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "Red Kritter", team: "James", AB: 3, H: 2, R: 0, RBI: 1, HR: 0, AVG: "0.667" },
            { player: "MLK", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Dark Bones", team: "James", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Red Koopa", team: "James", AB: 2, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Paratroopa", team: "James", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Paragoomba", team: "James", AB: 2, H: 0, R: 1, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Bertha", team: "Brendan", AB: 4, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Petey Piranha", team: "Brendan", AB: 4, H: 4, R: 2, RBI: 7, HR: 2, AVG: "1.000" },
            { player: "Funky Kong", team: "Brendan", AB: 4, H: 3, R: 2, RBI: 2, HR: 2, AVG: "0.750" },
            { player: "Dixie Kong", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Jake", team: "Brendan", AB: 2, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Baby Peach", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Green Dry Bones", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Wario", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Waluigi", team: "Brendan", AB: 3, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.667" }
        ],

        pitchingStats: [
            { player: "Paragoomba", team: "James", IP: 0.1, H: 5, ER: 3, SO: 0, ERA: "63.00" },
            { player: "Bowser Jr", team: "James", IP: 0.1, H: 5, ER: 7, SO: 0, ERA: "147.00" },
            { player: "Kimmy", team: "James", IP: 4.2, H: 5, ER: 1, SO: 0, ERA: "1.50" },
            { player: "Red Koopa", team: "James", IP: 0.2, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Bertha", team: "Brendan", IP: 4.1, H: 9, ER: 3, SO: 0, ERA: "4.85" },
            { player: "Wario", team: "Brendan", IP: 2.2, H: 3, ER: 2, SO: 0, ERA: "5.25" }
        ]
    },
    "Game48": {
        id: "Game48",
        awayManager: "Brendan",
        homeManager: "Isaac",
        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 0, 0, 0, 0, 1, 0],
                R: 1,
                H: 11,
                E: 0,
                LOB: 7
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [2, 5, 2, 0, 5, 0, 0],
                R: 14,
                H: 24,
                E: 0,
                LOB: 6
            }
        },

        battingStats: [
            { player: "Blue Kritter", team: "Isaac", AB: 5, H: 5, R: 2, RBI: 2, HR: 1, AVG: "1.000" },
            { player: "Barry", team: "Isaac", AB: 5, H: 2, R: 2, RBI: 1, HR: 0, AVG: "0.400" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 3, HR: 0, AVG: "0.750" },
            { player: "Bowser", team: "Isaac", AB: 4, H: 4, R: 3, RBI: 8, HR: 3, AVG: "1.000" },
            { player: "Blue Pianta", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Toad", team: "Isaac", AB: 4, H: 4, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Saber", team: "Isaac", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Noki", team: "Isaac", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Cascade", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },

            { player: "Bertha", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Petey", team: "Brendan", AB: 4, H: 4, R: 0, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Funky Kong", team: "Brendan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Dixie Kong", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Jake", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Baby Peach", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Green Dry Bones", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Wario", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Waluigi", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" }
        ],

        pitchingStats: [
            { player: "Blue Pianta", team: "Isaac", IP: 5, H: 8, ER: 1, SO: 0, ERA: "1.40" },
            { player: "Bowser", team: "Isaac", IP: 2, H: 3, ER: 1, SO: 0, ERA: "3.50" },

            { player: "Bertha", team: "Brendan", IP: 1.1, H: 9, ER: 7, SO: 0, ERA: "36.75" },
            { player: "Waluigi", team: "Brendan", IP: 1.2, H: 4, ER: 2, SO: 0, ERA: "8.40" },
            { player: "Wario", team: "Brendan", IP: 1.2, H: 8, ER: 5, SO: 0, ERA: "21.00" },
            { player: "Baby Peach", team: "Brendan", IP: 1.2, H: 3, ER: 0, SO: 0, ERA: "0.00" }
        ]
    },
    "Game49": {
        id: "Game49",
        awayManager: "Brendan",
        homeManager: "Isaac",
        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 0, 2, 3, 2, 0, 3],
                R: 10,
                H: 18,
                E: 0,
                LOB: 4
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [0, 0, 4, 0, 0, 0, 0],
                R: 4,
                H: 14,
                E: 3,
                LOB: 3
            }
        },

        battingStats: [
            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Barry", team: "Isaac", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 4, H: 3, R: 1, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Bowser", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Blue Pianta", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Toad", team: "Isaac", AB: 3, H: 3, R: 0, RBI: 1, HR: 0, AVG: "1.000" },
            { player: "Saber", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Blue Noki", team: "Isaac", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Cascade", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },

            { player: "Blooper", team: "Brendan", AB: 4, H: 2, R: 2, RBI: 3, HR: 0, AVG: "0.500" },
            { player: "Petey Piranha", team: "Brendan", AB: 5, H: 2, R: 1, RBI: 4, HR: 1, AVG: "0.400" },
            { player: "Funky Kong", team: "Brendan", AB: 5, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.400" },
            { player: "Dixie Kong", team: "Brendan", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Jake", team: "Brendan", AB: 2, H: 2, R: 1, RBI: 0, HR: 0, AVG: "1.000" },
            { player: "Baby Peach", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Green Dry Bones", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Wario", team: "Brendan", AB: 4, H: 3, R: 2, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Waluigi", team: "Brendan", AB: 3, H: 3, R: 2, RBI: 1, HR: 0, AVG: "1.000" }
        ],

        pitchingStats: [
            { player: "Saber", team: "Isaac", IP: 3, H: 5, ER: 2, SO: 0, ERA: "4.67" },
            { player: "Bowser", team: "Isaac", IP: 3.2, H: 13, ER: 6, SO: 0, ERA: "11.45" },
            { player: "Blue Dry Bones", team: "Isaac", IP: 0.1, H: 0, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Blooper", team: "Brendan", IP: 2.1, H: 8, ER: 3, SO: 0, ERA: "9.00" },
            { player: "Wario", team: "Brendan", IP: 4.2, H: 6, ER: 1, SO: 0, ERA: "1.50" }
        ]
    },
    "Game50": {
        id: "Game50",
        awayManager: "Isaac",
        homeManager: "Brendan",
        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [3, 0, 0, 4, 0, 0, 5],
                R: 12,
                H: 20,
                E: 1,
                LOB: 5
            },
            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [4, 0, 0, 0, 1, 0, 0],
                R: 5,
                H: 7,
                E: 4,
                LOB: 2
            }
        },

        battingStats: [
            { player: "Blue Kritter", team: "Isaac", AB: 5, H: 3, R: 0, RBI: 1, HR: 0, AVG: "0.600" },
            { player: "Barry", team: "Isaac", AB: 2, H: 1, R: 2, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 5, H: 3, R: 1, RBI: 2, HR: 0, AVG: "0.600" },
            { player: "Bowser", team: "Isaac", AB: 5, H: 2, R: 1, RBI: 3, HR: 1, AVG: "0.400" },
            { player: "Blue Pianta", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Toad", team: "Isaac", AB: 4, H: 2, R: 2, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Saber", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 1, HR: 0, AVG: "0.750" },
            { player: "Blue Noki", team: "Isaac", AB: 3, H: 1, R: 2, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Cascade", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },

            { player: "Bertha", team: "Brendan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Petey Piranha", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Funky Kong", team: "Brendan", AB: 3, H: 2, R: 2, RBI: 1, HR: 1, AVG: "0.667" },
            { player: "Dixie Kong", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 1, HR: 0, AVG: "0.000" },
            { player: "Jake", team: "Brendan", AB: 2, H: 0, R: 1, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Baby Peach", team: "Brendan", AB: 3, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Green Dry Bones", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 2, HR: 0, AVG: "0.333" },
            { player: "Wario", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.333" },
            { player: "Waluigi", team: "Brendan", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" }
        ],

        pitchingStats: [
            { player: "Blue Pianta", team: "Isaac", IP: 1.2, H: 5, ER: 4, SO: 0, ERA: "16.80" },
            { player: "Bowser", team: "Isaac", IP: 4.1, H: 2, ER: 1, SO: 1, ERA: "1.62" },

            { player: "Bertha", team: "Brendan", IP: 3, H: 9, ER: 3, SO: 0, ERA: "7.00" },
            { player: "Waluigi", team: "Brendan", IP: 0.2, H: 2, ER: 3, SO: 0, ERA: "31.50" },
            { player: "Wario", team: "Brendan", IP: 3, H: 9, ER: 5, SO: 0, ERA: "11.67" },
            { player: "Baby Peach", team: "Brendan", IP: 0.1, H: 0, ER: 1, SO: 0, ERA: "21.00" }
        ]
    },
    "Game51": {
        id: "Game51",
        awayManager: "Isaac",
        homeManager: "Brendan",
        game: {
            away: {
                name: "Isaac",
                color: "#3586E8",
                scores: [2, 0, 0, 0, 1, 0, 0],
                R: 3,
                H: 13,
                E: 1,
                LOB: 7
            },
            home: {
                name: "Brendan",
                color: "#CC0000",
                scores: [2, 0, 0, 4, 0, 1, 0],
                R: 7,
                H: 17,
                E: 0,
                LOB: 9
            }
        },

        battingStats: [
            { player: "Blooper", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Petey Piranha", team: "Brendan", AB: 4, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.250" },
            { player: "Funky Kong", team: "Brendan", AB: 4, H: 3, R: 3, RBI: 1, HR: 1, AVG: "0.750" },
            { player: "Dixie Kong", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 1, HR: 0, AVG: "0.500" },
            { player: "Jake", team: "Brendan", AB: 4, H: 2, R: 1, RBI: 2, HR: 0, AVG: "0.500" },
            { player: "Baby Peach", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Green Dry Bones", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 2, HR: 0, AVG: "0.667" },
            { player: "Wario", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Waluigi", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },

            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Barry", team: "Isaac", AB: 4, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Bowser", team: "Isaac", AB: 4, H: 4, R: 2, RBI: 3, HR: 2, AVG: "1.000" },
            { player: "Blue Pianta", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Blue Toad", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Saber", team: "Isaac", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Blue Noki", team: "Isaac", AB: 3, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Cascade", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" }
        ],

        pitchingStats: [
            { player: "Saber", team: "Isaac", IP: 2.2, H: 7, ER: 2, SO: 1, ERA: "5.25" },
            { player: "Bowser", team: "Isaac", IP: 3.1, H: 10, ER: 5, SO: 0, ERA: "10.50" },

            { player: "Blooper", team: "Brendan", IP: 1.2, H: 5, ER: 2, SO: 0, ERA: "8.40" },
            { player: "Waluigi", team: "Brendan", IP: 2, H: 2, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Wario", team: "Brendan", IP: 3.1, H: 6, ER: 2, SO: 0, ERA: "4.20" }
        ]
    },
    "Game52": {
        id: "Game52",
        awayManager: "Brendan",
        homeManager: "Isaac",
        game: {
            away: {
                name: "Brendan",
                color: "#CC0000",
                scores: [0, 0, 2, 0, 0, 0, 0],
                R: 2,
                H: 7,
                E: 0,
                LOB: 5
            },
            home: {
                name: "Isaac",
                color: "#3586E8",
                scores: [3, 1, 0, 2, 0, 0, 0],
                R: 6,
                H: 20,
                E: 3,
                LOB: 10
            }
        },

        battingStats: [
            { player: "Blue Kritter", team: "Isaac", AB: 4, H: 3, R: 1, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Barry", team: "Isaac", AB: 4, H: 2, R: 1, RBI: 2, HR: 1, AVG: "0.500" },
            { player: "Blue Dry Bones", team: "Isaac", AB: 4, H: 3, R: 2, RBI: 2, HR: 1, AVG: "0.750" },
            { player: "Bowser", team: "Isaac", AB: 4, H: 4, R: 1, RBI: 1, HR: 1, AVG: "1.000" },
            { player: "Blue Pianta", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 1, HR: 0, AVG: "0.250" },
            { player: "Blue Toad", team: "Isaac", AB: 4, H: 3, R: 0, RBI: 0, HR: 0, AVG: "0.750" },
            { player: "Saber", team: "Isaac", AB: 4, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.250" },
            { player: "Blue Noki", team: "Isaac", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Cascade", team: "Isaac", AB: 3, H: 1, R: 1, RBI: 0, HR: 0, AVG: "0.333" },

            { player: "Bertha", team: "Brendan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Petey Piranha", team: "Brendan", AB: 3, H: 0, R: 1, RBI: 1, HR: 1, AVG: "0.000" },
            { player: "Funky Kong", team: "Brendan", AB: 3, H: 1, R: 1, RBI: 1, HR: 1, AVG: "0.333" },
            { player: "Dixie Kong", team: "Brendan", AB: 4, H: 0, R: 0, RBI: 0, HR: 0, AVG: "0.000" },
            { player: "Jake", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Baby Peach", team: "Brendan", AB: 2, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.500" },
            { player: "Grooves", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" },
            { player: "Wario", team: "Brendan", AB: 3, H: 2, R: 0, RBI: 0, HR: 0, AVG: "0.667" },
            { player: "Waluigi", team: "Brendan", AB: 3, H: 1, R: 0, RBI: 0, HR: 0, AVG: "0.333" }
        ],

        pitchingStats: [
            { player: "Blue Pianta", team: "Isaac", IP: 2.2, H: 4, ER: 1, SO: 0, ERA: "2.63" },
            { player: "Bowser", team: "Isaac", IP: 4.1, H: 3, ER: 0, SO: 0, ERA: "0.00" },

            { player: "Bertha", team: "Brendan", IP: 1.2, H: 9, ER: 4, SO: 0, ERA: "16.80" },
            { player: "Waluigi", team: "Brendan", IP: 2, H: 2, ER: 0, SO: 0, ERA: "0.00" },
            { player: "Wario", team: "Brendan", IP: 2.1, H: 9, ER: 2, SO: 0, ERA: "6.00" }
        ]
    },
};
