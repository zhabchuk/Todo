import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ placeholder, value, onChange, className }) => {
    return <input placeholder={placeholder} value={value} onChange={(e) => onChange(e)} className={className}/>
};

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string
}