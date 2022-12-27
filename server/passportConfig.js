const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;
const pool = require("./db");

module.exports = function(passport) {
    passport.use(
        new localStrategy( async (username, password, done) => {
            const existingUser = await pool.query(`SELECT * FROM client WHERE username = $1`, [username]);
            if (!existingUser.rows.length) {
                return done(null, false);
            }    
            let user = existingUser.rows[0]
            bcrypt.compare(password, existingUser.rows[0].password, (err, result) => {
                if (err) done(err);
                if (result === true) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        })
    )

    passport.serializeUser((user, cb) => {
        cb(null, user.client_id);
    })

    passport.deserializeUser( async (id, cb) => {
        const existingUser = await pool.query(`SELECT * FROM client WHERE client_id = $1`, [id]);
        if (!existingUser.rows.length) {
            cb('eror no user', null)
        } else {
            let userObject = {
                username: existingUser.rows[0].username,
                clientId: existingUser.rows[0].clientId
            }    
            cb(null, userObject);
        }
    })
}