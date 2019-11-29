import React from 'react'

export default function PostItem(props){
  var votebar = {
    backgroundColor: "blue",
    height: `30px`,
    width: `calc(100px * ${props.votes})`
  };

  return (
    <div className = "poll-item">
      <div className = "title">{props.name} : {props.votes} votes</div>
      <div style ={votebar}></div>
    </div>
  )
}