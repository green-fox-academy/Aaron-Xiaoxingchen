import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import calculator from './component/Counter/calculator';
import tagCounter from './component/Tags/tagCounter'

const rootreducer =  combineReducers({
    calculator,
    tagCounter,
})

export default createStore(rootreducer, applyMiddleware(thunk))


