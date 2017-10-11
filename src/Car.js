// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats

    this.passengers = []
    this.previousOwner = []
    this.owner = 'manufacturer'
    this.running = false
    this.length = arguments.length
  }
  error(){
    if(arguments.length<5){
      return false
    }
  }
  // add the sell function
  sell(newOwner){
    this.previousOwner.push(this.owner)
    this.owner = newOwner
}

  // add the paint function
  paint(newColor){
    this.color = newColor
  }
  start(){
    this.running = true
  }
  off(){
    this.running = false
  }
  driveTo(destination){
    if(this.running){
      console.log(`driving to ${destination}`)
    }
    return this.running
  }
  park(){
    if(!this.running){
      console.log("parked!!")
    }
    return !this.running
  }
  pickUp(name){
    if(this.running && this.passengers < this.seats ){
      this.passengers.push(name)
      console.log(`driving to pick up ${name}`)
    }
  }
  dropOff(name){
    if(this.passengers.includes(name) && this.running){
      this.passengers.splice(this.passengers.indexOf(name),1)
      console.log(`driving to drop off ${name}`)
      return true
    }else{
      return false
    }
  }
  passengersCount(){
    return this.passengers.length
  }
}

// export the Car class //
module.exports = Car
// this is required for the carTest.js to load this //
