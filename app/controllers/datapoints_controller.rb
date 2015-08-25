class DatapointsController < ApplicationController
  before_action :authenticate_request, only: [:create_or_update]

  def create_or_update
    if @current_user && Datapoint.save_datapoint(params, @current_user.uid)
      render json: {}, status: :created
    else
      render json: {}, status: :unprocessable_entity
    end
  end
end
