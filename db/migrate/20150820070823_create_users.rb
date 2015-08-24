class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :uid, null: false
      t.boolean :li_connected
      t.string :li_workplace
      t.string :li_title
      t.boolean :li_trusted
      t.boolean :email_connected
      t.string :sharing_setting
      t.timestamps null: false
    end
    add_index :users, :uid
  end
end
