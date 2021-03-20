import React, { useState, useContext } from "react";

import GitContext from "./GitContext";
import AlertContext from "./AlertContext";

const Search = () => {
  const gitContext = useContext(GitContext);
  const alertContext = useContext(AlertContext);
  //set init state to blank
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert(" Please enter something", "light");
    } else {
      // n) send props up
      gitContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      {/* m) event binding  */}
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {/* o) show 'clear btn' only when results displayed */}
      {gitContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          // // n) send props up
          onClick={gitContext.clearUsers}
        >
          Clear results
        </button>
      )}
    </div>
  );
};

export default Search;
