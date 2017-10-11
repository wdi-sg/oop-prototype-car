// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make , model, year, color, seats, previousOwners, owner, running, passengers) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = `manufacturer`
    this.running = false
    this.passengers= []
    // TODO: add color, seats here

  }

  sell(newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  }

  paint(newColor) {
    this.color = newColor
  }
  // add the sell function

  // add the paint function
  start() {
    this.running = true
  }

  off() {
    this.running = false
  }

  driveTo(destination) {
    if (this.running === true) {
      console.log (`driving to ${destination} `)
      return true
    } else return false
  }

  park() {
    if(this.running === false) {
      console.log(`parked!!`)
      return true
    } else return false
  }

  pickUp(name) {
    if(this.running === true && this.seats > this.passengers.length) {
      console.log(`driving to pick up ${name}`)
      this.passengers.push(name)
      return true
    } else return false
    }

  dropOff(name) {
    var i = this.passengers.indexOf(name);
    if(this.running === true) {
      console.log(`driving to drop off ${name}`)
      this.passengers.splice(i, 1)
      return true
    } else return false
  }

  passengerCount() {
    return parseInt(this.passengers.length)
  }
  }


module.exports = Car
// export the Car class //
// this is required for the carTest.js to load this //
