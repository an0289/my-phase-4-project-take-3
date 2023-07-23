class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :username, :image_url, :item_image, :name
  has_one :user
  has_one :item
end
