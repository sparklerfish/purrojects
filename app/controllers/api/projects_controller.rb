class Api::ProjectsController < ApplicationController
    def index
        if params[:search]
            @projects = Project.search_by_title(params[:search])
        else
            @projects = Project.includes(:author).all
        end
    end

    def new
    end

    def create
        @project = Project.new(project_params)
        if @project.save
            render '/api/projects/newproject', status: 200
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def update
        @project = Project.find(params[:id])
        if @project
            if @project.update(project_params)
                render '/api/projects/newproject', status: 200
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
        @comments = @project.comments
    end

    def destroy
        @project = Project.find(params[:id])
        @project.destroy
        render :index
    end

    def search
        search = "%" + params[:search].downcase + "%"
        @projects = Project.where("LOWER(title) like ?", search, search)
        render :index
    end

    private

    def project_params
        params.require(:project).permit(:id, :title, :body, :author_id, photos: [], :photo)
    end
end
