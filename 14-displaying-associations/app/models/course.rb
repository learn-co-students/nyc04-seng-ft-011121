class Course < ApplicationRecord
    has_many :grades
    has_many :students, through: :grades
    
    def status
        if open
            "Open for Enrollment"
        else
            "Closed"
        end
    end
    
end
