export interface IRank {
    name: string,
    hierarchy: number,
    isOfficer: boolean
}

export const Rank: {[name: string]: IRank} = {
    "Private": {
        name: "Private",
        hierarchy: 0,
        isOfficer: false
    },
    "Corporal": {
        name: "Corporal",
        hierarchy: 1,
        isOfficer: false,
    },
    "Sergeant": {
        name: "Sergeant",
        hierarchy: 2,
        isOfficer: false
    },
    "Staff Sergeant": {
        name: "Staff Sergeant",
        hierarchy: 3,
        isOfficer: false
    },
    "Technical Sergeant": {
        name: "Technical Sergeant",
        hierarchy: 4,
        isOfficer: false
    },
    "First Sergeant": {
        name: "First Sergeant",
        hierarchy: 5,
        isOfficer: false
    },
    "Master Sergeant": {
        name: "Master Sergeant",
        hierarchy: 6,
        isOfficer: false
    },
    "Second Lieutenant": {
        name: "Second Lieutenant",
        hierarchy: 3,
        isOfficer: true
    },
    "First Lieutenant": {
        name: "First Lieutenant",
        hierarchy: 3,
        isOfficer: true
    },
    "Captain": {
        name: "Captain",
        hierarchy: 4,
        isOfficer: true
    },
    "Major": {
        name: "Major",
        hierarchy: 4,
        isOfficer: true
    },
    "Lieutenant Colonel": {
        name: "Lieutenant Colonel",
        hierarchy: 5,
        isOfficer: true
    },
    "Colonel": {
        name: "Colonel",
        hierarchy: 6,
        isOfficer: true
    },
    "Brigadier General": {
        name: "Brigadier General",
        hierarchy: 7,
        isOfficer: true
    },
    "Major General": {
        name: "Major General",
        hierarchy: 8,
        isOfficer: true
    },
    "Lieutenant General": {
        name: "Lieutenant General",
        hierarchy: 9,
        isOfficer: true
    },
    "General": {
        name: "General",
        hierarchy: 10,
        isOfficer: true
    },
    "General of the Army": {
        name: "General of the Army",
        hierarchy: 11,
        isOfficer: true
    }
}