import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { name, phone, city, id,price, website, address, picture } = props.friend;
  const history = useHistory();

  const handleFriendClick = () => {
    history.push(`/friend/${id}`);
  };

  return (
    <div className="col my-3">
      <div className="card-body border">
        <img
          className="image border"
          src={picture}
          width="50%"
          height="150px"
          
        />
        <h5 className="card-title text-primary "> {name} </h5>
        <p className="card-title text-dark"> ID : {id}</p>
        <p> University: {address.city} </p>
        <p> Enroll Cost: {price} </p>
        <p>Visit me: {website}</p>
        <p>Phone: {phone}</p>
        <div className="social-media">
          <p>
            {" "}
            <i className="fab fa-facebook facebook"></i>
            <i className="fab fa-instagram intagram"></i>
            <i className="fab fa-twitter twitter"></i>
          </p>
          <button className="button" onClick={handleFriendClick}>
            {" "}
            Faculty Details{" "}
          </button>{" "}
          <br /> <br />
        </div>
      </div>
    </div>
  );
};

export default Friend;
