class Comment < ApplicationRecord
  belongs_to :clip
  belongs_to :user
end
