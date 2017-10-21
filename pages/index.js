import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import BooksList from './../containers/books-list';
import BookDetail from './../containers/book-detail';
import reducer from './../reducers';

import stylesheet from '../styles/index.scss';

class Home extends Component {
    componentWillMount() {
        this.store = createStore(reducer);
    }
    render() {
        return (
            <Provider store={this.store}>
                <div className="home_page">
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />            
                    <BooksList />
                    <BookDetail />            
                </div>
            </Provider>
        );
    }
}
export default Home;
