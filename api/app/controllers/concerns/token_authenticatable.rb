module TokenAuthenticatable
  extend ActiveSupport::Concern


  # メソッド
  def current_user
    @current_user ||= User.from_token_payload(auth_payload)
  end


  # メソッド(Private)
  private

  def auth_payload
    auth_payload, = retrieve_auth_token
    auth_payload
  rescue JWT::VerificationError, JWT::DecodeError, ActiveRecord::RecordInvalid
    nil
  end

  def http_token
    request.headers['Authorization'].split(' ').last if request.headers['Authorization'].present?
  end

  def retrieve_auth_token
    JsonWebToken.verify(http_token)
  end
end
