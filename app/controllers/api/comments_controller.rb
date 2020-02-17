class Api::CommentsController < ApplicationController
    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json: comment
        else
            puts comment.errors.full_messages
            render json: comment.errors.full_messages, status: 422
        end
    end

    def destroy
        comment = Comment.find(params[:id]).destroy
        render json: comment
    end

    def update
        comment = Comment.find(params[:id])
        if comment
            comment.update(comment_params)
            render json: comment
        else
            render json: { message: 'Comment not found', status: 404 }
        end
    end

    def show
    end

    def index
        @comments = Comment.all
    end


    private

    def comment_params
        params.require(:comment).permit(:body, :project_id, :author_id, :project, :time_ago, photos: [])
    end
end
