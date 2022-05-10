class ClipSerializer < ActiveModel::Serializer
  attributes :id, :clip_url
  has_many :ratings
  has_many :users
end
