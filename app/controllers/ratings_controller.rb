class RatingsController < ApplicationController
  before_action :set_rating, only: %i[ show update destroy ]

  # GET /ratings
  def index
    @ratings = Rating.all

    render json: @ratings
  end

  # GET /ratings/1
  def show
    render json: @rating
  end

  # POST /ratings
  def create
    # byebug
    @rating = Rating.new(rating_params)

    if @rating.save
      # clip_being_rated = Rating.find_by(id: params[:clip_id])
      # clip_being_rated.number_of_stars = clip_being_rated.number_of_stars
      # clip_being_rated.save

      render json: @rating, status: :created, location: @rating
    else
      render json: @rating.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ratings/1
  def update
    if @rating.update(rating_params)
      render json: @rating
    else
      render json: @rating.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ratings/1
  def destroy
    @rating.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rating
      @rating = Rating.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rating_params
      params.permit(:number_of_stars, :final_rating, :clip_id, :user_id)
    end
end
