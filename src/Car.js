// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor (make, model, year, color, seats) {
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
  start () {
    return this.running = true
  }

  off () {
    return this.running = false
  }

  pickUp (name) {
    if (this.running === true && this.passengers.length < (this.seats - 1)) {
      console.log(`driving to pick up ${name}`)
      this.passengers.push(name)
      return true
    } else {
      return false
    }
  }

  dropOff (name) {
    if (this.passengers.length >= 1 && this.running === true) {
      var passengerIndex = this.passengers.indexOf(name)
      this.passengers.splice(passengerIndex, 1)
      console.log(`driving to drop off ${name}`)
      return true
    } else { return false }
  }

  passengerCount () {
    return this.passengers.length + 1
  }

  driveTo (destination) {
    if (this.running === true) {
      console.log(`driving to ${destination}`)
      return true
    } else {
      return false
    }
  }

  park () {
    if (this.running === false) {
      console.log('parked!!')
      return true
    } else {
      return false
    }
  }

  sell (newOwner) {
    this.previousOwners.push(this.owner)
    return this.owner = newOwner
  }

  paint (newColor) {
    return this.color = newColor
  }

  }

module.exports = Car
