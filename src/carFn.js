// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  make: 'Honda',
  model: 'Vuzel',
  year: 2017,
  color: 'red',
  seats: 7,


  sell: function (newOwner) {
    this.previousOwners.unshift(this.owner)
    this.owner = newOwner
  },

  paint: function (newColor){
    this.color = newColor
  }

}




// Export the `Car` object
module.exports = Car
