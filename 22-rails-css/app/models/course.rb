class Course < ApplicationRecord
    has_many :grades, dependent: :destroy
    has_many :students, through: :grades
    
    def status
        if open
            "Open for Enrollment"
        else
            "Closed"
        end
    end

    def decrease_number_by(number)
        new_number = self.seat_limit - number
        self.update(seat_limit: new_number)
    end
    
    def open_seats  
        self.seat_limit - self.grades.count
    end

end
