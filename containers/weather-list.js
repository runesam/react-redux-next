import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderCityRow() {
        if (!this.props.weather) {
            return <tr>No Cities To Show Yet!</tr>;
        }

        return this.props.weather.map((value, key) => (
            <tr key={key}>
                <td>{value.city.name}</td>
            </tr>
        ));
    }
    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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
