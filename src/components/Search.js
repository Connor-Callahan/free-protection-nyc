import React, { Component } from 'react';

class Search extends Component {


  render() {


    return (
      <div>
        <input
            id="search-input"
            autoComplete="off"
            type="text"
            onChange={this.props.locationFilter}
            placeholder='Search by Address...'
            />
          <button>submit</button>
      </div>
    );
  }

}

export default Search;
