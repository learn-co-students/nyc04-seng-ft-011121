class Student
    @@all = []
    attr_reader :name

    def initialize(name)
        @name = name
        # @@all << self
        self.class.all << self
    end

    def self.all
        @@all
    end

    def courses
        # self is an instance of a student
        # select needs a condition
        Course.all.select {|course| course.student == self }
    end

    def tutors
        courses.map do |course|
            course.tutor
        end
    end

    def self.hard_working_students
        Student.all.select do |student_instance|
            student_instance.courses.size >= 2
        end
    end

end
