const express = require('express');
const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.json({
        message: 'Hello World!'
    });
})

app.listen(port, function () {
    console.log(`'Example app listening on port ${port}!'`);
});
