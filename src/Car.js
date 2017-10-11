// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats) {
    if(arguments.length < 5) return this.error()

    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
  }
  error () {
    return "car can't be instantiated, required parameters are not given"
  }
  sell (newOwner) {
    if(typeof newOwner !== 'string') return 'car can only be sold to a real person with name, please input a string'

    var previousOwner = this.owner
    this.previousOwners.push(previousOwner)
    this.owner = newOwner
  }
  paint (newColor) {
    if(typeof newColor !== 'string') return 'car can only be painted with real color, please input a string'

    this.color = newColor
  }
  start () {
    this.running = true
  }
  off () {
    this.running = false
  }
  driveTo (destination) {
    var isRunning = this.running
    if(isRunning) console.log(`driving to ${destination}`)
    return isRunning
  }
  park () {
    var running = this.running
    if(!running) console.log("parked!!")
    return !running
  }
}

module.exports = Car;
