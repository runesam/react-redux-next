import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import Header from './../components/head';

import PostsIndex from './../components/posts_index';
import PostsNew from './../components/posts_new';

import reducer from './../reducers';

import stylesheet from '../styles/blogger.scss';

class Blogger extends Component {
    static async getInitialProps({ req }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        return { userAgent };
    }
    componentWillMount() {
        this.store = applyMiddleware(promise)(createStore);
        console.log(this.props);
    }
    renderNestedComponent() {
        switch (this.props.url.query.route) {
            case 'new': return <PostsNew />;
            default: return <PostsIndex />;
        }
    }
    render() {
        return (
            <Provider store={this.store(reducer)}>
                <div className="blogger-app">
                    <Header />
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    {this.renderNestedComponent()}
                </div>
            </Provider>
        );
    }
}
export default Blogger;
