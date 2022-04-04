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