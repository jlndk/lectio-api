const scraper = require('scraperjs')

const scrapers = {}

scrapers.test = function(data, headers){
    scraper.StaticScraper.create(`https://www.lectio.dk/lectio/${data.school_id}/SkemaNy.aspx?elevid=${data.student_id}`)
    .scrape($ => {
        //console.log($);
        return $('.s2weekHeader td').map(function() {
                return $(this).text();
        }).get();
    })
    .then(response => {
        console.log(response);
    })
}

module.exports = scrapers
