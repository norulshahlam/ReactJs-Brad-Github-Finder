import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // g) componentDidMount(), h) axios, i)setState on fetch data
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=kVptYBBlFzBrt6VOmEbdtV48bhvuRVwv&q=food&limit=1`
    );

    this.setState({ loading: false, users: res });
  }
  render() {
    console.log(this.state.users);
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}

export default App;
