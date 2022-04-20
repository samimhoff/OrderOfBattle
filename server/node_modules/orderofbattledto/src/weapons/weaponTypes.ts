export interface IWeaponTypes {
    pistol: IWeaponTypeDetails,
    rifle: IWeaponTypeDetails,
    shotgun: IWeaponTypeDetails,
    sniperRifle: IWeaponTypeDetails,
    submachineGun: IWeaponTypeDetails,
    lightmachineGun: IWeaponTypeDetails,
    mediumMachineGun?: IWeaponTypeDetails,
    heavyMachineGun?: IWeaponTypeDetails,
    antiTankShoulderWeapon?: IWeaponTypeDetails,
    flamethrower?: IWeaponTypeDetails,
    mortar?: IWeaponTypeDetails,
    mine?: IWeaponTypeDetails,
    antiTankGun?: IWeaponTypeDetails,
}

export interface IWeaponTypeDetails {
    name: string,
    exampleCaliber: string,
    details: string,
    crewServed: boolean
}

export enum WeaponTypes {
    pistol = "pistol",
    rifle = "rifle",
    shotgun = "shotgun",
    sniperRifle = "sniper rifle",
    submachineGun = "submachine gun",
    lightmachineGun = "light machine gun",
    mediumMachineGun = "medium machine gun",
    heavyMachineGun = "heavy machine gun",
}

