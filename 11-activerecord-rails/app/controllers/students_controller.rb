class StudentsController < ApplicationController

    def index
       # Model.all -> Array of instances
       @students = Student.all
    end

end
