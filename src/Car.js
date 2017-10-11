// Phase II here, don't require this file until you're done with Phase I


class Car {
  constructor(make, model, year, color, seats, passengers) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.owner = 'manufacturer'
    this.previousOwners = []
    this.running = false
    this.passengers = []
    // TODO: add color, seats here
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
    if (this.running) {
      console.log("driving to " + destination)
    }
    return this.running
  }

  park() {
    if (!this.running) {
      console.log('parked!!')
    }
    return !this.running
  }

  pickUp(name) {
    if (this.running === true && this.passengers.length <= this.seats - 1) {
      this.passengers.push(name)
      console.log("driving to pick up " + name)
      return true
    } else {
      return false
    }
  }

  dropOff(name) {
    if (this.running === true ) {
      this.passengers.splice(this.passengers.indexOf(name),1)
      console.log("driving to drop off " + name)
      return true
    } else {
      return false
    }
  }

  passengerCount() {
    return this.passengers.length
  }

}




// export the Car class //
module.exports = Car
// this is required for the carTest.js to load this //
