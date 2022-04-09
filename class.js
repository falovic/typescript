var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: ".concat(point.x, " konumundan Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Buss = /** @class */ (function () {
    function Buss() {
    }
    Buss.prototype.travelTo = function (point) {
        console.log("Otob\u00FCs X: ".concat(point.x, " konumundan Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Buss;
}());
