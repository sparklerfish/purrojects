require 'action_view'
require 'action_view/helpers'
include ActionView::Helpers::DateHelper

class Comment < ApplicationRecord
    validates :body, presence: true
    
    belongs_to :project
    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    def time_ago
        "#{time_ago_in_words(self.created_at.to_time)} ago"
    end
end
