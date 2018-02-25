let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let db = require('./configuration/db');
let artistsController = require('./controllers/artists');
let config = require('./configuration/config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '10mb'}));

db.connect(config.get(), function (err, database) {
    if (err) {
        return console.log(err);
    }
    console.log("Connected correctly to server");
    app.listen(3012, function () {
        console.log('API app started');
    })
});

app.get('/api/', function (req, res) {
    res.send('Hello API');
});

app.get('/api/artists', artistsController.all);

app.get('/api/artists/:id', artistsController.findById);

app.post('/api/artists', artistsController.create);

app.put('/api/artists/:id', artistsController.update);

app.delete('/api/artists/:id', artistsController.delete);