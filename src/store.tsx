import { combineReducers , createStore , applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer'

const initialState = {};

const middleware = [thunk];

const allReducers = combineReducers(
    {
        user : userReducer,
    }
)

const store = createStore(
    allReducers,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
)

export default store