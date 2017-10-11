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

// run the success function once you're done with a set of tests

// test sell
// console.log('Testing selling a car')
acura.sell('Lenny')
assert.strictEqual(c1.make, 'Honda', 'change to Honda')
// You're on your own from here
assert.strictEqual(c1.owner, 'manufacturer', 'change to manufacturer')
assert.strictEqual(c1.running, false, 'should be false')

c1.sell('prima')
assert.strictEqual(c1.owner, 'prima', 'should be prima')
assert.strictEqual(c1.previousOwner[0], 'manufacturer', 'should be manufacturer')

c1.paint('blue')
assert.strictEqual(c1.color, 'blue', 'wrong color')

var c2 = new Car('bmw')
assert.notStrictEqual(c2.make, undefined, "car can't be instantiated, required parameters are not given")

c1.sell('timmy')
assert.strictEqual((typeof c1.owner === 'string'), true , "car can only be sold to a real person with name, please input a string")

c1.paint('red')
assert.strictEqual((typeof c1.color === 'string'), true , 'car can only be painted with real color, please input a string')

c1.start()
assert.strictEqual(c1.running, true ,"should change the running value of the car to true")

c1.off()
assert.strictEqual(c1.running, false, "Should change the running value to false.")

c1.driveTo('yishun')
assert.strictEqual(c1.running, true, "start car please")

c1.park()
assert.strictEqual(c1.running, false, "please shut your engine.")




success()
