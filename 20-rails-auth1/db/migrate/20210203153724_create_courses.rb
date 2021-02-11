class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.integer :seat_limit
      t.integer :classroom_number

      t.timestamps
    end
  end
end
