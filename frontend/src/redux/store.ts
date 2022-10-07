import { combineReducers, createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { drawerReducer } from "./reducers/drawerReducer";
import { filterReducer } from "./reducers/filterReducer";
import { productReducer } from "./reducers/productReducer";
import thunk,{ThunkMiddleware} from 'redux-thunk'



const reducer = combineReducers({
    drawer: drawerReducer,
    filter: filterReducer,
    product: productReducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
