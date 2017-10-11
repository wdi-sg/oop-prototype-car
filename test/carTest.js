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
assert.strictEqual(acura.owner, "Lenny",'wrong onwer')
assert.strictEqual(acura.previousOwner[0],'manufacturer', 'wrong')
assert.strictEqual(acura.running, false)

acura.sell('prima')
assert.strictEqual(acura.owner,'prima')

acura.paint('blue')
assert.strictEqual(acura.color,'blue')

var honda = new Car()
assert.strictEqual(honda.length,5 , "car can't be instantiated, required parameters are not given")

honda.sell(0)
// assert.strictEqual(typeof honda.owner,'string', 'car can only be sold to a real person with name, please input a string')

honda.paint(false)
// assert.strictEqual(typeof honda.color, 'string','car can only be painted with real color, please input a string')

honda.start()
assert.strictEqual(honda.running, true, 'Should change the running value of the car to true')

honda.off()
assert.strictEqual(honda.running, false, 'Should change the running value to false' )

honda.driveTo('London')
assert.strictEqual(honda.driveTo(), false, 'cannot drive')

honda.park()
assert.strictEqual(honda.park(), true,'cannot park')

acura.start()
acura.pickUp('Jieying')
assert.strictEqual(acura.passengers.length, 1)

acura.dropOff('Jieying')
assert.strictEqual(acura.passengers.length, 0)

assert.strictEqual(acura.passengersCount(),0)
