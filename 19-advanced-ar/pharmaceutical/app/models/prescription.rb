class Prescription < ApplicationRecord

  # Look at the Doctor class, find the doctor whose primary ID matches my(Prescription's) doctor_id
  belongs_to :pharmacist, class_name: "Doctor", foreign_key: "doctor_id"
  belongs_to :recipient, class_name: "Patient", foreign_key: "patient_id"
end
