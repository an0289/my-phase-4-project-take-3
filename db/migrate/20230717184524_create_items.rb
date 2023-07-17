class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :image_url
      t.text :description
      t.string :price

      t.timestamps
    end
  end
end
