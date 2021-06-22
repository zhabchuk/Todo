import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../components/Task';
import { actionCreateTodo, actionDeleteTodo } from '../store/todos';

export default function TaskConteiner() {
    const todos = useSelector(state => state.task);

    const [change, setChange] = useState('');

    const handlerChangeInput = (e) => {
        setChange(e.target.value)
    }
    const dispatch = useDispatch();

    const handlerAddTodo = () => {
        const data = {
            title: change,
            id: Date.now()
        }
        dispatch(actionCreateTodo(data))
        setChange('')
    };

    const handlerDeleteTodo = (payload) => {
        dispatch(actionDeleteTodo(payload))
    }
    return <Task
    todos={todos}
    change={change}
    handlerChangeInput={handlerChangeInput}
    handlerAddTodo={handlerAddTodo}
    handlerDeleteTodo={handlerDeleteTodo}/>
};