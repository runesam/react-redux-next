import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RecuxPromise from 'redux-promise';

import stylesheet from '../styles/weather.scss';
import Header from './../components/head';

import SearchBar from './../containers/search-bar';
import WeatherList from './../containers/weather-list';

import reducer from './../reducers';

class WeatherApp extends Component {
    componentWillMount() {
        this.store = applyMiddleware(RecuxPromise)(createStore);
    }
    render() {
        return (
            <Provider store={this.store(reducer)}>
                <div className='weather-app'>
                    <Header />
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <SearchBar />
                    <br />
                    <WeatherList />
                </div>
            </Provider>
        );
    }
}

export default WeatherApp;
