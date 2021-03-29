class TweetsController < ApplicationController
  before_action :authenticate, only: [:create]
  
  # GET /users/:user_id/tweets
  def index
    tweets = Tweet.where(user_id: params[:user_id]).order(created_at: :desc)
    render json: tweets
  end

  # POST /tweets
  def create
    tweet = @current_user.tweets.create(message: params[:message])
    if tweet.valid?
      render json: tweet
    else
      render json: tweet.errors.messages, status: 422
    end
  end

end