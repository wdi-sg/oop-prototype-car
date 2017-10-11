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
// You're on your own from here
assert.strictEqual(c1.make, 'Honda', 'Incorrectly set make.')
assert.strictEqual(c1.owner, 'manufacturer', 'Incorrectly set owner.')
assert.strictEqual(c1.running, false, 'Incorrectly set running.')
success()


c1.sell('prima')
assert.strictEqual(c1.owner, 'prima', 'New owner is set.')
assert.strictEqual(c1.previousOwners[0], 'manufacturer', 'Need to push to previousOwners.')
success()

console.log('Testing painting the car blue')
acura.paint('blue')

assert.strictEqual(acura.color, 'blue', 'Car color is not changed.')
success()

var c2 = new Car()
// console.log(c2)
// assert.notStrictEqual(c2.make, undefined , "car can't be instantiated, required parameters are not given")
// success()

// c1.sell(0)
// console.log('test selling to number 0')
// assert.strictEqual(typeof c1.owner, 'string', 'car can only be sold to a real person with name, please input a string')
// success()

// c1.paint(false)
// console.log('test painting to a non-string input')
// assert.strictEqual(typeof c1.color, 'string', 'car can only be sold to a real person with name, please input a string')
// success()

//Phase IV
console.log('testing car start')
c2.start()
assert.strictEqual(c2.running, true, 'Car start function is not working')
success()

console.log('testing car off')
c2.off()
assert.strictEqual(c2.running, false, 'Car off function is not working')
success()

// console.log('testing destination')
// c2.driveTo("my house")
// assert.strictEqual(c2.driveTo("my house"), true, 'Car drive to function is not working')
// success()

console.log('testing car park')
c2.park()
assert.strictEqual(c2.park(), true, 'Car parking fail')
success()

//phase V

c3 = new Car('Honda', 'Vuzel', 2017, 'red', 4)
c3.start()
c3.pickUp('Sam')
c3.pickUp('Samuel')
assert.strictEqual(c3.pickUp('Gabriel'), true, 'Not enough seats or car not running')
console.log(c3.passengers)
success()

// c3.dropOff('Samuel')
// c3.off()
console.log('testing drop off')
assert.strictEqual(c3.dropOff('Gabriel'), true, 'No such passenger or car not running')
console.log(c3.passengers)
success()

console.log(c3.passengerCount())
