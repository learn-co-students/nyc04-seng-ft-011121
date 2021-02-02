class StudentsController < ApplicationController
    # Instance methods will most likely come from config/routes.rb

    def index
       # Model.all -> Array of instances
       @students = Student.all
    end

    def show
        # PARAMS GETS ITS VALUES FROM 3 PLACES: 
            # 1) Dynamic URL
            # 2) From a form (Names of the inputs)
        @student = Student.find(params[:id])
    end

    def new
        @student = Student.new
    end

    def create
        # Student.create(name: params[:student][:name], age: params[:student][:age])
        @student = Student.create(student_params)
        redirect_to "/students/#{@student.id}"
    end

    private

    def student_params
        # Strong Params is saying to only let name and age be mass-assigned
        # params.require(:MODEL).permit(:ATTRIBUTE1, :ATTRIBUTE2) -> Check schema.rb
        params.require(:student).permit(:name, :age)
    end

end
