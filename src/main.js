// Phase I

/*
* You should make you completed
* each task step by step. Once you're done with one `Step`
* be sure to comment the previous console.log
* so you don't have tornado of console.logs
*/

// // Step 0 - require / import the carFn file

var car = require("./carFn")

// // Step 1 - Checking all properties
// console.log the `Car` object, does it returns all the properties requested?

console.log(Car)

// // Step 2 - Run `Car.sell()` function
// `Car` object should be able to run `sell` function,
// and updates its existing object

Car.sell('prima')
console.log(Car)

// // Step 3 - Run `Car.paint()` function
// `Car` object should be able to run `paint` function,
// and updates its existing object

Car.paint('blue')
console.log(Car)

// Phase II

// // Repeat the same steps to Phase I, but this time require the the class file
// // instead of the the `carFn` file

var car = require("./Car")

var newCar = new Car("Honda", "Vezul", "2017", "red", 7)
var peugeot = new Car("peugeot", "206", "2000", "blue", 8)

console.log(newCar)

peugeot.sell('Prima')
console.log(peugeot, previousOwners)

// Phase III
