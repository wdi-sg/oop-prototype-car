// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')


// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var acura = new Car('Acura', 'Integra', 1999, 'Red', 5)


// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.')
assert.strictEqual(acura.model, 'Integra', 'Constructor did not set model.')
assert.strictEqual(acura.year, 1999, 'Constructor did not set year.')
assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.')
assert.strictEqual(acura.seats, 5, 'Constructor did not set seats.')

// run the success function once you're done with a set of tests
success()

// test sell
console.log('Testing selling a car')
acura.sell('Lenny')

// You're on your own from here
assert.strictEqual(acura.owner,'Lenny','New owner is set')
assert.strictEqual(acura.previousOwners[0],'manufacturer','manufacturer is not at previousOwners arr')
assert.strictEqual(acura.running,false)
acura.sell('prima')
assert.strictEqual(acura.owner,'prima','New owner is set')
acura.paint('blue')
assert.strictEqual(acura.color,'blue')

var honda = new Car()
//assert.notStrictEqual(honda.make,undefined,'car cant be instantiated, required parameters are not given')

honda.sell(0)
//assert.strictEqual(typeof honda.owner,'string', 'car can only be sold to a real person with name,please input a string')
honda.paint(false)
//assert.strictEqual(honda.color,'string','car can only painted with real color, please input a string')

honda.start()
//assert.strictEqual(honda.running,true,"Should change the running value of the car to true")
honda.off()
//assert.strictEqual(honda.running,false,"Should change the running value to false")
honda.driveTo("yishun")
//assert.strictEqual(honda.driveTo(),false)
honda.park()
//assert.strictEqual(honda.running,true)

console.log(acura);
console.log(acura.start());
console.log(acura.pickUp("huishi"));
console.log(acura);

console.log(acura.dropOff("huishi"))
console.log(acura);
console.log(acura.passengerCount());
success()

//assert.notStrictEqual()
