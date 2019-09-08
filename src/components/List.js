import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <div id="list-container">
      {
        this.props.filtered.length > 0 ?
        this.props.filtered.map(l => {
          return <div className="location"
                key={Math.random()}>
            <h2 onClick={this.props.openProfile}
              id={l.facilityname}
            >
            ˅
            </h2>
            <h1>{l.facilityname}</h1>
              <p className="address">{l.address}</p>
              <p className="zip">{l.zipcode}</p>
              <p className="phone"> ☎︎ :  {l.phone}</p>
          </div>

        })
        :
        <h1>shit</h1>

      }
      </div>
    );
  }

}

export default List;
