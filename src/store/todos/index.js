const initState = {
    task:[]
};

const actionType = {
    ADD_TASK:'ADD_TASK',
    DELEIE_TASK:'DELETE_TASK'
};

export const actionCreateTodo = (payload) => {
    return {
        type: actionType.ADD_TASK,
        payload
    }
};

export const actionDeleteTodo = (payload) => {
    return {
        type: actionType.DELEIE_TASK,
        payload
    }
};

export default function taskReducer(state=initState, action) {
    switch(action.type) {
        case actionType.ADD_TASK:
            return {...state, task:[...state.task, action.payload]}
        case actionType.DELEIE_TASK:
            return {...state, task: state.task.filter((item) => item.id !==action.payload)}
            default:
                return state;
    }
};