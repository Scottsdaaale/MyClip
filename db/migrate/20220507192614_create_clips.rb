class CreateClips < ActiveRecord::Migration[7.0]
  def change
    create_table :clips do |t|
      t.string :clip_url
      t.string :clip_owner

      t.timestamps
    end
  end
end
