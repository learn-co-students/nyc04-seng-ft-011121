class PlantParenthood < ActiveRecord::Base

    belongs_to :plant
    belongs_to :parent

    # def parent
    #     Parent.find(self.parent_id)
    # end
end