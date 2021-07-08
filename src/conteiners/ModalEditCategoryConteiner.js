import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ModalEditCategory from '../components/Modals/ModalEditCategory';
import { actionTransferCategoey, actionUpdateCategory } from '../store/category';
import { getCategory } from '../store/category/selectors';
import { actionHideModal } from '../store/modals';
import { getTodos } from '../store/todos/selectors';

export default function ModalEditCategoryConteiner({ name, categoryId }) {

    const todos = useSelector((state) => getTodos(state));

    const { category } = useSelector((state) => getCategory(state));

    const findCategory = category.find((item) => item.id === categoryId);

    const [isChecked, setIsChecked] = useState(findCategory.checked)

    const [description, setDescription] = useState(findCategory.description)

    const [value, setValue] = useState(findCategory.title)

    const dispatch = useDispatch();

    const history = useHistory();
    
    const hideModalCategory = () => {
        dispatch(actionHideModal());
    };

    const handlerChangeInputValue = (e) => {
        setValue(e.target.value)
    }

    const handlerTransferCategory = (taskId) => {
        const data = {
            taskId,
            categoryId
        }
        dispatch(actionTransferCategoey(data));
        history.push(`/todo/${taskId}`);
        hideModalCategory();
    };

    const handlerModalCheckbox = (e) => {
        setIsChecked(e.target.checked)
    };

    const handlerChangeTextarea = (e) => {
        setDescription(e.target.value)
    };

    const updateCategoy = () => {
        const data = {
            title: value,
            checked: isChecked,
            description,
            categoryId 
        }
        dispatch(actionUpdateCategory(data));
        hideModalCategory();
    };

    return <ModalEditCategory
    {...findCategory}
    todos={todos}
    IsChecked={isChecked}
    value={value}
    name={name}
    description={description}
    categoryId={categoryId}
    updateCategoy={updateCategoy}
    handlerChangeTextarea={handlerChangeTextarea}
    handlerModalCheckbox={handlerModalCheckbox}
    handlerChangeInputValue={handlerChangeInputValue}
    hideModalCategory={hideModalCategory}
    handlerTransferCategory={handlerTransferCategory}/>
}