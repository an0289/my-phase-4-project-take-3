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

    # make a custom route that takes in two parameters, a number and a word. The word must be "less" or "more", any other words will generate an error message saying "you must specificy less or more." Given that the word is less or more, use the number to find all items that have a price less/more than that number (including that number). Then find all the reviews associated with those items, If there are no items that meet the less than/more than criterion then render a message that says so.

    # def less_or_more
    #    number = params[:n]to_i
    #    word = params[:s]
    #    items_more = Item.all.filter {|item| item.price >= number}
    #    reviews_more = items_more.map {|item| item.reviews}
    #    items_less = Item.all.filter {|item| item.price <= number}
    #    reviews_less = items_less.map {|item| item.reviews}
    #    if (word != 'more' || 'less')
    #         render json: { error: "you must specify less or more"}
    #    elsif reviews_more.any?
    #         render json: reviews_more
    #    elsif (reviews_more.count === 0)
    #         render json: { error: "no items cost more than #{number}"}
    #    elsif reviews_less.any?
    #         render json: reviews_less
    #    else
    #         render json: {error: "no items cost less than #{number}"}
    #    end 
    # end 

    private 

    def find_item
        Item.find(params[:id])
    end

    def item_params 
        params.permit(:name, :image_url, :description, :price)
    end 
end
