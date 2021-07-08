import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { Category } from '../components/Category';
import { actionCreateCategory, actionEditCategory, actionRemoveCategory } from '../store/category';
import { getCategory } from '../store/category/selectors';
import { actionShowModal } from '../store/modals';

export default function CategoryConteiner() {
    const { category } = useSelector((state) => getCategory(state));
    const location = useLocation();
    const getValueSearch = new URLSearchParams(location.search).get('search');
    const filterCategoryTitle = getValueSearch ? category.filter((item) => item.title.toLowerCase().includes(getValueSearch.toLowerCase())) : category;
    const match = useRouteMatch('/todo/:id');
    const todoId = +match?.params.id;
    const [value, setValue] = useState('');

    const handlerChangeInput = (e) => {
        setValue(e.target.value)
    }
    const dispatch = useDispatch();

    const handlerCreateCategory = () => {
        const data = {
            title: value,
            checked: false,
            id: Date.now(),
            todoId,
            description: ''
        };
        if(!value) {
            return console.log('Поле пустое');
        }
        dispatch(actionCreateCategory(data))
        setValue('')
    };

    const handlerEditCategoryChecked = (e, categoryId) => {
        const data = {
            checked: e.target.checked,
            id: categoryId
        }
        dispatch(actionEditCategory(data))
    };

    const handlerRemoveCategory = (categoryId) => {
        dispatch(actionRemoveCategory(categoryId))
    };

    const showModalCategory = (categoryId) => {
        dispatch(actionShowModal({ name: 'ModalEditCategory', categoryId }))
    }
    return <Category
    category={filterCategoryTitle}
    todoId={todoId}
    value={value}
    handlerChangeInput={handlerChangeInput}
    handlerCreateCategory={handlerCreateCategory}
    handlerEditCategoryChecked={handlerEditCategoryChecked}
    handlerRemoveCategory={handlerRemoveCategory}
    showModalCategory={showModalCategory}/>
};