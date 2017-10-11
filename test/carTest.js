// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')


// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var acura = new Car('Acura', 'Integra', 1999, 'Red', 4)

// starter code - testing constructor
console.log('<================ Testing Constructor [1/4] ================>')
assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.')
assert.strictEqual(acura.model, 'Integra', 'Constructor did not set model.')
assert.strictEqual(acura.year, 1999, 'Constructor did not set year.')
assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.')
assert.strictEqual(acura.seats, 4, 'Constructor did not set seats.')
console.log("*Constructors success*");
console.log("<================ Testing abnormal cases [2/4] =============>");
assert.strictEqual(acura.sell(2),  'car can only be sold to a real person with name, please input a string',"No error message")
assert.strictEqual(acura.paint(false), 'car can only be painted with real color, please input a string',"No reject on non string")
console.log("*Abnormal Cases success*");
console.log("<================ Testing Phase IV [3/4] ===================>");
assert.strictEqual(acura.start(),true,"start() did not return true")
assert.strictEqual(acura.off(),false,"off() did not return false")
assert.strictEqual(acura.driveTo("Somewhere"),false,"driveTo() did not return false when car is off")
acura.start()
assert.strictEqual(acura.driveTo("Somewhere"),true,"driveTo() did not return true when car is on")
assert.strictEqual(acura.park(),false,"park() did not return false when car is on")
acura.off()
assert.strictEqual(acura.park(),true,"park() did not return true when car is off")
console.log("*Phase IV success*");
console.log("<=============== Testing Phase V [3/4] ===================>");
assert.strictEqual(acura.pickUp("Bob"),false,"pickUp() did not return false when car is off")
acura.start()
assert.strictEqual(acura.pickUp("Bob"),true,"pickUp() did not return true when car is running")
assert.strictEqual(acura.passengerCount(),acura.passengers.length+1,"passengerCount() did not return the correct amount of passengers")
console.log("*Phase V success*");
console.log("*************** ALL TESTS PASSED (4/4) *****************");
// run the success function once you're done with a set of tests
success()

// test sell



// You're on your own from here
