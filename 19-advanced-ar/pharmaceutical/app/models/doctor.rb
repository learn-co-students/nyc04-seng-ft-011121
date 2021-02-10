class Doctor < ApplicationRecord
    has_many :appointments
    has_many :patients, through: :appointments

    has_many :prescriptions
    has_many :patients_im_seeing, through: :prescriptions, source: :recipient
end
