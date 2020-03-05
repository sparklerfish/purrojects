@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :title, :author_id
        json.imageUrl url_for(@project.picture)

        json.author do
            json.extract! project.author, :username
        end
        begin
            json.picture_url asset_path("projects/#{project.picture_url}")
        rescue
            json.picture_url project.picture_url
        end
    end
end