class Review < ApplicationRecord
  belongs_to :user
  belongs_to :item

  validates :title, presence: true 
  validates :body, presence: true 
  # validates :item_id, uniqueness: true 

  def username
    self.user.username
  end 

  def image_url
    self.user.image_url
  end 

  def item_image
    self.item.image_url
  end 

  def name
    self.item.name
  end 
end
