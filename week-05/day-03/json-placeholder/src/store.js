import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer'


const rootreducer = combineReducers({
  reducer,
})

export default createStore(rootreducer, applyMiddleware(thunk))

// const store = createStore(reducer, applyMiddleware(thunk));
// store.subscribe(() => {console.log(store.getState)});
// store.dispatch(fetchUsers);