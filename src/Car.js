// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwner= []
    this.owner = 'manufacturer'
    this.running = false

    // TODO: add color, seats here
  }
  sell (newOwner) {
    this.previousOwner.push(this.owner)
    this.owner = newOwner
  }
  // add the sell function
  paint (newColor) {
    this.color = newColor
  // add the paint function
}
  start () {
    this.running = true
  }
  off() {
    this.running = false
  }
  driveTo(destination) {
   if (this.running === true) {
     console.log("driving to " + destination)
   } else {
     return false
   }
  }
  park() {
    if (this.running === false) {
      console.log("parked!!")
    } else {
      return false
    }
  }
}

// export the Car class //
module.exports = Car
// this is required for the carTest.js to load this //
