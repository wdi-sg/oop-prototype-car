// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')


// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var acura = new Car('Acura', 'Vuzel', 2017, 'Red', 7)
var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)


// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.')
assert.strictEqual(acura.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(acura.year, 2017, 'Constructor did not set year.')
assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.')
assert.strictEqual(acura.seats, 7, 'Constructor did not set seats.')


// run the success function once you're done with a set of tests
// success()

// test sell
console.log('Testing selling a car')
c1.sell('prima')
c1.paint('blue')

// You're on your own from here
assert.notStrictEqual(c1.running, true, 'Constructor did not set false.')
assert.strictEqual(c1.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(c1.owner, 'prima', 'New owner is set')
assert.strictEqual(c1.previousOwners[0], 'manufacturer', 'manufacturer is not at previousOwners arr')
assert.strictEqual(c1.color, 'blue', 'car painted is not blue')

var c2 = new Car()
assert.notStrictEqual(c2.make, 'bmw', 'car cant be instantiated, required parameters are not given')

c1.sell(0)
assert.notStrictEqual((typeof c1.owner === 'string'), true, 'car can only be sold to a real person with name, please input a string')

c1.paint(false)
assert.notStrictEqual((typeof c1.color === 'string'), true,'car can only painted with real color, please input a string')


c2.start()
// assert.strictEqual(c2.running,true,"Should change the running value of the car to true")

c2.off()
// assert.strictEqual(c2.running,false,"Should change the running value of the car to false")

c2.driveTo("yishun")
// assert.strictEqual(c2.running,false, "drive to destination")

c2.park()
// assert.strictEqual(c2.running,true)

console.log(c1)
c1.start()
console.log(c1)
c1.pickUp('huishi')
console.log(c1)
c1.dropOff('huishi')
console.log(c1)
console.log(c1.passengerCount())


success()
