import React, { useContext } from "react";
import { Spinner } from "./Spinner";
import UserItem from "./UserItem";

import GitContext from "./GitContext";

// e) destructuring
const Users = () => {
  const gitContext = useContext(GitContext);
  const { users, loading } = gitContext;
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

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
