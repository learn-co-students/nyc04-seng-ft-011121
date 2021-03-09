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

/******* EVENT LISTENERS ********/

toggle.addEventListener("click", () => document.body.classList.toggle('dark-mode'))


/******* APP INIT ********/

removeAd()
Card.renderAll()
updateSchoolStyling()
