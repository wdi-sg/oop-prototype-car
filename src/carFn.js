// Phase I, don't require this file after you're done with Phase I
// var Car = require('./Car');

// Create the object properties and function
var Car = {
  make: 'Honda',
  model: 'Vezel',
  year: 2017,
  color: 'red',
  seats: 7,
  previousOwner: [],
  owner: 'manufacturer',
  running: false,
  sell: function (newOwner) {
    Car.previousOwner.push(Car.owner);
    Car.owner = newOwner;
  },
  paint: function (newColor) {
    Car.color = newColor;
  }
}

// Export the `Car` object

module.exports = Car
