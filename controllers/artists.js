let Artists = require('../models/artists');

exports.all = function (req, res) {
    Artists.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
};

exports.findById = function (req, res) {
    Artists.findById(req.params.id, function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
};

exports.create = function (req, res) {
    let artist = {
        name: req.body.name
    };
    Artists.create(artist, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(artist);
    })
};

exports.update = function (req, res) {
    let newData = {
        name: req.body.name
    };
    console.log(req.body.name);
    Artists.update(req.params.id, newData, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

exports.delete = function (req, res) {
    Artists.delete(req.params.id, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};