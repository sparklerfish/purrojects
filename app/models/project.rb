class Project < ApplicationRecord
    validates :title, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    has_many :steps
    has_many :comments

    has_many_attached :photos
end
