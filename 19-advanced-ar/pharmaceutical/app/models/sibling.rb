class Sibling < ApplicationRecord
    belongs_to :older_sibling, class_name: "Patient", foreign_key: "old_id"
    belongs_to :younger_sibling, class_name: "Patient", foreign_key: "young_id"
end
