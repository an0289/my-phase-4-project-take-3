class Item < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews 

    validates :name, presence: true, uniqueness: true 
    validates :image_url, presence: true 
    validates :description, presence: true 
    validates :price, presence: true, numericality: { only_integer: true } 
end

