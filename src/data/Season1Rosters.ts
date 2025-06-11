export type Team = {
    name: string,
}

export type Roster = {
    manager: string;
    captain: string;
    roster: Team[];
}

export const rosters: Roster[] = [
    {
        manager: "Brendan",
        captain: "Donkey Kong",
        roster: [
            {name: "Red Kritter"},
            {name: "Dixie Kong"},
            {name: "Baby DK"},
            {name: "Baby Luigi"},
            {name: "Green Dry Bones"},
            {name: "Blue Kritter"},
            {name: "Purple Toad"},
            {name: "Bob Marley"},
            {name: "Gramms"},
            {name: "Green Toad"},
            {name: "Michelle Obama"},
        ]
    },
    {
        manager: "Justin",
        captain: "Luigi",
        roster: [
            {name: "Daisy"},
            {name: "Green Kritter"},
            {name: "Blue Pianta"},
            {name: "Monty Mole"},
            {name: "Paragoomba"},
            {name: "Green Shy Guy"},
            {name: "Geek Squad"},
            {name: "Antenna"},
            {name: "Shy Guy"},
            {name: "Goomba"},
            {name: "Green Noki"},
        ]
    },
    {
        manager: "James",
        captain: "Bowser",
        roster: [
            { name: "Bowser Jr" },
            { name: "King K Rool" },
            { name: "Brown Kritter" },
            { name: "Yellow Kamek" },
            { name: "Hammer Bro" },
            { name: "Blue Dry Bones" },
            { name: "Green Kamek" },
            { name: "Koopa" },
            { name: "Paratroopa" },
            { name: "Entity 404" },
            { name: "Tate McRae" }
        ]
    },
    {
        manager: "Matt",
        captain: "Yoshi",
        roster: [
            { name: "King Boo" },
            { name: "Chungy" },
            { name: "Yellow Pianta" },
            { name: "Blooper" },
            { name: "Red Toad" },
            { name: "Baby Mario" },
            { name: "Red Koopa" },
            { name: "Sebesta" },
            { name: "Hamburger" },
            { name: "Broseph" },
            { name: "Bertha" },
            { name: "Wiggler" }
        ]
    },
    {
        manager: "Isaac",
        captain: "Mario",
        roster: [
            { name: "Birdo" },
            { name: "Fire Bro" },
            { name: "Toadette" },
            { name: "Red Kamek" },
            { name: "Pink Yoshi" },
            { name: "Baby Daisy" },
            { name: "Jack White" },
            { name: "Grayson McKean" },
            { name: "Red Yoshi" },
            { name: "Red Noki" },
            { name: "Jesstithyn" }
        ]
    },
    {
        manager: "Christach",
        captain: "Peach",
        roster: [
            { name: "Blue Toad" },
            { name: "Red Pianta" },
            { name: "Dark Bones" },
            { name: "Toadsworth" },
            { name: "Baby Peach" },
            { name: "MLK" },
            { name: "Shaq" },
            { name: "Sabrina" },
            { name: "Blue Noki" },
            { name: "Wario" }
        ]
    },
    {
        manager: "Morgan",
        captain: "Diddy Kong",
        roster: [
            { name: "Petey Piranha" },
            { name: "Boo" },
            { name: "Tiny Kong" },
            { name: "Dry Bones" },
            { name: "Light Blue Yoshi" },
            { name: "Yellow Yoshi" },
            { name: "Triangle" },
            { name: "Yellow Toad" },
            { name: "Gramps" },
            { name: "Yellow Shy Guy" },
            { name: "Danny B" }
        ]
    },
    {
        manager: "DANdrew",
        captain: "Waluigi",
        roster: [
            { name: "Funky Kong" },
            { name: "Blue Yoshi" },
            { name: "Blue Kamek" },
            { name: "Boomerang Bro" },
            { name: "Blue Shy Guy" },
            { name: "Green Paratroopa" },
            { name: "Alfonzo" },
            { name: "Abu Patel" },
            { name: "Diddler" },
            { name: "Nose" },
            { name: "Gray Shy Guy" }
        ]
    }
]