import React from 'react';
import { CaButton } from '../CaBatton';
import { Input } from '../Input';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteIcon, editIcon, transferIcon } from '../../stitic';
import Image from '../Image';
import './style.scss'

export const Task = ({ 
    todos, 
    name, 
    change, 
    handlerChangeInput,
    handlerTransferCategory, 
    handlerAddTodo, 
    handlerDeleteTodo, 
    saveTodoLocalStorage, 
    removeAllTodoLocalStorage, 
    showModalEditTask }) => {
    return <div className='task'>
        {! name ? <> <Input className='task__input' placeholder='Add task' value={change} onChange={(e) => handlerChangeInput(e)}/>
        <div className='task__btn'>
            <CaButton title='Add task' variant="warning" onClick={handlerAddTodo}/>
        </div>
        </> : null}
        <ListGroup className='task__listgroup'>
            {todos.task.length ? todos.task.map((item) => {
                return <ListGroup.Item key={item.id} className='task__item'>
                            <Link to={`/todo/${item.id}/${item.title}`} key={item.id}>
                                {item.title}
                            </Link>
                                { !name ? <div className='task__group-img'>
                                    <Image src={editIcon} alt='edit' onClick={() => showModalEditTask(item.id)}/>
                                    <Image src={deleteIcon} alt="delete" onClick={() => handlerDeleteTodo(item.id, item.title)} />
                                </div> : <Image src={transferIcon} alt='transfer' onClick={() => handlerTransferCategory(item.id)}/>}
                        </ListGroup.Item>
             }) : null}
        </ListGroup>
        { !name ? <div className='task__group-btn'>
            <CaButton title='Save Todo' onClick={saveTodoLocalStorage}/>
            <CaButton title='Remove All Todo'onClick={removeAllTodoLocalStorage}/>
        </div> : null}
    </div>
};
Task.propTypes = {
    todos: PropTypes.object,
    change: PropTypes.string,
    name: PropTypes.string,
    removeAllTodoLocalStorage: PropTypes.func,
    saveTodoLocalStorage: PropTypes.func,
    handlerChangeInput: PropTypes.func,
    handlerAddTodo: PropTypes.func,
    handlerDeleteTodo: PropTypes.func,
    showModalEditTask: PropTypes.func,
    handlerTransferCategory: PropTypes.func
}