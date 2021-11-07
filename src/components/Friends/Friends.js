import React, { useEffect, useState } from "react";
import Friend from "./../Friend/Friend";
import "./Friends.css";

const Friends = (props) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(0, props.limit ?? 100);
        setFriends(sliceData);
      });
  }, []);

  return (
        <div className="row row-cols-1 row-cols-md-3">
          {friends.map((friend) => (
            <Friend key={friend.id} friend={friend}></Friend>
          ))}
        </div>
  );
};

export default Friends;
