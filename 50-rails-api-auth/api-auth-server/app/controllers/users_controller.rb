class UsersController < ApplicationController
  before_action :authenticate, only: [:me, :update]

  # POST /login
  def login
    # TODO: use the data from the form to look up a user
    # check the username and password
    # if they're good, create a token
    # send back the user and token
    # otherwise, send back some validation errors

    # fake (stub)
    user = User.first
    render json: user
  end

  # GET /me
  def me
    render json: @user
  end

  # PATCH /me
  def update
    @user.update(bio: params[:bio], image: params[:image])
    render json: @user
  end

end
