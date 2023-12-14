const mysql=require('mysql2/promise');

const database = mysql.createPool({
    host: 'regulus.cotuca.unicamp',
    port: 3306,
    user: 'BD23015',
    password: 'BD23015',
    database: 'BD23015',
});

module.exports = database;