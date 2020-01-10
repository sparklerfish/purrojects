json.set! @project.id do
    json.extract! project, :id, :title, :body, :author_id
    project.steps.each do |step|
        json.extract! step, :id, :title, :body
    end
end