"use strict";
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
    return MyC;
}());
var myI = new MyC();
myI.getSanskritDefinition("http://www.google.com");
