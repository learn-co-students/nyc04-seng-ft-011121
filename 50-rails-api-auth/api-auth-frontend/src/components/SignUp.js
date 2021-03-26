import React, { useState } from "react";
import { useHistory } from "react-router";

function SignUp({ setUser }) {
  const [formData, setFormData] = useState({
    username: "",
    image: "",
    bio: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        return r.json().then((data) => {
          if (r.ok) {
            return data;
          } else {
            throw data;
          }
        });
      })
      .then((data) => {
        const { user, token } = data;
        // big caveat here! localstorage is vulnerable to XSS
        // response: save the token, set user state, and redirect
        localStorage.setItem("token", token);
        setUser(user);
        history.push("/");
      })
      .catch((data) => {
        setErrors(data.errors);
      });
  }

  const { username, image, bio, password } = formData;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h1>Signup</h1>

      <label>Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <label>Profile Image</label>
      <input type="text" name="image" value={image} onChange={handleChange} />
      <img
        src={
          image.length
            ? image
            : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
        }
        alt={username}
      />

      <label>Bio</label>
      <textarea name="bio" value={bio} onChange={handleChange} />

      <label>Password</label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={handleChange}
      />

      {errors.map((err) => (
        <p style={{ color: "red" }} key={err}>
          {err}
        </p>
      ))}

      <input type="submit" value="Signup" />
    </form>
  );
}

export default SignUp;
