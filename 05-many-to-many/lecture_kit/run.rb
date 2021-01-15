require 'pry'
require 'require_all'

# 💡 require_all is a method that allows you to connect all files in a given folder with this one; it comes from a gem so first you need to require the gem (line 2) to use the method (line 5)
require_all 'models'

# 💡 require_all is the same as the require_relative but it takes an argument of a folder, not a single file
# require_relative 'models/doctor.rb'
# require_relative 'models/patient.rb'

##### DOCTORS ##### 
doctor1 = Doctor.new("Dr Evil", "evilness") #will have one appt
doctor2 = Doctor.new("Dr Peppers", "necromancy") #will have many appt
doctor3 = Doctor.new("Dr Oz", "optometry") #will have one appt
doctor4 = Doctor.new("Dr Genius", "brain power") #will have no appt

##### PATIENTS ##### 
patient1 = Patient.new("Chase", 10_000) #will have one appt
patient2 = Patient.new("Sylwia", 31) #will have many appt
patient3 = Patient.new("Eric", 1_000_000) #one appt
patient4 = Patient.new("Signe", 1_000_000_000) #no appt

##### APPOINTMENTS #####
app1 = Appointment.new("treadmill injury", "15 Dec", patient3, doctor3)
app2 = Appointment.new("bad fish day prior", "12 Jan", patient2, doctor1)
app2 = Appointment.new("headache", "10 Jan", patient2, doctor2)
app2 = Appointment.new("headache", "10 Dec", patient2, doctor2)
app2 = Appointment.new("headache", "10 Nov", patient2, doctor2)
app2 = Appointment.new("headache", "10 Aug", patient2, doctor2)
app2 = Appointment.new("too much tea!!", "10 Sep", patient1, doctor2)

# building many-to-many relationship:
# 1. create a file with the Appointment class
# 2. check whether runner file is connected with appt file by running Appointment.new -- if you're getting "uninitialized const or variable" error, it is not connected!
# 3. create seed data for the Appointment class
# 4. write out all the methods


binding.pry
0