import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: false
        };
    }
    componentWillMount() {
        this.props.fetchPosts().then(() => this.setState({ response: true }));
    }
    renderLoader() {
        if (!this.state.response) {
            return (
                <div className='loader loader1'>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    renderPostsSection() {
        if (this.state.response) {
            return (
                <div>
                    <h3>Posts</h3>
                    <ul className='list-group'>
                        {this.renderPosts()}
                    </ul>
                </div>
            );
        }
    }
    renderPosts() {
        if (this.state.response) {
            return this.props.posts.map(post => (
                <li className='list-group-item' key={post.id}>
                    <button className='btn btn-danger'>X</button>
                    <span className='pull-xs-right'>{post.categories}</span>
                    <strong>{post.title}</strong>
                </li>
            ));
        }
    }
    render() {
        return (
            <div className='posts-list'>
                <div className='text-xs-right'>
                    <Link prefetch href={{ pathname: '/blogger', query: { route: 'new' } }} as='/blogger/new'>
                        <a className='btn btn-primary'>Add a post</a>
                    </Link>
                </div>
                {this.renderLoader()}
                {this.renderPostsSection()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
