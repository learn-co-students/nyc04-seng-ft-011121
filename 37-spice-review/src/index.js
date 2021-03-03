// write your code here
const updateForm = document.querySelector('form#update-form')
const detailH2 = document.querySelector('h2.title')
const newIngredientForm = document.querySelector('form#ingredient-form')
const spiceImagesDiv = document.querySelector('div#spice-images')
const detailIngredientUl = document.querySelector('ul.ingredients-list')


/**************** FUNCTIONS *****************/
function fetchOneSpiceBlend() {
    fetch('http://localhost:3000/spiceblends/1')
        .then(response => response.json())
        .then(spiceBlend => spotlightOneSpiceBlend(spiceBlend))
    //.then(spotlightOneSpiceBlend) // same functionality as line above
}

function spotlightOneSpiceBlend(spiceBlend) {
    // if the elements/html exists on the page 
    // already, then just find it and update it
    // update spice detail div
    const detailImg = document.querySelector('img.detail-image')
    detailImg.src = spiceBlend.image
    detailImg.alt = spiceBlend.title

    detailH2.textContent = spiceBlend.title

    // while (detailIngredientUl.firstElementChild) {
    //     detailIngredientUl.firstElementChild.remove()
    // }
    detailIngredientUl.innerHTML = ''
    spiceBlend.ingredients.forEach(ingredient => renderOneIngredient(ingredient));

    // update form
    updateForm.dataset.id = spiceBlend.id
    newIngredientForm.dataset.id = spiceBlend.id
}

function renderOneIngredient(ingredient) {
    const li = document.createElement('li')
    li.textContent = ingredient.name

    detailIngredientUl.append(li)
}




function renderAllSpiceImages() {
    fetch('http://localhost:3000/spiceblends')
        .then(response => response.json())
        .then(spiceBlendsArr => {
            spiceBlendsArr.forEach(spiceBlend => {
                const img = document.createElement('img')
                img.src = spiceBlend.image
                img.alt = spiceBlend.title
                img.dataset.id = spiceBlend.id
                spiceImagesDiv.append(img)
            })
        })
}



/**************** EVENT LISTENERS ****************/
updateForm.addEventListener('submit', event => {
    event.preventDefault()
    const title = event.target[0].value
    console.log(title)

    // shorthand notation
    const updatesObj = { title }
    // const updatesObj = { title: title }
    // const updatesObj = { title: event.target[0].value }

    fetch(`http://localhost:3000/spiceblends/${updateForm.dataset.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatesObj)
    })
        .then(response => response.json())
        .then(updatedSpiceBlend => {
            detailH2.textContent = updatedSpiceBlend.title
        })

})


newIngredientForm.addEventListener('submit', event => {
    event.preventDefault()
    // const ingredient = event.target[0].value
    // const ingredient = event.target.name.value
    const ingredient = document.querySelector('input[name="name"]').value
    console.log(ingredient)

    // optimistic
    // const li = document.createElement('li')
    // li.textContent = ingredient

    // const detailIngredientUl = document.querySelector('ul.ingredients-list')
    // detailIngredientUl.append(li)

    newIngredientForm.reset()

    const newIngredient = {
        name: ingredient,
        spiceblendId: parseInt(newIngredientForm.dataset.id)
    }

    fetch('http://localhost:3000/ingredients', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newIngredient)
    })
        .then(response => response.json())
        .then(ingredientObj => renderOneIngredient(ingredientObj))
})



spiceImagesDiv.addEventListener('click', event => {
    // console.log(event.target) //tells us which element fired off the event
    if (event.target.tagName === 'IMG') {
        fetch(`http://localhost:3000/spiceblends/${event.target.dataset.id}`)
            .then(response => response.json())
            .then(spiceBlend => {
                spotlightOneSpiceBlend(spiceBlend)

            })

    }
})

/**************** APP INIT ****************/
fetchOneSpiceBlend()
renderAllSpiceImages()


