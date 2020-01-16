class Step < ApplicationRecord

    belongs_to :project

    has_many_attached :photos
    has_one_attached :video
end
