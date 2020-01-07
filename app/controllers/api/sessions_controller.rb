class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
            flash.now[:errors] = ["Sorry, we can't find that account, or your password didn't match. Please try again!"]
            render :new
        else
            login!(@user)
            redirect_to user_url(@user)
        end
    end

    def destroy
        if current_user
            logout!
            render {}
        else
            flash.now[:errors] = ['Not found'], status: 404
        end
    end
end