json.set! @project.id do
    json.extract! @project, :id, :title, :body, :author_id, :step_ids, :comment_ids
end

json.steps do
  @steps.each do |step|
    json.set! step.id do
        json.extract! step, :id, :title, :body
    end
  end
end

json.comments do
  @comments.each do |comment|
    json.set! comment.id do 
      json.extract! comment, :id, :body
        json.author do
            json.extract! comment.author, :username
        end
    end
  end
end