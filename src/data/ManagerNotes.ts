export type Manager = {
    name: string;
    src: string;
    color: string;
    record: string;
    division: string;
    divships?: number;
    playoffs?: number;
    champs?: number;
}

export const managers: Manager[] = [
    {
        name: "Isaac",
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
        src: "/managers/Brendan.jpg",
        color: "#CC0000",
        record: "7 - 3",
        division: "East",
        playoffs: 1,
        divships: 1,
        champs: 0,
    },
    {
        name: "Christach",
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
        src: "/managers/Morgan.jpg",
        color: "#FF00FF",
        record: "5 - 5",
        division: "East",
        playoffs: 1,
        divships: 1,
        champs: 0,
    },
    {
        name: "James",
        src: "/managers/James.JPG",
        color: "#F1C232",
        record: "6 - 4",
        division: "East",
        playoffs: 1,
        divships: 0,
        champs: 1,
    },
    {
        name: "DANdrew",
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
        src: "/managers/Matt.jpg",
        color: "#6AA84F",
        record: "4 - 6",
        division: "East",
        playoffs: 0,
        divships: 0,
        champs: 0,
    },

]