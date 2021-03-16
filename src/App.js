import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import axios from "axios";
import Search from "./Components/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // g) componentDidMount(), h) axios, i)setState on fetch data
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ loading: false, users: res.data });
  }

  searchUsers = (text) => {
    console.log(text);
  };

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
