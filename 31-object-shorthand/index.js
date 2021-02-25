// Object Shorthand Notation

const firstName = 'Raffy'
const age = 9
const isTroubleMaker = true
const weaknesses = ['biscuits', 'birds']
const strengths = ['cuteness', 'walking']

function speak() {
    return 'woof woof'
}

// const bestFriend = {
//     firstName: firstName,
//     age: age,
//     isTroubleMaker: isTroubleMaker,
//     weaknesses: weaknesses,
//     strengths: strengths,
//     speakFunc: speak
// }

const bestFriend = {
    firstName,
    age,
    isTroubleMaker,
    strengths,
    weaknesses,
    speak
}

const bestFriend2 = {
    firstName,
    age,
    isTroubleMaker,
    strengths,
    weaknesses,
    speak
}


// object computed properties <= another feature, yay ES6




