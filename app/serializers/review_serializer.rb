class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :username, :image_url, :item_image, :name, :item_id, :user_id
  has_one :user
  has_one :item
end
