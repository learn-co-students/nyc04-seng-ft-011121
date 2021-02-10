doc_oc = Doctor.create(name: "Doctor Octopus")
dr_who = Doctor.create(name: "Doctor Who")
dr_seuss = Doctor.create(name: "Dr. Seuss")

peter_parker = Patient.create(name: "Peter Parker")
mary_jane = Patient.create(name: "Mary Jane")

david_tennant = Patient.create(name: "David Tennant")
matt_smith = Patient.create(name: "Matt Smith")

thing_1 = Patient.create(name: "Thing 1")
thing_2 = Patient.create(name: "Thing 2")
cat_in_the_hat = Patient.create(name: "The Cat in the Hat")

Appointment.create(doctor_id: doc_oc.id, patient_id: peter_parker.id, date: "Today")
Appointment.create(doctor_id: doc_oc.id, patient_id: mary_jane.id, date: "Tomorrow")

Prescription.create(doctor_id: doc_oc.id, patient_id: david_tennant.id, medicine: "Tylenol")
Prescription.create(doctor_id: doc_oc.id, patient_id: matt_smith.id, medicine: "Advil")

Appointment.create(doctor_id: dr_who.id, patient_id: david_tennant.id, date: "Today")
Appointment.create(doctor_id: dr_who.id, patient_id: matt_smith.id, date: "Tomorrow")

Prescription.create(doctor_id: dr_who.id, patient_id: thing_1.id, medicine: "Tylenol")
Prescription.create(doctor_id: dr_who.id, patient_id: thing_2.id, medicine: "Tylenol")
Prescription.create(doctor_id: dr_who.id, patient_id: cat_in_the_hat, medicine: "Advil")

Appointment.create(doctor_id: dr_seuss.id, patient_id: thing_1.id, date: "Today")
Appointment.create(doctor_id: dr_seuss.id, patient_id: thing_2.id, date: "Today")
Appointment.create(doctor_id: dr_seuss.id, patient_id: cat_in_the_hat, date: "Tomorrow")

Prescription.create(doctor_id: dr_seuss.id, patient_id: peter_parker.id, medicine: "Tylenol")
Prescription.create(doctor_id: dr_seuss.id, patient_id: mary_jane.id, medicine: "Advil")
