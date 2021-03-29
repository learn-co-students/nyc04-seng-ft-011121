import React from "react";

function Header({ currentUser }) {
  return (
    <header className="ui fixed menu">
      <div className="menu item">Fwitter</div>
      <nav className="right menu">
        {currentUser && (
          <div className="item">
            <img
              className="ui avatar image"
              src={currentUser.photo}
              alt={currentUser.username}
            />
            <span>{currentUser.username}</span>
          </div>
        )}
      </nav>
    </header>
  );
}
export default Header;
