// const doubleIt = (num) => {
//     return num * 2
// }

// MULTI LINE ARROW FUNCTION - REQUIRES EXPLICIT RETURN
// const doubleIt = num => {
//     const newNum = num * 2
//     return newNum
// }

// SINGLE LINE ARROW FUNCTION WITH IMPLICIT RETURN
const doubleIt = num => num * 2

// IMPLICITLY RETURNING AN OBJECT
const createPerson = (name, age, faveBook) => ({ name: name, age: age, faveBook: faveBook })





/********************** MAP **********************/
// Transforms an array
// Returns a new array
// Does not mutate the original array
// Callback should return the transformation

const transformedArr = nums.map(num => num * 2)



/********************** FILTER **********************/
// Returns a subarray satisfying a condition
// Does not mutate the original array
// Callback should return a boolean

const filteredArr = nums.filter(num => num % 2 === 0)



/********************** SORT **********************/
// mutates the original array
// callback should return a number

/******* SORTING ON ARRAY OF NUMBERS *******/
// nums.sort((numA, numB) => {
//     return numA - numB
// })

nums.sort((numA, numB) => {
    return numB - numA
})


/******* SORTING ON ARRAY OF STRINGS *******/
// bookTitles.sort((bookA, bookB) => {
//     return bookA.localeCompare(bookB)
// })

bookTitles.sort((bookA, bookB) => bookB.localeCompare(bookA))



/******* SORTING ON ARRAY OF OBJECTS *******/
// - SORTING ON A NUMERICAL KEY

// books.sort((bookObjA, bookObjB) => {
//     return bookObjA.yearRead - bookObjB.yearRead
// })

books.sort((bookObjA, bookObjB) => bookObjB.yearRead - bookObjA.yearRead)


// - SORTING ON A STRING KEY

books.sort((bookObjA, bookObjB) => bookObjB.title.localeCompare(bookObjA.title))







