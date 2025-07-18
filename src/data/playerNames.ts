export type Award = {
    name: string;
    season: number;
}

export type Player = {
    name: string;
    src: string;
    color: string;
    gp: number;
    captain?: boolean;
    mii?: boolean;
    banner?: string;
    awards?: Award[];
};

export const players: Player[] = [
    {
        name: "Abu Patel",
        src: "/players/mii.jpg",
        color: "Blue",
        gp: 10,
        captain: false,
        mii: true,
    },
    {
        name: "Alfonzo",
        src: "/players/mii.jpg",
        color: "Blue",
        gp: 10,
        captain: false,
        mii: true,
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Antenna",
        src: "/players/mii.jpg",
        color: "Red",
        gp: 10,
        captain: false,
        mii: true,
    },
    {
        name: "Baby Daisy",
        src: "/players/Baby_Daisy.webp",
        color: "Orange",
        gp: 0,
        captain: false,
        mii: false,
    },
    {
        name: "Baby DK",
        src: "/players/Baby_Donkey_Kong.webp",
        color: "Brown",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Baby Luigi",
        src: "/players/Baby_Luigi.webp",
        color: "Green",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Baby Mario",
        src: "/players/Baby_Mario.webp",
        color: "Red",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Baby Peach",
        src: "/players/Baby_Peach.webp",
        color: "Pink",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Bertha",
        src: "/players/mii.jpg",
        color: "Light Green",
        gp: 10,
        captain: false,
        mii: true,
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Birdo",
        src: "/players/Birdo.webp",
        color: "Pink",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/BirdoBows-MSS.webp",
        awards: [
            { name: "All-Star", season: 1},
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Blooper",
        src: "/players/Blooper.webp",
        color: "White",
        gp: 0,
        captain: false,
        mii: false,
    },
    {
        name: "Blue Dry Bones",
        src: "/players/Blue_Dry_Bones.webp",
        color: "Blue",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "World Series Champion", season: 1},
            { name: "1x Semifinals Game MVP", season: 1}
        ]
    },
    {
        name: "Blue Kritter",
        src: "/players/Blue_Kritter.webp",
        color: "Blue",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "Defensive Player of the Year", season: 1},
            { name: "Golden Glove Winner", season: 1},
            { name: "2x Semifinals Game MVP", season: 1},
            { name: "3x Game MVP", season: 1},
        ]
    },
    {
        name: "Blue Magikoopa",
        src: "/players/Blue_Magikoopa.webp",
        color: "Blue",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Blue Noki",
        src: "/players/Blue_Noki.webp",
        color: "Blue",
        gp: 0,
        captain: false,
        mii: false,
    },
    {
        name: "Blue Pianta",
        src: "/players/Blue_Pianta.webp",
        color: "Blue",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Blue Shy Guy",
        src: "/players/Blue_Shy_Guy.webp",
        color: "Blue",
        gp: 9,
        captain: false,
        mii: false,
    },
    {
        name: "Blue Toad",
        src: "/players/Blue_Toad.webp",
        color: "Blue",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Blue Yoshi",
        src: "/players/Blue_Yoshi.webp",
        color: "Blue",
        gp: 0,
        captain: false,
        mii: false,
    },
    {
        name: "Bob Marley",
        src: "/players/mii.jpg",
        color: "Green",
        gp: 10,
        captain: false,
        mii: true,
        awards: [
            { name: "All-Star", season: 1},
        ]
    },
    {
        name: "Boo",
        src: "/players/Boo.webp",
        color: "White",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Boomerang Bro",
        src: "/players/Boomerang_Bro.webp",
        color: "Blue",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "All-Star", season: 1},
            { name: "2x Game MVP", season: 1},
        ]
    },
    {
        name: "Bowser",
        src: "/players/Bowser.webp",
        color: "Black",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/BowserMonsters-MSS.webp",
        awards: [
            { name: "World Series Champion", season: 1},
            { name: "1x Finals Game MVP", season: 1},
            { name: "1x Semifinals Game MVP", season: 1},
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Bowser Jr.",
        src: "/players/Bowser_Jr.webp",
        color: "Black",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/BowserJrRookies-MSS.webp",
        awards: [
            { name: "World Series Champion", season: 1},
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Broseph",
        src: "/players/mii.jpg",
        color: "Light Green",
        gp: 10,
        captain: false,
        mii: true,
    },
    {
        name: "Brown Kritter",
        src: "/players/Brown_Kritter.webp",
        color: "Brown",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "World Series Champion", season: 1},
            { name: "1x Finals Game MVP", season: 1},
            { name: "1x Semifinals Game MVP", season: 1},
            { name: "2x Game MVP", season: 1},
        ]
    },
    {
        name: "Chungy",
        src: "/players/mii.jpg",
        color: "Yellow",
        gp: 10,
        captain: false,
        mii: true,
    },
    {
        name: "Daisy",
        src: "/players/Daisy.webp",
        color: "Orange",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/DaisyFlowers-MSS.webp",
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Danny B",
        src: "/players/mii.jpg",
        color: "White",
        gp: 9,
        captain: false,
        mii: true,
    },
    {
        name: "Dark Bones",
        src: "/players/Dark_Bones.webp",
        color: "Red",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "Morgan Hartwell Man of the Year Award", season: 1},
            { name: "All-Star", season: 1},
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Diddler",
        src: "/players/mii.jpg",
        color: "Blue",
        gp: 10,
        captain: false,
        mii: true,
    },
    {
        name: "Diddy Kong",
        src: "/players/Diddy_Kong.webp",
        color: "None",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/DiddyMonkeys-MSS.webp",
        awards: [
            { name: "Captain of the Year", season: 1},
        ]
    },
    {
        name: "Dixie Kong",
        src: "/players/Dixie_Kong.webp",
        color: "Pink",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Donkey Kong",
        src: "/players/Donkey_Kong.webp",
        color: "Brown",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/DKWilds-MSS.webp",
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Dry Bones",
        src: "/players/Dry_Bones.webp",
        color: "White",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Entity 404",
        src: "/players/mii.jpg",
        color: "Black",
        gp: 9,
        captain: false,
        mii: true,
        awards: [
            { name: "World Series Champion", season: 1},
        ]
    },
    {
        name: "Fire Bro",
        src: "/players/Fire_Bro.webp",
        color: "Red",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "Golden Glove Winner", season: 1},
            { name: "Silver Slugger Winner", season: 1},
            { name: "All-Star", season: 1},
            { name: "2x Game MVP", season: 1},
        ]
    },
    {
        name: "Funky Kong",
        src: "/players/Funky_Kong.webp",
        color: "Light Blue",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "2x Game MVP", season: 1},
        ]
    },
    {
        name: "Geek Squad",
        src: "/players/mii.jpg",
        color: "Green",
        gp: 10,
        captain: false,
        mii: true,
        awards: [
            { name: "All-Star", season: 1},
        ]
    },
    {
        name: "Goomba",
        src: "/players/Goomba.webp",
        color: "Brown",
        gp: 1,
        captain: false,
        mii: false,
    },
    {
        name: "Gramms",
        src: "/players/mii.jpg",
        color: "Brown",
        gp: 10,
        captain: false,
        mii: true,
    },
    {
        name: "Gramps",
        src: "/players/mii.jpg",
        color: "White",
        gp: 9,
        captain: false,
        mii: true,
    },
    {
        name: "Gray Shy Guy",
        src: "/players/Gray_Shy_Guy.webp",
        color: "Black",
        gp: 1,
        captain: false,
        mii: false,
    },
    {
        name: "Grayson McKean",
        src: "/players/mii.jpg",
        color: "Pink",
        gp: 10,
        captain: false,
        mii: true,
    },
    {
        name: "Green Dry Bones",
        src: "/players/Green_Dry_Bones.webp",
        color: "Green",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "All Star Game MVP", season: 1},
            { name: "All-Star", season: 1},
        ]
    },
    {
        name: "Green Kritter",
        src: "/players/Green_Kritter.webp",
        color: "Green",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "All-Star", season: 1},
            { name: "2x Game MVP", season: 1},
        ]
    },
    {
        name: "Green Magikoopa",
        src: "/players/Green_Magikoopa.webp",
        color: "Green",
        gp: 1,
        captain: false,
        mii: false,
        awards: [
            { name: "World Series Champion", season: 1},
        ]
    },
    {
        name: "Green Noki",
        src: "/players/Green_Noki.webp",
        color: "Green",
        gp: 0,
        captain: false,
        mii: false,
    },
    {
        name: "Green Paratroopa",
        src: "/players/Paratroopa.webp",
        color: "Green",
        gp: 5,
        captain: false,
        mii: false,
    },
    {
        name: "Green Shy Guy",
        src: "/players/Green_Shy_Guy.webp",
        color: "Green",
        gp: 8,
        captain: false,
        mii: false,
        awards: [
            { name: "Comeback Player of the Year", season: 1},
        ]
    },
    {
        name: "Green Toad",
        src: "/players/Green_Toad.webp",
        color: "Green",
        gp: 0,
        captain: false,
        mii: false,
    },
    {
        name: "Hamburger",
        src: "/players/mii.jpg",
        color: "Yellow",
        gp: 10,
        captain: false,
        mii: true,
        awards: [
            { name: "2x Game MVP", season: 1},
        ]
    },
    {
        name: "Hammer Bro",
        src: "/players/Hammer_Bro.webp",
        color: "Green",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "World Series Champion", season: 1},
            { name: "All-Star", season: 1},
            { name: "1x Semifinals Game MVP", season: 1},
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Jack White",
        src: "/players/mii.jpg",
        color: "Red",
        gp: 10,
        captain: false,
        mii: true,
    },
    {
        name: "Jesstithyn",
        src: "/players/mii.jpg",
        color: "Pink",
        gp: 10,
        captain: false,
        mii: true,
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "King Boo",
        src: "/players/King_Boo.webp",
        color: "White",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "All-Star", season: 1},
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "King K. Rool",
        src: "/players/King_K_Rool.webp",
        color: "Green",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "World Series Champion", season: 1},
            { name: "World Series MVP", season: 1},
            { name: "Offensive Player of the Year", season: 1},
            { name: "Silver Slugger Winner", season: 1},
            { name: "All-Star", season: 1},
            { name: "1x Finals Game MVP", season: 1},
            { name: "1x Semifinals Game MVP", season: 1},
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Koopa",
        src: "/players/Koopa.webp",
        color: "Green",
        gp: 0,
        captain: false,
        mii: false,
        awards: [
            { name: "World Series Champion", season: 1},
        ]
    },
    {
        name: "Light Blue Yoshi",
        src: "/players/Light_Blue_Yoshi.webp",
        color: "Light Blue",
        gp: 1,
        captain: false,
        mii: false,
    },
    {
        name: "Luigi",
        src: "/players/Luigi.webp",
        color: "Green",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/LuigiKnights-MSS.webp",
        awards: [
            { name: "All-Star", season: 1},
        ]
    },
    {
        name: "Mario",
        src: "/players/Mario.webp",
        color: "Red",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/MarioFireballs-MSS.webp",
        awards: [
            { name: "All-Star", season: 1},
        ]
    },
    {
        name: "Michelle Obama",
        src: "/players/mii.jpg",
        color: "Purple",
        gp: 0,
        captain: false,
        mii: true,
    },
    {
        name: "MLK",
        src: "/players/mii.jpg",
        color: "Red",
        gp: 10,
        captain: false,
        mii: true,
        awards: [
            { name: "Most Improved Player", season: 1},
        ]
    },
    {
        name: "Monty Mole",
        src: "/players/Monty_Mole.webp",
        color: "Brown",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "Most Hated Player", season: 1},
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Nose",
        src: "/players/mii.jpg",
        color: "Orange",
        gp: 5,
        captain: false,
        mii: true,
    },
    {
        name: "Paragoomba",
        src: "/players/Paragoomba.webp",
        color: "Brown",
        gp: 2,
        captain: false,
        mii: false,
    },
    {
        name: "Paratroopa",
        src: "/players/Paratroopa.webp",
        color: "Red",
        gp: 6,
        captain: false,
        mii: false,
        awards: [
            { name: "World Series Champion", season: 1},
        ]
    },
    {
        name: "Peach",
        src: "/players/Peach.webp",
        color: "Pink",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/PeachMonarchs-MSS.webp",
        awards: [
            { name: "All-Star", season: 1},
        ]
    },
    {
        name: "Petey Piranha",
        src: "/players/Petey_Piranha.webp",
        color: "Light Green",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "League MVP", season: 1},
            { name: "Golden Glove Winner", season: 1},
            { name: "Silver Slugger Winner", season: 1},
            { name: "All-Star", season: 1},
            { name: "1x Semifinals Game MVP", season: 1},
            { name: "3x Game MVP", season: 1},
        ]
    },
    {
        name: "Pink Yoshi",
        src: "/players/Pink_Yoshi.webp",
        color: "Pink",
        gp: 7,
        captain: false,
        mii: false,
        awards: [
            { name: "All-Star", season: 1},
            { name: "1x Game MVP", season: 1},
        ]

    },
    {
        name: "Purple Toad",
        src: "/players/Purple_Toad.webp",
        color: "Purple",
        gp: 0,
        captain: false,
        mii: false,
    },
    {
        name: "Red Koopa",
        src: "/players/Red_Koopa.webp",
        color: "Red",
        gp: 0,
        captain: false,
        mii: false,
    },
    {
        name: "Red Kritter",
        src: "/players/Red_Kritter.webp",
        color: "Red",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "1x Semifinals Game MVP", season: 1},
            { name: "2x Game MVP", season: 1},
        ]
    },
    {
        name: "Red Magikoopa",
        src: "/players/Red_Magikoopa.webp",
        color: "Red",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "2x Game MVP", season: 1},
        ]
    },
    {
        name: "Red Noki",
        src: "/players/Red_Noki.webp",
        color: "Red",
        gp: 0,
        captain: false,
        mii: false,
    },
    {
        name: "Red Pianta",
        src: "/players/Red_Pianta.webp",
        color: "Red",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "2x Game MVP", season: 1},
        ]
    },
    {
        name: "Red Shy Guy",
        src: "/players/Red_Shy_Guy.webp",
        color: "Red",
        gp: 9,
        captain: false,
        mii: false,
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Red Toad",
        src: "/players/Red_Toad.webp",
        color: "Red",
        gp: 0,
        captain: false,
        mii: false,
    },
    {
        name: "Red Yoshi",
        src: "/players/Red_Yoshi.webp",
        color: "Red",
        gp: 3,
        captain: false,
        mii: false,
    },
    {
        name: "Sabrina",
        src: "/players/mii.jpg",
        color: "Pink",
        gp: 10,
        captain: false,
        mii: true,
    },
    {
        name: "Sebesta",
        src: "/players/mii.jpg",
        color: "White",
        gp: 0,
        captain: false,
        mii: true,
    },
    {
        name: "Shaq",
        src: "/players/mii.jpg",
        color: "Blue",
        gp: 0,
        captain: false,
        mii: true,
    },
    {
        name: "Tate McRae",
        src: "/players/mii.jpg",
        color: "Orange",
        gp: 4,
        captain: false,
        mii: true,
        awards: [
            { name: "World Series Champion", season: 1},
        ]
    },
    {
        name: "Tiny Kong",
        src: "/players/Tiny_Kong.webp",
        color: "Light Blue",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Toadette",
        src: "/players/Toadette.webp",
        color: "Pink",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Toadsworth",
        src: "/players/Toadsworth.webp",
        color: "Brown",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Triangle",
        src: "/players/mii.jpg",
        color: "Light Blue",
        gp: 0,
        captain: false,
        mii: true,
    },
    {
        name: "Waluigi",
        src: "/players/Waluigi.webp",
        color: "Purple",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/WaluigiSpitballs-MSS.webp",
    },
    {
        name: "Wario",
        src: "/players/Wario.webp",
        color: "Yellow",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/WarioMuscles-MSS.webp",
    },
    {
        name: "Wiggler",
        src: "/players/Wiggler.webp",
        color: "Yellow",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "All-Star", season: 1},
        ]
    },
    {
        name: "Yellow Magikoopa",
        src: "/players/Yellow_Magikoopa.webp",
        color: "Yellow",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "World Series Champion", season: 1},
        ]
    },
    {
        name: "Yellow Pianta",
        src: "/players/Yellow_Pianta.webp",
        color: "Yellow",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Yellow Shy Guy",
        src: "/players/Yellow_Shy_Guy.webp",
        color: "Yellow",
        gp: 10,
        captain: false,
        mii: false,
    },
    {
        name: "Yellow Toad",
        src: "/players/Yellow_Toad.webp",
        color: "Yellow",
        gp: 10,
        captain: false,
        mii: false,
        awards: [
            { name: "1x Game MVP", season: 1},
        ]
    },
    {
        name: "Yellow Yoshi",
        src: "/players/Yellow_Yoshi.webp",
        color: "Yellow",
        gp: 1,
        captain: false,
        mii: false,
        awards: [
            { name: "All-Star", season: 1},
        ]
    },
    {
        name: "Yoshi",
        src: "/players/Yoshi.webp",
        color: "Light Green",
        gp: 10,
        captain: true,
        mii: false,
        banner: "/banners/YoshiEggs-MSS.webp",
    },
];