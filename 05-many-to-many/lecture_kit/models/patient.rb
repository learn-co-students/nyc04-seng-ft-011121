class Patient
    
    @@all = []

    attr_reader :name
    attr_accessor :age
    
    def initialize(name, age)
        @name = name
        @age = age
        self.class.all << self
    end

    def self.all
        @@all
    end

    def appointments
        # 1. Query all the Appointments to find the ones belonging to the patient
        Appointment.all.select{|appointment| appointment.patient == self}
    end

    def doctors
        binding.pry
        appointments.map{|appointment| appointment.doctor}.uniq
        # appointments.map{|appointment| appointment.doctor}.to_set #you need to require 'set' first

        # goal: get the appointments array and create an array of the doctors out of it
        # appointments.map do |appointment|
        #     appointment.doctor
        # end
        # appointments.map(&:doctor).uniq
    end

end