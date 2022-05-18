class User < ApplicationRecord
    has_secure_password
    has_many :ratings
    has_many :clips, through: :ratings
    # has_many :comments
    


    validates :username, presence: true
    validates_uniqueness_of :username
    # validates :password, presence: true
    validates_length_of :username, :maximum => 13
    validates_length_of :username, :minimum => 3
    # validates_length_of :password, :minimum => 3
end
