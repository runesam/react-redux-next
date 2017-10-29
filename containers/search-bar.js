import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ''
        };
    }
    onInpuChange(e) {
        this.setState({
            keyWord: e.target.value
        });
    }
    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.keyWord).then().catch(reason => console.log(reason));
        this.setState({ keyWord: '' });
    }
    render() {
        return (
            <form className='search-form' onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    type='text'
                    value={this.state.keyWord}
                    onChange={this.onInpuChange.bind(this)}
                    placeholder='Get a five-day forecast in your favorite cities'
                />
                <button type='submit'>
                    Search
                </button>
            </form>
        );
    }
}

function mapDispatchesToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchesToProps)(SearchBar);
