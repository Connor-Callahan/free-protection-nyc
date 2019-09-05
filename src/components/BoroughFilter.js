import React from 'react'
import '../styles/App.scss'


const BoroughFilter = (props) => (
    <div id="btn-container">
      <button onClick={props.boroughFilter} id='Bronx' className="borough-btn">Bronx</button>
      <button onClick={props.boroughFilter} id='Brooklyn'className="borough-btn">Brooklyn</button>
      <button onClick={props.boroughFilter} id='Manhattan'className="borough-btn">Manhattan</button>
      <button onClick={props.boroughFilter} id='Queens'className="borough-btn">Queens</button>
      <button onClick={props.boroughFilter} id='Staten Island'className="borough-btn">Staten Island</button>
    </div>
);

export default BoroughFilter
