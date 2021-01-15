class Doctor

    @@all = []

    attr_reader :name, :specialty
    
    def initialize(name, specialty)
        @name = name
        @specialty = specialty
        self.class.all << self
    end

    def self.all
        @@all
    end

    def appointments
        Appointment.all.select{|appointment| appointment.doctor == self}
    end

    def patients
        # goal: array of the patients
        appointments.map{|appointment| appointment.patient}.uniq
    end
    
end