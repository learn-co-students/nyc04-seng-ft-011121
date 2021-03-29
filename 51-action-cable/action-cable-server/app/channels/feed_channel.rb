class FeedChannel < ApplicationCable::Channel
  def subscribed
    puts "SUBSCRIBED" * 10
    p params
    # subscribe to a specific user's tweets!
    user = User.find_by(id: params[:user_id])
    stream_for user
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
