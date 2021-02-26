// GET /articles => get all the article objects from the backend and then we'll render the articles ✅
// POST /articles => save the article that the user created using the form ✅
// DELETE /articles/:id => when the user hits on the delete button, delete the article! ✅
// PATCH /articles/:id => when the user hits on the likes button, udpate the number of likes!




/******* GLOBAL VARIABLES *******/

const heading = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')
const schoolPtag = document.querySelector('p.flatiron')
const toggle = document.querySelector('input#toggle-dark-mode')
const form = document.querySelector('form')
const collectionDiv = document.querySelector('div#collection')



/******* FUNCTIONS *******/

function updateSchoolStyling() {
    schoolPtag.style.color = "blue"
}

function removeAd() {
    const adDiv = document.querySelector('.card.ad')
    adDiv.remove()
}

function renderAllCards() {
    fetch('http://localhost:3000/articles')
        .then(response => response.json())
        .then(articlesArr => {
            articlesArr.forEach(articleObj => {
                renderOneCard(articleObj)
            })
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

toggle.addEventListener("click", function () {
    document.body.classList.toggle('dark-mode')
})


form.addEventListener('submit', function (event) {
    event.preventDefault()

    const title = event.target[0].value
    const author = event.target[1].value
    const description = event.target[2].value
    const image = event.target[3].value
    // const lastId = articlesArray[articlesArray.length - 1].id
    // const id = lastId + 1

    // const articleObj = { title, author, description, image, likes: 0 } // shorthand notation
    const articleObj = {
        title: title,
        author: author,
        description: description,
        image: image,
        likes: 0
    } // data we want to send to server

    // what if make request with missing key-value pair?
    // renderOneCard(articleObj)
    // const data = { username: 'example' };

    fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // type of content of data we're sending to server
            'Accept': 'application/json' // type of data we want back from server
        },
        body: JSON.stringify(articleObj),
    })
        .then(response => response.json())
        .then(oneArticleObj => {
            // do something with the data
            renderOneCard(oneArticleObj)
        })
        .catch((error) => {
            console.error('Error:', error);
        });


    event.target.reset()
})


collectionDiv.addEventListener('click', function (event) {

    if (event.target.className === 'like-button') {
        const cardDiv = event.target.closest('div.card')
        const pTag = cardDiv.querySelector('p.react-count')
        const currLikes = parseInt(pTag.textContent)
        // pTag.textContent = `${currLikes + 1} likes` // optimistic rendering
        const newLikesObj = { likes: currLikes + 1 }

        fetch(`http://localhost:3000/articlesssss/${cardDiv.dataset.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLikesObj)
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }

                throw Error(`The status text is: ${response.statusText}`)
            })
            .then(data => {
                pTag.textContent = `${data.likes} likes`
            })
            .catch(error => {
                alert(error)
            })

    }
    else if (event.target.matches('.delete-button')) {
        console.log('delete clicked')
        const cardDiv = event.target.closest('div.card')
        const id = cardDiv.dataset.id
        console.log(id)

        cardDiv.remove() // optimisitc

        fetch(`http://localhost:3000/articles/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                // do something the data, do some dom manipulation
                // cardDiv.remove() // pesimistic
            })

    }

})



/******* APP INIT ********/

removeAd()
renderAllCards()
updateSchoolStyling()
