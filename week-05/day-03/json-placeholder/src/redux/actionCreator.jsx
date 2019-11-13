import axios from 'axios'

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersRequest = () =>{
  return {type : FETCH_USERS_REQUEST }
}

export const fetchUsersSuccess = users =>{
  return {
    type: FETCH_USERS_SUCCESS, 
    payLoad : users,
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payLoad: error,
    
  } 
}

export const fetchUsers = () => {
  return function(dispatch){
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        //response data is the array of users
        const users = response.data;
        dispatch(fetchUsersSuccess(users.slice(0,10)))
      })
      .catch(error => {
        //error message is the error describtion
        dispatch(fetchUsersFailure(error.message))
      })
  }
}