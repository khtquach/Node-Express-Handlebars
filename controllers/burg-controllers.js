var express = require('express');
var burg_router = express.Router();
var burg_call = require('../models/burger');
var bodyParser = require('body-parser');

burg_router.use(bodyParser.json());
burg_router.use(bodyParser.urlencoded({
    extended: false
}));
burg_router.use(bodyParser.text());
burg_router.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

burg_router.get('/', function (req, res) {
    res.redirect('/burger')
});

burg_router.get('/burger', function (req, res) {
    burg_call.read(function (data) {
        var handlebars_object = {
            burger: data
        };
        res.render('index', handlebars_object)
    })
});

burg_router.post('/burger/add', function (req, res) {
    burg_call.insert(req.body.user_burg, function (data) {
        res.redirect('/burger');
    });
});

burg_router.put('burger/update/id:?', function (req, res) {
    var user_id = parseInt(req.params.id);
    burg_call.update(user_id, function (data) {
        res.redirect('/burger');
    });
});

burg_router.put('burger/update/id:?', function (req, res) {
    var user_id = parseInt(req.params.id);
    burg_call.delete(user_id, function (data) {
        res.redirect('/burger');
    });
});

module.exports = burg_router;