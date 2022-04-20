import { WeaponTypes } from "./weapons/weaponTypes";

//////////////////////////////
//////////WEAPONS///////////
/////////////////////////////

//-----Interfaces---------//

export interface IWeapon {
    name: string,
    action: action,
    caliber: string | caliber,
    nationOfOrigin: nation,
    effectiveRange: number, //In meters
    rateOfFire?: number, //Per minute. For non-auto can be null.
    weight: number, //weight in pounds, with one decimal places
    capacity: number,
    year: Date,
    description: string,
    weaponType: WeaponTypes,
    crewServed: boolean,
}




//-----Enums------------//

export enum targets {
    personelle,
    armored,

}

export enum caliber {
    NineMM = "9mm",
    FortyFiveACP = ".45ACP",
    EightMMMauser = "8mm Mauser"
}

export enum action {
    manual = "manual",
    semiAutomatic = "semi automatic",
    automatic = "automatic"
}

export enum nation {
    france = "France",
    germany = "Germany",
    unitedStates = "United States",
    unitedKingdom = "United Kingdom",
    sovietUnion = "Soviet Union",
    japan = "Japan",
    poland = "Poland",
    china = "China",
    italy = "Italy",
    vichyFrance = "Vichy France",
    romania = "Romania",
    finland = "Finland",
    india = "India",
    norway = "Norway"
}

export enum Faction {
    allies = "Allies",
    axis = "Axis",
    commintern = "Commintern"
}

export interface INation {
    name: string,
    faction: Faction,
    description?: string
}

export const Nations: {[name: string]: INation} = {
    france: {
        name: "France",
        faction: Faction.allies,
    },
    germany: {
        name: "Germany",
        faction: Faction.axis
    },
    unitedStates: {
        name: "The United States",
        faction: Faction.allies
    },
    unitedKingdom: {
        name: "The United Kingdom",
        faction: Faction.allies
    },
    sovietUnion: {
        name: "The Soviet Union",
        faction: Faction.commintern
    },
    japan: {
        name: "Japan",
        faction: Faction.axis
    },
    poland: {
        name: "Poland",
        faction: Faction.allies
    },
    china: {
        name: "China",
        faction: Faction.allies
    },
    italy: {
        name: "Italy",
        faction: Faction.axis
    },
    vichyFrance: {
        name: "Vichy France",
        faction: Faction.axis,
        description: "After France surrendered, the southeastern half of France joined the axis powers as a puppet state."
    },
    romania: {
        name: "Romania",
        faction: Faction.axis
    },
    finland: {
        name: "Finland",
        faction: Faction.axis,
        description: "Finland was invaded by the Soviet Union and so joined the Axis out of a desire for self-preservation rather than for aggrandizement or to conquer its neighbors."
    },
    britishIndia: {
        name: "British India",
        faction: Faction.allies,
        description: "Indian colonial troops were employed widely by the United Kingdom."
    },
    norway: {
        name: "Norway",
        faction: Faction.allies
    }

}