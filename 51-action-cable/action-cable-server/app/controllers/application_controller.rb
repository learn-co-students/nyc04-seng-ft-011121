class ApplicationController < ActionController::API
  def authenticate
    @current_user = AuthorizeRequest.new(auth_token).user
    render json: { errors: ["Not Authorized"] }, status: :unauthorized unless @current_user
  end

  private

    def auth_token
      request.headers['Authorization'].split.last if request.headers['Authorization']
    end
end
