class Datapoint < ActiveRecord::Base
  def self.get_params_by_question_id(question_id)
    question = Question.find_by_id(question_id)
    return question.datapoint_field unless question.nil?
  end

  def self.save_datapoint(params)
    final_params = {}
    final_params['sharing_setting'] = params['sharing_setting'] if params.has_key?('sharing_setting')
    params['question_results'].each do |question_id, question_answer|
      question = self.get_params_by_question_id(question_id)
      if question
        final_params[question] = question_answer
      end
    end
    d = Datapoint.new(final_params)
    return d.save
  end
end
