import React, { Component } from 'react';

class Search extends Component {


  render() {


    return (
      <div id="search-input">
        <input
            id="search-input"
            autoComplete="off"
            type="text"
            onChange={this.props.locationFilter}
            placeholder='Search by Location...'
            />
      </div>
    );
  }

}

export default Search;
