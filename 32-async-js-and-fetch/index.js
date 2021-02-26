function sleep(time) {
    const start = new Date()
    while (new Date() - start < time * 1000) {
        // do nothing & block the main thread 
    }
}


// document.querySelector('button').addEventListener('click', () => {
//     console.log("CLICKED !!!")
// })


// translated Ruby code from synch.rb


// console.log("Before timeout")
// // sleep(5)

// setTimeout(() => {
//     console.log('inside timeout callback')
// }, 5000);


// console.log("After timeout")



// fetch('https://randomfox.ca/floof/')
//     .then(response => response.json())
//     .then(data => console.log(data));



// fetch('https://randomfox.ca/floof/')
//     .then(responseObject => responseObject.json())
//     .then(data => console.log(data))




// add an event listener on the button
// then make a fetch request in the event handler
// When we get the data, update the img's src
// to the data's image property

function updateImageSource(imageUrl) {
    const img = document.querySelector('img')
    img.src = imageUrl
}




const button = document.querySelector('button#get-fox-btn')

button.addEventListener('click', () => {
    fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => {
            updateImageSource(data.image)
        })
})