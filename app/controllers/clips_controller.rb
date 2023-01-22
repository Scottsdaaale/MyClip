class ClipsController < ApplicationController
  before_action :set_clip, only: %i[ show update destroy ]

  # GET /clips
  def index
    # @clips = Clip.all.order("id ASC")
    @clips = Clip.all
    render json: @clips
  end

  # GET /clips/1
  def show
    if @clip
      render json: @clip
    else
      render json: {"errors": "Clip not found"}, status: :not_found
    end
  end

  # POST /clips
  def create
    # byebug
    @clip = Clip.new(clip_params)

    if @clip.save
      render json: @clip, status: :created, location: @clip
    else
      render json: @clip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clips/1
  def update
    if @clip.update(clip_params)
      render json: @clip
    else
      render json: @clip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clips/1
  def destroy
    clipToDestroy = Clip.find(params[:id])
        clipToDestroy.destroy
        render json: {message: "delete successful"}, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_clip
      @clip = Clip.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def clip_params
      params.permit(:clip_url, :user_id)
    end
end
