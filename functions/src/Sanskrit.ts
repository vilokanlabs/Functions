import * as TheRequest from 'request'
import * as cheerio from 'cheerio'

import * as functions from 'firebase-functions';

let searchTerm = 'birth';
let url = `http://spokensanskrit.org/index.php?mode=3&script=hk&tran_input=${searchTerm}&direct=au`

class Sanskrit {
    constructor(req: functions.Request, res: functions.Response) {
        if (req.query.q === undefined) {
            res.status(400).send(`Search term undefined!`);
        }
        else {
            searchTerm = req.query.q
            // let ret = `Looking for ${searchTerm} ...`
            let ret = []
            url = `http://spokensanskrit.org/index.php?mode=3&script=hk&tran_input=${searchTerm}&direct=au`

            // This is an error case
            TheRequest.post(url, function (err, resp, body) {
                const $ = cheerio.load(body);                
                const links = $(".bgcolor0 > td:nth-child(1), .bgcolor2 > td:nth-child(1)"); //use your CSS selector here
                $(links).each(function (i, link) {
                    let text = $(link).text();
                    text = text.trim()

                    ret.push(text)
                });

                res.status(200).send(JSON.stringify(ret));
                res.status(200).end();
            });
        }
    }
}

// Test
if (typeof require !== 'undefined' && require.main === module) {
    new Sanskrit(null, null);
}

export default Sanskrit