class TokensController < ApplicationController

  def request_token
    auth_url = LINKEDIN.auth_code.authorize_url(
        redirect_uri: ENV['OAUTH_CALLBACK'],
        state: '123asdfsadf'
      )
    redirect_to auth_url
  end

  def access_token
    access_token = LINKEDIN.auth_code.get_token(
        params[:code],
        redirect_uri: ENV['OAUTH_CALLBACK']
      )
    response = access_token.get(
        'https://api.linkedin.com/v1/people/~?format=json'
      )
    json_response = JSON.parse(response.body)
    user = User.find_or_create_by(uid: json_response["id"])
    jwt = JWT.encode({uid: user.uid, exp: 1.day.from_now.to_i}, Rails.application.secrets.secret_key_base)
    redirect_to ENV['ORIGIN'] + "?jwt=#{jwt}"
  end
end
