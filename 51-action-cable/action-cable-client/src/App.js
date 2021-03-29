import React, { useState, useEffect } from "react";
import TweetsContainer from "./components/TweetsContainer";
import Header from "./components/Header";
import { autologin } from "./api";
import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      autologin(token).then(setCurrentUser);
    }
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      {currentUser ? (
        <TweetsContainer currentUser={currentUser} />
      ) : (
        <Login setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
}

export default App;
