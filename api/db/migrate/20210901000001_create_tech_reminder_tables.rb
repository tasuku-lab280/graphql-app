class CreateTechReminderTables < ActiveRecord::Migration[6.0]
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

    # 投稿
    create_table :posts do |t|
      t.integer     :user_id, null: false
      t.string      :status,  null: false, default: :draft
      t.string      :title,   null: false
      t.text        :body,    null: false
      t.text        :note

      t.timestamps null: false
    end
    add_index :posts, :user_id
  end

  def down
    drop_table :users
    drop_table :posts
  end
end
