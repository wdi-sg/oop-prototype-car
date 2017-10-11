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
      if(this.running){
        console.log("driving to " + destination)
         return true
       }
      else return false
    }
    park() {
      if(!this.running){
        console.log('parked!!')
        return true
      }
      else return false
    }
    pickUp(name) {
      if(this.running === true && this.seats > 1) {
        console.log('driving to pick up ' + name)
        this.seats -= 1
        // console.log('left seats ',this.seats)
        this.passengers.push(name)
        return true
      }
      else return false
    }
    dropOff(name) {
      if(this.running === true && this.passengers.includes(name)){
        console.log('driving to drop off ' + name)
        this.passengers.splice(this.passengers.indexOf(name),1)
        return true
      }
      else return false
    }
    passengerCount() {
      return this.passengers.length
    }
    // TODO: add color, seats here
}


module.exports = Car
// export the Car class //
// this is required for the carTest.js to load this //
