class NewestPostController < ApplicationController
    def index
        @clips = Clip.all.order("id DESC")
        render json: @clips
    end
end
