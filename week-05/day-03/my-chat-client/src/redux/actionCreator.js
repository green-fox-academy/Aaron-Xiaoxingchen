import axios from 'axios'

export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const GET_MESSAGE = 'GET_MESSAGE';
export const FETCH_MESSAGE_FAILURE = 'FETCH_MESSAGE_FAILURE';

export function getessage(){
  return{type : GET_MESSAGE};
}

export function receiveMessage(messages){
  return { type: RECEIVE_MESSAGE, payLoad: messages}
}

export function fetchMessageFailure(error){
  return {type: FETCH_MESSAGE_FAILURE, payLoad: error}
}
export function fetchMessage(){
  return(function(dispatch){
      dispatch(getessage())
      axios.get('https://stream-vanadium.glitch.me/messages')
        .then(response => {
          dispatch(receiveMessage(response.data.messages.sort((a,b) => (a.id - b.id))))
        })
        .catch(error => {
          dispatch(fetchMessageFailure(error))
        })
    }
  )
}

export function sendMessage(text){
  return function(dispatch){
    fetch('https://stream-vanadium.glitch.me/messages' ,{
      method:'POST',
      body: JSON.stringify({user : 'Aaron', text}),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      if(response.status !== 200){
        throw new Error(`can't send message`);
      }
      return response.json();
    })
    .then(response => dispatch({type: SEND_MESSAGE_SUCCESS, payLoad: response}))
    .catch(error => dispatch({type: SEND_MESSAGE_FAILURE, payLoad: error}))
  }
}



