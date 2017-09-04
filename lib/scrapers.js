const scrapers = {};
const authenticate = require('./authenticate');
const scraperjs = require('scraperjs');

scrapers.test = function(data,headers) {

    authenticate(data,headers);

    // .then(response => {
    return scraperjs.StaticScraper.create(`https://www.lectio.dk/lectio/${data.school_id}/SkemaNy.aspx?elevid=${data.student_id}`)
    // })
    .scrape(function($) {
        return $(".s2weekHeader td").map(function() {
            return $(this).text();
        }).get();
    })
};

module.exports = scrapers;
