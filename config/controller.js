var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "cat_db"
// });

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
// module.exports = connection;

if (process.env.burgDB_URL) {
    connection = mysql.createConnection(process.env.burgDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'Khelenq14',
        database: 'burgDB'
    })
};

connection.connect(function (err) {
    if (err) {
        console.error('error connecting' + err.stack);
        return;
    }
});

module.exports = connection;