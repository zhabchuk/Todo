import React from 'react';
import { CaButton } from '../../CaBatton';
import { Input } from '../../Input/index';
import PropTypes from 'prop-types';

import './style.scss'

export default function ModalEditTask({ 
    value, 
    handlerChangeInput, 
    hideModal, 
    handlerEditTask }) {
    return (
    <div className='mod-edit'>
        <div className='mod-edit__wrapper'>
            <Input placeholder='Edit task' className='mod-edit__input' value={value} onChange={(e) => handlerChangeInput(e)}/>
            <div className='mod-edit__group'>
                <CaButton title='Save' variant='outline-primary' onClick={handlerEditTask}/>
                <CaButton title='Cancel' variant='outline-danger' onClick={hideModal}/>
            </div>
        </div>
    </div>
    )
}

ModalEditTask.propTypes = {
    value: PropTypes.string,
    handlerChangeInput: PropTypes.func,
    hideModal: PropTypes.func,
    handlerEditTask: PropTypes.func
}

