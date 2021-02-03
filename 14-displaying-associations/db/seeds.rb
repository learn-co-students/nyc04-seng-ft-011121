eric = Student.create(name: "Eric", age: 12)
chase = Student.create(name: "Chase", age: rand(18))

miley = Course.create(name: "The Sociology of Miley Cyrus", seat_limit: rand(50), classroom_number: rand(500), open: true)
hp = Course.create(name: "To Hogwarts, Harry: An Intensive Study of Harry Potter Through the British Isles", seat_limit: rand(50), classroom_number: rand(500), open: false)
bowling = Course.create(name: "Bowling Industry Management and Technology", seat_limit: rand(50), classroom_number: rand(500), open: rand() < 0.5)
monsters = Course.create(name: "Monster Representation in the Media", seat_limit: rand(50), classroom_number: rand(500), open: rand() < 0.5)
got = Course.create(name: "Does Jon Snow Really Know Nothing?", seat_limit: rand(50), classroom_number: rand(500), open: rand() < 0.5)