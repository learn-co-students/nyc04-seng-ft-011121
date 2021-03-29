import { useState } from "react";
import { login } from "../api";

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(username).then((data) => {
      const { user, token } = data;
      localStorage.setItem("token", token);
      setCurrentUser(user);
    });
  }

  return (
    <div style={{ width: "500px", margin: "100px auto" }}>
      <h1>Login</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="first-name"
            placeholder="First Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
