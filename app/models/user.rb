class User < ApplicationRecord
    has_many :ratings
    has_many :clips, through: :ratings

    validates :username, presence: true
    validates_length_of :username, :maximum => 13
    validates_length_of :username, :minimum => 3
end
