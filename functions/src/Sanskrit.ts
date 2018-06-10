import * as TheRequest from 'request'
import * as cheerio from 'cheerio'

import * as functions from 'firebase-functions';
import * as $ from 'jquery'

var searchTerm = 'birth';
var url = `http://spokensanskrit.org/index.php?mode=3&script=hk&tran_input=${searchTerm}&direct=au`

class Sanskrit {
    constructor(req: functions.Request, res: functions.Response) {
        TheRequest.post(url, function (err, resp, body) {
            let $ = cheerio.load(body);
            let links = $(".bgcolor0 > td:nth-child(1), .bgcolor2 > td:nth-child(1)"); //use your CSS selector here
            $(links).each(function (i, link) {
                let text = $(link).text();
                text = text.trim()
                console.log(text)
            });
        });
    }
}

// Test
if (typeof require != 'undefined' && require.main == module) {
    new Sanskrit(null, null);
}

export default Sanskrit