var sql = require('mysql');
var connection;

if (process.env.burgersDB_URL) {
    connection = mysql.createConnection(process.env.burgersDB_URL);
} 
else
{
    connection= mysql.createConnection({
        host: 'localholst',
        user: 'root',
        password: 'Khelenq14',
        database: 'burgersDB'
    })
};

connection.connect(function (err){
    if (err) {
        console.error('error connecting' + err.stack);
        return;
    }
})

module.exports = connection;