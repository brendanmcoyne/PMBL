export type Manager = {
    name: string;
    oldname?: string;
    emblem: string;
    src: string;
    color: string;
    record: string;
    division: string;
    divships?: number;
    playoffs?: number;
    champs?: number;
    s1banner: string;
    s2banner: string;
}

export const managers: Manager[] = [

    {
        name: "Brendan",
        emblem: "/emblems/MSS-Emblem-BowserMonsters.webp",
        src: "/managers/Brendan.JPEG",
        color: "#CC0000",
        record: "7 - 3",
        division: "East",
        playoffs: 1,
        divships: 1,
        champs: 0,
        s1banner: "/banners/DKWilds-MSS.webp",
        s2banner: "/banners/BowserMonsters-MSS.webp",
    },
    {
        name: "Justave",
        oldname: "Justin",
        emblem: "/emblems/MSS-Emblem-LuigiKnights.webp",
        src: "/managers/Justave.jpg",
        color: "#FF9900",
        record: "6 - 4",
        division: "East",
        playoffs: 1,
        divships: 0,
        champs: 0,
        s1banner: "/banners/LuigiKnights-MSS.webp",
        s2banner: "/banners/LuigiKnights-MSS.webp"
    },
    {
        name: "James",
        emblem: "/emblems/MSS-Emblem-BirdoBows.webp",
        src: "/managers/James.JPG",
        color: "#F1C232",
        record: "6 - 4",
        division: "East",
        playoffs: 1,
        divships: 0,
        champs: 1,
        s1banner: "/banners/BowserMonsters-MSS.webp",
        s2banner: "/banners/BirdoBows-MSS.webp",
    },
    {
        name: "Marge",
        oldname: "Matt",
        emblem: "/emblems/MSS-Emblem-PeachMonarchs.png",
        src: "/managers/Marge.jpg",
        color: "#6AA84F",
        record: "4 - 6",
        division: "East",
        playoffs: 0,
        divships: 0,
        champs: 0,
        s1banner: "/banners/YoshiEggs-MSS.webp",
        s2banner: "/banners/PeachMonarchs-MSS.webp",
    },
    {
        name: "Isaac",
        emblem: "/emblems/MSS-Emblem-DKWilds.webp",
        src: "/managers/Isaac.jpg",
        color: "#3586E8",
        record: "4 - 6",
        division: "West",
        playoffs: 0,
        divships: 0,
        champs: 0,
        s1banner: "/banners/MarioFireballs-MSS.webp",
        s2banner: "/banners/DKWilds-MSS.webp",
    },
    {
        name: "Trocean",
        oldname: "Christach",
        emblem: "/emblems/MSS-Emblem-MarioFireballs.png",
        src: "/managers/Trocean.jpg",
        color: "#9900FF",
        record: "3 - 7",
        division: "West",
        playoffs: 0,
        divships: 0,
        champs: 0,
        s1banner: "/banners/PeachMonarchs-MSS.webp",
        s2banner: "/banners/MarioFireballs-MSS.webp",
    },
    {
        name: "Morgan",
        emblem: "/emblems/MSS-Emblem-DaisyFlowers.webp",
        src: "/managers/Morgan.jpg",
        color: "#FF00FF",
        record: "5 - 5",
        division: "West",
        playoffs: 1,
        divships: 1,
        champs: 0,
        s1banner: "/banners/DiddyMonkeys-MSS.webp",
        s2banner: "/banners/DiddyMonkeys-MSS.webp",
    },
    {
        name: "THANdrew",
        oldname: "DANdrew",
        emblem: "/emblems/MSS-Emblem-WaluigiSpitballs.webp",
        src: "/managers/THANdrew.jpg",
        color: "#999999",
        record: "5 - 5",
        division: "West",
        playoffs: 0,
        divships: 0,
        champs: 0,
        s1banner: "/banners/WaluigiSpitballs-MSS.webp",
        s2banner: "/banners/WaluigiSpitballs-MSS.webp",
    },


]