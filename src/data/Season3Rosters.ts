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
            { name: "Funky Kong" },
            { name: "Green Dry Bones" },
            { name: "Wario" },
            { name: "Petey Piranha" },
            { name: "Dixie Kong" },
            { name: "Baby Peach" },
            { name: "Bertha" },
            { name: "Jake" },
            { name: "Blooper" },
            { name: "Justin Bieber" },
            { name: "Sherpa" },
        ],
    },
    {
        manager: "Justave",
        captain: "Mario",
        roster: [
            { name: "Hammer Bro" },
            { name: "Yoshi" },
            { name: "Kaguya" },
            { name: "Hamburger" },
            { name: "Red Kamek" },
            { name: "Boo" },
            { name: "Gray Shy Guy" },
            { name: "King Boo" },
            { name: "Tonka" },
            { name: "Claudius" },
            { name: "Yellow Toad" },
            { name: "Zekrom" },
        ],
    },
    {
        manager: "James",
        captain: "Bowser Jr",
        roster: [
            { name: "Fire Bro" },
            { name: "Red Kritter" },
            { name: "Red Toad" },
            { name: "Kimmy" },
            { name: "Yellow Shy Guy" },
            { name: "MLK" },
            { name: "Paratroopa" },
            { name: "Jack White" },
            { name: "Red Koopa" },
            { name: "Dark Bones" },
            { name: "Paragoomba" },
        ],
    },
    {
        manager: "Marge",
        captain: "Luigi",
        roster: [
            { name: "Green Kritter" },
            { name: "Green Kamek" },
            { name: "Green Shy Guy" },
            { name: "Chungy" },
            { name: "King K Rool" },
            { name: "Piggie" },
            { name: "Miss Jones" },
            { name: "Geek Squad" },
            { name: "Pikachu" },
            { name: "Bob Marley" },
            { name: "Larry Cuc" },
            { name: "Green Paratroopa" },
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
            { name: "Baby DK" },
            { name: "Monty Mole" },
            { name: "Tarzan" },
            { name: "Gramms" },
            { name: "Diddy Kong" },
            { name: "Brown Kritter" },
            { name: "Yellow Pianta" },
            { name: "Light Blue Yoshi" },
            { name: "Baby Daisy" },
        ]
    },
    {
        manager: "Morgan",
        captain: "Daisy",
        roster: [
            { name: "Peach" },
            { name: "Green Toad" },
            { name: "Baby Luigi" },
            { name: "Dry Bones" },
            { name: "Toadette" },
            { name: "Antenna" },
            { name: "Shy Guy" },
            { name: "Nose" },
            { name: "Red Yoshi" },
            { name: "Danny B" },
            { name: "Milk" },
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
            { name: "Red Pianta" },
        ]
    }
]