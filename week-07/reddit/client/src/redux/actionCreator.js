export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const CREATE_VOTE_SUCCESS = 'CREATE_VOTE_SUCCESS';
export const CREATE_VOTE_FAILURE = 'CREATE_VOTE_FAILURE';

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

const API_URL = 'http://localhost:3000';

export function fetchPost(){
  return (function(dispatch){
    fetch(`${API_URL}/posts`)
      .then(response =>{
        if(response.status !== 200){
          throw new Error(`can't get posts`);
        }
        return response.json();
      })
      .then(response => dispatch({type: FETCH_POST_SUCCESS, payLoad: response}))
      .catch(error => dispatch({type: FETCH_POST_FAILURE, payLoad: error.messages}))
  })
}

export function createPost(title, url){
  return (function(dispatch){
    fetch(`${API_URL}/posts` , {
      method : 'POST',
      body: JSON.stringify({title, url}),
      headers: {
        'content-type' : 'application/json'
      }
    })
    .then(response => {
      if(response.status === 201){
        return response.json();
      }
      throw new Error(`can't create post`);
    })
    .then(response => dispatch({type: CREATE_POST_SUCCESS, payLoad: response}))
    .catch(error => dispatch({type: CREATE_POST_FAILURE, payLoad: error}));
  })
}

export function createVote(post_id, behavior){
  return (function(dispatch){
    fetch(`${API_URL}/posts/${post_id}/${behavior}`, {
      method: 'PUT',
      body: JSON.stringify({post_id}),
      headers: {
        'content-type' : 'application/json'
      }
    })
    .then(response =>{
      if(response.status === 201){
        return response.json();
      }
      throw new Error(`can't update successfully`);
    })
    .then(response => dispatch({type: CREATE_VOTE_SUCCESS, payLoad: response}))
    .catch(error => dispatch({type: CREATE_VOTE_FAILURE, payLoad: error}))
  })
}

export function deletePost(post_id){
  return (function(dispatch){
    fetch(`${API_URL}/posts/${post_id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if(response.status === 200){
        return response.json();
      }
      throw new Error(`can't delete successfully`);
    })
    .then(response => dispatch({type: DELETE_POST_SUCCESS, payLoad: parseInt(post_id)}))
    .catch(error => dispatch({type: DELETE_POST_FAILURE, payLoad: error}))
  })
}

