interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    constructor(location: Point, color?: String) {
        this.color = color;
        this.currentLocation = location;
    }

    color: String;
    
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Taksi X: ${point.x} konumundan Y: ${point.y} konumuna gidiyor.`)
    }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }, 'Red');
taxi_1.travelTo({ x: 5, y: 6 });
console.log(taxi_1.currentLocation);