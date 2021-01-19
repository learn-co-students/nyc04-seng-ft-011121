# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

spongebob = Student.new("Spongebob")
patrick = Student.new("Patrick")
sandy = Student.new("Sandy")


pikachu = Tutor.new("Pikachu")
bulbasaur = Tutor.new("Bulbasaur")
squirtle = Tutor.new("Squirtle")

c1 = Course.new(spongebob, pikachu, "Being Yellow")
c2 = Course.new(patrick, bulbasaur, "Rock formation")
c3 = Course.new(spongebob, squirtle, "Water Osmosis")
c4 = Course.new(spongebob, pikachu, "Being Yellow 2")

binding.pry
0
