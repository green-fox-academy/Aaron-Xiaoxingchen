import {INCREASE,DECREASE,SET,RESET} from './actionCreator';

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
    default:
      return state
  }   
} 