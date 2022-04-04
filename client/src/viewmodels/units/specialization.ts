import { NationsList } from '../countries/nations';

export interface ISpecialization {
    name: string,
    nation: NationsList | null
    description?: string
}

export const Specialization: {[name: string]: ISpecialization} = {
    none: {
        name: "",
        nation: null
    },
    navy: {
        name:"Navy",
        nation: null
    },
    garrison: {
        name: "Garrison",
        nation: null,
        description: "Troops stationed for limited, static defense."
    },
    militia: {
        name: "Militia",
        nation: null,
        description: "Troops made from hastily-recruited civillian sources."
    },
    usmc: {
        name: "USMC",
        nation: NationsList.unitedStates
    },
    waffen: {
        name: "Waffen",
        nation: NationsList.germany
    },
    volksturm: {
        name: "Volksturm",
        nation: NationsList.germany
    },
    guards: {
        name: "Guards",
        nation: NationsList.sovietUnion
    },
}