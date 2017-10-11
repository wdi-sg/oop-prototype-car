// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats,owner ='manufacturer',running= false,passenger = []) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = owner
    this.running = running
    this.passenger = passenger
  }

  sell (newOwner){
    if (typeof(newOwner)==='string'){
      this.previousOwners.push(this.owner)
      this.owner = newOwner
      return true
    }
  }

  paint(newColor){
    if(typeof(newColor)==='string'){
      this.color = newColor
      return true
    }
  }
  start(){
    this.running = true
  }
  off (){
    this.running = false
  }
  driveTo(destination){
    if (this.running) {
      console.log(`driving to ${destination}`)
      return true
    }
  }
  park(){
    if(!this.running){
      console.log('parked')
      return true
    }
  }
  pick(name){
    if(this.running&& this.passenger.length<this.seats-1){
      console.log(`driving to pick up ${name}`)
      this.passenger.push(name)
      return true
    }
  }
  dropOff(name){
    if (this.passenger.includes(name)&&this.running){
      var indexNo = this.passenger.indexOf(name)
      this.passenger.splice(indexNo,1)
      console.log(`driving to drop off ${name}`)
      return true
    }
  }
  passengerCount(){
    return this.passenger.length
  }
}
module.exports = Car
// export the Car class //
// this is required for the carTest.js to load this //
