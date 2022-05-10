class User < ApplicationRecord
    has_many :ratings
    has_many :clips, through: :ratings

    validates :username, presence: true
end
