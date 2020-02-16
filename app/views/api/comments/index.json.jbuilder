@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :project_id, :created_at, :time_ago

        json.author do
            json.extract! comment.author, :username
        end
    end
end