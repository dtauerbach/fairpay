class CreateOauths < ActiveRecord::Migration
  def change
    create_table :oauths do |t|
      t.string :state, null: false
    end
  end
end
