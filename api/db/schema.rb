# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_01_000002) do

  create_table "comments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "post_id", null: false
    t.text "body", null: false
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id", "post_id"], name: "index_comments_on_user_id_and_post_id"
  end

  create_table "follows", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "follower_id", null: false
    t.integer "followed_id", null: false
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["followed_id"], name: "index_follows_on_followed_id"
    t.index ["follower_id", "followed_id"], name: "index_follows_on_follower_id_and_followed_id", unique: true
    t.index ["follower_id"], name: "index_follows_on_follower_id"
  end

  create_table "post_files", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "post_id", null: false
    t.string "kind", default: "image", null: false
    t.string "seq"
    t.string "file", null: false
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id", "seq"], name: "index_post_files_on_post_id_and_seq", unique: true
    t.index ["post_id"], name: "index_post_files_on_post_id"
  end

  create_table "post_pv_logs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "post_id", null: false
    t.string "ip_address"
    t.text "user_agent"
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "post_tags", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "post_id", null: false
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tag_id", "post_id"], name: "index_post_tags_on_tag_id_and_post_id"
  end

  create_table "posts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "status", default: "draft", null: false
    t.text "body", null: false
    t.integer "pv", default: 0, null: false
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "tags", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "touches", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "user_id"
    t.integer "post_id", null: false
    t.string "kind", null: false
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id", "kind", "user_id"], name: "index_touches_on_post_id_and_kind_and_user_id", unique: true
    t.index ["user_id", "post_id"], name: "index_touches_on_user_id_and_post_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "auth0_id", null: false
    t.string "nickname"
    t.string "email"
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["auth0_id"], name: "index_users_on_auth0_id", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
