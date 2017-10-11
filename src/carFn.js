// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  make: "BMW",
  model: "Astar",
  year: 2017,
  color: "black",
  seats: 8,
  previousOwners: [],
  owner: "manufacturer",
  running: false,
  sell: function (newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  },
  paint: function (newColor) {
    this.color = newColor
  }
}

console.log(Car)

// Export the `Car` object
module.exports = Car
