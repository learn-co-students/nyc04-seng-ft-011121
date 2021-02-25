/******* GLOBAL VARIABLES *******/

const heading = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')
const schoolPtag = document.querySelector('p.flatiron')



/******* FUNCTIONS *******/

function updateSchoolStyling() {
    schoolPtag.style.color = "blue"
}

function removeAd() {
    const adDiv = document.querySelector('.card.ad')
    adDiv.remove()
}


function renderAllCards() {
    articlesArray.forEach(function (articleObject) {
        renderOneCard(articleObject)
    })
}

function renderOneCard(articleObject) {
    const div = document.createElement('div')
    div.classList.add('card')
    div.dataset.id = articleObject.id

    div.innerHTML = ` <div class="img-container">
                <img src="${articleObject.image}" alt="${articleObject.title}" />
                <div class="article-title-container">
                    <h4>${articleObject.title}</h4>
                </div>
            </div>
            <div class="content">
                <p class='author'>Author: ${articleObject.author}</p>
                <div class="scroll">
                    <p class='description'>${articleObject.description}</p>
                </div>
                <p class="react-count">${articleObject.likes} likes</p>
                <button class="like-button">♥️ Like</button>
                <button class='delete-button'>X</button>
            </div>`

    const collectionDiv = document.querySelector('div#collection')
    collectionDiv.append(div)
}



/******* EVENT LISTENERS ********/

const toggle = document.querySelector('input#toggle-dark-mode')

toggle.addEventListener("click", function () {
    document.body.classList.toggle('dark-mode')
})



const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    // const titleInput = event.target.title.value
    // const authorInput = event.target.author.value
    // const descriptionInput = event.target.description.value
    // const urlInput = event.target.url.value

    const title = event.target[0].value
    const author = event.target[1].value
    const description = event.target[2].value
    const image = event.target[3].value
    const lastId = articlesArray[articlesArray.length - 1].id
    const id = lastId + 1

    // const articleObj = {
    //     id: newId,
    //     title: firstInput,
    //     author: secondInput,
    //     description: thirdInput,
    //     image: fourthInput,
    //     likes: 0
    // }

    // How to create the above object using object shorthand syntax??
    // const articleObj = { title, author, description, image, id, likes: 0 } // object shorthand notation

    console.log(articleObj)


    renderOneCard({ title, author, description, image, id, likes: 0 })
    event.target.reset()
})




const collectionDiv = document.querySelector('div#collection')

collectionDiv.addEventListener('click', function (event) {

    if (event.target.className === 'like-button') {
        const cardDiv = event.target.closest('div.card')
        const pTag = cardDiv.querySelector('p.react-count')
        const currLikes = parseInt(pTag.textContent)
        pTag.textContent = `${currLikes + 1} likes`
    }
    else if (event.target.matches('.delete-button')) {
        console.log('delete clicked')
        const cardDiv = event.target.closest('div.card')
        cardDiv.remove()
    }

})









/******* APP INIT ********/
removeAd()
renderAllCards()
updateSchoolStyling()




// document.querySelector('button.delete-button').addEventListener('click', function(event){
//     console.log('DELETE BTN CLICKED - ', event.target)
// })

// document.querySelector('div.card').addEventListener('click', function(event) {
//     console.log('CARD CLICKED - ', event.target)
// })

// document.body.addEventListener('click', function(event) {
//     console.log('BODY CLICKED - ', event)
// })
