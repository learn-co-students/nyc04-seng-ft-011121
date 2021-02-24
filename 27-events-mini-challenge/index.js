/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost(animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
// function toggleColor(element) {
//     if (element.style.color === "green") {
//         element.style.color = "black"
//     } else {
//         element.style.color = "green"
//     }
// }

// header.addEventListener('click', function (event) {
//     // toggleColor(header)
//     toggleColor(event.target) 
//     //event.target tells which element triggered the event
// })



function toggleColor(event) {
    const element = event.target

    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

header.addEventListener('click', toggleColor)


/***** Deliverable 2 *****/

const likeButton = document.querySelector('.like-button')

likeButton.addEventListener('click', function (event) {
    // HOW TO GET P TAG THAT DISPLAYS LIKES NUMBER??
    // - could use likes variable from line 23 to access likes p tag
    // - const likesPtag = document.querySelector('p.likes')
    // - const likePtag = event.target.previousElementSibling

    // const currentLikes = parseInt(likes.textContent)
    // likes.textContent = `${currentLikes + 1} Likes`

    traveler.likes += 1
    likes.textContent = `${traveler.likes} Likes`
})

/***** Deliverable 3 *****/


const form = document.querySelector('#new-animal-sighting-form')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    // const input1 = event.target[0].value
    const speciesInput = event.target.species.value
    const videoInput = event.target.link.value
    const photoInput = event.target.photo.value
    const descriptionInput = event.target.description.value
    const length = traveler.animalSightings.length
    const newId = traveler.animalSightings[length - 1].id + 1

    const sightingObj = {
        species: speciesInput,
        photo: photoInput,
        link: videoInput,
        description: descriptionInput,
        travelerId: 1,
        id: newId
    }

    traveler.animalSightings.push(sightingObj)
    console.log(traveler.animalSightings)
    renderAnimalSightingPost(sightingObj)

    event.target.reset()
    // form.reset()
})
