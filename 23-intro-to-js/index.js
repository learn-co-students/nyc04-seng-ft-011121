// console.log('%cHello World', 'color: red')
// console.log("My name is Michelle") // like put in Ruby

// debugger


/***** PRIMITIVE TYPES *****/

// 1. BigInt (new as of ES2020)
// repressents nums > 2^53 - 1
// const someBigNum = BigInt(87843657437654346578346543)
// const anotherBigNum = 9097987878n

// 2. boolean
// true or falsee

// 3. Symbol
// const sym1 = Symbol()

// 4. Undefined
// let apple

// 5. Null
// apple = null

// 6. Number
// let num = 7
// let anotherNum = 3.5

// 7. String
// const dog = "coco"
// const naan = 'tasty'
// const fact = `My friend ${dog} thinks naan is ${2 + 2}`
// const anotherStr = `I'm using contractions`




/***** NON PRIMITIVE TYPES *****/
// anything that's not a primitive type is a non primitive type! In Javascript, all non primitive types are objects
const raffy = {
    name: "Raffy",
    age: 9,
    "is-cool": true
}

// console.log(raffy["name"])
// console.log(raffy.age) // dot notation
// console.log(raffy["is-cool"])

// const arr = [1, 2, 3, 4, 5]
// console.log(arr[0])
// arr.push(7)


/***** FUNCTIONS *****/
function isItEven(someArray) {
    if (someArray.length % 2 === 0) {
        console.log(`IT'S EVEN`)
        return true
    }
    else {
        console.log(`It's not even`)
        return false
    }
    // will never reach this code
    // console.log("I'm on line 64!")
}

// function invocation
// isItEven(arr)
// invoke function and save return value to a variable
// let isArrEven = isItEven(arr)

// console log function definition 
// console.log(isItEven)



/***** EQUALITY OPERATORS *****/
// === vs ==
// === - compares the data type & value
// == - do some type coercion & compare the values



/***** VARIABLE DECLARATION KEYWORDS *****/
// let, const, var, no keyword
// // function scoped
// var a = "global"
// // global scope
// d = "global"

// // came out in ES6
// // block scoped
// let b = "global"
// const c = "global"

function foo() {
    // function scoped
    var a = "global a"
    // global scope
    d = "global d"


    if (true) {
        // came out in ES6
        // block scoped
        let b = "global b"
        const c = "global c"
        console.log(a, d, b, c)

    }

    debugger // like binding.pry
}



/***** ITERATORS & CALLBACKS *****/
// forEach, map, filter
const arr = [1, 2, 3, 4, 5]


// arr.forEach(function doubleIt(value) {
//     console.log('value -', value)
//     // console.log('i -', i)
//     console.log('arr -', arr)
// })


function doubleIt(value) {
    console.log('value -', value)
    // console.log('i -', i)
    // console.log('arr -', arr)
    console.log(value * 2)
}

// arr.forEach(doubleIt)



/***** FOR / WHILE / FOR...OF *****/

const names = ["coco", "raffy", "guster", "cooper", "milo", "mallow"]

// for (let i = 0; i < names.length; i++) {
//     // 1st - i = 0, 0 < 6, 0++
//     // 2nd - i = 1, 1 < 6, 1++
//     // .....
//     // 6th - i = 5, 5 < 6, 5++
//     // 7th - i = 6, 6 < 6 ?????......EXIT
//     console.log(names[i])

// }

// let i = 0

// while (i < names.length) {
//     console.log(names[i])
//     i++ // i = i + 1
// }


// for...of
// for (let value of names) {
//     console.log(value)
// }
