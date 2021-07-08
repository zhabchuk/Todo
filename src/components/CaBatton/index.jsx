import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CaButton = ({ onClick, title, variant }) => {
    return <Button variant={variant} onClick={onClick}>{title}</Button>
};

CaButton.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    variant: PropTypes.string
}