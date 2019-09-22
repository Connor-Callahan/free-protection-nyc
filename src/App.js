import React, { Component } from 'react';
import Search from './components/Search'
import BoroughFilter from './components/BoroughFilter'
import SimpleMap from './components/SimpleMap'
import Locations from './containers/Locations'
import Menu from './containers/Menu'

import './styles/App.scss'
import './styles/BoroughFilter.scss'


class App extends Component {

  state = {
    all_locations: [],
    search_filter: null,
    borough_filter: [],
    location: null,
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

    filtered.forEach(j => {
      let facilityname = j.facilityname
      let foundLocation = uniq.find(l => {
        return l.facilityname === facilityname
      })
      if(foundLocation) {
        console.log('found')
      } else {
        uniq.push(j)
      }
    })

    this.setState({
      borough_filter: uniq
    })
  }

  openProfile = (e) => {
    let profile = this.state.borough_filter.find(l => {
      return l.facilityname === e.target.id
    })
    if(this.state.location === e.target.id) {
      this.setState({
        location: null
      })
    } else {
      this.setState({
        location: profile
      })
    }
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
          <SimpleMap />
          <Menu
            filtered={this.state.borough_filter}
            openProfile={this.openProfile}
          />
        </div>
      );
    }
  }

export default App;
