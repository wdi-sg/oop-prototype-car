// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  make:'Honda',
  model: 'Vuzel',
  year: 2017,
  color: 'red',
  seats: 7,
  previousOwners: [],
  owner: "manufacturers",
  running: false,
  sell: function(newOwner) {
    this.previousOwners.push(this.owner)
    return this.owner = newOwner
  },
  paint: function(newColor) {
    return this.color = newColor
  },
}

module.exports = Car


// Export the `Car` object
