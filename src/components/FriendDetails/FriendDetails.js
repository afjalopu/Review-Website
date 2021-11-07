import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  const history = useHistory();

  // Taking the data from the JSON
  useEffect(() => {
    // const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    const url = "/fakedata.json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const friendById = data.filter(
          (friend) => friend.id === Number(friendId)
        );
        setFriend(friendById.length ? friendById[0] : {});
      });
  }, []);

  const handleClick = () => {
    history.push(`/friends`);
  };

  return (
    <div className="col my-3">
      <div className="card-body border">
        <h5 className="card-title text-primary "> {friend.name} </h5>
        <p> Id: {friend.id} </p>
        <p className="card-title text-dark"> Phone : {friend.phone}</p>
        <p> Website: {friend.website} </p>
        <p> Phone: {friend.phone} </p>
        <p> Email: {friend.email} </p>
        <p>Visit me: Work At : {friend.company?.name}</p>
        <div className="social-media">
          <p>
            {" "}
            <i className="fab fa-facebook facebook"></i>
            <i className="fab fa-instagram intagram"></i>
            <i className="fab fa-twitter twitter"></i>
          </p>
          <button className="button" onClick={handleClick}>
            {" "}
            See All{" "}
          </button>{" "}
          <br /> <br />
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
