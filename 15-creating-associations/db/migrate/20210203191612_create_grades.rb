class CreateGrades < ActiveRecord::Migration[6.1]
  def change
    create_table :grades do |t|
      t.belongs_to :course, null: false, foreign_key: true
      t.belongs_to :student, null: false, foreign_key: true
      t.integer :grade_value

      t.timestamps
    end
  end
end
