class ApplicationController < ActionController::API

  def authenticate
    # TODO: check the user's token (from the headers)
    # parse that token using JWT
    # lookup a user in the database using the parsed token payload
    # if they don't exist, or have a bad token, or didn't send a token, send back an error
    # otherwise send back the user!

    # fake (stub)
    @user = User.first
  end

end
