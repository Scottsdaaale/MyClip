class Clip < ApplicationRecord
    has_many :ratings
    has_many :users, through: :ratings

    validates :clip_url, presence: true
    # validates_uniqueness_of :clip_url
end
