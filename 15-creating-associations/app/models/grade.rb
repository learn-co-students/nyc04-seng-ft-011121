class Grade < ApplicationRecord
  # Give us instance methods whose job is to return a single instance
  belongs_to :course
  belongs_to :student
end
