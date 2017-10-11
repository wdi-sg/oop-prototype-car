// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')


// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
// var acura = new Car('acura', 'Vuzel', 2017, 'Blue', 7)
// var c2 = new Car('Honda', 'Vuzel', 2017, 'red', 7)

var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)

// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(c1.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(c1.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(c1.year, 2017, 'Constructor did not set year.')
assert.strictEqual(c1.color, 'red', 'Constructor did not set color.')
assert.strictEqual(c1.owner, 'manufacturer', 'Constructor did not set manufacturer')
assert.strictEqual(c1.seats, 7, 'Constructor did not set seats.')
assert.strictEqual(c1.running, false, 'Constructor should return false')
c1.sell('Prima')
assert.strictEqual(c1.owner, 'Prima', 'Name of owner should be updated')
assert.strictEqual(c1.previousOwners[0],'manufacturer', 'Name of owner should be updated')
c1.paint('blue')
assert.strictEqual(c1.color, 'blue', 'color is wrong')
var c2 = new Car()
// assert.strictEqual(c1.make, undefined, "car can't be instantiated, required parameters are not given")
// assert.strictEqual(c1.model, undefined, "car can't be instantiated, required parameters are not given")
c1.sell(0)
// assert.strictEqual(typeof c1.owner, 'string', 'car can only be sold to a real person with name, please input a string')
c1.paint(false)
// assert.strictEqual(typeof c1.color, 'string', 'car can only be painted with real color, please input a string')
c1.start()
// assert.strictEqual(c1.running , true, 'should return true')
c1.off()
// assert.strictEqual(c1.running , false, 'should return false')
c1.driveTo('Miami')
// assert.strictEqual(c1.running , true, 'engine is not on yet')
c1.park()
// assert.strictEqual(c1.running, false, 'engine must be switched off first!')
assert.strictEqual(typeof c1.passengers , 'object', 'value should be an array')
// assert.strictEqual(c1.driveTo(typeof argument), 'string', 'should return False')




// run the success function once you're done with a set of tests
success()
