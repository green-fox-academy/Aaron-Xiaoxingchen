import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPost} from '../../redux/actionCreator';
import PostItem from './PostItem';
import {Link} from 'react-router-dom';


export default function PostList(){
  const dispatch = useDispatch();
  const posts = useSelector(state => state.poster);

  useEffect(() => {
    dispatch(fetchPost());
  })

  return (
    <div className = "home">
      <div className = "post-list">
        {posts.map((post) =><PostItem key={post.id} {...post}/>)}
      </div>
      <div className = "sidebar">
        <Link className = "create-post-button" to = "/submit">SUBMIT A NEW POST</Link>
        <div className = "about">
          <p>ABOUT <span>r/space</span></p>
          <ul>
            <p>Share & discuss informative content on</p>
            <li>Astrophysics</li>
            <li>Cosmology</li>
            <li>Space Exploration</li>
            <li>Planetary Science</li>
            <li>Astrobiology</li>
          </ul>
        </div>
      </div>
    </div>
  )
}