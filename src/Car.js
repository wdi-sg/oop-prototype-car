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
    // TODO: add color, seats here
  }

  // add the sell function

   sell(newOwner) {
     this.previousOwners.push(this.owner)
     this.owner = newOwner
  }

  // add the paint function
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
      if(this.running=== true) {
        console.log(`driving to ${destination}`)
        return true
      }
      else {
        return false
      }
    }

    park() {
      if(this.running === false){
        console.log('parked!!')
        return true
      }
      else {
        return false
      }
    }

    pickup(name) {
      if(this.running === true && this.passengers.length <= this.seats){
        console.log(`driving to pick up ${name}`)
        this.passengers.push(name)
        return true
      }

      else{
        return false
      }

    }
    dropOff(name) {
      var index = this.passengers.indexOf(name);
      if(this.running === true){

      console.log(`driving to drop off ${name}`)
      this.passengers.splice(index, 1)
      }
      else{
        return false
      }
    }

    passengersCount() {
      return this.passengers.length
    }
}


// export the Car class //
module.exports = Car
// this is required for the carTest.js to load this //
