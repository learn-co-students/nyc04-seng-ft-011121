class UsersController < ApplicationController
  before_action :authenticate, only: [:me, :update]

  # POST /login
  def login
    # check the username and password
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      # if they're good, create a token
      token = JWT.encode({ user_id: user.id }, ENV["JWT_SECRET"], 'HS256')
      # send back the user and token
      render json: { user: UserSerializer.new(user), token: token }
    else
      # otherwise, send back some validation errors
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  # POST /signup
  def signup
    user_params = params.permit(:username, :image, :bio, :password)
    user = User.create(user_params)
    if user.valid?
      token = JWT.encode({ user_id: user.id }, ENV["JWT_SECRET"], 'HS256')
      render json: { user: UserSerializer.new(user), token: token }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
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
