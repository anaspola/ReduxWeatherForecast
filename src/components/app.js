import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <div className="col-xs-12">
          <WeatherList />
        </div>

      </div>
    );
  }
}
