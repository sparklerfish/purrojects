class Api::ProjectsController < ApplicationController
    def index
        @projects = Project.all
    end

    def new
        render :new
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
        render :edit
    end

    def show
        @project = Project.find(params[id])
    end

    def destroy
        @project = Project.find(params[id])
        @project.destroy
        render :index
    end

    private

    def project_params
        params.require(:project).permit(:title, :body, photos: [])
    end
end
