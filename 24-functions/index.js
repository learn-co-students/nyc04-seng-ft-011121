function sayHi(name) {
    console.log(`Hi, ${name}`)
}

function doubleIt(num) {
    console.log(num * 2)
}

function sayGoodbye(name) {
    console.log(`Goodbye, ${name}`)
}

function higherOrder(fn) {
    console.log('outer')
    fn("Coco")
}


function anotherHigherOrder() {
    function cheeseIt() {
        console.log('cheesee')
    }

    return cheeseIt
}


function iterate(fn, arr) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i])
    }
}


let names = ["Coco", "Mallow", "Milo", "Raffy"]

// iterate(sayHi, names)

function tripleIt(num) {
    return num * 3
}

let nums = [33, 55, 67, 9213]

// const transformedArr = nums.map(function (num) {
//     return num * 3
// })


const transformedArr = nums.map(tripleIt)


// console.log('Before')
// setInterval
// setInterval(function () {
//     console.log('Inside callback')
// }, 5000)

// console.log('After')



// setTimeout
// console.log('Before')

// setTimeout(function () {
//     console.log('inside callback')
// }, 4000)

// console.log('After')

function doMath(x) {
    function multiply(num) {
        console.log(num * x)
    }

    return multiply
}


const triple = doMath(3)
const quadruple = doMath(4)




function cohortTracker() {
    const studentArr = []

    function addNameToArray(name) {
        studentArr.push(name)
        return studentArr
    }

    return addNameToArray
}


const chickenRocksClass = cohortTracker()
const whatTheFluffClass = cohortTracker()




function createCounterFunc() {
    let counter = 0

    return function () {
        counter++
        console.log('counter - ', counter)
    }
}

const counterOne = createCounterFunc()
const counterTwo = createCounterFunc()

