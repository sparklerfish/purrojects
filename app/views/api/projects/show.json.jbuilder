json.set! @project.id do
    json.extract! @project, :id, :title, :body, :author_id, :step_ids, :comment_ids

      if @project.photo.attached?
          json.imageUrl url_for(@project.photo)
      else
          if @project.picture_url
              json.imageUrl asset_path("projects/#{@project.picture_url}")
          else
              json.imageUrl nil
          end
      end

      json.author do
        json.extract! @project.author, :username
      end
  end

json.steps do
  @steps.each do |step|
    json.set! step.id do
        json.extract! step, :id, :title, :body, :project_id
        if step.photo.attached?
            json.imageUrl url_for(step.photo)
        end
    end
  end
end

json.comments do
  @comments.each do |comment|
    json.set! comment.id do 
      json.extract! comment, :id, :body, :time_ago
        json.author do
            json.extract! comment.author, :username
        end
    end
  end
end