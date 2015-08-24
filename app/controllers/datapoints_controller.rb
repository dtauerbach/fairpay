class DatapointsController < ApplicationController
  def create_or_update
    # TODO validation!
    @datapoint = Datapoint.new({workplace: 'Madeup!'})
    if @datapoint.save
      render json: {}, status: :created
    else
      render json: {}, status: :unprocessable_entity
    end
  end
end
