class Parent < ActiveRecord::Base

    has_many :plant_parenthoods
    has_many :plants, through: :plant_parenthoods
    # has_many(:plants, {through: :plant_parenthoods})

    #### OLD WAY #####
    # def plant_parenthoods
    #     PlantParenthood.all.select{|pp| pp.parent == self}
    # end

    # def plants
    #     plant_parenthoods.map{|pp| pp.plants}
    # end
end