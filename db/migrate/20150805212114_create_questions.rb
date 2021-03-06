class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :order_id
      t.string :datapoint_field
      t.string :question_title
      t.string :sidebar_question_title
      t.json :answers
      t.timestamps
    end
  end
end
