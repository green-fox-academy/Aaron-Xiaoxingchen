export const FETCH_OPTIONS_SUCCESS = 'FETCH_OPTION_SUCCESS';
export const FETCH_OPTIONS_FAILURE = 'FETCH_OPTIONS_FAILURE';

export const CREATE_VOTE_SUCCESS = 'CREATE_VOTE_SUCCESS';
export const CREATE_VOTE_FAILURE = 'CREATE_VOTE_FAILURE';

const API_URL = 'http://localhost:3000';

export function fetchOptions(){
  return(function(dispatch){
    fetch(`${API_URL}/poll`)
      .then(response => {
        if(response.status !== 200){
          throw new Error(`can't fetch polls`);
        }
        return response.json();
      })
      .then(response => dispatch({type: FETCH_OPTIONS_SUCCESS, payLoad: response}))
      .catch(error => dispatch({type: FETCH_OPTIONS_FAILURE, payLoad: error.messages}))
  })
}

export function createVote(id){
  return (function(dispatch){
    fetch(`${API_URL}/vote/${id}`, {
      method: 'POST',
      body: JSON.stringify({id}),
      headers: {
        'content-type' : "application/json"
      }
    })
    .then(response => {
      if(response.status === 201){
        response.json();
      }
      throw new Error(`can't post`);
    })
    .then(response => dispatch({type: CREATE_VOTE_SUCCESS, payLoad: response}))
    .catch(error => dispatch({type: CREATE_VOTE_FAILURE, payLoad: error.messages}))
  })
}