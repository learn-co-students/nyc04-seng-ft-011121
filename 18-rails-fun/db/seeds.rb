eric = Student.create(name: "Eric", age: 19)
chase = Student.create(name: "Chase", age: 20)


miley = Course.create(name: "The Sociology of Miley Cyrus", seat_limit: rand(50), classroom_number: rand(500), open: true)

hp = Course.create(name: "To Hogwarts, Harry: An Intensive Study of Harry Potter Through the British Isles", seat_limit: rand(50), classroom_number: rand(500), open: false)

bowling = Course.create(name: "Bowling Industry Management and Technology", seat_limit: rand(50), classroom_number: rand(500), open: rand() < 0.5)

monsters = Course.create(name: "Monster Representation in the Media", seat_limit: rand(50), classroom_number: rand(500), open: rand() < 0.5)

got = Course.create(name: "Does Jon Snow Really Know Nothing?", seat_limit: rand(50), classroom_number: rand(500), open: rand() < 0.5)



g1 = Grade.create(student_id: chase.id, course_id: got.id, grade_value: 5)
g2 = Grade.create(student: chase, course: monsters, grade_value: 4)
# eric.grades -> an array of instances
    # eric.grades.create -> <#Grade student_id: eric.id ... >
eric.grades.create(course: bowling, grade_value: 4)