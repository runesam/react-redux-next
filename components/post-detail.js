import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';

import { fetchPost, deletePost } from '../actions/index';

import Loader from './loader';

class PostDetail extends Component {
    state= {
        response: false,
        error: false
    }
    componentWillMount() {
        this.props.fetchPost(this.props.id).then((response) => this.updateStates(response));
    }
    updateStates(response) {
        if (!response.payload.status && response.payload.response.status === 404) {
            this.setState({ error: 404 });
            setTimeout(() => {
                Router.push('/blogger');
            }, 3000);
        }
        this.setState({ response: true });
    }
    handleDeletePost() {
        this.props.deletePost(this.props.id).then(() => Router.push('/blogger'));
    }
    render() {
        if (!this.state.response || (!this.props.post && !this.state.error)) {
            return <Loader />;
        } else if (this.state.error) {
            return <h1>{this.state.error}</h1>;
        }
        return (
            <div className='post-detail'>
                <h3>{this.props.post.title}</h3>
                <h6>{this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
                <hr />
                <Link prefetch href={{ pathname: '/blogger' }} as='/blogger'>
                    <a className='btn btn-warning'>Back TO Posts List</a>
                </Link>
                <a className='btn btn-danger' onClick={this.handleDeletePost.bind(this)}>Delete This Post</a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDetail);
