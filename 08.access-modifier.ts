interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    constructor(private location: Point, private color?: String) { }

    travelTo(point: Point): void {
        console.log(`Taksi X: ${this.location.x} Y: ${this.location.y} konumundan X: ${point.x} Y: ${point.y} konumuna gidiyor.`)
    }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 5, y: 6 });