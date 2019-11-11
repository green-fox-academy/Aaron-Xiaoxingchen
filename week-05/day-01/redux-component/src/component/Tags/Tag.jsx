import React from 'react'

export default function Tag(props){
  return(
    <span className="tag" style = {{backgroundColor : props.color}}>{props.tag}</span>
  )
}