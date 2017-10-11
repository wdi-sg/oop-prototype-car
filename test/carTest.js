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
assert.strictEqual(acura.owner, 'Lenny', 'The sell function is not defined')
assert.strictEqual(acura.previousOwners[0], 'manufacturer', 'The sell function is not defined')
success()
// You're on your own from here

var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)
assert.strictEqual(c1.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(c1.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(c1.year,2017, 'Constructor did not set year.')
assert.strictEqual(c1.color, 'red', 'Constructor did not set color.')
assert.strictEqual(c1.seats, 7, 'Constructor did not set seats.')
assert.strictEqual(c1.owner, 'manufacturer', 'Owner is not the manufacturer')
assert.strictEqual(c1.running, false, 'running should be false')
c1.sell('prima')
assert.strictEqual(c1.owner, 'prima', 'The sell function is not defined')
assert.strictEqual(c1.previousOwners[0], 'manufacturer', 'The sell function is not defined')
c1.paint('blue')
assert.strictEqual(c1.color, 'blue', 'paint function is not working')
success()

console.log('Testing abnormal case')
var c2 = new Car('Honda','Vuzal',2000, 'grey',5)

assert.notStrictEqual(c2.make, undefined, "car can't be instantiated, required parameters(make) are not given")
assert.notStrictEqual(c2.model, undefined, "car can't be instantiated, required parameters(model) are not given")
assert.notStrictEqual(c2.year,undefined, "car can't be instantiated, required parameters(year) are not given")
assert.notStrictEqual(c2.color, undefined, "car can't be instantiated, required parameters(color) are not given")
assert.notStrictEqual(c2.seats,undefined, "car can't be instantiated, required parameters(seats) are not given")

assert.strictEqual(c2.sell('Si Ya'), true,  'car can only be sold to a real person with name, please input a string')

assert.strictEqual(c2.paint('Black'), true,  'car can only be painted with real color, please input a string')

success()

console.log('Phase IV')
var c3 = new Car('Honda','Vuzal',2000, 'grey',5)
c3.start()
assert.strictEqual(c3.running, true, 'start function is not working')
c3.off()
assert.strictEqual(c3.running, false, 'off function is not working')
// c3.driveTo('garden')
c3.start()
assert.strictEqual((c3.driveTo('garden')), true, 'destination function is not working')
c3.off()
assert.strictEqual(c3.park(), true, 'parking function is not working')

success()
console.log('Phase V')

var c4 = new Car('Honda','Vuzal',2000, 'Black',3)
c4.sell("Si Ya")
c4.start()

assert.strictEqual(c4.pick("Shu min"), true, 'pick function is not working')
c4.pick("Jie Ying")
c4.pick("Hui Shi")

assert.strictEqual(c4.dropOff("Shu min"), true, 'drop off function is not working')
assert.notStrictEqual((c4.passengerCount()), 0, 'passenger count function is not working')
success()
