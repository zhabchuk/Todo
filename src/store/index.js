import { combineReducers } from "redux";
import categoryReducer from "./category";
import modalsReducer from "./modals";
import taskReducer from "./todos";


const rootReducer = combineReducers({
    task: taskReducer,
    category: categoryReducer,
    modals: modalsReducer
});

export default rootReducer;