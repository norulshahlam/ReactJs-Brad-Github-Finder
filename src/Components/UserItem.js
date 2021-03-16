import React from "react";
import PropTypes from "prop-types";

const UserItem = (
  // e) simplifying the state values
  { user: { login, avatar_url, html_url } }
) =>
  // const {login, avatar_url, html_url}=this.state
  {
    // d) State
    // state = {
    //   id: "id"
    //   login: "mojombo",
    //   avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //   html_url: "https://github.com/mojombo",
    // };

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    );
  };

//c) PropTypes
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
