import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert(" Please enter something", "light");
    } else {
      // n) send props up
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  }

  render() {
    // e) destructuring
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        {/* m) event binding  */}
        <form onSubmit={this.onSubmit.bind(this)} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {/* o) show 'clear btn' only when results displayed */}
        {showClear && (
          <button
            className="btn btn-light btn-block"
            // // n) send props up
            onClick={clearUsers}
          >
            Clear results
          </button>
        )}
      </div>
    );
  }
}

export default Search;
