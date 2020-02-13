class Comment < ApplicationRecord
    belongs_to :project
    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'
end
