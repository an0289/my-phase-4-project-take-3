class Review < ApplicationRecord
  belongs_to :user
  belongs_to :item

  validates :title, presence: true 
  validates :body, presence: true 

  def username
    self.user.username
  end 

  def image_url
    self.user.image_url
  end 
end
