import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';

import { fetchPosts, deletePost } from '../actions/index';

import Loader from './loader';

class PostsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: false,
            noData: true,
            loading: true
        };
    }
    componentWillMount() {
        this.props.fetchPosts().then(() => this.updateStates());
    }
    componentWillReceiveProps(data) {
        if (window.location.pathname !== '/blogger') {
            return Router.push('/blogger');
        }
        if (data.posts.length > 0) {
            return this.setState({ noData: false });
        }
    }
    updateStates() {
        this.setState({
            loading: false
        });
    }
    handleDeletePost(id) {
        this.setState({ loading: true });          
        this.props.deletePost(id).then(() => {
            this.props.fetchPosts().then(() => this.updateStates());            
        });
    }
    renderLoader() {
        return this.state.loading ? <Loader /> : false; 
    }
    renderPostsSection() {
        if (!this.state.noData && !this.state.loading) {
            return (
                <div>
                    <h3>Posts</h3>
                    <ul className='list-group'>
                        {this.renderPosts()}
                    </ul>
                </div>
            );
        }
        return this.state.response ? <h3>No Posts to show yet!. Give it a try and add a new one</h3> : false;
    }
    renderPosts() {
        return this.props.posts.map(post => (
            <li className='list-group-item' key={post.id} >
                <button className='btn btn-danger' onClick={this.handleDeletePost.bind(this, post.id)}>X</button>
                <span className='pull-xs-right'>{post.categories}</span>
                <Link prefetch href={{ pathname: '/blogger', query: { route: 'post', id: post.id } }} as={`/blogger/post/${post.id}`}>                
                    <a>
                        <strong>{post.title}</strong>
                    </a>
                </Link>
            </li>
        ));
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

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostsIndex);
