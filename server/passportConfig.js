const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;
const pool = require("./db");

module.exports = function(passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            const existingUser = await pool.query(`SELECT * FROM client WHERE username = $1`, [username]);
            if (!existingUser.length) return done(null, false);
            console.log('existing user coming back from passport check: ', existingUser);
            bcrypt.compare(password, existingUser.rows[0].password);
        })
    )
}