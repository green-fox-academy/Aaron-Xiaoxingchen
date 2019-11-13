import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducer'

const rootReducer = combineReducers({
  reducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))