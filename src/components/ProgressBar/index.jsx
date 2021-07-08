import React from 'react';
import './style.scss'
import PropsTypes from 'prop-types'

export default function ProgressBar({ complitedCategory }) {
    return (
        <div className="progressbar">
            <div className="progressbar__active" style={{ width: `${complitedCategory || 0}%` }}></div>
        </div>
    )
};

ProgressBar.propsTypes = {
    complitedCategory: PropsTypes.number
}