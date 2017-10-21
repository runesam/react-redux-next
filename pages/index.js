import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import BooksList from './../containers/books-list';
import reducer from './../reducers';

import stylesheet from '../styles/index.scss';

class Home extends Component {
    componentWillMount() {
        this.store = createStore(reducer);
    }
    render() {
        return (
        <div className="home_page">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />            
            home page we are
            <Provider store={this.store}>
            <BooksList />
            </Provider>
        </div>
        );
    }
}
export default Home;
