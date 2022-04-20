const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//===================================================================
//----------------------------WEAPONS--------------------------------
//===================================================================

app.post("/weapons/", async(req, res) => {
    try {
        const { 
            name,
            action,
            caliber,
            nationOfOrigin,
            effectiveRange,
            rateOfFire,
            weight,
            capacity,
            date,
            description,
            weaponType,
            crewServed,
            photo
        } = req.body;
        const weaponPosted = await pool.query(`INSERT INTO weapon (name,
            action,
            caliber,
            nationOfOrigin,
            effectiveRange,
            rateOfFire,
            weight,
            capacity,
            date,
            description,
            weaponType,
            crewServed,
            photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
            [name,
            action,
            caliber,
            nationOfOrigin,
            effectiveRange,
            rateOfFire,
            weight,
            capacity,
            date,
            description,
            weaponType,
            crewServed,
            photo]
        )
        res.json(weaponPosted.rows);
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
})

//get all weapons
app.get("/weapons/", async(req, res) => {
    try {  
        const allWeapons = await pool.query("SELECT * FROM weapon");
        res.json(allWeapons.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a weapon
app.get("/weapons/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const weapon = await pool.query("SELECT * FROM weapon WHERE weapon_id = $1", [id]);
        res.json(weapon.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

app.delete("/weapons/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM weapon WHERE weapon_id = $1", [id]);
        res.json("Weapon was deleted!");
    } catch (error) {   
        console.error(error.message);
    }
})

app.put("/weapons/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const { name } = req.body;
        const weaponUpdated = await pool.query("UPDATE weapon SET weapon_name = $1 WHERE weapon_id = $2", [name, id]);
    } catch (error) {
        console.error(error.message);
    }
})

//===================================================================
//------------------------Individuals--------------------------------
//===================================================================
app.get("/individuals/", async(req, res) => {
    try {  
        const allIndividuals = await pool.query("SELECT * FROM individual");
        res.json(allIndividuals.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.post("/individuals/", async(req, res) => {
    try {
        //POST individual to DB
        const {
            generic_name,
            role,
            nation,
            leadership,
            rank,
            rank_index,
            description,
            weaponId,
            unitId
        } = req.body;
        const individualPosted = await pool.query(`INSERT INTO individual (generic_name,
            role,
            nation,
            leadership,
            rank,
            rank_index,
            description) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [generic_name,
            role,
            nation,
            leadership,
            rank,
            rank_index,
            description]
        )
        //GET ID OF RECENTLY POSTED INDIVIDUAL
        const newestIndividualId = await pool.query(`SELECT individual_id FROM individual ORDER BY individual_id DESC LIMIT 1`)
        const newIndividualId = newestIndividualId.rows[0].individual_id;
        console.log('new Individual Id: ', newIndividualId);
        
        const individualWeaponPosted = await pool.query(`INSERT INTO individual_weapon(individual_id,
            weapon_id,
            isPrimary) VALUES ($1, $2, $3)`,
            [newIndividualId,
            weaponId,
            true]
        )

        const individualUnitPosted = await pool.query(`INSERT INTO unit_individual(unit_id,
            individual_id,
            leadership) VALUES ($1, $2, $3)`,
            [unitId,
            newIndividualId,
            leadership]
        )
        res.json('individual was posted.');
        // console.log(typeof newestIndividualId.rows[0].unit_id);
        // console.log(individualUnitPosted.rows);
        // console.log(individualWeaponPosted.rows);
    } catch (error) {   
        console.error(error.message);
    }
})



//===================================================================
//------------------------------Units--------------------------------
//===================================================================
app.get("/units/", async(req, res) => {
    try {  
        const allUnits = await pool.query("SELECT * FROM unit");
        console.log('units rows: ', allUnits.rows);
        res.json(allUnits.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//----------QUERY FOR GETTING ALL UNITS IN A UNIT HIERARCHY--------//
app.get("/allunits/:id", async(req, res) => {
    const { id } = req.params;
    console.log("allunits id: ", id);
    if (id === 0 || undefined) {
        return res.json('No id provided in /allunits/:id');
    }
    try { 
        getUnitDataRecurse(null, id);
    } catch (error) {
        console.error(err.message);
    }
})

const getUnitDataRecurse = (data, id) => {
    //continue calling into database with base case being that the unit doesn't have any children.
    if (id === 0 || undefined) {
        return data;
    } 

}

app.post("/units/", async(req, res) => {
    try {
        const {
            generic_name,
            nation,
            theater,
            size,
            size_index,
            mobility,
            role,
            specialization,
            date,
            description
        } = req.body;
        const unitPosted = await pool.query(`INSERT INTO unit (
            generic_name,
            nation,
            theater,
            size,
            size_index,
            mobility,
            role,
            specialization,
            date,
            description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [generic_name,
            nation,
            theater,
            size,
            size_index,
            mobility,
            role,
            specialization,
            date,
            description]
        ) 
        const retrieve = await pool.query(`SELECT unit_id FROM unit ORDER BY unit_id DESC LIMIT 1`)
        res.json(retrieve.rows[0]);
    } catch (error) {   
        console.error(error.message);
    }
})

app.post("/units/:id", async(req, res) => {
    try {
        const {
            generic_name,
            nation,
            theater,
            size,
            size_index,
            mobility,
            role,
            specialization,
            date,
            description
        } = req.body;
        const unitPosted = await pool.query(`INSERT INTO unit (
            generic_name,
            nation,
            theater,
            size,
            size_index,
            mobility,
            role,
            specialization,
            date,
            description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [generic_name,
            nation,
            theater,
            size,
            size_index,
            mobility,
            role,
            specialization,
            date,
            description]
        ) 
        const retrieve = await pool.query(`SELECT unit_id FROM unit ORDER BY unit_id DESC LIMIT 1`)
        res.json(retrieve.rows[0]);
    } catch (error) {   
        console.error(error.message);
    }
})



app.put("/units/:id", async (req, res) => {
    console.log('update fired');
    const { id } = req.params;
    try {
        const {
            generic_name,
            nation,
            theater,
            size,
            size_index,
            mobility,
            role,
            specialization,
            date,
            description
        } = req.body;
        const unitUpdated = await pool.query(`UPDATE unit
            SET 
                generic_name = $1,
                nation = $2,
                theater = $3,
                size = $4,
                size_index = $5,
                mobility = $6,
                role = $7,
                specialization = $8,
                date = $9,
                description = $10
            WHERE 
                unit_id = $11`,
            [generic_name,
            nation,
            theater,
            size,
            size_index,
            mobility,
            role,
            specialization,
            date,
            description]    
        );
    } catch (error) {   
        console.error(error.message);
    }
})

// GET individuals by unit Id
app.get("/unitindividuals/:id", async(req, res) => {
    const { id } = req.params;
    try {  
        if (id != 0 || undefined) {
            console.log('id: ', id);
            const individualIdData = await pool.query(`SELECT * FROM unit_individual WHERE unit_id = $1`, [id]);
            if (individualIdData.rows.length) {
                console.log('Individual Id Data: ', individualIdData.rows);
                const individualIds = individualIdData.rows.map(individual => individual.individual_id);
                const allIds = individualIds.join(', ');
                console.log('all ids: ', allIds);
                const allIndividuals = await pool.query(`SELECT * FROM individual WHERE individual_id IN (` + allIds + `)`);
                console.log(allIndividuals.rows);
                res.json(allIndividuals.rows);
            } else {
                res.json('no responses');
            }
        } else {
            res.json('no individual yet.')
        }
        
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/unitindividuals/", async (req, res) => {
    try {
        const allUnitIndividuals = await pool.query("SELECT * FROM unit_individual");
        res.json(allUnitIndividuals.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//===================================================================
//----------------------Get Join Tables------------------------------
//===================================================================

app.get('/individualweapons/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const weaponData = await pool.query(`SELECT * FROM individual_weapon WHERE individual_id = $1`, [id]);
        const weaponIds = weaponData.rows.map(individual => individual.weapon_id);
        const replacements = weaponIds.join(', ');
        const weapons = await pool.query(`SELECT * FROM weapon WHERE weapon_id IN (` + replacements + `)`);
        res.json(weapons.rows);
    } catch (error) {
        console.error(error.message);
    }
})





app.listen(5000, () => {
    console.log('Server has started on port 5000');
})



// const newestIndividualId = await pool.query(`SELECT unit_id FROM unit ORDER BY unit_id DESC LIMIT 1`)
// const individualUnitPosted = await pool.query(`INSERT INTO unit_individual(unit_id,
//     individual_id,
//     leadership) VALUES ($1, $2, $3)`,
//     [unitId,
//     newestIndividualId,
//     leadership]
// )
// const individualWeaponPosted = await pool.query(`INSERT INTO individual_weapon(individual_id,
//     weapon_id,
//     isPrimary) VALUES ($1, $2, $3)`,
//     [newestIndividualId,
//     weaponId,
//     true]
// )
// console.log(individualPosted.rows);
// console.log(individualUnitPosted);
// console.log(individualWeaponPosted);



// const {
//     generic_name,
//     role,
//     nation,
//     leadership,
//     rank,
//     rank_index,
//     description,
//     weaponId,
//     unitId
// } = req.body;
// console.log(req.body);
// const individualPosted = await pool.query(`INSERT INTO individual(generic_name,
//     role,
//     nation,
//     leadership,
//     rank,
//     rank_index,
//     description) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
//     [generic_name,
//     role,
//     nation,
//     leadership,
//     rank,
//     rank_index,
//     description]
// )