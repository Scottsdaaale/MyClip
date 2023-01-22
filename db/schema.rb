# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_17_194745) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clips", force: :cascade do |t|
    t.string "clip_url"
    t.integer "amount_of_comments", default: 0
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_clips_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "comment"
    t.bigint "clip_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clip_id"], name: "index_comments_on_clip_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "number_of_stars", default: 0
    t.integer "final_rating", default: 0
    t.bigint "user_id", null: false
    t.bigint "clip_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clip_id"], name: "index_ratings_on_clip_id"
    t.index ["user_id"], name: "index_ratings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "clips", "users"
  add_foreign_key "comments", "clips"
  add_foreign_key "comments", "users"
  add_foreign_key "ratings", "clips"
  add_foreign_key "ratings", "users"
end
