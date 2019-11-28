import {FETCH_POST_SUCCESS,FETCH_POST_FAILURE, CREATE_POST_FAILURE, CREATE_POST_SUCCESS, CREATE_VOTE_SUCCESS, CREATE_VOTE_FAILURE, DELETE_POST_SUCCESS, DELETE_POST_FAILURE} from './actionCreator';

export default function poster(state = [], action){
  switch(action.type){
    case FETCH_POST_SUCCESS :
      return [...action.payLoad.posts];
    case CREATE_POST_SUCCESS:
      return [...state, action.payLoad];
    case CREATE_VOTE_SUCCESS:
      return [...action.payLoad.posts]
    case DELETE_POST_SUCCESS:
      return [...state.filter((item) => item.post_id !== action.payLoad)]
    default:
      return state;
  }
}