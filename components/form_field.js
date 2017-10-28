import React from 'react';

const FormFeild = ({
    label,
    element,
    input,
    placeholder,
    type,
    meta: { touched, error, warning }
}) => {
    const CustomTag = element;
    return (
        <div>
            <div className='form-group'>
                <h5>{label}</h5>
                <CustomTag {...input} placeholder={placeholder} type={type || ''} className='form-control' />
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
};

export default FormFeild;
