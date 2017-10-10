// Phase II here, don't require this file until you're done with Phase I
// require('./carFn');

class Car {
  constructor(make, model, year, color, seats) {
    this.make = make
    this.model = model
    this.year = year
    // TODO: add color, seats here
    this.color = color
    this.seats = seats
    this.previousOwner = []
    this.owner = 'manufacturer'
    this.running = false
    }
  // add the sell function
    sell(newOwner) {
      this.previousOwner.push(this.owner);
      this.owner = newOwner;
    }
    paint(newColor) {
      this.color = newColor;
    }
}

// export the Car class //
// this is required for the carTest.js to load this //
module.exports = Car
