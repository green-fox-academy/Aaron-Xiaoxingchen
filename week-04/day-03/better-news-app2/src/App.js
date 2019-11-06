import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      article:[],
      load:false,
    }
  }
  componentDidMount(){
    const API_KEY = '5a20024f21704420932a0f2909fe99a4'
    const requestURL = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-06&sortBy=publishedAt&apiKey=${API_KEY}`
    fetch(`http://slowwy.greenfox.academy/delay/3000/url/${requestURL}`)
      .then(res => res.json())
      .then(res => 
        this.setState({
        article:[...res.articles],
        load:true,
      }))
  }
  render(){
    return(
      <div className="App">
        <ul>
          {this.state.load
          ?(this.state.article.map(post=>(<li key={post.title}>{post.title}</li>)))
          :<div className="lds-dual-ring"></div>}
        </ul>
      </div>
    )
  }
}

export default App;
