class ReviewsController < ApplicationController

    def index 
        render json: Review.all 
    end

    def show 
        review = find_review 
        render json: review 
    end 

    def create 
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created 
    end
    
    def update
        review = find_review
        review.update 
        render json: review 
    end 

    def destroy 
        review = find_review 
        review.destroy 
        head :no_content 
    end 

    private 

    def review_params
        params.permit(:title, :body)
    end 

    def find_review
        Review.find(params[:id])
    end 

end
