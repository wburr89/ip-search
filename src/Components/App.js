import React from "react";
// 3rd party packages
import axios from "axios";
// Components
import SearchBar from "./SearchBar";
import IpList from "../Components/IpList";

import "./App.css";

class App extends React.Component {
  state = { ipResult: [] };

  onSearchSubmit = (term) => {
    axios.get(`http://ip-api.com/json/${term}`).then((res) => {
      const data = res.data;

      this.setState({ ipResult: data });
    });
  };

  render() {
    return (
      <div className="text-center">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <IpList returnedList={this.state.ipResult} />
      </div>
    );
  }
}

export default App;
