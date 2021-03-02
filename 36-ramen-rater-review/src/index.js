// write your code here
const ramenMenu = document.querySelector('div#ramen-menu')
const ratingForm = document.querySelector('form#ramen-rating')


function renderRamenMenu() {

    fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then(ramenArray => {
            ramenArray.forEach(ramen => {
                const imgTag = document.createElement('img')
                imgTag.src = ramen.image
                imgTag.dataset.id = ramen.id
                // data-id="1"

                ramenMenu.append(imgTag)
                // appendChild -> only takes in 1 argument
                // append -> 1 or many arguments
            });
        })
}



ramenMenu.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        // console.log('click - ', event.target.dataset.id) // event.target tells which element fired off the event

        fetch(`http://localhost:3000/ramens/${event.target.dataset.id}`)
            .then(res => res.json())
            .then(ramenObject => {
                console.log(ramenObject)
                // detail div
                const detailImg = document.querySelector('.detail-image')
                const detailH2 = document.querySelector('.name')
                const detailH3 = document.querySelector('.restaurant')

                detailImg.src = ramenObject.image
                detailImg.alt = ramenObject.name

                detailH2.textContent = ramenObject.name
                detailH3.textContent = ramenObject.restaurant

                // ramen rating form
                const ratingInput = document.querySelector('input#rating')
                const commentTextArea = document.querySelector('textarea#comment')

                ratingForm.dataset.id = ramenObject.id
                ratingInput.value = ramenObject.rating
                commentTextArea.value = ramenObject.comment
                // console.log(ramenObject.comment)
                // commentTextArea.textContent = ramenObject.comment // <- OK too
            })
    }
})


ratingForm.addEventListener('submit', event => {
    event.preventDefault()
    // const rating = event.target.rating.value
    const ratingInput = event.target[0].value
    // const comment = event.target.comment.value
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
})




renderRamenMenu()