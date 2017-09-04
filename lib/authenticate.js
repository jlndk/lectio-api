const scraperjs = require('scraperjs');
const axios = require('axios');
const querystring = require("querystring");

module.exports = function(data, headers) {
    let url = `https://www.lectio.dk/lectio/${data.school_id}/login.aspx`;
    return scraperjs.StaticScraper.create(url)
    .scrape($ => {
        let data = querystring.stringify({
            '__EVENTARGUMENT': '',
            '__EVENTVALIDATION': $('#__EVENTVALIDATION').attr('value'),
            '__EVENTTARGET': 'm$Content$submitbtn2',
            'm$Content$passwordHidden': '1234598762jo',
            'm$Content$username2': '15k14'
        });

        console.log(data);

        console.log("_________________________________________________________");

        let response = axios({
            url: url,
            data: querystring.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            console.log(response);
            return response;
        })

        return response;
    });
}
