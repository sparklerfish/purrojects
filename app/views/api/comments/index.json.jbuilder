@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body

        json.author do
            json.extract! comment.author, :username
        end
    end
end