import React from 'react';

function Message(props){
  return (
    <div>
      <div className = "message-mega">{props.user}</div>
      <div className = "message-content">{props.text}</div>
      <br/>
    </div>
  )
}

export default Message