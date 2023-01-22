class SessionController < ApplicationController
    include ActionController::Cookies
    def create
        # byebug
        user_to_login = User.find_by(username: params[:username])
        if user_to_login #verify password now
            if user_to_login.authenticate(params[:password])
                session[:user_id] = user_to_login.id
                # render json: session[:user_id]
                render json: user_to_login
            else
                render json: {error: "check password"}
            end
        else  
            render json: {error: "Check username and password"}
        end
    end
    
    def destroy
        session.delete(:user_id)
        # head :no_content
        render json: {}
    end


    def get_logged_in_user
        # byebug 
        user_already_logged_in= User.find_by(id: session[:user_id])
        render json: user_already_logged_in
    end
end
