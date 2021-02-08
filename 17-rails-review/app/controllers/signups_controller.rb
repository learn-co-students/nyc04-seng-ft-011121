class SignupsController < ApplicationController

    def new
        # if flash[:attributes]
            # @signup = Signup.new(flash[:attributes])
        # else
            @signup = Signup.new
        # end

        @campers = Camper.all 
        @activities = Activity.all
    end

    def create
        @signup = Signup.create(signup_strong_params_omg) 
        if @signup.valid?
            redirect_to camper_path(@signup.camper_id)
        else
            flash[:errors] = @signup.errors.full_messages
            # flash[:attributes] = @signup.attributes
            redirect_to new_signup_path
        end
    end


    private

    def signup_strong_params_omg
        params.require(:signup).permit(:activity_id, :time, :camper_id)
    end

end
