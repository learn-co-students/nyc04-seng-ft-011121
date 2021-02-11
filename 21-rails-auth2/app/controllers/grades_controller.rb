class GradesController < ApplicationController


    def index
        @grades = @current_student.grades
    end
    
    def new
        @grade = Grade.new
        @courses = @current_student.courses
    end

    def create
        @grade = @current_student.grades.create(grade_params)
        redirect_to student_path(@grade.student_id)
    end

    def destroy
        @grade = @current_student.grades.find(params[:id])
        @grade.destroy
        redirect_to student_path(@grade.student_id)
    end

    private

    def grade_params
        params.require(:grade).permit(:grade_value, :course_id)
    end
    

end
