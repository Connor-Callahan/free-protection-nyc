import React from 'react'
import '../styles/App.scss'


const BoroughFilter = (props) => (
    <div id="btn-container">
      <button className="borough-btn">Bronx</button>
      <button className="borough-btn">Brooklyn</button>
      <button className="borough-btn">Manhattan</button>
      <button className="borough-btn">Queens</button>
      <button className="borough-btn">Staten Island</button>
    </div>
);

export default BoroughFilter
