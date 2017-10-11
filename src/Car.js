// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats, previousOwners, owner, running) {
    this.make = make
    this.model = model
    this.year = year
    // TODO: add color, seats here
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
  }

  // add the sell function
  sell(newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  }

  // add the paint function
  paint(newColor) {
    this.color = newColor
  }


  start() {
    this.running = true
  }

  off() {
    this.running = false
  }

  driveTo(destination) {
    if(this.running) {
      console.log("driving to " + destination)
    }
    return this.running
  }

  park() {
    if(!this.running ) {
      console.log("Parked!!")
    }
      return !this.running
  }
}

// export the Car class //
module.exports = Car
// this is required for the carTest.js to load this //
