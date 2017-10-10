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
      this.owner = newOwner
    }
    paint(newColor) {
      this.color = newColor
    }
  }

// export the Car class //
// this is required for the carTest.js to load this //
module.exports = Car;
