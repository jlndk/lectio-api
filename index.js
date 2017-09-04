const express = require('express');
const app = express();

const scrapers = require('./lib/scrapers');


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {

    return scrapers.test({
        school_id: 518,
        student_id: 17544500480
    }).then(response => {
        return res.json(response);
    });
});

app.listen(port, function () {
    console.log(`'Example app listening on port ${port}!'`);
});
1
