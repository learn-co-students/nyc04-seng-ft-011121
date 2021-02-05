class Grade < ApplicationRecord
  # belongs_to comes with its own validations
  belongs_to :course
  belongs_to :student
end
