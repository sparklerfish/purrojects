json.set! @project.id do
    json.extract! @project, :id, :title, :body, :author_id, :step_ids  
end

# debugger 
json.steps do
  @steps.each do |step|
    json.set! step.id do
        json.extract! step, :id, :title, :body
    end
  end
end