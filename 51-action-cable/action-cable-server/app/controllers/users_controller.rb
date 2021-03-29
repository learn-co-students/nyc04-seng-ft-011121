class UsersController < ApplicationController
  before_action :authenticate, only: [:me]
  
  # POST /login
  def login
    user = User.find_by(username: params[:username])
    token = JsonWebToken.encode({ user_id: user.id })
    render json: { user: UserSerializer.new(user), token: token }
  end

  # GET /me
  def me
    render json: @current_user
  end

  # GET /users
  def index
    users = User.includes(:tweets).order("tweets.created_at DESC")
    render json: users
  end

end