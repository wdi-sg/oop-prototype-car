// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')


// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var acura = new Car('Acura', 'Integra', 1999, 'Red', 4)


// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.')
assert.strictEqual(acura.model, 'Integra', 'Constructor did not set model.')
assert.strictEqual(acura.year, 1999, 'Constructor did not set year.')
assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.')
assert.strictEqual(acura.seats, 4, 'Constructor did not set seats.')

// run the success function once you're done with a set of tests
success()

// test sell
console.log('Testing selling a car')
acura.sell('Lenny')

// You're on your own from here
assert.strictEqual(acura.owner, 'Lenny', 'Sell function did not update owner')
assert.strictEqual(acura.previousOwners[0], 'manufacturer', 'Sell function did not push previous owner into previousOwners array')

// run the success function once you're done with a set of tests
success()

// // testing constructor
// console.log('Testing if car can be instantiated when required parameters are not given')
//
// var c2 = new Car()
// console.log(c2);
// // tests
// assert.strictEqual(c2, "car can't be instantiated, required parameters are not given", 'Constructor did not check if all arguments are supplied')

// run the success function once you're done with a set of tests
success()

// testing sell
console.log('Testing if sell checks arguments supplied')

// test
assert.strictEqual(acura.sell(0), 'car can only be sold to a real person with name, please input a string', 'Sell does not check if argument supplied is a string')

// run the success function once you're done with a set of tests
success()

// testing paint
console.log('Testing if paint checks arguments supplied')

// test
assert.strictEqual(acura.paint(false), 'car can only be painted with real color, please input a string', 'Paint does not check if argument supplied is a string')

// run the success function once you're done with a set of tests
success()

// testing start
console.log('Testing if start returns the correct value')

// test
acura.start()
assert.strictEqual(acura.running, true, "Start should change running's value to true")

// run the success function once you're done with a set of tests
success()

// testing off
console.log('Testing is off returns the correct value')

// test
acura.off()
assert.strictEqual(acura.running, false, "Off should change running's value to false")

// run the success function once you're done with a set of tests
success()

// testing if driveTo returns the corrent value if no destination supplied
console.log('Testing if driveTo returns false if no destination')

// test
assert.strictEqual(acura.driveTo(), false, 'driveTo should return false if no destination is supplied')

// run the success function once you're done with a set of tests
success()

// testing if driveTo returns the correct value if car is on and destination is supplied
console.log('Testing if driveTo returns true if car is on and destination is supplied')

// test
acura.start()
assert.strictEqual(acura.driveTo('GA'), true, 'driveTo should return true if car is on and destination is supplied')
