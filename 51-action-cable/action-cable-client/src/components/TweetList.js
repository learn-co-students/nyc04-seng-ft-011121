import React, { useState, useEffect } from "react";

import TweetItem from "./TweetItem";
import NewTweet from "./NewTweet";
import TweetForm from "./TweetForm";

import { getTweets, createTweet } from "../api";

function TweetList({ user, currentUser }) {
  const [tweets, setTweets] = useState({
    feed: [],
    newTweets: [],
  });

  useEffect(() => {
    if (user.id) {
      getTweets(user.id).then((tweets) => {
        setTweets({
          feed: tweets,
          newTweets: [],
        });
      });
    }
  }, [user.id]);

  function handleAddTweet(message) {
    createTweet(message).then((tweet) => {
      setTweets((tweets) => ({
        ...tweets,
        newTweets: [tweet, ...tweets.newTweets],
      }));
    });
  }

  function handleUpdateTweets() {
    setTweets((tweets) => ({
      feed: [...tweets.newTweets, ...tweets.feed],
      newTweets: [],
    }));
  }

  return (
    <div className="ui segment">
      {currentUser.id === user.id && <TweetForm onAddTweet={handleAddTweet} />}
      <div className="ui feed">
        <NewTweet
          newTweetCount={tweets.newTweets.length}
          onUpdateTweets={handleUpdateTweets}
        />
        {tweets.feed.map((tweet) => (
          <TweetItem
            key={tweet.id}
            username={user.username}
            photo={user.photo}
            tweet={tweet}
          />
        ))}
      </div>
    </div>
  );
}

export default TweetList;
