// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  make: 'Honda',
  model: 'Vuzel',
  year: 2017,
  color: "red",
  seats: 7,
  previousOwners : [],
  owner : "manufacturer",
  running : false,
  sell: function (newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  },
  paint
}

function paint (newColor) {
  this.color = newColor
}
module.exports = Car
// Car.sell('test')
// Car.paint('black')
// console.log(Car)// console.log('post car',Car)
// Export the `Car` object
