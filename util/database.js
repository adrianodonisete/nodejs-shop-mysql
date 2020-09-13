const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '192.168.56.104',
    user: 'developer',
    password: '87782930',
    database: 'node_complete',
});

module.exports = pool.promise();