interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    //..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Taksi X: ${point.x} konumundan Y: ${point.y} konumuna gidiyor.`)
    }
}

class Buss implements Vehicle {
    //..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Otobüs X: ${point.x} konumundan Y: ${point.y} konumuna gidiyor.`)
    }
}