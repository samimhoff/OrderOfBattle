export interface ISize {
    name: string,
    hierarchy: number
}

export const Size: {[name: string]: ISize} = {
    "Fireteam": {
        name: "Fireteam",
        hierarchy: 1
    },
    "Headquarters": {
        name: "Headquarters",
        hierarchy: 1
    },
    "Squad": {
        name: "Squad",
        hierarchy: 2,
    },
    "Platoon": {
        name: "Platoon",
        hierarchy: 3,
    },
    "Company": {
        name: "Company",
        hierarchy: 4,
    },
    "Battalion": {
        name: "Battalion",
        hierarchy: 5,
    },
    "Regiment": {
        name: "Regiment",
        hierarchy: 6,
    },
    "Brigade": {
        name: "Brigade",
        hierarchy: 7,
    },
    "Division": {
        name: "Division",
        hierarchy: 8,
    },
    "Corps": {
        name: "Corps",
        hierarchy: 9,
    },
    "Army": {
        name: "Army",
        hierarchy: 10,
    },
    "Army Corps": {
        name: "Army Corps",
        hierarchy: 11,
    },
    "Theater": {
        name: "Theater",
        hierarchy: 12,
    },
}