class User < ApplicationRecord
    has_secure_password
    has_many :clips
    # this is the assosiation/macro for a clip that a user uploads
    has_many :ratings
    has_many :rated_clips, through: :ratings, source: :clips
    has_many :comments
    has_many :comment_clips, through: :comments, source: :comments
    


    validates :username, presence: true
    validates_uniqueness_of :username
    # validates :password, presence: true
    validates_length_of :username, :maximum => 13
    validates_length_of :username, :minimum => 3
    # validates_length_of :password, :minimum => 3
end
