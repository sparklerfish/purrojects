class Api::StepsController < ApplicationController
    def create
        step = Step.new(step_params)
        if step.save
            render json: step
        else
            render json: step.errors.full_messages, status: 422
        end
    end

    def destroy
        step = Step.find(params[:id]).destroy
        render json: step
    end

    def update
        step = Step.find(params[:id])
        if step
            step.update(step_params)
            render json: step
        else
            render json: { message: 'Step not found', status: 404 }
        end
    end

    def show
    end

    def index
        @steps = Step.all
    end


    private

    def step_params
        params.require(:step).permit(:title, :body, :project_id, :photo)
    end
end
