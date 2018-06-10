import * as TheRequest from 'request'
import * as cheerio from 'cheerio'

import * as functions from 'firebase-functions';
import * as $ from 'jquery'

var searchTerm = 'screen+scraping';
var url = 'http://www.bing.com/search?q=' + searchTerm;

class Sanskrit {
    constructor(req: functions.Request, res: functions.Response) {
        TheRequest.post(url, function (err, resp, body) {
            let $ = cheerio.load(body);            
            let links = $('.sb_tlst h3 a'); //use your CSS selector here
            $(links).each(function (i, link) {
                console.log($(link).text() + ':\n  ' + $(link).attr('href'));
            });
        });
    }
}

// Test
new Sanskrit(null,null);

export default Sanskrit