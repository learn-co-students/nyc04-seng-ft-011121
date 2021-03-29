class AuthorizeRequest
  attr_reader :auth_token

  def initialize(auth_token)
    @auth_token = auth_token
  end

  def user
    payload = decode_token!
    if payload
      User.find_by(id: payload['user_id'])
    end
  end

  private

  def decode_token!
    JsonWebToken.decode(auth_token)
  rescue
    nil
  end

end