// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats, passengers) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    // TODO: add color, seats here
    this.owner = 'manufacturer'
    this.running = false
    this.previousOwners = []
    this.passengers = []
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
  // car start
  start() {
    this.running = true
  }
  // off
  off() {
    this.running = false
  }
  // driving to destination
  driveTo(destination) {
    if (this.running === true) {
      console.log('driving to' + destination)
      return true
    } else {
      return false
    }
  }
  park() {
    if (this.running === false) {
      console.log('parked!')
      return true
    } else {
      return false
    }
  }
  pickUp(name) {
    if (this.running === true && this.passengers.length <= (this.seats - 1)) {
      console.log('driving to pick up ' + name)
      return true
    } else {
      return false
    }
  }
  dropOff(name) {
    if 
  }
}

// export the Car class //
module.exports = Car
// this is required for the carTest.js to load this //
