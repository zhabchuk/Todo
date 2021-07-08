import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ checked, onChange, className }) {
    return <input type="checkbox" checked={checked} onChange={(e) => onChange(e)} className={className} />
};

Checkbox.propTypes = {
    checked: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
}