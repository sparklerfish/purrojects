@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :title, :author_id

        json.author do
            json.extract! project.author, :username
        end

        if project.photo.attached?
            json.imageUrl url_for(project.photo)
        else
            if project.picture_url
                json.imageUrl asset_path("projects/#{project.picture_url}")
            else
                json.imageUrl nil
            end
        end
    end
end