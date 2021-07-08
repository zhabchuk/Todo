import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ src, alt, onClick, className }) {
    return <img src={src} alt={alt} onClick={onClick} className={className}/>
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}