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
var searchTerm = 'screen+scraping';
var url = 'http://www.bing.com/search?q=' + searchTerm;
var Sanskrit = /** @class */ (function () {
    function Sanskrit(req, res) {
        TheRequest.post(url, function (err, resp, body) {
            var $ = cheerio.load(body);
            var links = $('.sb_tlst h3 a'); //use your CSS selector here
            $(links).each(function (i, link) {
                console.log($(link).text() + ':\n  ' + $(link).attr('href'));
            });
        });
    }
    return Sanskrit;
}());
// Test
new Sanskrit(null, null);
exports.default = Sanskrit;
//# sourceMappingURL=Sanskrit.js.map