// Phase II here, don't require this file until you're done with Phase I
// require('./carFn');

class Car {
  constructor(make, model, year, color, seats, passengers) {
    this.make = make
    this.model = model
    this.year = year
    // TODO: add color, seats here
    this.color = color
    this.seats = seats
    this.previousOwner = []
    this.owner = 'manufacturer'
    this.running = false
    this.passengers = []
    }
  // add the sell function
    sell(newOwner) {
      this.previousOwner.push(this.owner);
      this.owner = newOwner;
    }
    paint(newColor) {
      this.color = newColor;
    }
    start() {
      this.running = true;
    }
    off() {
      this.running = false;
    }
    driveTo(destination) {
      if (this.running === true) {
      console.log('Driving to ' + destination)
      return true
    } else if (this.running === false) {
      return false
      }
    }
    park() {
      if (this.running === true) {
        return false
      } else if (this.running === false) {
        console.log('parked!!!')
        return true
      }
      }
      pickUp() {
        if (this.passengers.length <= this.seats.length - 1 || this.running) {
          console.log(this.running);
        }
      }

}
// export the Car class //
// this is required for the carTest.js to load this //
module.exports = Car
