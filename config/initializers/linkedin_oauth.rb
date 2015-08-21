LINKEDIN = OAuth::Consumer.new(
  Rails.application.secrets.linkedin_consumer_key,
  Rails.application.secrets.linkedin_consumer_secret,
  authorize_path: '/uas/oauth2/authorization',
  site: 'https://www.linkedin.com'
)
