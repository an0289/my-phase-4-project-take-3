class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description, :price

  has_many :reviews 
  has_many :users 
  
end
