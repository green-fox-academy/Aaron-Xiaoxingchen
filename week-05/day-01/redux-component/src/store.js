import { createStore, combineReducers } from 'redux';

import calculator from './component/Counter/calculator';
import tagCounter from './component/Tags/tagCounter'

export default createStore(
  combineReducers({
    calculator,
    tagCounter,
  })
);