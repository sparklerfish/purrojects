@steps.each do |step|
    json.set! step.id do
        json.extract! step, :id, :title, :body
    end
end