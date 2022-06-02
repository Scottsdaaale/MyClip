class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.integer :number_of_stars, default: 0
      t.integer :final_rating, default: 0
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :clip, null: false, foreign_key: true
      t.timestamps
    end
  end
end
