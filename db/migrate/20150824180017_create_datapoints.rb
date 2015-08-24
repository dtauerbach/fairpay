class CreateDatapoints < ActiveRecord::Migration
  def change
    create_table :datapoints do |t|
      t.string :euid
      t.string :workplace
      t.string :role_type
      t.string :title
      t.string :base_salary
      t.string :gender
      t.string :race
      t.string :region
      t.string :total_rsu
      t.boolean :li_connected
      t.string :li_workplace
      t.string :li_title
      t.boolean :li_trusted
      t.boolean :email_connected
      t.string :sharing_setting
      t.timestamps null: false
    end
  end
end
