CREATE DATABASE orderofbattle;

DROP TABLE IF EXISTS unit;
DROP TABLE IF EXISTS unit_individual;
DROP TABLE IF EXISTS unit_weapon;
DROP TABLE IF EXISTS unit_vehicle;
DROP TABLE IF EXISTS unit_equipment;
DROP TABLE IF EXISTS individual;
DROP TABLE IF EXISTS individual_weapon;
DROP TABLE IF EXISTS individual_equipment;
DROP TABLE IF EXISTS weapon;
DROP TABLE IF EXISTS vehicle;
DROP TABLE IF EXISTS equipment;

CREATE TABLE unit(
    unit_id SERIAL PRIMARY KEY NOT NULL,
    generic_name VARCHAR(250) NOT NULL,
    specific_name VARCHAR(250),
    nation VARCHAR(250) NOT NULL,
    theater VARCHAR(250) NOT NULL,
    size VARCHAR(150) NOT NULL, 
    size_index real NOT NULL, 
    branch VARCHAR(250) NOT NULL,
    role VARCHAR(250) NOT NULL,
    arm VARCHAR(250),
    specialization VARCHAR(250),
    date DATE NOT NULL,
    description TEXT
)

CREATE TABLE unit_relation(
    unit_relation_id SERIAL PRIMARY KEY,
    count INTEGER,
    unit_owner_id INTEGER 
        REFERENCES unit (unit_id),
    unit_belonger_id INTEGER
        REFERNCES unit (unit_id)
    CHECK (unit1_id != unit2_id)
)

CREATE TABLE unit_individual(
    unit_id NOT NULL,
    individual_id NOT NULL,
    leadership VARCHAR(250),
    PRIMARY KEY (unit_id, individual_id),
    FOREIGN KEY (unit_id)
        REFERENCES unit (unit_id)
    FOREIGN KEY (individual_id)
        REFERENCES individual (individual_id)
) 

CREATE TABLE unit_weapon(
    unit_id NOT NULL,
    weapon_id NOT NULL,
    isPrimary BOOLEAN,
    PRIMARY KEY (unit_id, weapon_id),
    FOREIGN KEY (unit_id)
        REFERENCES unit (unit_id)
    FOREIGN KEY (weapon_id)
        REFERENCES weapon (weapon_id)
) 

CREATE TABLE unit_vehicle(
    unit_id NOT NULL,
    vehicle_id NOT NULL,
    PRIMARY KEY (unit_id, vehicle_id),
    FOREIGN KEY (unit_id)
        REFERENCES unit (unit_id)
    FOREIGN KEY (vehicle_id)
        REFERENCES vehicle (vehicle_id)
) 

CREATE TABLE unit_equipment(
    individual_id NOT NULL,
    unit_id NOT NULL,
    isPrimary BOOLEAN,
    PRIMARY KEY (unit_id, equipment_id),
    FOREIGN KEY (unit_id)
        REFERENCES unit (unit_id)
    FOREIGN KEY (equipment_id)
        REFERENCES equipment (equipment_id)
)


CREATE TABLE individual(
    individual_id SERIAL PRIMARY KEY NOT NULL,
    generic_name VARCHAR(250) NOT NULL,
    specific_name VARCHAR(250),
    role VARCHAR(250) NOT NULL,
    nation VARCHAR(250) NOT NULL,
    leadership VARCHAR(100) NOT NULL,
    rank VARCHAR(250) NOT NULL,
    rank_index real NOT NULL,
    description TEXT
)

CREATE TABLE individual_weapon(
    individual_id NOT NULL,
    weapon_id NOT NULL,
    isPrimary BOOLEAN,
    PRIMARY KEY (individual_id, weapon_id),
    FOREIGN KEY (individual_id)
        REFERENCES individual (individual_id)
    FOREIGN KEY (weapon_id)
        REFERENCES weapon (weapon_id)
) 

CREATE TABLE individual_equipment(
    individual_id NOT NULL,
    equipment_id NOT NULL,
    isPrimary BOOLEAN,
    PRIMARY KEY (individual_id, equipment_id),
    FOREIGN KEY (individual_id)
        REFERENCES individual (individual_id)
    FOREIGN KEY (equipment_id)
        REFERENCES equipment (equipment_id)
) 

CREATE TABLE weapon(
    weapon_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    action VARCHAR(50) NOT NULL,
    caliber VARCHAR(100) NOT NULL,
    nationOfOrigin VARCHAR(100) NOT NULL,
    effectiveRange INTEGER NOT NULL,
    rateOfFire INTEGER,
    weight NUMERIC(10,1) NOT NULL,
    capacity INTEGER NOT NULL,
    date DATE NOT NULL,
    description TEXT, 
    weaponType VARCHAR(100) NOT NULL,
    crewServed BOOLEAN NOT NULL,
    photo TEXT
);

CREATE TABLE vehicle(
    vehicle_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(250) NOT NULL,
    nation VARCHAR(250) NOT NULL,
    role VARCHAR(250) NOT NULL,
    armor_classificaiton VARCHAR(250),
    compliment INTEGER NOT NULL,
    transport INTEGER,
    cannon_caliber NUMERIC(10,2),
    armament_description VARCHAR(250),
    speed INTEGER NOT NULL,
    weight NUMERIC(10,2) NOT NULL,
    date DATE,
    description TEXT
)

CREATE TABLE equipment(
    equipment_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(250) NOT NULL,
    role VARCHAR(250) NOT NULL,
    description TEXT
)