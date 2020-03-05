class Step < ApplicationRecord

    belongs_to :project

    has_one_attached :photo
    has_one_attached :video 
end
