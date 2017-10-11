// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  'make': 'Honda',
  'model': 'Vuzel',
  'year': 2017,
  'color': 'red',
  'seats': 7,
  'previousOwners': [],
  owner: 'manufacturer',
  running: false,
  sell: function (newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  },
  paint: function (newColor) {
    this.color = newColor
  }
}

// Export the `Car` object
module.exports = Car
// Car.sell('Gab')
// Car.paint('yellow')
// console.log(Car)
