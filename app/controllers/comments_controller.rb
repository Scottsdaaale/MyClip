class CommentsController < ApplicationController
  before_action :set_comment, only: %i[ show update destroy ]

  # GET /comments
  def index
    @comments = Comment.all
    # @comments = Comment.all

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    # byebug
    @comment = Comment.new(comment_params)

    if @comment.save
      clip_being_commented = Clip.find_by(id: params[:clip_id])
        puts clip_being_commented.amount_of_comments
        clip_being_commented.amount_of_comments = clip_being_commented.comments.length
        clip_being_commented.save
        puts clip_being_commented.amount_of_comments
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.permit(:comment, :clip_id, :user_id)
    end
end
