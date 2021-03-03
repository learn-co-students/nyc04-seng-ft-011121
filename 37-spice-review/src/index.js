// write your code here
const updateForm = document.querySelector('form#update-form')
const detailH2 = document.querySelector('h2.title')
const newIngredientForm = document.querySelector('form#ingredient-form')

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

    spiceBlend.ingredients.forEach(ingredient => {
        const li = document.createElement('li')
        li.textContent = ingredient.name

        const detailIngredientUl = document.querySelector('ul.ingredients-list')
        detailIngredientUl.append(li)
    });

    // update form
    updateForm.dataset.id = spiceBlend.id
    newIngredientForm.dataset.id = spiceBlend.id
}



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

    const li = document.createElement('li')
    li.textContent = ingredient

    const detailIngredientUl = document.querySelector('ul.ingredients-list')
    detailIngredientUl.append(li)

    newIngredientForm.reset()
})


fetchOneSpiceBlend()


