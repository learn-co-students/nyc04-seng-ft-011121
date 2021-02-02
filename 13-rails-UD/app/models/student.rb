class Student < ApplicationRecord
    # Instance/Class method related to the student from the database
    
    def professor_name
        "Dr. #{name}"
    end

    def display_nicely
        "#{name} - Age: #{age}"
    end

end
