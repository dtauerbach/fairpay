LINKEDIN = OAuth2::Client.new(
  Rails.application.secrets.linkedin_consumer_key,
  Rails.application.secrets.linkedin_consumer_secret,
  site: 'https://www.linkedin.com',
  authorize_url: '/uas/oauth2/authorization',
  token_url: '/uas/oauth2/accessToken'
)
