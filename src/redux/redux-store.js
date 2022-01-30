import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddlware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


let reduces = combineReducers({
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduces, composeEnhancers(applyMiddleware(thunkMiddlware)
  ));

window.__store__ = store

export default store