type Penant = {
    season: number;
    type: string;
    division?: string;
}

export type Manager = {
    name: string;
    emblem: string;
    src: string;
    color: string;
    record: string;
    division: string;
    penants?: Penant[];
    divships?: number;
    playoffs?: number;
    champs?: number;
}

export const managers: Manager[] = [
    {
        name: "Isaac",
        emblem: "/emblems/MSS-Emblem-MarioFireballs.png",
        src: "/managers/Isaac.jpg",
        color: "#3586E8",
        record: "4 - 6",
        division: "West",
        playoffs: 0,
        divships: 0,
        champs: 0,
    },
    {
        name: "Brendan",
        emblem: "/emblems/MSS-Emblem-DKWilds.webp",
        src: "/managers/Brendan.JPEG",
        color: "#CC0000",
        record: "7 - 3",
        division: "East",
        penants: [
            {season: 1, type: "World Series Runner Up"},
            {season: 1, type: "Division Champion", division: "East"}
        ],
        playoffs: 1,
        divships: 1,
        champs: 0,
    },
    {
        name: "Christach",
        emblem: "/emblems/MSS-Emblem-PeachMonarchs.png",
        src: "/managers/Christach.jpg",
        color: "#9900FF",
        record: "3 - 7",
        division: "West",
        playoffs: 0,
        divships: 0,
        champs: 0,
    },
    {
        name: "Justin",
        emblem: "/emblems/MSS-Emblem-LuigiKnights.webp",
        src: "/managers/Justin.jpg",
        color: "#FF9900",
        record: "6 - 4",
        division: "East",
        playoffs: 1,
        divships: 0,
        champs: 0,
    },
    {
        name: "Morgan",
        emblem: "/emblems/MSS-Emblem-DiddyMonkeys.webp",
        src: "/managers/Morgan.jpg",
        color: "#FF00FF",
        record: "5 - 5",
        division: "West",
        penants: [
            {season: 1, type: "Division Champion", division: "West"}
        ],
        playoffs: 1,
        divships: 1,
        champs: 0,
    },
    {
        name: "James",
        emblem: "/emblems/MSS-Emblem-BowserMonsters.webp",
        src: "/managers/James.JPG",
        color: "#F1C232",
        record: "6 - 4",
        division: "East",
        penants: [
            {season: 1, type: "World Series Champion"},
        ],
        playoffs: 1,
        divships: 0,
        champs: 1,
    },
    {
        name: "DANdrew",
        emblem: "/emblems/MSS-Emblem-WaluigiSpitballs.webp",
        src: "/managers/Andrew.jpg",
        color: "#999999",
        record: "5 - 5",
        division: "West",
        playoffs: 0,
        divships: 0,
        champs: 0,
    },
    {
        name: "Matt",
        emblem: "/emblems/MSS-Emblem-YoshiEggs.webp",
        src: "/managers/Matt.jpg",
        color: "#6AA84F",
        record: "4 - 6",
        division: "East",
        playoffs: 0,
        divships: 0,
        champs: 0,
    },

]