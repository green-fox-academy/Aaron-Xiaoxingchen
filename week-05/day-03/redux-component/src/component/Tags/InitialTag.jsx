import React from 'react';
import {useSelector} from 'react-redux';
import Tag from './Tag';


function InitialTag(){
  const tags = useSelector(state => state.tagCounter.tags)

  return (
    <div>
      <h1>Tags</h1>
      <ul>
      {tags.map((tag, index) => <li key={index}><Tag tag={tag} color="white"/></li>)}
      </ul>
    </div>
  )

}

export default InitialTag;