const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a weapon
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

app.put("weapons/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const { name } = req.body;
        const weaponUpdated = await pool.query("UPDATE weapon SET weapon_name = $1 WHERE weapon_id = $2", [name, id]);
    } catch (error) {
        console.error(error.message);
    }
})


//update a weapon's name

// app.put("/todos/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { description } = req.body;
//         const updateTodo = await pool.query(
//             "UPDATE todo SET description = $1 WHERE todo_id = $2", 
//             [description, id]
//         );
//         res.json("todo was updated");
//     } catch (error) {
//         console.error(error.message);
//     }
// })

//delete a weapon




app.listen(5000, () => {
    console.log('Server has started on port 5000');
})