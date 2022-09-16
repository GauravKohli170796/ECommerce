import { combineReducers, createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { drawerReducer } from "./reducers/drawerReducer";

const middlewares = [];

const reducer = combineReducers({
    drawer:drawerReducer
});

export const store = createStore(reducer,composeWithDevTools(applyMiddleware()));