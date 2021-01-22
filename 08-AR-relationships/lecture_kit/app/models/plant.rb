class Plant < ActiveRecord::Base

    belongs_to :category
    has_many :plant_parenthoods
    has_many :parents, through: :plant_parenthoods

end
