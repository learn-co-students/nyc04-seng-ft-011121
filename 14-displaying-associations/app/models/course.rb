class Course < ApplicationRecord

    def status
        if open
            "Open for Enrollment"
        else
            "Closed"
        end
    end
    
end
