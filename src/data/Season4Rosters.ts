type Accs = {
    type: string;
    color: string;
}

type Team = {
    name: string,
}

export type Roster4 = {
    manager: string;
    captain: string;
    roster: Team[];
    accolades?: Accs[];
}

export const rosters4: Roster4[] = [
    {
        manager: "Brendan",
        captain: "Wario",
        roster: [
            { name: "Fire Bro" },
            { name: "Dark Bones" },
            { name: "Blue Dry Bones" },
            { name: "Red Pianta" },
            { name: "Waluigi" },
            { name: "Red Kamek" },
            { name: "Antenna" },
            { name: "Monty Mole" },
            { name: "MLK" },
            { name: "Baby Mario" },
            { name: "Red Koopa" },
        ],
    },
    {
        manager: "Justave",
        captain: "Peach",
        roster: [
            { name: "Funky Kong" },
            { name: "Light Blue Shy Guy" },
            { name: "Light Blue Yoshi" },
            { name: "Dixie Kong" },
            { name: "Sabrina" },
            { name: "Jake" },
            { name: "Grayson McKean" },
            { name: "Smurf" },
            { name: "Betty White" },
            { name: "Triangle" },
            { name: "Candy" },
        ],
    },
    {
        manager: "James",
        captain: "Bowser Jr",
        roster: [
            { name: "Bowser" },
            { name: "King Boo" },
            { name: "Yellow Kamek" },
            { name: "Blue Toad" },
            { name: "Boo" },
            { name: "Green Shy Guy" },
            { name: "Barry" },
            { name: "Paratroopa" },
            { name: "Abu Patel" },
            { name: "Blue Shy Guy" },
            { name: "Blue Yoshi" },
        ],
    },
    {
        manager: "Marge",
        captain: "Birdo",
        roster: [
            { name: "Yoshi" },
            { name: "Green Dry Bones" },
            { name: "Blue Pianta" },
            { name: "Purple Toad" },
            { name: "Purple Yoshi" },
            { name: "Toadette" },
            { name: "Baby Luigi" },
            { name: "Charlemagne" },
            { name: "Miss Jones" },
            { name: "Shy Guy" },
            { name: "Eugene" },
        ]
    },
    {
        manager: "Isaac",
        captain: "Daisy",
        roster: [
            { name: "Petey Piranha" },
            { name: "Red Kritter" },
            { name: "Wiggler" },
            { name: "Yellow Pianta" },
            { name: "Pink Yoshi" },
            { name: "Baby Daisy" },
            { name: "Blooper" },
            { name: "Reshiram" },
            { name: "Zekrom" },
            { name: "Lucia" },
            { name: "Koopa" },
        ],
    },
    {
        manager: "Trocean",
        captain: "Diddy Kong",
        roster: [
            { name: "Donkey Kong" },
            { name: "Brown Kritter" },
            { name: "Boomerang Bro" },
            { name: "Tiny Kong" },
            { name: "Baby DK" },
            { name: "Gramms" },
            { name: "Sherpa" },
            { name: "Tarzan" },
            { name: "Justin Bieber" },
            { name: "Bugs Bunny" },
            { name: "Hima" },
        ]
    },
    {
        manager: "Morgan",
        captain: "Mario",
        roster: [
            { name: "Dry Bones" },
            { name: "Green Kritter" },
            { name: "Yellow Toad" },
            { name: "Red Toad" },
            { name: "Baby Peach" },
            { name: "Kaguya" },
            { name: "Danny B" },
            { name: "Bob Marley" },
            { name: "Red Yoshi" },
            { name: "Jack White" },
            { name: "Kimmy" },
        ],
    },
    {
        manager: "THANdrew",
        captain: "Luigi",
        roster: [
            { name: "King K Rool" },
            { name: "Hammer Bro" },
            { name: "Blue Kritter" },
            { name: "Green Kamek" },
            { name: "Green Toad" },
            { name: "Piggie" },
            { name: "Larry Cuc" },
            { name: "Blue Kamek" },
            { name: "Geek Squad" },
            { name: "Green Paratroopa" },
            { name: "Toadsworth" },
        ],
    }
]