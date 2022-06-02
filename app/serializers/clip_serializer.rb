class ClipSerializer < ActiveModel::Serializer
  attributes :id, :clip_url, :clip_owner, :amount_of_comments, :ratings , :comments
  has_one :user
  has_many :ratings
  has_many :users_who_rated
  has_many :comments
  has_many :users_who_commented


  def clip_owner
    return self.object.user.username
  end

end
