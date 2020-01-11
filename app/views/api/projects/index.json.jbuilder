@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :title, :author_id

        json.author do
            json.extract! project.author, :username
        end
    end
end