json.extract! step, :id, :title, :body, :project_id
if step.photo.attached?
    json.imageUrl url_for(step.photo)
end