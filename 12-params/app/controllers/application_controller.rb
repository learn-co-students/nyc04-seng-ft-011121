class ApplicationController < ActionController::Base

    def first
        @variable = "Chicken " * 5
        # LOGIC WOULD GO HERE
        # -> View File (Look inside views/application/first.html.erb)
            # The action looks for a view file that matches the name 
        # render :first
    end

end
