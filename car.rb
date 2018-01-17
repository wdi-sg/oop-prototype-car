class Car

  attr_accessor :make, :model, :year, :color, :seats, :previous_owners, :owner, :running

  def initialize(make, model, year, color, seats)
    @make = make
    @model = model
    @year = year
    @color = color
    @seats = seats
    @previous_owners = []
    @owner = 'manufacturer'
    @running = false
  end

  def sell(new_owner)
    if new_owner.is_a? String
      @previous_owners.push(@owner) #pushes current owner into previous owner array
      @owner = new_owner #sets owner to new owner
    else
      p 'car can only be sold to a real person with name, please input a string'
    end
  end

  def paint(new_color)
    if new_color.is_a? String
      @color = new_color
    else
      p 'car can only be painted with real color, please input a string'
    end
  end

end

c1 = Car.new('Honda', 'Vuzel', 2017, 'red', 7)

# p c1
# p c1.sell('prima')
# p c1.paint('blue')
p c1.sell(0)
