class ClipSerializer < ActiveModel::Serializer
  attributes :id, :clip_url, :clip_owner
  has_many :ratings
  has_one :users
  
end
