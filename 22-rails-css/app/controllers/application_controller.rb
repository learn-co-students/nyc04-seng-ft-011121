class ApplicationController < ActionController::Base
    helper_method :current_student, :is_logged_in?
    before_action :authorized

    def current_student
      @current_student ||= Student.find_by(id: session[:student_id])
    end

    def is_logged_in?
        !!current_student
    end

    def authorized
        unless is_logged_in?
            redirect_to login_path 
        end
    end

    def logout_student
        session[:student_id] = nil
    end

    def first
        @variable = "Chicken " * 5
    end

end
