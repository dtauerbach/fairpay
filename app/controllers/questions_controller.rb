class QuestionsController < ApplicationController
  def index
    @questions = Questions.all
    render json: @questions
  end
end
