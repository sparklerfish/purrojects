class Api::ProjectsController < ApplicationController
    def index
        @projects = Project.includes(:author).all 
    end

    def new
        
    end

    def create
        @project = Project.new(project_params)
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def update
        @project = current_user.projects.find(params[:id])
        if @project
            if @project.update(project_params)
                render :show
            else
                render json: @project.errors.full_messages, status: 422
            end
        else
            render json: { message: 'Project not found', status: 404 }
        end
    end

    def edit
        @project = current_user.projects.find(params[:id])
        @steps = @project.steps
        render :edit
    end

    def show
        @project = Project.includes(:steps, :author).find(params[:id])
        @steps = @project.steps
    end

    def destroy
        @project = Project.find(params[:id])
        @project.destroy
        render :index
    end

    private

    def project_params
        params.require(:project).permit(:title, :body, :author_id, photos: [])
    end
end
