var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: ".concat(point.x, " konumundan Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Otob\u00FCs X: ".concat(point.x, " konumundan Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 6 });
taxi_2.currentLocation = { x: 2, y: 5 };
var bus_1 = new Bus();
bus_1.travelTo({ x: 3, y: 4 });
bus_1.currentLocation = { x: 5, y: 8 };
