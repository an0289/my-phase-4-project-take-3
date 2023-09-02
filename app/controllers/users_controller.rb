class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :user_reviews]
     

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created 
    end 

    def show 
        render json: @current_user 
    end 

    #when we pass in a number, we should get the users that have the number or more reviews
    def user_reviews
        number = params[:n].to_i
        users = User.all.filter {|user| user.reviews.count >= number}
        render json: users 
    end 

    private 

    def user_params 
        params.permit(:username, :password, :password_confirmation, :image_url)
    end 
    
end
