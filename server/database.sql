DROP DATABASE IF EXISTS orderofbattle
CREATE DATABASE orderofbattle

DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS unit;
DROP TABLE IF EXISTS unit_individual;
DROP TABLE IF EXISTS unit_weapon;
DROP TABLE IF EXISTS unit_vehicle;
DROP TABLE IF EXISTS unit_equipment;
DROP TABLE IF EXISTS individual;
DROP TABLE IF EXISTS individual_weapon;
DROP TABLE IF EXISTS individual_equipment;
DROP TABLE IF EXISTS vehicle;
DROP TABLE IF EXISTS equipment;
DROP TABLE IF EXISTS weapon;


CREATE TABLE client(
    client_id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
)



CREATE TABLE unit(
    unit_id SERIAL PRIMARY KEY NOT NULL,
    generic_name VARCHAR(250) NOT NULL,
    specific_name VARCHAR(250),
    nation VARCHAR(250) NOT NULL,
    theater VARCHAR(250) NOT NULL,
    size VARCHAR(150) NOT NULL, 
    size_index INT NOT NULL, 
    mobility VARCHAR(250) NOT NULL,
    role VARCHAR(250) NOT NULL,
    specialization VARCHAR(250),
    date DATE NOT NULL,
    description TEXT
);



CREATE TABLE individual(
    individual_id SERIAL PRIMARY KEY NOT NULL,
    generic_name VARCHAR(250) NOT NULL,
    specific_name VARCHAR(250),
    role VARCHAR(250) NOT NULL,
    nation VARCHAR(250) NOT NULL,
    leadership VARCHAR(100) NOT NULL,
    rank VARCHAR(250) NOT NULL,
    rank_index real,
    description TEXT
);


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
);

CREATE TABLE equipment(
    equipment_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(250) NOT NULL,
    role VARCHAR(250) NOT NULL,
    description TEXT
);

CREATE TABLE unit_relation(
    unit_relation_id SERIAL PRIMARY KEY,
    count INTEGER,
    unit_owner_id INTEGER REFERENCES unit (unit_id),
    unit_belonger_id INTEGER REFERENCES unit (unit_id)
    CHECK (unit_owner_id != unit_belonger_id)
);

CREATE TABLE unit_individual(
    unit_id INT NOT NULL,
    individual_id INT NOT NULL,
    leadership VARCHAR(250),
    PRIMARY KEY (unit_id, individual_id),
    FOREIGN KEY (unit_id) 
    REFERENCES unit (unit_id),
    FOREIGN KEY (individual_id) 
    REFERENCES individual (individual_id)
); 

CREATE TABLE unit_weapon(
    unit_id INT NOT NULL,
    weapon_id INT NOT NULL,
    isPrimary BOOLEAN,
    PRIMARY KEY (unit_id, weapon_id),
    FOREIGN KEY (unit_id) 
    REFERENCES unit (unit_id),
    FOREIGN KEY (weapon_id) 
    REFERENCES weapon (weapon_id)
); 

CREATE TABLE unit_vehicle(
    unit_id INT NOT NULL,
    vehicle_id INT NOT NULL,
    PRIMARY KEY (unit_id, vehicle_id),
    FOREIGN KEY (unit_id) 
    REFERENCES unit (unit_id),
    FOREIGN KEY (vehicle_id) 
    REFERENCES vehicle (vehicle_id)
);

CREATE TABLE unit_equipment(
    unit_id INT NOT NULL,
    equipment_id INT NOT NULL,
    isPrimary BOOLEAN,
    PRIMARY KEY (unit_id, equipment_id),
    FOREIGN KEY (unit_id) 
    REFERENCES unit (unit_id),
    FOREIGN KEY (equipment_id) 
    REFERENCES equipment (equipment_id)
);


CREATE TABLE individual_weapon(
    individual_id INT NOT NULL,
    weapon_id INT NOT NULL,
    isPrimary BOOLEAN,
    PRIMARY KEY (individual_id, weapon_id),
    FOREIGN KEY (individual_id) 
    REFERENCES individual (individual_id),
    FOREIGN KEY (weapon_id) 
    REFERENCES weapon (weapon_id)
); 

CREATE TABLE individual_equipment(
    individual_id INT NOT NULL,
    equipment_id INT NOT NULL,
    isPrimary BOOLEAN,
    PRIMARY KEY (individual_id, equipment_id),
    FOREIGN KEY (individual_id) 
    REFERENCES individual (individual_id),
    FOREIGN KEY (equipment_id) 
    REFERENCES equipment (equipment_id)
); 