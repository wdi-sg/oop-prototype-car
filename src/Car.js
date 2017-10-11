// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make='Honda' , model, year, color, seats, passengers=[]){
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.passengers = passengers
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
  }
  sell(newOwner){
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  }
  paint(newColor){
    this.color =  newColor
  }
  start(){
    this.running=true
  }
  off(){
    this.running=false
  }
  park(){
    if(this.running===false){
      console.log('parked!!')
      return true
    }
    else return false
  }//end park
  driveTo(destination){
    if(this.running){
      console.log('driving to '+ destination);
      return true
    }else return false
  }



}//end car class

module.exports = Car
// export the Car class //
// this is required for the carTest.js to load this //
