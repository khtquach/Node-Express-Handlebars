var orm = require('../config/orm');

var burg_call = {
    insert: function (val, db) {
        orm.insert('tbl', 'burg_name', val, function (res) {
            cb(res);
        });
    },

    read: function (cb) {
        orm.read('tbl', function (res) {
            cb(res)
        });
    },

    update: function (user_id, cb) {
        orm.update('tbl', 'burg_eaten', 1, 'id', user_id, function (res) {
            cb(res);
        });
    },

    delete: function (user_id, cb) {
        orm.delete('tbl', 'id', user_id, function (res) {
            cb(res);
        });
    }
};

module.exports = burg_call;