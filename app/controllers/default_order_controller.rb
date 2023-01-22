class DefaultOrderController < ApplicationController
    def index
        @clips = Clip.all.order("id ASC")
        render json: @clips
    end
end
