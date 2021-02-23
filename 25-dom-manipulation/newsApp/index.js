const articlesArray = [
    {
        id: 1,
        title: "Why Buford is Rude",
        author: "A.J. Perlis",
        description: "My dog is rude because he kicks down doors when closed and chooses when to listen",
        image: "images/IMG_4598.jpg",
        likes: "1"
    },
    {
        id: 2,
        title: "ATLA better than LOK",
        author: "Ob V. Usly",
        description: "There are so many reasons, who could even count?",
        image: "https://i.pinimg.com/originals/9f/e2/54/9fe2547d6ddcbcb0bc2baaaab0855fb3.jpg",
        likes: 600000000
    },
    {
        id: 3,
        title: "Local Boy Unmutes Himself",
        author: "Tim Wit",
        description: "In a stunning turn of events, a very competent programmer remembers to press the 'unmute' button before speaking on Zoom.",
        image: "https://images.idgesg.net/images/article/2020/07/zoom-for-home-100852180-large.jpg",
        likes: 6
    },
    {
        id: 4,
        title: "Fluff Daddy",
        author: "F. Diddy",
        description: "Breaking: Puff Daddy changes his name yet again, this time to help promote his line of extremely fluffy coats",
        image: "https://i.redd.it/l0uj355oxv341.jpg",
        likes: 50
    },
    {
        id: 5,
        title: "Earth Spinning",
        author: "Bark Twain",
        description: "Recent studies have led scientists to believe that the Earth is spinning round as we speak.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
        likes: 50
    },
    {
        id: 6,
        title: "Raffy so cute",
        author: "Mr. Rafferty",
        description: "Raffy continues to be a fluffy boy.",
        image: "images/raffy.jpg",
        likes: 27
    },
    {
        id: 7,
        title: "I'm not fat, I'm Fluffy",
        author: "Gabriel Iglesias",
        description: "...and Covid makes me even fluffier",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawkwardyeti.com%2Fwp-content%2Fuploads%2F2017%2F07%2F063017_MaintenanceRequired-1024x841.png&f=1&nofb=1",
        likes: 9000
    }
]

/******* READ *******/

const heading = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')




/******* UPDATE *******/
// try to find ele by alt text

// 1. FIND the element you want to update
// const cards = document.querySelectorAll('.card')
// const firstCard = cards[0]

// const firstCard = document.querySelector('[data-id="1"]')
// const firstCardImg = firstCard.querySelector('img')

// 2. update something about it
// firstCardImg.src = "images/raffy.jpg"


const schoolPtag = document.querySelector('p.flatiron')
schoolPtag.style.color = "blue"


/******* DELETE *******/
// 1. FIND the element you want to remove
const adDiv = document.querySelector('.card.ad')
// console.log(adDiv)

// 2. actually remove it
adDiv.remove()


/******* CREATE *******/
// < div class="card" data - id="1" >
//             <div class="img-container">
//                 <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
//                     alt="Raffy" />
//                 <div class="article-title-container">
//                     <h4>Raffy is cute</h4>
//                 </div>
//             </div>
//             <div class="content">
//                 <p class='author'>Author: Rafferty</p>
//                 <div class="scroll">
//                     <p class='description'>Raffy is a fluffy boy! Halvah donut sugar plum chocolate bar icing apple
//             pie dragée. Gingerbread dragée sugar plum. Powder pie toffee tootsie roll danish candy
//             wafer. Sesame snaps fruitcake tootsie roll jelly chupa chups macaroon gummies sweet roll.
//             Carrot cake biscuit oat cake cotton candy sweet jelly-o topping. Cupcake pie marshmallow
//                         marzipan sesame snaps biscuit apple pie dragée.</p>
//                 </div>
//                 <p class="react-count">5 likes</p>
//                 <button class="like-button">♥️ Like</button>
//             </div>
//         </div >




articlesArray.forEach(function (articleObject) {
    const div = document.createElement('div')
    // div.className = "card"
    div.classList.add('card')
    div.dataset.id = articleObject.id

    div.innerHTML = ` <div class="img-container">
                <img src="${articleObject.image}"
                alt="${articleObject.title}" />
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
            </div>`


    // Find where we want to add it on the web page
    const collectionDiv = document.querySelector('div#collection')
    collectionDiv.append(div)
    // console.log(collectionElement)
})

