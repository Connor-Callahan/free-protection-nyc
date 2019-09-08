import React, { Component } from 'react';

import List from '../components/List'

class Menu extends Component {

  render() {
    return (
      <div id="menu-container">
      {
        this.props.filtered.length > 0 ?

        <List
        openProfile={this.props.openProfile}
        filtered={this.props.filtered}
        />
        :
        <div>
          <h1>hello jello</h1>
        </div>
      }
      </div>
    );
  }

}

export default Menu;
