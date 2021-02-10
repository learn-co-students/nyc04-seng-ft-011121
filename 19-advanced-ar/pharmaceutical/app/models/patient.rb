class Patient < ApplicationRecord

    has_many :relationships_where_i_am_younger, class_name: "Sibling", foreign_key: "young_id"
    has_many :older_siblings, through: :relationships_where_i_am_younger, source: :older_sibling

    has_many :relationships_where_i_am_older, class_name: "Sibling", foreign_key: "old_id"
    has_many :younger_siblings, through: :relationships_where_i_am_older, source: :younger_sibling


    # Look at the Prescription class and look under its patient_id (see if it matches my(Patient) primary ID-
        # Give me all the Prescription instances where the above is true
    has_many :picked_up_prescriptions, class_name: "Prescription", foreign_key: "patient_id"
    # Source -> Refers to the belongs_to macro in the Prescription class 
        # The one to get to the other side
    has_many :pharmacists_Im_seeing, through: :picked_up_prescriptions, source: :pharmacist

    has_many :appointments
    has_many :doctors, through: :appointments


    def siblings
        self.older_siblings + self.younger_siblings
    end
end
