import React from 'react';
import downvote from '../../assets/downvote.png';
import upvote from '../../assets/upvote.png';
import {createVote, deletePost} from '../../redux/actionCreator'
import {useDispatch} from 'react-redux';


export default function PostItem(props){
  const dispatch = useDispatch();

  return (
    <div className = "post">
      <div className = "post-vote">
        <button className = "vote up" onClick = {() => dispatch(createVote(props.post_id ,'upvote'))}><img src= {upvote} alt = "up"/></button>
        <span>{props.score}</span>
        <button className = "vote down" onClick = {() => dispatch(createVote(props.post_id, 'downvote'))}><img src={downvote} alt = "down"/></button>
      </div>
      <div className = "post-content">
        <div className = "post-title">
          <a href = {props.url}>{props.title}</a>
          <button onClick = {() => dispatch(deletePost(props.post_id))}>remove</button>
        </div>
      </div>
    </div>
  )
}