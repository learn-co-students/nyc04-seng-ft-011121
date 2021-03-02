// write your code here
const ramenMenu = document.querySelector('div#ramen-menu')
const ratingForm = document.querySelector('form#ramen-rating')
const newRamenForm = document.querySelector('form#new-ramen')
const url = 'http://localhost:3000/ramens'
const deleteButton = document.querySelector('.delete-button')

/************************ FUNCTIONS ************************/
function renderInitialPage() {

    fetch(url)
        .then(res => res.json())
        .then(ramenArray => {
            spotlightARamen(ramenArray[0])

            ramenArray.forEach(ramen => {
                renderOneMenuImage(ramen)
            });
        })
}

function renderOneMenuImage(ramen) {
    const imgTag = document.createElement('img')
    imgTag.src = ramen.image
    imgTag.dataset.id = ramen.id
    ramenMenu.append(imgTag)
}

function spotlightARamen(ramenObject) {
    // detail div
    const detailImg = document.querySelector('.detail-image')
    const detailH2 = document.querySelector('.name')
    const detailH3 = document.querySelector('.restaurant')

    detailImg.src = ramenObject.image
    detailImg.alt = ramenObject.name

    detailH2.textContent = ramenObject.name
    detailH3.textContent = ramenObject.restaurant

    // delete button
    deleteButton.dataset.id = ramenObject.id

    // ramen rating form
    const ratingInput = document.querySelector('input#rating')
    const commentTextArea = document.querySelector('textarea#comment')

    ratingForm.dataset.id = ramenObject.id
    ratingInput.value = ramenObject.rating
    commentTextArea.value = ramenObject.comment
}


/************************ EVENT HANDLERS ************************/
function handleRamenMenuClick(event) {
    if (event.target.tagName === 'IMG') {
        fetch(`http://localhost:3000/ramens/${event.target.dataset.id}`)
            .then(res => res.json())
            .then(ramenObject => spotlightARamen(ramenObject))
    }
}

function handleUpdateFormSubmit(event) {
    event.preventDefault()
    const ratingInput = event.target[0].value
    const commentInput = event.target[1].value

    fetch(`http://localhost:3000/ramens/${ratingForm.dataset.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating: ratingInput, comment: commentInput })
    })
        .then(res => res.json())
        .then(updatedRamen => {
            console.log(updatedRamen)
        })
}

function handleNewFormSubmit(event) {
    event.preventDefault()
    const name = event.target.name.value
    const restaurant = event.target.restaurant.value
    const image = event.target.image.value
    const rating = event.target.rating.value
    const comment = event.target['new-comment'].value


    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, restaurant, image, rating, comment })
    })
        .then(res => res.json())
        .then(newRamen => {
            renderOneMenuImage(newRamen)
            spotlightARamen(newRamen)
        })
}

function handleDeleteButtonClick(event) {
    const id = event.target.dataset.id

    fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
        .then(resp => resp.json())
        .then(() => {
            const ramenToRemove = ramenMenu.querySelector(`[data-id="${id}"]`)
            ramenToRemove.remove()

            const nextMenuImage = ramenMenu.querySelector('img')
            fetch(`${url}/${nextMenuImage.dataset.id}`)
                .then(res => res.json())
                .then(ramenObject => spotlightARamen(ramenObject))

        })
        .catch(error => console.log(error.message))
}

/************************ EVENT LISTENERS ************************/

ramenMenu.addEventListener('click', handleRamenMenuClick)
ratingForm.addEventListener('submit', handleUpdateFormSubmit)
newRamenForm.addEventListener('submit', handleNewFormSubmit)
deleteButton.addEventListener('click', handleDeleteButtonClick)

/************************ APP INIT ************************/
renderInitialPage()