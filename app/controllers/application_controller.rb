class ApplicationController < ActionController::API
  force_ssl if: :ssl_configured?
  before_action :allow_cross_origin_requests, if: proc { Rails.env.development? }
  before_action :authenticate_request, only: [:current_user]

  def preflight
    render nothing: true
  end

  def index
    render file: 'public/index.html'
  end

  def current_user
    render json: {
      uid: @current_user.uid,
      company_total: company_total
    }
  end

  private

  def allow_cross_origin_requests
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    headers['Access-Control-Max-Age'] = '1728000'
  end

  def company_total
    Datapoint.count
  end

  def ssl_configured?
    !Rails.env.development?
  end

  def authenticate_request
    begin
      uid = JWT.decode(request.headers['Authorization'], Rails.application.secrets.secret_key_base)[0]['uid']
      @current_user = User.find_by(uid: uid)
    rescue JWT::ExpiredSignature
      render json: 'authentication failed', status: 401
    rescue JWT::DecodeError
      render json: 'authentication failed', status: 401
    end
  end
end
