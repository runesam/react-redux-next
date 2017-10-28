import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { createPost } from '../actions/index';
import FormFeild from './form_field';

class PostsNew extends Component {
    render() {
        const { fields, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create A new Post</h3>
                <Field name={fields[0]} type='text' component={FormFeild} label={fields[0]} element='input' />
                <Field name={fields[1]} type='text' component={FormFeild} label={fields[1]} element='input' />
                <Field name={fields[2]} component={FormFeild} label={fields[2]} element='textarea' />
                <br />
                <button type='submit' className='btn btn-primary'>Submit</button>
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
