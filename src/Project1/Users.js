import React from "react";
import { Spinner } from "./Spinner";
import UserItem from "./UserItem";
import PropTypes from "prop-types";

// e) destructuring
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      // g) css styling
      <div style={userStyle}>
        {users.map((user) => (
          // f) unique key prop
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
