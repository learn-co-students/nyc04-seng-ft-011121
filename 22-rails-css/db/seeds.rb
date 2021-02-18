eric = Student.create(name: "Eric", age: 19, password: "abc123", username: "Eric1")
chase = Student.create(name: "Chase", age: 20, password: "abc123", username: "Chase1")


miley = Course.create(name: "The Sociology of Miley Cyrus", seat_limit: rand(50), classroom_number: rand(500), open: true, picture: "https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-01-at-3.09.13-PM.png")

hp = Course.create(name: "To Hogwarts, Harry: An Intensive Study of Harry Potter Through the British Isles", seat_limit: rand(50), classroom_number: rand(500), open: false, picture: "https://i.ytimg.com/vi/gY_i1LcDObU/maxresdefault.jpg")

bowling = Course.create(name: "Bowling Industry Management and Technology", seat_limit: rand(50), classroom_number: rand(500), open: rand() < 0.5, picture: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bowlerbowling.JPG")

monsters = Course.create(name: "Monster Representation in the Media", seat_limit: rand(50), classroom_number: rand(500), open: rand() < 0.5, picture: "https://upload.wikimedia.org/wikipedia/en/6/63/Monsters_Inc.JPG")

got = Course.create(name: "Does Jon Snow Really Know Nothing?", seat_limit: rand(50), classroom_number: rand(500), open: rand() < 0.5, picture: "https://www.indiewire.com/wp-content/uploads/2019/04/Helen-Sloan-HBO-4-copy.jpg    ")



g1 = Grade.create(student_id: chase.id, course_id: got.id, grade_value: 5)
g2 = Grade.create(student: chase, course: monsters, grade_value: 4)
# eric.grades -> an array of instances
    # eric.grades.create -> <#Grade student_id: eric.id ... >
eric.grades.create(course: bowling, grade_value: 4)