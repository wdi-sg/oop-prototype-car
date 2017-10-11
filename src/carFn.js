// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  make: 'make',
  model: 'model',
  year: 'year',
  color: 'color',
  seats: 'seats',
  previousOwners: [],
  owner: 'manufacturer',
  running: false,
  // add the sell function
  sell: function (newOwner) {
    var previousOwner = this.owner
    this.previousOwners.push(previousOwner)
    this.owner = newOwner
  },
  // add the paint function
  paint: function (newColor) {
    this.color = newColor
  }
}

// Export the `Car` object
module.exports = Car;
