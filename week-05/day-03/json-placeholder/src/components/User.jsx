import React from 'react'

function User(props){
  return(
    <div>
      <a target = "_blank" href="#" rel = "noopener noreferrer">{props.username}</a>
      <p>{props.body}</p>
    </div>
  )
}

export default User;