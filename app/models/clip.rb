class Clip < ApplicationRecord
    belongs_to :user
    has_many :ratings, dependent: :destroy 
    has_many :users_who_rated, through: :ratings, source: :user
    has_many :comments, dependent: :destroy
    
    
    has_many :users_who_commented, through: :comments, source: :user
    validates :clip_url, presence: true
    # validates_uniqueness_of :clip_url

    def self.update_amount_of_comments_seeds
        Clip.all.each do |each_clip| 
            puts each_clip.amount_of_comments
            each_clip.amount_of_comments = each_clip.comments.length
            each_clip.save
            puts each_clip.amount_of_comments
        end
    end
end
