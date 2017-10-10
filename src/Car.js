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
    pickUp(name) {
      this.passengers.push(this.owner)
      var avaiSeats = this.seats - this.passengers.length
        if (this.running === true && avaiSeats !== 0 ) {
        console.log("driving to pick up " + name)
        this.passengers.push(name)
        return true
      }
      else {
        return false
      }
    }
    dropOff(name){
      var commuterArr = this.passengers
    if (this.running === true && this.passengers.includes(name)) {
      console.log("driving to dropOff " + name)
      function remove(commuterArr, name) {
        const index = commuterArr.indexOf(name);
        commuterArr.splice(index, 1);
      }
      return true
    }
    else return false
  }
  passengerCount() {
    return this.passengers.length
  }
}


// export the Car class //
// this is required for the carTest.js to load this //
module.exports = Car;
