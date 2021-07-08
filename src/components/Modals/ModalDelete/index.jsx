import React from 'react';
import './style.scss';
import { CaButton } from '../../CaBatton';
import PropTypes from 'prop-types';

export default function ModalDelete({ title, handlerDeleteTodo, handlerHideModal }) {

    return (<div className='mod-delete'>
        <div className='mod-delete__wrapper'>
            <p>Вы действительно хотите удалить <strong>{title}</strong>?</p>
            <div className='mod-delete__wrapper-btn'>
                <CaButton title='Delete'  variant='danger' onClick={handlerDeleteTodo}/>
                <CaButton title='Cancel' variant='success' onClick={handlerHideModal}/>
            </div>
            
        </div>
        </div>
    )
};

ModalDelete.propTypes = {
    title: PropTypes.string,
    handlerDeleteTodo: PropTypes.func,
    handlerHideModal: PropTypes.func
}