import { combineReducers, createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { drawerReducer } from "./reducers/drawerReducer";
import { filterReducer } from "./reducers/filterReducer";

const middlewares = [];

const reducer = combineReducers({
    drawer: drawerReducer,
    filter:filterReducer
});

export const store = createStore(reducer,composeWithDevTools(applyMiddleware()));