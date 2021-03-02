/********************** What's destructuring & how can I do it? **********************/

const raffy = {
    name: "Raffy",
    age: 9,
    type: "terrier",
    bestFriends: ["Michelle", "Louie", "Coco", "Pepper"],
    fruits: {
        orange: {
            color: "orange"
        },
        apple: {
            color: "green"
        }
    }
}

// original way
// const name = raffy.name
// const age = raffy.age
// const type = raffy.type
// const bestFriends = raffy.bestFriends
// const color = raffy.fruits.apple.color

// destructuring way


/********************** What about destructuring arrays?? **********************/
const cryptoCurrencies = ["bitcoin", "dash", "ethereum", "litecoin", "monero"]
const apples = ["green", "yellow", "purple", ["rainbow", "blue"]]



// original way


// new way


/********************** HTML Collections?? Node lists?? **********************/
const liTags = document.getElementsByTagName('li')
const pTags = document.querySelectorAll('p')

// original way

// new way


/********************** Function Example #1 **********************/
function getMovieTitles() {
    return ["Rise of the Planet of the Apes", "Dawn of the Planet of the Apes", "War for the Planet of the Apes"]
}

// original way

// new way




/********************** Function Example #2 **********************/
function shareContactInfo(employee) {
    const name = employee.name
    const position = employee.position
    const cell = employee.phones.cell
    const work = employee.phones.work

    return `${name} is an ${position} who can be reached by cell at ${cell} or by landline at ${work}`
}

const e1 = {
    name: "Michelle",
    position: "Instructor",
    phones: {
        cell: "555-987-6543",
        work: "555-345-6789"
    }
}
const e2 = {
    name: "Greg",
    job: "Instructor",
    phones: {
        cell: "555-987-3455",
        work: "555-345-6677"
    }
}

// shareContactInfo(e1)

