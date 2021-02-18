class AddPictureToCourse < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :picture, :string
  end
end
