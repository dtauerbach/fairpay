class CreateOauths < ActiveRecord::Migration
  def change
    create_table :oauths do |t|
      t.string :state, null: false
    end
    add_index :oauths, :state
  end
end
