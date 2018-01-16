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
    @previous_owners.push(@owner) #pushes current owner into previous owner array
    @owner = new_owner #sets owner to new owner
  end

  def paint(new_color)
    @color = new_color
  end

end

p c1 = Car.new('Honda', 'Vuzel', 2017, 'red', 7)
p c1.sell('prima')
p c1.paint('blue')

p c1
