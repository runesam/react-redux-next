import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Router from 'next/router';
import Link from 'next/link';

import { createPost } from '../actions/index';
import FormFeild from './form_field';

class PostsNew extends Component {
    onSubmit(props) {
        this.props.createPost(props).then(response => {
            if (response.payload.status === 201) {
                return Router.push('/blogger');
            }
            console.log(response);
        }).catch(reason => console.log(reason));
    }
    render() {
        const { fields, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='new-post'>
                <h3>Create A new Post</h3>
                <Field name={fields[0]} type='text' component={FormFeild} label={fields[0]} element='input' />
                <Field name={fields[1]} type='text' component={FormFeild} label={fields[1]} element='input' />
                <Field name={fields[2]} component={FormFeild} label={fields[2]} element='textarea' />
                <br />
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link prefetch href={{ pathname: '/blogger' }} as='/blogger'>
                    <a className='btn btn-danger'>Cancel</a>
                </Link>
            </form>
        );
    }
}

const fields = ['title', 'categories', 'content'];
function validate(values) {
    const errors = {};    
    fields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'This Field is Required';
        }
    });
    return errors;
}

export default connect(null, { createPost })(reduxForm({ form: 'PostNew', fields, validate })(PostsNew));
