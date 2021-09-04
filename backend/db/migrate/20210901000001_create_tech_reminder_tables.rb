class CreateTechReminderTables < ActiveRecord::Migration[6.0]
  def up
    # 会員
    create_table :users do |t|
      t.string     :nickname, null: false
      t.string     :email,    null: false
      t.string     :image
      t.text       :note
      t.timestamps null: false
    end
    add_index :users, :email, unique: true

    # 記事
    create_table :articles do |t|
      t.integer     :user_id, null: false
      t.string      :status,  null: false, default: :draft
      t.string      :title,   null: false
      t.text        :body,    null: false
      t.string      :image
      t.text        :note

      t.timestamps null: false
    end

    add_index :articles, :user_id
  end

  def down
    drop_table :users
    drop_table :articles
  end
end
