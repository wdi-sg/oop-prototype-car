// Phase II here, don't require this file until you're done with Phase I
//var {Car} = require('./carFn')


class Car {
  constructor(make, model, year, color, seats, previousOwners, owner, running) {
    this.make = make
    this.model = model
    this.year = year
    // TODO: add color, seats here
    this.color = color
    this.seats = seats
    //default properties
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false

    this.passengers = []

  }

  // add the sell function
  sell(newOwner) {
    this.previousOwners.unshift(this.owner)
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
    if (this.running === true) {
      console.log(`Driving to ${destination}`)
      return true
    }
    return false
  }

  park() {
    if (this.running === false) {
      console.log('parked!!')
      return true
    }
    return false
  }

  pickUp(name) {
    var passCount = this.passengerCount()
    if(this.running===true && passCount+1< this.seats) {
      console.log(`Driving to pick up ${name}`)
      this.passengers.push(name)
      return true
    }
    return false
  }

  dropOff(name) {
    var index = this.passengers.indexOf(name);
    if(this.running===true) {
      this.passengers.splice(index, 1)
      console.log(`Driving to drop off ${name}`)
      return true
    }
    return false
  }

  passengerCount() {
    return this.passengers.length
  }

}

// export the Car class //
// this is required for the carTest.js to load this //
module.exports = Car
