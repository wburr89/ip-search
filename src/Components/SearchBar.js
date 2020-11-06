import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <h1>Search IP Addresses</h1>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              className="form-control input"
              placeholder="Enter an IP address and press enter (example: 8.8.8.8)"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
