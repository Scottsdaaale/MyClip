class Rating < ApplicationRecord
  belongs_to :user
  belongs_to :clip

  # validates :number_of_stars, {greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
end
