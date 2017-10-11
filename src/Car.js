// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats, previousOwners, owner, running, passengers ) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.seats = seats,
    this.previousOwners = [],
    this.owner = 'manufacturer',
    this.running = false

    this.passengers = []
}

  // add the sell function
  sell(newOwner) {
    this.previousOwners.push(this.owner)
    return this.owner = newOwner
  }


  // add the paint function
  paint(newColor) {
    return this.color = newColor
  }

  start() {
    return this.running = true
  }

  off() {
    return this.running = false
  }

  driveTo(destination) {
    if (this.running === true) {
      console.log(`driving to ${destination}`)
      return true
    } else {
      return false
    }
  }

  park() {
    if (this.running === false) {
      console.log('parked!!')
      return true
    } else {
      return false
    }
  }

  pickUp(name) {
    if(this.running === true && this.passengers.length < this.seats) {
      console.log(`Driving to pick up ${name}`)
      this.passengers.push(name)
      return true
    } else {
      return false
    }
  }

  dropOff(name) {
    var index = this.passengers.indexOf(name);
    if(this.running===true) {
      this.passengers.splice(index, 1)
      console.log(`Driving to drop off ${name}`)
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
// this is required for the carTest.js to load this //
module.exports = Car
