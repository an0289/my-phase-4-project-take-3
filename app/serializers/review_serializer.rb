class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :username, :image_url
  has_one :user
  has_one :item
end
