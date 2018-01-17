# car.rb
class Car
  attr_accessor :make, :model, :year, :color, :seats,
                :previous_owners, :owner, :running

  def initialize(make, model, year, color, seats)
    @make = make
    @model = model
    @year = year
    @color = color
    @seats = seats
    @@previous_owners = []
    @owner = 'manufacturer'
    @running = false
  end

  def sell(new_owner)
    puts new_owner.to_s.match?('\d')
    @@previous_owners.push(@owner)
    @owner = new_owner
  end

  def paint(new_color)
    @color = new_color
  end
end

c1 = Car.new('Honda', 'Vuzel', 2017, 'red', 7)
c1.sell 'asd'
c1.owner
p c1
