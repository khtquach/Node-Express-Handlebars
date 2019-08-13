var connection = require('../config/controller');

// inside of this orm will have stuff that'll execute mySQL commands 

var orm = {
    insert: function (tbl, col, val, cb) {
        connection.query('INSERT INTO' + tbl + '(' + col + ')' + 'VALUES (?)', [val], function (err, result) {
            cb(result);
        });
    },

    read: function (tbl, cb) {
        connection.query('SELECT * from' + tbl + ';', function (err, results) {
            cb(result);
        });
    },

    update: function (tbl, set_col, set_val, col_param, val_param, cb) {
        connection.query('UPDATE' + tbl + 'SET' + set_col + '= ? WHERE' + col_param + ' = ?', [set_val, val_param], function (err, result) {
            cb(result);
        });
    },

    delete: function (tbl, col, val, cb) {
        connection.query('DELETE FROM' + tbl + 'WHERE' + col + '= ?', [val], function (err, result) {
            cb(result);
        });
    }
};

module.exports = orm;