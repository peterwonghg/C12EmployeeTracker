const mysql = require('mysql2/promise');


function connect(){
    return mysql.createConnection({
        database: 'employeeTracker_db',
        host: process.env.DB_HOST,
        password: process.env.DB_USER,
        user: process.env.DB_USER,
        namedPlaceholders: true,
    })


}

module.exports = connect;