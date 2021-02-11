class GradesController < ApplicationController

    def new
        @grade = Grade.new
        @students = Student.all
        @courses = Course.all
    end

    def create
        @grade = Grade.create(grade_params)
        redirect_to student_path(@grade.student_id)
    end

    def destroy
        @grade = Grade.find(params[:id])
        @grade.destroy
        redirect_to student_path(@grade.student_id)
    end

    private

    def grade_params
        params.require(:grade).permit(:grade_value, :student_id, :course_id)
    end
    

end
