import React from 'react'

export default function Article(props){
  return (
    <article>
      <a className="title" target="_blank" href={props.url} rel="noopener noreferrer">{props.title}</a>
      <p>{props.description}</p>
    </article>
  )
}