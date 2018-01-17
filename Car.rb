class Car
  attr_accessor :passengers

  def raise_rescue
    begin
      raise "err"
    end
  end

  def initialize (given_make, given_model, given_year, given_color, given_seats, previous_owners = [], manufacturer = "manufacturer")
    if !given_make
      # raise Exception.new("foo")
      raise_rescue
    else
      @make = given_make
      @model = given_model
      @year = given_year
      @color = given_color
      @seats = given_seats
      @previous_owners = previous_owners
      @owner = manufacturer
      @running = false
      # @passengers = [given_passengers]
    end
  end

  def sell(new_owner)
    if new_owner.is_a?(String)
      @previous_owners.push(@owner)
      @owner = new_owner
    else
      puts "car can only be sold to a real person with name, please input a string"
    end
  end

  def paint(new_color)
    if new_color.is_a?(String)
      @color = new_color
    else
      puts "car can only be painted with real color, please input a string"
    end
  end

  def start
    @running = true
  end

  def off
    @running = false
  end

  def drive_to(destination)
    puts "Driving to #{destination}" if @running
    puts "Car is not started yet." if !@running
  end

  def park
    puts "Parked!!" if !@running
    puts "Stop your engine first." if @running
  end

  # def pick_up(name)
  #   if @running && (@seats > @passengers.length)
  #     @passengers.push(name)
  #     puts "Driving to pick up #{name}"
  #   end
  # end
  #
  # def drop_off(name)
  #   if @running
  #     @passengers.delete_if{|p_name| p_name == name}
  #     puts "Driving to drop off #{name}"
  #   else
  #     puts "No such passenger"
  #   end
  # end

end

c1 = Car.new('Honda', 'Vuzel', 2017, 'red', 7)
c1.sell('prima')
c1.paint('blue')
c1.start
c1.drive_to('singapore')
# c2 = Car.new()
# c1.pick_up('me')
# c1.drop_off('m')
p c1
# p c2
