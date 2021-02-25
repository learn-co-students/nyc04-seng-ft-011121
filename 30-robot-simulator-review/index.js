document.addEventListener("DOMContentLoaded", function () {
  // initializes the board
  init();

  const ul = document.querySelector('ul#moves-container')
  const moveButton = document.querySelector('button#move-button')

  // ADD CODE HERE!

  // DELIVERABLE 1
  document.addEventListener('keydown', event => {
    if (event.key.startsWith('Arrow')) {
      const li = document.createElement('li')
      li.textContent = event.key.substring(5).toLowerCase()
      ul.append(li)
    }
  })

  DELIVERABLE 2
  moveButton.addEventListener('click', event => {
    if (ul.children.length > 0) {
      move(ul.children[0].textContent)
      ul.children[0].remove()
    }
  })

  // DELIVERABLE 3
  // EVENT DELEGATION APPROACH
  ul.addEventListener('click', event => {
    console.log(event.target) // will not always be li!
    if (event.target.matches('li')) {
      event.target.remove()
    }
  })



  // BONUS APPROACHES
  // - USING SETINTERVAL
  // moveButton.addEventListener('click', event => {

  //   if (ul.children.length > 0) {
  //     let counter = ul.children.length - 1
  //     let startMove = setInterval(() => {
  //       move(ul.children[0].textContent)
  //       ul.children[0].remove()

  //       if (counter === 0) {
  //         clearInterval(startMove)
  //       }
  //       counter--
  //     }, 500)
  //   }

  // })


  // moveButton.addEventListener('click', () => {

  //   let handle = setInterval(() => {
  //     const nextLi = movesContainer.querySelector('li')

  //     if (nextLi) {
  //       move(nextLi.textContent)
  //       nextLi.remove()
  //     }
  //     else {
  //       clearInterval(handle)
  //     }
  //   }, 500)

  // })


  // - USING SETTIMEOUT
  // moveButton.addEventListener('click', event => {

  //   const moves = ul.querySelectorAll('li') // nodelist
  //   const movesArr = Array.from(moves) // convert to regular JS array
  //   let i = movesArr.length

  //   function movesLoop() {
  //     setTimeout(() => {
  //       move(movesArr[0].textContent)
  //       movesArr[0].remove()
  //       movesArr.shift()
  //       i--
  //       if (i > 0) {
  //         movesLoop()
  //       }
  //     }, 500)
  //   }

  //   movesLoop()

  // })

  // moveButton.addEventListener('click', event => {

  //   for (let j = 0; j < ul.children.length; j++) {
  //     setTimeout(() => {
  //       move(ul.children[0].textContent)
  //       ul.children[0].remove()
  //     }, 500 * j)
  //   }

  //   // j = 0, 0 sec
  //   // j = 1, 1/2 sec
  //   // j = 2, 1 sec
  // })

  // moveButton.addEventListener('click', event => {
  //   const allMoves = document.querySelectorAll('li')

  //   allMoves.forEach((direction, index) => {
  //     setTimeout(() => {
  //       move(direction.textContent)
  //       direction.remove()
  //     }, 500 * index)
  //   })


















});
