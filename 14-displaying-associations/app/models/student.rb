class Student < ApplicationRecord
    # Give us instance methods whose job is to return an array of instances

    has_many :grades
    has_many :courses, through: :grades
    
    def professor_name
        "Dr. #{name}"
    end

    def display_nicely
        "#{name} - Age: #{age}"
    end

end
