class Project < ApplicationRecord
    validates :title, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    has_many :steps
    has_many :comments

    has_one_attached :photo
    has_one_attached :video

    def self.search_by_title(title)
        projects = Project.arel_table
        Project.where(projects[:title].matches("%#{title}%"))
    end
end