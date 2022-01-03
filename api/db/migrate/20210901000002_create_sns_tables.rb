class CreateSnsTables < ActiveRecord::Migration[6.0]
  def up
    # 投稿
    create_table :posts do |t|
      t.integer     :user_id, null: false
      t.string      :status,  null: false, default: :draft
      t.text        :body,    null: false
      t.integer     :pv,      null: false, default: 0
      t.text        :note

      t.timestamps null: false
    end
    add_index :posts, :user_id

    # 投稿ファイル
    create_table :post_files do |t|
      t.integer :post_id, null: false
      t.string  :kind,    null: false, default: :image
      t.string  :seq
      t.string  :file,    null: false
      t.text    :note,    null: false

      t.timestamps null: false
    end
    add_index :post_files, :post_id
    add_index :post_files, %i(post_id seq), unique: true

    # 投稿PVログ
    create_table :post_pv_logs do |t|
      t.integer :post_id,    null: false
      t.string  :ip_address
      t.text    :user_agent

      t.timestamps                          null: false
    end

    # 投稿タグ
    create_table :post_tags do |t|
      t.integer :tag_id,  null: false
      t.integer :post_id, null: false
      t.text    :note

      t.timestamps null: false
    end
    add_index :post_tags, %i(tag_id post_id)

    # タグ
    create_table :tags do |t|
      t.string :name, null: false
      t.text   :note

      t.timestamps null: false
    end

    # タッチ
    create_table :touches do |t|
      t.integer :user_id
      t.integer :post_id, null: false
      t.string  :kind,    null: false
      t.text    :note

      t.timestamps null: false
    end
    add_index :touches, %i(user_id post_id)
    add_index :touches, %i(post_id kind user_id), unique: true

    # コメント
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.text    :body,    null: false
      t.text    :note

      t.timestamps null: false
    end
    add_index :comments, %i(user_id post_id)

    # フォロー
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :followed_id, null: false
      t.text    :note

      t.timestamps null: false
    end
    add_index :follows, :follower_id
    add_index :follows, :followed_id
    add_index :follows, %i(follower_id followed_id), unique: true
  end

  def down
    drop_table :posts
    drop_table :post_files
    drop_table :post_pv_logs
    drop_table :post_tags
    drop_table :tags
    drop_table :touches
    drop_table :comments
    drop_table :follows
  end
end
