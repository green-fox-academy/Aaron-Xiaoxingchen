import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {sendMessage} from '../redux/actionCreator'

function MessageSender(){

  const [text, setText] = useState('');
  const dispitch = useDispatch();

  function handleMessgeSender(event){
    if(text !== ''){
      event.preventDefault();
      dispitch(sendMessage(text))
      setText('');
    }
  }

  return(
    <div className = "message-sender">
      <textarea value = {text} onChange = {(event) => setText(event.target.value)}></textarea>
      <label>
      <button className = "button" onClick = {handleMessgeSender}>Send</button>
      </label>    
    </div>
  )
}

export default MessageSender;