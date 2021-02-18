class StudentsController < ApplicationController
    skip_before_action :authorized, only: [:login, :handle_login, :new, :create]

    def login
    end

    def handle_login
        @student = Student.find_by(username: params[:username_here])
        if @student && @student.authenticate(params[:password_lol])
            session[:student_id] = @student.id
            # session[:class_name] = @student.class.name
            redirect_to student_path(@student)
        else
            flash[:errors] = ["Incorrect Username or Password"]
            redirect_to login_path
        end
    end


    def logout
        logout_student
        redirect_to login_path
    end







    def index
       @students = Student.all
    end

    def show
        @student = Student.find(params[:id])
    end

    def new
        # if flash[:attributes]
            # @student = Student.new(flash[:attributes])
        # else
            @student = Student.new
        # end
    end

    def create
        @student = Student.create(student_params)
        if @student.valid?
            session[:student_id] = @student.id
            redirect_to student_path(@student)
        else
            flash[:errors] = @student.errors.full_messages
            # flash[:attributes] = @student.attributes
            redirect_to new_student_path
        end
    end

    def edit
        @student = Student.find(params[:id])
    end

    def update
        @student = Student.find(params[:id])
        if @student.update(student_params)
            redirect_to student_path(@student)
        else
            flash[:errors] = @student.errors.full_messages
            redirect_to edit_student_path(@student)
        end
    end

    def destroy
        @student = Student.find(params[:id])
        @student.destroy
        redirect_to students_path
    end

    def increase
        @student = Student.find(params[:id])
        @student.update(age: @student.age + 1)
        redirect_to student_path(@student)
    end

    private

    def student_params
        params.require(:student).permit(:name, :age, :username, :password)
    end

end
