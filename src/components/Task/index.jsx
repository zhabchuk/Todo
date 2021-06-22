import React from 'react';
import { CaButton } from '../CaBatton';
import { Input } from '../Input';
import { ListGroup } from 'react-bootstrap';
import './style.css'

export const Task = ({ todos, change, handlerChangeInput, handlerAddTodo, handlerDeleteTodo }) => {
    return <div className='task'>
        <Input placeholder='Add task' value={change} onChange={(e) => handlerChangeInput(e)}/>
        <CaButton title='Add task' variant="warning" onClick={handlerAddTodo}/>
        <ListGroup>
            {todos.task.map((item) => {
                return <ListGroup.Item key={item.id} className='task__item'>
                    {item.title}
                    <CaButton title='Delete' variant='danger' onClick={() => handlerDeleteTodo(item.id)}/>
                </ListGroup.Item>
             })}
        </ListGroup>
    </div>
};