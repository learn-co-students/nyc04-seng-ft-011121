class Student < ApplicationRecord
    
    def professor_name
        "Dr. #{name}"
    end

    def display_nicely
        "#{name} - Age: #{age}"

    end

end
