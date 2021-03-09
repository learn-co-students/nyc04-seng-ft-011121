class Person {
    constructor(age, favoriteFood) {
        this.age = age
        this.favoriteFood = favoriteFood
    }

    nap() {
        console.log('sleeeeepyyyyyy.....💤💤💤💤💤')
    }
}


class Teacher extends Person {

    static all = []

    constructor(firstName, lastName, age, food) {
        super(age, food) // invokes constructor of parent class
        this.firstName = firstName
        this.lastName = lastName
        Teacher.all.push(this)
    }

    introduce() {
        console.log(`My name is ${this.firstName}`)
    }

    nap() {
        // super.nap() // invokes parent's nap method
        console.log('I need a nap!!')
    }

    static findByName(name) {
        return Teacher.all.find(teacher => teacher.firstName === name)
    }
}

const raffy = new Teacher('Raffy', 'Rios', 9, 'ceviche')
const michelle = new Teacher('Michelle', 'Rios', 4, 'tacos')