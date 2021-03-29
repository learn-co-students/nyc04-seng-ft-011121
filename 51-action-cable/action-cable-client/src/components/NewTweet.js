import React from "react";

function NewTweetInfo({ newTweetCount, onUpdateTweets }) {
  if (!newTweetCount) return null;

  return (
    <div onClick={onUpdateTweets} className="ui message info">
      You have {newTweetCount} new {newTweetCount > 1 ? "tweets" : "tweet"}
    </div>
  );
}

export default NewTweetInfo;
