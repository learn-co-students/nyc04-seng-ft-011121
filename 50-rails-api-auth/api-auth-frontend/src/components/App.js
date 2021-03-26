import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState(null);

  // auto-login feature!
  useEffect(() => {
    // TODO: check if the user has already logged in
    // GET /me
    fetch("http://localhost:3000/me")
      .then((r) => r.json())
      .then((user) => {
        // save that user in state
        setUser(user);
      });
  }, []);

  return (
    <>
      <NavBar user={user} />
      <main>
        {user ? (
          <Switch>
            <Route path="/profile">
              <Profile user={user} setUser={setUser} />
            </Route>
            <Route path="/">
              <h1>Welcome, {user.username}</h1>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <h1>Please Login or Sign Up</h1>
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
