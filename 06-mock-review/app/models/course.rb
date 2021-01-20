class Course
    @@all = []
    attr_reader :student, :tutor, :course_name

    def initialize(student, tutor, course_name)
        @student = student
        @tutor = tutor
        @course_name = course_name
        self.class.all << self
    end

    def self.all
        @@all
    end

end
