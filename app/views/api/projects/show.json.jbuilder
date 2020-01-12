json.set! @project.id do
    json.extract! @project, :id, :title, :body, :author_id, :step_ids
end