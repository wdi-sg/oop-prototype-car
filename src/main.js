// Phase I

/*
* You should make you completed
* each task step by step. Once you're done with one `Step`
* be sure to comment the previous console.log
* so you don't have tornado of console.logs
*/

// // Step 0 - require / import the carFn file
var Car = require('./Car')
// // Step 1 - Checking all properties
// console.log the `Car` object, does it returns all the properties requested?

// // Step 2 - Run `Car.sell()` function
// `Car` object should be able to run `sell` function,
// and updates its existing object
var peugeot = new Car('Peugeot', '206', 2000, 'blue', 4)
peugeot.sell('Prima')


// // Step 3 - Run `Car.paint()` function
// `Car` object should be able to run `paint` function,
// and updates its existing object
//peugeot.paint('blue')
//console.log(peugeot)

// Phase II

// // Repeat the same steps to Phase I, but this time require the the class file
// // instead of the the `carFn` file


// Phase III


// Phase V
peugeot.start()
peugeot.pickUp('Bobby')
peugeot.pickUp('Mimi')
peugeot.pickUp('Jo')
peugeot.pickUp('Tan')
console.log(peugeot.passengers)
peugeot.dropOff('Mimi')
console.log(peugeot)
