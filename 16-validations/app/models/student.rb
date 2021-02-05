class Student < ApplicationRecord
    has_many :grades, dependent: :destroy
    has_many :courses, through: :grades
    
    def professor_name
        "Dr. #{name}"
    end

    def display_nicely
        "#{name} - Age: #{age}"
    end

end
