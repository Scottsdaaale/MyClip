class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :clip
  has_one :user
end
