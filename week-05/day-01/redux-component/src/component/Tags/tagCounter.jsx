import {ADD_TAG, REMOVE_TAG, REMOVE_TAGS} from './actionCreator';

const initState = {
  counter : 0,
  tags:['blue', 'bold', 'hoister'],
}

export default function tagCounter(state = initState, action){
  switch(action.type){
    case ADD_TAG:
      if(!state.tags.find(item => item === action.tag)){
        return {...state, tags: [...state.tags, action.tag]}
      }
      break;
    case REMOVE_TAG:
      if(state.tags.find(item => item === action.tag)){
        return {...state, tags: state.tags.filter(item => item !== action.tag)}
      }
      break;
    case REMOVE_TAGS:
      return{...state, tags:[]}
    default:
      return state
  }   
}
