import React, { Component } from 'react';

import { connect } from 'react-redux';

class WeatherList extends Component{
  renderList(cityData){
    console.log("City Data", cityData);
    return(
      <tr key={cityData.id}>
        <td>
          {cityData.name}
        </td>
        <td>
          {cityData.main.temp}
        </td>
        <td>
          {cityData.main.pressure}
        </td>
        <td>
          {cityData.main.humidity}
        </td>
      </tr>
    )
  }
  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderList)}
        </tbody>
      </table>
    )
  }
}

function mapsToProps({weather}){
  return {weather};
}
export default  connect( mapsToProps )( WeatherList );
