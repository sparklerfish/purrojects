@steps.each do |step|
    json.set! step.id do
        json.extract! step, :id, :title, :body
        json.imageUrl url_for(step.photo)
    end
end