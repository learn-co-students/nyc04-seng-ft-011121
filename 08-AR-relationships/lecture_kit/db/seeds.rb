Plant.destroy_all
Plant.reset_pk_sequence
Parent.destroy_all
Parent.reset_pk_sequence
PlantParenthood.destroy_all
PlantParenthood.reset_pk_sequence
Category.destroy_all
Category.reset_pk_sequence

succulent = Category.create(name: "succulent")
leafy = Category.create(name: "leafy")

basil = Plant.create(species: "basil the herb", bought: "20200610", color: "green", fussy: true, category_id: leafy.id)
corn_tree = Plant.create(species: "Corn Tree", bought: "20170203", color: "green", fussy: false)
prayer_plant = Plant.create(species: "Prayer plant", bought: "20190815", color: "purple", fussy: false)
cactus_1 = Plant.create(species: "Cactus", bought: "20200110", color: "ugly green", fussy: false)
elephant_bush = Plant.create(species: "Elephant bush", bought: "20180908", color: "green", fussy: true)
photos = Plant.create(species: "Photos", bought: "20170910", color: "green", fussy: false)
dragon_tree = Plant.create(species: "Dragon tree", bought: "20170910", color: "green", fussy: false)
snake_plant = Plant.create(species: "Snake plant", bought: "20170910", color: "dark green", fussy: false)
polka_dot_plant = Plant.create(species: "polka dot plant", bought: "20170915", color: "pink and green", fussy: false)
cactus_2 = Plant.create(species: "Cactus", bought: "20200517", color: "green", fussy: false)

kami = Parent.create(name: "Kami", responsible: false, age: 10_000)
sylwia = Parent.create(name: "Sylwia", responsible: true, age: 31)

puts "🥬 IT WORKED!!!!"