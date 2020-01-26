import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import converterReducer from "./exchange-reducer";

const reducers = combineReducers ({
    data: converterReducer
    });

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store
