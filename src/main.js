// Phase I

/*
* You should make you completed
* each task step by step. Once you're done with one `Step`
* be sure to comment the previous console.log
* so you don't have tornado of console.logs
*/

// // Step 0 - require / import the carFn file

// var Car = require('./carFn')
//
// // // Step 1 - Checking all properties
// // console.log the `Car` object, does it returns all the properties requested?
// console.log(Car)


// // Step 2 - Run `Car.sell()` function
// `Car` object should be able to run `sell` function,
// and updates its existing object

var Car = require('./Car')
var car2 = new Car ('Audi', 'Z132', 2017, 'silver', 2)
car2.sell('hidayah')
console.log(car2.owner)

// // Step 3 - Run `Car.paint()` function
// `Car` object should be able to run `paint` function,
// and updates its existing object
car2.paint('red')
console.log(car2.color)

// Phase II

// // Repeat the same steps to Phase I, but this time require the the class file
// // instead of the the `carFn` file

// Phase III

// Phase I
