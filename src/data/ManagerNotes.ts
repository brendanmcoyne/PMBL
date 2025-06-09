export type Manager = {
    name: string;
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
        color: "#3586E8",
        record: "4 - 6",
        division: "West",
        playoffs: 0,
        divships: 0,
        champs: 0,
    },
    {
        name: "Brendan",
        color: "#CC0000",
        record: "7 - 3",
        division: "East",
        playoffs: 1,
        divships: 1,
        champs: 0,
    },
    {
        name: "Christach",
        color: "#9900FF",
        record: "3 - 7",
        division: "West",
        playoffs: 0,
        divships: 0,
        champs: 0,
    },
    {
        name: "Justin",
        color: "#FF9900",
        record: "6 - 4",
        division: "East",
        playoffs: 1,
        divships: 0,
        champs: 0,
    },
    {
        name: "Morgan",
        color: "#FF00FF",
        record: "5 - 5",
        division: "East",
        playoffs: 1,
        divships: 1,
        champs: 0,
    },
    {
        name: "James",
        color: "#F1C232",
        record: "6 - 4",
        division: "East",
        playoffs: 1,
        divships: 0,
        champs: 1,
    },
    {
        name: "DANdrew",
        color: "#999999",
        record: "5 - 5",
        division: "West",
        playoffs: 0,
        divships: 0,
        champs: 0,
    },
    {
        name: "Matt",
        color: "#6AA84F",
        record: "4 - 6",
        division: "East",
        playoffs: 0,
        divships: 0,
        champs: 0,
    },

]