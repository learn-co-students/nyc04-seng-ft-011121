class Card {

    constructor(article) {
        this.article = article
    }

    static renderAll() {
        fetch(url)
            .then(response => response.json())
            .then(articlesArr => articlesArr.forEach(articleObj => {
                const card = new Card(articleObj)
                card.render()
            }))
    }

    handleLikes(event) {
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

    handleDelete(event) {
        const cardDiv = event.target.closest('div.card')

        fetch(`http://localhost:3000/articles/${cardDiv.dataset.id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(() => cardDiv.remove())
    }

    render() {
        console.log(this)
        const div = document.createElement('div')
        div.classList.add('card')
        div.dataset.id = this.article.id

        div.innerHTML = ` <div class="img-container">
                <img src="${this.article.image}" alt="${this.article.title}" />
                <div class="article-title-container">
                    <h4>${this.article.title}</h4>
                </div>
            </div>
            <div class="content">
                <p class='author'>Author: ${this.article.author}</p>
                <div class="scroll">
                    <p class='description'>${this.article.description}</p>
                </div>
                <p class="react-count">${this.article.likes} likes</p>
                <button class="like-button">♥️ Like</button>
                <button class='delete-button'>X</button>
            </div>`

        const collectionDiv = document.querySelector('div#collection')
        collectionDiv.append(div)

        const likeBtn = div.querySelector('.like-button')
        likeBtn.addEventListener('click', this.handleLikes)

        const deleteBtn = div.querySelector('.delete-button')
        deleteBtn.addEventListener('click', this.handleDelete)
    }
}