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
assert.strictEqual(acura.owner, 'manufacturer', 'Owner is manufacturer.')
assert.strictEqual(acura.running, false, 'Running is false.')

console.log('Testing selling a car')
acura.sell('Lenny')

// You're on your own from here
assert.strictEqual(acura.owner, 'Lenny', 'New owner is set')
assert.strictEqual(acura.previousOwners[0], 'manufacturer', 'manufacturer is not at previousOwners')
acura.sell('prima')
assert.strictEqual(acura.owner, 'prima', 'New owner is set')
assert.strictEqual(acura.previousOwners[1], 'Lenny', 'Lenny is not at previousOwners')


// test painting
// console.log('Testing the paint color')
acura.paint('blue')
assert.strictEqual(acura.color, 'blue', 'New color set is not blue')

var c2 = new Car()
assert.notStrictEqual(c2.make, undefined , "car can't be instantiated, required parameters are not given")

acura.sell(0)
assert.strictEqual(typeof acura.owner, 'string', 'car can only be sold to a real person with name, please input a string' )

acura.paint(false)
assert.strictEqual(typeof acura.color, 'string', 'car can only be painted with real color, please input a string' )

//Phase IV
console.log('Testing engine');
// console.log(acura.start())
acura.start()
assert.strictEqual(acura.running, false, 'Car has not been started' )
acura.off()
assert.strictEqual(acura.running, true, 'Car has not been stopped' )
acura.driveTo('amk')
assert.strictEqual(acura.running, false, 'Car has not been started' )
acura.park()
assert.strictEqual(acura.running, true, 'Car is not parked' )
acura.pickup('Amy')
acura.pickup('Ben')
acura.pickup('Casper')
acura.pickup('Dixon')
acura.pickup('Esther')
acura.pickup('Fish')
assert.strictEqual(acura.seats, 4 ,'Car is full' )
