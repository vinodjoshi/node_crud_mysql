const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'node_crud'
});

con.connect((err) => {
    if (err) {
        console.warn('Error in database connection');
    }
})

module.exports = con;