// POJOs (plain old javascript objects)
function globalIntroduce() {
    return `Hi, my name is ${this.firstName}`
}


const chase = {
    firstName: "Chase",
    lastName: "Rabenn",
    introduce: globalIntroduce
}

const greg = {
    firstName: "Greg",
    lastName: "Dwyer",
    introduce: globalIntroduce
}

const ian = {
    firstName: 'Ian',
    lastName: 'Hollander',
    introduce: globalIntroduce
}

const michelle = {
    firstName: "Michelle",
    familyName: "Rios",
    dhfjkdshfjdkshf: 'Yay',
    introduce: globalIntroduce
}

const rianna = {
    firstName: "Rianna",
    lastName: "Cleary",
    introduce: globalIntroduce
}


// console.log(michelle.introduce())
// console.log(rianna.introduce())

// console.log(michelle.introduce)
// console.log(rianna.introduce)

// TRUE or FALSE?
// console.log(michelle.introduce() === rianna.introduce())


// TRUE or FALSE?
console.log(michelle.introduce === rianna.introduce)