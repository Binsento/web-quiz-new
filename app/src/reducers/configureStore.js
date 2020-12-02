
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const persistMiddleware = ({ getState }) => next => action => {
    localStorage.setItem('myUserState', JSON.stringify(getState().user))
    return next(action);
}

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, persistMiddleware))

const store = createStore(reducer, {}, enhancer)

export default store