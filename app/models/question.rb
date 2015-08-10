class Question < ActiveRecord::Base
  validates_presence_of :question_title
end
