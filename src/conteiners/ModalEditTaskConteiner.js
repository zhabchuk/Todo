import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalEditTask from '../components/Modals/ModalEditTask';
import { actionHideModal } from '../store/modals';
import { actionEditTask } from '../store/todos';
import { getTodos } from '../store/todos/selectors';

export default function ModalEditTaskConteiner({ taskId }) {

const { task } = useSelector((state) => getTodos(state));

const dispatch = useDispatch();

const findTask = task.find((item) => item.id === taskId);

const [value, setValue] = useState(findTask.title);

const handlerChangeInput = (e) => {
    setValue(e.target.value)
};

const hideModal = () => {
    dispatch(actionHideModal())
};

const handlerEditTask = () => {
    const data = {
        title: value,
        taskId
    }
    dispatch(actionEditTask(data));
    hideModal()
};

    return <ModalEditTask 
    findTask={findTask}
    value={value}
    hideModal={hideModal}
    handlerChangeInput={handlerChangeInput}
    handlerEditTask={handlerEditTask}/>
};