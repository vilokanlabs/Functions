"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TheRequest = __importStar(require("request"));
var cheerio = __importStar(require("cheerio"));
var searchTerm = 'birth';
var url = "http://spokensanskrit.org/index.php?mode=3&script=hk&tran_input=" + searchTerm + "&direct=au";
var Sanskrit = /** @class */ (function () {
    function Sanskrit(req, res) {
        if (req.query.q === undefined) {
            res.status(400).send("Search term undefined!");
        }
        else {
            searchTerm = req.query.q;
            // let ret = `Looking for ${searchTerm} ...`
            var ret_1 = [];
            url = "http://spokensanskrit.org/index.php?mode=3&script=hk&tran_input=" + searchTerm + "&direct=au";
            // This is an error case
            TheRequest.post(url, function (err, resp, body) {
                var $ = cheerio.load(body);
                var links = $(".bgcolor0 > td:nth-child(1), .bgcolor2 > td:nth-child(1)"); //use your CSS selector here
                $(links).each(function (i, link) {
                    var text = $(link).text();
                    text = text.trim();
                    ret_1.push(text);
                });
                res.status(200).send(JSON.stringify(ret_1));
                res.status(200).end();
            });
        }
    }
    return Sanskrit;
}());
// Test
if (typeof require !== 'undefined' && require.main === module) {
    new Sanskrit(null, null);
}
exports.default = Sanskrit;
//# sourceMappingURL=Sanskrit.js.map