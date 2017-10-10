// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car');
// update the car instantiation below according to the test given
var acura = new Car('Acura', 'Integra', 1999, 'Red', 4);

// starter code - testing constructor
console.log('Testing Constructor');
assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.');
assert.strictEqual(acura.model, 'Integra', 'Constructor did not set model.');
assert.strictEqual(acura.year, 1999, 'Constructor did not set year.');
assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(acura.seats, 4, 'Constructor did not set seats.');
assert.strictEqual(acura.owner, 'manufacturer', 'Owner is not set.');
assert.strictEqual(acura.running, false, 'Running is not set to false.');
// run the success function once you're done with a set of tests
success();

// test sell
console.log('Testing selling a car');
acura.sell('Lenny');

// You're on your own from here
assert.strictEqual(acura.owner, 'Lenny', 'sell not working');
assert.strictEqual(
  acura.previousOwners[0],
  'manufacturer',
  'previousOwners not updated1'
);
success();

// c1 --------------------------------------------------------------
var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7);
c1.sell('prima');
c1.paint('blue');

console.log('Testing c1');
assert.strictEqual(c1.owner, 'prima', 'Owner is not set.');
assert.strictEqual(
  c1.previousOwners[0],
  'manufacturer',
  'previousOwners not updated2'
);
assert.strictEqual(c1.color, 'blue', 'color not updated');
success();

// c2 --------------------------------------------------------------
var c2 = new Car();
console.log('Testing c2 Constructors');
// console.log(c2);

// assert.notStrictEqual(
//   c2.make,
//   undefined,
//   "car can't be instantiated, required parameters are not given make."
// );
// assert.notStrictEqual(
//   c2.model,
//   undefined,
//   "car can't be instantiated, required parameters are not given model."
// );
// assert.notStrictEqual(
//   c2.year,
//   undefined,
//   "car can't be instantiated, required parameters are not given year."
// );
// assert.notStrictEqual(
//   c2.color,
//   undefined,
//   "car can't be instantiated, required parameters are not given color."
// );
// assert.notStrictEqual(
//   c2.seats,
//   undefined,
//   "car can't be instantiated, required parameters are not given seats."
// );
// success();

c2.sell(0);
// console.log(c2.sell(0));

assert.strictEqual(
  c2.sell(0),
  'car can only be sold to a real person with name, please input a string',
  'car can only be sold to a real person with name, please input a string'
);

// c2.paint(false);
assert.strictEqual(
  typeof c2.color,
  'string',
  'car can only be painted with real color, please input a string'
);

console.log('Testing Phase IV');
c2.start();
assert.strictEqual(c2.running, true, 'start not working');

c2.off();
assert.strictEqual(c2.running, false, 'stop not working');

c2.start();
assert.strictEqual(c2.driveTo('destination'), true, 'drive not working');

c2.off();
assert.strictEqual(c2.park(), true, 'park not working');
