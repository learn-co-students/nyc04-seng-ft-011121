/******* GLOBAL VARIABLES *******/

const heading = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')
const schoolPtag = document.querySelector('p.flatiron')
const toggle = document.querySelector('input#toggle-dark-mode')
const form = document.querySelector('form')
const collectionDiv = document.querySelector('div#collection')
const url = 'http://localhost:3000/articles'


/******* FUNCTIONS *******/

function updateSchoolStyling() {
    schoolPtag.style.color = "blue"
}

function removeAd() {
    const adDiv = document.querySelector('.card.ad')
    adDiv.remove()
}

function renderAllCards() {
    fetch(url)
        .then(response => response.json())
        .then(articlesArr => articlesArr.forEach(articleObj => renderOneCard(articleObj)))
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

toggle.addEventListener("click", () => document.body.classList.toggle('dark-mode'))

collectionDiv.addEventListener('click', function (event) {

    if (event.target.className === 'like-button') {
        const cardDiv = event.target.closest('div.card')
        const pTag = cardDiv.querySelector('p.react-count')

        fetch(`${url}/${cardDiv.dataset.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: parseInt(pTag.textContent) + 1 })
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw Error(`The status text is: ${response.statusText}`)
            })
            .then(updatedArticle => pTag.textContent = `${updatedArticle.likes} likes`)
            .catch(error => alert(error.message))
    }
    else if (event.target.matches('.delete-button')) {
        const cardDiv = event.target.closest('div.card')

        fetch(`http://localhost:3000/articles/${cardDiv.dataset.id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(() => cardDiv.remove())
    }
})


/******* APP INIT ********/

removeAd()
renderAllCards()
updateSchoolStyling()
