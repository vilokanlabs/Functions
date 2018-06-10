"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var MyC = /** @class */ (function () {
    function MyC() {
        this.time = { value: "234.90" };
    }
    MyC.prototype.getSanskritDefinition = function (user) {
        var _this = this;
        setTimeout(function () {
            console.log(_this.time.value + "tt");
        }, 50);
    };
    MyC.prototype.postFirebase = function () {
        var options = {
            host: 'example.com',
            port: 80,
            path: '/foo.html'
        };
        http_1.default.get(options, function (resp) {
            resp.on('data', function (chunk) {
                //do something with chunk
                console.log(chunk);
            });
        }).on("error", function (e) {
            console.log("Got error: " + e.message);
        });
    };
    return MyC;
}());
var myI = new MyC();
myI.getSanskritDefinition("http://www.google.com");
myI.postFirebase();
//# sourceMappingURL=index.js.map