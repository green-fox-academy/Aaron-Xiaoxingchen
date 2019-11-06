import React,{useState, useEffect} from 'react';
import './App.css';
import Article from './Article'

const API_KEY = '5a20024f21704420932a0f2909fe99a4';
const requestURL = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-06&sortBy=publishedAt&apiKey=${API_KEY}`;

function App(){
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    fetch(`http://slowwy.greenfox.academy/delay/3000/url/${requestURL}`)
      .then(res => res.json)
      .then(res => setPosts(res.articles))
  },[]);

  return (
    <div className="App">
      <div className="posts">
        {posts.length === 0
        ?<div class="lds-dual-ring"></div>
        :posts.map(post=><Article key={post.title}{...post}/>)
        }
      </div>
    </div>
  );
}

export default App;
