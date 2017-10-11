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

// // test sell
console.log('Testing selling a car')
acura.sell('Lenny')

// You're on your own from here
assert.strictEqual(acura.owner, 'Lenny', 'New owner is set')
assert.strictEqual(acura.previousOwners[0], 'manufacturer', 'manufacturer is not at previousOwners arr')

// testing if car cannot be instantiated
// car c2 = new Car()
// assert.notStrictEqual(c2.make, undefined, 'car cannot be instantiated, required parameters are not given')
//
// c1.sell(0)
// assert.strictEqual(typeof c1.owner, 'string', 'car can only be sold to a real person with name,please input a string')
//
// c1.paint(false)
// assert.strictEqual(c1.color, 'string', 'car can only painted with real color, please input a string')

//PHASE IV
acura.start()
assert.strictEqual(acura.running, true, "Should change the running value of the car to true")

acura.off()
assert.strictEqual(acura.running, false, "Should change the running value to false")

acura.start()
acura.driveTo("greenwood")
assert.strictEqual(acura.driveTo(), true, "Should change to true")

acura.off()
acura.park()
assert.strictEqual(acura.park(), true)
success()

//assert.notStrictEqual()

// testing if car cannot be instantiated
