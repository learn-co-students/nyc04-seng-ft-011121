class ApplicationController < ActionController::Base
    # helper_methods become available in the view files
    helper_method :current_student, :is_logged_in?
    before_action :authorized


    # STUDENT INSTANCE BASED ON SESSION 
    def current_student
       # this method returns <#Student > or nil
      @current_student ||= Student.find_by(id: session[:student_id])
    end


    # PARTIAL RENDERING OF A PAGE
    def is_logged_in?
        # this method returns true or false
        !!current_student
    end

    # STOPS A PAGE/ACTION FROM BEING RENDERED
    def authorized
        unless is_logged_in?
            # flash[:errors] = ["You aren't logged in"]
            redirect_to login_path 
        end
    end

    # LOGIC TO CLEAR SESSION
    def logout_student
        session[:student_id] = nil
    end








    def first
        @variable = "Chicken " * 5
    end

end
