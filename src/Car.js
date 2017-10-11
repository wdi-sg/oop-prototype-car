// Phase II here, don't require this file until you're done with Phase I

class Car{
  constructor(make, model, year, color, seats){
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.passengers = []
    this.owner = "manufacturer"
    this.running = false
    if (this.make === undefined || this.model === undefined || this.year === undefined || this.color === undefined || this.seats === undefined){
    throw Error("car can't be instantiated, required parameters are not given")
    // this.checkVariable()
  }
}
  // checkVariable(){
  //   if (this.make === undefined || this.model === undefined || this.year === undefined || this.color === undefined || this.seats === undefined){
  //   console.log("car can't be instantiated, required parameters are not given")
  //   }
  // }
  sell(newOwner){
    if(typeof(newOwner) !== "string"){
      return 'car can only be sold to a real person with name, please input a string'
    }else{
   this.previousOwners.push(this.owner)
   return this.owner = newOwner
  }
  }
  paint(newColor){
    if (typeof newColor !== "string"){
      return 'car can only be painted with real color, please input a string'
    }else{
    return this.color = newColor
  }
  }
  start(){
    return this.running = true
  }
  off(){
    return this.running = false
  }
  driveTo(destination){
    if(this.running === false){
      return false
    }else{
      console.log(`Driving to ${destination}`);
      return true
    }
  }
  park(){
    if(this.running === true){
      return false
    }else{
      console.log("Parked!!")
      return true
    }
  }
  passengerCount(){
    return this.passengers.length+1
  }
  pickUp(name){
    if(this.running && this.seats > this.passengers.length+1){
      console.log(`Driving to pick up ${name}`);
      this.passengers.push(name)
      return true
    }else{
      return false
    }
  }
  dropOff(name){
    for(var i=0; i<this.passengers.length;i++){
      if(this.passengers[i]=== name && this.running === true){
        this.passengers.splice(i,1)
        console.log(`Driving to drop off ${name}`);
        return true
      }else{
        return false
      }
    }
  }
}

module.exports = Car
// export the Car class //
// this is required for the carTest.js to load this //
