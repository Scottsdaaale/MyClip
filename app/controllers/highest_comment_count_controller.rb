class HighestCommentCountController < ApplicationController
    def index
        clips = Clip.all.order("amount_of_comments DESC")
        render json: clips
    end
end
