import React, { useState } from "react";

function TweetForm({ onAddTweet }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTweet(message);
    setMessage("");
  };

  return (
    <div className="ui secondary segment">
      <form onSubmit={handleSubmit} action="">
        <div className="ui fluid input">
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
          />
          <button className="ui basic blue button" type="submit">
            Add a Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetForm;
