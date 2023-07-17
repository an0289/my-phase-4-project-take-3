class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  has_one :user
  has_one :item
end
