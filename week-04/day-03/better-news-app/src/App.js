import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      country: 'china',
      article:[],
    }
    this.item = '';
  }
  componentDidMount(){
    const API_KEY = '5a20024f21704420932a0f2909fe99a4';
    const requestURL = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=business&apiKey=${API_KEY}`;

    fetch(requestURL)
      .then(res => res.json)
      .then(res => this.setState({
        article: [...res.articles]
      }))
  }
  componentDidUpdate(preProps, preState){
    const API_KEY = '5a20024f21704420932a0f2909fe99a4';
    const requestURL = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=business&apiKey=${API_KEY}`;

    if(this.state.country !== preState.country){
      fetch(requestURL)
        .then(res => res.json)
        .then(res => this.setState({
          article: [...res.articles]
        }))
    }
  }
  render(){
    return(
    <div className="App">
      <header>
        <input type="text" onChange={event => this.item = event.target.value}></input>
        <button onClick={()=>this.setState({country: this.item})}>Add</button>
      </header>
      <main>
          <ul>
            {this.state.article.map((e,i) => (
              <li key={i}> {e.title} </li>
            ))}
          </ul>
        </main>
    </div>
    )
  }

}

export default App;
