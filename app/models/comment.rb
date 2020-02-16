require 'action_view'
require 'action_view/helpers'
include ActionView::Helpers::DateHelper

class Comment < ApplicationRecord
    belongs_to :project
    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    def time_created_epoch
        @time_created_epoch = self.created_at.to_i
    end

    def time_ago
        # cur_time = DateTime.now.to_time.to_i
        # seconds_diff = cur_time - self.created_at.to_time.to_i
        # minutes_diff = seconds_diff / 60.0
        # hours_diff = minutes_diff / 60.0
        # days_diff = hours_diff / 24.0
        # weeks_diff = days_diff / 7.0
        # months_diff = days_diff / 30.0
        # years_diff = months_diff / 12.0

        # if minutes_diff < 1
        #     return "#{seconds_diff} seconds ago"
        # elsif hours_diff < 1
        #     return "#{minutes_diff} minutes ago"
        # elsif days_diff < 1
        #     return "#{hours_diff} hours ago"
        # elsif weeks_diff < 1
        #     return "#{days_diff} days ago"
        # elsif months_diff < 1
        #     return "#{weeks_diff} weeks ago" 
        # elsif years_diff < 1
        #     return "#{months_diff} months ago"
        # else
        #     return "#{years_diff} years ago"
        # end

        "#{time_ago_in_words(self.created_at.to_time)} ago"
    end
end
