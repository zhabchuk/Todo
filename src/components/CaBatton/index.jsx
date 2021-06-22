import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CaButton = ({ onClick, title, variant }) => {
    return <Button variant={variant} onClick={onClick}>{title}</Button>
};