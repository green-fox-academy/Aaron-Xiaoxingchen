import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import poster from './redux/poster'

const rootReducer = combineReducers({
  poster
})

export default createStore(rootReducer, applyMiddleware(thunk))