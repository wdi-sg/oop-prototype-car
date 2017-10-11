// Phase I, don't require this file after you're done with Phase I

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
            this.previousOwner.push(this.owner)
            this.owner = newOwner
          },
          paint: function (newColor) {
            this.color = newColor
          }
        }





// Export the `Car` object
module.exports = Car
