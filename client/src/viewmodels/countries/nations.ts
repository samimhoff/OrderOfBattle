import { Faction } from './factions';

export interface INation {
    name: string,
    faction: Faction,
    description?: string
}

export enum NationsList {
    france = "France",
    germany = "Germany",
    unitedStates = "The United States",
    unitedKingdom = "The United Kingdom",
    sovietUnion = "The Soviet Union",
    japan = "Japan",
    poland = "Poland",
    china = "China",
    italy = "Italy",
    vichyFrance = "Vichy France",
    romania = "Romania",
    finland = "Finland",
    norway = "Norway",
    greece = "Greece"
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
    norway: {
        name: "Norway",
        faction: Faction.allies
    },
    greece: {
        name: "Greece",
        faction: Faction.allies
    }
}

