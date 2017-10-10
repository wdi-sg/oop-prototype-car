// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(
    make = "car can't be instantiated, required parameters are not given",
    model = "car can't be instantiated, required parameters are not given",
    year = "car can't be instantiated, required parameters are not given",
    color = "car can't be instantiated, required parameters are not given",
    seats = "car can't be instantiated, required parameters are not given",
    passengers = [],
    previousOwners = [],
    owner = 'manufacturer',
    running = false
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.seats = seats;
    this.previousOwners = previousOwners;
    this.owner = owner;
    this.running = running;
  }

  sell(newOwner) {
    if (typeof newOwner !== 'string')
      return 'car can only be sold to a real person with name, please input a string';
    this.previousOwners.push(this.owner);
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
    if (this.running) {
      console.log('Driving to ' + destination);
      return true;
    } else return false;
  }

  park() {
    if (!this.running) {
      console.log('parked!!');
      return true;
    } else return false;
  }
}

module.exports = Car;
// export the Car class //
// this is required for the carTest.js to load this //
