// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
    this.passengers = []
  }
  sell(newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  }
  paint(newColor) {
    this.color = newColor
  }
  start() {
    this.running = true
  }
  off() {
    this.running = false
  }
  driveTo(destination){
    if (this.running === true){
      console.log(`driving to ${destination}`)
      return true
    } else {
      return false
    }
  }
  park() {
    if(this.running === false) {
      console.log('parked!!')
      return true
    } else {
      return false
    }
  }
  pickup(name){
    if(this.running === true && this.passengers.length+1 <= this.seats) {
      console.log(`driving to pick up ${name}`)
      this.passengers.push(name)
      return true
    } else {
      return false
    }
  }
  dropOff(name) {
    if(this.passengers.includes(name) && this.running) {
      this.passengers.splice(this.passengers.indexOf(name) , 1)
      console.log(`driving to drop off ${name}`)
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
