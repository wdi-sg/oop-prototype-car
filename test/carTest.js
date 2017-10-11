// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')


// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var acura = new Car('Acura', 'Integra', 1999, 'Red', 4)

var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)

var c2 = new Car()


// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.')
assert.strictEqual(acura.model, 'Integra', 'Constructor did not set model.')
assert.strictEqual(acura.year, 1999, 'Constructor did not set year.')
assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.')
assert.strictEqual(acura.seats, 4, 'Constructor did not set seats.')

console.log('Testing Constructor C1')
assert.strictEqual(c1.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(c1.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(c1.year, 2017, 'Constructor did not set year.')
assert.strictEqual(c1.color, 'red', 'Constructor did not set color.')
assert.strictEqual(c1.seats, 7, 'Constructor did not set seats.')


// run the success function once you're done with a set of tests
success()

// test sell
console.log('Testing selling a car')
acura.sell('Lenny')
// console.log(acura)

c1.sell('yuki')
c1.paint('blue')
// console.log(c1)

c2.sell(0)
c2.paint(false)
// console.log(c2)

// You're on your own from here
