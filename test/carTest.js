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

assert.strictEqual(acura.owner, 'Lenny', '.sell function did not return correctly')
assert.strictEqual(acura.previousOwners[0], 'manufacturer', 'previousOwners not working')

success()

console.log('Testing painting a car')
acura.paint('Blue')
assert.strictEqual(acura.color, 'Blue', '.paint function did not return correctly')

success()

// console.log('Testing abnormal case 1 - no parameters')
// var acura2 = new Car()
// assert.notStrictEqual(acura2.make, undefined , "car can't be instantiated, required parameters are not given - make" )
// assert.notStrictEqual(acura2.model, undefined, "car can't be instantiated, required parameters are not given - model" )
// assert.notStrictEqual(acura2.year, undefined, "car can't be instantiated, required parameters are not given - year" )
// assert.notStrictEqual(acura2.color, undefined, "car can't be instantiated, required parameters are not given - color" )
// assert.notStrictEqual(acura2.seats, undefined, "car can't be instantiated, required parameters are not given - seats" )
//
// success()

// console.log('Testing input of .sell')
// acura.sell(0)
// assert.equal(typeof(acura.owner), "string" ,'car can only be sold to a real person with name, please input a string')
//
// success()

 // console.log('Testing input of .paint')
 // acura.paint(false)
 // assert.equal(typeof(acura.color), "string" ,'car can only be sold to a real person with name, please input a string')
 //
 // success()

 console.log('Testing car.start() fn')
 acura.start()
 assert.strictEqual(acura.running, true, 'Running Value not working')
 success()

 console.log('Testing car.off() fn')
 acura.off()
 assert.strictEqual(acura.running, false, 'Running Value not working')
 success()

 console.log('Testing car driveTo fn')
 acura.start()
 acura.driveTo('tokyo')
 console.log(acura.running)
 assert.strictEqual(acura.driveTo('tokyo'), true, 'driving To not working')
 success()

 console.log('Testing car park')
 acura.off()
 console.log(acura.running)
 acura.park()
 assert.strictEqual(acura.park(), true, 'parking not working')
 success()
