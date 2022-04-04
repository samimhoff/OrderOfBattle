export interface ISize {
    name: string,
    hierarchy: number
}

export const Size: {[name: string]: ISize} = {
    fireteam: {
        name: "Fireteam",
        hierarchy: 1
    },
    hq: {
        name: "Headquarters",
        hierarchy: 1
    },
    squad: {
        name: "Squad",
        hierarchy: 2,
    },
    platoon: {
        name: "Platoon",
        hierarchy: 3,
    },
    company: {
        name: "Company",
        hierarchy: 4,
    },
    battalion: {
        name: "Battalion",
        hierarchy: 5,
    },
    regiment: {
        name: "Regiment",
        hierarchy: 6,
    },
    brigade: {
        name: "Brigade",
        hierarchy: 7,
    },
    division: {
        name: "Division",
        hierarchy: 8,
    },
    corps: {
        name: "Corps",
        hierarchy: 9,
    },
    army: {
        name: "Army",
        hierarchy: 10,
    },
    armyGroup: {
        name: "Army Corps",
        hierarchy: 11,
    },
    theater: {
        name: "Theater",
        hierarchy: 12,
    },
}