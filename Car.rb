class Car
    def initialize(make,model,year,color,seats, passengers = [])
        @make = make
        @model = model
        @year = year
        @color = color
        @seats = seats
        @passengers = passengers
        @previous_owners = []
        @owner = @make
        @running = false
    end

    def sell(new_owner)
        if new_owner.instance_of?(String)
            @previous_owners << @owner
            @owner = new_owner
        else
            puts 'Car can only be sold to a real person with name, please input a string.'
        end
    end

    def paint(new_color)
        if !new_color.to_s.match(/d/)
        # if new_color.instance_of?(String)
            @color = new_color
        else
            puts 'Car can only be painted with real color, please input a string.'
        end
    end

    def start
        @running = true
        puts "Engine ignited."
    end

    def off
        @running = false
        puts "Engine has been cut."
    end

    def drive_to(destination)
        if @running
            puts "Driving to #{destination}…"
            true
        else
            puts "Car engine is turned off"
            false
        end
    end

    def park
        if !@running
            puts "Car is parked."
            true
        else
            puts "Car is still running!"
            false
        end
    end
    def pick_up(name)
        if name.instance_of?(String) && @passengers.length < @seats - 1
        # Driver takes up 1 seat, but is NOT counted as a passenger
            puts "Driving to pick up #{name}."
            @passengers << name
            true
        else
            puts "Sorry, #{name}, the car is full."
            false
        end
    end

    def drop_off(name)
        if name.instance_of?(String) && @passengers.include?(name) && @running
            @passengers.delete name
            puts "Driving to drop off #{name}."
            true
        elsif !@passengers.include?(name)
            puts "#{name} is not on the car."
            false
        elsif !@running
            puts 'Car is currently stationary.'
        elsif name.instance_of(String)
            puts 'Please enter a valid name'
        end
    end

    def passenger_count
        puts "Currently #{@passengers.length} passenger(s) on the car excluding the driver."
        @passengers.length
    end
end

c1 = Car.new('Honda', 'Vuzel', 2017, 'red', 7)
p c1

c1.sell("Prima")
p c1

c1.paint('blue')
p c1

# c2 = Car.new
# Car.rb:2:in `initialize': wrong number of arguments (given 0, expected 5) (ArgumentError)

c1.sell 0
p c1

c1.paint false
p c1

c1.start
p c1.drive_to 'Mos Eisley'
c1.off
c1.park

c1.start
c1.park

c1.pick_up 'Darth Vader'
c1.pick_up 'Princess Leia'
c1.pick_up 'Luke Skywalker'
c1.pick_up 'Han Solo'
c1.pick_up 'Rey'
c1.pick_up 'Finn'
c1.pick_up 'Kylo Ren'
c1.passenger_count

c1.drop_off 'Yoda'
c1.drop_off 'Darth Vader'
c1.passenger_count
p c1


# p 123.class
# => Fixnum
# Return the object's class, a proxy of the data type

# p 123.is_a?(String)
# => false
# Check if it is currently a string

# p 123.respond_to?(:to_s)
# => true
# Anything convertible to string returns true, not helpful
