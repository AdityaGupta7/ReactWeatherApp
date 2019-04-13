import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData){//we are now one level inside the 'weather' array
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return(
    <tr key={cityData.city.name}>{/* we add key to the top level component*/}
      <td>{cityData.city.name}</td>
      <td>
        {/*if we ever begin to see replicate our markup(html/es6) repeat, we should make it a new component/
          container and make it a separate reusable functionality*/}
        <Chart data={temps} color="orange" />
      </td>
      <td>
        <Chart data={pressures} color="green" />
      </td>
      <td>
        <Chart data={humidities} color="blue" />
      </td>
    </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){//same as const weather = state.weather
  return(
    {weather} //returning {weather : weather}
  );
}

export default connect(mapStateToProps)(WeatherList);
