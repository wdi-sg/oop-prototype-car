// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var car = {
  make: 'Honda',
  model: 'Vezel',
  year: '2014',
  color: 'pink',
  seats: '6-Seater',
  previousOwner: [],
  owner: 'manufacturer',
  running: false,
  sell: function (newOwner){
    this.previousOwner.push(this.owner)
    this.owner = newOwner
  },
  paint
}
function paint (newColor){
  this.color = newColor
}
module.exports = car
// Export the `Car` object
