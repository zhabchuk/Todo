const initState = {
    category:[]
};

const actionType = {
    CREATE_CATEGORY:'CREATE_CATEGORY',
    EDIT_CHACKED_CATEGORY: 'EDIT_CHACKED_CATEGORY',
    REMOVE_CATEGORY:'REMOVE_CATEGORY',
    TRANSFER_CATEGORY: 'TRANSFER_CATEGORY',
    UPDATE_CATEGORY: 'UPDATE_CATEGORY'
};

export const actionCreateCategory = (payload) => {
    return {
        type: actionType.CREATE_CATEGORY,
        payload
    }
};

export const actionEditCategory = (payload) => {
    return {
        type: actionType.EDIT_CHACKED_CATEGORY,
        payload
    }
};

export const actionRemoveCategory = (payload) => {
    return {
        type: actionType.REMOVE_CATEGORY,
        payload
    }
};

export const actionTransferCategoey = (payload) => {
    return {
        type: actionType.TRANSFER_CATEGORY,
        payload
    }
};

export const actionUpdateCategory = (payload) => {
    return {
        type: actionType.UPDATE_CATEGORY,
        payload
    }
};

export default function categoryReducer(state=initState, action) {
    switch(action.type) {
        case actionType.CREATE_CATEGORY:
            return {...state, category:[...state.category, action.payload]}
        case actionType.EDIT_CHACKED_CATEGORY:
            return {...state, category: state.category.map((item) => item.id === action.payload.id ? {...item, ...action.payload} : item)}
        case actionType.REMOVE_CATEGORY:
            return {...state, category: state.category.filter((item) => item.id !==action.payload)}
        case actionType.TRANSFER_CATEGORY:
            return {...state, category: state.category.map((item) => item.id === action.payload.categoryId ? {...item, todoId: action.payload.taskId} : item)}
        case actionType.UPDATE_CATEGORY:
            return {...state, category: state.category.map((item) => item.id === action.payload.categoryId ? {...item, ...action.payload} : item)}
            default:
                return state;
    }
};