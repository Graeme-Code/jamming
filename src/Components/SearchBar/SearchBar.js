import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
  super(props);
  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);

  this.state = {term: ''};
}

//Pass search term to app.js's search method
  search() {
    this.props.onSearch(this.state.term);
  }

//updates the search term state
  handleTermChange(e) {
    this.setState({term: e.target.value});
  }


  render () {

  return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}
