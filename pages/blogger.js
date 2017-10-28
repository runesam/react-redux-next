import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import PostsIndex from './../components/posts_index';

import reducer from './../reducers';

import stylesheet from '../styles/blogger.scss';

class Blogger extends Component {
    componentWillMount() {
        this.store = applyMiddleware(promise)(createStore);
        console.log(this.props);
    }
    render() {
        return (
            <Provider store={this.store(reducer)}>
                <div className="blogger-app">
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <PostsIndex />
                </div>
            </Provider>
        );
    }
}
export default Blogger;
