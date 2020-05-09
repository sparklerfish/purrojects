json.extract! @comment, :id, :body, :project_id, :created_at, :time_ago, :author_id

json.author do
    json.extract! @comment.author, :username, :id
end
