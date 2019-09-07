import React, { Component } from 'react';

import List from '../components/List'

class Menu extends Component {

  render() {
    return (
      <div id="menu-container">
      <List
        openProfile={this.props.openProfile}
        filtered={this.props.filtered}
        />
      </div>
    );
  }

}

export default Menu;
