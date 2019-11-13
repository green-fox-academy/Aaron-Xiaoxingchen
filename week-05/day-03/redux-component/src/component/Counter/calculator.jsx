import {INCREASE,DECREASE,SET,RESET,ASYNCINCREASER} from './actionCreator';

export default function calculator(state = 0, action){
  switch(action.type){
    case INCREASE:
      return state + 1
    case DECREASE:
      return state - 1
    case SET:
      return action.amount
    case RESET:
      return 0
    case ASYNC_INCREASE:
        return state + action.amount;
    default:
      return state
  }   
} 