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
// console.log('Testing selling a car')
acura.sell('Lenny')

// You're on your own from here

var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)

assert.strictEqual(c1.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(c1.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(c1.year, 2017, 'Constructor did not set year.')
assert.strictEqual(c1.color, 'red', 'Constructor did not set color.')
assert.strictEqual(c1.seats, 7, 'Constructor did not set seats.')
assert.strictEqual(c1.owner, 'manufacturer', 'Constructor did not set owner')
assert.strictEqual(c1.running, false, 'Constructor did not set running')
c1.sell('prima')
assert.strictEqual(c1.owner, 'prima', 'Constructor did set owner.')
// console.log(c1.previousOwner)
assert.strictEqual(c1.previousOwner[0], 'manufacturer', 'Constructor did not set previous owner')
c1.paint('blue')
assert.strictEqual(c1.color, 'blue', 'Constructor did not set paint method to blue')

c1.sell(0)
assert.strictEqual((typeof c1.owner === 'string'), false, 'car can only be sold to a real person with name, please input a string')

c1.paint(false)
assert.strictEqual((typeof c1.color === 'string'), false, 'car can only be painted with real color, please input a string')

success();
