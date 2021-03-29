import React from "react";
import UserCard from "./UserCard";

function UserList({ users, onUserClick }) {
  return (
    <div className="ui cards">
      {users.map((user) => (
        <UserCard key={user.username} onUserClick={onUserClick} user={user} />
      ))}
    </div>
  );
}
export default UserList;
