class Datapoint < ActiveRecord::Base

  def self.get_params_by_question_id(question_id)
    question = Question.find_by_id(question_id)
    return question.datapoint_field unless question.nil?
  end

  def self.save_datapoint(params, uid)
    final_params = {}
    if params.has_key?('sharing_setting')
      prevalidate_and_add_param(final_params, 'sharing_setting', params['sharing_setting'])
    end
    params['question_results'].each do |question_id, question_answer|
      question = self.get_params_by_question_id(question_id)
      if question
        self.prevalidate_and_add_param(final_params, question, question_answer)
      end
    end
    d = Datapoint.find_or_initialize_by(uid: uid)
    d.update(final_params)
    return d.save
  end

  def self.prevalidate_and_add_param(hash, key, value)
    if key =~ /^[\w' ]+$/ && value =~ /^[\w' ]+$/
      hash[key] = value
    end
  end
end
