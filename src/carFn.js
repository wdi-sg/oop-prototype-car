// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var car = {
  make : 'Honda',
  model : 'Vuzel',
  year : 2017,
  color : 'red',
  seats :7,
  previousOwners : [],
  owner: `manufacturer`,
  running: false,
  sell :function(newOwner) {

    this.previousOwners.push(this.owner)
    this.owner = newOwner
  },

  paint: function(newColor) {
    this.color = newColor
  }
}




// class Car {
//   constructor(make, model, year, color, seats, previousOwners, owner, running) {
//     this.make :
//     this.model:
//     this.year :
//     this.color:
//     this.seats:
//     this.previousOwners:
//   }

module.exports = Car
// Export the `Car` object
