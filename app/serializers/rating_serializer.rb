class RatingSerializer < ActiveModel::Serializer
  attributes :id, :number_of_stars
  # has_one :user
  # has_one :clip
end
