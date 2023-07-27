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

    # def less_or_more
    #     items = Item.all
    #     new_arr = items.filter {|item| item.price.to_i <= params[:n]}
    #     if new_arr.length >0
    #         render json: new_arr 
    #     else 
    #        render json: { error: ['No item found that cost more or less than'] }
    #     end 
    # end 

    private 

    def find_item
        Item.find(params[:id])
    end

    def item_params 
        params.permit(:name, :image_url, :description, :price)
    end 
end
