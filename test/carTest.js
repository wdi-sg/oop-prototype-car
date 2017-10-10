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
// console.log('Testing Constructor')
// assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.')
// assert.strictEqual(acura.model, 'Integra', 'Constructor did not set model.')
// assert.strictEqual(acura.year, 1999, 'Constructor did not set year.')
// assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.')
// assert.strictEqual(acura.seats, 4, 'Constructor did not set seats.')

// run the success function once you're done with a set of tests
//success()

// test sell
// console.log('Testing selling a car')
// acura.sell('Lenny')
// assert.strictEqual(acura.owner, 'Lenny', 'Owner was not changed to Lenny.')

// You're on your own from here
//Test c1
// assert.strictEqual(c1.make, 'Honda', 'Constructor did not set make.')
// assert.strictEqual(c1.model, 'Vuzel', 'Constructor did not set model.')
// assert.strictEqual(c1.year, 2017, 'Constructor did not set year.')
// assert.strictEqual(c1.color, 'red', 'Constructor did not set color.')
// assert.strictEqual(c1.seats, 7, 'Constructor did not set seats.')
// assert.strictEqual(c1.owner, 'manufacturer', 'Owner is not manufacturer.')
// assert.strictEqual(c1.running, false, 'Running is not false.')
//
//
// c1.sell('prima')
// assert.strictEqual(c1.owner, 'prima', 'Owner is not prima.')
// assert.strictEqual(c1.previousOwners[0], 'manufacturer', 'previousOwners is not manufacturer.')
//
// c1.paint('blue')
// assert.strictEqual(c1.color, 'blue', 'Color was not changed to blue.')


//test c2
//assert.ok(c2.make, "car can't be instantiated, required parameters are not given")

//test c1.sell
//c1.sell(0)
// assert.ok(c1.owner, 'car can only be sold to a real person with name, please input a string' )

//test c1.paint(false)
//c1.paint(false)
// assert.ok(c1.color, 'car can only be painted with real color, please input a string' )
//
// //Phase IV
// c1.start()
// assert.ok(c1.running, 'Car running is false' )
//
// c1.off()
// assert.strictEqual(c1.running, false, 'Car running is true' )
// assert.ok(c1.driveTo('Hawaii'), 'Not driving to destination. Car is not running' )
// assert.ok(c1.park(), 'Not parked. Car is running' )

// success()
