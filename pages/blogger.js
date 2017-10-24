import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import BooksList from './../containers/books-list';
// import BookDetail from './../containers/book-detail';
import reducer from './../reducers';

import stylesheet from '../styles/blogger.scss';

class Blogger extends Component {
    componentWillMount() {
        this.store = createStore(reducer);
        console.log(this.props);
    }
    render() {
        return (
            <Provider store={this.store}>
                <div className="blogger-app">
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                </div>
            </Provider>
        );
    }
}
export default Blogger;
