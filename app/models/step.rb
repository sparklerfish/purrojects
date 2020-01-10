class Step < ApplicationRecord
    validates :title, presence: true

    belongs_to :project

    has_many_attached :photos
    has_one_attached :video
end
