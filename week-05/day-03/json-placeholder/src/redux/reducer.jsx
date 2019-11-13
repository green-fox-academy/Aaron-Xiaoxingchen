import {FETCH_USERS_REQUEST, FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS} from './actionCreator'

const initialState = {
  loading: false,
  users: [],
  error:'',
}

export default function(state = initialState, action) {

  switch(action.type){
    case FETCH_USERS_REQUEST:
      return{
        ...state,
        loading :true,
      }
    case FETCH_USERS_SUCCESS:
      return{
        loading: false,
        users: action.payLoad,
        error: '',
      }
    case FETCH_USERS_FAILURE:
      return{
        loading: false,
        users: [],
        error: action.payLoad,
      }
    default: 
    return state;
  }
}