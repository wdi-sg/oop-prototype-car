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

var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)
assert.strictEqual(c1.make, 'Honda', "make not Honda")
assert.strictEqual(c1.owner, 'manufacturer', "owner not manufacturer")
assert.strictEqual(c1.running, false, "car is running")
c1.sell('prima')
assert.strictEqual(c1.owner, 'prima', "new owner is not prima")
assert.strictEqual(c1.previousOwners[0], 'manufacturer', "didn't record previous owner")
c1.paint('blue')
assert.strictEqual(c1.color, 'blue', "paint not updated")

var c2 = new Car()
// assert.notStrictEqual(c2.make, undefined, "car cant be instantiated, required parameters are not given")
// assert.notStrictEqual(c2.model, undefined, "car cant be instantiated, required parameters are not given")
// assert.notStrictEqual(c2.year, undefined, "car cant be instantiated, required parameters are not given")
// assert.notStrictEqual(c2.color, undefined, "car cant be instantiated, required parameters are not given")
// assert.notStrictEqual(c2.seats, undefined, "car cant be instantiated, required parameters are not given")


// c1.sell(0)
assert.strictEqual(typeof(c1.owner), 'string', "car can only be sold to real person with name")
// c1.paint(false)
assert.strictEqual(typeof(c1.color), 'string', "car can only be painted with color, input string")


// console.log(acura)
// console.log(acura.driveTo('yishun'))
console.log(acura.start())
assert.strictEqual(acura.running, true, "Car is not running")
console.log(acura.off())
assert.strictEqual(acura.running, false, "Car is still running")
console.log(acura.start())
// console.log(var c2 = new Car())
console.log(acura.pickup('Jieying'))
assert.strictEqual(acura.passengers.length, 1, "Jieying is floating")
console.log(acura.dropOff('Jieying'))
assert.strictEqual(acura.passengers.length, 0, "GOT GHOST")
console.log(acura.passengerCount())
// assert.strictEqual(acura.passengerCount(), 0, "passengerCount")
assert.strictEqual(Number.isInteger(acura.passengerCount()), true, "passengerCount is not an integer")

// You're on your own from here
// assert.strictEqual(acura.running, true, "false")
// assert.notStrictEqual(c2.make, '',"car can't be blah")
