/********************** What is the spread operator and why would I want to use it? **********************/

const raffy = {
    name: "Raffy",
    age: 9,
    type: "terrier",
    bestFriends: ["Michelle", "Louie", "Coco"]
}

const pet = {
    fluffy: true,
    mood: "cheerful",
    health: 100
}

// Wrong way to make a copy of Raffy
const notActualCopy = raffy

// Correct (de-sugared) way to make a copy - using Object.assign
const raffyCopy = Object.assign({}, raffy)

// Correct (sugared) way using spread operator
const anotherCopy = { ...raffy } // es6!

// Combining raffy & pet objec
const comboObj = Object.assign({}, raffy, pet)
const anotherComboObj = { ...raffy, ...pet, favoriteFood: 'tacos' }












/********************** What about arrays?? **********************/

const redVeggies = ["red cabbage", "red onion", "rhubarb"]
const greenVeggies = ["spinach", "lettuce", "zucchini"]

// Wrong way to make a copy of redVeggies
const aFakeCopy = redVeggies

// Correct (sugared) way using spread operator
const actualArrCopy = [...redVeggies]

// Combining redVeggies & greenVeggies arrays
const allVeggies = [...redVeggies, ...greenVeggies]

























/********************** Function Example **********************/
// Spread
function sumThreeNums(x, y, z) {
    console.log(x, y, z)
    return x + y + z
}

const arr = [3, 5, 7]

// const sum = sumThreeNums(3, 5, 7)
// const sum = sumThreeNums(arr[0], arr[1], arr[2])

// const sum = sumThreeNums(...arr)



























/********************** Rest Parameter **********************/
/* 
- Collects all remaining elements into an array
- Allows us to take an unlimited number of arguments 
 into the function
- Must be the last paramter 
*/
function dynamicSum(beef, chicken, ...moreArgs) {
    console.log(beef)
    console.log(chicken)
    console.log(moreArgs)
    return moreArgs.reduce((acc, currVal) => {
        return acc + currVal
    }, 0)
}

// const sum = dynamicSum(1, 4, 5, 6, 7, 8)
// console.log(sum)






/********************** Rest Operator With Destructuring **********************/
const nums = [0, 1, 2, 3, 4, 5, 6, 7]

const spring = {
    temperature: 'temperate',
    activities: ['running', 'walks', 'hiking', 'gardening'],
    isDaylightSaving: true
}


const [num1, num2, num3, num4, ...beef] = nums

const { temperature, ...newObj } = spring


