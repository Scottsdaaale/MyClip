class CreateClips < ActiveRecord::Migration[7.0]
  def change
    create_table :clips do |t|
      t.string :clip_url
      t.integer :amount_of_comments, default: 0
      t.belongs_to :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
