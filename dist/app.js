"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World!");
let vehicleOne = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};
console.log(vehicleOne);
let carOne = {
    model: "Ford Focus",
    color: "Green",
    year: 2016,
    power: 150,
    bodyType: "Hatchback",
    wheelCount: 4
};
let planeOne = {
    model: "Boeing 777",
    color: "White",
    year: 2020,
    power: 170000,
    wingspan: 65
};
let boatOne = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42
};
console.log(carOne);
console.log(planeOne);
console.log(boatOne);
class VehicleService {
    items;
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
    }
    list() {
        console.log(this.items);
    }
}
const cars = new VehicleService([]);
const boats = new VehicleService([]);
cars.add(carOne);
boats.add(boatOne);
cars.list();
boats.list();
//# sourceMappingURL=app.js.map