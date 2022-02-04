import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddlware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import submiteReducer from "./submite-reducer";


let reduces = combineReducers({
    submit: submiteReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduces, composeEnhancers(applyMiddleware(thunkMiddlware)
  ));

  window.__store__ = store

export default store