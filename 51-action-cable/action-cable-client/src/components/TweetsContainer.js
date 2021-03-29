import React, { useEffect, useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { getUsers } from "../api";
import Loader from "./Loader";

function TweetsContainer({ currentUser }) {
  const [users, setUsers] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState(null);

  // fetch users
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setSelectedUsername(users[0].username);
    });
  }, []);

  function handleUserClick(username) {
    setSelectedUsername(username);
  }

  const selectedUser = users.find((user) => user.username === selectedUsername);

  if (!selectedUser) return <Loader />;

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <UserList users={users} onUserClick={handleUserClick} />
        </div>
        <div className="ten wide column">
          {selectedUser && (
            <TweetList user={selectedUser} currentUser={currentUser} />
          )}
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
