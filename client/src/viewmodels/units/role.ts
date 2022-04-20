export interface IRole {
    name: string
}

export const Role: {[name: string]: IRole} = {
    standard: {
        name: "Standard"
    },
    artilery: {
        name: "Artillery"
    },
    antiTank: {
        name: "Anti-tank"
    },
    engineer: {
        name: "Engineer"
    },
    pioneer: {
        name: "Pioneer"
    },
    signal: {
        name: "Signal"
    },
    recon: {
        name: "Reconnaissance"
    },
    antiAircraft: {
        name: "Anti-aircraft"
    },
    light: {
        name: "Light"
    },
    heavy: {
        name: "Heavy"
    },
    medical: {
        name: "Medical"
    },
    machineGun: {
        name: "Machine Gun"
    },
    weapons: {
        name: "Weapons"
    },
    militaryPolice: {
        name: "Military Police"
    }
}

export interface IIndividualRole {
    name: string,
    description: string | null
}

export const IndividualRole: {[name: string]: IIndividualRole} = {
    rifleman: {
        name: "Rifleman",
        description: null
    },
    recon: {
        name: "Reconnaissance",
        description: null
    },
    lightMachineGunner: {
        name: "Light Machine Gunner",
        description: null
    },
    assistantGunner: {
        name: "Assistant Gunner",
        description: null
    },
    grenadier: {
        name: "Grenadier",
        description: null
    },
    assistantGrenadier: {
        name: "Assistant Grenadier",
        description: null
    },
    driver: {
        name: "Driver",
        description: null
    },
    teamLeader: {
        name: "Team Leader",
        description: null
    },
    assistantTeamLeader: {
        name: "Assistant Team Leader",
        description: null
    },
    sectionLeader: {
        name: "Section Leader",
        description: null
    },
    dedicatedMarksman: {
        name: "Dedicated Marksman",
        description: null
    },
    vehicleGunner: {
        name: "Vehicle Gunner",
        description: null
    },
    automaticRifleman: {
        name: "Automatic Rifleman",
        description: null
    },
    medic: {
        name: "Medic",
        description: null
    },
    corpsman: {
        name: "Corpsman",
        description: null
    },
    antiTankGunner: {
        name: "Anti-Tank Gunner",
        description: null
    },
    assistantAntiTankGunner: {
        name: "Assistant Anti-Tank Gunner",
        description: null
    },
    mortarMen: {
        name: "Mortar Man",
        description: null
    },
    ammunitionBearer: {
        name: "Ammunition Bearer",
        description: null
    },
    sniper: {
        name: "Sniper",
        description: null
    }
}

export interface ILeadership {
    name: string,
    description: string | null
}

export const Leadership: {[name: string]: ILeadership} = {
    leader: {
        name: "Unit Commander",
        description: null
    },
    secondInCommand: {
        name: "Second-in-Command",
        description: null
    },
    topSergeant: {
        name: "Top NCO",
        description: "Don't select if the top ranking sergeant is the leader of the unit. The highest ranking NCO in the unit. Though subservent to the highest ranking officer, the top ranking sergeant is often delegated specific responsibilities, as they often have the most frontline experience of anyone in the unit. These tasks typically concern soldier discipline and tactical combat decisionmaking."
    },
    enlisted: {
        name: "Enlisted",
        description: "Standard personelle"
    }
}