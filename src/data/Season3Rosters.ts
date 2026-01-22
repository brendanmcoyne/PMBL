type Accs = {
    type: string;
    color: string;
}

type Team = {
    name: string,
}

export type Roster3 = {
    manager: string;
    captain: string;
    roster: Team[];
    accolades?: Accs[];
}

export const rosters3: Roster3[] = [
    {
        manager: "Brendan",
        captain: "Waluigi",
        roster: [
            { name: "Funky Kong"},
            { name: "Green Dry Bones"},
            { name: "Wario"},
            { name: "Petey Piranha"},
            { name: "Dixie Kong"},
            { name: "Baby Peach"},
            { name: "Grayson McKean"},
            { name: "Larry Cuc" },
            { name: "Green Paratroopa" },
            { name: "Light Blue Yoshi"},
            { name: "Bertha"},
        ],
    },
    {
        manager: "Justave",
        captain: "Mario",
        roster: [
            { name: "Hammer Bro"},
            { name: "Brown Kritter"},
            { name: "Dark Bones"},
            { name: "Yoshi"},
            { name: "Bob Marley"},
            { name: "Yellow Yoshi"},
            { name: "Baby Daisy"},
            { name: "Baby Mario"},
            { name: "Kaguya"},
            { name: "Hamburger"},
            { name: "Red Kamek"},
        ],
    },
    {
        manager: "James",
        captain: "Bowser Jr",
        roster: [
            { name: "Fire Bro" },
            { name: "Red Kritter" },
            { name: "Red Pianta" },
            { name: "Red Toad" },
            { name: "Zekrom" },
            { name: "Yellow Toad" },
            { name: "Kimmy" },
            { name: "Yellow Shy Guy" },
            { name: "MLK" },
            { name: "Paratroopa" },
            { name: "Jack White" },
        ],
    },
    {
        manager: "Marge",
        captain: "Luigi",
        roster: [
            { name: "Green Kritter" },
            { name: "Boo" },
            { name: "Green Kamek" },
            { name: "Green Shy Guy" },
            { name: "Yellow Pianta" },
            { name: "Chungy" },
            { name: "King K Rool" },
            { name: "Piggie" },
            { name: "Miss Jones" },
            { name: "Geek Squad" },
            { name: "Pikachu" }
        ]
    },
    {
        manager: "Isaac",
        captain: "Bowser",
        roster: [
            { name: "Blue Kritter" },
            { name: "Blue Dry Bones" },
            { name: "Blue Pianta" },
            { name: "Blue Toad" },
            { name: "Saber" },
            { name: "Yellow Kamek" },
            { name: "Barry" },
            { name: "Toadsworth" },
            { name: "Cascade" },
            { name: "Blue Noki" },
            { name: "Eugene" }
        ],
    },
    {
        manager: "Trocean",
        captain: "Donkey Kong",
        roster: [
            { name: "Wiggler" },
            { name: "King Boo" },
            { name: "Baby DK" },
            { name: "Fish" },
            { name: "Sherpa" },
            { name: "Monty Mole" },
            { name: "Tarzan" },
            { name: "Blooper" },
            { name: "Gramms" },
            { name: "Justin Bieber" },
            { name: "Diddy Kong" }
        ]
    },
    {
        manager: "Morgan",
        captain: "Daisy",
        roster: [
            { name: "Peach" },
            { name: "Green Toad" },
            { name: "Gramps" },
            { name: "Baby Luigi" },
            { name: "Dry Bones" },
            { name: "Toadette" },
            { name: "Antenna" },
            { name: "Shy Guy" },
            { name: "Nose" },
            { name: "Red Yoshi" },
            { name: "Danny B" },
        ],
    },
    {
        manager: "THANdrew",
        captain: "Birdo",
        roster: [
            { name: "Boomerang Bro" },
            { name: "Blue Yoshi" },
            { name: "Blue Kamek" },
            { name: "Blue Shy Guy" },
            { name: "Purple Toad" },
            { name: "Bonnie" },
            { name: "Abu Patel" },
            { name: "Diddler" },
            { name: "Alfonzo" },
            { name: "Koopa" },
            { name: "Red Koopa" },
        ]
    }
]