import React, { Component } from 'react';
import Search from './components/Search'
import BoroughFilter from './components/BoroughFilter'
import Locations from './containers/Locations'
import Menu from './containers/Menu'

import './styles/App.scss'
import './styles/BoroughFilter.scss'


class App extends Component {

  state = {
    all_locations: [],
    search_filter: null,
    borough_filter: []
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

  boroughFilter = (e) => {
    const filtered = this.state.all_locations.filter(l => {
      return l.borough === e.target.id
    })

    let uniq = []

    for(let i = 0; i < filtered.length; i++) {
      let n = filtered[i].facilityname
      if(i + 1 === filtered.length) {
        console.log('fuck you')
      } else {
        if(filtered[i + 1].facilityname === n) {
          console.log(filtered[i])
        }
      }
    }

    this.setState({
      borough_filter: filtered
    })
  }

  openProfile = (e) => {
    console.log(e.target.key)
  }

  render(){
      return (
        <div className="App">
          <h1 id="search-header"> NYC Free Condom Finder</h1>
          <BoroughFilter boroughFilter={this.boroughFilter}/>
          <Search
            locationFilter={this.locationFilter}
            all_locations={this.state.all_locations}/>
          <Locations search_filter={this.state.search_filter}/>
          <Menu
            filtered={this.state.borough_filter}
            openProfile={this.openProfile}
          />
        </div>
      );
    }
  }

export default App;
