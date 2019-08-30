import React, { Component } from 'react';
import Search from './components/Search'
import BoroughFilter from './components/BoroughFilter'
import Locations from './containers/Locations'
import './styles/App.scss'
import './styles/BoroughFilter.scss'


class App extends Component {

  state = {
    all_locations: [],
    search_filter: null
  }

  componentDidMount(){
    fetch('https://data.cityofnewyork.us/resource/4kpn-sezh.json')
    .then(r => r.json())
    .then(data => {
      this.setState({
        all_locations: data
      })
    })
  }

  locationFilter = (e) => {
    this.setState({
      search_filter: e.target.value
    })
  }

  render(){
      return (
        <div className="App">
          <h1 id="search-header"> NYC Free Condom Finder</h1>
          <Search 
            locationFilter={this.locationFilter}
            all_locations={this.state.all_locations}/>
          <Locations search_filter={this.state.search_filter}/>
          <BoroughFilter />
        </div>
      );
    }
  }

export default App;
