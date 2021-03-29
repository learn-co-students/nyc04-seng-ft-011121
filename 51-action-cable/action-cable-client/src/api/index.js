const BASE_URL = "http://localhost:3000";

function parseResponse(response) {
  return response.json().then((data) => {
    if (response.ok) return data;
    throw data;
  });
}

export function autologin(token) {
  return fetch(BASE_URL + `/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(parseResponse);
}

export function login(username) {
  return fetch(BASE_URL + `/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  }).then(parseResponse);
}

export function getUsers() {
  return fetch(BASE_URL + "/users").then(parseResponse);
}

export function getTweets(userId) {
  return fetch(BASE_URL + `/users/${userId}/tweets`).then(parseResponse);
}

export function createTweet(message) {
  const token = localStorage.getItem("token");
  return fetch(BASE_URL + `/tweets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message }),
  }).then(parseResponse);
}
