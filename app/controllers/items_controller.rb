class ItemsController < ApplicationController
    def index 
        render json: Item.all
    end 

    def create
        item = Item.create!(item_params)
        render json: item, status: :created 
    end 

    def show 
        item = find_item 
        render json: item 
    end 

    def destroy 
        item = find_item 
        item.destroy 
        head :no_content 
    end 

    private 

    def find_item
        Item.find(params[:id])
    end

    def item_params 
        params.permit(:name, :image_url, :description, :price)
    end 
end
