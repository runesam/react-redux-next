import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link prefetch href={{ pathname: '/blogger', query: { route: 'new' } }} as='/blogger/new'>
                        <a className='btn btn-primary'>Add a post</a>
                    </Link>
                </div>
                posts list
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostsIndex);
