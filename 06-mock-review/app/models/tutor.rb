class Tutor
    @@all = []
    attr_reader :name

    def initialize(name)
        @name = name
        self.class.all << self
    end

    def self.all
        @@all
    end

    def courses
        Course.all.select do |course|
            course.tutor == self
        end
    end

    def students
        courses.map do |course|
            course.student
        end
    end 


end
