// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
class Car{
  constructor(make, model, year, color, seats){
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = "manufacturer"
    this.running = false

  }
  sell(newOwner){
   this.previousOwners.push(this.owner)
   return this.owner = newOwner
  }
  paint(newColor){
    return this.color = newColor
  }
}

module.exports = Car 
// Export the `Car` object
