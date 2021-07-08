import React from 'react';
import { CaButton } from '../CaBatton';
import { Input } from '../Input';
import Image from '../Image';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { editIcon } from '../../stitic';
import Checkbox from '../Checkbox';

import './style.scss'

export const Category = ({ 
    category, 
    value, 
    todoId, 
    handlerChangeInput, 
    handlerCreateCategory, 
    handlerRemoveCategory, 
    handlerEditCategoryChecked, 
    showModalCategory }) => {
    return (
    <div className='category'>
        <Input className='category__input' placeholder='Add category' value={value} onChange={(e) => handlerChangeInput(e)}/>
        <div className='category__btn'><CaButton title='Add category' variant="warning" onClick={handlerCreateCategory}/></div>
        <ListGroup>
            {category.map((item) => {
                return item.todoId === todoId ? <ListGroup.Item key={item.id} className='category__item'>
                    {item.title}
                    <div className='category__group'>
                        <Image src={editIcon} className='category__group-img' alt="edit" onClick={() => showModalCategory(item.id)}/>
                        <Checkbox className='category__group-chbx' checked={item.checked} onChange={(e) => handlerEditCategoryChecked(e, item.id)} />
                        <CaButton title='Delete' variant='danger' onClick={() => handlerRemoveCategory(item.id)}/>
                    </div>
                </ListGroup.Item> : null
             })}
        </ListGroup>
    </div>
    )
};
Category.propTypes = {
    category: PropTypes.array,
    todoId: PropTypes.number,
    value: PropTypes.string,
    handlerChangeInput: PropTypes.func,
    handlerCreateCategory: PropTypes.func,
    handlerRemoveCategory: PropTypes.func,
    handlerEditCategoryChecked: PropTypes.func,
    showModalCategory: PropTypes.func
}