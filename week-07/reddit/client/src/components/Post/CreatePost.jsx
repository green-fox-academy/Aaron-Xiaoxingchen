import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import {createPost} from '../../redux/actionCreator'
import {Link} from 'react-router-dom';


export default function CreatePost(){
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  return (
    <div className = "create-post">
      title
      <input placeholder = "title" onChange = {(event) => setTitle(event.target.value)}></input>
      URL
      <input placeholder = "url" onChange = {(event) => setUrl(event.target.value)}></input>
      <Link className="post-button" onClick= {()=>dispatch(createPost(title, url))} to="/">Submit</Link>
    </div>
  )
}