import React,{useState, useEffect} from 'react';
import './App.css';

const API_KEY = '5a20024f21704420932a0f2909fe99a4';
const requestURL = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-06&sortBy=publishedAt&apiKey=${API_KEY}`;

function App(){
  const [posts, setPosts] = useState([]);
  const [load ,setLoad] = useState(false);

  useEffect(() =>{
    fetch(`http://slowwy.greenfox.academy/delay/3000/url/${requestURL}`)
      .then(res => res.json())
      .then(res => setPosts(res.articles), setLoad(true))
  },[]);

  return (
    <div className="App">
      <div className="posts">
        {load
        ?<div class="lds-dual-ring"></div>
        :posts.map(post=>(<li key={post.title}>{post.title}</li>))
        }
      </div>
    </div>
  );
}

export default App;
