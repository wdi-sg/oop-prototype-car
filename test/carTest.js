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
// assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.')
// assert.strictEqual(acura.model, 'Integra', 'Constructor did not set model.')
// assert.strictEqual(acura.year, 1999, 'Constructor did not set year.')
// assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.')
// assert.strictEqual(acura.seats, 4, 'Constructor did not set seats.')

// run the success function once you're done with a set of tests
//success()

// test sell
//console.log('Testing selling a car')
//acura.sell('Lenny')

//console.log('changing color')
//acura.paint('blue')

var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)
assert.strictEqual(c1.make, 'Honda', 'new make')

//c1.sell('prima')
//assert.strictEqual(c1.owner, 'prima', 'New owner is prima')
//assert.strictEqual(c1.previousOwners[0],'manufacturer', 'manufacturer is not current owner')

//c1.paint('blue')
//assert.strictEqual(c1.color, 'blue', 'color changed')

//var c2 = new Car ()
//assert.strictEqual(c2.make, undefined, 'car can\'t be instantiated, required parameters are not given')

//c1.sell(0)
//assert.ok(c1.owner, 'car can only be sold to a real person with name, please input a string')
//assert.strictEqual(c1.owner, undefined, 'car can only be sold to a real person with name, please input a string')

//c1.paint(false)
//assert.ok(c1.color, 'car can only be painted with real color, please input a string')

c1.start()
//assert.ok(c1.running, 'car not moving')

//c1.off()
//assert.ok(c1.running, 'car not stop')

//c1.driveTo()
//assert.ok(c1.driveTo('paris'), 'car is parked ')


//c1.park()
//assert.ok(c1.park(), 'car is running')

assert.ok(c1.pickUp('mary'), 'cannot pick up')
//assert.ok(c1.dropOff('mary'), 'cannot drop off')

//console.log(c2)
//console.log('changing running')
//acura.start('true')

// You're on your own from here
// assert.strictEqual(acura.owner,'Lenny', 'New owner is set')
// assert.strictEqual(acura.previousOwners[0],'manufacturer', 'manufacturer is not current owner')
// assert.strictEqual(acura.color, 'blue', 'color changed')

//assert.strictEqual(c1.owner, 'manufacturer', 'current owner')
//assert.strictEqual(c1.running, false, 'current running')
//assert.strictEqual(c1.owner, 'prima', 'New owner is prima')
//assert.strictEqual(c1.previousOwners[0],'manufacturer', 'manufacturer is not current owner')



//assert.fail('car cannnot be instantiated, required parameters are not given')
//asset.strictEqual()
//asset.strictEqual(acura.running, 'true', 'value changed

success()
