// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats

    this.previousOwners = []
    this.owner = "manufacturer"
    this.running = false
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
    driveTo(destination) {
      if (this.running === true) {
      console.log("driving to " + destination)
      return true
      }
      else return false
    }
    park() {
      if (this.running === false) {
      console.log("parked!")
      return true
      }
      else return false
    }
}


// export the Car class //
// this is required for the carTest.js to load this //
module.exports = Car;
