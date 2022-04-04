export interface IMobility {
    name: string,
    description: string
}

export const Mobility: {[name: string]: IMobility} = {
    armored: {
        name: "Armored",
        description: "Armored units utilize tanks in a primary role. Though infantry, artillery, and other elements are essential supporting elements of large armored forces, in an armored unit tanks represent the essential force."
    },
    mechanized: {
        name: "Mechanized",
        description: "Mechanized units primarily consist of infantry in well-armored vehicles that typically also provide mounted armament."
    },
    motorized: {
        name: "Motorized",
        description: "Motorized units utilize soft-skinned vehicles to transport artillery, supplies, ammunition, personelle. and more to the front line. Motorized infantry fight dismounted as their transport featues little to no armor or armament."
    },
    infantry: {
        name: "Infantry",
        description: "Standard infantry units fight and travel by foot."
    },

    airborne: {
        name: "Airborne",
        description: "Paratroopers and airforce ground crews."
    },

}
