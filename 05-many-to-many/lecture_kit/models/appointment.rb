class Appointment

    @@all = []

    attr_reader :problem, :date, :patient, :doctor
    
    def initialize(problem, date, patient, doctor)
        @problem = problem
        @date = date
        @patient = patient
        @doctor = doctor
        self.class.all << self
    end

    def self.all
        @@all
    end
    
end