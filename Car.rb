class Car
  attr_accessor :make, :model, :year, :color, :seats,:owner, :running
  def initialize(make,model,year,color,seats)

    @make = make
    @model = model
    @year = year
    @color = color
    @seats = seats
    @owner='manufacturer'
    @running = false

  if @make == nil || @model == nil || @year == nil || @color == nil || @seats == nil
     p "car can't be instantiated, required parameters are not given"
   end #This doesn't work
  end

  def sell(buyer)
    if !buyer.is_a?(String)
      p "car can only be sold to a real person with name, please input a string"
    else
      @owner = buyer
    end
  end

  def paint (color)
    if !color.is_a?(String)
      p 'car can only be painted with real color, please input a string'
    else
      @color = color
    end
  end

  def start
    @running = true
  end

  def off
    @running = false
  end

  def drive_to(destination)
    if @running == false
      p 'engine is not on, please start your engine'
    elsif @running == true
       p "driving to #{destination}"

    end
  end

  def park
    if @running == false
      p 'engine is not on, please start your engine'
    elsif @running == true
       p "parked!"
     end

  end

end



c1 = Car.new('Honda','Vuzel',2017,'red', 7)
