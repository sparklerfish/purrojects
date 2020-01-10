class Project < ApplicationRecord
    validates :title, :body, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :user

    has_many :steps

    has_many_attached :photos
end
