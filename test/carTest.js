// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')


// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
// var acura = new Car('Acura', 'Integra', 1999, 'Red', 4)
// console.log(acura);

// // starter code - testing constructor
// console.log('Testing Constructor')
// assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.')
// assert.strictEqual(acura.model, 'Integra', 'Constructor did not set model.')
// assert.strictEqual(acura.year, 1999, 'Constructor did not set year.')
// assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.')
// assert.strictEqual(acura.seats, 4, 'Constructor did not set seats.')

// run the success function once you're done with a set of tests
// success()

// test sell
// console.log('Testing selling a car')
// acura.sell('Lenny')
// assert.strictEqual(acura.owner, 'Lenny', 'Sell Method did not set new owner.')
// assert.strictEqual(acura.previousOwners[0], 'manufacturer', 'Sell Method did not set new owner.')
// success()
//You're on your own from here
var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)
// console.log('Testing New Car properties')
// assert.strictEqual(c1.make, 'Honda', 'Constructor did not set make.')
// assert.strictEqual(c1.owner, 'manufacturer', 'Constructor did not set owner.')
// assert.strictEqual(c1.running, false, 'Constructor did not set owner.')
// success()

//test object with no parameters
// var c2 = new Car()
// console.log(c2.model);
// assert.notEqual(c2.model, undefined, "car can't be instantiated, required parameters are not given")
// success()

//test sell with non string owner
// c1.sell(0)
// assert.strictEqual(typeof(c1.owner), 'string', "car can only be sold to a real person with name, please input a string.")
// c1.paint(false)
// assert.strictEqual(typeof(c1.color), 'string', "car can only be painted with real color, please input a string.")
// success()


//Phase 4
c1.start()
assert.ok(c1.running, "car should be running but it is not")
// c1.off()
// assert.ok(!c1.running, "car should be stopped but it is running")
//Car.driveTo(destination)
// c1.driveTo('Orchard')
// assert.ok(c1.running, "car not running, cant drive off")
// assert.ok(c1.driveTo('Orchard'), "cant drive off")
// c1.park()
// assert.ok(c1.park(), "car should be parked but it is running")

//phase 5 TO-do
// c1.pickUp('lois')
assert.ok(c1.running, "car not running")
assert.ok(c1.seats > c1.passengers.length, "not enough seats!")
assert.ok(c1.pickUp('Lois'), "it still didnt work")
assert.ok(c1.passengers.length, "passenger didnt get added")
success()

//Car.dropOff(name)
assert.ok(c1.passengers.includes('Lois'), "passenger " + 'Lois' + " is not in car")
assert.ok(c1.running, "car not running")
assert.ok(c1.dropOff('Lois'), "could not drop off")
success()
c1.passengerCount()
// assert.strictEqual(typeof(c1.passengerCount()),'integer',"not an integer")
// assert.ok(typeof(c1.passengerCount()),"no passengers")
