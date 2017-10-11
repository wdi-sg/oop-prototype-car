// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = { make: 'Honda',
            model: 'Vezel',
            year: 2017,
            color: 'red',
            seats: 7,
            previousOwners: [],
            owner: 'manufacturer',
            running: false,
            sell,
            paint
          }

// Export the `Car` object
module.export = Car

  function sell(newOwner) {
   this.previousOwners.push(this.owner)
   this.owner = newOwner
  }

// add the paint function

  function paint(newColor) {
    this.color = newColor
   }
