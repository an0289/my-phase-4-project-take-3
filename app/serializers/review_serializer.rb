class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :username, :image_url, :item_image, :name, :item_id, :user_id
  belongs_to :user
  belongs_to :item
end
