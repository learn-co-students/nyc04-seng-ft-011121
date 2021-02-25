document.addEventListener("DOMContentLoaded", function () {
  // initializes the board
  init();

  const ul = document.querySelector('ul#moves-container')

  // ADD CODE HERE!
  document.addEventListener('keydown', event => {
    console.log(event.key)
    // if (event.key === 'ArrowDown') {
    //   const li = document.createElement('li')
    //   li.textContent = 'Down'
    //   ul.append(li)
    // }
    // else if (event.key === 'ArrowUp') {
    //   const li = document.createElement('li')
    //   li.textContent = 'Up'
    //   ul.append(li)
    // }
    // else if (event.key === 'ArrowRight') {
    //   const li = document.createElement('li')
    //   li.textContent = 'Right'
    //   ul.append(li)
    // }
    // else if (event.key === 'ArrowLeft') {
    //   const li = document.createElement('li')
    //   li.textContent = 'Left'
    //   ul.append(li)
    // }
    if (event.key.startsWith('Arrow')) {
      const li = document.createElement('li')
      li.textContent = event.key.substring(5).toLowerCase()
      ul.append(li)

      // CLOSURE APPROACH
      // li.addEventListener('click', event => {
      //   // event.target.remove()
      //   // li.remove()
      // })
    }
  })



  const moveButton = document.querySelector('button#move-button')

  moveButton.addEventListener('click', event => {
    // use firstElementChild
    // use firstChild
    // querySelector on the ul
    if (ul.children.length > 0) {
      move(ul.children[0].textContent)
      ul.children[0].remove()
    }
  })


  // EVENT DELEGATION APPROACH
  ul.addEventListener('click', event => {
    if (event.target.matches('li')) {
      event.target.remove()
    }
  })






});
