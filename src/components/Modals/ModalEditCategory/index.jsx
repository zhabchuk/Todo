import React from 'react';
import { Task } from '../../Task';
import Image from '../../Image';
import PropTypes from 'prop-types';
import { closeIcon } from '../../../stitic';
import { Input } from '../../Input';

import Checkbox from '../../Checkbox';
import Textarea from '../../Textarea'
import { CaButton } from '../../CaBatton'

import './style.scss';

export default function ModalEditCategory({
    todos,
    name,
    value,  
    title, 
    handlerTransferCategory,
    hideModalCategory, 
    handlerChangeInputValue, 
    handlerModalCheckbox,
    handlerChangeTextarea, 
    updateCategoy,
    isChecked, 
    description, }) {
    return (
        <div className='edit__category'>
            <div className='edit__category-wrapper'>
                <div className='edit__category-header'>
                    <div className='edit__category-title'>
                        Вы редактируете категорию <strong>{title}</strong>
                    </div>
                    <Image src={closeIcon} alt='close' className='edit__category-image' onClick={hideModalCategory}/>
                </div>
                <div className='edit__category-main'>
                    <div className='edit__category-content'>
                        <div className='edit__category-group'>
                            <Task todos={todos} name={name} handlerTransferCategory={handlerTransferCategory}/>
                        </div>
                        <div className='edit__category-right'>
                            <Input className='edit__category-input' placeholder='Edit category' value={value} onChange={(e) => handlerChangeInputValue(e)}/>
                            <Checkbox checked={isChecked} onChange={(e) => handlerModalCheckbox(e)}/>
                            <Textarea value={description} className='edit__category-text' onChange={(e) => handlerChangeTextarea(e)}/>
                            <div className='edit__category-btn'>
                                <CaButton variant='light' title='Save' onClick={updateCategoy}/>
                                <CaButton variant='dark' title='Cancel' onClick={hideModalCategory}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalEditCategory.propTypes = {
    todos: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.string,   
    title: PropTypes.string,
    handlerTransferCategory: PropTypes.func,
    hideModalCategory: PropTypes.func, 
    handlerChangeInputValue: PropTypes.func, 
    handlerModalCheckbox: PropTypes.func,
    handlerChangeTextarea: PropTypes.func, 
    updateCategoy: PropTypes.func,
    isChecked: PropTypes.string,
    description: PropTypes.string

}