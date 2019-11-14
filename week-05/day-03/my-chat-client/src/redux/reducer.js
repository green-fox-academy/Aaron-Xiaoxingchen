import {RECEIVE_MESSAGE, FETCH_MESSAGE_FAILURE,SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE} from './actionCreator';

const initialState={
  loading:false,
  messages:[],
  error:'',
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case RECEIVE_MESSAGE:
      return{
        ...state,
        messages: action.payLoad,
      }
    case FETCH_MESSAGE_FAILURE:
      return{
        ...state,
        error: action.payLoad,
      }
    case SEND_MESSAGE_SUCCESS:
      return{
        ...state,
        messages: [...state.messages, action.payLoad]
      }
    case SEND_MESSAGE_FAILURE:
      return{
        ...state,
        error: action.payLoad,
      }
    default:
      return state
  }
}