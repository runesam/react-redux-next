import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
        const { fields, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create A new Post</h3>
                <div className='form-froup'>
                    <h5>Title</h5>
                    <Field name={fields[0]} component='input' type='text' className='form-control' />
                </div>
                <div className='form-froup'>
                    <h5>categories</h5>
                    <Field name={fields[1]} component='input' type='text' className='form-control' />                    
                </div>
                <div className='form-froup'>
                    <h5>content</h5>
                    <Field name={fields[2]} component='textarea' type='text' className='form-control' />                    
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        );
    }
}

export default connect(null, { createPost })(reduxForm({ form: 'PostNew', fields: ['title', 'categories', 'content'] })(PostsNew));
