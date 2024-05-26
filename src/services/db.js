const mysql = require('mysql2');

const setting = {
    connectionLimit : 10, //set limit to 10 connection
    host     : 'localhost',
    user     : 'root',
    password : 'qwer$#@!',
    database : 'BEDCA1',
    multipleStatements: true, //allow multiple sql statements
    dateStrings: true //return date as string instead of Date object
}

const pool = mysql.createPool(setting);

module.exports = pool;