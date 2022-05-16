class Clip < ApplicationRecord
    has_many :ratings, dependent: :destroy
    has_many :users, through: :ratings
    validates :clip_url, presence: true
    # validates_uniqueness_of :clip_url
end
