class Car
  attr_accessor :make, :owner, :running, :previous_owners, :color, :passengers

  def initialize(make, model, year, color, seats, passengers = [])
    @make = make
    @model = model
    @year = year
    @color = color
    @seats = seats
    @previous_owners = []
    @owner = 'manufacturer'
    @running = false
    @passengers = passengers
  end

  def sell(new_owner)
    @previous_owners.push(@owner)
    @owner = new_owner
    if !new_owner.is_a?(String)
      return "car can only be sold to a real person with name, please input a string"
    end
  end

  def paint(new_color)
    @color = new_color
    if !new_color.is_a?(String)
      return "car can only be painted with real color, please input a string"
    end
  end

  def start
    @running = true
  end

  def off
    @running = false
  end

  def drive_to(destination)
    if (@running == true)
      p "driving to #{destination}"
      return true
    else
      return false
    end
  end

  def park
    if (@running == false)
      p 'parked!!'
      return true
    else
      return false
    end
  end

  def pick_up(name)
    if (@running == true && (@passengers.length + 2) <= @seats)
      p "driving to pick up #{name}"
      @passengers.push(name)
      return true
    else
      return false
    end
  end

  def drop_off(name)
    logic = false
    @passengers.length.times do |index|
      if (@passengers[index] == name && @running == true)
        @passengers.slice!(index)
        p "driving to drop off #{name}"
        logic = true
      end
    end
    return logic
  end

  def passenger_count
    @passengers.length
  end
end


# nothing for Phase II


# Phase III Normal Cases
c1 = Car.new('Honda', 'Vuzel', 2017, 'red', 7)
p c1.make
p c1.owner
p c1.running

c1.sell('prima')
p c1.owner
p c1.previous_owners

c1.paint('blue')
p c1.color

# Phase III Abnormal Cases
# c2 = Car.new()
error_sell = c1.sell(0)
p error_sell
error_paint = c1.paint(false)
p error_paint


# Phase IV
# c1.start
# car_drive = c1.drive_to('home')
# p car_drive
# car_park = c1.park
# p car_park


# Phase V
# c2 = Car.new('Honda', 'Vuzel', 2017, 'red', 7, ['a', 'b', 'c', 'd', 'e', 'f'])
# p c2.passengers

# c2.start
# car_pick = c2.pick_up('g')
# p c2.passengers
# p car_pick

# c2.start
# car_drop = c2.drop_off('d')
# p c2.passengers
# p car_drop

# p c2.passenger_count
