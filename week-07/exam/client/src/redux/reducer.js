import { FETCH_OPTIONS_SUCCESS ,CREATE_VOTE_SUCCESS} from './actionCreator'

const initialState = {
  question: "",
  options: []
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case FETCH_OPTIONS_SUCCESS:
      return {
        question: action.payLoad.question,
        options:[...action.payLoad.options]
      }
    case CREATE_VOTE_SUCCESS:
      return {
        ...state, 
        options: [...action.payLoad.options]
      }
    default:
      return state;
  }
}