import React, { useState } from "react";

// Clean Version
function Header({ name, logo = "//" }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        {name}
      </h1>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;

// Notes Version
/*
find the element 

add the event listener with the type of event
pass in a callback function

button.addEventListener("click", console.log("click"))

Not React-y
- directly manipulating the DOM!
- .textContent, querySelector, .remove, dataset....

Working with state!
1. import useState hook
2. call useState in the component, passing in an initial value
3. use that state in your component to update what is being displayed
*/

// Header()
/*
Header {
  hooks: [true]
}

App initial render:
Header()
- click the button + setState() -> 
Header()
*/
// function Header({ name, logo = "//" }) {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   console.log(isDarkMode);
//   // let isDarkMode = true;

//   function handleDarkModeClick(event) {
//     // isDarkMode === true
//     // !isDarkMode === false
//     setIsDarkMode(!isDarkMode);
//     // react will change the value for that variable
//     // react will ALSO re-render our component

//     // isDarkMode = !isDarkMode;
//     // if (isDarkMode) {
//     //   event.target.textContent = "Dark Mode";
//     // } else {
//     //   event.target.textContent = "Light Mode";
//     // }
//     // console.log(isDarkMode);
//     // console.log(event.target.textContent);
//   }

//   return (
//     <header>
//       <h1>
//         <span className="logo">{logo}</span>
//         {name}
//       </h1>
//       <button onClick={handleDarkModeClick}>
//         {isDarkMode ? "Dark" : "Light"} Mode
//       </button>
//     </header>
//   );
// }

// export default Header;
