class Activity < ApplicationRecord
    # AR Macros should always be snake_cased
    has_many :signups
    has_many :campers, through: :signups
end
