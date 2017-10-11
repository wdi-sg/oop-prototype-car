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
var c2 = new Car()
assert.strictEqual(c1.make, 'Honda', 'Constructor did not set make.')
success()
assert.strictEqual(c1.model, 'Vuzel', 'Constructor did not set model.')
success()
assert.strictEqual(c1.year, 2017, 'Constructor did not set year.')
success()
assert.strictEqual(c1.color, 'red', 'Constructor did not set color.')
success()
assert.strictEqual(c1.seats, 7, 'Constructor did not set seats.')
success()
assert.strictEqual(c1.owner, 'manufacturer', 'Constructor did not set owner')
success()
assert.strictEqual(c1.running, false, 'Constructor did not set running')
success()
c1.sell('prima')
assert.strictEqual(c1.owner, 'prima', 'Constructor did set owner.')
success()
assert.strictEqual(c1.previousOwner[0], 'manufacturer', 'Constructor did not set previous owner')
success()
c1.paint('blue')
assert.strictEqual(c1.color, 'blue', 'Constructor did not set paint method to blue')
success()
var c2 = new Car ()
assert.strictEqual(c2.make, undefined, "car can't be instantiated, required parameters are not given" )
success()
c1.sell(0)
assert.strictEqual((typeof c1.owner === 'string'), false, 'car can only be sold to a real person with name, please input a name')
success()
c1.paint(false)
assert.strictEqual((typeof c1.color === 'string'), false, 'car can only be painted with real color, please input a color')
success()
c1.start()
assert.strictEqual(c1.running, true, 'Constructor did not set start method')
success()
c1.off()
assert.strictEqual(c1.running, false, 'Constuctor did not set off method')
// Test driveTo()
console.log('test driving to ' + 'Test!!!');
// Test if car is not running
c1.off()
assert.strictEqual(c1.driveTo('off'), false, 'Should return false if car is off')
// Test if car is running
c1.start()
assert.strictEqual(c1.driveTo('code'), true, 'Should return true if Car is running')
success();
console.log('Test park method')
// Only if the car is not running, you should console.log parked!!.
// Should return true if it is successful and false if it is not.
c1.start()
assert.strictEqual(c1.park('running'), false, 'should return false if is running')
c1.off()
assert.strictEqual(c1.park('Test'), true, 'should return true if car is not running')
success();
// console.log('pick up')
c1.off();
c1.pickUp();

// console.log(this.running)
// c1.off()
// assert.strictEqual(c1.pickUp(name), false, 'car should be running')
// c1.passengers.length > 0
// assert.strictEqual(c1.passengers.length > 0
