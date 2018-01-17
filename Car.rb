class Car

  attr_accessor :make, :model, :year, :color, :seat, :previous_owners, :owner, :running, :passengers

  def initialize(make, model, year, color, seats, passengers = nil)
    @make = make
    @model = model
    @year = year
    @color = color
    @seats = seats
    @previous_owners = []
    @owner = "manufacturer"
    @running = false
    @passengers = passengers == nil ? [] : passengers
  end

  def sell owner
    @previous_owners.push @owner
    @owner = owner
  end

  def paint color
    @color = color
  end

  def pick_up name
    p "driving to pick up #{name}"
    avail = @seats - @passengers.length
      if (@running == true && avail != 1)
        @passengers.push name
        p 'okay'
      else
        p 'cannot pick up'
      end
    end

    def drop_off name
      if @passengers.include? name
        @passengers.delete name
        p "driving to drop off #{name}"
      else
        p "There is no such person of #{name}"
      end
    end

    def passenger_count
      @passengers.length
    end
end


c1 = Car.new('Honda', 'Vuzel', 2017, 'red', 7)

# === sell method
# c1.sell("Prima")
# p c1.owner
# p c1.previous_owners

# === paint color
# c1.paint("blue")
# p c1.color


# === pick up passengers
p "Time to pick up people"
c1.running = true
c1.pick_up "jenny"
c1.pick_up "james"
c1.pick_up "peter"
c1.pick_up "tom"
c1.pick_up "harry"
c1.pick_up "jimmy"
c1.pick_up "fox"

p c1.passengers

# === drop off passengers
p "Time to drop off people"
c1.drop_off 'jenny'
c1.drop_off 'james'
c1.drop_off 'peter'

p c1.passengers

# === passenger count
p "Passenger Count is #{c1.passenger_count}"
