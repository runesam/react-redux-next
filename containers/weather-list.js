import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './../components/chart';
import GoogleMap from './../components/google_map';


class WeatherList extends Component {
    renderProperties(data) {
        console.log(data);
        return data.map((property, key) => (
            <td key={key}>
                <Chart data={property.data} color={property.color} />
            </td>
        ));
    }
    renderCityRow() {
        if (!this.props.weather) {
            return <tr>No Cities To Show Yet!</tr>;
        }
        return this.props.weather.map((value, key) => {
            const Temp = {};
            Temp.data = value.list.map(item => item.main.temp);
            Temp.color = 'red';
            const Pressure = {};
            Pressure.data = value.list.map(item => item.main.pressure);
            Pressure.color = 'blue';
            const Humidity = {};
            Humidity.data = value.list.map(item => item.main.humidity);
            Humidity.color = 'green';
            const properties = [Temp, Pressure, Humidity];
            return (
                <tr key={key}>
                    {/* <td>{value.city.name}</td> */}
                    <td>
                        <GoogleMap lon={value.city.coord.lon} lat={value.city.coord.lat} />
                    </td>
                    {this.renderProperties(properties)}
                </tr>
            );
        });
    }
    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp (k)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCityRow()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
