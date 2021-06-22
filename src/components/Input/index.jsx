import React from 'react';

export const Input = ({ placeholder, value, onChange }) => {
    return <input placeholder={placeholder} value={value} onChange={(e) => onChange(e)}/>
};