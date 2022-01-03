class CreateUserTables < ActiveRecord::Migration[6.0]
  def up
    # 会員
    create_table :users do |t|
      t.string     :auth0_id, null: false
      t.string     :nickname
      t.string     :email
      t.text       :note

      t.timestamps null: false
    end
    add_index :users, :auth0_id, unique: true
    add_index :users, :email, unique: true
  end

  def down
    drop_table :users
  end
end
