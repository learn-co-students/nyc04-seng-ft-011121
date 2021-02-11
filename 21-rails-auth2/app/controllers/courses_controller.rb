class CoursesController < ApplicationController
    before_action :set_course, only: [:show, :edit, :update, :destroy, :enroll]
    skip_before_action :authorized, only: [:index]
    # before_action :set_course, except: [:index, :new]
    
    def index
        @courses = Course.all
    end

    def show
    end

    def new
        @course = Course.new
    end
    
    def create
       @course = Course.create(course_params)
       redirect_to course_path(@course)
    end

    def edit
    end

    def update
        @course.update(course_params)
        redirect_to course_path(@course)
    end

    def destroy
        @course.destroy
        redirect_to courses_path
    end

    def enroll
        # params - {id: "1", this_is_the_number: "4"}
        # @course = Course.find(params[:id])
        @course.decrease_number_by(params[:this_is_the_number].to_i)
        redirect_to course_path(@course)
    end

    private
    
    def course_params
        params.require(:course).permit(:name, :seat_limit, :classroom_number)
    end


    def set_course
        # Instance Variables set in a before_action are available in that action
        @course = Course.find(params[:id])
    end
end
