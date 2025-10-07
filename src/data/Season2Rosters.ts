type Accs = {
    type: string;
    color: string;
}

type Team = {
    name: string,
}

export type Roster2 = {
    manager: string;
    captain: string;
    roster: Team[];
    accolades?: Accs[];
}

export const rosters2: Roster2[] = [
    {
        manager: "Brendan",
        captain: "Bowser",
        roster: [
            {name: "Bowser Jr"},
            {name: "Boomerang Bro"},
            {name: "Blue Dry Bones"},
            {name: "Blue Kamek"},
            {name: "Blue Shy Guy"},
            {name: "Blue Yoshi"},
            {name: "Abu Patel"},
            {name: "Barry"},
            {name: "Blue Noki"},
            {name: "Monty Mole"},
            {name: "Diddler"},
        ],
    },
    {
        manager: "Justave",
        captain: "Luigi",
        roster: [
            {name: "Hammer Bro"},
            {name: "Green Kritter"},
            {name: "Green Dry Bones"},
            {name: "Green Toad"},
            {name: "Bob Marley"},
            {name: "Green Shy Guy"},
            {name: "Geek Squad"},
            {name: "Koopa"},
            {name: "Bertha"},
            {name: "Tate McRae"},
            {name: "Michelle Obama"},
        ]
    },
    {
        manager: "James",
        captain: "Birdo",
        roster: [
            { name: "Petey Piranha" },
            { name: "Wiggler" },
            { name: "Yellow Pianta" },
            { name: "Blue Pianta" },
            { name: "Blue Toad" },
            { name: "Zekrom" },
            { name: "Alfonzo" },
            { name: "Cascade" },
            { name: "Danny B" },
            { name: "Blooper" },
            { name: "Entity 404" }
        ],
    },
    {
        manager: "Marge",
        captain: "Peach",
        roster: [
            { name: "King Boo" },
            { name: "Boo" },
            { name: "Yellow Kamek" },
            { name: "Yellow Shy Guy" },
            { name: "Yellow Toad" },
            { name: "Chungy" },
            { name: "Hamburger" },
            { name: "Toadette" },
            { name: "Gramps" },
            { name: "Sebesta" },
            { name: "Purple Toad" }
        ]
    },
    {
        manager: "Isaac",
        captain: "Donkey Kong",
        roster: [
            { name: "Brown Kritter" },
            { name: "Funky Kong" },
            { name: "Tiny Kong" },
            { name: "Dixie Kong" },
            { name: "Baby DK" },
            { name: "Paragoomba" },
            { name: "Justin Nascimento" },
            { name: "Betty White" },
            { name: "Gramms" },
            { name: "Jack White" },
            { name: "Triangle" }
        ]
    },
    {
        manager: "Trocean",
        captain: "Mario",
        roster: [
            { name: "Red Kamek" },
            { name: "Red Pianta" },
            { name: "Shy Guy" },
            { name: "Dark Bones" },
            { name: "Red Koopa" },
            { name: "Red Toad" },
            { name: "Kimmy" },
            { name: "MLK" },
            { name: "Toadsworth" },
            { name: "Red Yoshi" },
            { name: "Sabrina" }
        ]
    },
    {
        manager: "Morgan",
        captain: "Diddy Kong",
        roster: [
            { name: "Daisy" },
            { name: "Wario" },
            { name: "Yoshi" },
            { name: "Dry Bones" },
            { name: "Baby Mario" },
            { name: "Yellow Yoshi" },
            { name: "Antenna" },
            { name: "Paratroopa" },
            { name: "King K Rool" },
            { name: "John Daly" },
            { name: "Baby Daisy" }
        ],
    },
    {
        manager: "THANdrew",
        captain: "Waluigi",
        roster: [
            { name: "Fire Bro" },
            { name: "Blue Kritter" },
            { name: "Red Kritter" },
            { name: "Green Kamek" },
            { name: "Green Paratroopa" },
            { name: "Larry Cuc" },
            { name: "Gray Shy Guy" },
            { name: "Baby Luigi" },
            { name: "Broseph" },
            { name: "Nose" },
            { name: "Green Noki" }
        ]
    }
]