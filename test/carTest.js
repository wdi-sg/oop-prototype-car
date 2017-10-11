// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')


// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')

// update the car instantiation below according to the test given
var acura = new Car('Acura', 'Integra', 1999, 'Red', 4)
var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)

// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.')
assert.strictEqual(acura.model, 'Integra', 'Constructor did not set model.')
assert.strictEqual(acura.year, 1999, 'Constructor did not set year.')
assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.')
assert.strictEqual(acura.seats, 4, 'Constructor did not set seats.')

console.log('Testing Constructor')
assert.strictEqual(c1.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(c1.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(c1.year, 2017, 'Constructor did not set year.')
assert.strictEqual(c1.color, 'Red', 'Constructor did not set color.')
assert.strictEqual(c1.seats, 7, 'Constructor did not set seats.')

// run the success function once you're done with a set of tests
success()

// test sell
console.log('Testing selling a car')
acura.sell('Lenny')

console.log('Testing selling a car')
c1.sell('Prima')

// You're on your own from here
// test newOwner
console.log(acura.owner)
assert.strictEqual(acura.owner, 'Lenny', 'Failed to sell the car to Lenny.')

console.log(c1.owner)
assert.strictEqual(acura.owner, 'Prima', 'Failed to sell the car to Lenny.')

// test previousOwners
acura.sell('Tom')
assert.strictEqual(acura.previousOwners[acura.previousOwners.length -1], 'Lenny', 'Previous owners not updated.')

acura.sell('Tom')
assert.strictEqual(c1.previousOwners[c1.previousOwners.length -1], 'manufacturer', 'Previous owners not updated.')

// test if newOwner is non-string
acura.sell('0123')
assert.strictEqual(acura.owner, 'Lenny', 'Owner should remain if newOwner is not a string.')

success()

// test paint
console.log('Testing painting a car')
acura.paint('blue')

// test if color is updated
console.log(acura.color)
assert.strictEqual(acura.color, 'blue', 'Failed to paint the car Blue. Car is: "' + car.color + '"')

// test if newOwner is non-string
acura.color('0123')
assert.strictEqual(acura.color, 'blue', 'Color should remain if newColor is not a string.')

success()

// //// TEST PHASE IV /////////////////////////////////////////
// test start
console.log('Testing starting the car')
acura.start()

assert.strictEqual(acura.running, true, 'Failed to start the car. Running value did not return true')

success()

// test off
console.log('Testing turning off the car')
acura.off()

assert.strictEqual(acura.running, false, 'Failed to stop the car. Running value did not return false')

success()

// test driveTo
console.log('Testing driving the car');

// test if it returns true if the car is running
acura.start()
assert.strictEqual(acura.driveTo('GA'), true, 'Failed to drive to destination. driveTo(destination) should return true if the car is running.')

// test if it returns false if the car is not running
acura.off()
assert.strictEqual(acura.driveTo('GA'), false, 'Failed to drive to destination. driveTo(destination) should return false if the car is not running.')

// test if destination is non-string
acura.start()
assert.strictEqual(acura.driveTo('123'), false, 'Failed to drive to destination. driveTo(destination) should return false if the destination is not a string.')

success()

// test park
console.log('Testing parking the car');

// test if it returns true if running is false
acura.off()
assert.strictEqual(acura.park(), true, 'Failed to park car. Park should return false if the car is running.')

// test if it returns false if running is true
acura.start()
assert.strictEqual(acura.park(), false, 'Failed to park car. Park should return false if the car is running.')

success()
